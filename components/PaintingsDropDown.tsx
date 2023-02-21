import { useState } from "react";
import Link from "next/link";
type Props = { isOpen : boolean;}
const PaintingsDropDown = ( {isOpen } : Props ) => {
    const [isPaintingsOpen, setIsPaintingsOpen] =useState(false)
    function handlePaintingsDropDownClick() {
        if (isOpen)
        setIsPaintingsOpen((prev) => !prev)
        // setIsOpen(true)
       console.log('clicked')
    }
    return ( 
    <div>
         <button 
         onClick={handlePaintingsDropDownClick}
        // onClick={() => setIsPaintingsOpen((prev) => !prev )}
        className="gallery-dropdown-item flex flex-row">
        Paintings by series
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-4 h-4"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
        </svg>
    </button>

            {isPaintingsOpen && (
            <div className="bg-transparent absolute top-20 text-gray-800 flex flex-col items start rounded-lg p-2">
                <Link className="gallery-dropdown-item"href="/gallery/flora"> Flora & Waterscapes</Link>
                <Link className="gallery-dropdown-item"href="/gallery/studio"> Studio Reminiscenes</Link>
                <Link className="gallery-dropdown-item" href="/gallery/postulation">Postulations</Link>
                <Link className="gallery-dropdown-item"href="/gallery/embers"> Embers</Link>
            </div>
        )}
        
    </div>
     );
}
 
export default PaintingsDropDown;