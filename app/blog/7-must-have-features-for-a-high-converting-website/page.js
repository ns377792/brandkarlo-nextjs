import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("7-must-have-features-for-a-high-converting-website");

export const metadata = {
  title: "7 Must-Have Features for a High-Converting Website | BrandKarlo Blog",
  description:
    "The 7 essential features every business website needs to convert more visitors into leads and customers.",
  alternates: {
    canonical: "/blog/7-must-have-features-for-a-high-converting-website",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
