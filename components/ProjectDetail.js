import Link from "next/link";

export default function ProjectDetail({ project }) {
  return (
    <>
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
