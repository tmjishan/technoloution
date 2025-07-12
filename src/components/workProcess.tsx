"use client";

import { FaRegLightbulb } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";

const workProcess = [
  {
    title: "Planning",
    icon: <FaRegLightbulb />,
    description: `We develop a site map – a list of all main topic areas of the site. This gives us a guide as to what content will be on the site, and is essential to developing a consistent, easy to understand navigational system. This is also the point where we decide what technologies should be implemented – interactive forms, CMS (content management system), etc.`,
    bg: "bg-gray-700/50 hover:bg-gray-700/80",
  },
  {
    title: "Development",
    icon: <MdDeveloperMode />,
    description: `Drawing from the information gathered up to this point, we determine the look and feel of the site. We also incorporate elements such as the company logo, colors and the theme to help strengthen the identity of your company on the website. In this phase, communication is crucial to ensure that the final product will match your needs and expectations.`,
    bg: "bg-gray-600/50 hover:bg-gray-600/80",
  },
  {
    title: "Testing",
    icon: <VscDebugStart />,
    description: `We attend to the final details and test your web site. We test things such as the complete functionality of forms or other scripts, we test for last minute compatibility issues, ensuring that the site is optimized to be viewed properly in any browser versions. Here we make sure that all files have been uploaded correctly, and that it is fully functional.`,
    bg: "bg-gray-500/50 hover:bg-gray-500/80",
  },
];

export default function WorkProcessSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-10 md:pb-20 bg-gray-900/60 rounded-3xl">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Our Work Process
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Grow your business and save time with seamless experience
        </p>
      </div>

      {/* Steps */}
      <div className="mt-14 grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {workProcess.map((step, index) => (
          <div
            key={index}
            className={`group ${step.bg} text-white rounded-2xl p-6 flex flex-col gap-4 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out`}
          >
            <div className="text-4xl mb-2 group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out text-yellow-500">
              {step.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">{step.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-100">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
