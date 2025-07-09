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
  bg: string;
};

const services: Service[] = [
  {
    text: "Web Development",
    icon: <SiWeb3Dotjs />,
    bg: "bg-yellow-700/50 hover:bg-yellow-700/80",
  },
  {
    text: "Digital Marketing",
    icon: <SiGooglemarketingplatform />,
    bg: "bg-yellow-600/50 hover:bg-yellow-600/80",
  },
  {
    text: "Graphic Design",
    icon: <SiTaichigraphics />,
    bg: "bg-yellow-500/50 hover:bg-yellow-500/80",
  },
  {
    text: "Virtual Assistant",
    icon: <FcAssistant />,
    bg: "bg-yellow-400/50 hover:bg-yellow-400/80",
  },
  {
    text: "Automation",
    icon: <TbAutomation />,
    bg: "bg-yellow-300/50 hover:bg-yellow-300/80",
  },
];

const ServiceView: React.FC = React.memo(() => (
  <section className="w-full py-16 md:py-24 px-6">
    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {services.map((service, index) => (
        <div
          key={index}
          className={`group ${service.bg} text-white rounded-full w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1`}
        >
          <div className="text-4xl sm:text-5xl mb-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
            {service.icon}
          </div>
          <span className="text-center text-xs sm:text-sm font-semibold px-3 tracking-wide">
            {service.text}
          </span>
        </div>
      ))}
    </div>
  </section>
));

export default ServiceView;
