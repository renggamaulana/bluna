"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apa itu Bluna Infused Water?",
    answer:
      "Bluna Infused Water adalah minuman sehat berbahan dasar air mineral yang dipadukan dengan buah-buahan segar alami tanpa tambahan gula atau pengawet.",
  },
  {
    question: "Apa manfaat minum Infused Water?",
    answer:
      "Membantu menjaga hidrasi tubuh, meningkatkan metabolisme, mendetoks racun, serta memberi rasa segar alami tanpa rasa bosan minum air putih.",
  },
  {
    question: "Berapa lama infused water bisa bertahan?",
    answer:
      "Infused water sebaiknya dikonsumsi dalam 24 jam agar rasa dan nutrisi buah tetap terjaga.",
  },
  {
    question: "Apakah Bluna menggunakan gula tambahan?",
    answer:
      "Tidak. Semua rasa manis berasal dari buah alami yang direndam langsung, sehingga lebih sehat dan rendah kalori.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative max-w-3xl mx-auto px-6 py-20">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-white rounded-md p-5">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 backdrop-blur-md bg-white/70 border border-teal-100"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg text-gray-800"
            >
              {faq.question}
              <ChevronDown
                className={`w-6 h-6 text-teal-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-teal-400/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-40 h-40 bg-emerald-400/30 rounded-full blur-3xl -z-10" />
    </section>
  );
}
