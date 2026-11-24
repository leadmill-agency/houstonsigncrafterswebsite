"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/leads";
import { trackEvent, trackPixel, trackOaiq } from "@/lib/analytics";
import { ATTRIBUTION_FIELDS, getAttribution } from "@/lib/attribution";
import { preparePhotos, setInputFiles, MAX_PHOTOS, MAX_TOTAL_BYTES } from "@/lib/photo";

const initialState = { ok: null, errors: {}, message: "" };

// One form, four jobs. `kind` (quote|mockup|guide|contact) drives the hidden
// field and the analytics event names. Wraps the shared submitLead server
// action (lib/leads.js).
//
// Owner decision (2026-08-24, updated 2026-08-31): every form shows Name,
// Email, Phone, Project Name, and an open comment box. The sign-type and
// "how did you hear about us" selects were cut for conversion; the comment box
// carries that context, and heard-about gets asked on the first call. Legacy
// props (showCompany/showSignType/showMessage) are accepted but ignored so
// existing call sites don't break.
//
// Photo upload (owner request 2026-11-23): optional, up to three photos, on
// every form except the guide download. The site asks visitors to "send a
// photo" in several places and the form had no way to take one. Photos are
// shrunk in the browser (lib/photo.js) and ride the same server action; the
// lead always submits even when a photo can't be attached.
export default function LeadForm({
  kind = "contact",
  submitLabel = "Send",
  messageLabel = "Tell us about your project",
  className = "",
  heading,
  subheading,
}) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const formRef = useRef(null);
  const router = useRouter();
  // Ad attribution captured on arrival (lib/attribution.js) rides along
  // as hidden fields. Loaded in an effect so SSR markup stays stable.
  const [attribution, setAttribution] = useState({});
  useEffect(() => {
    setAttribution(getAttribution());
  }, []);

  const showPhotos = kind !== "guide";
  const photoInput = useRef(null);
  // The file input stays disabled until this script is running. A photo picked
  // before then would skip the shrink step and could be too big to upload,
  // which would fail the whole form. A disabled input is also left out of a
  // no-script submit, so that path still delivers the lead.
  const [photosReady, setPhotosReady] = useState(false);
  useEffect(() => {
    setPhotosReady(true);
  }, []);
  // [{ name, url }] previews of what is attached right now.
  const [photos, setPhotos] = useState([]);
  const [photoBusy, setPhotoBusy] = useState(false);
  const [photoNote, setPhotoNote] = useState("");
  // The prepared File objects, kept so one photo can be removed without re-picking.
  const photoFiles = useRef([]);

  function showAttached(files) {
    setPhotos((old) => {
      old.forEach((p) => URL.revokeObjectURL(p.url));
      return files.map((f) => ({ name: f.name, url: URL.createObjectURL(f) }));
    });
  }

  async function onPhotosPicked(e) {
    const input = e.target;
    if (!input.files?.length) return;
    setPhotoBusy(true);
    setPhotoNote("");
    const { files, dropped } = await preparePhotos(input.files);
    // If the browser can't swap in the small versions, send no photo at all
    // rather than risk an oversized upload that fails the whole form.
    const applied = setInputFiles(input, files);
    if (!applied) input.value = "";
    photoFiles.current = applied ? files : [];
    showAttached(photoFiles.current);
    if (!applied || (dropped > 0 && files.length === 0)) {
      setPhotoNote("We couldn't attach that photo. Send the form anyway and we'll ask you for it.");
    } else if (dropped > 0) {
      setPhotoNote(`We attached ${files.length}. The form takes up to ${MAX_PHOTOS} photos.`);
    }
    setPhotoBusy(false);
  }

  // Last line of defence at submit time: never send an upload that is too
  // big to get through, whatever state the file input is in.
  function guardPhotoSize(e) {
    const input = photoInput.current;
    if (!input?.files?.length) return;
    const total = Array.from(input.files).reduce((sum, f) => sum + f.size, 0);
    if (total <= MAX_TOTAL_BYTES) return;
    e.preventDefault();
    input.value = "";
    photoFiles.current = [];
    showAttached([]);
    setPhotoNote("That photo was too large to attach. Press the button again to send the form without it.");
  }

  function removePhoto(i) {
    const next = photoFiles.current.filter((_, k) => k !== i);
    if (photoInput.current && !setInputFiles(photoInput.current, next)) photoInput.current.value = "";
    photoFiles.current = next;
    showAttached(next);
    setPhotoNote("");
  }

  useEffect(() => {
    if (state.ok && formRef.current) {
      formRef.current.reset();
      photoFiles.current = [];
      setPhotos([]);
      trackEvent("form_submit", { form_name: `lead_${kind}`, form_location: kind });
      if (kind === "quote") trackEvent("generate_lead", { value: 1, currency: "USD" });
      trackPixel("Lead", { content_name: `lead_${kind}` });
      // OpenAI Ads conversion — event_id matches the server-side CAPI event
      // (lib/leads.js) so the platform dedups the pair to one lead_created.
      trackOaiq("lead_created", { type: "customer_action" }, state.leadId ? { event_id: state.leadId } : undefined);
      // Google Ads conversion signal (contractor spec): push the dataLayer
      // event ONCE at the moment of real submit success — the GTM trigger is
      // built on this event, not the /thankyou pageview, so a refresh of the
      // confirmation page can never double-count. Quote forms (homepage, /quote,
      // LPs) share this component, so they all emit `quote_form_success`.
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: kind === "quote" ? "quote_form_success" : `${kind}_form_success`,
        });
      }
      // Then land on the dedicated confirmation page (exact old path).
      router.push("/thankyou");
    }
  }, [state.ok, kind, router]);

  const phoneRequired = kind === "quote" || kind === "mockup";

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={guardPhotoSize}
      className={`rounded-sm bg-white shadow-[0_1px_3px_rgb(13_23_34/0.08),0_14px_32px_-18px_rgb(13_23_34/0.28)] p-6 text-left md:p-8 ${className}`}
    >
      {heading && (
        <div className="mb-5">
          <p className="font-display text-lg font-bold leading-tight text-ink sm:text-xl">{heading}</p>
          {subheading && <p className="mt-2 text-sm leading-relaxed text-steel">{subheading}</p>}
        </div>
      )}
      <input type="hidden" name="kind" value={kind} />
      {ATTRIBUTION_FIELDS.map((f) =>
        attribution[f] ? <input key={f} type="hidden" name={f} value={attribution[f]} /> : null
      )}
      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-1 w-1 overflow-hidden" aria-hidden="true">
        <label>Leave blank<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" state={state} />
        <Field label="Email" name="email" type="email" required autoComplete="email" state={state} />
        <Field label="Phone" name="phone" type="tel" required={phoneRequired} autoComplete="tel" state={state} />
        {/* Owner request 2026-08-31: free-text Project Name. Posts as `company`
            so it rides the existing pipeline (CRM company field + Slack card). */}
        <Field label="Project Name" name="company" autoComplete="organization" placeholder="Business or project name" state={state} />
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-semibold text-carbon">{messageLabel}</label>
        <textarea
          name="message"
          rows={4}
          placeholder="What kind of sign, rough size, and where it's going. Anything helps."
          className="field w-full resize-y rounded-sm border border-fog px-3 py-2 text-sm text-carbon"
        />
      </div>

      {showPhotos && (
        <div className="mt-4">
          <span className="mb-1.5 block text-xs font-semibold text-carbon">
            Photo of your building or current sign <span className="font-normal text-steel">(optional)</span>
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-cloud px-3 py-2 text-sm font-semibold text-ink transition-colors focus-within:bg-fog hover:bg-fog">
              <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M3 6.5h2.6l1.2-1.8h6.4l1.2 1.8H17a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1z" />
                <circle cx="10" cy="11" r="2.8" />
              </svg>
              {photos.length > 0 ? "Change photos" : "Add a photo"}
              <input
                ref={photoInput}
                type="file"
                name="photos"
                accept="image/*"
                multiple
                disabled={!photosReady}
                onChange={onPhotosPicked}
                className="sr-only"
              />
            </label>
            {photoBusy && <span className="text-xs text-steel" aria-live="polite">Preparing photo…</span>}
            {photos.map((p, i) => (
              <span key={p.url} className="relative inline-block">
                {/* Local blob preview of the visitor's own file; next/image can't optimise it. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt={`Attached photo ${i + 1}`} className="h-12 w-12 rounded-sm bg-white object-cover" />
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  aria-label={`Remove photo ${i + 1}`}
                  className="absolute -right-2.5 -top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-ink text-sm font-bold leading-none text-white"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          {photoNote && <p className="mt-2 text-xs text-steel" aria-live="polite">{photoNote}</p>}
        </div>
      )}

      <button type="submit" disabled={pending || photoBusy} className="btn btn-primary btn-lg mt-5 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">
        {pending ? "Sending…" : submitLabel}
      </button>

      {state?.ok === true && (
        <p aria-live="polite" className="mt-4 rounded border border-green-300 bg-green-50 p-3 text-sm font-medium text-green-800">
          {state.message}
        </p>
      )}
      {state?.ok === false && state.message && (
        <p aria-live="polite" className="mt-4 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {state.message}
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", required = false, autoComplete = "off", placeholder, state }) {
  const error = state?.errors?.[name];
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-carbon">
        {label}
        {required && <span className="ml-0.5 text-signal-600" aria-hidden="true">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="field w-full rounded-sm border border-fog px-3 py-2 text-sm text-carbon"
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
