import { fetchHeroData } from "@/lib/graphql-client";
import { FaArrowDownLong } from "react-icons/fa6";

export default async function Header() {
  const data = await fetchHeroData();

  if (!data) {
    return (
      <header className="text-center py-10 px-4">
        <p className="text-red-500">Failed to load hero data.</p>
      </header>
    );
  }

  return (
    <header
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center flex flex-col items-center justify-center gap-6"
      aria-label="Site Header"
    >
      {/* 🔥 Animated Gradient Title */}
      <h1
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight 
                   bg-gradient-to-r from-yellow-600 via-white to-yellow-900 
                   bg-clip-text text-transparent animate-gradient 
                   tracking-wide drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)]"
      >
        {data.heroTitle}
      </h1>

      {/* ✨ Responsive Subtitle with Underline */}
      <h2
        className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white max-w-xl mx-auto leading-relaxed 
                   opacity-0 animate-fade-in delay-300 
                   relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 sm:after:w-20 
                   after:h-[2px] sm:after:h-[3px] 
                   after:bg-yellow-800 after:rounded-full after:shadow-[0_0_10px_rgba(250,204,21,0.7)] 
                   pb-4 sm:pb-6 md:pb-8"
      >
        {data.heroSubtitle}
      </h2>

      {/* 🎯 CTA Button */}
      <a
        href={data.buttonUrl}
        rel="noopener noreferrer"
        title={data.buttonText}
        aria-label={data.buttonText}
        className="inline-flex items-center justify-center gap-2 font-bold 
                   bg-yellow-900 text-white py-3 px-5 sm:px-7 md:px-8 text-sm sm:text-base md:text-lg 
                   rounded-full hover:bg-yellow-700 hover:scale-105 transition-all duration-300 
                   animate-bounce-slow shadow-md hover:shadow-yellow-500/40"
      >
        <FaArrowDownLong className="animate-pulse text-base sm:text-lg" />
        {data.buttonText}
      </a>
    </header>
  );
}
