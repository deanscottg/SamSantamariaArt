import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import Image from "next/image";
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

  // console.log("painting paths", paths);
  return {
    paths,
    fallback: false,
  };
};
// /gallery/[seriesid]/[paintingid]

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.paintingsid) return { notFound: true };
  const paintingDataResponse = await nextSanityClient.fetch(
    groq`*[_id == '${params.paintingsid}']{
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
    .parse(paintingDataResponse);

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
        <Image
          className="pt-24"
          alt={paintingsData.name}
          src={paintingsData.image.asset.url}
          width={paintingsData.image.asset.metadata.dimensions.width}
          height={paintingsData.image.asset.metadata.dimensions.height}
          placeholder="blur"
          blurDataURL={paintingsData.image.asset.metadata.lqip}
        />

        <p className="italic">
          Availbale as: Original | Limited Edition Print{" "}
        </p>
        <p>Sizes offered: </p>
      </div>
    </div>
  );
};

export default PaintingId;
