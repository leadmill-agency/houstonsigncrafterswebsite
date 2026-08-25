// Downloadable lead-magnet guides — source of data for /guides/[slug].
//
// HOW TO LAUNCH A NEW GATED GUIDE: add an entry here and drop the PDF in
// /public/guides/. The page gates the download behind the lead form; the
// auto-responder (lib/leads.js) emails the lead the file link.

const GUIDES = {
  "sign-permitting-checklist": {
    slug: "sign-permitting-checklist",
    title: "The Houston Sign Permitting Checklist",
    subtitle: "Everything you need to get your business sign approved in Houston, the first time.",
    metaTitle: "Free Houston Sign Permitting Checklist (PDF)",
    metaDescription:
      "Download our free Houston sign permitting checklist: sizes, illumination rules, landlord criteria, and the documents you need to get your business sign approved.",
    // Drop the actual PDF here before launch; the auto-responder links to it.
    file: "/guides/houston-sign-permitting-checklist.pdf",
    bullets: [
      "Which signs need a City of Houston permit (and which don't)",
      "How to read your lease's sign criteria before you order",
      "Size, height, and illumination rules that trip people up",
      "The documents and drawings you'll need to submit",
      "How long approval really takes, and how to speed it up",
    ],
  },
};

export function getAllGuides() {
  return Object.values(GUIDES);
}

export function getGuide(slug) {
  return GUIDES[slug] || null;
}

export function getGuideSlugs() {
  return Object.keys(GUIDES);
}

export default GUIDES;
