import ArtCard from "../../../components/ArtCard";
import { groq } from "next-sanity";
import { GetStaticProps } from "next";

// import { client } from "../lib/client";
import { nextSanityClient } from "../../../lib/client";

export const getStaticProps: GetStaticProps = async ({}) => {
  const res = await nextSanityClient.fetch(groq`*[_type == 'series'] { _id }`);
  console.log(res);
  //   const data = await JSON.parse(res.data);

  return {
    props: { seriesData: res },
  };
};

const Embers = () => {
  return (
    <div className="page-container">
      <h1>Embers Series</h1>
      <p>Brief description of Embers</p>
      <div className="art-card-grid">
        <ArtCard></ArtCard>
        <ArtCard></ArtCard>
        <ArtCard></ArtCard>
        <ArtCard></ArtCard>
        <ArtCard></ArtCard>
        <ArtCard></ArtCard>
        <ArtCard></ArtCard>
        <ArtCard></ArtCard>
        <ArtCard></ArtCard>
        <ArtCard></ArtCard>
      </div>
    </div>
  );
};

export default Embers;
