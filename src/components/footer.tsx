"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import FormPopup from "./FormPopup";

export default function Footer() {
  return (
    <>
      <FormPopup />
      <footer className="bg-gray-900/90 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* ✅ Logo & Branding */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" aria-label="Techno Loution Home">
              <div className="flex items-center space-x-3 cursor-pointer">
                <Image
                  src="/Technoloution-website-Logo-PNG-3.png"
                  alt="Logo"
                  width={160}
                  height={80}
                  className="h-auto w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* ✅ Footer Nav Links */}
          <nav className="flex justify-center space-x-6 text-sm sm:text-base font-medium">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ✅ Social Links */}
          <div className="flex justify-center md:justify-end space-x-6 text-gray-400">
            <a
              href="https://www.facebook.com/share/1CGbBonxbV/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://x.com/technoloution_?s=11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/technoloution_?igsh=dWY1ank1dzUyMjBn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* ✅ Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Technoloution</span>. All
          rights reserved.
        </div>
      </footer>
    </>
  );
}
