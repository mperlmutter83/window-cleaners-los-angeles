"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";

interface LeadFormProps {
  heading?: string;
  subheading?: string;
  className?: string;
}

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200";

export default function LeadForm({ heading, subheading, className = "" }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Residential Window Cleaning",
    message: "",
    company_website: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const submissionId = useRef<string>(crypto.randomUUID());
  const startedAt = useRef<number>(Date.now());

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
        }),
      });

      if (response.ok) {
        // GA4/GTM conversion event — picked up by the site's GTM container when present.
        const dlWindow = window as unknown as { dataLayer?: Record<string, unknown>[] };
        dlWindow.dataLayer = dlWindow.dataLayer ?? [];
        dlWindow.dataLayer.push({ event: "generate_lead" });

        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Residential Window Cleaning",
          message: "",
          company_website: "",
        });
        submissionId.current = crypto.randomUUID();
        startedAt.current = Date.now();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {heading && <h2 className="text-2xl font-bold text-slate-900">{heading}</h2>}
      {subheading && <p className="text-slate-600">{subheading}</p>}

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
          Name *
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          className={inputClass}
          autoComplete="name"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass}
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-slate-700">
          Service Needed
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => updateField("service", e.target.value)}
          className={inputClass}
        >
          {site.services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Tell us about the job
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClass}
          placeholder="Number of windows, property type, preferred timing, gate/access notes..."
        />
      </div>

      {/* Honeypot — invisible to humans, passed through to the CRM spam gate. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={formData.company_website}
        onChange={(e) => updateField("company_website", e.target.value)}
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-sky-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Quote"}
      </button>

      {status === "success" && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-center font-medium text-green-700">
          Thank you! Your request was sent. We&apos;ll be in touch soon.
        </p>
      )}

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-center font-medium text-red-700">
          Something went wrong. Please call us at {site.phoneDisplay}.
        </p>
      )}
    </form>
  );
}
