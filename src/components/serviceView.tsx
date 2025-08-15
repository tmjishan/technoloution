"use client";

import { SiGooglemarketingplatform } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

import { FaPaintBrush, FaShieldAlt, FaVideo } from "react-icons/fa";
import { FcAssistant } from "react-icons/fc";
import { TbAutomation } from "react-icons/tb";
import React from "react";

type Service = {
  text: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    text: "Digital Marketing",
    icon: <SiGooglemarketingplatform aria-hidden="true" />,
  },
  { text: "Virtual Assistant", icon: <FcAssistant aria-hidden="true" /> }, // উদাহরণ: এক পরিবারের আইকন চাইলে বদলান
  { text: "Web Development", icon: <CgWebsite aria-hidden="true" /> },
  { text: "Graphic Design", icon: <FaPaintBrush aria-hidden="true" /> },
  { text: "Automation", icon: <TbAutomation aria-hidden="true" /> },
  { text: "Video Editing", icon: <FaVideo aria-hidden="true" /> },
  { text: "Cybersecurity", icon: <FaShieldAlt aria-hidden="true" /> },
  { text: "Web Design", icon: <CgWebsite aria-hidden="true" /> },
];

const ServiceView: React.FC = React.memo(() => (
  <section className="relative isolate w-full overflow-hidden py-24 px-6 sm:px-8 sm:mt-5">
    {/* Background Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/agency-bg-poster.jpg"
      aria-hidden="true"
      tabIndex={-1}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-30 blur-[2px]"
    >
      <source src="/agency-bg.mp4" type="video/mp4" />
    </video>

    {/* Overlays */}
    <div className="absolute inset-0 z-10 bg-black/80 mix-blend-overlay" />
    <div className="absolute -top-16 -left-20 z-10 h-[300px] w-[300px] rounded-full bg-yellow-700/10 blur-[120px]" />
    <div className="absolute bottom-0 -right-16 z-10 h-[250px] w-[250px] rounded-full bg-yellow-600/10 blur-[100px]" />

    {/* Title */}
    <div className="relative z-20 mx-auto mb-16 max-w-4xl text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide leading-tight drop-shadow-md">
        Empowering Your Digital Presence
      </h2>
    </div>

    {/* Grid */}
    <div className="relative z-20 grid grid-cols-2 place-items-center gap-2 md:gap-6 sm:grid-cols-2 md:grid-cols-4">
      {services.map((service) => (
        <button
          key={service.text}
          type="button"
          className="
  group
  flex aspect-square
  w-36 sm:w-40 md:w-44 xl:w-48 max-w-full
  flex-col items-center justify-center
  gap-2 sm:gap-3
  rounded-2xl border border-yellow-500/30
  bg-white/10
  text-center
  shadow-sm
  p-4 sm:p-5
  transition-transform duration-300
  motion-safe:hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40
  focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
  touch-manipulation
  backdrop-blur supports-[backdrop-filter]:bg-white/10
"
          aria-label={service.text}
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-600 text-2xl text-white shadow-md shadow-yellow-700/50 transition-transform duration-300 group-hover:scale-110">
            {service.icon}
          </div>
          <h3 className="text-base font-semibold text-yellow-100 transition-all duration-300 group-hover:tracking-wider">
            {service.text}
          </h3>
        </button>
      ))}
    </div>
  </section>
));

ServiceView.displayName = "ServiceView";
export default ServiceView;
