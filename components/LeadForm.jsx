"use client";

import { useActionState, useRef, useEffect } from "react";
import { submitLead } from "@/lib/leads";
import { getAllServices } from "@/data/services";
import { trackEvent } from "@/lib/analytics";

const initialState = { ok: null, errors: {}, message: "" };

// One form, four jobs. `kind` (quote|mockup|guide|contact) drives the hidden
// field, which fields show, and the GA4 event name. Wraps the shared
// submitLead server action (lib/leads.js).
export default function LeadForm({
  kind = "contact",
  submitLabel = "Send",
  showCompany = false,
  showSignType = false,
  showMessage = true,
  messageLabel = "Tell us about your project",
  className = "",
}) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const formRef = useRef(null);
  const services = getAllServices();

  useEffect(() => {
    if (state.ok && formRef.current) {
      formRef.current.reset();
      trackEvent("form_submit", { form_name: `lead_${kind}`, form_location: kind });
      if (kind === "quote") trackEvent("generate_lead", { value: 1, currency: "USD" });
    }
  }, [state.ok, kind]);

  const phoneRequired = kind === "quote" || kind === "mockup";

  return (
    <form
      ref={formRef}
      action={formAction}
      className={`rounded-sm border border-fog bg-white p-6 text-left md:p-8 ${className}`}
    >
      <input type="hidden" name="kind" value={kind} />
      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-1 w-1 overflow-hidden" aria-hidden="true">
        <label>Leave blank<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" state={state} />
        <Field label="Email" name="email" type="email" required autoComplete="email" state={state} />
        <Field label="Phone" name="phone" type="tel" required={phoneRequired} autoComplete="tel" state={state} />
        {showCompany && <Field label="Company" name="company" autoComplete="organization" state={state} />}
      </div>

      {showSignType && (
        <div className="mt-4">
          <label className="mb-1.5 block text-xs font-semibold text-carbon">What kind of sign do you need?</label>
          <select
            name="signType"
            defaultValue=""
            className="w-full rounded-sm border border-fog bg-white px-3 py-2 text-sm text-carbon focus:border-ink focus:outline-none"
          >
            <option value="" disabled>Select a sign type…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
            <option value="Not sure / other">Not sure / other</option>
          </select>
        </div>
      )}

      {showMessage && (
        <div className="mt-4">
          <label className="mb-1.5 block text-xs font-semibold text-carbon">{messageLabel}</label>
          <textarea
            name="message"
            rows={4}
            className="w-full resize-y rounded-sm border border-fog px-3 py-2 text-sm text-carbon focus:border-ink focus:outline-none"
          />
        </div>
      )}

      <button type="submit" disabled={pending} className="btn btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
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

function Field({ label, name, type = "text", required = false, autoComplete = "off", state }) {
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
        className="w-full rounded-sm border border-fog px-3 py-2 text-sm text-carbon focus:border-ink focus:outline-none"
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
