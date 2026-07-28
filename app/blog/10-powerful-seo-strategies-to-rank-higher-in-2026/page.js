import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";
const post = getPostBySlug("10-powerful-seo-strategies-to-rank-higher-in-2026");
export const metadata = {
  title: { absolute: "10 SEO Strategies to Rank Higher in 2026 | BrandKarlo" },
  description:
    "10 practical, up-to-date SEO strategies businesses can use in 2026 to improve rankings, drive organic traffic, and generate more leads.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/10-powerful-seo-strategies-to-rank-higher-in-2026",
  },
  openGraph: {
    type: "article",
    title: "10 SEO Strategies to Rank Higher in 2026 | BrandKarlo",
    description: "10 practical, up-to-date SEO strategies businesses can use in 2026 to improve rankings, drive organic traffic, and generate more leads.",
    url: "https://www.brandkarlo.in/blog/10-powerful-seo-strategies-to-rank-higher-in-2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "10 SEO Strategies to Rank Higher in 2026 | BrandKarlo",
    description: "10 practical, up-to-date SEO strategies businesses can use in 2026 to improve rankings, drive organic traffic, and generate more leads.",
  },
};
export default function Page() {
  return <BlogDetail post={post} />;
}
