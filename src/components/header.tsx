import { fetchHeroData } from "@/lib/graphql-client";
import { FaArrowDownLong } from "react-icons/fa6";

export default async function Header() {
  const data = await fetchHeroData();

  if (!data) {
    return (
      <header>
        <p>Failed to load hero data.</p>
      </header>
    );
  }

  return (
    <header
      className="max-w-7xl mx-auto px-4 py-10 text-center flex flex-col items-center justify-center gap-6"
      aria-label="Site Header"
    >
      {/* Animated Gradient Title with Letter Spacing & Shadow */}
      <h1
        className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight 
                     bg-gradient-to-r from-yellow-600 via-white to-yellow-900 
                     bg-clip-text text-transparent animate-gradient 
                     tracking-wide drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)]"
      >
        {data.heroTitle}
      </h1>

      {/* Stylish Fade-in Subtitle with Underline & Soft Glow */}
      <h2
        className="md:pb-10 sm:pb-5 text-lg sm:text-xl md:text-2xl font-semibold text-white max-w-2xl mx-auto leading-relaxed 
                     opacity-0 animate-fade-in delay-300 
                     relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] 
                     after:bg-yellow-800 after:rounded-full after:shadow-[0_0_10px_rgba(250,204,21,0.7)]"
      >
        {data.heroSubtitle}
      </h2>

      {/* Bouncing CTA Button with Smooth Shadow & Hover Effects */}
      <a
        href={data.buttonUrl}
        rel="noopener noreferrer"
        title={data.buttonText}
        aria-label={data.buttonText}
        className="inline-flex items-center justify-center gap-2 font-bold bg-yellow-900 text-white 
                   py-3 px-6 sm:px-8 rounded-full text-lg 
                   hover:bg-yellow-700 hover:scale-105 transition-all duration-300 
                   animate-bounce-slow shadow-md hover:shadow-yellow-500/40"
      >
        <FaArrowDownLong className="animate-pulse" />
        {data.buttonText}
      </a>
    </header>
  );
}
