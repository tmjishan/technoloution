"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800/60 px-4 py-12 rounded-2xl">
      <div className="text-center space-y-6 max-w-xl">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight">
          404
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-gray-900 px-6 py-2.5 rounded-md font-medium hover:bg-gray-200 transition duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
