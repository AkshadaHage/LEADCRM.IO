import { useState } from "react";
import { Menu, X, LogIn, } from "lucide-react";
import LeadcrmLogo from "../assets/LeadcrmLogo.png";
import { DownArrow } from "../assets/Svg";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLoginClick = () => {
        window.open("https://dash.leadcrm.io/login", "_blank");
    };
    const handleSignUp = () => {
        window.open("https://dash.leadcrm.io/signup", "_blank")
    }
    return (
        <nav className="bg-white w-full fixed top-0 left-0 z-50 "
            style={{ boxShadow: "0px 8px 24px 0px #959DA51A" }}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                            src={LeadcrmLogo}
                            alt="LEADCRM Logo"
                            className="h-[4rem] w-auto"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8 font-semibold">
                        <a
                            href="#"
                            className="flex items-center gap-1 text-[#222222] text-[1rem] hover:text-[#2D96BC]"
                        >
                            Product
                            <span>
                                <DownArrow height={"10px"} width={"17px"} />
                            </span>
                        </a>

                        <a href="#" className="flex items-center gap-1 text-[#222222] font-[1rem] hover:text-[#2D96BC]">
                            Pricing
                            <span>
                                <DownArrow height={"10px"} width={"17px"} />
                            </span>
                        </a>
                        <a href="#" className="flex items-center gap-1 text-[#222222] font-[1rem] hover:text-[#2D96BC]">
                            Resources
                            <span>
                                <DownArrow height={"10px"} width={"17px"} />
                            </span>
                        </a>
                        <a href="#" className="flex items-center gap-1 text-[#222222] font-[1rem] hover:text-[#2D96BC]">
                            Company
                            <span>
                                <DownArrow height={"10px"} width={"17px"} />
                            </span>
                        </a>
                    </div>

                    {/* Buttons */}
                    <div
                        onClick={handleSignUp} className="hidden lg:flex items-center space-x-4">
                        <button className="bg-[#2D96BC] text-[#FFFFFF] font-[1rem] px-4 py-2 rounded-[10px] hover:bg-sky-700 transition">
                            Get Your Free Account
                        </button>
                        <button
                            onClick={handleLoginClick}
                            className="flex items-center gap-2 border border-[#2D96BC] text-[#2D96BC] px-4 py-2 rounded-[10px] font-[1rem] hover:bg-sky-50 transition">
                            <LogIn height={"24px"} width={"24px"} />
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-2 px-6 py-4">
                        <a href="#" className="text-gray-800 font-medium hover:text-sky-500">
                            Product
                        </a>
                        <a href="#" className="text-gray-800 font-medium hover:text-sky-500">
                            Pricing
                        </a>
                        <a href="#" className="text-gray-800 font-medium hover:text-sky-500">
                            Resources
                        </a>
                        <a href="#" className="text-gray-800 font-medium hover:text-sky-500">
                            Company
                        </a>

                        <button
                            onClick={handleSignUp} className="bg-sky-600 text-white font-medium px-4 py-2 rounded-md hover:bg-sky-700 transition">
                            Get Your Free Account
                        </button>
                        <button
                            onClick={handleLoginClick} className="flex items-center justify-center gap-2 border border-sky-400 text-sky-600 px-4 py-2 rounded-md font-medium hover:bg-sky-50 transition">
                            <LogIn size={18} />
                            Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
