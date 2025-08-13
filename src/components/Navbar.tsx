import Image from "next/image";
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="fixed w-full text-white text-shadow-lg bg-white/10 backdrop-blur-md font-semibold text-xl top-0 left-0 flex items-center justify-between px-10 py-5 z-50">
            <Link href="/">
                <Image src="/icon.png" alt="logo" width={62} height={62}></Image>
            </Link>
            <ul className="flex items-center justify-center gap-3">
               <li>
                    <Link href="about">About</Link>
               </li>
               <li>
                    <Link href="blog">Blog</Link>
               </li>
               <li>
                    <Link href="health-tips">Health Tips</Link>
               </li>
            </ul>
        </nav>
    );
}