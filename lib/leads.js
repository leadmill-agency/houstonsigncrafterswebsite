"use server";

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

  const fields = { name, email, phone, company, signType, message };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Dev/preview without a key: don't fail the user, just log.
    console.warn(`[lead:${kind}] RESEND_API_KEY missing — not sent`, fields);
    return { ok: true, message: SUCCESS, _devNote: "Email not sent (RESEND_API_KEY missing)." };
  }

  try {
    const resend = new Resend(apiKey);

    // 1) Notify the business.
    const { error: notifyError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: kindMeta.subject(name),
      html: notificationHtml({ kindMeta, fields }),
    });
    if (notifyError) {
      console.error(`[lead:${kind}] notify error:`, notifyError);
      return { ok: false, message: "Something went wrong. Please call us instead." };
    }

    // 2) Auto-responder to the lead (best-effort — don't fail the submit if it errors).
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

    // 3) Newsletter list-building via beehiiv (best-effort).
    await subscribeToBeehiiv(email);

    return { ok: true, message: SUCCESS };
  } catch (err) {
    console.error(`[lead:${kind}] unexpected error:`, err);
    return { ok: false, message: "Something went wrong. Please call us instead." };
  }
}
