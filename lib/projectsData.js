export const projectsData = [
  {
    slug: "kitabdukaan-website-seo",
    relatedServiceSlug: "website-development",
    category: "website",
    categoryLabel: "Shopify Website Development & SEO",
    tag: "Shopify + SEO",
    metaIcon: "/img/meta-shopify.svg",
    metaColor: "green",
    image: "/img/projects/kitabdukaan-online-bookstore.svg",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "KitabDukaan.in online bookstore built on Shopify",
    title: "KitabDukaan.in",
    shortDesc:
      "A Shopify-built online bookstore with organized categories and consistent product listings, backed by on-page and technical SEO for long-term organic growth.",
    externalLink: "https://kitabdukaan.in/",
    challenge:
      "KitabDukaan needed a professional, easy-to-navigate online bookstore and a search-friendly foundation strong enough to support organic growth as a brand-new store in a competitive market.",
    solution:
      "A custom Shopify build with organized book categories, consistent product listings, and a mobile-first shopping experience, paired with keyword-mapped on-page SEO, a technical SEO foundation, and internal linking across category and product pages.",
    result:
      "A fully functional, trustworthy online bookstore with a scalable catalogue and a search-friendly structure, ready to support future content, backlinks, and organic ranking growth.",
    ctaText: "Build Your Online Store",
  },
];

export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug, limit = 3) {
  const current = getProjectBySlug(currentSlug);
  if (!current) return projectsData.filter((p) => p.slug !== currentSlug).slice(0, limit);

  const sameCategory = projectsData.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  );
  const others = projectsData.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}
