import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("email-marketing-best-practices-to-boost-open-rates");

export const metadata = {
  title: "Email Marketing Best Practices to Boost Open Rates | BrandKarlo Blog",
  description:
    "Email marketing best practices to boost open rates, deliverability, and conversions for your subscriber list.",
  alternates: {
    canonical: "/blog/email-marketing-best-practices-to-boost-open-rates",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
