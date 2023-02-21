import ArtCard from "../../../components/ArtCard";
import PhotoCard from "../../../components/PhotoCard";

const Photographs = () => {
    return (
        <div className="page-container">
            <h1>Photo Journeys</h1>
            <p className='text-center'>A paragraph detailing the process of how I do my photography. I use a very good camera and find interesting things to shoot.  I love it. 
            </p>
            <div className='art-card-grid'>    
            <PhotoCard/> 
            <PhotoCard/>        
            <PhotoCard/>        
            <PhotoCard/>        
            <PhotoCard/>        
            <PhotoCard/>        
            <PhotoCard/>        
            <PhotoCard/>        
            <PhotoCard/>        
            </div>
        </div>
    );
}
 
export default Photographs;