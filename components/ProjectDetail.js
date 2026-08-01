import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug } from "@/lib/servicesData";
import { getRelatedProjects } from "@/lib/projectsData";

export default function ProjectDetail({ project }) {
  const projectUrl = `https://www.brandkarlo.in/project/${project.slug}`;
  const relatedService = project.relatedServiceSlug
    ? getServiceBySlug(project.relatedServiceSlug)
    : null;
  const relatedProjects = getRelatedProjects(project.slug, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.brandkarlo.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: "https://www.brandkarlo.in/project",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: project.title,
                item: projectUrl,
              },
            ],
          }),
        }}
      />
      <div className="navbar-offset-spacer"></div>

      <div className="ns-about-container ns-service-container">
        <div className="ns-service-icon ns-project-icon-wrap">
          <span className={`ns-project-tag ns-project-tag-${project.metaColor}`}>
            {project.tag}
          </span>
        </div>

        <h1>{project.title}</h1>
        <div className="subtitle">{project.categoryLabel}</div>

        <div className="ns-project-image">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={project.imageWidth}
            height={project.imageHeight}
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 800px) 100vw, 800px"
            priority
          />
        </div>

        <p>{project.shortDesc}</p>

        <h2>Project Details</h2>
        <ul>
          <li>
            <strong>Challenge:</strong> {project.challenge}
          </li>
          <li>
            <strong>Solution:</strong> {project.solution}
          </li>
          <li>
            <strong>Result:</strong> {project.result}
          </li>
          {project.externalLink && (
            <li>
              <strong>Live Website:</strong>{" "}
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                {project.externalLink.replace(/^https?:\/\//, "")}
              </a>
            </li>
          )}
        </ul>

        {relatedService && (
          <p>
            This project was delivered through our{" "}
            <Link href={`/service/${relatedService.slug}`}>
              {relatedService.title} services
            </Link>
            .
          </p>
        )}

        <h2>Want Results Like This?</h2>
        <p>
          Let's talk about how we can help your business achieve similar
          growth.
        </p>

        <div className="btn-container">
          <Link href="/get-free-consultation" className="cta-btn">
            {project.ctaText}
          </Link>
        </div>

        {relatedProjects.length > 0 && (
          <>
            <h2>More Projects</h2>
            <div className="related-projects-grid">
              {relatedProjects.map((rp) => (
                <article className="card" key={rp.slug}>
                  <div className={`card-preview preview-${rp.category} has-img`}>
                    <Image
                      className="project-img"
                      src={rp.image}
                      alt={rp.imageAlt}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{rp.title}</h3>
                    <p className="card-desc">{rp.shortDesc}</p>
                  </div>
                  <div className="card-footer">
                    <Link href={`/project/${rp.slug}`} className="view-link">
                      Read More <span className="arrow">&rarr;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        <div className="ns-service-back">
          <Link href="/project">&larr; Back to All Projects</Link>
        </div>
      </div>
    </>
  );
}
