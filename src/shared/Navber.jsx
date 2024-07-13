import { IoMdSearch } from "react-icons/io";
import logo from "../assets/logo.png"
import { FiGift } from "react-icons/fi";
 import './Nav.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
const Navber = () => {
    return (
        <nav className="w-[1200px] mx-auto grid grid-cols-9 justify-between items-center gap-8  py-4 ">
            <div className="h-[52px] col-span-1 text-start">
                <img className="h-full p" src={logo} alt="" />
            </div>
            <div className="flex gap-6 col-span-6 justify-between  items-center">
                <div className="flex col-span-4  gap-6 justify-center mx-auto font-bold text-black">
                    <p >Home</p>
                    <p className="flex gap-2 items-center">All Food <MdOutlineKeyboardArrowDown /></p>
                    <p >About</p>
                    <p >Contact</p>
                </div>
                <div className="h-[42px] relative col-span-4 w-[420px]">
                    <input type="text" placeholder="search" className="px-2 w-full  block h-full outline-0 rounded-[4px] border" />
                    <IoMdSearch className="text-2xl text-black absolute right-2 top-2"></IoMdSearch>
                </div>
               

            </div>
           
            <div className="flex gap-8 col-span-2 justify-end text-black text-xl">
               
               <div className="flex items-center" > 
                    <FaHeart className="" />
                   
               </div>
               <div className="flex gap-2 items-center">
                <p className="text-base font-bold">0t </p>
                    <FaShoppingCart />

               </div>
                
            </div>
        </nav>
    );
};

export default Navber;