import Image from 'next/image';

export default function Combinations() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-white w-full px-6 md:px-16 lg:px-32 py-20 flex flex-col gap-24">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Image
          src="/assets/benefit-2.jpg"
          alt="Hydration"
          className="h-[300px] md:h-[400px] w-full rounded-2xl object-cover shadow-lg transform hover:scale-105 transition duration-500"
          width={500}
          height={400}
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-800">
            Hydration, naturally.
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">{`
            Bluna is more than just water. It's a refreshing experience, infused
            with real fruit and herbs, designed to elevate your everyday
            hydration.`}
          </p>
          <button className="mt-4 bg-teal-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-teal-600 hover:scale-105 transition-all duration-300 w-fit">
            Buy Bluna
          </button>
        </div>
      </div>

      {/* Our Combinations */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-800">
            Our Combinations
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            At Bluna, we believe in the power of natural ingredients and the
            importance of staying hydrated. Our infused water is crafted with
            care, using only the finest fruits and herbs, to deliver a refreshing
            and flavorful experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: '/assets/iw-4.jpg',
              title: 'Real Fruit Infusion',
              desc: 'We use real fruit and herbs to create our unique flavor combinations, ensuring a natural and authentic taste.',
            },
            {
              img: '/assets/iw-3.jpg',
              title: 'No Added Sugars',
              desc: 'Bluna is naturally sweetened with fruit, containing no added sugars or artificial sweeteners.',
            },
            {
              img: '/assets/iw.jpg',
              title: 'Sustainable Practices',
              desc: 'We are committed to sustainability, from our packaging to our sourcing practices, minimizing our environmental impact.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-500 group"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="h-[220px] w-full rounded-xl object-cover transform group-hover:scale-105 transition duration-500"
              />
              <h3 className="text-2xl font-semibold text-neutral-700 group-hover:text-teal-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Bluna */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-800">
            Why Choose Bluna?
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Bluna is the perfect choice for those seeking a healthier and more
            refreshing way to stay hydrated. Our infused water is not only
            delicious but also packed with natural goodness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '/assets/icons/natural.svg',
              title: 'Natural Ingredients',
              desc: 'Made with real fruit and herbs, Bluna is free from artificial flavors, colors, and preservatives.',
            },
            {
              icon: '/assets/icons/refreshing.svg',
              title: 'Refreshing Flavors',
              desc: 'Explore our range of unique and exciting flavor combinations, designed to tantalize your taste buds.',
            },
            {
              icon: '/assets/icons/hydration.svg',
              title: 'Hydration Boost',
              desc: 'Stay hydrated and energized throughout the day with Bluna’s refreshing and revitalizing infused water.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-neutral-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-500 bg-white flex flex-col gap-4 text-center group"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="mx-auto"
              />
              <h3 className="text-2xl font-semibold text-neutral-700 group-hover:text-teal-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
