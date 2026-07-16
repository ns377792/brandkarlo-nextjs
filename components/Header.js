"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/project", label: "Project" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/get-free-consultation", label: "Get Free Consultation" },
];

export default function Header() {
  const pathname = usePathname();
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 45);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bk-navbar px-4 px-lg-5 py-3 py-lg-0${
        sticky ? " sticky-top shadow-sm" : ""
      }`}
    >
      <Link href="/" className="navbar-brand p-0">
        <p className="navbar-logo m-0">
          <i className="fa fa-search me-2" aria-hidden="true"></i>Brand
          <span className="fs-5">Karlo</span>
        </p>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarCollapse"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="fa fa-bars"></span>
      </button>
      <div
        className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
        id="navbarCollapse"
      >
        <div className="navbar-nav ms-auto py-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-item nav-link${
                pathname === link.href ? " active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
