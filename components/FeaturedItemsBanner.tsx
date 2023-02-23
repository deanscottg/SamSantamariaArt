import Image from "next/image";

const FeaturedItemsBanner = () => {
    return ( 
    <div className="m-0 w-screen bg-white h-200 flex flex-col rounded-sm">
        <div>
            <h1 className='text-5xl pt-4'>Featured Works</h1>
        </div>
        <div className="mx-32 grid grid-cols-1 content-center">
            <Image
            src="/featured1.jpg"
            alt="featured1"
            height={300}
            width={300}
            className="p-6 justify-center"
            >
        </Image>
        </div>
        
        {/* <Image 
        src='/featured1.jpg' 
        alt="featured1" 
        height={650} 
        width={650}></Image> */}
    </div> );
}
 
export default FeaturedItemsBanner;