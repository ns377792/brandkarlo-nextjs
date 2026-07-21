import Link from "next/link";
import FilterGrid from "@/components/FilterGrid";
import { projectsData } from "@/lib/projectsData";

export const metadata = {
  title: "Our Projects | Digital Marketing Portfolio – BrandKarlo",
  description:
    "Browse BrandKarlo's recent client projects across web design, SEO, Google Ads, branding and social media marketing.",
  alternates: {
    canonical: "/project",
  },
};

const filters = [
  { key: "all", label: "All Projects", icon: "/img/filter-all.svg" },
  { key: "website", label: "Website Development", icon: "/img/filter-website.svg" },
  { key: "seo", label: "SEO", icon: "/img/filter-seo.svg" },
  { key: "ads", label: "Google Ads", icon: "/img/filter-ads.svg" },
  { key: "branding", label: "Branding", icon: "/img/filter-branding.svg" },
  { key: "social", label: "Social Media", icon: "/img/filter-social.svg" },
];

export default function Page() {
  return (
    <>
      <div className="navbar-offset-spacer"></div>

      {/* Portfolio Start */}
      <FilterGrid>
        <section className="portfolio">
          <div className="container">
            {/* Header */}
            <div className="portfolio-header">
              <span className="badge">OUR PORTFOLIO</span>
              <h1 className="title">Recently Launched Projects</h1>
              <p className="subtitle">
                A closer look at real client work across website development, SEO,
                Google Ads, branding, and social media.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="filters">
              {filters.map((f) => (
                <button
                  key={f.key}
                  className={`filter-btn${f.key === "all" ? " active" : ""}`}
                  data-filter={f.key}
                >
                  <img className="icon" src={f.icon} alt={`${f.label} icon`} />
                  {f.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {projectsData.map((project) => (
                <article
                  key={project.slug}
                  className="card"
                  id={project.slug}
                  data-category={project.category}
                >
                  <div className={`card-preview preview-${project.category} has-img`}>
                    <img
                      className="project-img"
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{project.title}</h2>
                    <p className="card-desc">{project.shortDesc}</p>
                  </div>
                  <div className="card-footer">
                    <Link href={`/project/${project.slug}`} className="view-link">
                      Read More <span className="arrow">&rarr;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FilterGrid>
      {/* Portfolio End */}
    </>
  );
}
