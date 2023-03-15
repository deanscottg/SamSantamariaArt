import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import FeaturedItemsBanner from "../../components/FeaturedItemsBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="page-container">
			<div className="">
				<h1 className="text-center  py-2">Sam Santamaria Art</h1>
				<h2 className="text-center text-3xl">
					Fine Art out of Tampa Florida
				</h2>
				<p className="text-center tracking-wider">
					Artist | Photographer | Author{" "}
				</p>
			</div>
			<div className="justify-center flex h-screen pb-16">
				<Image
					src="/ArtistImage.jpg"
					alt="ArtistImage"
					height={200}
					width={175}
					className="pt-12"
				/>

				{/* <div className='flex  flex-col items-row  rounded-md h-130 w-150 m-sm  justify-center items-center pt-16'>
          <FeaturedItems></FeaturedItems>
          <div>
              <p className="text-center py-10">Featured Works</p>

          </div>
        // </div>  */}
			</div>
			<FeaturedItemsBanner />

			{/* <div className="m-0 w-screen bg-white h-40">
          
        </div> */}

			{/* <Link  className="btn" href="/gallery">Check out my latest work!</Link> */}
		</div>
	);
}
