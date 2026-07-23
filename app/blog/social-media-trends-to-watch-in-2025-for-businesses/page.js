import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("social-media-trends-to-watch-in-2025-for-businesses");

export const metadata = {
  title: "Social Media Trends to Watch in 2025 for Businesses | BrandKarlo Blog",
  description:
    "The social media trends businesses need to know in 2025 — from short-form video to AI-assisted content and community-first marketing.",
  alternates: {
    canonical: "/blog/social-media-trends-to-watch-in-2025-for-businesses",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
