"use client";

import { useState } from "react";

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
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    
  );
}
