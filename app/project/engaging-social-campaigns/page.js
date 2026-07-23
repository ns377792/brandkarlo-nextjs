import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";
const project = getProjectBySlug("engaging-social-campaigns");
export const metadata = {
  title: { absolute: "Engaging Social Media Campaigns – Case Study | BrandKarlo" },
  description:
    "See how BrandKarlo's social media strategy boosted engagement and follower growth across platforms.",
  alternates: {
    canonical: "https://www.brandkarlo.in/project/engaging-social-campaigns",
  },
  openGraph: {
    type: "website",
    title: "Engaging Social Media Campaigns – Case Study | BrandKarlo",
    description: "See how BrandKarlo's social media strategy boosted engagement and follower growth across platforms.",
    url: "https://www.brandkarlo.in/project/engaging-social-campaigns",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engaging Social Media Campaigns – Case Study | BrandKarlo",
    description: "See how BrandKarlo's social media strategy boosted engagement and follower growth across platforms.",
  },
};
export default function Page() {
  return <ProjectDetail project={project} />;
}
