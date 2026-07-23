import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";
const project = getProjectBySlug("kitabiduniya-branding");
export const metadata = {
  title: { absolute: "Kitabiduniya.com Brand Identity – Case Study | BrandKarlo" },
  description:
    "See how BrandKarlo designed a complete brand identity and packaging system for an organic skincare label.",
  alternates: {
    canonical: "https://www.brandkarlo.in/project/kitabiduniya-branding",
  },
  openGraph: {
    type: "website",
    title: "Kitabiduniya.com Brand Identity – Case Study | BrandKarlo",
    description: "See how BrandKarlo designed a complete brand identity and packaging system for an organic skincare label.",
    url: "https://www.brandkarlo.in/project/kitabiduniya-branding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitabiduniya.com Brand Identity – Case Study | BrandKarlo",
    description: "See how BrandKarlo designed a complete brand identity and packaging system for an organic skincare label.",
  },
};
export default function Page() {
  return <ProjectDetail project={project} />;
}
