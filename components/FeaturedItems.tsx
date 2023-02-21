import Image from "next/image";
const FeaturedItems = () => {
    return ( 
    <div className="justify-center items-center">
        <Image src='/featured1.jpg' alt="featured1" height={750} width={750}></Image>
    </div> );
}
 
export default FeaturedItems;