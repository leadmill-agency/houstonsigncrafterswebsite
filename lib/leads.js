"use server";

import { randomUUID } from "crypto";
import { Resend } from "resend";
import { BUSINESS } from "@/data/business";

// Unified lead handler for every form on the site (quote, free mockup, guide
// download, general contact). One audited path so notification + auto-responder
// + list-building behave identically everywhere (playbook Field Note #8: do the
// thing once, consistently).
//
// Email split:
//   - Resend  → automated/transactional email (lead notification + auto-responder)
//   - beehiiv → the weekly newsletter list (lead emails are subscribed here)
//
// Env vars (see ENVIRONMENT.md):
//   RESEND_API_KEY         — required to actually send transactional email
//   RESEND_FROM_EMAIL      — verified sender, e.g. "Houston Sign Crafters <noreply@houstonsigncrafters.com>"
//   RESEND_TO_EMAIL        — where lead notifications land (defaults to BUSINESS.email)
//   BEEHIIV_API_KEY        — optional; if set with the publication ID, leads are added to the newsletter
//   BEEHIIV_PUBLICATION_ID — optional; the beehiiv publication to subscribe leads to

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Houston Sign Crafters <onboarding@resend.dev>";
const TO_EMAIL = process.env.RESEND_TO_EMAIL || BUSINESS.email;

const KINDS = {
  quote: { label: "Quote request", subject: (n) => `New quote request from ${n}`, source: "Instant quote tool" },
  mockup: { label: "Free mockup request", subject: (n) => `Free mockup request from ${n}`, source: "Free design mockup offer" },
  guide: { label: "Guide download", subject: (n) => `Guide download from ${n}`, source: "Lead magnet — downloadable guide" },
  contact: { label: "Contact inquiry", subject: (n) => `New contact inquiry from ${n}`, source: "Contact page" },
};

const SUCCESS = "Thanks — we'll be in touch within one business day.";

function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function notificationHtml({ kindMeta, fields }) {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 0;color:#5b6573;font-size:13px;vertical-align:top;width:150px;text-transform:capitalize;"><strong>${escapeHtml(
          k.replace(/([A-Z])/g, " $1")
        )}</strong></td><td style="padding:8px 0;font-size:14px;white-space:pre-wrap;">${escapeHtml(v)}</td></tr>`
    )
    .join("");
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#0b2545;border-bottom:2px solid #f59e0b;padding-bottom:8px;">${kindMeta.label}</h2>
      <p style="color:#5b6573;font-size:13px;">Submitted via ${kindMeta.source} on the Houston Sign Crafters website.</p>
      <table style="width:100%;border-collapse:collapse;margin-top:12px;">${rows}</table>
    </div>`;
}

function autoResponderHtml({ name, kind }) {
  const intro =
    kind === "guide"
      ? "Thanks for downloading our guide — your copy is on the way."
      : kind === "mockup"
      ? "Thanks for requesting a free design mockup."
      : "Thanks for reaching out to Houston Sign Crafters.";
  const next =
    kind === "guide"
      ? "We've also added you to our list so you get occasional Houston signage tips. If you have a project in mind, just reply to this email."
      : "One of our team members will review your request and get back to you within one business day with next steps. If it's urgent, call us anytime.";
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a;">
      <h2 style="color:#0b2545;">Hi ${escapeHtml(name || "there")},</h2>
      <p style="font-size:15px;line-height:1.7;">${intro}</p>
      <p style="font-size:15px;line-height:1.7;">${next}</p>
      <p style="font-size:15px;line-height:1.7;margin-top:20px;">
        — The Houston Sign Crafters team<br>
        <a href="${BUSINESS.phoneHref}" style="color:#0b2545;">${BUSINESS.phone}</a><br>
        <a href="${BUSINESS.url}" style="color:#0b2545;">${BUSINESS.url.replace("https://", "")}</a>
      </p>
    </div>`;
}

// Subscribe an email to the beehiiv newsletter. No-ops cleanly if the beehiiv
// env vars aren't set, so dev/preview works without them. Best-effort: a failure
// here never blocks the lead submission.
async function subscribeToBeehiiv(email) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;
  if (!apiKey || !pubId) return;
  try {
    const res = await fetch(`https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: "houstonsigncrafters.com",
        referring_site: "houstonsigncrafters.com",
      }),
    });
    if (!res.ok) console.error("[beehiiv] subscribe failed:", res.status, await res.text());
  } catch (e) {
    console.error("[beehiiv] subscribe error:", e);
  }
}

// --- Durable sinks (each best-effort; no-ops cleanly if its env is unset) ---

