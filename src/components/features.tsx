import User from "../assets/User.png";
import HandIcon from "../assets/handicon.png";
import dots from "../assets/threedotconnect.png";
import waterfall from "../assets/waterfall.png";

export const Features = () => {
  return (
    <div className="overflow-hidden w-full mt-14">
      {/* Outer container to hide overflow */}
      <div className="flex w-max animate-marquee">
        {/* Duplicate the set twice for seamless scrolling */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex items-center space-x-12 px-6">
            <div className="flex items-center gap-2">
              <img src={User} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <p className="text-[#161616]">
                Access to <span className="font-semibold">700M+ Contacts</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <img src={HandIcon} alt="Hand Icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <p className="text-[#090F4E]">
                <span className="font-semibold">One click</span> push to CRM
              </p>
            </div>

            <div className="flex items-center gap-2">
              <img src={dots} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <p className="text-[#090F4E]">
                <span className="font-semibold">Custom Field</span> Mapping
              </p>
            </div>

            <div className="flex items-center gap-2">
              <img src={waterfall} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <p className="text-[#090F4E]">
                Advanced <span className="font-semibold">Waterfall Enrichment</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
