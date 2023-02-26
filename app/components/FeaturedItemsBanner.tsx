import Image from "next/image";
import Link from "next/link";

const FeaturedItemsBanner = () => {
    return ( 
    <div className="m-0 w-screen bg-white h-200 flex flex-col content-center rounded-sm">
        <div>
            <h2 className='text-5xl pt-4'>Featured Works</h2>
        </div>
        <div className=" m-auto flex flex-col content-center">
            <Image
            src="/featured1.jpg"
            alt="featured1"
            height={300}
            width={300}
            className="p-6 justify-center"
            >
            </Image>
            <Link
                className="text-semibold text-lg text-black hover:underline text-bold"
                href="/contact"
            >   Contact us!
            </Link>

        </div>
        
        {/* <Image 
        src='/featured1.jpg' 
        alt="featured1" 
        height={650} 
        width={650}></Image> */}
    </div> );
}
 
export default FeaturedItemsBanner;