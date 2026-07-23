import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";
const project = getProjectBySlug("iamnitinsingh-portfolio");
export const metadata = {
  title: { absolute: "Iamnitinsingh.in Portfolio Website – Case Study | BrandKarlo" },
  description:
    "See how BrandKarlo built a fast, SEO-optimized personal portfolio website for a full-stack developer.",
  alternates: {
    canonical: "https://www.brandkarlo.in/project/iamnitinsingh-portfolio",
  },
  openGraph: {
    type: "website",
    title: "Iamnitinsingh.in Portfolio Website – Case Study | BrandKarlo",
    description: "See how BrandKarlo built a fast, SEO-optimized personal portfolio website for a full-stack developer.",
    url: "https://www.brandkarlo.in/project/iamnitinsingh-portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iamnitinsingh.in Portfolio Website – Case Study | BrandKarlo",
    description: "See how BrandKarlo built a fast, SEO-optimized personal portfolio website for a full-stack developer.",
  },
};
export default function Page() {
  return <ProjectDetail project={project} />;
}
