import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";
const post = getPostBySlug("email-marketing-best-practices-to-boost-open-rates");
export const metadata = {
  title: { absolute: "Email Marketing Best Practices to Boost Open Rates | BrandKarlo Blog" },
  description:
    "Email marketing best practices to boost open rates, deliverability, and conversions for your subscriber list.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/email-marketing-best-practices-to-boost-open-rates",
  },
  openGraph: {
    type: "article",
    title: "Email Marketing Best Practices to Boost Open Rates | BrandKarlo Blog",
    description: "Email marketing best practices to boost open rates, deliverability, and conversions for your subscriber list.",
    url: "https://www.brandkarlo.in/blog/email-marketing-best-practices-to-boost-open-rates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing Best Practices to Boost Open Rates | BrandKarlo Blog",
    description: "Email marketing best practices to boost open rates, deliverability, and conversions for your subscriber list.",
  },
};
export default function Page() {
  return <BlogDetail post={post} />;
}
