import Link from "next/link";

export default function Footer() {
  return (
    <div className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <p className="text-white mb-4 fw-medium fs-5">BrandKarlo</p>
            <p>
              BrandKarlo is a full-service digital marketing agency dedicated to helping
              businesses grow online. From SEO and website development to Google Ads, social
              media marketing, branding, and AI-powered solutions, we create strategies that
              deliver measurable results.
            </p>
          </div>

          <div className="col-md-6 col-lg-3">
            <p className="text-white mb-4 fw-medium fs-5">Popular Link</p>
            <Link className="btn btn-link" href="/about">About Us</Link>
            <Link className="btn btn-link" href="/contact">Contact Us</Link>
            <Link className="btn btn-link" href="/privacy-policy">Privacy Policy</Link>
            <Link className="btn btn-link" href="/terms-and-conditions">Terms &amp; Condition</Link>
            <Link className="btn btn-link" href="/careers">Career</Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="text-white mb-4 fw-medium fs-5">Our Services</p>
            <Link className="btn btn-link" href="/service/seo">SEO</Link>
            <Link className="btn btn-link" href="/service/social-media-marketing">Social Media Marketing</Link>
            <Link className="btn btn-link" href="/service/content-marketing">Content Marketing</Link>
            <Link className="btn btn-link" href="/service/email-marketing">Email Marketing</Link>
            <Link className="btn btn-link" href="/service/google-ads-meta-ads">Google Ads &amp; Meta Ads</Link>
            <Link className="btn btn-link" href="/service/website-development">Website Development</Link>
            <Link className="btn btn-link" href="/service">View All Services</Link>
          </div>

          <div className="col-md-6 col-lg-3">
            <p className="text-white mb-4 fw-medium fs-5">Get In Touch</p>
            <p><i className="fa fa-map-marker-alt me-3"></i>Dwarka More, New Delhi-110043, India</p>
            <p><i className="fa fa-phone-alt me-3"></i>+91 8375948879</p>
            <p><i className="fa fa-envelope me-3"></i>Contact@iamnitinsingh.in</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://twitter.com/brandkarlo" target="_blank" rel="noopener noreferrer" aria-label="BrandKarlo on Twitter"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://facebook.com/brandkarlo" target="_blank" rel="noopener noreferrer" aria-label="BrandKarlo on Facebook"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://youtube.com/@brandkarlo" target="_blank" rel="noopener noreferrer" aria-label="BrandKarlo on YouTube"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://instagram.com/brandkarlo" target="_blank" rel="noopener noreferrer" aria-label="BrandKarlo on Instagram"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://linkedin.com/company/brandkarlo" target="_blank" rel="noopener noreferrer" aria-label="BrandKarlo on LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="border-bottom" href="/">BrandKarlo</Link>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link href="/">Home</Link>
                <Link href="/contact">Help</Link>
                <Link href="/faq">FAQs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
