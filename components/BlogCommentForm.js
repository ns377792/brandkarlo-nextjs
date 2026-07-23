"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  comment: "",
  company_website: "",
};

export default function BlogCommentForm({ postTitle, postSlug }) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "comment",
          postTitle,
          postSlug,
          ...formData,
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to submit comment");
      }

      setStatus("success");
      setFormData(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section className="blog-comment-section">
      <h2 className="blog-detail-related-title">Leave a Comment</h2>
      <p className="blog-comment-subtitle">
        Have a question or thought about this article? Send it our way — our team reads every comment.
      </p>

      <form onSubmit={handleSubmit} className="blog-comment-form">
        <div className="blog-comment-row">
          <div className="blog-comment-field">
            <label htmlFor="comment_name">Name <span className="req">*</span></label>
            <input
              type="text"
              id="comment_name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="blog-comment-field">
            <label htmlFor="comment_email">Email <span className="req">*</span></label>
            <input
              type="email"
              id="comment_email"
              name="email"
              placeholder="Your email (won't be shown publicly)"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="blog-comment-field">
          <label htmlFor="comment_text">Comment <span className="req">*</span></label>
          <textarea
            id="comment_text"
            name="comment"
            placeholder="Write your comment..."
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Honeypot - hidden from real users, traps simple bots */}
        <input
          type="text"
          name="company_website"
          value={formData.company_website}
          onChange={handleChange}
          style={{ position: "absolute", left: "-9999px" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <button type="submit" className="blog-comment-submit" disabled={status === "sending"}>
          {status === "sending" ? "Posting..." : "Post Comment"}
        </button>

        {status === "success" && (
          <p className="blog-comment-status blog-comment-success">
            Thanks! Your comment has been sent to our team.
          </p>
        )}
        {status === "error" && (
          <p className="blog-comment-status blog-comment-error">
            {errorMsg || "Something went wrong. Please try again."}
          </p>
        )}
      </form>
    </section>
  );
}
