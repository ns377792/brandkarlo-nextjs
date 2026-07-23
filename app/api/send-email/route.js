import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function buildEmailContent(formType, data) {
  if (formType === "consultation") {
    const {
      full_name = "",
      email = "",
      phone = "",
      website = "",
      service_interest = "",
      business_details = "",
    } = data;

    return {
      subject: `New Free Consultation Request from ${full_name}`,
      text: `New consultation request received:

Full Name: ${full_name}
Email: ${email}
Phone: ${phone}
Website: ${website || "-"}
Service Interested In: ${service_interest}
Business Details: ${business_details || "-"}`,
      html: `
        <h2>New Free Consultation Request</h2>
        <p><strong>Full Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website || "-"}</p>
        <p><strong>Service Interested In:</strong> ${service_interest}</p>
        <p><strong>Business Details:</strong><br/>${(business_details || "-").replace(/\n/g, "<br/>")}</p>
      `,
      replyTo: email,
    };
  }

  if (formType === "comment") {
    const {
      name = "",
      email = "",
      comment = "",
      postTitle = "",
      postSlug = "",
    } = data;

    return {
      subject: `New Blog Comment on: ${postTitle || "Untitled post"}`,
      text: `New blog comment submitted:

Post: ${postTitle}
URL: /blog/${postSlug}
Name: ${name}
Email: ${email}
Comment: ${comment}`,
      html: `
        <h2>New Blog Comment</h2>
        <p><strong>Post:</strong> ${postTitle}</p>
        <p><strong>URL:</strong> /blog/${postSlug}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comment:</strong><br/>${(comment || "-").replace(/\n/g, "<br/>")}</p>
      `,
      replyTo: email,
    };
  }

  const { name = "", email = "", subject = "", message = "" } = data;

  return {
    subject: `New Contact Form Message: ${subject || "No subject"}`,
    text: `New contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${(message || "-").replace(/\n/g, "<br/>")}</p>
    `,
    replyTo: email,
  };
}

export async function POST(request) {
  try {
    const data = await request.json();

    // Honeypot spam check
    if (data.company_website) {
      return NextResponse.json({ ok: true });
    }

    const validTypes = ["contact", "consultation", "comment"];
    const formType = validTypes.includes(data.formType) ? data.formType : "contact";

    const requiredFieldsMap = {
      contact: ["name", "email", "subject", "message"],
      consultation: ["full_name", "email", "phone", "service_interest"],
      comment: ["name", "email", "comment", "postSlug"],
    };

    const requiredFields = requiredFieldsMap[formType];

    for (const field of requiredFields) {
      if (!data[field] || !String(data[field]).trim()) {
        return NextResponse.json(
          { ok: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const { GMAIL_USER, GMAIL_APP_PASSWORD, ADMIN_EMAIL } = process.env;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const { subject, text, html, replyTo } = buildEmailContent(formType, data);

    await transporter.sendMail({
      from: `"BrandKarlo Website" <${GMAIL_USER}>`,
      to: ADMIN_EMAIL || GMAIL_USER,
      replyTo,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("send-email error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
