import Link from "next/link";
import { getRelatedPosts } from "@/lib/blogData";
import { getServiceBySlug } from "@/lib/servicesData";
import BlogCommentForm from "@/components/BlogCommentForm";

// Parses lightweight markdown-style links [text](url) within paragraph text
// so blog content can contain genuine, contextual internal links.
function renderTextWithLinks(text) {
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let i = 0;

  while ((match = linkRe.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    const isInternal = href.startsWith("/");
    parts.push(
      isInternal ? (
        <Link href={href} key={`link-${i++}`}>
          {label}
        </Link>
      ) : (
        <a href={href} key={`link-${i++}`} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      )
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

function ContentBlock({ block, index }) {
  if (block.type === "h2") {
    return (
      <h2 className="blog-detail-h2" key={index}>
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 className="blog-detail-h3" key={index}>
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="blog-detail-list" key={index}>
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "table") {
    return (
      <div className="blog-detail-table-wrap" key={index}>
        <table className="blog-detail-table">
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <td key={c}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <p className="blog-detail-p" key={index}>
      {renderTextWithLinks(block.text)}
    </p>
  );
}

export default function BlogDetail({ post }) {
  const relatedPosts = getRelatedPosts(post.slug, 3);
  const relatedService = post.relatedServiceSlug
    ? getServiceBySlug(post.relatedServiceSlug)
    : null;
  const postUrl = `https://www.brandkarlo.in/blog/${post.slug}`;
  let isoDate;
  try {
    isoDate = new Date(post.date).toISOString();
  } catch {
    isoDate = undefined;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: `https://www.brandkarlo.in${post.image}`,
            datePublished: isoDate,
            dateModified: isoDate,
            author: {
              "@type": "Organization",
              name: "BrandKarlo",
            },
            publisher: {
              "@type": "Organization",
              name: "BrandKarlo",
              logo: {
                "@type": "ImageObject",
                url: "https://www.brandkarlo.in/img/hero.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": postUrl,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.brandkarlo.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.brandkarlo.in/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: postUrl,
              },
            ],
          }),
        }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
      <div className="navbar-offset-spacer"></div>

      {/* Blog Detail Hero */}
      <section className="blog-detail-hero">
        <div className="container px-lg-5">
          <div className="blog-detail-back">
            <Link href="/blog">
              <i className="bi bi-arrow-left"></i> Back to Blog
            </Link>
          </div>

          <span className={`blog-card-badge ${post.badgeClass} blog-detail-badge`}>
            {post.badgeLabel}
          </span>

          <h1 className="blog-detail-title">{post.title}</h1>

          <div className="blog-detail-meta">
            <span>
              <i className="bi bi-calendar3"></i> {post.date}
            </span>
            <span>
              <i className="bi bi-clock"></i> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Cover banner */}
      <div className="container px-lg-5">
        <div className={`blog-detail-cover ${post.bannerClass}`}>
          <img src={post.image} alt={post.imageAlt} />
        </div>
      </div>

      {/* Article body */}
      <section className="container px-lg-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <article className="blog-detail-article">
              {post.content.map((block, i) => (
                <ContentBlock block={block} index={i} key={i} />
              ))}
            </article>

            {/* Related Service — internal link to the relevant service page */}
            {relatedService && (
              <div className="blog-detail-related-service">
                <i className="bi bi-arrow-return-right"></i>
                <p>
                  This article is closely related to our{" "}
                  <Link href={`/service/${relatedService.slug}`}>
                    {relatedService.title} services
                  </Link>
                  . Explore how we approach it for clients.
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="blog-detail-cta">
              <div>
                <h3>Want help implementing this?</h3>
                <p>Book a free consultation and let&apos;s talk about your goals.</p>
              </div>
              <Link href="/get-free-consultation" className="btn bk-btn-gradient rounded-pill px-4 py-3">
                Get Free Consultation <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className="container px-lg-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <BlogCommentForm postTitle={post.title} postSlug={post.slug} />
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="container px-lg-5 pb-5">
          <h2 className="blog-detail-related-title">You Might Also Like</h2>
          <div className="blog-grid">
            {relatedPosts.map((rp) => (
              <article className="blog-card" key={rp.slug}>
                <div className={`blog-card-banner ${rp.bannerClass}`}>
                  <span className={`blog-card-badge ${rp.badgeClass}`}>{rp.badgeLabel}</span>
                  <img src={rp.image} alt={rp.imageAlt} width="900" height="600" loading="lazy" decoding="async" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>
                      <i className="bi bi-calendar3"></i> {rp.date}
                    </span>
                    <span>
                      <i className="bi bi-clock"></i> {rp.readTime}
                    </span>
                  </div>
                  <h3 className="blog-card-title">{rp.title}</h3>
                  <p className="blog-card-desc">{rp.excerpt}</p>
                  <Link href={`/blog/${rp.slug}`} className="blog-read-more">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
