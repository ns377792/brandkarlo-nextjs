import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";

const project = getProjectBySlug("engaging-social-campaigns");

export const metadata = {
  title: "Engaging Social Media Campaigns – Case Study | BrandKarlo",
  description:
    "See how BrandKarlo's social media strategy boosted engagement and follower growth across platforms.",
  alternates: {
    canonical: "/project/engaging-social-campaigns",
  },
};

export default function Page() {
  return <ProjectDetail project={project} />;
}
