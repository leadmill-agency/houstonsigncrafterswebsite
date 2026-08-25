import { getAudience } from "@/data/audiences";
import AudiencePage from "@/components/AudiencePage";

const audience = getAudience("property-managers");

export const metadata = {
  title: audience.metaTitle,
  description: audience.metaDescription,
  alternates: { canonical: "/property-managers" },
};

export default function Page() {
  return <AudiencePage audience={audience} />;
}
