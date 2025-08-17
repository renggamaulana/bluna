import Image from "next/image";

export default function Testimonial() {
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

  return (
    <section className="min-h-screen bg-white w-full py-20 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-neutral-800 capitalize tracking-tight">
        What They Say
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="flex flex-col bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <article className="p-6 flex flex-col gap-4">
              <h3 className="text-base md:text-lg font-medium italic text-neutral-600 leading-relaxed group-hover:text-teal-600 transition-colors duration-300">
                “{item.quote}”
              </h3>
              <span className="text-neutral-500 font-semibold">{item.name}</span>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
