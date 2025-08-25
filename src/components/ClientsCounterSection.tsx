"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type CounterProps = {
  /** যে সংখ্যা পর্যন্ত কাউন্ট করবে */
  end: number;
  /** কোথা থেকে শুরু করবে (ডিফল্ট: 0) */
  start?: number;
  /** এনিমেশন সময় (মিলিসেকেন্ড, ডিফল্ট: 1600) */
  duration?: number;
  /** সংখ্যা আগে/পরে কী বসবে */
  prefix?: string;
  suffix?: string;
  /** ডেসিমাল ডিজিট (ডিফল্ট: 0) */
  decimals?: number;
  /** ভিউতে এলে একবারই চালু হবে (ডিফল্ট: true) */
  once?: boolean;
  /** বড় স্ক্রিনে ফন্ট সাইজ বাড়াতে ক্লাস ওভাররাইডের সুযোগ */
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function Counter({
  end,
  start = 0,
  duration = 1600,
  prefix = "",
  suffix = "+",
  decimals = 0,
  once = true,
  className = "",
}: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [value, setValue] = useState<number>(start);
  const [done, setDone] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  // reduce-motion সাপোর্ট
  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined" || !("matchMedia" in window))
      return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (once && startedRef.current) return;

    // reduce-motion হলে সরাসরি টার্গেট দেখান
    if (reduceMotion || duration <= 0) {
      setValue(end);
      setDone(true);
      startedRef.current = true;
      return;
    }

    let startTime = 0;
    startedRef.current = true;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(t);
      const current = start + (end - start) * eased;
      setValue(current);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(end);
        setDone(true);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, reduceMotion, duration, start, end, once]);

  // সুন্দর ফরম্যাটিং
  const formatted = useMemo(() => {
    const n =
      decimals > 0 ? Number(value.toFixed(decimals)) : Math.round(value);
    return new Intl.NumberFormat(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(n);
  }, [value, decimals]);

  return (
    <span
      ref={ref}
      className={className}
      aria-live="polite"
      title={`${prefix}${end}${suffix ?? ""}`}
    >
      {prefix}
      {formatted}
      {suffix}
      <span className="sr-only">{done ? "" : " counting"}</span>
    </span>
  );
}

type ClientsCounterSectionProps = {
  /** টার্গেট ক্লায়েন্ট সংখ্যা (ডিফল্ট: 200) */
  clients?: number;
  /** সেকশনের শিরোনাম */
  heading?: string;
  /** সাবটেক্সট/ডিসক্রিপশন */
  subtext?: string;
};

const ClientsCounterSection: React.FC<ClientsCounterSectionProps> = ({
  clients = 200,
  heading = "Trusted by Clients Worldwide",
  subtext = "We’re proud to have partnered with entrepreneurs, startups and enterprises.",
}) => {
  return (
    <section
      className="
        relative isolate overflow-hidden
        px-6 py-16 sm:px-8 sm:py-20
        bg-gradient-to-b from-yellow-50 to-white
        dark:from-zinc-900 dark:to-black
      "
    >
      {/* সাজেশন: ব্যাকগ্রাউন্ড অলঙ্করণ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
      >
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-3xl mix-blend-multiply dark:opacity-20" />
        <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-amber-200 blur-3xl mix-blend-multiply dark:opacity-20" />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-w sm:text-4xl md:text-5xl ">
          {heading}
        </h2>
        {subtext && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-yellow-900 sm:text-lg dark:text-yellow-900">
            {subtext}
          </p>
        )}

        {/* কাউন্টার ব্লক */}
        <div
          className="
            mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6
            sm:grid-cols-2 md:grid-cols-3
          "
        >
          {/* Clients */}
          <div
            className="
              group rounded-2xl border border-yellow-900/50
              bg-white/50 p-6 backdrop-blur
              shadow-sm hover:shadow-md transition
              dark:bg-white/10"
          >
            <div className="text-sm uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
              Clients
            </div>
            <div className="mt-2 flex items-end justify-center gap-2">
              <Counter
                end={clients}
                start={0}
                duration={1600}
                suffix="+"
                className="text-5xl font-black leading-none text-white sm:text-6xl md:text-7xl "
              />
            </div>
            <p className="mt-3 text-sm text-yellow-900">And counting…</p>
          </div>

          {/* চাইলে আরও স্ট্যাট যোগ করুন */}
          <div className="rounded-2xl border border-yellow-900/50 bg-white/50 p-6 backdrop-blur shadow-sm dark:bg-white/10 ">
            <div className="text-sm uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
              Projects Delivered
            </div>
            <div className="mt-2 flex items-end justify-center gap-2">
              <Counter
                end={450}
                start={20}
                duration={1800}
                suffix="+"
                className="text-4xl font-extrabold leading-none text-white sm:text-5xl md:text-6xl "
              />
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-900/50 bg-white/50 p-6 backdrop-blur shadow-sm dark:bg-white/10 ">
            <div className="text-sm uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
              Countries Served
            </div>
            <div className="mt-2 flex items-end justify-center gap-2">
              <Counter
                end={28}
                start={0}
                duration={1400}
                suffix="+"
                className="text-4xl font-extrabold leading-none text-white sm:text-5xl md:text-6xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCounterSection;
