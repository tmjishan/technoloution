"use client";

import {
  SiWeb3Dotjs,
  SiGooglemarketingplatform,
  SiTaichigraphics,
} from "react-icons/si";
import { FcAssistant } from "react-icons/fc";
import { TbAutomation } from "react-icons/tb";
import React from "react";

type Service = {
  text: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  { text: "Web Development", icon: <SiWeb3Dotjs /> },
  { text: "Digital Marketing", icon: <SiGooglemarketingplatform /> },
  { text: "Graphic Design", icon: <SiTaichigraphics /> },
  { text: "Virtual Assistant", icon: <FcAssistant /> },
  { text: "Automation", icon: <TbAutomation /> },
];

const ServiceView: React.FC = React.memo(() => (
  <section className="relative w-full isolate overflow-hidden py-24 px-6 sm:px-8">
    {/* 🔁 Background Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 blur-[2px]"
    >
      <source src="/agency-bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* 🌫️ Overlays */}
    <div className="absolute inset-0 z-0 bg-black/80 mix-blend-overlay" />
    <div className="absolute -top-16 -left-20 w-[300px] h-[300px] rounded-full bg-yellow-700/10 blur-[120px] z-0" />
    <div className="absolute bottom-0 -right-16 w-[250px] h-[250px] rounded-full bg-yellow-600/10 blur-[100px] z-0" />

    {/* Title */}
    <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide leading-tight drop-shadow-md">
        Empowering Your Digital Presence
      </h2>
    </div>

    {/* 💠 Responsive Grid for Service Cards */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-44 h-44 bg-white/10 border border-yellow-500/30 rounded-xl flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40 cursor-pointer group"
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-yellow-600 flex items-center justify-center text-white text-2xl shadow-md shadow-yellow-700/50 mb-3 transition-transform duration-300 group-hover:scale-110">
            {service.icon}
          </div>

          {/* Text */}
          <h3 className="text-yellow-900 font-semibold text-base transition-all duration-300 group-hover:text-white group-hover:tracking-wider">
            {service.text}
          </h3>
        </div>
      ))}
    </div>
  </section>
));

ServiceView.displayName = "ServiceView";
export default ServiceView;
