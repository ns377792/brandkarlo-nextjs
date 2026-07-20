import { getServiceBySlug } from "@/lib/servicesData";
import ServiceDetail from "@/components/ServiceDetail";

const service = getServiceBySlug("seo");

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/service/seo",
  },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
