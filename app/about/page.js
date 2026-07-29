import Image from "next/image";

export const metadata = {
  title: { absolute: "About BrandKarlo | Our Digital Marketing Agency Story" },
  description: "Learn how BrandKarlo helps startups, local businesses and growing brands build a powerful online presence through strategic, data-driven digital marketing.",
  alternates: {
    canonical: "https://www.brandkarlo.in/about",
  },
  openGraph: {
    type: "website",
    title: "About BrandKarlo | Our Digital Marketing Agency Story",
    description: "Learn how BrandKarlo helps startups, local businesses and growing brands build a powerful online presence through strategic, data-driven digital marketing.",
    url: "https://www.brandkarlo.in/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BrandKarlo | Our Digital Marketing Agency Story",
    description: "Learn how BrandKarlo helps startups, local businesses and growing brands build a powerful online presence through strategic, data-driven digital marketing.",
  },
};
export default function Page() {
  return (
    <>

        <div className="navbar-offset-spacer"></div>






        <div className="ns-about-container">
    <h1>About Us</h1>
    <div className="subtitle">
        Helping Brands Grow with Smart Digital Strategies
    </div>

    <Image src="/img/about.jpg" alt="BrandKarlo digital marketing team at work" style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '25px' }} width={600} height={425} loading="lazy" />

    <p>
        Hi, we are <strong>BrandKarlo</strong>, a full-service 
        <strong>Digital Marketing Agency</strong> based in India, passionate about helping startups, local businesses, and growing brands build a powerful online presence.
    </p>

    <p>
        We work across <strong>SEO, Google & Meta Ads, Social Media Marketing, Website Development, Content Marketing,</strong> and AI-powered automation to deliver fast, measurable, and long-term growth for our clients.
    </p>


    <h2>What We Do</h2>

    <ul>
        <li>
            <strong>SEO & Local SEO:</strong> 
            Improving Google rankings and driving consistent organic traffic.
        </li>

        <li>
            <strong>Website Design & Development:</strong>
            Building fast, responsive, and conversion-focused websites.
        </li>

        <li>
            <strong>Social Media Marketing:</strong>
            Growing brand presence on Instagram, Facebook, LinkedIn, and more.
        </li>

        <li>
            <strong>Google & Meta Ads:</strong>
            Running high-performing ad campaigns for instant, quality leads.
        </li>

        <li>
            <strong>Branding & Graphic Design:</strong>
            Creating memorable brand identities with professional creatives.
        </li>

        <li>
            <strong>AI Marketing Automation:</strong>
            Automating lead nurturing and customer engagement workflows.
        </li>
    </ul>


    <h2>Our Approach</h2>

    <p>
        We combine strategy, creativity, and technology to build digital solutions that actually move the needle.
        Our focus isn't just traffic or likes. It's real business growth: more visibility, more leads, more revenue.
    </p>


    <h2>Why Choose BrandKarlo?</h2>

    <ul>
        <li>
            <strong>Complete Digital Solutions:</strong>
            Marketing + Development + Branding, all under one roof.
        </li>

        <li>
            <strong>Result-Driven:</strong>
            Every strategy is built around measurable business outcomes.
        </li>

        <li>
            <strong>Client-First Approach:</strong>
            We treat every client's growth as our own priority.
        </li>
    </ul>


    <h2>Let's Grow Your Brand Together</h2>

    <p>
        Have a business idea or want to scale your brand online?
        Let's connect and build something impactful.
    </p>

    <div className="btn-container">
        <a href="/get-free-consultation" className="cta-btn">
            Get Free Consultation
        </a>
    </div>

</div>









        

        
    </>
  );
}
