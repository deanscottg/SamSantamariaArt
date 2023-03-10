import Image from "next/image";
import Link from "next/link";
const PhotoCard = () => {
    return (
        <div className="art-card">
            <Link href='/photoItemPage'>
                <Image alt="nicephoto" src="/nicephoto.jpg" width={275} height={475}/>
                <h2>Photo Name</h2>
                <p>
                    This is all the info about this photograph
                </p>
            </Link>
        </div>
    );
}
 
export default PhotoCard;