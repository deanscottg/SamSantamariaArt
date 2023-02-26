import Image from "next/image";
const ArtItemPage = () => {
    return ( 
    <div className='page-container'>
        <h1>Painting Name</h1>
        <div className='flex flex-col items-center'>
            <Image 
                className='pt-24'
                alt="squidward" 
                src="/squidward.jpg" 
                width={800} 
                height={800}
            />
            <p>Created: </p>
            <p>Series: </p>
            <p>Medium: </p>
            <p className="italic">Availbale as: Original | Limited Edition Print </p>
            <p>Sizes offered: </p>
        </div>
    </div> );
}
 
export default ArtItemPage;