"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company_website: "",
};

export default function ContactForm() {
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
        body: JSON.stringify({ formType: "contact", ...formData }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <label htmlFor="name">Your Name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" style={{ height: "150px" }} value={formData.message} onChange={handleChange} required></textarea>
            <label htmlFor="message">Message</label>
          </div>
        </div>

        {/* Honeypot - hidden from real users, traps simple bots */}
        <input type="text" name="company_website" value={formData.company_website} onChange={handleChange} style={{ position: "absolute", left: "-9999px" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="col-12">
          <button className="btn btn-primary w-100 py-3" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status === "success" && (
          <div className="col-12">
            <div className="alert alert-success mb-0" role="alert">
              Thanks! Your message has been sent — we&apos;ll get back to you soon.
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="col-12">
            <div className="alert alert-danger mb-0" role="alert">
              {errorMsg || "Something went wrong. Please try again."}
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
