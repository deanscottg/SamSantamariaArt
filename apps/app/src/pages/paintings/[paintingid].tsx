import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import NextImage from "next/image";
import { z } from "zod";
import { nextSanityClient } from "../../../lib/client";
import { Painting } from "../../../types/types";
import { paintingSchema } from "../../../types/zodSchemas";

export const getStaticPaths: GetStaticPaths = async () => {
	const paintingsRes = await nextSanityClient.fetch(
		groq`*[_type == 'painting']{
    _id
  }`
	);
	const paintingPathsData = z
		.array(
			z.object({
				_id: z.string(),
			})
		)

		.parse(paintingsRes);

	const paths = paintingPathsData.map((painting) => {
		return { params: { paintingid: painting._id } };
	});

	return {
		paths,
		fallback: false,
	};
};
// /gallery/[seriesid]/[paintingid]

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params?.paintingid) return { notFound: true };
	const paintingsDataResponse = await nextSanityClient.fetch(
		groq`*[_id == '${params.paintingid}'][0]{
            _id,
            name,
            image{
                asset->{
                    ...,
                    metadata,
                }
            },
            dimensions[]
        }`
	);

	const paintingsData = paintingSchema
		.omit({
			_createdAt: true,
			_rev: true,
			_type: true,
			_updatedAt: true,
		})
		.parse(paintingsDataResponse);

	return {
		props: { paintingsData },
	};
};

const PaintingId = ({
	paintingsData,
}: {
	paintingsData: Omit<Painting, "_createdAt" | "_updatedAt" | "_type" | "_rev">;
}) => {
	return (
		<div className="page-container">
			<h1>{paintingsData.name}</h1>
			<div className="flex flex-col items-center">
				{paintingsData.images && paintingsData.images[0] && (
					<NextImage
						alt={paintingsData.name}
						src={paintingsData.images[0].asset.url}
						width={paintingsData.images[0].asset.metadata.dimensions.width}
						height={paintingsData.images[0].asset.metadata.dimensions.height}
						placeholder="blur"
						blurDataURL={paintingsData.images[0].asset.metadata.lqip}
						className="pt-24"
					/>
				)}

				<p className="italic pt-8">
					Availbale as: Original | Limited Edition Print{" "}
				</p>
				<p>Dimensions offered: </p>
				<ul>
					{paintingsData.dimensions.map((dimension) => (
						<p key={paintingsData.name}>
							{dimension.height} x {dimension.width} x {dimension.depth}{" "}
							(inches)
						</p>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PaintingId;
