import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";
const post = getPostBySlug("social-media-trends-to-watch-in-2026-for-businesses");
export const metadata = {
  title: { absolute: "Social Media Trends for Businesses in 2026 | BrandKarlo" },
  description:
    "The social media trends businesses need to know in 2026, from short-form video to AI-assisted content and community-first marketing.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/social-media-trends-to-watch-in-2026-for-businesses",
  },
  openGraph: {
    type: "article",
    title: "Social Media Trends for Businesses in 2026 | BrandKarlo",
    description: "The social media trends businesses need to know in 2026, from short-form video to AI-assisted content and community-first marketing.",
    url: "https://www.brandkarlo.in/blog/social-media-trends-to-watch-in-2026-for-businesses",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Trends for Businesses in 2026 | BrandKarlo",
    description: "The social media trends businesses need to know in 2026, from short-form video to AI-assisted content and community-first marketing.",
  },
};
export default function Page() {
  return <BlogDetail post={post} />;
}
