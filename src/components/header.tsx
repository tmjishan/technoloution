// ✅ Set revalidation interval (ISR)
export const revalidate = 60;
import { fetchHeroData } from "@/lib/graphql-client";
import { FaArrowDownLong } from "react-icons/fa6";
import { Poppins } from "next/font/google";

// ✅ Load Google Font (Poppins)
const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
});

// ✅ Async Server Component with ISR
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
      className="w-full min-h-screen sm:min-h-screen max-h-screen sm:max-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center flex flex-col items-center justify-center gap-6"
      aria-label="Site Header"
    >
      {/* 🔥 Animated Gradient Title */}
      <h1
        className={`${poppins.className} text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight 
                   bg-gradient-to-r from-yellow-600 via-white to-yellow-900 
                   bg-clip-text text-transparent animate-gradient 
                   tracking-wide drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)]`}
      >
        {data.heroHeading}
      </h1>

      {/* ✨ Subtitle */}
      <h2 className="text-xl lg:text-2xl font-semibold text-white max-w-xl mx-auto leading-relaxed">
        {data.heroSubheading}
      </h2>
      <div className="w-16 sm:w-20 h-[2px] sm:h-[3px] bg-yellow-800 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.7)] mt-2 mx-auto" />

      {/* 🎯 CTA Button (optional, no URL yet) */}
      <a
        href={data.heroButtonUrl}
        title={data.heroCtaButtonText}
        aria-label={data.heroCtaButtonText}
        className="inline-flex items-center justify-center gap-2 font-bold 
                   bg-yellow-900 text-white py-3 px-5 sm:px-7 md:px-8 text-sm sm:text-base md:text-lg 
                   rounded-full hover:bg-yellow-700 hover:scale-105 transition-all duration-300 
                   animate-bounce-slow shadow-md hover:shadow-yellow-500/40"
      >
        <FaArrowDownLong className="animate-pulse text-base sm:text-lg" />
        {data.heroCtaButtonText}
      </a>
    </header>
  );
}
