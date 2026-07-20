import { getServiceBySlug } from "@/lib/servicesData";
import ServiceDetail from "@/components/ServiceDetail";

const service = getServiceBySlug("google-ads-meta-ads");

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/service/google-ads-meta-ads",
  },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
