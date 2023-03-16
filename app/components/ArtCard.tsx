import NextImage from "next/image";
import Link from "next/link";
import { Painting, Dimension, Image, Asset } from "../types/types";
import { sClient } from "../lib/client";
import { useNextSanityImage as useSanityImage } from "next-sanity-image";

type Props = { paintingData: Painting };
const ArtCard = ({ paintingData }: Props) => {
  //   const imageProps = useSanityImage(sClient, paintingData.image.asset._id);

  return (
    <div className="art-card">
      <Link href="/artItemPage">
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
