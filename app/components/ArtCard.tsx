import NextImage from "next/image";
import Link from "next/link";
import { Painting, Series } from "../types/types";

type Props = { paintingData: Painting; seriesData: Series };
const ArtCard = ({ paintingData, seriesData }: Props) => {
  //   const imageProps = useSanityImage(sClient, paintingData.image.asset._id);

  return (
    <div className="art-card">
      <Link
        key={paintingData._id}
        href={"/gallery/" + seriesData._id + "/" + paintingData._id}
      >
        <NextImage
          alt={paintingData.name}
          src={paintingData.image.asset.url}
          width={paintingData.image.asset.metadata.dimensions.width}
          height={paintingData.image.asset.metadata.dimensions.height}
          placeholder="blur"
          blurDataURL={paintingData.image.asset.metadata.lqip}
        />
        <h2>{paintingData.name}</h2>
      </Link>
    </div>
  );
};

export default ArtCard;
function useNextSanityImage() {
  throw new Error("Function not implemented.");
}
