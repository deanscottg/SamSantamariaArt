import Link from "next/link";
import { nextSanityClient } from "../lib/client";
import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { Series } from "../types/types";

// interface Path {
//   _id: string;
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.seriesid) return { notFound: true };

  const seriesData = await nextSanityClient.fetch(
    groq`*[_type == 'series']{
            _id,
            name
        }`
  );

  console.log(seriesData);
  return {
    props: { seriesData },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res: Path[] = await nextSanityClient.fetch(
//     groq`*[_type == 'series'] { _id }`
//   );
//   const paths = res.map((series) => {
//     return { params: { seriesid: series._id } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

const PaintingNav = ({ seriesData }: { seriesData: Series[] }) => {
  return (
    <div className="hidden w-full md:block md:w-auto">
      <ul className="flex flex-col justify-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        {seriesData?.map((series: Series) => (
          <Link
            className="painting-nav-link"
            key={series._id}
            href={"/gallery/ + `${series._id}`"}
          >
            {series.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PaintingNav;

/*   
  
        /* /* <Link href="/gallery/flora" className="painting-nav-link">
          {" "}
          Flora & Waterscapes{" "}
        </Link>
        <Link href="/gallery/studio" className="painting-nav-link">
          {" "}
          Studio Reminiscenes{" "}
        </Link>
        <Link href="/gallery/postulation" className="painting-nav-link">
          {" "}
          Postulations Series{" "}
        </Link>
        <Link href="/gallery/embers" className="painting-nav-link">
          {" "}
          Embers Series{" "}
        </Link>
        <Link href="/gallery/greenfield" className="painting-nav-link">
          {" "}
          Greenfield Series{" "}
        </Link> */
