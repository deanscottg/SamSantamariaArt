import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import Image from "next/image";
import { z } from "zod";
import { nextSanityClient } from "../../../lib/client";
import { Photo } from "../../../types/types";
import { photoSchema } from "../../../types/zodSchemas";

export const getStaticPaths: GetStaticPaths = async () => {
	const photoRes = await nextSanityClient.fetch(
		groq`*[_type == 'photograph']{
            _id
        }`
	);
	const photoPathsData = z
		.array(
			z.object({
				_id: z.string(),
			})
		)
		.parse(photoRes);

	const paths = photoPathsData.map((photo) => {
		return { params: { photographid: photo._id } };
	});
	console.log("photo paths", paths);
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params?.photographid) return { notFound: true };
	const photoDataResponse = await nextSanityClient.fetch(
		groq`*[_id == '${params.photographid}'][0]{
    _id,
        name,
        image{
        asset->{
            ...,
            metadata,
        }
        },
        dimensions
    }`
	);
	const photosData = photoSchema
		.omit({
			_createdAt: true,
			_rev: true,
			_type: true,
			_updatedAt: true,
		})
		.parse(photoDataResponse);
	return {
		props: { photosData },
	};
};

const PhotgraphId = ({
	photosData,
}: {
	photosData: Omit<Photo, "_createdAt" | "_updatedAt" | "_type" | "_rev">;
}) => {
	return (
		<div className="page-container">
			<h1>{photosData.name}</h1>
			<div className="flex flex-col items-center">
				<Image
					className="pt-24"
					alt={photosData.name}
					src={photosData.image.asset.url}
					width={photosData.image.asset.metadata.dimensions.width}
					height={photosData.image.asset.metadata.dimensions.height}
					placeholder="blur"
					blurDataURL={photosData.image.asset.metadata.lqip}
				/>
				<p className="italic">
					Availbale as: Original | Limited Edition Print{" "}
				</p>
				<p>Sizes offered: </p>
			</div>
		</div>
	);
};

export default PhotgraphId;
