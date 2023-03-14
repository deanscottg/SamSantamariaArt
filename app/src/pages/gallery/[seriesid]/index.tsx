import { GetStaticPaths, GetStaticProps } from "next";
import ArtCard from "../../../../components/ArtCard";
import { groq } from "next-sanity";
import { nextSanityClient } from "../../../../lib/client";
import { Series } from "../../../../types/types";

interface Path {
  _id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.seriesid) return { notFound: true };

  const seriesData = await nextSanityClient.fetch(
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

  return {
    props: { seriesData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: Path[] = await nextSanityClient.fetch(
    groq`*[_type == 'series'] { _id }`
  );
  const paths = res.map((series) => {
    return { params: { seriesid: series._id } };
  });
  return {
    paths,
    fallback: false,
  };
};

const Seriesid = ({ seriesData }: { seriesData: Series }) => {
  return (
    <div className="page-container">
      <h1>{seriesData.name}</h1>

      <p>Brief description of Embers</p>
      <div className="art-card-grid">
        {seriesData.paintings.map((painting, i) => (
          <ArtCard paintingData={painting} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Seriesid;
