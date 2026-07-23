import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("how-strong-branding-builds-trust-and-drives-sales");

export const metadata = {
  title: "How Strong Branding Builds Trust and Drives Sales | BrandKarlo Blog",
  description:
    "Why strong branding matters for trust and sales, and how consistent brand identity translates into real business growth.",
  alternates: {
    canonical: "/blog/how-strong-branding-builds-trust-and-drives-sales",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
