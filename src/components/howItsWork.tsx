"use client";

import step1 from "../assets/Step1.png";
import step2 from "../assets/Step2.png";
import step3 from "../assets/Step3.png";
import step4 from "../assets/Step4.png";
import ball from "../assets/Ball.png";
import arrow from "../assets/Union.png"; // ⬅️ your blue curved arrow

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
      <section className="bg-[#EAEFFA] py-16 px-4 sm:px-8 lg:px-16 font-exo relative overflow-hidden">
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

        {/* Steps + Arrows */}
        <div className="relative max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Background Arrows (behind cards) */}
          <div className="absolute inset-0 flex items-center mt-[-300px] justify-between px-[19%] z-0 hidden lg:flex">
            <img
              src={arrow}
              alt="arrow connector"
              className="w-[120px] h-auto"
            />
            <img
              src={arrow}
              alt="arrow connector"
              className="w-[120px] h-auto"
            />
            <img
              src={arrow}
              alt="arrow connector"
              className="w-[120px] h-auto"
            />
          </div>

          {/* Foreground Cards */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex-1 z-10 bg-white rounded-[1.2rem] flex flex-col  justify-between shadow-[0_8px_24px_0px_rgba(149,157,165,0.2)] hover:shadow-[0_8px_32px_0px_rgba(149,157,165,0.25)] transition-all h-full text-center"
            >
              <div className="text-[#2D96BC] text-center text-[7rem] font-bold mb-0 font-sriracha">
                {step.number}
              </div>
              <h3 className="text-[#090F4E] text-[1.3rem] font-semibold mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-[#4C4C4C] text-[1rem] px-[10px] mb-4">
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

      {/* Decorative Ball */}
      <div className="mt-[-40px] w-full flex justify-end">
        <img src={ball} alt="ball" />
      </div>
    </div>
  );
}
