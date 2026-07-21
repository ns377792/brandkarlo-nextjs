import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";

const project = getProjectBySlug("iamnitinsingh-portfolio");

export const metadata = {
  title: "Iamnitinsingh.in Portfolio Website – Case Study | BrandKarlo",
  description:
    "See how BrandKarlo built a fast, SEO-optimized personal portfolio website for a full-stack developer.",
  alternates: {
    canonical: "/project/iamnitinsingh-portfolio",
  },
};

export default function Page() {
  return <ProjectDetail project={project} />;
}
