import Image from "next/image";
import Link from "next/link";
const ArtCard = () => {
    return (
        <div className="art-card">
            <Link href='/artItemPage'>
                <Image alt="squidward" src="/squidward.jpg" width={275} height={475}/>
                <h2>Painting name</h2>
                <p>
                    This is all the info about this painting
                </p>
            </Link>
        </div>
    );
}
 
export default ArtCard;