import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("content-marketing-strategies-that-actually-work-in-2025");

export const metadata = {
  title: "Content Marketing Strategies That Actually Work in 2025 | BrandKarlo Blog",
  description:
    "Content marketing strategies for 2025 that actually drive rankings, engagement, and conversions — not just publishing volume.",
  alternates: {
    canonical: "/blog/content-marketing-strategies-that-actually-work-in-2025",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
