import Image from "next/image";
const FeaturedItems = () => {
    return ( 
    <div className="justify-center items-center">
        <Image src='/featured1.jpg' alt="featured1" height={350} width={350}></Image>
    </div> );
}
 
export default FeaturedItems;