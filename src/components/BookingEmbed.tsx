"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

interface BookingEmbedProps {
  bookingKey?: string;
}

export default function BookingEmbed({ bookingKey }: BookingEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "yescrew:embed:height" && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (!bookingKey) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
        <h2 className="text-xl font-semibold">Online booking is being connected.</h2>
        <p className="mt-2">
          Please call <a href={site.phoneHref} className="font-semibold underline">{site.phoneDisplay}</a> or use the
          contact form and we&apos;ll confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <iframe
      ref={iframeRef}
      src={`https://yescrew-dashboard.vercel.app/book/${bookingKey}`}
      style={{ width: "100%", border: "none", minHeight: "500px" }}
      title="Book a window cleaning appointment"
    />
  );
}
