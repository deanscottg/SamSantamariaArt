import Image from "next/image";
import Link from "next/link";
import { Photo } from "../types/types";

type Props = {
  photoData: Omit<Photo, "_createdAt" | "_rev" | "_type" | "_updatedAt">;
};

const PhotoCard = ({ photoData }: Props) => {
  return (
    <div className="art-card">
      <Link key={photoData._id} href={"/photographs/" + photoData._id}>
        <Image
          alt={photoData.name}
          src={photoData.image.asset.url}
          width={photoData.image.asset.metadata.dimensions.width}
          height={photoData.image.asset.metadata.dimensions.height}
          placeholder="blur"
          blurDataURL={photoData.image.asset.metadata.lqip}
        />
        <h2>{photoData.name}</h2>
        <p>This is all the info about this photograph</p>
      </Link>
    </div>
  );
};

export default PhotoCard;
