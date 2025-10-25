"use client"

import { X } from "lucide-react"
import linkedinIcon from "../assets/Linkdin.png";
import LeadCRM from "../assets/leadcrm.png";
import save40hr from "../assets/Savwe40hr.png"
import { HumanBrain, LayersIcon, LLogo, LoadIcon, User } from "../assets/Svg";

export default function ComparisonSection() {
    return (
        <div className="relative w-full max-w-[1200px] mx-auto bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10 font-exo overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-pink-100 to-transparent rounded-full opacity-40 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-blue-50 to-transparent rounded-full opacity-40 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Title */}
                <h1 className="text-[1.5rem] md:text-[2.2rem] font-exo font-semibold text-center text-slate-900 mb-10 sm:mb-16">
                    Every LinkedIn Prospector faces these daily challenges
                </h1>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-stretch">
                    {/* Without LeadCRM */}
                    <div
                        className="flex-1 space-y-8 bg-[#FFF7F8] rounded-[1.1rem] p-4 sm:p-6"
                        style={{ boxShadow: "0px 8px 24px 0px #959DA533" }}
                    >
                        <img
                            src={linkedinIcon}
                            className="w-full sm:w-[400px] md:w-[480px] mx-auto my-6"
                            alt="LinkedIn"
                        />

                        <h2 className="text-[1.4rem] sm:text-[1.5rem] font-semibold text-[#D24B68]">
                            Without LeadCRM
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Manual Data Entry",
                                    badge: "3+ Hours wasted daily",
                                    desc: "Copying LinkedIn contacts to CRM manually plus losing conversation history"
                                },
                                {
                                    title: "Incomplete Data",
                                    badge: "60% Data Incomplete",
                                    desc: "LinkedIn profiles missing Email and Phones from 700M+ Database"
                                },
                                {
                                    title: "No CRM Visibility",
                                    badge: "Zero context available",
                                    desc: "Can't see existing CRM contacts when browsing LinkedIn profiles"
                                },
                                {
                                    title: "Limited Productivity",
                                    badge: "No smart assistance",
                                    desc: "Writing messages manually plus no AI assistant for reply, Invite or comments."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 sm:gap-4">
                                    <X className="w-6 h-6 text-[#D24B68] flex-shrink-0 mt-1" strokeWidth={3} />
                                    <div>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 py-1">
                                            <span className="font-semibold text-[#262626] text-[1.1rem] sm:text-[20px] mb-1 sm:mb-0">
                                                {item.title}
                                            </span>
                                            <span
                                                className="inline-block bg-[#FFDCD4] text-[#FF4C51] text-[12px] sm:text-[13px] px-3 py-1 rounded-full"
                                                style={{ boxShadow: "0px 38.15px 79.48px 0px #110C2E26" }}
                                            >
                                                {item.badge}
                                            </span>
                                        </div>
                                        <p className="text-[#4C4C4C] text-[0.95rem]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Divider (hidden on mobile) */}
                    <div className="hidden lg:flex flex-col items-center justify-start py-5">
                        <div className="h-96 w-px bg-[#BCBCBC] my-2"></div>
                        <div className="text-[18px] font-semibold text-[#090F4E] px-4 py-2">VS</div>
                        <div className="h-96 w-px bg-[#BCBCBC] my-2"></div>
                    </div>

                    {/* With LeadCRM */}
                    <div
                        className="flex-1 space-y-8 bg-[#ffffff] rounded-[1.1rem] p-4 sm:p-6"
                        style={{ boxShadow: "0px 8px 24px 0px #959DA533" }}
                    >
                        <div className="flex justify-center">
                            <img
                                src={LeadCRM}
                                className="w-full sm:w-[400px] md:w-[480px] mx-auto mt-6"
                                alt="LeadCRM"
                            />
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-[1.4rem] sm:text-[24px] font-semibold text-[#097737]">With LeadCRM</h2>
                            <LLogo />
                            <div className="flex items-center gap-2 bg-[#E6FFF1] px-3 py-1 rounded-full">
                                <span className="text-[#097737] font-semibold text-[12px] sm:text-[13px] p-1">
                                    4+ Hours/day Saved
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: <LoadIcon />,
                                    title: "Complete Bi-Directional Sync",
                                    desc: "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time."
                                },
                                {
                                    icon: <User />,
                                    title: "700M+ Contacts + Enrichment",
                                    desc: "Get verified emails and phone numbers from a vast global database."
                                },
                                {
                                    icon: <LayersIcon />,
                                    title: "CRM Overlay on LinkedIn",
                                    desc: "See full CRM insights directly on LinkedIn profiles without switching tabs."
                                },
                                {
                                    icon: <HumanBrain />,
                                    title: "AI Response + Templates + Bulk Exports",
                                    desc: "Save time with AI-crafted replies, pre-built templates, and one-click data exports."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 sm:gap-4">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <span className="block font-semibold text-[#262626] text-[1.1rem] sm:text-[20px] mb-1">
                                            {item.title}
                                        </span>
                                        <p className="text-[#4C4C4C] text-[0.95rem]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
                    <button
                        className="bg-[#B3FC6A] hover:bg-lime-500 text-[#000000] font-semibold py-4 px-8 rounded-[12px] text-lg transition-colors shadow-lg w-full sm:w-auto"
                        style={{ boxShadow: "0px 8px 24px 0px #959DA533" }}
                    >
                        Start Using LeadCRM Now
                    </button>
                    <img src={save40hr} className="w-[200px] sm:w-[265px] h-auto" alt="Save 40 hours" />
                </div>
            </div>
        </div>
    )
}
