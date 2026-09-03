"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

// Client-side glue for proposal pages: view + scroll-depth analytics and the
// tracked action buttons (PRD section 9). Event names and properties come from
// the PRD; no personal information goes into events.

export function ProposalTracking({ proposalId, client, value, version }) {
  const fired = useRef({ view: false, s50: false, s90: false });
  useEffect(() => {
    const props = { proposal_id: proposalId, client, location: "Houston", proposal_value: value, proposal_version: version };
    if (!fired.current.view) {
      fired.current.view = true;
      trackEvent("proposal_viewed", props);
    }
    const onScroll = () => {
      const doc = document.documentElement;
      const depth = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (depth >= 0.5 && !fired.current.s50) {
        fired.current.s50 = true;
        trackEvent("proposal_scrolled_50", props);
      }
      if (depth >= 0.9 && !fired.current.s90) {
        fired.current.s90 = true;
        trackEvent("proposal_scrolled_90", props);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [proposalId, client, value, version]);
  return null;
}

export function ProposalAction({ kind, href, className, children, eventProps }) {
  const events = {
    pdf: "proposal_pdf_downloaded",
    agreement: "proposal_agreement_requested",
    email: "proposal_email_clicked",
    phone: "proposal_phone_clicked",
  };
  const handleClick = () => trackEvent(events[kind] || "proposal_click", eventProps);
  const isPdf = kind === "pdf";
  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      {...(isPdf ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
