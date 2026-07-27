import { blogPosts } from "@/lib/blogData";
import { projectsData } from "@/lib/projectsData";
import { servicesData } from "@/lib/servicesData";

const BASE_URL = "https://www.brandkarlo.in";

// Blog dates are stored as human strings like "July 22, 2026".
// This safely turns them into a real Date for lastModified,
// falling back to "now" if a date is ever missing/unparseable.
function toLastModified(dateStr) {
  const parsed = dateStr ? new Date(dateStr) : null;
  return parsed && !isNaN(parsed) ? parsed : new Date();
}

export default function sitemap() {
  const staticPages = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/service`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/project`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/get-free-consultation`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/careers`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages = servicesData.map((service) => ({
    url: `${BASE_URL}/service/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectPages = projectsData.map((project) => ({
    url: `${BASE_URL}/project/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: toLastModified(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...blogPages];
}
