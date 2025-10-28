"use client"
import { MessageSquare, Users, Building2, DotIcon } from "lucide-react"
import { LLogo, Workwith1, Workwith2, Workwith3, ZohoIcon } from "../assets/Svg"
import line1 from "../assets/Dashedline1.png"
import line2 from "../assets/Dashed_Line2.png"
import line3 from "../assets/DashedLine3.png"
import MsgImg from "../assets/MessageImage.png"
import Collab from "../assets/Collaboration.png"
const SupportedLeadCRM = () => {
    return (
        <div className="mt-20 relative overflow-hidden">
            <div className="absolute ml-[960px] mt-[50px]">
                <img src={MsgImg} />
            </div>
            <section className="mt-20 py-16">
                {/* Header */}
                <div className="text-center mb-12 ">

                    <h2 className="text-[#0F114A] text-[1.5rem] md:text-[2.2rem] font-bold mb-3">Our Supported LeadCRM</h2>
                    <p className="text-gray-600 text-base text-[12px] md:text-[22px] max-w-2xl mx-auto leading-relaxed">
                        LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting.
                        We don't want you to miss any revenue opportunity on the internet!
                    </p>
                </div>

                {/* Main Diagram */}
                <div className="overflow-x-auto px-4">
                    <div className="w-[1400px] mx-auto relative">

                        <div className="absolute mt-[40px] ml-[80px] p-0" >
                            <img src={line1}></img>
                            <div className="flex item-center justify-between">
                                <img src={line3} />
                                <img src={line3} className="ml-[100px] w-[520px]" />
                            </div>
                            <img src={line2}></img>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-12 gap-4 items-stretch">
                            {/* Left Section - LinkedIn Sources */}
                            <div className="col-span-2 space-y-20">
                                {/* Conversation */}
                                <div className="flex flex-col items-start gap-2">
                                    <div className="w-[80px] h-[80px] border border-[#91E1FF] rounded-full flex items-center justify-center">
                                        <MessageSquare className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="text-xs font-semibold text-gray-800">Conversation</div>
                                </div>

                                {/* Contacts */}
                                <div className="flex flex-col items-start gap-2">
                                    <div className="w-[80px] h-[80px] border border-[#91E1FF] rounded-full flex items-center justify-center">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="text-xs font-semibold text-gray-800">Contacts</div>
                                </div>

                                {/* Companies */}
                                <div className="flex flex-col items-start gap-2">
                                    <div className="w-[80px] h-[80px] border border-[#91E1FF] rounded-full flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="text-xs font-semibold text-gray-800">Companies</div>
                                </div>
                            </div>

                            {/* Data Fields Section */}
                            <div className="col-span-3 space-y-20">
                                {/* Conversations field */}
                                <div className="flex justify-start">
                                    <div className="flex flex-col items-center">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-300"
                                            style={{
                                                boxShadow: "0px 38.15px 79.48px 0px #110C2E26"

                                            }}>
                                            Conversations
                                        </span>
                                        <DotIcon className="w-10 h-10 mt-[-3px] text-[#009BD6]" />
                                    </div>
                                </div>

                                {/* First Name and Last Name fields */}
                                <div className="flex gap-10 flex-wrap items-center pt-[39px] ml-[-45px]">
                                    <div className="flex flex-col items-center">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-300"
                                            style={{
                                                boxShadow: "0px 38.15px 79.48px 0px #110C2E26"

                                            }}
                                        >
                                            First Name
                                        </span>
                                        <DotIcon className="w-10 h-10 mt-1 text-[#009BD6]" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-300"
                                            style={{
                                                boxShadow: "0px 38.15px 79.48px 0px #110C2E26"

                                            }}>
                                            Last Name
                                        </span>
                                        <DotIcon className="w-10 h-10 mt-1 text-[#009BD6]" />
                                    </div>
                                </div>


                                {/* Website and Company Employees fields */}
                                <div className="flex gap-10 flex-wrap items-center pt-[30px] ml-[-45px]">
                                    <div className="flex flex-col items-center">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-300"
                                            style={{
                                                boxShadow: "0px 38.15px 79.48px 0px #110C2E26"

                                            }}>
                                            Company Employees
                                        </span>
                                        <DotIcon className="w-10 h-10 mt-1 text-[#009BD6]" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-300"
                                            style={{
                                                boxShadow: "0px 38.15px 79.48px 0px #110C2E26"

                                            }}>
                                            Website
                                        </span>
                                        <DotIcon className="w-10 h-10 mt-1 text-[#009BD6]" />
                                    </div>
                                </div>
                            </div>

                            {/* Center - LeadCRM Logo */}
                            <div className="flex justify-center items-center pl-[150px]">
                                <div className="">
                                    <LLogo width={100} height={100} />
                                </div>
                            </div>

                            {/* Intermediate Nodes */}
                            <div className="flex col-span-3">
                                <div className="pl-[100px] gap-3 items-center justify-center">
                                    <div className="flex">
                                        <div className="mt-[100px]">
                                            <span className="px-2 py-1  pt-[-10px] bg-[#DBF5FF] text-[#00A1E0] text-xs font-medium rounded-full border border-[#00A1E0]
                                        "
                                                style={{
                                                    boxShadow: "0px 38.15px 79.48px 0px #110C2E26"

                                                }}>
                                                Employees

                                            </span>
                                        </div>
                                        <div className="mt-[110px] ml-[-10px]">
                                            <span className="px-2 py-1  bg-[#DFFFEC] text-[#21844A] text-xs font-medium rounded-full border border-[#21844A]"
                                                style={{
                                                    boxShadow: "0px 38.15px 79.48px 0px #110C2E26"

                                                }}>
                                                Website
                                            </span>
                                        </div>
                                        <div className="mt-[120px]">
                                            <span className="px-2 py-1 ml-[-15px]  bg-[#FFEBE6] text-[#FF7A59] text-xs font-medium rounded-full border border-[#FF7A59]"
                                                style={{
                                                    boxShadow: "0px 38.15px 79.48px 0px #110C2E26"

                                                }}>
                                                Conversations
                                            </span>
                                        </div>
                                        <div className="mt-[135px]">
                                            <span className="px-2 py-1 ml-[-19px]  bg-[#FFEBE6] text-[#FF7A59] text-xs font-medium rounded-full border border-[#FF7A59]"
                                                style={{
                                                    boxShadow: "0px 38.15px 79.48px 0px #110C2E26"

                                                }}>
                                                LastName
                                            </span>
                                        </div>
                                        <div className="mt-[145px]">
                                            <span className="px-2 py-1 ml-[-25px] bg-[#FFEBE6] text-[#FF7A59] text-xs font-medium rounded-full border border-[#FF7A59]"
                                                style={{
                                                    boxShadow: "0px 38.15px 79.48px 0px #110C2E26"

                                                }}>
                                                FirstName
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between px-5 mt-[37px]">
                                        <DotIcon className="w-10 h-10 mt-1 text-[#00A1E0]" />
                                        <DotIcon className="w-10 h-10 mt-1 text-[#21844A]" />
                                        <DotIcon className="w-10 h-10 mt-1 text-[#FF7A59]" />
                                        <DotIcon className="w-10 h-10 mt-1 text-[#FF7A59]" />
                                        <DotIcon className="w-10 h-10 mt-1 text-[#FF7A59]" />

                                    </div>
                                </div>

                            </div>

                            {/* Right Section - CRM Integrations */}
                            <div className="col-span-3 flex flex-col justify-end items-end">
                                {/* Background only around icons */}
                                <div className="bg-[#EAEFFA] rounded-[26px] p-4 inline-flex flex-col gap-8 items-end">
                                    {/* Hubspot */}
                                    <div className="w-16 h-16 bg-[#FF7A59] rounded-full shadow-md flex items-center justify-center">
                                        <Workwith1 width={50} />
                                    </div>

                                    {/* Pipedrive */}
                                    <div className="w-16 h-16 bg-[#21844A] rounded-full shadow-md flex items-center justify-center">
                                        <Workwith2 width={50} />
                                    </div>

                                    {/* Salesforce */}
                                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
                                        <Workwith3 width={50} />
                                    </div>

                                    {/* Zoho */}
                                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
                                        <ZohoIcon width={50} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-5 mb-20">
                    <button className="bg-[#B3FC6A] hover:bg-[#3cc152] text-[#0F114A] font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200
                "
                        style={{
                            boxShadow: "0px 8px 24px 0px #959DA533"

                        }}>
                        Lets Integrate your CRM Now!
                    </button>
                </div>
                <div className="relative ">
                    <div className="absolute right-0 mt-[-50px]">
                        <img src={Collab} alt="Collab" />
                    </div>
                </div>

            </section>

        </div>
    )
}

export default SupportedLeadCRM
