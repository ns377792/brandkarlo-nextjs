import Link from "next/link";

export default function ProjectDetail({ project }) {
  return (
    <>
      <div className="navbar-offset-spacer"></div>

      <div className="ns-about-container ns-service-container">
        <span className={`ns-project-tag ns-project-tag-${project.metaColor}`}>
          {project.tag}
        </span>

        <h1>{project.title}</h1>
        <div className="subtitle">{project.categoryLabel}</div>

        <div className="ns-project-image">
          <img src={project.image} alt={project.imageAlt} />
        </div>

        <p>{project.shortDesc}</p>

        <h2>Challenge</h2>
        <p>{project.challenge}</p>

        <h2>Solution</h2>
        <p>{project.solution}</p>

        <h2>Result</h2>
        <p>{project.result}</p>

        {project.externalLink && (
          <div className="btn-container">
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              Visit Live Website
            </a>
          </div>
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
