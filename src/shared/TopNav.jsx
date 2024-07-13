import { IoIosTimer, IoMdSearch } from "react-icons/io";
import logo from "../assets/logo.png"
import { FiGift } from "react-icons/fi";
import './Nav.css'
import { MdOutlineKeyboardArrowDown, MdTextsms } from "react-icons/md";
import { FaHeart, FaLinkedin, FaShoppingCart, FaTiktok, FaYoutube } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
const TopNav = () => {
    return (
        <nav className="w-[1200px] mx-auto">
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-6 text-[12px] py-2">
                    <div className="flex items-center gap-1 text-[#FFFFFFCC] hover:text-white">
                        <p><IoIosTimer /></p>
                        <p>
                            08:30 AM - 10:30 PM</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#FFFFFFCC] hover:text-white">
                        <p><BsFillTelephoneFill /></p>
                        <p>
                            01895678456</p>
                    </div>

                </div>
                <div className=" flex items-center gap-1">
                    <GrFacebookOption className="text-[#FFFFFFCC] hover:text-white"/>
                    <GrInstagram className="text-[#FFFFFFCC] hover:text-white" />
                    <FaTiktok className="text-[#FFFFFFCC] hover:text-white" />
                    <MdTextsms className="text-[#FFFFFFCC] hover:text-white" />
                    <BsFillTelephoneFill className="text-[#FFFFFFCC] hover:text-white" />
                    <FaLinkedin className="text-[#FFFFFFCC] hover:text-white" />
                    <FaYoutube className="text-[#FFFFFFCC] hover:text-white" />
                </div>

            </div>
            
         
        </nav>
    );
};

export default TopNav;