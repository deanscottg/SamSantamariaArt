import { GetStaticPaths, GetStaticProps } from "next";
import ArtCard from "../../../../components/ArtCard";
import { groq } from "next-sanity";
import { nextSanityClient } from "../../../../lib/client";
import { Series } from "../../../../types/types";
import {
  seriesSchema,
  dimensionSchema,
  imageSchema,
} from "../../../../types/zodSchemas";
import { z } from "zod";

const paintingSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  dimensions: z.array(dimensionSchema),
  image: imageSchema,
});
const ommittedSeriesSchema = z.object({
  _createdAt: z.string().optional(),
  _id: z.string(),
  _rev: z.string().optional(),
  _type: z.string().optional(),
  _updatedAt: z.string().optional(),
  name: z.string(),
  paintings: z.array(paintingSchema),
});

const mergedSeriesSchema = ommittedSeriesSchema.merge(paintingSchema);

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
  console.log(params.seriesid, "test");
  console.log(seriesDataResponse, "check");

  const seriesData = mergedSeriesSchema
    // Removing these fields from the schema
    // Not testing data response for these fields
    .omit({
      _createdAt: true,
      _rev: true,
      _type: true,
      _id: true,
      _updatedAt: true,
    })
    // Verifying the data from the api
    .parse(seriesDataResponse);

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
