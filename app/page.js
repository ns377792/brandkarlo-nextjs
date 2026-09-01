import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";
export default function Page() {
  return (
    <>


            <section className="bk-hero mb-5">
                <div className="bk-hero-blob bk-hero-blob-1"></div>
                <div className="bk-hero-blob bk-hero-blob-2"></div>
                <div className="bk-hero-dots"></div>
                <div className="container px-lg-5 py-5">
                    <div className="row align-items-center gy-5 py-4">
                        <div className="col-lg-6 text-center text-lg-start animated fadeIn">
                            <span className="bk-badge">🚀 Digital Growth Partner For Your Business</span>
                            <h1 className="bk-hero-title">We Drive Growth Through Smart <span className="bk-gradient-text">Digital Strategies</span></h1>
                            <p className="bk-hero-sub">From SEO and Google Ads to web design and branding, we help startups, local businesses, and growing brands rank higher, generate more leads, and convert better.</p>
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                                <a href="/get-free-consultation" className="btn bk-btn-gradient rounded-pill px-4 py-3">Get Free Consultation <i className="fa fa-arrow-right ms-2"></i></a>
                                <a href="/service" className="btn bk-btn-outline rounded-pill px-4 py-3">View Our Work</a>
                            </div>
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 flex-wrap">
                                <div className="bk-avatar-group">
                                    <img src="/img/avatar-1.svg" alt="Happy BrandKarlo client" />
                                    <img src="/img/avatar-2.svg" alt="Happy BrandKarlo client" />
                                    <img src="/img/avatar-3.svg" alt="Happy BrandKarlo client" />
                                    <span className="bk-avatar-more">+10</span>
                                </div>
                                <div className="text-start">
                                    <div className="bk-stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                    <small className="bk-muted">5.0/5 on Google (2 reviews)</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 animated fadeIn" data-wow-delay="0.2s">
                            <div className="bk-hero-visual">
                                <svg className="bk-orbit-ring d-none d-lg-block" viewBox="0 0 500 500" aria-hidden="true">
                                    <ellipse cx="250" cy="250" rx="230" ry="150" fill="none" stroke="#C4B5FD" strokeWidth="1.5" strokeDasharray="2 9" opacity="0.6" transform="rotate(-18 250 250)"></ellipse>
                                </svg>

                                <div className="bk-rocket-pedestal"></div>
                                <div className="bk-rocket-cloud"></div>

                                <svg className="bk-rocket-svg" viewBox="0 0 220 340" aria-hidden="true">
                                    <defs>
                                        <linearGradient id="bkBodyGrad" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#FFFFFF"></stop>
                                            <stop offset="48%" stopColor="#FFFFFF"></stop>
                                            <stop offset="72%" stopColor="#ECE7FA"></stop>
                                            <stop offset="100%" stopColor="#CFC3EE"></stop>
                                        </linearGradient>
                                        <linearGradient id="bkNoseGrad" x1="0.15" y1="0" x2="0.9" y2="1">
                                            <stop offset="0%" stopColor="#A78BFA"></stop>
                                            <stop offset="45%" stopColor="#7C3AED"></stop>
                                            <stop offset="100%" stopColor="#5B21B6"></stop>
                                        </linearGradient>
                                        <linearGradient id="bkFinGradL" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#A78BFA"></stop>
                                            <stop offset="100%" stopColor="#6D28D9"></stop>
                                        </linearGradient>
                                        <linearGradient id="bkFinGradR" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#6D28D9"></stop>
                                            <stop offset="100%" stopColor="#4C1D95"></stop>
                                        </linearGradient>
                                        <radialGradient id="bkWindowGrad" cx="35%" cy="30%" r="75%">
                                            <stop offset="0%" stopColor="#F0F9FF"></stop>
                                            <stop offset="35%" stopColor="#93C5FD"></stop>
                                            <stop offset="70%" stopColor="#3B82F6"></stop>
                                            <stop offset="100%" stopColor="#1D4ED8"></stop>
                                        </radialGradient>
                                        <linearGradient id="bkFlameGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#F97316"></stop>
                                            <stop offset="45%" stopColor="#FBBF24"></stop>
                                            <stop offset="80%" stopColor="#FDE68A"></stop>
                                            <stop offset="100%" stopColor="#FFFBEB"></stop>
                                        </linearGradient>
                                        <radialGradient id="bkFlameGlow" cx="50%" cy="10%" r="65%">
                                            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.55"></stop>
                                            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0"></stop>
                                        </radialGradient>
                                        <linearGradient id="bkNozzleGrad" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#C4B5FD"></stop>
                                            <stop offset="50%" stopColor="#7C3AED"></stop>
                                            <stop offset="100%" stopColor="#4C1D95"></stop>
                                        </linearGradient>
                                    </defs>

                                    <ellipse className="bk-flame-glow" cx="110" cy="270" rx="70" ry="90" fill="url(#bkFlameGlow)"></ellipse>

                                    <g className="bk-flame">
                                        <path d="M88,244 Q68,294 110,336 Q152,294 132,244 Z" fill="url(#bkFlameGrad)"></path>
                                        <path d="M97,246 Q88,282 110,314 Q132,282 123,246 Z" fill="#FEF3C7" opacity="0.9"></path>
                                    </g>

                                    <ellipse cx="110" cy="244" rx="32" ry="9" fill="url(#bkNozzleGrad)"></ellipse>

                                    <polygon points="63,188 14,252 63,238" fill="url(#bkFinGradL)"></polygon>
                                    <polygon points="157,188 206,252 157,238" fill="url(#bkFinGradR)"></polygon>

                                    <rect x="62" y="66" width="96" height="164" rx="48" fill="url(#bkBodyGrad)" stroke="#E5DEFA" strokeWidth="1.5"></rect>
                                    <rect x="74" y="84" width="13" height="118" rx="6.5" fill="#FFFFFF" opacity="0.55"></rect>

                                    <rect x="62" y="154" width="96" height="15" fill="#EDE7FB"></rect>
                                    <rect x="150" y="154" width="8" height="15" fill="#D8CFF2"></rect>

                                    <path d="M62,88 C66,18 154,18 158,88 Z" fill="url(#bkNoseGrad)"></path>
                                    <path d="M100,26 C104,22 112,22 116,27" stroke="#C4B5FD" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"></path>

                                    <circle cx="110" cy="128" r="29" fill="url(#bkWindowGrad)" stroke="#1E40AF" strokeWidth="4"></circle>
                                    <circle cx="110" cy="128" r="29" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4"></circle>
                                    <ellipse cx="99" cy="116" rx="9" ry="5.5" fill="#FFFFFF" opacity="0.65"></ellipse>
                                </svg>

                                <div className="bk-float-icon bk-float-icon-seo d-none d-lg-flex">SEO</div>
                                <div className="bk-float-icon bk-float-icon-search d-none d-lg-flex"><i className="fa fa-search"></i></div>
                                <div className="bk-float-icon bk-float-icon-chart d-none d-lg-flex"><i className="fa fa-chart-line"></i></div>
                                <div className="bk-float-icon bk-float-icon-globe d-none d-lg-flex"><i className="fa fa-globe"></i></div>
                                <div className="bk-float-icon bk-float-icon-megaphone d-none d-lg-flex"><i className="fa fa-bullhorn"></i></div>

                                <i className="fa fa-star bk-hero-star bk-hero-star-1 d-none d-lg-block"></i>
                                <i className="fa fa-star bk-hero-star bk-hero-star-2 d-none d-lg-block"></i>
                                <span className="bk-hero-sparkle bk-hero-sparkle-1 d-none d-lg-block"></span>
                                <span className="bk-hero-sparkle bk-hero-sparkle-2 d-none d-lg-block"></span>
                                <span className="bk-hero-sparkle bk-hero-sparkle-3 d-none d-lg-block"></span>
                            </div>
                        </div>
                    </div>

                    <div className="bk-stats-strip mt-4">
                        <div className="bk-stat-item">
                            <i className="fa fa-users"></i>
                            <div><strong>10</strong><small>Projects Completed</small></div>
                        </div>
                        <div className="bk-stat-item">
                            <i className="fa fa-smile"></i>
                            <div><strong>10+</strong><small>Happy Clients</small></div>
                        </div>
                        <div className="bk-stat-item">
                            <i className="fa fa-trophy"></i>
                            <div><strong>2+</strong><small>Years of Experience</small></div>
                        </div>
                        <div className="bk-stat-item">
                            <i className="fa fa-chart-line"></i>
                            <div><strong>98%</strong><small>Success Rate</small></div>
                        </div>
                    </div>
                </div>
            </section>
        {/* Navbar & Hero End */}


        {/* About Start */}
        <div className="container-fluid py-5">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <span className="section-kicker position-relative text-primary ps-4">About BrandKarlo</span>
                            <h2 className="mt-2">Building Brands That People Trust</h2>
                        </div>
                        <p className="mb-4">At BrandKarlo, we help businesses establish a powerful online presence through strategic digital marketing. From SEO and website development to paid advertising and branding, our goal is simple: deliver measurable growth, quality leads, and long-term success.</p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <p className="mb-3 fw-semibold"><i className="fa fa-check text-primary me-2"></i>SEO & Local SEO</p>
                                <p className="mb-0 fw-semibold"><i className="fa fa-check text-primary me-2"></i>Website Development</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-3 fw-semibold"><i className="fa fa-check text-primary me-2"></i>Google & Meta Ads</p>
                                <p className="mb-0 fw-semibold"><i className="fa fa-check text-primary me-2"></i>Social Media Marketing</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-primary rounded-pill px-4 me-3" href="/about">Read More</a>
                            <a className="btn btn-outline-primary btn-square me-3" href="https://www.facebook.com/profile.php?id=61591983697228" target="_blank" rel="noopener noreferrer" aria-label="BrandKarlo on Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href="https://x.com/brand_karlo" target="_blank" rel="noopener noreferrer" aria-label="BrandKarlo on X"><i className="fab fa-x-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href="https://www.instagram.com/brand_karlo/" target="_blank" rel="noopener noreferrer" aria-label="BrandKarlo on Instagram"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square" href="https://www.linkedin.com/in/brandkarlo-in-11326327a/" target="_blank" rel="noopener noreferrer" aria-label="BrandKarlo on LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Image className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="/img/about.jpg" alt="BrandKarlo team working on a digital marketing strategy" width={600} height={425} style={{ width: "100%", height: "auto" }} loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}


        {/* Service Start */}
        <div className="container-fluid py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <span className="section-kicker position-relative d-inline text-primary ps-4">Our Services</span>
                    <h2 className="mt-2">Digital Marketing Services That Drive Real Results</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-chart-line fa-2x"></i>
                            </div>
                            <h3 className="mb-3">Search Engine Optimization (SEO)</h3>
                            <p>Improve your Google rankings and drive consistent organic traffic to your website.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/service/seo">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-laptop-code fa-2x"></i>
                            </div>
                            <h3 className="mb-3">Website Design & Development</h3>
                            <p>Fast, responsive, and conversion-focused websites built for your business.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/service/website-development">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-share-alt fa-2x"></i>
                            </div>
                            <h3 className="mb-3">Social Media Marketing</h3>
                            <p>Grow your brand and engage your audience on Facebook, Instagram, LinkedIn, and more.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/service/social-media-marketing">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-pen-nib fa-2x"></i>
                            </div>
                            <h3 className="mb-3">Content Marketing</h3>
                            <p>Attract and engage your audience with blogs, videos, and content that builds trust and drives traffic.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/service/content-marketing">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-mouse-pointer fa-2x"></i>
                            </div>
                            <h3 className="mb-3">Google Ads (PPC)</h3>
                            <p>Generate instant leads and maximize ROI with high-performing Google Ads campaigns.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/service/google-ads-meta-ads">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-envelope-open-text fa-2x"></i>
                            </div>
                            <h3 className="mb-3">Email Marketing</h3>
                            <p>Nurture leads and turn subscribers into repeat customers with high-converting email campaigns.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="/service/email-marketing">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Service End */}






        {/* Start Why */}
         
<section className="why-choose">

  {/* decorative dot grids */}
  <div className="dots dots-left">
    <svg viewBox="0 0 80 60" width="80" height="60">
      <g fill="#a78bfa">
        <circle cx="4" cy="4" r="2.2" /><circle cx="20" cy="4" r="2.2" /><circle cx="36" cy="4" r="2.2" /><circle cx="52" cy="4" r="2.2" />
        <circle cx="4" cy="18" r="2.2" /><circle cx="20" cy="18" r="2.2" /><circle cx="36" cy="18" r="2.2" /><circle cx="52" cy="18" r="2.2" />
        <circle cx="4" cy="32" r="2.2" /><circle cx="20" cy="32" r="2.2" /><circle cx="36" cy="32" r="2.2" /><circle cx="52" cy="32" r="2.2" />
        <circle cx="4" cy="46" r="2.2" /><circle cx="20" cy="46" r="2.2" /><circle cx="36" cy="46" r="2.2" /><circle cx="52" cy="46" r="2.2" />
      </g>
    </svg>
  </div>
  <div className="dots dots-right">
    <svg viewBox="0 0 80 60" width="80" height="60">
      <g fill="#a78bfa">
        <circle cx="4" cy="4" r="2.2" /><circle cx="20" cy="4" r="2.2" /><circle cx="36" cy="4" r="2.2" /><circle cx="52" cy="4" r="2.2" />
        <circle cx="4" cy="18" r="2.2" /><circle cx="20" cy="18" r="2.2" /><circle cx="36" cy="18" r="2.2" /><circle cx="52" cy="18" r="2.2" />
        <circle cx="4" cy="32" r="2.2" /><circle cx="20" cy="32" r="2.2" /><circle cx="36" cy="32" r="2.2" /><circle cx="52" cy="32" r="2.2" />
        <circle cx="4" cy="46" r="2.2" /><circle cx="20" cy="46" r="2.2" /><circle cx="36" cy="46" r="2.2" /><circle cx="52" cy="46" r="2.2" />
      </g>
    </svg>
  </div>

  <div className="container">

    {/* Header */}
    <div className="section-header">
      <span className="badge"><span className="badge-dot"></span>WHY CHOOSE US</span>
      <h2 className="title">Why Choose <span className="gradient-text">BrandKarlo?</span></h2>
      <p className="subtitle">
        We combine strategy, creativity, and data to deliver digital marketing
        solutions that drive <b>real growth</b> and <b>measurable results</b>.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="cards-grid">

      <div className="feature-card">
        <div className="icon-circle">
          <img src="/img/roi-target.svg" alt="ROI focused strategies icon" />
        </div>
        <h3 className="card-title">ROI Focused Strategies</h3>
        <span className="underline"></span>
        <p className="card-desc">We create data-driven strategies that maximize ROI and deliver measurable results for your business.</p>
      </div>

      <div className="feature-card">
        <div className="icon-circle">
          <img src="/img/data-chart.svg" alt="Data driven approach icon" />
        </div>
        <h3 className="card-title">Data Driven Approach</h3>
        <span className="underline"></span>
        <p className="card-desc">We analyze, strategize and implement campaigns backed by data, insights and market trends.</p>
      </div>

      <div className="feature-card">
        <div className="icon-circle">
          <img src="/img/rocket.svg" alt="Fast and timely delivery icon" />
        </div>
        <h3 className="card-title">Fast &amp; Timely Delivery</h3>
        <span className="underline"></span>
        <p className="card-desc">We value your time and ensure every project is delivered on time without compromising quality.</p>
      </div>

      <div className="feature-card">
        <div className="icon-circle">
          <img src="/img/shield-check.svg" alt="Transparent and honest icon" />
        </div>
        <h3 className="card-title">Transparent &amp; Honest</h3>
        <span className="underline"></span>
        <p className="card-desc">We believe in complete transparency in processes, communication and reporting.</p>
      </div>

      <div className="feature-card">
        <div className="icon-circle">
          <img src="/img/expert-team.svg" alt="Expert team icon" />
        </div>
        <h3 className="card-title">Expert Team</h3>
        <span className="underline"></span>
        <p className="card-desc">Our team of experienced professionals works dedicatedly to grow your business.</p>
      </div>

      <div className="feature-card">
        <div className="icon-circle">
          <img src="/img/support-headset.svg" alt="24x7 support icon" />
        </div>
        <h3 className="card-title">24x7 Support</h3>
        <span className="underline"></span>
        <p className="card-desc">We are always here to assist you whenever you need us. Your success is our priority.</p>
      </div>

    </div>

  </div>
</section>

        {/* end why */}


        {/* Start Process */}
<section className="our-process">

  {/* decorative dot grid */}
  <div className="dots dots-left">
    <svg viewBox="0 0 80 60" width="80" height="60">
      <g fill="#a78bfa">
        <circle cx="4" cy="4" r="2.2" /><circle cx="20" cy="4" r="2.2" /><circle cx="36" cy="4" r="2.2" /><circle cx="52" cy="4" r="2.2" />
        <circle cx="4" cy="18" r="2.2" /><circle cx="20" cy="18" r="2.2" /><circle cx="36" cy="18" r="2.2" /><circle cx="52" cy="18" r="2.2" />
        <circle cx="4" cy="32" r="2.2" /><circle cx="20" cy="32" r="2.2" /><circle cx="36" cy="32" r="2.2" /><circle cx="52" cy="32" r="2.2" />
        <circle cx="4" cy="46" r="2.2" /><circle cx="20" cy="46" r="2.2" /><circle cx="36" cy="46" r="2.2" /><circle cx="52" cy="46" r="2.2" />
      </g>
    </svg>
  </div>

  <div className="container">

    {/* Header */}
    <div className="section-header">
      <span className="badge"><span className="badge-dot"></span>OUR PROCESS</span>
      <h2 className="title">Our Proven Process<br /><span className="gradient-text">For Your Success</span></h2>
      <p className="subtitle">
        We follow a strategic and data-driven approach to deliver measurable results.
        Here's how we turn your goals into real growth.
      </p>
    </div>

    {/* Steps */}
    <div className="process-track">
      <span className="process-line"></span>

      <div className="process-step">
        <span className="step-number">01</span>
        <div className="process-card">
          <div className="icon-circle"><i className="fa fa-search"></i></div>
          <h3 className="card-title">Discovery</h3>
          <span className="underline"></span>
          <p className="card-desc">We learn about your business, goals, and challenges.</p>
          <div className="process-highlight"><i className="fa fa-bullseye"></i> Understand Your Vision</div>
        </div>
      </div>

      <div className="process-step">
        <span className="step-number">02</span>
        <div className="process-card">
          <div className="icon-circle"><i className="fa fa-file-alt"></i></div>
          <h3 className="card-title">Research &amp; Analysis</h3>
          <span className="underline"></span>
          <p className="card-desc">We analyze your market, competitors, and audience to find the best opportunities.</p>
          <div className="process-highlight"><i className="fa fa-bullseye"></i> Data-Driven Insights</div>
        </div>
      </div>

      <div className="process-step">
        <span className="step-number">03</span>
        <div className="process-card">
          <div className="icon-circle"><i className="fa fa-bullseye"></i></div>
          <h3 className="card-title">Strategy Planning</h3>
          <span className="underline"></span>
          <p className="card-desc">We create a customized strategy tailored to your business objectives.</p>
          <div className="process-highlight"><i className="fa fa-shield-alt"></i> Smart Strategy, Better Results</div>
        </div>
      </div>

      <div className="process-step">
        <span className="step-number">04</span>
        <div className="process-card">
          <div className="icon-circle"><i className="fa fa-rocket"></i></div>
          <h3 className="card-title">Execution</h3>
          <span className="underline"></span>
          <p className="card-desc">Our expert team executes the plan with precision across the right channels.</p>
          <div className="process-highlight"><i className="fa fa-bullseye"></i> Action That Drives Growth</div>
        </div>
      </div>

      <div className="process-step">
        <span className="step-number">05</span>
        <div className="process-card">
          <div className="icon-circle"><i className="fa fa-desktop"></i></div>
          <h3 className="card-title">Monitoring &amp; Optimization</h3>
          <span className="underline"></span>
          <p className="card-desc">We monitor performance in real-time and optimize for maximum ROI.</p>
          <div className="process-highlight"><i className="fa fa-bullseye"></i> Continuous Improvement</div>
        </div>
      </div>

      <div className="process-step">
        <span className="step-number">06</span>
        <div className="process-card">
          <div className="icon-circle"><i className="fa fa-chart-line"></i></div>
          <h3 className="card-title">Results &amp; Growth</h3>
          <span className="underline"></span>
          <p className="card-desc">We deliver measurable results that help your business grow consistently.</p>
          <div className="process-highlight"><i className="fa fa-bullseye"></i> Real Results, Real Growth</div>
        </div>
      </div>
    </div>

    {/* CTA Banner */}
    <div className="process-cta">
      <div className="process-cta-icon"><i className="fa fa-chart-line"></i></div>
      <div className="process-cta-text">
        <h4>Ready to Grow Your Business?</h4>
        <p>Let's create a powerful strategy and achieve amazing results together.</p>
      </div>
      <a href="/get-free-consultation" className="btn bk-btn-gradient rounded-pill px-4 py-3 process-cta-btn">Get Free Consultation <i className="fa fa-arrow-right ms-2"></i></a>
    </div>

  </div>
</section>
        {/* end process */}



























{/* Start TESTIMONIALS */}

<TestimonialCarousel>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BrandKarlo",
      url: "https://www.brandkarlo.in/",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "2",
        bestRating: "5",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Nitin Thakur" },
          reviewBody:
            "Excellent service and professional support. BrandKarlo provides effective digital marketing solutions with clear communication and timely assistance. Highly recommended!",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Sumit Kumar" },
          reviewBody:
            "I had a great experience with BrandKarlo. Their team is professional, responsive, and knowledgeable in digital marketing. They provide quality services in SEO, website development, and online marketing. I appreciate their timely support and dedication to helping businesses grow online. Highly recommended for anyone looking to improve their digital presence!",
        },
      ],
    }),
  }}
