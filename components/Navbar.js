import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
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
