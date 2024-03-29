import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { z } from "zod";
import ArtCard from "../../../../components/ArtCard";
import { nextSanityClient } from "../../../../lib/client";
import { Series, WithRequired } from "../../../../types/types";
import {
	dimensionSchema,
	imageSchema,
	paintingSchema,
	seriesSchema,
} from "../../../../types/zodSchemas";

const seriesWithIdSchema = z.object({
	_id: z.string(),
	name: z.string(),
	paintings: z.array(
		paintingSchema.required({
			_id: true,
		})
	),
});

type SeriesWithId = z.infer<typeof seriesWithIdSchema>;

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await nextSanityClient.fetch(groq`*[_type == 'series'] { _id }`);
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
	  _id,
    name,
    paintings[]->{
	  _id,
      name,
      images[]{
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
	const seriesData = seriesWithIdSchema.parse(seriesDataResponse);

	return {
		// Returing clean data
		props: { seriesData },
	};
};

const Seriesid = ({ seriesData }: { seriesData: SeriesWithId }) => {
	return (
		<div className="page-container">
			<h1>{seriesData.name}</h1>
			<p>Brief description of {seriesData.name}</p>
			<div className="art-card-grid">
				{seriesData.paintings.map((painting, i) => (
					<ArtCard seriesId={seriesData._id} paintingData={painting} key={i} />
				))}
			</div>
		</div>
	);
};

export default Seriesid;
