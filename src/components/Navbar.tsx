"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // icon dari lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/icon.png"
            alt="logo"
            width={36}
            height={36}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <h1 className="font-bold text-2xl text-neutral-700 italic group-hover:text-teal-500 transition-colors duration-300">
            Bluna
          </h1>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-lg font-medium text-neutral-600">
          <li>
            <Link
              href="/about"
              className="hover:text-teal-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-teal-500 transition-colors duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/health-tips"
              className="hover:text-teal-500 transition-colors duration-300"
            >
              Health Tips
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-neutral-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-60 shadow-lg" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-lg font-medium text-neutral-700">
          <li>
            <Link
              href="/about"
              className="hover:text-teal-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-teal-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/health-tips"
              className="hover:text-teal-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Health Tips
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
