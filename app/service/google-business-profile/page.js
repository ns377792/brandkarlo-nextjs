import { getServiceBySlug } from "@/lib/servicesData";
import ServiceDetail from "@/components/ServiceDetail";

const service = getServiceBySlug("google-business-profile");

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/service/google-business-profile",
  },
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
