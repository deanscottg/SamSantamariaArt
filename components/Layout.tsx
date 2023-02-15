import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }:PropsWithChildren ) => {
    return (
        <div className='content'>
            <Navbar />
                { children }
            <Footer />


        </div>
    );
}
 
export default Layout;