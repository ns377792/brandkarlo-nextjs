import BlogFilterPagination from "@/components/BlogFilterPagination";

export const metadata = {
  title: "Blog | Latest Digital Marketing Insights & Trends – BrandKarlo",
  description: "Stay updated with the latest digital marketing trends, proven strategies, and expert insights from BrandKarlo to grow your business online.",
};

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
                            <span className="bk-badge">🚀 Our Blog</span>
                            <h1 className="bk-hero-title">Latest Insights &amp; <span className="bk-gradient-text">Digital Marketing</span> Trends</h1>
                            <p className="bk-hero-sub">Stay updated with the latest digital marketing trends, proven strategies, and expert insights to grow your business online.</p>
                        </div>
                        <div className="col-lg-6 animated fadeIn" data-wow-delay="0.2s">
                            <div className="blog-illustration-wrap">
                                <div className="blog-book-card">
                                    <div className="blog-book-icon"><i className="bi bi-journal-richtext"></i></div>
                                    <p className="blog-book-title">BrandKarlo Blog</p>
                                    <div className="blog-book-lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="blog-book-tags">
                                        <span>SEO</span>
                                        <span>PPC</span>
                                        <span>Branding</span>
                                    </div>
                                </div>
                                <div className="blog-float-card blog-float-top">
                                    <i className="bi bi-graph-up-arrow"></i>
                                    <div>
                                        <small>Weekly Reads</small>
                                        <strong>12K+</strong>
                                    </div>
                                </div>
                                <div className="blog-float-card blog-float-bottom">
                                    <i className="bi bi-file-earmark-text"></i>
                                    <div>
                                        <small>Articles</small>
                                        <strong>150+</strong>
                                    </div>
                                </div>
                                <div className="blog-plant"><i className="bi bi-flower2"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/* Navbar & Hero End */}

        {/* Blog List Start */}
        <BlogFilterPagination>
        <section className="portfolio pt-0">
            <div className="container">

                {/* Filter Tabs */}
                <div className="blog-filters">
                    <button className="blog-filter-btn active" data-filter="all">
                        <i className="bi bi-grid-fill"></i> All Posts
                    </button>
                    <button className="blog-filter-btn" data-filter="seo">
                        <i className="bi bi-search"></i> SEO
                    </button>
                    <button className="blog-filter-btn" data-filter="digital">
                        <i className="bi bi-megaphone-fill"></i> Digital Marketing
                    </button>
                    <button className="blog-filter-btn" data-filter="social">
                        <i className="bi bi-people-fill"></i> Social Media
                    </button>
                    <button className="blog-filter-btn" data-filter="ppc">
                        <i className="bi bi-bullseye"></i> PPC
                    </button>
                    <button className="blog-filter-btn" data-filter="branding">
                        <i className="bi bi-award-fill"></i> Branding
                    </button>
                    <button className="blog-filter-btn" data-filter="website">
                        <i className="bi bi-window"></i> Website
                    </button>
                    <button className="blog-filter-btn" data-filter="case-study">
                        <i className="bi bi-journal-check"></i> Case Study
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="blog-grid">

                    {/* Post 1 */}
                    <article className="blog-card" data-category="seo">
                        <div className="blog-card-banner banner-seo">
                            <span className="blog-card-badge badge-seo">SEO</span>
                            <img src="/img/blog/blog-1.jpg" alt="10 Powerful SEO Strategies to Rank Higher in 2025" width="900" height="600" loading="lazy" decoding="async" />
                        </div>
                        <div className="blog-card-body">
                            <div className="blog-card-meta">
                                <span><i className="bi bi-calendar3"></i> June 10, 2025</span>
                                <span><i className="bi bi-clock"></i> 6 min read</span>
                            </div>
                            <h2 className="blog-card-title">10 Powerful SEO Strategies to Rank Higher in 2025</h2>
                            <p className="blog-card-desc">Discover the most effective SEO strategies that actually work in 2025 and help you rank higher on Google.</p>
                            <a href="/get-free-consultation" className="blog-read-more">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </article>

                    {/* Post 2 */}
                    <article className="blog-card" data-category="social">
                        <div className="blog-card-banner banner-social">
                            <span className="blog-card-badge badge-social">Social Media</span>
                            <img src="/img/blog/blog-2.jpg" alt="Social Media Trends to Watch in 2025 for Businesses" width="900" height="900" loading="lazy" decoding="async" />
                        </div>
                        <div className="blog-card-body">
                            <div className="blog-card-meta">
                                <span><i className="bi bi-calendar3"></i> June 8, 2025</span>
                                <span><i className="bi bi-clock"></i> 5 min read</span>
                            </div>
                            <h2 className="blog-card-title">Social Media Trends to Watch in 2025 for Businesses</h2>
                            <p className="blog-card-desc">Stay ahead of the curve with the latest social media trends that can help you boost engagement and grow your brand.</p>
                            <a href="/get-free-consultation" className="blog-read-more">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </article>

                    {/* Post 3 */}
                    <article className="blog-card" data-category="digital">
                        <div className="blog-card-banner banner-digital">
                            <span className="blog-card-badge badge-digital">Digital Marketing</span>
                            <img src="/img/blog/blog-3.jpg" alt="How Data-Driven Marketing Can Transform Your Business" width="900" height="600" loading="lazy" decoding="async" />
                        </div>
                        <div className="blog-card-body">
                            <div className="blog-card-meta">
                                <span><i className="bi bi-calendar3"></i> June 6, 2025</span>
                                <span><i className="bi bi-clock"></i> 7 min read</span>
                            </div>
                            <h2 className="blog-card-title">How Data-Driven Marketing Can Transform Your Business</h2>
                            <p className="blog-card-desc">Learn how leveraging data and analytics can improve your marketing strategies and maximize your ROI.</p>
                            <a href="/get-free-consultation" className="blog-read-more">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </article>

                    {/* Post 4 */}
                    <article className="blog-card" data-category="seo">
                        <div className="blog-card-banner banner-ecommerce">
                            <span className="blog-card-badge badge-ecommerce">Ecommerce</span>
                            <img src="/img/blog/blog-4.jpg" alt="Ecommerce SEO Best Practices to Increase Sales" width="900" height="900" loading="lazy" decoding="async" />
                        </div>
                        <div className="blog-card-body">
                            <div className="blog-card-meta">
                                <span><i className="bi bi-calendar3"></i> June 3, 2025</span>
                                <span><i className="bi bi-clock"></i> 6 min read</span>
                            </div>
                            <h2 className="blog-card-title">Ecommerce SEO Best Practices to Increase Sales</h2>
                            <p className="blog-card-desc">Optimize your ecommerce store with these proven SEO best practices and drive more organic traffic.</p>
                            <a href="/get-free-consultation" className="blog-read-more">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </article>

                    {/* Post 5 */}
                    <article className="blog-card" data-category="website">
                        <div className="blog-card-banner banner-website">
                            <span className="blog-card-badge badge-website">Website</span>
                            <img src="/img/blog/blog-5.jpg" alt="7 Must-Have Features for a High-Converting Website" width="500" height="500" loading="lazy" decoding="async" />
                        </div>
                        <div className="blog-card-body">
                            <div className="blog-card-meta">
                                <span><i className="bi bi-calendar3"></i> May 30, 2025</span>
                                <span><i className="bi bi-clock"></i> 6 min read</span>
                            </div>
                            <h2 className="blog-card-title">7 Must-Have Features for a High-Converting Website</h2>
                            <p className="blog-card-desc">These essential features can turn your website into a powerful conversion machine and grow your business.</p>
                            <a href="/get-free-consultation" className="blog-read-more">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </article>

                    {/* Post 6 */}
                    <article className="blog-card" data-category="ppc">
                        <div className="blog-card-banner banner-ppc">
                            <span className="blog-card-badge badge-ppc">PPC</span>
                            <img src="/img/blog/blog-1.jpg" alt="PPC Advertising Tips to Get More Leads for Less Cost" width="900" height="600" loading="lazy" decoding="async" />
                        </div>
                        <div className="blog-card-body">
                            <div className="blog-card-meta">
                                <span><i className="bi bi-calendar3"></i> May 27, 2025</span>
                                <span><i className="bi bi-clock"></i> 5 min read</span>
                            </div>
                            <h2 className="blog-card-title">PPC Advertising Tips to Get More Leads for Less Cost</h2>
                            <p className="blog-card-desc">Reduce your ad spend and get more quality leads with these high-performing PPC advertising tips.</p>
                            <a href="/get-free-consultation" className="blog-read-more">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </article>

                    {/* Post 7 */}
                    <article className="blog-card" data-category="branding">
                        <div className="blog-card-banner banner-branding">
                            <span className="blog-card-badge badge-branding">Branding</span>
                            <img src="/img/blog/blog-2.jpg" alt="How Strong Branding Builds Trust and Drives Sales" width="900" height="900" loading="lazy" decoding="async" />
                        </div>
                        <div className="blog-card-body">
                            <div className="blog-card-meta">
                                <span><i className="bi bi-calendar3"></i> May 24, 2025</span>
                                <span><i className="bi bi-clock"></i> 5 min read</span>
                            </div>
                            <h2 className="blog-card-title">How Strong Branding Builds Trust and Drives Sales</h2>
                            <p className="blog-card-desc">A strong brand is more than a logo. Here's how effective branding builds trust and increases customer loyalty.</p>
                            <a href="/get-free-consultation" className="blog-read-more">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </article>

                    {/* Post 8 */}
                    <article className="blog-card" data-category="digital">
                        <div className="blog-card-banner banner-content">
                            <span className="blog-card-badge badge-content">Content Marketing</span>
                            <img src="/img/blog/blog-3.jpg" alt="Content Marketing Strategies That Actually Work in 2025" width="900" height="600" loading="lazy" decoding="async" />
                        </div>
                        <div className="blog-card-body">
                            <div className="blog-card-meta">
                                <span><i className="bi bi-calendar3"></i> May 21, 2025</span>
                                <span><i className="bi bi-clock"></i> 6 min read</span>
                            </div>
                            <h2 className="blog-card-title">Content Marketing Strategies That Actually Work in 2025</h2>
                            <p className="blog-card-desc">Create content that ranks, engages, and converts with these proven content marketing strategies.</p>
                            <a href="/get-free-consultation" className="blog-read-more">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </article>

                    {/* Post 9 */}
                    <article className="blog-card" data-category="digital">
                        <div className="blog-card-banner banner-email">
                            <span className="blog-card-badge badge-email">Email Marketing</span>
                            <img src="/img/blog/blog-4.jpg" alt="Email Marketing Best Practices to Boost Open Rates" width="900" height="900" loading="lazy" decoding="async" />
                        </div>
                        <div className="blog-card-body">
                            <div className="blog-card-meta">
                                <span><i className="bi bi-calendar3"></i> May 18, 2025</span>
                                <span><i className="bi bi-clock"></i> 5 min read</span>
                            </div>
                            <h2 className="blog-card-title">Email Marketing Best Practices to Boost Open Rates</h2>
                            <p className="blog-card-desc">Improve your email open rates and conversions with these proven email marketing best practices.</p>
                            <a href="/get-free-consultation" className="blog-read-more">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </article>

                </div>

                {/* No posts message (shown when a filter has zero posts) */}
                <p id="blogNoResults" className="text-center text-muted py-5" style={{ display: 'none' }}>No posts found in this category yet.</p>

                {/* Pagination (built dynamically by JS — only shown when a category has more posts than fit on one page) */}
                <nav className="blog-pagination" id="blogPagination" aria-label="Blog pagination" style={{ display: 'none' }}></nav>

                {/* Newsletter Strip */}
                <div className="blog-newsletter mt-5">
                    <div className="blog-newsletter-left">
                        <div className="blog-newsletter-icon"><i className="bi bi-envelope-paper-fill"></i></div>
                        <div>
                            <h3>Stay Updated with <span className="bk-gradient-text">Latest Insights</span></h3>
                            <p>Subscribe to our newsletter and never miss our latest tips and industry updates.</p>
                        </div>
                    </div>
                    <a href="/get-free-consultation" className="btn bk-btn-gradient rounded-pill px-4 py-3">Subscribe Now <i className="fa fa-arrow-right ms-2"></i></a>
                </div>

            </div>
        </section>
        </BlogFilterPagination>
        {/* Blog List End */}

        
    </>
  );
}
