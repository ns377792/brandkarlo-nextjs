import { getServiceBySlug } from "@/lib/servicesData";
import ServiceDetail from "@/components/ServiceDetail";

const service = getServiceBySlug("website-development");

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/service/website-development",
  },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
