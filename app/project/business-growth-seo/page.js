import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";

const project = getProjectBySlug("business-growth-seo");

export const metadata = {
  title: "Business Growth SEO Campaign – Case Study | BrandKarlo",
  description:
    "See how BrandKarlo's SEO campaign grew organic traffic by 240% for a local business.",
  alternates: {
    canonical: "/project/business-growth-seo",
  },
};

export default function Page() {
  return <ProjectDetail project={project} />;
}
