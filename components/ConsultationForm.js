"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const initialState = {
  full_name: "",
  email: "",
  phone: "",
  website: "",
  service_interest: "",
  business_details: "",
  company_website: "",
};

export default function ConsultationForm() {
  const router = useRouter();
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
        body: JSON.stringify({ formType: "consultation", ...formData }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send request");
      }

      setStatus("success");
      setFormData(initialState);
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="gfc_full_name">Full Name <span className="req">*</span></label>
        <div className="input-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          <input type="text" id="gfc_full_name" name="full_name" placeholder="Enter your full name" value={formData.full_name} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="gfc_email">Email Address <span className="req">*</span></label>
        <div className="input-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></svg>
          <input type="email" id="gfc_email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="gfc_phone">Phone Number <span className="req">*</span></label>
        <div className="input-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          <input type="tel" id="gfc_phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="gfc_website">Website (if any)</label>
        <div className="input-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
          <input type="url" id="gfc_website" name="website" placeholder="Enter your website URL" value={formData.website} onChange={handleChange} />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="gfc_service">What are you looking for? <span className="req">*</span></label>
        <select id="gfc_service" name="service_interest" required value={formData.service_interest} onChange={handleChange}>
          <option value="" disabled>Select a service</option>
          <option>SEO</option>
          <option>Social Media Marketing</option>
          <option>PPC Advertising</option>
          <option>Content Marketing</option>
          <option>Web Design &amp; Development</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="gfc_details">Tell us about your business</label>
        <textarea id="gfc_details" name="business_details" placeholder="Write a brief about your business..." value={formData.business_details} onChange={handleChange}></textarea>
      </div>

      <input type="text" name="company_website" value={formData.company_website} onChange={handleChange} style={{ position: "absolute", left: "-9999px" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit" className="submit-btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Request Free Consultation"}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
      </button>

      {status === "success" && (
        <p style={{ color: "#2e7d32", marginTop: "12px", fontWeight: 500 }}>
          Thanks! Your request has been sent. We&apos;ll contact you shortly.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#c62828", marginTop: "12px", fontWeight: 500 }}>
          {errorMsg || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
}
