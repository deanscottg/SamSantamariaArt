import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { z } from "zod";
import ArtCard from "../../../../components/ArtCard";
import { nextSanityClient } from "../../../../lib/client";
import { Series } from "../../../../types/types";
import {
	dimensionSchema,
	imageSchema,
	paintingSchema,
	seriesSchema,
} from "../../../../types/zodSchemas";

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await nextSanityClient.fetch(
		groq`*[_type == 'series'] { _id }`
	);
	const pathsData = z
		.array(
			z.object({
				_id: z.string(),
			})
		)
		.parse(res);

	const paths = pathsData.map((series) => {
		return { params: { seriesid: series._id } };
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params?.seriesid) return { notFound: true };

	const seriesDataResponse = await nextSanityClient.fetch(
		groq`*[_id == '${params.seriesid}'][0]{
    name,
    paintings[]->{
      name,
      image{
        asset->{
          ...,
          metadata
        }
    },
      dimensions[]{
        height,
        width,
        depth
      }
    }
}`
	);
	console.log(params.seriesid, "seriesId");
	console.log(seriesDataResponse, "Data");

	const seriesData = seriesSchema.parse(seriesDataResponse);

	return {
		// Returing clean data
		props: { seriesData },
	};
};

const Seriesid = ({
	seriesData,
}: {
	seriesData: Omit<
		Series,
		"_createdAt" | "_rev" | "_type" | "_id" | "_updatedAt"
	>;
}) => {
	return (
		<div className="page-container">
			<h1>{seriesData.name}</h1>
			<p>Brief description of {seriesData.name}</p>
			<div className="art-card-grid">
				{seriesData.paintings.map((painting, i) => (
					<ArtCard paintingData={painting} key={i} />
				))}
			</div>
		</div>
	);
};

export default Seriesid;
