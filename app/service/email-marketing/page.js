import { getServiceBySlug } from "@/lib/servicesData";
import ServiceDetail from "@/components/ServiceDetail";

const service = getServiceBySlug("email-marketing");

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/service/email-marketing",
  },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
