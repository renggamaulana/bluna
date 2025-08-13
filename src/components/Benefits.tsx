import Image from 'next/image';
export default function Benefits() {
    return (
        <div className="min-h-screen bg-white-400 w-full p-20">
            <div className="grid grid-cols-2">
                <div>
                    <Image src="/assets/benefit-2.jpg" alt="alt" className="w-full rounded-lg object-cover h-full" width={500} height={500}></Image>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}