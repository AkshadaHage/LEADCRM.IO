"use client";

import step1 from "../assets/Step1.png";
import step2 from "../assets/Step2.png";
import step3 from "../assets/Step3.png";
import step4 from "../assets/Step4.png";
import ball from "../assets/Ball.png"

export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Install the Extension",
            description:
                "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
            image: step1,
        },
        {
            number: "2",
            title: "Browse LinkedIn",
            description:
                "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
            image: step2,
        },
        {
            number: "3",
            title: "Get Enriched Data",
            description:
                "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
            image: step3,
        },
        {
            number: "4",
            title: "Sync to CRM Instantly",
            description:
                "Prospect data syncs to your CRM instantly with history, tracking, and AI-powered insights for better follow ups.",
            image: step4,
        },
    ];

    return (
        <div>
            <section className="bg-[#EAEFFA] py-16 px-4 sm:px-8 lg:px-16 font-exo">
                {/* Section Header */}
                <div className="text-left mb-12 font-poppins max-w-[1400px] mx-auto">
                    <h2 className="text-[1.5rem] sm:text-[2.4rem] font-semibold text-[#090F4E]">
                        How it Works
                    </h2>
                    <p className="text-[#4C4C4C] text-[0.8rem] md:text-[1rem] mt-2">
                        From setup to success in{" "}
                        <span className="font-semibold">4 simple steps</span>
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center h-full bg-white rounded-[1.2rem] flex flex-col items-start shadow-[0_8px_24px_0px_rgba(149,157,165,0.2)] hover:shadow-[0_8px_32px_0px_rgba(149,157,165,0.25)] transition-all"
                        >
                            <div className="text-[#2D96BC] text-[7rem] flex items-center justify-center text-center font-bold mb-0 font-sriracha">
                                {step.number}
                            </div>

                            <h3 className="text-[#090F4E] text-[1.3rem] px-6 font-semibold mb-2 leading-snug">
                                {step.title}
                            </h3>
                            <p className="text-[#4C4C4C] text-[1rem] px-6 mb-4 text-center">
                                {step.description}
                            </p>
                            <div className="w-full flex justify-center mt-auto">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-[100%] object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-12">
                    <button
                        className="bg-[#B3FC6A] hover:bg-lime-500 text-[#000000] font-semibold py-3 px-8 rounded-[12px] text-[1.2rem] shadow-lg transition-colors"
                        style={{
                            boxShadow: "0px 7px 29px 0px #82828233",
                        }}
                    >
                        Try LeadCRM Now →
                    </button>
                </div>

            </section>
            <div className="mt-[-40px] w-full flex justify-end">
                <img src={ball} alt="ball" />
            </div>
        </div>
    );
}
