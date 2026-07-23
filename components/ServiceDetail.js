import Link from "next/link";

export default function ServiceDetail({ service }) {
  const serviceUrl = `https://www.brandkarlo.in/service/${service.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: service.title,
            name: service.fullTitle,
            description: service.metaDescription,
            provider: {
              "@type": "Organization",
              name: "BrandKarlo",
              url: "https://www.brandkarlo.in/",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            url: serviceUrl,
          }),
        }}
      />
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
                name: "Services",
                item: "https://www.brandkarlo.in/service",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: serviceUrl,
              },
            ],
          }),
        }}
      />
      <div className="navbar-offset-spacer"></div>

      <div className="ns-about-container ns-service-container">
        <div className="ns-service-icon">
          <i className={`fa ${service.icon}`}></i>
        </div>

        <h1>{service.fullTitle}</h1>
        <div className="subtitle">{service.subtitle}</div>

        <p>{service.intro}</p>
        <p>{service.intro2}</p>

        <h2>What's Included</h2>
        <ul>
          {service.whatWeDo.map((item, i) => {
            const [label, ...rest] = item.split(": ");
            return (
              <li key={i}>
                <strong>{label}:</strong> {rest.join(": ")}
              </li>
            );
          })}
        </ul>

        <h2>Why Choose BrandKarlo for {service.title}?</h2>
        <ul>
          {service.whyChoose.map((item, i) => {
            const [label, ...rest] = item.split(": ");
            return (
              <li key={i}>
                <strong>{label}:</strong> {rest.join(": ")}
              </li>
            );
          })}
        </ul>

        <h2>Ready to Get Started?</h2>
        <p>
          Let's talk about how our {service.title} services can help grow
          your business online.
        </p>

        <div className="btn-container">
          <Link href="/get-free-consultation" className="cta-btn">
            Get Free Consultation
          </Link>
        </div>

        <div className="ns-service-back">
          <Link href="/service">&larr; Back to All Services</Link>
        </div>
      </div>
    </>
  );
}
