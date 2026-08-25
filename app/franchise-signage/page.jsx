import { getAudience } from "@/data/audiences";
import AudiencePage from "@/components/AudiencePage";

const audience = getAudience("franchise-signage");

export const metadata = {
  title: audience.metaTitle,
  description: audience.metaDescription,
  alternates: { canonical: "/franchise-signage" },
};

export default function Page() {
  return <AudiencePage audience={audience} />;
}
