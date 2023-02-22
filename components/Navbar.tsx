import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import GalleryDropDown from "./GalleryDropDown";

const Navbar = () => {
	const route = useRouter();
	return (
		<nav className="bg-transparent px-2 sm:px-4 py-2.5 rounded">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<a href="/" className="flex items-center">
					<Image
						src="/s-logo.png"
						alt="s-logo"
						height={300}
						width={250}
						className="h-6 mr-3 sm:h-9"
					></Image>
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
				</a>
				<div className="hidden w-full md:block md:w-auto">
					<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 bg-transparent dark:border-gray-300">
						<button className='hover:scale-110 text-bold' onClick={() => route.back()}>
							<svg 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 24 24" 
							fill="white" 
							className="bg-gray-400 hover:bg-indigo-300 w-6 h-6 rounded-md p-1">
  								<path 
								d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
							</svg>

						</button>
						<Link href="/" className="nav-link-btn">
							Home
						</Link>
						{/* <Link href="/" className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" hover:text-purple-600'> Home </Link> */}
						{/* <Link href="/gallery" className='nav-link-btn'> Gallery </Link> */}
						<GalleryDropDown></GalleryDropDown>
						<Link href="/about" className="nav-link-btn">
							{" "}
							About{" "}
						</Link>
						<Link href="/contact" className="nav-link-btn">
							{" "}
							Contact{" "}
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
