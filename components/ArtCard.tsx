import Image from "next/image";
const ArtCard = () => {
    return (
        <div className="art-card">
                <Image alt="squidward" src="/squidward.jpg" width={275} height={475}/>
                <h2>Painting name</h2>
                <p>
                    This is all the info about this painting
                </p>

                
        </div>
    );
}
 
export default ArtCard;