"use client";

import { useEffect, useState } from "react";
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";

interface Location {
  address: string;
}

interface ContactInfoProps {
  title?: string;
  subtitle?: string;
  phoneTitle?: string;
  phones?: string[];
  mapTitle?: string;
  locations?: Location[];
  emailTitle?: string;
  email?: string;
}

const staticFallback = {
  title: "Let׳s Meet",
  subtitle: "Coffee Is On Us",
  phoneTitle: "Give Us A Call​​",
  phones: ["+88017-15133672"],
  mapTitle: "We're On The Map​​",
  locations: [
    { address: "250 University Ave #213, Toronto, ON M5H 3E5" },
    { address: "2220 Midland Ave, #118, Toronto, ON, M1P 3E6" },
    { address: "1 Russell St E, #609, Lindsay, ON K9V 1Z7" },
  ],
  emailTitle: "Send Us A Message​​",
  email: "info@technoloution.com",
};

export default function ContactInfoSection(props: ContactInfoProps) {
  const [data, setData] = useState(staticFallback);

  useEffect(() => {
    if (props && Object.keys(props).length > 0) {
      setData({
        ...staticFallback,
        ...props,
      });
    }
  }, [props]);

  const cardStyle = `
    group
    bg-gray-800/40
    hover:bg-gray-800/70
    backdrop-blur-md
    border border-yellow-800/10
    shadow-md hover:shadow-yellow-600/30
    text-white
    rounded-2xl
    p-6
    flex flex-col
    gap-4
    transition-all
    duration-300
    ease-in-out
    hover:animate-zoom-bounce
  `;

  const iconStyle = `
    text-4xl
    mb-2
    text-yellow-800
    transition-transform
    duration-700
    ease-in-out
  `;

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-10 md:pb-20 bg-gray-900/60 rounded-3xl my-16">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          {data.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Phone Card */}
        <div className={cardStyle}>
          <div className={iconStyle}>
            <MdLocalPhone />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold">
            {data.phoneTitle}
          </h3>
          {data.phones.map((phone, idx) => (
            <p
              key={idx}
              className="text-sm sm:text-base leading-relaxed text-gray-100"
            >
              {phone}
            </p>
          ))}
        </div>

        {/* Location Card */}
        <div className={cardStyle}>
          <div className={iconStyle}>
            <MdLocationOn />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold">{data.mapTitle}</h3>
          {data.locations.map((loc, idx) => (
            <p
              key={idx}
              className="text-sm sm:text-base leading-relaxed text-gray-100"
            >
              {loc.address}
            </p>
          ))}
        </div>

        {/* Email Card */}
        <div className={cardStyle}>
          <div className={iconStyle}>
            <MdEmail />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold">
            {data.emailTitle}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-100">
            {data.email}
          </p>
        </div>
      </div>
    </section>
  );
}
