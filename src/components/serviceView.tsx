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
  <section className="w-full py-8 sm:py-10 md:py-20 px-4 sm:px-6">
    <div
      className="max-w-7xl mx-auto grid grid-flow-dense gap-4 sm:gap-6 md:gap-8
                 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-fr"
    >
      {services.map((service, index) => (
        <div
          key={index}
          className={`group ${service.bg} text-white rounded-full w-full aspect-square 
                      flex flex-col items-center justify-center 
                      shadow-md hover:shadow-xl 
                      transition-all duration-300 ease-in-out 
                      transform hover:scale-105 hover:-translate-y-1`}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl mb-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
            {service.icon}
          </div>
          <span className="text-center text-xs sm:text-sm md:text-base font-semibold px-2 tracking-wide">
            {service.text}
          </span>
        </div>
      ))}
    </div>
  </section>
));

export default ServiceView;
