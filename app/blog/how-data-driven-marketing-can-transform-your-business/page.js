import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("how-data-driven-marketing-can-transform-your-business");

export const metadata = {
  title: "How Data-Driven Marketing Can Transform Your Business | BrandKarlo Blog",
  description:
    "How data-driven marketing helps businesses make better decisions, reduce wasted ad spend, and improve ROI across every channel.",
  alternates: {
    canonical: "/blog/how-data-driven-marketing-can-transform-your-business",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
