
import { Check, ChevronRight, Mail, Phone, XIcon } from "lucide-react";

import { BlinkingStars, LLogo, MailIcon, SearchIcon, ZBIcon } from "../assets/Svg";
import img2 from "../assets/CRM-Data-Enrichment-768x474.webp"
export default function CRMEnterprize() {
    return (
        <div>
            {/* Sub heading */}
            <div className="text-center mb-10 flex items-center justify-left gap-2 flex-wrap">
                <span className="text-[#4D4D4D] text-[15px] md:text-[22px]">
                    It’s hard to find the accurate contact data for every prospects by
                </span>
                <span className="bg-[#FFDCD4] text-[#FF4C51] text-[10px] text-[13px] px-2 py-1 rounded-full">
                    Incomplete Data
                </span>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Card */}
                <div className="bg-[#F7FAFF] border border-[#E1E8F0] rounded-xl p-8 max-w-[1200px] mx-auto mt-10">
                    {/* Section Heading */}
                    <h2 className="text-[17px] md:text-[22px] font-semibold text-[#0F114A] mb-2">
                        Here is how LeadCRM tackles that situation.
                    </h2>
                    <div className="text-[#097737] font-semibold text-[15px] md:text-[17px] flex items-center gap-1 mb-10 cursor-pointer hover:underline">
                        Try LeadCRM Data Enrichment <ChevronRight size={18} />
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* LEFT CARD */}
                        <div className="bg-white shadow-md rounded-2xl p-6 relative">
                            {/* Verified Label */}
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="bg-[#EAF2FF] p-2 rounded-md">
                                    <MailIcon className="text-[#0F114A]" size={18} />
                                </div>
                                <h3 className="text-[#0F114A] font-semibold text-[15px]">
                                    Verified Email & Phone
                                </h3>
                            </div>

                            {/* Profile Section */}
                            <div className="relative flex flex-col mt-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                                {/* Profile Image */}
                                <div>
                                    <img
                                        src="https://randomuser.me/api/portraits/men/34.jpg"
                                        alt="User Avatar"
                                        className="w-20 h-20 rounded-full object-cover shadow-md"
                                    />

                                    {/* Floating Valid Icons */}
                                    <div className="absolute top-[50%] md:top-[80%] left-[15%] md:left-[23%] bg-white rounded-full p-1.5 shadow">
                                        <LLogo />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-5">
                                    <div className=" bg-white rounded-full p-2 "
                                        style={{
                                            boxShadow: "0px 6.11px 25.31px 0px #64646F33"

                                        }}>
                                        <LLogo width={40} height={40} />
                                    </div>
                                    <div className=" bg-white rounded-full p-2 "
                                        style={{
                                            boxShadow: "0px 6.11px 25.31px 0px #64646F33"

                                        }}>
                                        <ZBIcon width={40} height={40} />
                                    </div>

                                </div>
                                <div className="flex items-center left-[60%] justify-center gap-1 absolute text-[5.74px] text-[#1D4841] border border-[#1D4841] rounded-[4.36px] p-1">
                                    <Check size={8} />
                                    Valid
                                </div>

                                <div className="flex items-center left-[90%] justify-center gap-1 absolute text-[5.74px] text-[#1D4841] border border-[#1D4841] rounded-[4.36px] p-1">
                                    <Check size={8} />
                                    Valid
                                </div>

                            </div>

                            {/* User Info */}
                            <div className="">
                                <h4 className="text-[#424242] font-semibold text-[18.6px] mb-5">
                                    David Steinhoff
                                </h4>

                                <div className="flex justify-left items-center gap-2 text-[13px] text-[#1A1A1A] mt-2">
                                    <Mail size={14} />
                                    <span className="font-[13.95px] font-bold">davidsteinhoff@gmail.com</span>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                                        alt="verified"
                                        className="w-4 h-4"
                                    />
                                </div>
                                <p className="text-[12px] text-[#B0B0B0] md:pl-[20px]">Found via snov.io</p>

                                <div className="flex justify-left items-center gap-2 text-[13px] text-[#1A1A1A] mt-2">
                                    <Phone size={14} />
                                    <span className="font-[13.95px] font-bold">+1 932 xxx xxxx</span>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                                        alt="verified"
                                        className="w-4 h-4"
                                    />
                                </div>
                                <p className="text-[12px] text-[#B0B0B0] md:pl-[20px]">Found via snov.io</p>
                            </div>

                            {/* Contacts Button */}
                            <div className="mt-6">
                                <button className="w-full bg-[#333333] text-[#FFFFFF] text-[14px] py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#1C216B] transition">
                                    <BlinkingStars /> Contacts Found
                                </button>
                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="bg-white shadow-md rounded-2xl pt-6">
                            {/* Header */}
                            <div className="flex items-center justify-center gap-2 mb-4">

                                <SearchIcon />

                                <h3 className="text-[#090F4E] font-semibold text-[1rem]">
                                    40+ Search Filters
                                </h3>
                            </div>

                            {/* Filters */}
                            <div className="rounded-[14px] mr-5 bg-[#DCDCDCA1]"
                                style={{
                                    boxShadow: "0px 2px 8px 0px #63636333"

                                }}
                            >
                                <div className="h-[50.4px] bg-white">
                                    <br />
                                    <div className="bg-[#DCDCDCA1] h-[12px] w-[30px] rounded-r-full"></div>
                                </div>
                                <div className="flex flex-wrap gap-1 mb-4 mt-2 bg-white p-1 rounded-r-full mr-3">
                                    <span className="flex items-center gap-1 bg-[#CCFFF7] text-[#1D4841] text-[11px] px-3 py-1 rounded-full justify-center">
                                        Above 40+ <span> <XIcon size={11} /></span>
                                    </span>
                                    <span className=" flex items-center gap-1 bg-[#CCFFF7] text-[#1D4841] text-[11px] px-3 py-1 rounded-full">
                                        Bio Tech <span> <XIcon size={11} /></span>
                                    </span>
                                    <span className="text-[#1D4841] text-[9px] py-1.5 font-semibold">
                                        + Add Filter
                                    </span>
                                </div>

                                {/* Table */}
                                <div className="rounded-[13.44px] bg-white mr-3 shadow-sm overflow-hidden">
                                    {/* Header */}
                                    <div className="flex justify-between px-3 md:px-12 py-2 font-[#000000] border-b border-[#E6E6E6]">
                                        <span className="text-[11px] font-medium">Email</span>
                                        <span className="text-[11px] font-medium">Phone</span>
                                    </div>

                                    {/* Data Rows */}
                                    {[
                                        {
                                            name: "aiden.brooks@gmail.com",
                                            phone: "+1 073xxxxxxx",
                                            emailIconBg: "bg-[#D2E8FF]",
                                            phoneIconBg: "bg-[#D2E8FF]",
                                            emailIconText: "S",
                                            phoneIconText: "S",
                                        },
                                        {
                                            name: "jimmyanderson@gmail.com",
                                            phone: "+1 233xxxxxxx",
                                            emailIconBg: "bg-[#D1F7E1]",
                                            phoneIconBg: "bg-[#EAD6FF]",
                                            emailIconText: "IQ",
                                            phoneIconText: "K",
                                        },
                                        {
                                            name: "philips@gmail.com",
                                            phone: "+1 023xxxxxxx",
                                            emailIconBg: "bg-[#D1F7E1]",
                                            phoneIconBg: "bg-[#D1F7E1]",
                                            emailIconText: "IQ",
                                            phoneIconText: "IQ",
                                        },
                                    ].map((c, i, arr) => (
                                        <div
                                            key={i}
                                            className={`flex justify-between items-start px-2 py-3 ${i !== arr.length - 1 ? "border-b border-[#E6E6E6]" : ""
                                                }`}
                                        >
                                            {/* Email Column */}
                                            <div className="flex items-start py-2 gap-2 pr-2">
                                                <div
                                                    className={`${c.emailIconBg} rounded-full w-6 h-6 flex items-center justify-center text-[11px] font-semibold text-[#000000] shrink-0`}
                                                >
                                                    {c.emailIconText}
                                                </div>
                                                <span className="text-[11px] text-gray-800 leading-tight break-words max-w-[90px]">
                                                    {c.name}
                                                </span>
                                            </div>

                                            {/* Phone Column */}
                                            <div className="flex items-start py-2 gap-2">
                                                <div
                                                    className={`${c.phoneIconBg} rounded-full w-6 h-6 flex items-center justify-center text-[11px] font-semibold text-[#0F114A] shrink-0`}
                                                >
                                                    {c.phoneIconText}
                                                </div>
                                                <span className="text-[11px] text-gray-600 whitespace-nowrap">
                                                    {c.phone}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-[#F0F4FD] rounded-[12px] mt-10 p-6">
                    <p className="text-[#097737] text-[22px] font-semibold mb-4 pt-6">
                        <span className="text-[#4D4D4D]"> If it does not work for you ! try our</span> Advanced Waterfall Enrichment &gt;
                    </p>
                    <div className="mt-12 rounded-[12px] bg-white p-6"> <img src={img2} /></div>

                </div>
            </div>

        </div>
    )
}