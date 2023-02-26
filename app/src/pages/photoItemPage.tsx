import Image from "next/image";
const PhotoImagePage = () => {
    return ( 
    <div className='page-container'>
        <h1>Photo Name</h1>
        <div className='flex flex-col items-center'>
            <Image 
                className='pt-24'
                alt="nicephoto" 
                src="/nicephoto.jpg" 
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
 
export default PhotoImagePage;