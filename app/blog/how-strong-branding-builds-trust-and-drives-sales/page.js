import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";
const post = getPostBySlug("how-strong-branding-builds-trust-and-drives-sales");
export const metadata = {
  title: { absolute: "How Strong Branding Builds Trust and Drives Sales | BrandKarlo Blog" },
  description:
    "Why strong branding matters for trust and sales, and how consistent brand identity translates into real business growth.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/how-strong-branding-builds-trust-and-drives-sales",
  },
  openGraph: {
    type: "article",
    title: "How Strong Branding Builds Trust and Drives Sales | BrandKarlo Blog",
    description: "Why strong branding matters for trust and sales, and how consistent brand identity translates into real business growth.",
    url: "https://www.brandkarlo.in/blog/how-strong-branding-builds-trust-and-drives-sales",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Strong Branding Builds Trust and Drives Sales | BrandKarlo Blog",
    description: "Why strong branding matters for trust and sales, and how consistent brand identity translates into real business growth.",
  },
};
export default function Page() {
  return <BlogDetail post={post} />;
}
