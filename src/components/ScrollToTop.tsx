"use client";

import { JSX, useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { throttle } from "lodash";

export default function ScrollToTop(): JSX.Element | null {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setVisible(window.scrollY > 300);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed cursor-pointer bottom-6 right-6 z-50 bg-yellow-700 text-white p-3 rounded-md shadow-md hover:bg-yellow-800 transition-colors"
    >
      <FiChevronUp size={24} color="currentColor" />
    </button>
  );
}
