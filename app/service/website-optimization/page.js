import { getServiceBySlug } from "@/lib/servicesData";
import ServiceDetail from "@/components/ServiceDetail";
const service = getServiceBySlug("website-optimization");
export const metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: {
    canonical: "https://www.brandkarlo.in/service/website-optimization",
  },
  openGraph: {
    type: "website",
    title: service.metaTitle,
    description: service.metaDescription,
    url: "https://www.brandkarlo.in/service/website-optimization",
  },
  twitter: {
    card: "summary_large_image",
    title: service.metaTitle,
    description: service.metaDescription,
  },
};
export default function Page() {
  return <ServiceDetail service={service} />;
}
