"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";

export default function CalendlyWidget() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLIFrameElement) {
            node.onload = () => setLoaded(true);
          }
        });
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="CalendlyWidget" className="w-full max-w-7xl mx-auto px-4">
      {!loaded && (
        <div className="flex justify-center items-center h-[100vh]">
          <span className="h-6 w-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin mr-2"></span>
          <span className="text-gray-600">Loading...</span>
        </div>
      )}

      <div
        ref={containerRef}
        className={`calendly-inline-widget w-full min-w-[220px] h-[100vh] ${
          loaded ? "block" : "hidden"
        }`}
        data-url="https://calendly.com/sakib-/discussion-call"
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
