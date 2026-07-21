import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";

const project = getProjectBySlug("activechamp-shopify");

export const metadata = {
  title: "Activechamp.in Shopify Store – Case Study | BrandKarlo",
  description:
    "See how BrandKarlo built a high-converting Shopify store for an educational toy eCommerce brand.",
  alternates: {
    canonical: "/project/activechamp-shopify",
  },
};

export default function Page() {
  return <ProjectDetail project={project} />;
}
