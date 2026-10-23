import Link from "next/link";
import { BUSINESS, REVIEWER } from "@/data/business";

// One-line reviewer credit under the answer block on money pages and posts.
// Visible E-E-A-T signal; the matching Person schema lives in app/layout.jsx.
export default function ReviewedBy({ className = "" }) {
  return (
    <p className={`mt-4 text-sm text-steel ${className}`.trim()}>
      Reviewed by{" "}
      <Link href="/about" className="font-semibold text-ink hover:text-signal-600">
        {REVIEWER.name}
      </Link>
      , {REVIEWER.jobTitle}, {BUSINESS.name}
    </p>
  );
}
