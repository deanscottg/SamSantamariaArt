import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import ArtCard from "../../../components/ArtCard";
import { nextSanityClient } from "../../../lib/client";
import PhotoCard from "../../../components/PhotoCard";
import { photoSchema } from "../../../types/zodSchemas";
import { Photo } from "../../../types/types";
import { z } from "zod";

export const getStaticProps: GetStaticProps = async () => {
  const photoDataResponse = await nextSanityClient.fetch(
    groq`*[_type == 'photograph']{
  _id,
    name, 
    dimensions,
    image{
    asset->{
      ...,
      metadata
    },
 
    }
}`
  );

  const photoData = await z
    .array(
      photoSchema.omit({
        _createdAt: true,
        _rev: true,
        _type: true,
        _updatedAt: true,
      })
    )
    .parseAsync(photoDataResponse);
  //   console.log(photoData);
  return {
    props: { photoData },
  };
};

const Photograph = ({
  photoData,
}: {
  photoData: Omit<Photo, "_createdAt" | "_rev" | "_type" | "_updatedAt">[];
}) => {
  return (
    <div className="page-container">
      <h1>Photo Journeys</h1>
      <p className="text-center">
        A paragraph detailing the process of how I do my photography. I use a
        very good camera and find interesting things to shoot. I love it.
      </p>
      <div className="art-card-grid">
        {photoData.map((photo) => {
          return <PhotoCard key={photo._id} data={photo} />;
        })}
      </div>
    </div>
  );
};

export default Photograph;
