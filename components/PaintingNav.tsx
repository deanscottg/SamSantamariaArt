import Link from "next/link";
const PaintingNav = () => {
    return ( 
        <div className='hidden w-full md:block md:w-auto'>
            <ul className='flex flex-col justify-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <Link href="/gallery/flora" className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" hover:text-purple-600'> Flora & Waterscapes </Link>
            <Link href="/gallery/studio" className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" hover:text-purple-600'> Studio Reminiscenes </Link>
            <Link href="/gallery/postulation" className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" hover:text-purple-600'> Postulations Series </Link>
            <Link href="/gallery/embers" className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" hover:text-purple-600'> Embers Series </Link>
            </ul>
        </div>  

     );
}
 
export default PaintingNav;