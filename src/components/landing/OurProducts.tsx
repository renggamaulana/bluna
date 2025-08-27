"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurProducts() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const products = [
    {
      img: "/assets/iw.jpg",
      title: "Bluna Original",
      desc: "Refreshing blend of fresh lemon, cucumber, strawberry, honey and mint.",
    },
    {
      img: "/assets/iw-1.jpg",
      title: "Bluna Citrus Mint",
      desc: "A zesty mix of orange, lemon, and fresh mint for ultimate refreshment.",
    },
    {
      img: "/assets/iw-3.jpg",
      title: "Bluna Berry Fresh",
      desc: "Sweet and tangy flavor from strawberry, blueberry, and a hint of lime.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".section-heading"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-white to-teal-50 w-full py-24 px-6 md:px-16 lg:px-32"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-800">
          Our <span className="text-teal-500">Infused</span> Water
        </h1>
        <p className="section-heading mt-4 text-neutral-500 text-lg md:text-xl leading-relaxed">
          Discover the freshness of natural ingredients crafted to keep you
          hydrated and energized.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={product.img}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Content */}
            <div className="p-8 text-center flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-neutral-800 group-hover:text-teal-600 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed">
                {product.desc}
              </p>
              <button className="mt-4 px-6 py-2 bg-teal-500 text-white font-medium rounded-full shadow-md hover:bg-teal-600 hover:shadow-lg transition-all duration-300">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
