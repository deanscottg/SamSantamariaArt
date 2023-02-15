import Link from "next/link";
const Gallery = () => {
    return ( 
        <div>
            <h1>Welcome to my Gallery</h1>
            <p>This is where my art will be categorized and displayed</p>
            <div>
                <Link href="/gallery/painting">Painting/Editioned Prints</Link>
            </div>
            <div>            
                <Link href="/gallery/photograph">Photgraphs</Link>
            </div>

        </div>
     );
}
 
export default Gallery;