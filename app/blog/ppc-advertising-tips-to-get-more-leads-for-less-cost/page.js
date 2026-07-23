import { getPostBySlug } from "@/lib/blogData";
import BlogDetail from "@/components/BlogDetail";

const post = getPostBySlug("ppc-advertising-tips-to-get-more-leads-for-less-cost");

export const metadata = {
  title: "PPC Advertising Tips to Get More Leads for Less Cost | BrandKarlo Blog",
  description:
    "Practical PPC advertising tips to lower cost per lead and improve ad quality across Google Ads and Meta campaigns.",
  alternates: {
    canonical: "/blog/ppc-advertising-tips-to-get-more-leads-for-less-cost",
  },
};

export default function Page() {
  return <BlogDetail post={post} />;
}
