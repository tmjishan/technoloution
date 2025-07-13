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

    {/* 💠 Service Cards */}
    <div className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative bg-white/5 border border-yellow-700/20 
            backdrop-blur-xl rounded-3xl p-8 pt-16 w-full max-w-xs text-center 
            shadow-md hover:shadow-yellow-600/30 transition-all duration-300 group"
        >
          {/* Diamond Icon Container */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 transform rotate-45">
            <div className="bg-yellow-600 text-white p-5 w-20 h-20 rounded-sm shadow-md flex items-center justify-center rotate-[-45deg] group-hover:scale-110 transition-transform duration-300 text-3xl sm:text-4xl">
              {service.icon}
            </div>
          </div>

          <h3 className="text-white text-xl font-bold tracking-wide mt-6">
            {service.text}
          </h3>
        </div>
      ))}
    </div>
  </section>
));

ServiceView.displayName = "ServiceView";
export default ServiceView;
