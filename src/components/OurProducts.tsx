import Image from "next/image";

export default function OurProducts() {
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

  return (
    <section className="min-h-screen bg-white w-full py-20 px-6 md:px-16 lg:px-32">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-neutral-800">
        Our Infused Water
      </h1>
      <p className="text-center text-neutral-500 mt-3 text-lg max-w-2xl mx-auto">
        Discover the freshness of natural ingredients crafted to keep you hydrated and energized.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={product.img}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3 text-center">
              <h3 className="text-2xl font-semibold text-neutral-700 group-hover:text-teal-600 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed">
                {product.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
