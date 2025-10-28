import { useEffect, useState } from "react";
import person1 from "../assets/person3.png"
import person3 from "../assets/person2.png"
import person2 from "../assets/person4.png"
import { Clock, CreditCard } from "../assets/Svg";

const FreeTrialBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[867px] bg-white shadow-xl rounded-2xl p-4 transition-all duration-500 z-50 ${
        showBanner ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}

      style={{
        boxShadow: "6px 13px 100px 3px #110C2E2E"

      }}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#FFEEFE] rounded-[12px] px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-5">
            <img src={person1} alt="User 1" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            <img src={person2} alt="User 2" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            <img src={person3} alt="User 3" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
          </div>

          <p className="text-[#121212] text-[15px] md:text-[20px] font-semibold ml-[30px] md:ml-[0px]">
            Join with our Thousands of professionals Now!
          </p>
        </div>

        <button className="mt-4 md:mt-0 bg-[#B3FC6A] hover:bg-[#94e15a] text-[#242424] font-[13px] md:font-[18px] font-semibold px-5 py-2.5 rounded-[13px] transition">
          Get a Free Trial Now!
        </button>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center max-w-[486.95px] mx-auto justify-center md:justify-between mt-4 px-4 text-sm text-[#3E3E3E] font-medium">
        <div className="flex items-center gap-2">
          <CreditCard />
          <p>
            <span className="font-semibold text-[#000]">No Credit Card</span> Required
          </p>
        </div>

        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <Clock className="w-5 h-5" />
          <p>
            <span className="font-semibold text-[#000]">14 Days Free</span> Trial
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialBanner;
