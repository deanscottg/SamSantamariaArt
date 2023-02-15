import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const route= useRouter();
    return ( 
                
    <div className='navbar'>
        <div className='title'>  
        <Link href="/">            
            <h1>Sam Santamaria</h1>
        </Link>               
        </div>

        <nav>
            <div>
                <button onClick={() => route.back()}>Go back</button>
            </div>
            <Link href="/"> Home </Link>
            <Link href="/gallery"> Gallery </Link>
            <Link href="/about"> About </Link>
            <Link href="/contact"> Contact </Link>

        </nav>
    </div>
     );
}
 
export default Navbar;
