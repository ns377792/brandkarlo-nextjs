export const metadata = {
  title: "Our Services | SEO, Google Ads, Web Design & More – BrandKarlo",
  description: "Explore BrandKarlo's digital marketing services: SEO, website design & development, social media marketing, Google Ads, branding, and AI marketing automation.",
  alternates: {
    canonical: "/service",
  },
};

export default function Page() {
  return (
    <>

        <div className="navbar-offset-spacer"></div>


        {/* Service Start */}
        <div className="container-fluid py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <span className="section-kicker position-relative d-inline text-primary ps-4">Our Services</span>
                    <h1 className="mt-2">What Solutions We Provide</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-chart-line fa-2x"></i>
                            </div>
                            <h2 className="mb-3">Search Engine Optimization (SEO)</h2>
                            <p>Technical audits, on-page optimization, and content-driven link building that improve your Google rankings and grow organic traffic month over month.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="#seo-detail">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-laptop-code fa-2x"></i>
                            </div>
                            <h2 className="mb-3">Website Design &amp; Development</h2>
                            <p>Fast, responsive, and conversion-focused websites — from landing pages to full Shopify and custom-coded builds — designed to turn visitors into customers.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="#web-design-detail">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-share-alt fa-2x"></i>
                            </div>
                            <h2 className="mb-3">Social Media Marketing</h2>
                            <p>Content calendars, on-brand creatives, and platform-specific strategy to grow your audience and engagement on Instagram, Facebook, LinkedIn, and more.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="#social-media-detail">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fas fa-robot fa-2x"></i>
                            </div>
                            <h2 className="mb-3">AI Marketing Automation</h2>
                            <p>Automated lead nurturing, chatbots, and AI-powered workflows that keep your business engaging customers around the clock without extra manual effort.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="#ai-automation-detail">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-mouse-pointer fa-2x"></i>
                            </div>
                            <h2 className="mb-3">Google Ads (PPC)</h2>
                            <p>Data-driven Google Ads campaigns with tight keyword targeting and conversion-focused landing pages, built to generate qualified leads at a low cost per click.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="#ppc-detail">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-palette fa-2x"></i>
                            </div>
                            <h2 className="mb-3">Branding &amp; Graphic Design</h2>
                            <p>Logos, packaging, and complete brand identity systems that help your business look professional, memorable, and trustworthy from day one.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="#branding-detail">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Service End */}

        {/* Service Details Start */}
        <div className="container-fluid py-5 bg-light">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <span className="section-kicker position-relative d-inline text-primary ps-4">A Closer Look</span>
                    <h2 className="mt-2">How Each Service Helps Your Business Grow</h2>
                </div>

                <div id="seo-detail" className="service-detail-block mb-5 pb-4 border-bottom">
                    <h3><i className="fa fa-chart-line text-primary me-2"></i>Search Engine Optimization (SEO)</h3>
                    <p>Our SEO process starts with a full technical audit — crawlability, site speed, mobile-friendliness, and structured data — followed by keyword-mapped content and a safe, sustainable link-building plan. One recent campaign increased a client's organic traffic by 240% in just 6 months. <a href="/project#business-growth-seo">See the case study</a> or <a href="/get-free-consultation">request a free SEO audit</a>.</p>
                </div>

                <div id="web-design-detail" className="service-detail-block mb-5 pb-4 border-bottom">
                    <h3><i className="fa fa-laptop-code text-primary me-2"></i>Website Design &amp; Development</h3>
                    <p>Whether you need a personal portfolio, a Shopify store, or a full custom-coded business website, we design for speed, mobile responsiveness, and conversions from the first sketch. See how this played out for <a href="/project#iamnitinsingh-portfolio">a developer's personal portfolio</a> and <a href="/project#activechamp-shopify">an educational toy eCommerce brand</a>.</p>
                </div>

                <div id="social-media-detail" className="service-detail-block mb-5 pb-4 border-bottom">
                    <h3><i className="fa fa-share-alt text-primary me-2"></i>Social Media Marketing</h3>
                    <p>We plan content calendars, design on-brand creatives, and manage posting and engagement so your brand shows up consistently where your audience already spends time. <a href="/project#engaging-social-campaigns">View a recent social media case study</a>.</p>
                </div>

                <div id="ai-automation-detail" className="service-detail-block mb-5 pb-4 border-bottom">
                    <h3><i className="fas fa-robot text-primary me-2"></i>AI Marketing Automation</h3>
                    <p>From automated lead follow-ups to AI-assisted customer support, we help you set up workflows that nurture leads and answer common questions instantly — even outside business hours — without adding headcount.</p>
                </div>

                <div id="ppc-detail" className="service-detail-block mb-5 pb-4 border-bottom">
                    <h3><i className="fa fa-mouse-pointer text-primary me-2"></i>Google Ads (PPC)</h3>
                    <p>We build and optimize Google Ads campaigns around real business goals — not just clicks — pairing tight keyword targeting with landing pages made to convert. <a href="/project#lead-generation-ads">See our lead generation ads case study</a>.</p>
                </div>

                <div id="branding-detail" className="service-detail-block">
                    <h3><i className="fa fa-palette text-primary me-2"></i>Branding &amp; Graphic Design</h3>
                    <p>Your brand identity is often the first impression a customer has of your business. We design logos, packaging, and full brand guidelines that feel consistent everywhere they appear. <a href="/project#forest-co-skincare">See a full brand identity project</a>.</p>
                </div>

                <div className="text-center mt-5">
                    <a href="/get-free-consultation" className="btn btn-primary rounded-pill px-5 py-3">Get Your Free Consultation</a>
                </div>
            </div>
        </div>
        {/* Service Details End */}
        

        
        
    </>
  );
}
