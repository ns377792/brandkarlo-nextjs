import Link from "next/link";
import { servicesData } from "@/lib/servicesData";
export const metadata = {
  title: { absolute: "Our Services | SEO, Ads, Website Development & More – BrandKarlo" },
  description:
    "Explore BrandKarlo's digital marketing services: SEO, Social Media Marketing, Content Marketing, Email Marketing, Google & Meta Ads, Website Development and more.",
  alternates: {
    canonical: "https://www.brandkarlo.in/service",
  },
  openGraph: {
    type: "website",
    title: "Our Services | SEO, Ads, Website Development & More – BrandKarlo",
    description: "Explore BrandKarlo's digital marketing services: SEO, Social Media Marketing, Content Marketing, Email Marketing, Google & Meta Ads, Website Development and more.",
    url: "https://www.brandkarlo.in/service",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | SEO, Ads, Website Development & More – BrandKarlo",
    description: "Explore BrandKarlo's digital marketing services: SEO, Social Media Marketing, Content Marketing, Email Marketing, Google & Meta Ads, Website Development and more.",
  },
};
export default function Page() {
  return (
    <>
      <div className="navbar-offset-spacer"></div>

      {/* Service Start */}
      <div className="container-fluid py-5">
        <div className="container px-lg-5">
          <div
            className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <span className="section-kicker position-relative d-inline text-primary ps-4">
              Our Services
            </span>
            <h1 className="mt-2">What Solutions We Provide</h1>
          </div>
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div
                key={service.slug}
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay={`${0.1 + (index % 3) * 0.2}s`}
              >
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className={`fa ${service.icon} fa-2x`}></i>
                  </div>
                  <h2 className="mb-3">{service.title}</h2>
                  <p>{service.intro}</p>
                  <Link
                    className="btn px-3 mt-auto mx-auto"
                    href={`/service/${service.slug}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link
              href="/get-free-consultation"
              className="btn btn-primary rounded-pill px-5 py-3"
            >
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
}
