import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
    const route= useRouter();
    return ( 

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">            
            <div className="container flex flex-wrap items-center justify-between mx-auto">                
                <a href="/" className="flex items-center"> 
                    <Image src="/s-logo.png" alt="s-logo" height={300} width={250} className="h-6 mr-3 sm:h-9">

                    </Image>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <div className='hidden w-full md:block md:w-auto'>
                    <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                    <button onClick={() => route.back()}>Go back</button>
                    <Link href="/" className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" hover:text-purple-600'> Home </Link>
                    <Link href="/gallery" className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" hover:text-purple-600'> Gallery </Link>
                    <Link href="/about" className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" hover:text-purple-600'> About </Link>
                    <Link href="/contact" className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" hover:text-purple-600'> Contact </Link>
                    </ul>
                </div>  
            </div>
        </nav>
   
     );
}
 
export default Navbar;
