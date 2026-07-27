"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function SiteChrome() {
  const pathname = usePathname();
  const [spinnerShow, setSpinnerShow] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [wowLoaded, setWowLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSpinnerShow(false), 1);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (wowLoaded && typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, [wowLoaded]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, [pathname]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/lib/wow/wow.min.js"
        strategy="afterInteractive"
        onLoad={() => setWowLoaded(true)}
      />

      <div
        id="spinner"
        className={`bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center${
          spinnerShow ? " show" : ""
        }`}
      >
        <div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <a
        href="#top"
        className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"
        aria-label="Back to top"
        style={{ display: showBackToTop ? "flex" : "none" }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="bi bi-arrow-up" aria-hidden="true"></i>
      </a>

      <a
        href="https://wa.me/918375948879"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fab fa-whatsapp" aria-hidden="true"></i>
        <span className="whatsapp-tooltip" role="tooltip">Chat with us on WhatsApp</span>
      </a>
    </>
  );
}
