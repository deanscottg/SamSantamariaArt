import { useState } from "react";
import Link from "next/link";
const PaintingsDropDown: React.FC<{isOpen: boolean}> = ( ) => {
    const [isPaintingsOpen, setIsPaintingsOpen] =useState(false)
    function handlePaintingsDropDownClick() {
       console.log('clicked')
    }
    return ( 
         <button 
         onClick={handlePaintingsDropDownClick}
        // onClick={() => setIsPaintingsOpen((prev) => !prev )}
        className="gallery-dropdown-item flex flex-row">
        Paintings by series
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

            {isPaintingsOpen && (
            <div className="bg-transparent absolute top-20 text-gray-800 flex flex-col items start rounded-lg p-2">
                <Link className="gallery-dropdown-item"href="/gallery/flora"> Flora & Waterscapes</Link>
                <Link className="gallery-dropdown-item"href="/gallery/studio"> Studio Reminiscenes</Link>
                <Link className="gallery-dropdown-item" href="/gallery/postulation">Postulations</Link>
                <Link className="gallery-dropdown-item"href="/gallery/embers"> Embers</Link>
            </div>
        )}
        </button>
        
     );
}
 
export default PaintingsDropDown;