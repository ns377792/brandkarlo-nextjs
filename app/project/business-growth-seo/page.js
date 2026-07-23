import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";
const project = getProjectBySlug("business-growth-seo");
export const metadata = {
  title: { absolute: "Business Growth SEO Campaign – Case Study | BrandKarlo" },
  description:
    "See how BrandKarlo's SEO campaign grew organic traffic by 240% for a local business.",
  alternates: {
    canonical: "https://www.brandkarlo.in/project/business-growth-seo",
  },
  openGraph: {
    type: "website",
    title: "Business Growth SEO Campaign – Case Study | BrandKarlo",
    description: "See how BrandKarlo's SEO campaign grew organic traffic by 240% for a local business.",
    url: "https://www.brandkarlo.in/project/business-growth-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Growth SEO Campaign – Case Study | BrandKarlo",
    description: "See how BrandKarlo's SEO campaign grew organic traffic by 240% for a local business.",
  },
};
export default function Page() {
  return <ProjectDetail project={project} />;
}
