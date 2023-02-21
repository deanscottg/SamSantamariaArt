import { useState } from "react";
import Link from "next/link";
import PaintingsDropDown from "./PaintingsDropDown";
const GalleryDropDown = () => {
    const [isOpen, setIsOpen] =useState(false)
    return ( 
        <button 
        onClick={() => setIsOpen((prev) => !prev)}
        className="nav-link-btn flex flex-row">
        Gallery
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

            {isOpen && (
            <div className="bg-transparent absolute top-20 text-gray-800 flex flex-col items start rounded-lg p-2">
                <Link className="gallery-dropdown-item" href="/gallery/painting"> Paintings</Link>
                {/* <PaintingsDropDown></PaintingsDropDown> */}
                <Link className="gallery-dropdown-item"href="/gallery/photograph"> Photography</Link>
            </div>
        )}
        </button>
        
     );
}
 
export default GalleryDropDown;