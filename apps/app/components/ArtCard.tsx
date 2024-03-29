import NextImage from "next/image";
import Link from "next/link";
import { Painting, WithRequired } from "../types/types";

type Props = {
	paintingData: WithRequired<Painting, "_id">;
	seriesId: string;
};

const ArtCard = ({ paintingData, seriesId }: Props) => {
	//   const imageProps = useSanityImage(sClient, paintingData.image.asset._id);
	return (
		<div className="art-card">
			<Link key={paintingData._id} href={"/paintings/" + paintingData._id}>
				{paintingData.images && paintingData.images[0] && (
					<NextImage
						alt={paintingData.name}
						src={paintingData.images[0].asset.url}
						width={paintingData.images[0].asset.metadata.dimensions.width}
						height={paintingData.images[0].asset.metadata.dimensions.height}
						placeholder="blur"
						blurDataURL={paintingData.images[0].asset.metadata.lqip}
					/>
				)}
				<h2>{paintingData.name}</h2>
			</Link>
		</div>
	);
};

export default ArtCard;
function useNextSanityImage() {
	throw new Error("Function not implemented.");
}
