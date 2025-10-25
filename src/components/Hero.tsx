import { Star } from "lucide-react";
import { GoogleCrome, GoogleCrome2, TriangleArrow, Workwith1, Workwith2, Workwith3 } from "../assets/Svg";
import Line from "../assets/YelloLine.png"
const HeroSection = () => {
    return (
        <section className="relative from-white to-[#F8FAFF] py-16 md:py-24 px-6 text-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#9ACCFF] rounded-full px-4 py-1 mt-10 shadow-sm mb-6">
                {/* <Rocket className="text-sky-500 w-4 h-4" /> */}
                🚀
                <p className="text-[10px] md:text-[13.62px] text-[#63657E]">Thousands of Professionals using LeadCRM</p>
            </div>

            {/* Title */}
            <h1 className="text-[1.5rem] md:text-[3.5rem] font-exo md:text-5xl font-semibold text-[#111] leading-tight max-w-[1206px] mx-auto">
                LinkedIn CRM Integration
                <br />
                Capture, Sync and Enrich in{" "}
                <span className="text-sky-500 relative inline-block">
                    Both Ways
                    <img src={Line} width={"230px"} className="ml-[10px]"/>
                </span>
            </h1>

            {/* Subtitle */}
            <p className="font-semibold text-[#363636] mt-5 max-w-[750px] mx-auto text-[0.9rem] md:text-[1.05rem]">
                Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on
                LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and
                Pipedrive.
            </p>

            {/* Integrations */}
            <div
                className="mt-10 inline-flex flex-col items-center gap-4 px-6 py-4 rounded-2xl shadow-sm border border-gray-100"
                style={{
                    background: "linear-gradient(90.37deg, #5ED3FF -12.35%, #6EC6FE 0.67%, #EB65F4 100.24%, #FD58F2 114.28%)",
                }}
            >
                <div className="flex items-center gap-5">
                    <p className="font-exo font-semibold mb-2 font-[1.5rem]">Works with</p>
                    <div className="flex items-center gap-4">
                        <span className="border border-white h-[3.8rem] w-[3.8rem] rounded-[2rem] bg-[#FF7A59] flex items-center justify-center">
                            <Workwith1 />
                        </span>
                        <span className="border border-white h-[3.8rem] w-[3.8rem] rounded-[2rem] bg-[#21844A] flex items-center justify-center">
                            <Workwith2 />
                        </span>
                        <span className="border border-white h-[3.8rem] w-[3.8rem] rounded-[2rem] bg-[#FFFFFF] flex items-center justify-center">
                            <Workwith3 />
                        </span>
                    </div>
                </div>
            </div>

            {/* Ratings */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-[60px] px-4 mt-5">
                {/* Google Chrome Rating */}
                <div className="flex justify-center items-center gap-2 mt-6">
                    <span
                        className="h-[2.5rem] w-[2.5rem] flex justify-center items-center rounded-[6.67px]"
                        style={{ boxShadow: "0px 4px 34px 0px #ADADAD1A" }}
                    >
                        <GoogleCrome />
                    </span>
                    <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-yellow-400" size="1rem" />
                        <Star className="text-yellow-400 fill-yellow-400" size="1rem" />
                        <Star className="text-yellow-400 fill-yellow-400" size="1rem" />
                        <Star className="text-yellow-400 fill-yellow-400" size="1rem" />
                        <Star className="text-yellow-400 fill-yellow-400" size="1rem" />
                    </div>
                    <span className="ml-2 text-gray-700 font-medium">5 / 5</span>
                </div>

                {/* Triangle Arrow Rating */}
                <div className="flex justify-center items-center gap-2 mt-0 md:mt-6">
                    <span
                        className="h-[2.5rem] w-[2.5rem] flex justify-center items-center rounded-[6.67px]"
                        style={{ boxShadow: "0px 4px 34px 0px #ADADAD1A" }}
                    >
                        <TriangleArrow />
                    </span>
                    <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-yellow-400" size="1rem" />
                        <Star className="text-yellow-400 fill-yellow-400" size="1rem" />
                        <Star className="text-yellow-400 fill-yellow-400" size="1rem" />
                        <Star className="text-yellow-400 fill-yellow-400" size="1rem" />
                        <Star className="text-yellow-400 fill-yellow-400" size="1rem" />
                    </div>
                    <span className="ml-2 text-gray-700 font-medium">5 / 5</span>
                </div>
            </div>


            {/* Buttons */}
            <div className="flex flex-wrap gap-4 items-center justify-center mt-10">
                {/* Chrome Web Store Button */}
                <button className="flex items-center gap-8 h-[60px] min-w-[214px] bg-[#373737] text-white px-4 py-2 rounded-[13px] hover:opacity-90 transition">

                    <div className="text-left">
                        <div className="text-sm font-[12px]">Available in </div>
                        <span className="text-[1rem]">Chrome Web Store</span>
                    </div>
                    <GoogleCrome2 />
                </button>

                {/* Free Trial Button */}
                <button className="bg-[#B3FC6A] h-[60px] w-[214px] text-black text-[1rem] font-semibold px-6 py-2 rounded-[13px] hover:opacity-90 transition">
                    Get a Free Trial Now!
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
