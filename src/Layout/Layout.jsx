import { Outlet } from "react-router-dom";
import SubNavber from "../shared/SubNavber";
import Navber from "../shared/Navber";
import Submenu from "../shared/Submenu";


const Layout = () => {
    return (
        <div >
            <div className="bg-black text-white hidden xl:flex">
                <Navber></Navber>
            </div>
            <div className="sticky top-0 z-50 hidden xl:flex">
                <Submenu></Submenu>
            </div>
            <div className="xl:hidden">
                <SubNavber></SubNavber>
            </div>
            <div className="max-w-[1320px] mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;