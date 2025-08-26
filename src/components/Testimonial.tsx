"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      img: "/assets/testimoni/testi1.jpeg",
      quote:
        "Bluna completely upgraded the way I stay hydrated. I feel fresher and more energized throughout the day.",
      name: "Sophia, 24",
    },
    {
      img: "/assets/testimoni/testi2.jpeg",
      quote:
        "Bluna is a healthy yet tasty way to help me drink more water. The taste is amazing, and I love that it’s made with all-natural ingredients.",
      name: "Ethan, 29",
    },
    {
      img: "/assets/testimoni/testi3.jpeg",
      quote:
        "I really love the natural taste, and it makes staying hydrated so easy. Now it’s a must-have in my daily routine.",
      name: "Olivia, 22",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".testimonial-card").forEach((el: any, i) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      gsap.fromTo(
        ".testimonial-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-heading",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-white via-teal-50/40 to-white w-full py-20 px-6 md:px-12 lg:px-24"
    >
      {/* Heading */}
      <h1 className="testimonial-heading text-3xl md:text-5xl font-extrabold text-center text-neutral-800 tracking-tight">
        What <span className="text-teal-600">They Say</span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="testimonial-card flex flex-col bg-white border border-neutral-200 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-[360px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <article className="p-6 flex flex-col gap-4">
              <h3 className="text-base md:text-lg font-medium italic text-neutral-600 leading-relaxed group-hover:text-teal-600 transition-colors duration-300">
                “{item.quote}”
              </h3>
              <span className="text-neutral-700 font-semibold tracking-wide group-hover:text-teal-500 transition-colors">
                — {item.name}
              </span>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
