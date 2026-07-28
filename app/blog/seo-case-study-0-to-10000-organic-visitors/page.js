import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("seo-case-study-0-to-10000-organic-visitors");

export const metadata = {
  title: { absolute: "SEO Case Study: 0 to 10,000 Organic Visitors | BrandKarlo" },
  description:
    "Discover how a structured SEO strategy helped grow a website from 0 to 10,000 organic visitors. Learn the exact steps, tools, and best practices.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/seo-case-study-0-to-10000-organic-visitors",
  },
  openGraph: {
    type: "article",
    title: "SEO Case Study: 0 to 10,000 Organic Visitors | BrandKarlo",
    description:
      "Discover how a structured SEO strategy helped grow a website from 0 to 10,000 organic visitors. Learn the exact steps, tools, and best practices.",
    url: "https://www.brandkarlo.in/blog/seo-case-study-0-to-10000-organic-visitors",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Case Study: 0 to 10,000 Organic Visitors | BrandKarlo",
    description:
      "Discover how a structured SEO strategy helped grow a website from 0 to 10,000 organic visitors. Learn the exact steps, tools, and best practices.",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
