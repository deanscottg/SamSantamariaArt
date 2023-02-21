import Image from "next/image";
import Link from "next/link";
const Gallery = () => {
	return (
		<div className="page-container">
			<div className="py-4 text-center space-y-10">
				<h1>Gallery</h1>
				<p>This is where my art will be categorized and displayed</p>
			</div>
			<div className="flex items-row m-sm  border-4 justify-center items-center p-10 space-x-24">
				<div className="justify-center items-center">
					<Link href="/gallery/painting">
						<Image
							src="/featured2.jpg"
							alt="featured2"
							height={500}
							width={500}
							className="hover:scale-105 duration-500 pb-8"
						></Image>
						<h2 className="text-center">
							Painting/Editioned Prints
						</h2>
					</Link>
				</div>
				<div className="justify-center items-center">
					<Link href="/gallery/photograph">
						<Image
							src="/featured1.jpg"
							alt="featured1"
							height={500}
							width={500}
							className="hover:scale-105 duration-500 pb-8"
						></Image>
						{/* <Link>Painting/Editioned Prints</Link>  */}
					</Link>
					<h2 className="text-center">Photo Journeys</h2>
				</div>

				{/* <Link href="/gallery/photograph">Photgraphs</Link>      */}
			</div>
		</div>
	);
};

export default Gallery;
