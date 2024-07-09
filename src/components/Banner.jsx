import Sidebar from "./Sidebar";

import Slider from "./Slider";


const Banner = () => {
    return (
        <div className="grid grid-cols-4 my gap-6">
            <div className="col-span-3">
                <Slider></Slider>
            </div>
            <div className="col-span-1">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Banner;