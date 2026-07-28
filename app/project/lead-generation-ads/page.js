import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";
const project = getProjectBySlug("lead-generation-ads");
export const metadata = {
  title: { absolute: "Lead Generation Google Ads Case Study | BrandKarlo" },
  description:
    "See how BrandKarlo's Google Ads campaign lowered cost-per-lead and drove qualified inquiries.",
  alternates: {
    canonical: "https://www.brandkarlo.in/project/lead-generation-ads",
  },
  openGraph: {
    type: "website",
    title: "Lead Generation Google Ads Case Study | BrandKarlo",
    description: "See how BrandKarlo's Google Ads campaign lowered cost-per-lead and drove qualified inquiries.",
    url: "https://www.brandkarlo.in/project/lead-generation-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Google Ads Case Study | BrandKarlo",
    description: "See how BrandKarlo's Google Ads campaign lowered cost-per-lead and drove qualified inquiries.",
  },
};
export default function Page() {
  return <ProjectDetail project={project} />;
}
