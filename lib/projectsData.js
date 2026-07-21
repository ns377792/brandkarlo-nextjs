export const projectsData = [
  {
    slug: "iamnitinsingh-portfolio",
    category: "website",
    categoryLabel: "Website Development",
    tag: "Website",
    metaIcon: "/img/meta-website.svg",
    metaColor: "blue",
    image: "/img/projects/nitinsingh.in.png",
    imageAlt: "iamnitinsingh.in portfolio website project",
    title: "Iamnitinsingh.in",
    shortDesc:
      "A personal portfolio site built for a full-stack developer, focused on clean design, fast load times, and organic discoverability.",
    externalLink: "https://www.iamnitinsingh.in",
    challenge:
      "Establish a credible online presence to attract freelance and full-time opportunities.",
    solution:
      "Custom-coded, mobile-first site with on-page SEO and Core Web Vitals optimization.",
    result:
      "95+ Google PageSpeed score and first-page ranking for the developer's name within weeks.",
    ctaText: "Start a Similar Project",
  },
  {
    slug: "activechamp-shopify",
    category: "website",
    categoryLabel: "Wordpress Development",
    tag: "Wordpress Store",
    metaIcon: "/img/meta-shopify.svg",
    metaColor: "green",
    image: "/img/projects/activechamp.in.png",
    imageAlt: "ActiveChamp Shopify store project",
    title: "Activechamp.in",
    shortDesc:
      "An educational toy eCommerce store built on Shopify with a clean UI and a checkout flow designed to convert.",
    externalLink: "https://activechamp.in",
    challenge:
      "A cluttered storefront was hurting conversion rates and mobile usability.",
    solution:
      "Rebuilt on Shopify with a streamlined product catalog, faster checkout, and mobile-first UI.",
    result:
      "Noticeably higher add-to-cart and checkout completion rates post-launch.",
    ctaText: "Start a Similar Project",
  },
  {
    slug: "business-growth-seo",
    category: "seo",
    categoryLabel: "SEO Campaign",
    tag: "SEO",
    metaIcon: "/img/meta-seo.svg",
    metaColor: "purple",
    image: "/img/projects/seo champane.png",
    imageAlt: "Business Growth SEO campaign project",
    title: "Business Growth SEO",
    shortDesc:
      "A complete SEO campaign covering technical fixes, content, and link building for a growing local business.",
    externalLink: null,
    challenge:
      "The client's website was invisible on Google for its most valuable keywords.",
    solution:
      "Technical SEO audit, keyword-mapped content, and a structured link-building plan.",
    result:
      "Organic traffic increased by 240% in 6 months, with multiple page-one rankings.",
    ctaText: "Get an SEO Audit",
  },
  {
    slug: "lead-generation-ads",
    category: "ads",
    categoryLabel: "Google Ads Campaign",
    tag: "Google Ads",
    metaIcon: "/img/meta-ads.svg",
    metaColor: "yellow",
    image: "/img/projects/lead enrasteg.png",
    imageAlt: "Lead Generation Google Ads campaign project",
    title: "Lead Generation Ads",
    shortDesc:
      "A high-performing Google Ads campaign built to drive qualified leads at a low cost per click.",
    externalLink: null,
    challenge:
      "Previous campaigns generated clicks but very few real, qualified leads.",
    solution:
      "Rebuilt campaign structure, refined targeting, and conversion-focused ad copy and landing pages.",
    result:
      "Lower cost-per-lead and a steady stream of qualified inquiries within the first month.",
    ctaText: "Launch an Ads Campaign",
  },
  {
    slug: "kitabiduniya-branding",
    category: "branding",
    categoryLabel: "Brand Identity",
    tag: "Branding",
    metaIcon: "/img/meta-branding.svg",
    metaColor: "emerald",
    image: "/img/projects/project-2.jpg",
    imageAlt: "Kitabiduniya.com brand identity project",
    title: "Kitabiduniya.com",
    shortDesc:
      "A complete brand identity and packaging design system for an organic skincare label.",
    externalLink: null,
    challenge:
      "A new skincare brand needed a premium, trustworthy look to stand out on shelf and online.",
    solution:
      "Logo, color palette, typography, and packaging design rooted in the brand's organic, natural positioning.",
    result:
      "A cohesive brand identity used across packaging, social media, and the website.",
    ctaText: "Build Your Brand Identity",
  },
  {
    slug: "engaging-social-campaigns",
    category: "social",
    categoryLabel: "Social Media Marketing",
    tag: "Social Media",
    metaIcon: "/img/meta-social.svg",
    metaColor: "orange",
    image: "/img/projects/Social media Marketing.png",
    imageAlt: "Engaging social media campaigns project",
    title: "Engaging Social Campaigns",
    shortDesc:
      "A creative content strategy built to boost engagement and grow followers across platforms.",
    externalLink: null,
    challenge:
      "Low engagement and inconsistent posting were stalling audience growth.",
    solution:
      "A structured content calendar, on-brand creatives, and platform-specific posting strategy.",
    result:
      "Steady follower growth and significantly higher engagement across Instagram and Facebook.",
    ctaText: "Grow Your Social Presence",
  },
];

export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug);
}
