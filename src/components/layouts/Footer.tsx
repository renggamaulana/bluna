import Link from "next/link";
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-600 px-6 md:px-16 lg:px-32 py-10 mt-20 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <h1 className="text-lg font-semibold text-teal-600">Bluna</h1>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 font-medium text-sm">
          <li>
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Flavors
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-teal-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Media */}
        <div className="flex gap-4 text-xl">
          <Link href="https://instagram.com" target="_blank" className="hover:text-teal-600 transition-colors">
            <FiInstagram />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-teal-600 transition-colors">
            <FiTwitter />
          </Link>
          <Link href="https://facebook.com" target="_blank" className="hover:text-teal-600 transition-colors">
            <FiFacebook />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="hover:text-teal-600 transition-colors">
            <FiYoutube />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-neutral-500 text-sm mt-6">
        © 2023 Bluna Infused Water — Kesegaran Dalam Genggaman
      </p>
    </footer>
  );
}
