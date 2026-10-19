import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, studentName, dob, level, previousSchool, parentName, phone, email, message } = body;

    // Basic validation
    if (!email || !phone || !parentName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check env vars
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing Gmail credentials in .env.local");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // TLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Build email body
    const subject = type === "application"
      ? `New Application: ${studentName} (${level})`
      : `New Contact from ${parentName}`;

    const html = `
      <h2>${subject}</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Student Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${studentName || "—"}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Date of Birth:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${dob || "—"}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Level:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${level || "—"}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Previous School:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${previousSchool || "—"}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Parent/Guardian:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${parentName}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
        <tr><td style="padding: 8px; vertical-align: top;"><strong>Notes:</strong></td><td style="padding: 8px;">${message || "—"}</td></tr>
      </table>
    `;

    // Send email
    await transporter.sendMail({
      from: `"St. John Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.GMAIL_USER,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
