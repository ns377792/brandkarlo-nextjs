import { getServiceBySlug } from "@/lib/servicesData";
import ServiceDetail from "@/components/ServiceDetail";

const service = getServiceBySlug("shopping-ads");

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/service/shopping-ads",
  },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
