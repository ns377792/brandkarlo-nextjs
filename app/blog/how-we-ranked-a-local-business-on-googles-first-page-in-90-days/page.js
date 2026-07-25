import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("how-we-ranked-a-local-business-on-googles-first-page-in-90-days");

export const metadata = {
  title: { absolute: "How We Ranked a Local Business on Google's First Page in 90 Days | BrandKarlo Blog" },
  description:
    "An honest, step-by-step walkthrough of how a local business SEO campaign works over 90 days — from Google Business Profile fixes to reviews, content, and local citations.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/how-we-ranked-a-local-business-on-googles-first-page-in-90-days",
  },
  openGraph: {
    type: "article",
    title: "How We Ranked a Local Business on Google's First Page in 90 Days | BrandKarlo Blog",
    description:
      "An honest, step-by-step walkthrough of how a local business SEO campaign works over 90 days — from Google Business Profile fixes to reviews, content, and local citations.",
    url: "https://www.brandkarlo.in/blog/how-we-ranked-a-local-business-on-googles-first-page-in-90-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Ranked a Local Business on Google's First Page in 90 Days | BrandKarlo Blog",
    description:
      "An honest, step-by-step walkthrough of how a local business SEO campaign works over 90 days — from Google Business Profile fixes to reviews, content, and local citations.",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
