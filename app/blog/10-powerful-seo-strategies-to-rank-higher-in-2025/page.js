import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("10-powerful-seo-strategies-to-rank-higher-in-2025");

export const metadata = {
  title: "10 Powerful SEO Strategies to Rank Higher in 2025 | BrandKarlo Blog",
  description:
    "10 practical, up-to-date SEO strategies businesses can use in 2025 to improve rankings, drive organic traffic, and generate more leads.",
  alternates: {
    canonical: "/blog/10-powerful-seo-strategies-to-rank-higher-in-2025",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
