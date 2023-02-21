import Link from "next/link";
import Image from "next/image";
const Gallery = () => {
    return ( 
    <div className="page-container">
        <div className="py-4 text-center space-y-10">
            <h1>Gallery</h1>
            <p>This is where my art will be categorized and displayed</p>
        </div>
        <div className='flex items-row m-sm  border-4 justify-center items-center p-10 space-x-24'>
            <div className="justify-center items-center">
                <a href="/gallery/painting">
                <Image 
                    src='/featured2.jpg' 
                    alt="featured2" height={400} 
                    width={400}
                    className="hover:scale-105 duration-500"
                >
                    
                </Image>
                    <h2 className="text-center">Painting/Editioned Prints</h2>
                </a>
            </div>   
            <div className="justify-center items-center">
                <a href="/gallery/photograph">
                <Image 
                    src='/featured1.jpg' 
                    alt="featured1" 
                    height={400} 
                    width={400}
                    className="hover:scale-105 duration-500"
                >    
                </Image>
                {/* <Link>Painting/Editioned Prints</Link>  */}
                </a>
                <h2 className="text-center">Photo Journeys</h2>

            </div>          

            {/* <Link href="/gallery/photograph">Photgraphs</Link>      */}
        </div>
    </div>
    );
}
 
export default Gallery;