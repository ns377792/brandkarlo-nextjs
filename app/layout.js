import "./bootstrap.min.css";
import "./style.css";
import "./blog.css";
import "animate.css/animate.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";

export const metadata = {
  metadataBase: new URL("https://brandkarlo.vercel.app"),
  title: {
    default: "BrandKarlo | Digital Marketing Agency in India – SEO, Ads & Web Design",
    template: "%s | BrandKarlo",
  },
  description:
    "BrandKarlo is India's trusted digital marketing agency helping startups & brands grow with SEO, Google Ads, social media marketing, web development and AI-driven strategies.",
  keywords:
    "digital marketing agency India, SEO services, Google Ads agency, social media marketing, website development, BrandKarlo",
  authors: [{ name: "BrandKarlo" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    siteName: "BrandKarlo",
    images: ["/img/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/img/hero.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              name: "BrandKarlo",
              url: "https://brandkarlo.vercel.app/",
              image: "https://brandkarlo.vercel.app/img/hero.png",
              description:
                "BrandKarlo is India's trusted digital marketing agency helping startups, local businesses and growing brands achieve measurable growth through SEO, Google Ads, social media marketing and website development.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dwarka More",
                addressLocality: "New Delhi",
                postalCode: "110043",
                addressCountry: "IN",
              },
              telephone: "+91-8375948879",
              email: "Contact@iamnitinsingh.in",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <div className="container-fluid bg-white p-0" id="top">
          <SiteChrome />
          <div className="container-fluid position-relative p-0">
            <Header />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
