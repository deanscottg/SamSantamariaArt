import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import GalleryDropDown from "./GalleryDropDown";
import slogo from "/public/s-logo.png";
import { motion, animate, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const route = useRouter();
	return (
		<nav className="bg-transparent px-2 sm:px-4 py-2.5 rounded">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<Link href="/" className="flex items-center">
					<Image
						src={slogo}
						alt="s-logo"
						height={300}
						width={250}
						className="h-6 mr-3 sm:h-9"
					></Image>
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
				</Link>
				<div className="hidden w-full md:block md:w-auto">
					<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 bg-transparent dark:border-gray-300">
						<motion.button
							whileHover={{ x: -3 }}
							className="nav-link-btn"
							onClick={() => route.back()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="white"
								className="bg-transparent hover:fill-indigo-400 w-7 h-7 rounded-md p-1"
							>
								<path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
							</svg>
						</motion.button>
						<Link href="/" className="nav-link-btn">
							Home
							<motion.div whileHover={{ scale: 1.5 }}></motion.div>
						</Link>
						<Link href="/about" passHref className="nav-link-btn">
							{" "}
							About{" "}
						</Link>
						<Link href="/contact" className="nav-link-btn">
							{" "}
							Contact{" "}
						</Link>
						<GalleryDropDown></GalleryDropDown>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