// Post the lead into the existing HSC Lead OS CRM (Railway) — the SAME intake
// that already drives the Slack lead card + Google-Sheet mirror + attribution
// dashboard for Meta/Framer leads. So a website lead flows through the identical
// pipeline (no new sheet/webhook needed). Endpoint: POST /api/leads/intake with
// `Authorization: Bearer <CRM_INTAKE_SECRET>`. The CRM's normalize.py is
// alias-tolerant, so plain field names map cleanly; event_id gives idempotency.
async function sendToCRM(record) {
  const base = process.env.LEAD_OS_INTAKE_URL;
  const secret = process.env.CRM_INTAKE_SECRET;
  if (!base || !secret) return false;
  try {
    const url =
      `${base.replace(/\/$/, "")}/api/leads/intake` +
      `?source=framer&event_id=${encodeURIComponent(record.id)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify({
        name: record.name,
        email: record.email,
        phone: record.phone,
        company: record.company,
        service_type: record.signType,
        // heardAbout rides inside the message so it shows on the Slack lead
        // card without needing a CRM schema change (normalize.py has no alias
        // for it; unknown top-level keys aren't surfaced).
        message: [record.message, record.heardAbout ? `[How they heard about us: ${record.heardAbout}]` : ""]
          .filter(Boolean)
          .join("\n\n"),
        landing_page: record.source,   // which form/page (kindMeta.source)
        utm_source: "houstonsigncrafters.com",
      }),
    });
    if (!res.ok) {
      console.error("[crm] intake failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (e) {
    console.error("[crm] intake error:", e);
    return false;
  }
}

// Durable backstop in Vercel KV (Upstash Redis REST — no extra dependency), so a
// lead is never lost even if the sheet + email both fail. Provision via Vercel →
// Storage → KV, which auto-injects KV_REST_API_URL + KV_REST_API_TOKEN.
// Stored as an LPUSH list "leads" (newest first) — a full log you can export/replay.
async function backstopToKV(record) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return false;
  try {
    const res = await fetch(`${url}/lpush/leads/${encodeURIComponent(JSON.stringify(record))}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      console.error("[kv] backstop failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (e) {
    console.error("[kv] backstop error:", e);
    return false;
  }
}

// Resend: notify the business + auto-respond to the lead. Returns true if the
// business notification sent (the auto-responder is best-effort on top).
async function notifyByEmail({ kindMeta, fields, email, name, kind }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(`[lead:${kind}] RESEND_API_KEY missing — email not sent`);
    return false;
  }
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: kindMeta.subject(name),
      html: notificationHtml({ kindMeta, fields }),
    });
    if (error) {
      console.error(`[lead:${kind}] notify error:`, error);
      return false;
    }
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "We got your request — Houston Sign Crafters",
        html: autoResponderHtml({ name, kind }),
      });
    } catch (e) {
      console.error(`[lead:${kind}] auto-responder error:`, e);
    }
    return true;
  } catch (e) {
    console.error(`[lead:${kind}] email unexpected error:`, e);
    return false;
  }
}

/**
 * Server action shared by all lead forms. The form must include a hidden
 * `kind` field (quote|mockup|guide|contact) and a honeypot `website` field.
 * Returns { ok, message, errors } for useActionState.
 */
export async function submitLead(_prevState, formData) {
  // Honeypot — bots fill hidden fields; humans don't.
  if (formData.get("website")) return { ok: true, message: SUCCESS };

  const kind = String(formData.get("kind") || "contact").trim();
  const kindMeta = KINDS[kind] || KINDS.contact;

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const signType = String(formData.get("signType") || "").trim();
  const heardAbout = String(formData.get("heardAbout") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const errors = {};
  if (!name) errors.name = "Required";
  if (!email) errors.email = "Required";
  else if (!isEmail(email)) errors.email = "Enter a valid email";
  // Quote + mockup are higher-intent; nudge for a phone number.
  if ((kind === "quote" || kind === "mockup") && !phone) errors.phone = "Required";
  if (Object.keys(errors).length) {
    return { ok: false, errors, message: "Please complete the required fields." };
  }

  const fields = { name, email, phone, company, signType, message, heardAbout };
  const record = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    kind,
    source: kindMeta.source,
    ...fields,
  };

  // Fan the lead out to every sink IN PARALLEL. Each no-ops cleanly if its env
  // isn't set, so the site works with any subset wired up.
  //   CRM   → Lead OS intake → Slack lead card + Sheet mirror + dashboard (primary)
  //   KV    → durable backstop in Vercel (a lead is never lost, even if CRM is down)
  //   Email → optional Resend customer auto-responder + inbox copy
  const [crmOk, kvOk, emailOk] = await Promise.all([
    sendToCRM(record),
    backstopToKV(record),
    notifyByEmail({ kindMeta, fields, email, name, kind }),
  ]);

  // Newsletter (best-effort; never gates success).
  await subscribeToBeehiiv(email);

  // Success ONLY if the lead landed somewhere durable. NEVER fake success on a
  // total miss — that's exactly how leads silently vanish. On total failure we
  // still log the full record so it's recoverable from Vercel logs.
  if (crmOk || kvOk || emailOk) {
    return { ok: true, message: SUCCESS };
  }
  console.error(`[lead:${kind}] ALL SINKS FAILED — lead not captured:`, record);
  return {
    ok: false,
    message: `Something went wrong on our end. Please call us at ${BUSINESS.phone} — we don't want to miss you.`,
  };
}
