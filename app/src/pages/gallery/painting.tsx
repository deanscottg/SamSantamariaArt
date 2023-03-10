import PaintingNav from "../../../components/PaintingNav";
const Paintings = () => {
    return (
        <div className="page-container h-screen">
            <div className="py-4">
                <h1 className="text-center  py-2">Paintings and Editioned Prints</h1>
                <p className='my-10 mx-60 text-center'>
                    All original, one-of-a-kind paintings and photographs are available.
                    Limited and numbered editions of the originals are reproduced as
                    museum quality prints on canvas or paper. Canvas prints are stretched
                    over 1 ½ -inch wood mounts and are ready to hang without framing.
                    Prints on acid free deckle edge paper (feathery edges) are unframed or
                    come with the option to be matted and framed to tastefully present
                    the art and photographs.
                </p>
                <PaintingNav></PaintingNav>
            </div>

            {/* <ArtCard /> */}
        </div>
    );
}
 
export default Paintings;