import Image from "next/image";
const Footer = () => {
    return ( 
        <footer>
            <div className='flex justify-center ml-auto'>
                <p className=''>Copyright Sam Santamaria Art 2023</p>
                <div className="ml-auto">
                <Image className=''src='/facebook.png' alt='facebook' height={40} width={40} />
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;