import { useState } from "react";
import Link from "next/link";
type Props = { isOpen : boolean;}
const PaintingsDropDown = ( {isOpen } : Props ) => {
    const [isPaintingsOpen, setIsPaintingsOpen] =useState(false)
    function handlePaintingsDropDownClick() {
        if (isOpen)
        setIsPaintingsOpen((prev) => !prev)
    }
    return ( 
    <div>
         <button 
         onClick={handlePaintingsDropDownClick}
        className="gallery-dropdown-item flex flex-row">
        Paintings by series
		{ isPaintingsOpen ? (
			<svg 
				xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 24 24" fill="currentColor" 
				className="w-5 h-5 pt-.75 text-center">
					<path 
						fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" 
						clip-rule="evenodd" 
					/>
			</svg>
		) : (
			<svg 
				xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 24 24" 
				fill="currentColor" 
				className="w-5 h-5 pt-.75">
					<path 
						fill-rule="evenodd"
						d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
						clip-rule="evenodd" 
					/>
			</svg>

			)	
		}
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