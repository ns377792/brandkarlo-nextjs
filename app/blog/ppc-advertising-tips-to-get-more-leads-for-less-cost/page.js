import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";
const post = getPostBySlug("ppc-advertising-tips-to-get-more-leads-for-less-cost");
export const metadata = {
  title: { absolute: "PPC Advertising Tips to Lower Cost Per Lead | BrandKarlo" },
  description:
    "Practical PPC advertising tips to lower cost per lead and improve ad quality across Google Ads and Meta campaigns.",
  alternates: {
    canonical: "https://www.brandkarlo.in/blog/ppc-advertising-tips-to-get-more-leads-for-less-cost",
  },
  openGraph: {
    type: "article",
    title: "PPC Advertising Tips to Lower Cost Per Lead | BrandKarlo",
    description: "Practical PPC advertising tips to lower cost per lead and improve ad quality across Google Ads and Meta campaigns.",
    url: "https://www.brandkarlo.in/blog/ppc-advertising-tips-to-get-more-leads-for-less-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPC Advertising Tips to Lower Cost Per Lead | BrandKarlo",
    description: "Practical PPC advertising tips to lower cost per lead and improve ad quality across Google Ads and Meta campaigns.",
  },
};
export default function Page() {
  return <BlogDetail post={post} />;
}
