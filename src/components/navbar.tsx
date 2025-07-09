"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active link check - home page জন্য exact match, বাকি গুলো startsWith
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className={`block py-2 px-3 rounded transition-colors duration-200 font-semibold ${
            isActive(link.href)
              ? "text-yellow-600"
              : "hover:text-yellow-700 text-white"
          }`}
          onClick={() => isMobile && setOpen(false)}
        >
          {link.name}
        </Link>
      </li>
    ));

  return (
    <nav
      className={`py-4 sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-md rounded-b-2xl"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/">
          <div className="w-[120px] h-auto">
            <Image
              src="/Technoloution-website-Logo-PNG-3.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="Site Logo"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">{renderLinks()}</ul>

        {/* CTA Desktop Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center font-extrabold bg-yellow-800 py-2 px-4 sm:px-5 rounded-2xl cursor-pointer text-white text-base sm:text-lg hover:bg-yellow-600 transition-colors duration-200"
        >
          Hire Us!
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 pt-2 pb-4 space-y-3 transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col">{renderLinks(true)}</ul>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="w-full inline-flex items-center justify-center font-extrabold bg-yellow-800 py-2 px-4 rounded-2xl cursor-pointer text-white text-base hover:bg-yellow-600 transition-colors"
        >
          Hire Us!
        </Link>
      </div>
    </nav>
  );
}
