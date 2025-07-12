"use client";

import { useEffect, useRef } from "react";

type RevealTextProps = {
  text: string;
};

export default function RevealText({ text }: RevealTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealText = textRef.current;
    if (!revealText) return;

    const duration = 0.8;
    const delay = 0.3;
    const text = revealText.textContent || "";
    const letters = text.split("");
    revealText.textContent = "";

    const middle = letters.filter((e) => e !== " ").length / 2;

    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
      revealText.appendChild(span);
    });
  }, []);

  return (
    <div className="w-full bg-gray-900/60 py-6 sm:py-10 md:py-14">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div
          ref={textRef}
          className="reveal text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase font-raleway font-semibold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-white"
        >
          {text.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
