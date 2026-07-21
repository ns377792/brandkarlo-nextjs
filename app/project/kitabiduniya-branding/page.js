import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";

const project = getProjectBySlug("kitabiduniya-branding");

export const metadata = {
  title: "Kitabiduniya.com Brand Identity – Case Study | BrandKarlo",
  description:
    "See how BrandKarlo designed a complete brand identity and packaging system for an organic skincare label.",
  alternates: {
    canonical: "/project/kitabiduniya-branding",
  },
};

export default function Page() {
  return <ProjectDetail project={project} />;
}
