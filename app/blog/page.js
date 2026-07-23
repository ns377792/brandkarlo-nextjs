import Link from "next/link";
import BlogFilterPagination from "@/components/BlogFilterPagination";
import { getAllPosts } from "@/lib/blogData";

export const metadata = {
  title: "Blog | Latest Digital Marketing Insights & Trends – BrandKarlo",
  description: "Stay updated with the latest digital marketing trends, proven strategies, and expert insights from BrandKarlo to grow your business online.",
  alternates: {
    canonical: "/blog",
  },
};

const allPosts = getAllPosts();

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

                {/* Blog Grid — generated from lib/blogData.js so titles/dates/links always stay in sync */}
                <div className="blog-grid">
                    {allPosts.map((post) => (
                        <article className="blog-card" data-category={post.category} key={post.slug}>
                            <div className={`blog-card-banner ${post.bannerClass}`}>
                                <span className={`blog-card-badge ${post.badgeClass}`}>{post.badgeLabel}</span>
                                <img src={post.image} alt={post.imageAlt} width="900" height="600" loading="lazy" decoding="async" />
                            </div>
                            <div className="blog-card-body">
                                <div className="blog-card-meta">
                                    <span><i className="bi bi-calendar3"></i> {post.date}</span>
                                    <span><i className="bi bi-clock"></i> {post.readTime}</span>
                                </div>
                                <h2 className="blog-card-title">{post.title}</h2>
                                <p className="blog-card-desc">{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className="blog-read-more">Read More <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </article>
                    ))}
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
