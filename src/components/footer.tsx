import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import FormPopup from "./FormPopup";

export default function Footer() {
  return (
    <>
      <FormPopup />
      <footer id="footer" className=" text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Brand */}
          <Link href="/" aria-label="Techno Loution Home">
            <div className="flex items-center space-x-3 cursor-pointer">
              <Image
                src="/Technoloution-website-Logo-PNG-3.png"
                alt="Logo"
                width={200}
                height={100}
                className="h-[100%] w-auto"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex space-x-6">
            <Link
              href="/"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-6 text-gray-400">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-500 transition-colors duration-200"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500 select-none">
          &copy; {new Date().getFullYear()} Techno Loution. All rights reserved.
        </div>
      </footer>
    </>
  );
}
