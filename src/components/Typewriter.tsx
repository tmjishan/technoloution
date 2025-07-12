"use client";

import { useEffect, useRef, useState } from "react";

const phrases = [
  "We build different.",
  "No shortcuts. Just results.",
  "Built to win.",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isFocused) return;

    const currentPhrase = phrases[phraseIndex];

    if (charIndex < currentPhrase.length) {
      timeoutRef.current = setTimeout(() => {
        setText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 120);
    } else {
      timeoutRef.current = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, phraseIndex, isFocused]);

  const fontSizeClasses =
    "text-lg sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl";
  const textShadowClass =
    "text-yellow-700 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]";

  return (
    <div className="w-full flex items-center justify-center px-2 sm:px-4 py-8 sm:py-12">
      <div className="relative w-full max-w-3xl flex items-center justify-center text-center font-mono font-semibold">
        {/* Fake input for caret control */}
        <span
          tabIndex={0}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setText("");
            setCharIndex(0);
          }}
          className={`w-full bg-transparent focus:outline-none caret-yellow-500 text-transparent ${fontSizeClasses}`}
        >
          &nbsp;
        </span>

        {/* Visible text overlay */}
        {!isFocused && (
          <span
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-caret font-semibold ${fontSizeClasses} ${textShadowClass}`}
          >
            {text}
            <span className="border-r-2 border-yellow-500 animate-blink ml-1" />
          </span>
        )}
      </div>
    </div>
  );
}
