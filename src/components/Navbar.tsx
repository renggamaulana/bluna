"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/icon.png"
            alt="logo"
            width={38}
            height={38}
            className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
          />
          <h1
            className={`font-extrabold text-2xl italic transition-colors duration-500 ${
              isScrolled
                ? "text-neutral-700 group-hover:text-teal-500"
                : "text-white group-hover:text-teal-300"
            }`}
          >
            Bluna
          </h1>
        </Link>

        {/* Menu Desktop */}
        <ul
          className={`hidden md:flex items-center gap-8 text-lg font-medium transition-colors duration-300 ${
            isScrolled ? "text-neutral-700" : "text-white"
          }`}
        >
          {["About", "Blog", "Health Tips"].map((item, i) => (
            <li key={i} className="relative group">
              <Link
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="transition-colors duration-300 group-hover:text-teal-500"
              >
                {item}
              </Link>
              {/* Underline Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-500 transition-all duration-500 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isScrolled ? "text-neutral-700" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul
          className={`flex flex-col items-center gap-6 py-6 text-lg font-medium transition-all duration-500 ${
            isScrolled ? "text-neutral-700" : "text-white bg-teal-500/90 backdrop-blur-md"
          }`}
        >
          {["About", "Blog", "Health Tips"].map((item, i) => (
            <li key={i}>
              <Link
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative group"
                onClick={() => setIsOpen(false)}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
