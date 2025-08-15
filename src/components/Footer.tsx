import Link from "next/link";

export default function Footer () {
    return (
        <footer className="p-10 text-neutral-400">
            <div className="mx-30 mb-5">
                <ul className="flex justify-between font-semibold">
                    <li>
                        <Link href="/">Shop</Link>
                    </li>
                    <li>
                        <Link href="/">Flavors</Link>
                    </li>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                    <li>
                        <Link href="/">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/">Terms of Services</Link>
                    </li>
                </ul>
            </div>
            <p className="text-center font-semibold text-md">Copyright &copy; 2023 Bluna Infused Water</p>
        </footer>
    )
}