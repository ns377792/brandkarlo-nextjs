export const metadata = {
  title: "Careers at BrandKarlo | Join Our Digital Marketing Team",
  description: "Explore career opportunities at BrandKarlo and join a growing digital marketing agency helping brands succeed online.",
};

export default function Page() {
  return (
    <>

        <div className="navbar-offset-spacer"></div>


        {/* Careers Start */}
        <div className="container-fluid py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <span className="section-kicker position-relative d-inline text-primary ps-4">Careers</span>
                    <h1 className="mt-2">Grow Your Career With BrandKarlo</h1>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-9 static-page-content text-center mb-5">
                        <p>We're a small, fast-moving digital marketing team based in New Delhi, working with startups and growing brands across SEO, web development, social media, paid ads, branding, and AI-powered marketing. We're always happy to hear from motivated people who want to do great work.</p>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-chart-line fa-2x"></i>
                            </div>
                            <h2 className="mb-3">SEO Executive</h2>
                            <p>Own on-page and off-page SEO strategy for client websites, from keyword research to link building and reporting.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-laptop-code fa-2x"></i>
                            </div>
                            <h2 className="mb-3">Web Developer</h2>
                            <p>Build fast, responsive websites and Shopify stores for our clients using modern front-end practices.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-share-alt fa-2x"></i>
                            </div>
                            <h2 className="mb-3">Social Media Executive</h2>
                            <p>Plan and manage content calendars, creatives, and community engagement across client social accounts.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <h3 className="mb-3">Don't see a role that fits?</h3>
                    <p className="mb-4">Send us your resume and a short note about what you'd like to work on — we'd still love to hear from you.</p>
                    <a href="mailto:Contact@iamnitinsingh.in?subject=Career%20Application" className="btn btn-primary rounded-pill px-5 py-3">Email Your Resume</a>
                </div>
            </div>
        </div>
        {/* Careers End */}

        
    </>
  );
}
