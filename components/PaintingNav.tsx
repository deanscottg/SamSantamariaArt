import Link from "next/link";
const PaintingNav = () => {
    return ( 
        <div className='hidden w-full md:block md:w-auto'>
            <ul className='flex flex-col justify-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
            <Link href="/gallery/flora" className='painting-nav-link'> Flora & Waterscapes </Link>
            <Link href="/gallery/studio" className='painting-nav-link'> Studio Reminiscenes </Link>
            <Link href="/gallery/postulation" className='painting-nav-link'> Postulations Series </Link>
            <Link href="/gallery/embers" className='painting-nav-link'> Embers Series </Link>
            </ul>
        </div>  

     );
}
 
export default PaintingNav;