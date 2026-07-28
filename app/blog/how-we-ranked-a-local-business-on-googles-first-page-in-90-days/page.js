import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("how-we-ranked-a-local-business-on-googles-first-page-in-90-days");

export const metadata = {
  title: { absolute: "Local SEO Case Study: #1 Ranking in 90 Days | BrandKarlo" },
  description:
    "A step-by-step walkthrough of a local business SEO campaign: Google Business Profile fixes, reviews, content, and local citations over 90 days.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/how-we-ranked-a-local-business-on-googles-first-page-in-90-days",
  },
  openGraph: {
    type: "article",
    title: "Local SEO Case Study: #1 Ranking in 90 Days | BrandKarlo",
    description:
      "A step-by-step walkthrough of a local business SEO campaign: Google Business Profile fixes, reviews, content, and local citations over 90 days.",
    url: "https://www.brandkarlo.in/blog/how-we-ranked-a-local-business-on-googles-first-page-in-90-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Case Study: #1 Ranking in 90 Days | BrandKarlo",
    description:
      "A step-by-step walkthrough of a local business SEO campaign: Google Business Profile fixes, reviews, content, and local citations over 90 days.",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
