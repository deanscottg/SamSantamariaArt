import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const route= useRouter();
    return ( 
        <nav>
            <div>
                <button onClick={() => route.back()}>Go back</button>
            </div>
            <div className='navbar'>
                <h1>Sam Santamaria</h1>
            </div>
            <Link href="/"> Home </Link>
            <Link href="/gallery"> Gallery </Link>
            <Link href="/about"> About </Link>
            <Link href="/contact"> Contact </Link>

        </nav>
     );
}
 
export default Navbar;
