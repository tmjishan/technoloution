"use client";

import { useEffect, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

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
  useBadge?: boolean;
  showHeroBtn?: boolean;
  showFloatBtn?: boolean;
};

export default function CalendlyPopup({
  useBadge = false,
  showHeroBtn = false,
  showFloatBtn = false,
}: Props) {
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
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (existing?.getAttribute("data-loaded") === "true") {
      setReady(true);
    } else {
      const script = existing ?? document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        script.setAttribute("data-loaded", "true");
        setReady(true);

        // Optional badge init
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
    }

    if (useBadge && window.Calendly?.initBadgeWidget && ready) {
      window.Calendly.initBadgeWidget({
        url: buildUrl(),
        text: "Schedule time with me",
        color: "#0069ff",
        textColor: "#ffffff",
        branding: true,
      });
    }
  }, [useBadge, ready]);

  const openPopup = () => {
    if (!ready || !window.Calendly) return;
    window.Calendly.initPopupWidget({ url: buildUrl() });
  };
  if (useBadge) return null;

  if (!showHeroBtn && !showFloatBtn) return null;

  return (
    <>
      {/* HERO BUTTON */}
      {showHeroBtn && (
        <button
          type="button"
          onClick={openPopup}
          disabled={!ready}
          aria-label="Schedule a call"
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
      )}

      {/* FLOATING BUTTON (bottom-right) */}
      {showFloatBtn && (
        <button
          type="button"
          onClick={openPopup}
          disabled={!ready}
          aria-label="Schedule a call (floating)"
          className="group fixed top-30 md:left-[-5px] z-50 bg-yellow-800 text-white
               shadow-lg cursor-pointer transition-all 
               md:w-10 md:hover:left-0 
               rounded-r-md  
               overflow-hidden 
               "
        >
          {!ready ? (
            <span
              className="[writing-mode:vertical-rl] rotate-180
                       flex items-center justify-center px-2 py-3 text-xs"
            >
              Loading…
            </span>
          ) : (
            <span
              className="[writing-mode:vertical-rl] rotate-180
                       flex items-center justify-center gap-2 px-2 md:py-3
                       tracking-wider text-xs md:text-sm"
            >
              Book A Call{" "}
              <FaRegCalendarAlt className="animate-pulse md:text-xl " />
            </span>
          )}
        </button>
      )}
    </>
  );
}
