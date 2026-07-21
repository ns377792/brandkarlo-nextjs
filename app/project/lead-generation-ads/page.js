import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";

const project = getProjectBySlug("lead-generation-ads");

export const metadata = {
  title: "Lead Generation Google Ads Campaign – Case Study | BrandKarlo",
  description:
    "See how BrandKarlo's Google Ads campaign lowered cost-per-lead and drove qualified inquiries.",
  alternates: {
    canonical: "/project/lead-generation-ads",
  },
};

export default function Page() {
  return <ProjectDetail project={project} />;
}
