import Image from 'next/image';
export default function Benefits() {
    return (
        <div className="min-h-screen bg-white-400 w-full px-40 py-20 flex flex-col gap-20">
            <div className="grid grid-cols-2 gap-15">
                <Image src="/assets/benefit-2.jpg" alt="alt" className="h-[300px] w-full rounded-lg object-cover" width={500} height={500}></Image>
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">Hidration, naturally.</h1>
                    <p className="text-lg">Bluna is more than just water. It's a refreshing experience, infused with real fruit and herbs, designed to elevate your everyday hydration.</p>
                    <button className="bg-cyan-500 text-white px-10 py-2 rounded-full cursor-pointer">Buy Bluna</button>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <article>
                    <h1 className="text-4xl font-bold text-neutral-700">Our Promise</h1>
                    <p className="text-lg text-neutral-600">At Bluna, we believe in the power of natural ingredients and the importance of staying hydrated. Our infused water is crafted with care, using only the finest fruits and herbs, to deliver a refreshing and flavorful experience.</p>
                </article> 
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4">
                        <Image src="/assets/benefit.png" alt="alt" className="h-[200px] w-full rounded-lg object-cover" width={500} height={500}></Image>
                        <h3 className="text-2xl text-neutral-700 font-semibold">Real Fruit Infusion</h3>
                        <p className="text-lg text-neutral-500">We use real fruit and herbs to create our unique flavor combinations, ensuring a natural and authentic taste.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Image src="/assets/benefit.png" alt="alt" className="h-[200px] w-full rounded-lg object-cover" width={500} height={500}></Image>
                        <h3 className="text-2xl text-neutral-700 font-semibold">No Added Sugars</h3>
                        <p className="text-lg text-neutral-500">Bluna is naturally sweetened with fruit, containing no added sugars or artificial sweeteners.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Image src="/assets/benefit.png" alt="alt" className="h-[200px] w-full rounded-lg object-cover" width={500} height={500}></Image>
                        <h3 className="text-2xl text-neutral-700 font-semibold">Sustainable Practices</h3>
                        <p className="text-lg text-neutral-500">We are committed to sustainability, from our packaging to our sourcing practices, minimizing our environmental impact.</p>
                    </div>
            </div>
            </div>
            
        </div>
    );
}