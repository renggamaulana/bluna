import Image from "next/image";

export default function OurProducts() {
    return (
        <div className="min-h-screen bg-cyan-400 w-full p-20">
            <h1 className="text-4xl font-bold text-white">Our Infused Water</h1>
            <div className="grid grid-cols-3 gap-4 mt-5 text-white text-shadow-md">
                <div className="flex flex-col gap-5">
                    <Image src="/assets/iw.jpg" alt="alt" className="w-full rounded-lg object-cover h-full" width={500} height={500}></Image>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-3xl font-semibold">Bluna Original</h3>
                        <p>Refreshing blend of fresh lemon, cucumber, strawberry, honey and mint.</p>
                    </div>    
                </div>
                 <div className="flex flex-col gap-5">
                    <Image src="/assets/iw-1.jpg" alt="alt" className="w-full rounded-lg object-cover h-full" width={500} height={500}></Image>
                    <div className="flex flex-col gap-2"> 
                        <h3 className="text-3xl font-semibold">Bluna Original</h3>
                        <p>Refreshing blend of fresh lemon, cucumber, strawberry, honey and mint.</p>
                    </div>    
                </div>
                 <div className="flex flex-col gap-5">
                    <Image src="/assets/iw-3.jpg" alt="alt" className="w-full rounded-lg object-cover h-full" width={500} height={500}></Image>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-3xl font-semibold">Bluna Original</h3>
                        <p>Refreshing blend of fresh lemon, cucumber, strawberry, honey and mint.</p>
                    </div>    
                </div>
            </div>
        </div>
    );
}