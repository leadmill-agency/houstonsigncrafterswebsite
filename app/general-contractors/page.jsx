import { getAudience } from "@/data/audiences";
import AudiencePage from "@/components/AudiencePage";

const audience = getAudience("general-contractors");

export const metadata = {
  title: audience.metaTitle,
  description: audience.metaDescription,
  alternates: { canonical: "/general-contractors" },
};

export default function Page() {
  return <AudiencePage audience={audience} />;
}
