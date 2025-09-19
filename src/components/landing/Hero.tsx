"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        btnRef.current,
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.4"
      );

    // Parallax effect on scroll
    gsap.to(".hero-bg", {
      scale: 1.1,
      y: 50,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="hero-section relative w-full h-screen md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/hero-4.jpg"
        alt="Bluna Infused Water"
        priority
        fill
        className="hero-bg object-cover brightness-95"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-xl"
        >
          <span className="block">Bluna</span>
          <span className="block text-teal-400">Infused Water</span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-4 text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto"
        >
          Refresh your day with natural flavors, <br /> anytime & anywhere.
        </p>

        {/* CTA Buttons */}
        <div
          ref={btnRef}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-full shadow-lg hover:bg-teal-600 hover:scale-105 transition-all duration-300"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-white/90 text-teal-700 font-semibold rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
