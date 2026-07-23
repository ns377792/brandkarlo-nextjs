import "./bootstrap.min.css";
import "./style.css";
import "./blog.css";
import "animate.css/animate.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.brandkarlo.in"),
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
  alternates: {
    canonical: "https://www.brandkarlo.in/",
  },
  openGraph: {
    type: "website",
    siteName: "BrandKarlo",
    url: "https://www.brandkarlo.in/",
    images: ["/img/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/img/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
        <Script id="google-tag-manager" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MW8KGMDB');
  `}
</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              name: "BrandKarlo",
              url: "https://www.brandkarlo.in/",
              image: "https://www.brandkarlo.in/img/hero.png",
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
              sameAs: [
                "https://www.facebook.com/profile.php?id=61591983697228",
                "https://x.com/brand_karlo",
                "https://www.instagram.com/brand_karlo/",
                "https://www.linkedin.com/in/nitin-thakur-11326327a/",
                "https://youtube.com/@Brand_Karlo",
              ],
            }),
          }}
        />
      </head>
      <body>
        <div className="container-fluid bg-white p-0" id="top">
          <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-MW8KGMDB"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    />
  </noscript>
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
