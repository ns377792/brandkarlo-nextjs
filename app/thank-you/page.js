import Link from "next/link";

export const metadata = {
  title: { absolute: "Thank You | BrandKarlo" },
  description: "Thank you for reaching out to BrandKarlo. We've received your request and will get back to you shortly.",
  alternates: {
    canonical: "https://www.brandkarlo.in/thank-you",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Thank You | BrandKarlo",
    description: "Thank you for reaching out to BrandKarlo. We've received your request and will get back to you shortly.",
    url: "https://www.brandkarlo.in/thank-you",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | BrandKarlo",
    description: "Thank you for reaching out to BrandKarlo. We've received your request and will get back to you shortly.",
  },
};

export default function Page() {
  return (
    <>
      <div className="navbar-offset-spacer"></div>

      {/* Thank You Start */}
      <div className="container-fluid py-5">
        <div className="container px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                style={{
                  width: "84px",
                  height: "84px",
                  borderRadius: "50%",
                  background: "rgba(33, 36, 177, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2124B1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>

              <span className="section-kicker position-relative d-inline text-primary ps-4">Request Received</span>
              <h1 className="mt-2 mb-4">Thank You for Reaching Out!</h1>

              <p style={{ fontSize: "1.1rem", color: "#5B5876", maxWidth: "600px", margin: "0 auto 12px" }}>
                We&apos;ve received your consultation request and one of our team members will get
                back to you within 24 hours.
              </p>
              <p style={{ fontSize: "1.1rem", color: "#5B5876", maxWidth: "600px", margin: "0 auto 40px" }}>
                In the meantime, feel free to explore our services or check out some of our recent
                client work.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                <Link href="/" className="btn btn-primary rounded-pill px-5 py-3">Back to Home</Link>
                <Link href="/service" className="btn btn-outline-primary rounded-pill px-5 py-3">Explore Our Services</Link>
              </div>

              <div style={{ borderTop: "1px solid #eef0f4", paddingTop: "28px", marginTop: "10px" }}>
                <p style={{ color: "#5B5876", marginBottom: "6px" }}>Need to reach us sooner?</p>
                <p style={{ fontWeight: 600 }}>
                  <a href="tel:+918375948879">+91 8375948879</a>
                  {" "}&middot;{" "}
                  <a href="mailto:contact@brandkarlo.in">contact@brandkarlo.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Thank You End */}
    </>
  );
}
