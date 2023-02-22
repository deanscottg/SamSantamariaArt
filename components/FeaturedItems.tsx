import Image from "next/image";

const FeaturedItems = () => {
    return ( 
    <div className="justify-center items-center">
        <Image 
        src='/featured1.jpg' 
        alt="featured1" 
        height={650} 
        width={650}></Image>
    </div> );
}
 
export default FeaturedItems;