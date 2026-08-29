import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/lib/projectsData";
export const metadata = {
  title: { absolute: "Our Projects | Digital Marketing Portfolio – BrandKarlo" },
  description:
    "Browse BrandKarlo's recent client work in website development and SEO.",
  alternates: {
    canonical: "https://www.brandkarlo.in/project",
  },
  openGraph: {
    type: "website",
    title: "Our Projects | Digital Marketing Portfolio – BrandKarlo",
    description: "Browse BrandKarlo's recent client work in website development and SEO.",
    url: "https://www.brandkarlo.in/project",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Digital Marketing Portfolio – BrandKarlo",
    description: "Browse BrandKarlo's recent client work in website development and SEO.",
  },
};
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.brandkarlo.in/" },
              { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.brandkarlo.in/project" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "BrandKarlo Projects & Case Studies",
            url: "https://www.brandkarlo.in/project",
            description:
              "Browse BrandKarlo's recent client work in website development and SEO.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: projectsData.map((project, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: project.title,
                url: `https://www.brandkarlo.in/project/${project.slug}`,
              })),
            },
          }),
        }}
      />
      <div className="navbar-offset-spacer"></div>

      {/* Portfolio Start */}
      <section className="portfolio">
        <div className="container">
          {/* Header */}
          <div className="portfolio-header">
            <span className="badge">OUR PORTFOLIO</span>
            <h1 className="title">Recently Launched Projects</h1>
            <p className="subtitle">
              A closer look at real client work across website development and SEO.
            </p>
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
                  <Image
                    className="project-img"
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
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
      {/* Portfolio End */}
    </>
  );
}
