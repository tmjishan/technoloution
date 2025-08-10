"use client";

import { useEffect, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      initBadgeWidget?: (opts: {
        url: string;
        text?: string;
        color?: string;
        textColor?: string;
        branding?: boolean;
      }) => void;
    };
  }
}

type Props = {
  /** If true, shows Calendly's floating badge instead of our button */
  useBadge?: boolean;
};

export default function CalendlyPopup({ useBadge = false }: Props) {
  const [ready, setReady] = useState(false);

  // Build the Calendly URL with embed params
  const buildUrl = () => {
    const base = "https://calendly.com/sakib-/discussion-call";
    const domain =
      typeof window !== "undefined" ? window.location.hostname : "";
    const params = new URLSearchParams({
      embed_domain: domain,
      embed_type: "PopupWidget",
      hide_gdpr_banner: "1",
    });
    return `${base}?${params.toString()}`;
  };

  useEffect(() => {
    // Add Calendly CSS (once)
    const cssId = "calendly-widget-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    // Add Calendly JS (once)
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    ) as HTMLScriptElement | null;

    if (existing?.getAttribute("data-loaded") === "true") {
      setReady(true);
      return;
    }

    const script = existing ?? document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      setReady(true);

      // Optional badge
      if (useBadge && window.Calendly?.initBadgeWidget) {
        window.Calendly.initBadgeWidget({
          url: buildUrl(),
          text: "Schedule time with me",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: true,
        });
      }
    };

    if (!existing) document.body.appendChild(script);
  }, [useBadge]);

  const openPopup = () => {
    if (!ready || !window.Calendly) return;
    window.Calendly.initPopupWidget({ url: buildUrl() });
    // No return needed; Calendly closes itself.
  };

  if (useBadge) {
    // Badge renders itself; return null to avoid duplicate UI.
    return null;
  }

  return (
    <button
      type="button"
      onClick={openPopup}
      disabled={!ready}
      className="inline-flex items-center justify-center gap-2 font-bold 
               bg-yellow-900 text-white py-3 px-5 sm:px-7 md:px-8 text-sm sm:text-base md:text-lg 
               rounded-full hover:bg-yellow-700 hover:scale-105 transition-all duration-300 
               animate-bounce-slow shadow-md hover:shadow-yellow-500/40"
    >
      {!ready ? (
        <>
          <span className="h-4 w-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
          <span>Loading scheduler…</span>
        </>
      ) : (
        <span className="flex flex-row items-center gap-2 tracking-wider">
          Schedule a call
          <FaArrowDownLong className="animate-pulse text-base sm:text-lg" />
        </span>
      )}
    </button>
  );
}
