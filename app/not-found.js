import Link from "next/link";

export const metadata = {
  title: { absolute: "Page Not Found | BrandKarlo" },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <div className="navbar-offset-spacer"></div>

      <div className="container-fluid py-5">
        <div className="container px-lg-5 text-center py-5">
          <span className="section-kicker position-relative d-inline text-primary ps-4">
            Error 404
          </span>
          <h1 className="mt-3 mb-3">This page took a wrong turn</h1>
          <p className="mb-4" style={{ maxWidth: "560px", margin: "0 auto 2rem", color: "#5B5876" }}>
            The page you're looking for doesn't exist or may have moved. Let's get you back on track;
            here are a few places to start.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            <Link href="/" className="cta-btn">
              Back to Homepage
            </Link>
            <Link href="/service" className="cta-btn" style={{ background: "#12121F" }}>
              View Our Services
            </Link>
            <Link href="/blog" className="cta-btn" style={{ background: "#7C3AED" }}>
              Read Our Blog
            </Link>
          </div>

          <p style={{ color: "#8A8798" }}>
            Or{" "}
            <Link href="/contact" style={{ color: "#4F46E5", fontWeight: 600 }}>
              contact us
            </Link>{" "}
            if you think this is a mistake.
          </p>
        </div>
      </div>
    </>
  );
}
