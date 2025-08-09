"use client";

import { useState } from "react";
import Script from "next/script";

export default function CalendlyWidget() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div id="CalendlyWidget" className="w-full max-w-7xl mx-auto px-4">
      {!loaded && (
        <div className="flex justify-center items-center h-[80vh]">
          <span className="h-6 w-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin mr-2"></span>
          <span className="text-gray-600">Loading...</span>
        </div>
      )}

      <div
        className={`calendly-inline-widget w-full min-w-[220px] h-[100vh] ${
          loaded ? "block" : "hidden"
        }`}
        data-url="https://calendly.com/sakib-/discussion-call"
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          setTimeout(() => setLoaded(true), 500);
        }}
      />
    </div>
  );
}
