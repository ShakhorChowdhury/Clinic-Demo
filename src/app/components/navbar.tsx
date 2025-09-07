"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Login from "../login/page";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="font-sans bg-white/50 border border-black/10 rounded-b-2xl container mx-auto w-full flex items-center justify-between px-6 py-4 relative">
      {/* Logo */}
      <div className="flex items-center gap-2 z-20">
        <Image src="/staff.png" alt="Clinic Logo" width={32} height={32} />
        <span className="font-sans font-regular text-2xl text-black">
          BrightPath Clinic
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex gap-8 mx-autopx-4 py-2 xl:pr-16 rounded-full">
        <Link
          href="#services"
          className="text-black text-lg hover:text-blue-700 font-medium transition-colors"
        >
          Dashboard
        </Link>
        <Link
          href="#services"
          className="text-black text-lg hover:text-blue-700 font-medium transition-colors"
        >
          Services
        </Link>

        <Link
          href="#about"
          className="text-black text-lg hover:text-blue-700 font-medium transition-colors"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-black text-lg hover:text-blue-700 font-medium transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Desktop Login Button */}
      <div className="hidden lg:block">
        <Link
          href="/login"
          className="px-5 py-2 bg-[#4338ca] text-sm text-white rounded-sm shadow hover:bg-blue-700 transition-colors"
        >
          Login
        </Link>
      </div>

      {/* Hamburger Icon for Mobile/Tablet */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-20"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-all ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-all ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-all ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-0 min-h-[80%] right-0 w-[50%] bg-white shadow-lg rounded-b-xl flex flex-col items-center gap-6 pt-20 py-8 animate-fade-in z-10">
          <Link
            href="#home"
            className="text-black hover:text-blue-700 font-medium transition-colors text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-black hover:text-blue-700 font-medium transition-colors text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#services"
            className="text-black hover:text-blue-700 font-medium transition-colors text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="#about"
            className="text-black hover:text-blue-700 font-medium transition-colors text-lg"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-black hover:text-blue-700 font-medium transition-colors text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="px-5 py-2 bg-blue-600 text-black rounded-full font-semibold shadow hover:bg-blue-700 transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
