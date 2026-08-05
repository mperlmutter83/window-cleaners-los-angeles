import { NextRequest, NextResponse } from "next/server";

const CRM_FORM_KEY = process.env.CRM_FORM_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!CRM_FORM_KEY) {
      console.error("CRM_FORM_KEY is not configured");
      return NextResponse.json({ error: "Lead form is not configured" }, { status: 500 });
    }

    const body = await request.json();
    const { name, email, phone, service, message, submission_id, elapsed_ms, company_website } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const serviceNeeded = [
      `Service: ${service || "Window Cleaning"}`,
      message ? `Details: ${message}` : null,
      "Source: windowcleanerslosangeles.com",
    ]
      .filter(Boolean)
      .join(" | ");

    const crmResponse = await fetch(
      `https://yescrew-dashboard.vercel.app/api/forms/${CRM_FORM_KEY}/submit`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: email || null,
          phone,
          service_needed: serviceNeeded,
          submission_id,
          elapsed_ms,
          company_website,
        }),
      }
    );

    if (!crmResponse.ok) {
      console.error("CRM form submit failed:", crmResponse.status);
      return NextResponse.json({ error: "Failed to submit lead" }, { status: 502 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json({ error: "Failed to submit lead" }, { status: 500 });
  }
}
