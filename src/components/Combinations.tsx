"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Combinations() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section headings
      gsap.utils.toArray(".section-heading").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // Animate cards
      gsap.utils.toArray(".fade-card").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-white via-teal-50/40 to-white w-full px-6 md:px-16 lg:px-32 py-20 flex flex-col gap-28"
    >
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Image
          src="/assets/benefit-2.jpg"
          alt="Hydration"
          className="h-[320px] md:h-[420px] w-full rounded-3xl object-cover shadow-xl transform hover:scale-105 transition duration-500"
          width={500}
          height={400}
        />
        <div className="flex flex-col gap-6">
          <h1 className="section-heading text-3xl md:text-5xl font-extrabold text-neutral-800 leading-tight">
            Hydration, <span className="text-teal-600">naturally.</span>
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Bluna is more than just water. It&apos;s a refreshing experience,
            infused with real fruit and herbs, designed to elevate your everyday
            hydration.
          </p>
          <button className="mt-2 bg-teal-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-teal-600 hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit">
            Buy Bluna
          </button>
        </div>
      </div>

      {/* Our Combinations */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="section-heading text-3xl md:text-4xl font-extrabold text-neutral-800">
            Our <span className="text-teal-600">Combinations</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            At Bluna, we believe in the power of natural ingredients and the
            importance of staying hydrated. Our infused water is crafted with
            care, using only the finest fruits and herbs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              img: "/assets/iw-4.jpg",
              title: "Real Fruit Infusion",
              desc: "We use real fruit and herbs to create unique flavor combinations, ensuring a natural and authentic taste.",
            },
            {
              img: "/assets/iw-3.jpg",
              title: "No Added Sugars",
              desc: "Bluna is naturally sweetened with fruit, containing no added sugars or artificial sweeteners.",
            },
            {
              img: "/assets/iw.jpg",
              title: "Sustainable Practices",
              desc: "We are committed to sustainability, from our packaging to sourcing practices, minimizing our environmental impact.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="fade-card flex flex-col gap-4 bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition duration-500 group"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="h-[230px] w-full rounded-2xl object-cover transform group-hover:scale-105 transition duration-500"
              />
              <h3 className="text-2xl font-semibold text-neutral-800 group-hover:text-teal-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Bluna */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="section-heading text-3xl md:text-4xl font-extrabold text-neutral-800">
            Why <span className="text-teal-600">Choose</span> Bluna?
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Bluna is the perfect choice for those seeking a healthier and more
            refreshing way to stay hydrated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: "/assets/icons/natural.svg",
              title: "Natural Ingredients",
              desc: "Made with real fruit and herbs, Bluna is free from artificial flavors, colors, and preservatives.",
            },
            {
              icon: "/assets/icons/refreshing.svg",
              title: "Refreshing Flavors",
              desc: "Explore our range of unique and exciting flavor combinations, designed to tantalize your taste buds.",
            },
            {
              icon: "/assets/icons/hydration.svg",
              title: "Hydration Boost",
              desc: "Stay hydrated and energized throughout the day with Bluna’s refreshing and revitalizing infused water.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="fade-card border border-neutral-200 rounded-3xl shadow-md p-8 hover:shadow-xl transition duration-500 bg-white flex flex-col gap-4 text-center group"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                className="mx-auto group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="text-2xl font-semibold text-neutral-800 group-hover:text-teal-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
