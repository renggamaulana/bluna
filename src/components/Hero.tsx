import Image from "next/image";

export default function HeroSection () {
    return (
        <div className="relative">
            <Image src="/assets/hero-4.jpg" alt="alt" className="w-screen object-cover h-screen" width={1920} height={1080} />
            <div className="absolute top-1/2 -right-1/6 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-6xl font-bold text-white text-shadow-md uppercase tracking-tighter">Bluna Infused Water</h1>
                <p className="text-center text-white text-shadow-md font-semibold text-2xl">Kesegaran Dalam Genggaman</p>
            </div>
        </div>
    );
}