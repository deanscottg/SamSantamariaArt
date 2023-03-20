import Image from "next/image";
import Link from "next/link";
import { Photo } from "../types/types";
import PaintingsDropDown from "./PaintingsDropDown";

type Props = {
  data: Omit<Photo, "_createdAt" | "_rev" | "_type" | "_updatedAt">;
};

const PhotoCard = ({ data }: Props) => {
  return (
    <div className="art-card">
      <Link href="/photoItemPage">
        <Image
          alt={data.name}
          src={data.image.asset.url}
          width={data.image.asset.metadata.dimensions.width}
          height={data.image.asset.metadata.dimensions.height}
          placeholder="blur"
          blurDataURL={data.image.asset.metadata.lqip}
        />
        <h2>{data.name}</h2>
        <p>This is all the info about this photograph</p>
      </Link>
    </div>
  );
};

export default PhotoCard;
