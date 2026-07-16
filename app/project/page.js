import FilterGrid from "@/components/FilterGrid";

export const metadata = {
  title: "Our Projects | Digital Marketing Portfolio – BrandKarlo",
  description: "Browse BrandKarlo's recent client projects across web design, SEO, Google Ads, branding and social media marketing.",
};

export default function Page() {
  return (
    <>

        <div className="navbar-offset-spacer"></div>


        {/* Portfolio Start */}
        <FilterGrid>
        <section className="portfolio">
          <div className="container">

            {/* Header */}
            <div className="portfolio-header">
              <span className="badge">OUR PORTFOLIO</span>
              <h1 className="title">Recently Launched Projects</h1>
              <p className="subtitle">
                A closer look at real client work across website development, SEO,
                Google Ads, branding, and social media &mdash; with the results each project delivered.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="filters">
              <button className="filter-btn active" data-filter="all">
                <img className="icon" src="/img/filter-all.svg" alt="All Projects icon" />
                All Projects
              </button>
              <button className="filter-btn" data-filter="website">
                <img className="icon" src="/img/filter-website.svg" alt="Website Development icon" />
                Website Development
              </button>
              <button className="filter-btn" data-filter="seo">
                <img className="icon" src="/img/filter-seo.svg" alt="SEO icon" />
                SEO
              </button>
              <button className="filter-btn" data-filter="ads">
                <img className="icon" src="/img/filter-ads.svg" alt="Google Ads icon" />
                Google Ads
              </button>
              <button className="filter-btn" data-filter="branding">
                <img className="icon" src="/img/filter-branding.svg" alt="Branding icon" />
                Branding
              </button>
              <button className="filter-btn" data-filter="social">
                <img className="icon" src="/img/filter-social.svg" alt="Social Media icon" />
                Social Media
              </button>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">

              {/* Card 1: Website */}
              <article className="card" id="iamnitinsingh-portfolio" data-category="website">
                <div className="card-preview preview-website has-img">
                  <span className="tag">Website</span>
                  <img className="project-img" src="/img/projects/iamnitinsingh.jpg" alt="iamnitinsingh.in portfolio website project" width="1295" height="634" loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="meta-icon meta-blue">
                      <img src="/img/meta-website.svg" alt="Website icon" />
                    </span>
                    <span className="meta-label meta-label-blue">Website Development</span>
                  </div>
                  <h2 className="card-title"><a href="https://www.iamnitinsingh.in" target="_blank">Iamnitinsingh.in</a></h2>
                  <p className="card-desc">A personal portfolio site built for a full-stack developer, focused on clean design, fast load times, and organic discoverability.</p>
                  <ul className="case-study-list">
                    <li><strong>Challenge:</strong> Establish a credible online presence to attract freelance and full-time opportunities.</li>
                    <li><strong>Solution:</strong> Custom-coded, mobile-first site with on-page SEO and Core Web Vitals optimization.</li>
                    <li><strong>Result:</strong> 95+ Google PageSpeed score and first-page ranking for the developer's name within weeks.</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="/get-free-consultation" className="view-link">Start a Similar Project <span className="arrow">→</span></a>
                </div>
              </article>

              {/* Card 2: Shopify */}
              <article className="card" id="activechamp-shopify" data-category="website">
                <div className="card-preview preview-shopify has-img">
                  <span className="tag">Wordpress Store</span>
                  <img className="project-img" src="/img/projects/activechamp.jpg" alt="ActiveChamp Shopify store project" width="1341" height="688" loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="meta-icon meta-green">
                      <img src="/img/meta-shopify.svg" alt="Shopify icon" />
                    </span>
                    <span className="meta-label meta-label-green">Wordpress Development</span>
                  </div>
                  <h2 className="card-title"><a href="https://activechamp.in" target="_blank">Activechamp.in</a></h2>
                  <p className="card-desc">An educational toy eCommerce store built on Shopify with a clean UI and a checkout flow designed to convert.</p>
                  <ul className="case-study-list">
                    <li><strong>Challenge:</strong> A cluttered storefront was hurting conversion rates and mobile usability.</li>
                    <li><strong>Solution:</strong> Rebuilt on Shopify with a streamlined product catalog, faster checkout, and mobile-first UI.</li>
                    <li><strong>Result:</strong> Noticeably higher add-to-cart and checkout completion rates post-launch.</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="/get-free-consultation" className="view-link">Start a Similar Project <span className="arrow">→</span></a>
                </div>
              </article>

              {/* Card 3: SEO */}
              <article className="card" id="business-growth-seo" data-category="seo">
                <div className="card-preview preview-seo has-img">
                  <span className="tag">SEO</span>
                  <img className="project-img" src="/img/projects/bookishsanta.jpg" alt="Business Growth SEO campaign project" width="545" height="350" loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="meta-icon meta-purple">
                      <img src="/img/meta-seo.svg" alt="SEO icon" />
                    </span>
                    <span className="meta-label meta-label-purple">SEO Campaign</span>
                  </div>
                  <h2 className="card-title">Business Growth SEO</h2>
                  <p className="card-desc">A complete SEO campaign covering technical fixes, content, and link building for a growing local business.</p>
                  <ul className="case-study-list">
                    <li><strong>Challenge:</strong> The client's website was invisible on Google for its most valuable keywords.</li>
                    <li><strong>Solution:</strong> Technical SEO audit, keyword-mapped content, and a structured link-building plan.</li>
                    <li><strong>Result:</strong> Organic traffic increased by 240% in 6 months, with multiple page-one rankings.</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="/get-free-consultation" className="view-link">Get an SEO Audit <span className="arrow">→</span></a>
                </div>
              </article>

              {/* Card 4: Google Ads */}
              <article className="card" id="lead-generation-ads" data-category="ads">
                <div className="card-preview preview-ads has-img">
                  <span className="tag">Google Ads</span>
                  <img className="project-img" src="/img/projects/project-5.jpg" alt="Lead Generation Google Ads campaign project" width="500" height="500" loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="meta-icon meta-yellow">
                      <img src="/img/meta-ads.svg" alt="Google Ads icon" />
                    </span>
                    <span className="meta-label meta-label-yellow">Google Ads Campaign</span>
                  </div>
                  <h2 className="card-title">Lead Generation Ads</h2>
                  <p className="card-desc">A high-performing Google Ads campaign built to drive qualified leads at a low cost per click.</p>
                  <ul className="case-study-list">
                    <li><strong>Challenge:</strong> Previous campaigns generated clicks but very few real, qualified leads.</li>
                    <li><strong>Solution:</strong> Rebuilt campaign structure, refined targeting, and conversion-focused ad copy and landing pages.</li>
                    <li><strong>Result:</strong> Lower cost-per-lead and a steady stream of qualified inquiries within the first month.</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="/get-free-consultation" className="view-link">Launch an Ads Campaign <span className="arrow">→</span></a>
                </div>
              </article>

              {/* Card 5: Branding */}
              <article className="card" id="forest-co-skincare" data-category="branding">
                <div className="card-preview preview-branding has-img">
                  <span className="tag">Branding</span>
                  <img className="project-img" src="/img/projects/project-2.jpg" alt="Forest and Co skincare branding project" width="880" height="600" loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="meta-icon meta-emerald">
                      <img src="/img/meta-branding.svg" alt="Branding icon" />
                    </span>
                    <span className="meta-label meta-label-emerald">Brand Identity</span>
                  </div>
                  <h2 className="card-title">Kitabiduniya.Com in 2022  </h2>
                  <p className="card-desc">A complete brand identity and packaging design system for an organic skincare label.</p>
                  <ul className="case-study-list">
                    <li><strong>Challenge:</strong> A new skincare brand needed a premium, trustworthy look to stand out on shelf and online.</li>
                    <li><strong>Solution:</strong> Logo, color palette, typography, and packaging design rooted in the brand's organic, natural positioning.</li>
                    <li><strong>Result:</strong> A cohesive brand identity used across packaging, social media, and the website.</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="/get-free-consultation" className="view-link">Build Your Brand Identity <span className="arrow">→</span></a>
                </div>
              </article>

              {/* Card 6: Social Media */}
              <article className="card" id="engaging-social-campaigns" data-category="social">
                <div className="card-preview preview-social has-img">
                  <span className="tag">Social Media</span>
                  <img className="project-img" src="/img/projects/project-3.jpg" alt="Engaging social media campaigns project" width="900" height="600" loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="meta-icon meta-orange">
                      <img src="/img/meta-social.svg" alt="Social media icon" />
                    </span>
                    <span className="meta-label meta-label-orange">Social Media Marketing</span>
                  </div>
                  <h2 className="card-title">Engaging Social Campaigns</h2>
                  <p className="card-desc">A creative content strategy built to boost engagement and grow followers across platforms.</p>
                  <ul className="case-study-list">
                    <li><strong>Challenge:</strong> Low engagement and inconsistent posting were stalling audience growth.</li>
                    <li><strong>Solution:</strong> A structured content calendar, on-brand creatives, and platform-specific posting strategy.</li>
                    <li><strong>Result:</strong> Steady follower growth and significantly higher engagement across Instagram and Facebook.</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="/get-free-consultation" className="view-link">Grow Your Social Presence <span className="arrow">→</span></a>
                </div>
              </article>

            </div>
          </div>
        </section>
        </FilterGrid>
        {/* Portfolio End */}
        

      
        
    </>
  );
}
