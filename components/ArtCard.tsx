import Image from "next/image";
const ArtCard = () => {
    return (
        <div className="container">
                <h2>Painting name</h2>
                <Image alt="squidward" src="/squidward.jpg" width={300} height={500}/>
                <p>
                    This is all the info about this painting
                </p>

                
        </div>
    );
}
 
export default ArtCard;