import { Outlet } from "react-router-dom";
import SubNavber from "../shared/SubNavber";
import Navber from "../shared/Navber";
import Submenu from "../shared/Submenu";
import Footer from "../components/Footer";
import TopNav from "../shared/TopNav";


const Layout = () => {
    return (
        <div className="">
            <div className="bg-black  text-white hidden xl:flex ">
               <TopNav></TopNav>
            </div>
            <div className="bg-white shadow-md text-white hidden xl:flex mb-0">
                <Navber></Navber>
            </div>
            <div className="xl:hidden fixed w-full top-0 h-screen z-[120]">
                <SubNavber></SubNavber>
            </div>
            <div className="max-w-[1200px] mx-auto">
                <Outlet></Outlet>
            </div>
            <div className="bg-[#081621] text-white">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;