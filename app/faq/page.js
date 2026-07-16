export const metadata = {
  title: "Frequently Asked Questions | BrandKarlo Digital Marketing Agency",
  description: "Find answers to common questions about BrandKarlo's SEO, website development, social media, Google Ads, and branding services.",
};

export default function Page() {
  return (
    <>

        <div className="navbar-offset-spacer"></div>


        {/* FAQ Start */}
        <div className="container-fluid py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <span className="section-kicker position-relative d-inline text-primary ps-4">Help Center</span>
                    <h1 className="mt-2">Frequently Asked Questions</h1>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="accordion" id="faqAccordion">

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="faqHeading1">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                                        What services does BrandKarlo offer?
                                    </button>
                                </h2>
                                <div id="faqCollapse1" className="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        We offer Search Engine Optimization (SEO), Website Design &amp; Development, Social Media Marketing, Google Ads (PPC), Branding &amp; Graphic Design, and AI Marketing Automation. See our <a href="/service">full services page</a> for details.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="faqHeading2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                                        How long does it take to see SEO results?
                                    </button>
                                </h2>
                                <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Most clients start seeing meaningful improvements in 3 to 6 months, depending on competition and starting point. One of our recent campaigns increased organic traffic by 240% within 6 months — see the <a href="/project#business-growth-seo">case study</a>.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="faqHeading3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                                        Do you work with businesses outside India?
                                    </button>
                                </h2>
                                <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes. While our team is based in New Delhi, India, we work with clients remotely across different time zones and regularly collaborate over calls and email.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="faqHeading4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                                        How much do your services cost?
                                    </button>
                                </h2>
                                <div id="faqCollapse4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Pricing depends on the scope of work, your goals, and the mix of services you need. <a href="/get-free-consultation">Book a free consultation</a> and we'll put together a plan and quote tailored to your business.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="faqHeading5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" aria-expanded="false" aria-controls="faqCollapse5">
                                        How do I get started with BrandKarlo?
                                    </button>
                                </h2>
                                <div id="faqCollapse5" className="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Simply <a href="/get-free-consultation">request a free consultation</a> or <a href="/contact">contact us</a> with a few details about your business, and our team will get back to you to discuss the best strategy for your goals.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* FAQ End */}

        
    </>
  );
}
