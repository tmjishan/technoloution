import Typewriter from "./Typewriter";

export default function Tagline() {
  return (
    <section className="bg-gray-800/50 px-3 sm:px-6 flex flex-col items-center gap-5 md:gap-8 py-16 shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
        Techno Loution
      </h2>

      <div className="w-full max-w-2xl px-2 sm:px-0">
        <Typewriter />
      </div>

      <h3 className="text-center text-xl sm:text-2xl md:text-4xl text-white font-bold max-w-3xl mx-auto leading-snug px-4 sm:px-0">
        We’re the alternative to the agency status quo.
      </h3>

      <span className="block w-12 h-1 bg-yellow-800 rounded-md mx-auto my-4"></span>

      <p className="text-center text-sm sm:text-base md:text-xl text-white max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed">
        A digital agency built for impact. We design and develop powerful
        websites, launch marketing that converts, and provide virtual support
        that keeps your business moving—no matter your size or stage.
      </p>
    </section>
  );
}
