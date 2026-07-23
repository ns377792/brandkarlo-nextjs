import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";
const post = getPostBySlug("how-data-driven-marketing-can-transform-your-business");
export const metadata = {
  title: { absolute: "How Data-Driven Marketing Can Transform Your Business | BrandKarlo Blog" },
  description:
    "How data-driven marketing helps businesses make better decisions, reduce wasted ad spend, and improve ROI across every channel.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/how-data-driven-marketing-can-transform-your-business",
  },
  openGraph: {
    type: "article",
    title: "How Data-Driven Marketing Can Transform Your Business | BrandKarlo Blog",
    description: "How data-driven marketing helps businesses make better decisions, reduce wasted ad spend, and improve ROI across every channel.",
    url: "https://www.brandkarlo.in/blog/how-data-driven-marketing-can-transform-your-business",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Data-Driven Marketing Can Transform Your Business | BrandKarlo Blog",
    description: "How data-driven marketing helps businesses make better decisions, reduce wasted ad spend, and improve ROI across every channel.",
  },
};
export default function Page() {
  return <BlogDetail post={post} />;
}
