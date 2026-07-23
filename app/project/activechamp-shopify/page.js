import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";
const project = getProjectBySlug("activechamp-shopify");
export const metadata = {
  title: { absolute: "Activechamp.in Shopify Store – Case Study | BrandKarlo" },
  description:
    "See how BrandKarlo built a high-converting Shopify store for an educational toy eCommerce brand.",
  alternates: {
    canonical: "https://www.brandkarlo.in/project/activechamp-shopify",
  },
  openGraph: {
    type: "website",
    title: "Activechamp.in Shopify Store – Case Study | BrandKarlo",
    description: "See how BrandKarlo built a high-converting Shopify store for an educational toy eCommerce brand.",
    url: "https://www.brandkarlo.in/project/activechamp-shopify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Activechamp.in Shopify Store – Case Study | BrandKarlo",
    description: "See how BrandKarlo built a high-converting Shopify store for an educational toy eCommerce brand.",
  },
};
export default function Page() {
  return <ProjectDetail project={project} />;
}
