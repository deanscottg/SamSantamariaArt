import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Link from "next/link";
import { nextSanityClient } from "../lib/client";
import { Series } from "../types/types";

const PaintingNav = ({ seriesData }: { seriesData: Series[] }) => {
	return (
		<div className="hidden w-full md:block md:w-auto">
			<ul className="flex flex-col justify-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
				{seriesData?.map((series: Series) => (
					<Link
						className="painting-nav-link"
						key={series._id}
						href={"/gallery/" + series._id}
					>
						{series.name}
					</Link>
				))}
			</ul>
		</div>
	);
};

export default PaintingNav;
