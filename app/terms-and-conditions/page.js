export const metadata = {
  title: "Terms & Conditions | BrandKarlo Digital Marketing Agency",
  description: "Read the terms and conditions for using BrandKarlo's website and digital marketing services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function Page() {
  return (
    <>

        <div className="navbar-offset-spacer"></div>


        {/* Static Page Start */}
        <div className="container-fluid py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <span className="section-kicker position-relative d-inline text-primary ps-4">Legal</span>
                    <h1 className="mt-2">Terms &amp; Conditions</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9 static-page-content">
                        <p><em>Last updated: July 2026</em></p>

                        <p>Welcome to BrandKarlo. By accessing our website or engaging our digital marketing services, you agree to the following terms and conditions.</p>

                        <h2>Use of Our Services</h2>
                        <p>BrandKarlo provides digital marketing services including SEO, website design &amp; development, social media marketing, Google Ads, branding, and AI marketing automation. Services are delivered as agreed in an individual client proposal or agreement.</p>

                        <h2>Client Responsibilities</h2>
                        <ul>
                            <li>Provide accurate business information required to deliver services effectively.</li>
                            <li>Respond to requests for feedback, approvals, or assets within a reasonable time.</li>
                            <li>Ensure you have the rights to any content, logos, or materials you share with us.</li>
                        </ul>

                        <h2>Payments</h2>
                        <p>Service fees, timelines, and payment schedules are agreed upon individually with each client before work begins.</p>

                        <h2>No Guaranteed Results</h2>
                        <p>While we use proven, data-driven strategies, digital marketing outcomes (such as search rankings or ad performance) depend on many factors outside our control, including search engine and platform algorithm changes. We do not guarantee specific rankings, traffic, or revenue figures.</p>

                        <h2>Intellectual Property</h2>
                        <p>Final deliverables (such as website code, designs, or creatives) are transferred to the client upon full payment, unless otherwise agreed. BrandKarlo retains the right to showcase completed work in its portfolio unless the client requests otherwise in writing.</p>

                        <h2>Limitation of Liability</h2>
                        <p>BrandKarlo is not liable for any indirect or consequential losses arising from the use of our website or services.</p>

                        <h2>Changes to These Terms</h2>
                        <p>We may update these Terms &amp; Conditions from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.</p>

                        <h2>Contact Us</h2>
                        <p>Questions about these terms? <a href="/contact">Reach out to our team</a>.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Static Page End */}

        
    </>
  );
}
