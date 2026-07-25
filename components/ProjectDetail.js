import Link from "next/link";
import { getServiceBySlug } from "@/lib/servicesData";

export default function ProjectDetail({ project }) {
  const projectUrl = `https://www.brandkarlo.in/project/${project.slug}`;
  const relatedService = project.relatedServiceSlug
    ? getServiceBySlug(project.relatedServiceSlug)
    : null;

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
          <img src={project.image} alt={project.imageAlt} />
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

        <div className="ns-service-back">
          <Link href="/project">&larr; Back to All Projects</Link>
        </div>
      </div>
    </>
  );
}
