import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import PaintingsDropDown from "./PaintingsDropDown";
import { useEffect } from "react";
const GalleryDropDown = () => {
	useEffect(() => {
		setIsOpen(false)
	}, [])
		
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
		<button
			onClick={() => setIsOpen((prev) => !prev)}
			className="nav-link-btn flex flex-row"
		>
			Gallery
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
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
			{isOpen && (
				<div className="bg-transparent absolute top-20 text-gray-800 flex flex-col items start rounded-lg p-2">
					<Link
						className="gallery-dropdown-item"
						href="/gallery/painting"
					>
						{" "}
						Paintings
					</Link>
					<PaintingsDropDown isOpen={isOpen}  />
					<Link
						className="gallery-dropdown-item"
						href="/gallery/photograph"
					>
						{" "}
						Photography
					</Link>
				</div>
			)}
		
	</div>
	);
};

export default GalleryDropDown;
