import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";
const post = getPostBySlug("content-marketing-strategies-that-actually-work-in-2026");
export const metadata = {
  title: { absolute: "Content Marketing Strategies for 2026 | BrandKarlo" },
  description:
    "Content marketing strategies for 2026 that actually drive rankings, engagement, and conversions — not just publishing volume.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/content-marketing-strategies-that-actually-work-in-2026",
  },
  openGraph: {
    type: "article",
    title: "Content Marketing Strategies for 2026 | BrandKarlo",
    description: "Content marketing strategies for 2026 that actually drive rankings, engagement, and conversions — not just publishing volume.",
    url: "https://www.brandkarlo.in/blog/content-marketing-strategies-that-actually-work-in-2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Strategies for 2026 | BrandKarlo",
    description: "Content marketing strategies for 2026 that actually drive rankings, engagement, and conversions — not just publishing volume.",
  },
};
export default function Page() {
  return <BlogDetail post={post} />;
}
