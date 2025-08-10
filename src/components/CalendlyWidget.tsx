"use client";

import { useEffect, useState } from "react";

export default function CalendlyWidgetIframe() {
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState<string | null>(null);

  // Build the Calendly embed URL on the client to include your domain
  useEffect(() => {
    const base = "https://calendly.com/sakib-/discussion-call"; // <-- your event link
    const domain = window.location.hostname;
    const params = new URLSearchParams({
      embed_domain: domain,
      embed_type: "Inline",
      hide_gdpr_banner: "1",
    });
    setSrc(`${base}?${params.toString()}`);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4" id="CalendlyWidget">
      {!loaded && (
        <div className="flex justify-center items-center h-[60vh]">
          <span className="h-6 w-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin mr-2"></span>
          <span className="text-gray-600">Loading...</span>
        </div>
      )}

      {src && (
        <iframe
          title="Calendly Scheduling"
          src={src}
          onLoad={() => setLoaded(true)}
          className={`w-full h-[100vh] ${loaded ? "block" : "hidden"}`}
          style={{ minWidth: 220, border: 0 }}
        />
      )}
    </div>
  );
}
