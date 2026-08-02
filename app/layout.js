import { Heebo, Roboto } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./bootstrap.min.css";
import "./style.css";
import "./blog.css";
import "animate.css/animate.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-heebo",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

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
    <html lang="en" className={`${heebo.variable} ${roboto.variable}`}>
      <head>
        <GoogleTagManager gtmId="GTM-MW8KGMDB" />
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
              email: "contact@brandkarlo.in",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61591983697228",
                "https://x.com/brand_karlo",
                "https://www.instagram.com/brand_karlo/",
                "https://www.linkedin.com/in/brandkarlo-in-11326327a/",
                "https://youtube.com/@Brand_Karlo",
                "https://share.google/jWxjIprWbC4sWoHXZ",
              ],
            }),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MW8KGMDB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
