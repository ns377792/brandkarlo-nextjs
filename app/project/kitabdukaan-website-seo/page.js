import { getProjectBySlug } from "@/lib/projectsData";
import ProjectDetail from "@/components/ProjectDetail";
const project = getProjectBySlug("kitabdukaan-website-seo");
export const metadata = {
  title: { absolute: "KitabDukaan.in – Shopify Website & SEO Case Study | BrandKarlo" },
  description:
    "See how BrandKarlo built KitabDukaan.in's Shopify online bookstore and laid its SEO foundation for organic growth.",
  alternates: {
    canonical: "https://www.brandkarlo.in/project/kitabdukaan-website-seo",
  },
  openGraph: {
    type: "website",
    title: "KitabDukaan.in – Shopify Website & SEO Case Study | BrandKarlo",
    description: "See how BrandKarlo built KitabDukaan.in's Shopify online bookstore and laid its SEO foundation for organic growth.",
    url: "https://www.brandkarlo.in/project/kitabdukaan-website-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "KitabDukaan.in – Shopify Website & SEO Case Study | BrandKarlo",
    description: "See how BrandKarlo built KitabDukaan.in's Shopify online bookstore and laid its SEO foundation for organic growth.",
  },
};
export default function Page() {
  return <ProjectDetail project={project} />;
}
