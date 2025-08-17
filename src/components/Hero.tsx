'use client';
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/hero-4.jpg"
        alt="Bluna Infused Water"
        priority
        fill
        className="object-cover brightness-90"
      />

      {/* Overlay Gradient (softer look) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl tracking-tight animate-slideDown">
          Bluna Infused Water
        </h1>
        <p className="mt-4 text-base md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl mx-auto animate-fadeIn delay-200">
          Naturally refreshing, anytime, anywhere.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-full shadow-md hover:bg-teal-600 hover:scale-105 transition-all duration-300"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-full shadow-md hover:bg-neutral-100 hover:scale-105 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 1.2s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