/>
<section className="testimonials">
  <div className="container">

    {/* Header */}
    <div className="section-header">
      <span className="badge">TESTIMONIALS</span>
      <h2 className="title">What Our <span className="accent-blue">Clients Say</span></h2>
      <p className="subtitle">
        We take pride in delivering results that help businesses grow.<br />
        Here's what our amazing clients have to say about working with BrandKarlo.
      </p>
    </div>

    {/* Stats Row */}
    <div className="stats-row">
      <div className="stat">
        <span className="stat-icon">
          <img src="/img/star.svg" alt="Rating star icon" />
        </span>
        <div className="stat-text">
          <span className="stat-value">5.0/5</span>
          <span className="stat-label">Google Rating</span>
        </div>
      </div>
      <span className="stat-divider"></span>
      <div className="stat">
        <span className="stat-icon">
          <img src="/img/quote-stat.svg" alt="Happy clients icon" />
        </span>
        <div className="stat-text">
          <span className="stat-value">10+</span>
          <span className="stat-label">Happy Clients</span>
        </div>
      </div>
      <span className="stat-divider"></span>
      <div className="stat">
        <span className="stat-icon">
          <img src="/img/shield-stat.svg" alt="Satisfaction rate icon" />
        </span>
        <div className="stat-text">
          <span className="stat-value">99%</span>
          <span className="stat-label">Satisfaction Rate</span>
        </div>
      </div>
    </div>

    {/* Testimonial Carousel */}
    <div className="testimonial-viewport">
      <button className="carousel-arrow arrow-prev" id="prevBtn" aria-label="Previous testimonial">‹</button>
      <button className="carousel-arrow arrow-next" id="nextBtn" aria-label="Next testimonial">›</button>

      <div className="track-mask">
        <div className="testimonial-track" id="testimonialTrack">

        <div className="testimonial-slide">
          <article className="testimonial-card">
            <div className="card-top">
              <img className="quote-icon" src="/img/quote-mark.svg" alt="Quote icon" />
              <span className="stars">★★★★★</span>
            </div>
            <div className="client-info">
              <img className="avatar" src="/img/avatar-1.svg" alt="Nitin Thakur" />
              <div>
                <h3 className="client-name">Nitin Thakur</h3>
                <a className="client-role" href="https://share.google/kEcrrKuIEAv9Ueh8Z" target="_blank" rel="noopener noreferrer">Google review</a>
              </div>
            </div>
            <p className="review-text">
              Excellent service and professional support. BrandKarlo provides effective
              digital marketing solutions with clear communication and timely assistance.
              Highly recommended!
            </p>
            <div className="card-footer">
              <img className="check-icon" src="/img/check-badge.svg" alt="Check icon" />
              <span>Digital Marketing Services</span>
            </div>
          </article>
        </div>

        <div className="testimonial-slide">
          <article className="testimonial-card">
            <div className="card-top">
              <img className="quote-icon" src="/img/quote-mark.svg" alt="Quote icon" />
              <span className="stars">★★★★★</span>
            </div>
            <div className="client-info">
              <img className="avatar" src="/img/avatar-2.svg" alt="Sumit Kumar" />
              <div>
                <h3 className="client-name">Sumit Kumar</h3>
                <a className="client-role" href="https://share.google/kEcrrKuIEAv9Ueh8Z" target="_blank" rel="noopener noreferrer">Google review</a>
              </div>
            </div>
            <p className="review-text">
              I had a great experience with BrandKarlo. Their team is professional,
              responsive, and knowledgeable in digital marketing. They provide quality
              services in SEO, website development, and online marketing.
            </p>
            <div className="card-footer">
              <img className="check-icon" src="/img/check-badge.svg" alt="Check icon" />
              <span>SEO &amp; Website Development</span>
            </div>
          </article>
        </div>

        </div>
      </div>
    </div>

    {/* Carousel Dots */}
    <div className="dots-nav" id="dotsNav">
      <span className="dot active" data-index="0"></span>
      <span className="dot" data-index="1"></span>
    </div>

    <div className="google-reviews-link">
      <a href="https://share.google/kEcrrKuIEAv9Ueh8Z" target="_blank" rel="noopener noreferrer">
        <img src="/img/star.svg" alt="" role="presentation" style={{ width: "18px", height: "18px", verticalAlign: "middle", marginRight: "8px" }} />
        Read all our reviews on Google
      </a>
    </div>

    {/* CTA Banner */}
    <div className="cta-banner">
      <div className="cta-left">
        <span className="cta-icon">
          <img src="/img/chat-bubble.svg" alt="Chat icon" />
        </span>
        <div>
          <h3 className="cta-title">Ready to grow your business?</h3>
          <p className="cta-subtitle">Let's build something amazing together.</p>
        </div>
      </div>
      <a href="/get-free-consultation" className="cta-btn">
        Get Free Consultation
        <img src="/img/arrow-right.svg" alt="" role="presentation" />
      </a>
    </div>

  </div>
</section>
</TestimonialCarousel>


{/* End TESTIMONIALS */}


















        {/* Contact Start */}
        <div className="container-fluid py-5">
            <div className="container px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                            <span className="section-kicker position-relative d-inline text-primary ps-4">Contact Us</span>
                            <h2 className="mt-2">Contact For Any Query</h2>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <h3 className="text-center mb-4">Fill out the form below and we'll get back to you soon.</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Contact End */}


        
    </>
  );
}
