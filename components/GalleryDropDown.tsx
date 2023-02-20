import { useState } from "react";
import Link from "next/link";
const GalleryDropDown = () => {
    const [isOpen, setIsOpen] =useState(false)
    return ( 
        <button 
        onClick={() => setIsOpen((prev) => !prev)}
        className="nav-link-btn">
        Gallery
            {isOpen && (
            <div className="bg-gray-800 absolute top-20 flex flex-col items start rounded-lg p-2">
                <Link className="gallery-dropdown-item" href="/gallery/painting"> Paintings</Link>
                <Link className="gallery-dropdown-item"href="/gallery/photograph"> Photography</Link>
            </div>
        )}
        </button>
        
     );
}
 
export default GalleryDropDown;