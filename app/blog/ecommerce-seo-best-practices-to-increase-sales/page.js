import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("ecommerce-seo-best-practices-to-increase-sales");

export const metadata = {
  title: "Ecommerce SEO Best Practices to Increase Sales | BrandKarlo Blog",
  description:
    "Practical ecommerce SEO best practices — from product page optimization to technical fixes — that help online stores drive more organic sales.",
  alternates: {
    canonical: "/blog/ecommerce-seo-best-practices-to-increase-sales",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
