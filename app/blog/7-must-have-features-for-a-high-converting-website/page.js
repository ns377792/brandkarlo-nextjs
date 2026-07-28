import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";
const post = getPostBySlug("7-must-have-features-for-a-high-converting-website");
export const metadata = {
  title: { absolute: "7 Must-Have Website Conversion Features | BrandKarlo" },
  description:
    "The 7 essential features every business website needs to convert more visitors into leads and customers.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/7-must-have-features-for-a-high-converting-website",
  },
  openGraph: {
    type: "article",
    title: "7 Must-Have Website Conversion Features | BrandKarlo",
    description: "The 7 essential features every business website needs to convert more visitors into leads and customers.",
    url: "https://www.brandkarlo.in/blog/7-must-have-features-for-a-high-converting-website",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Must-Have Website Conversion Features | BrandKarlo",
    description: "The 7 essential features every business website needs to convert more visitors into leads and customers.",
  },
};
export default function Page() {
  return <BlogDetail post={post} />;
}
