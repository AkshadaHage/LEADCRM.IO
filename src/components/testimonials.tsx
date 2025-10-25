import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TriangleArrow } from "../assets/Svg";

const testimonials = [
  {
    text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: "David Fincher",
    platform: "On Capterra",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus.",
    name: "Lillian Williams",
    platform: "On Capterra",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: "Michael",
    platform: "On Capterra",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: "Michael",
    platform: "On Capterra",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
   {
    text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: "Michael",
    platform: "On Capterra",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
   {
    text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: "Michael",
    platform: "On Capterra",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const hasPrev = current > 0;
  const hasNext = current < testimonials.length - 1;

  const prevSlide = () => {
    if (hasPrev) setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (hasNext) setCurrent(current + 1);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto py-16 px-4 font-exo">
      {/* Heading + Arrows */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[2.3rem] font-semibold text-[#0F114A]">
          What people are saying about LeadCRM
        </h2>

        {/* Arrow buttons */}
        <div className="flex items-center gap-5">
          <button
            onClick={prevSlide}
            className={`p-4 rounded-full shadow transition border ${
              hasPrev
                ? "bg-black border-black"
                : "bg-white border-[#090F4E] cursor-not-allowed"
            }`}
          >
            <ChevronLeft
              className={`w-5 h-5 ${hasPrev ? "text-white" : "text-[#0F114A]"}`}
            />
          </button>
          <button
            onClick={nextSlide}
            className={`p-4 rounded-full shadow transition border ${
              hasNext
                ? "bg-black border-black"
                : "bg-white border-[#090F4E] cursor-not-allowed"
            }`}
          >
            <ChevronRight
              className={`w-5 h-5 ${hasNext ? "text-white" : "text-[#0F114A]"}`}
            />
          </button>
        </div>
      </div>

      {/* Slider Cards */}
      <div className="overflow-hidden relative">
        <div
  className="flex transition-transform duration-500"
  style={{
    transform: `translateX(-${current * (100 / 3)}%)`,
  }}
>

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/3 p-4"
            >
              <div className="bg-[#F9F0F8] p-6 rounded-[20px] h-full flex flex-col ">
                <p className="text-[#090F4E] font-semibold font-[1rem]">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className="h-[2.5rem] w-[2.5rem] flex justify-center items-center rounded-[6.67px]"
                    style={{ boxShadow: "0px 4px 34px 0px #ADADAD1A" }}
                  >
                    <TriangleArrow />
                  </span>
                  <div className="flex items-left gap-1">
                    <Star className="fill-black" size="1.5rem" />
                    <Star className="fill-black" size="1.5rem" />
                    <Star className="fill-black" size="1.5rem" />
                    <Star className="fill-black" size="1.5rem" />
                    <Star className="fill-black" size="1.5rem" />
                  </div>
                </div>

                <div className="mt-[100px] border-t border-[#7A7A7A4F]"></div>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold font-[#090F4E] font-[1.3rem]">
                      {testimonial.name}
                    </p>
                    <p className="text-[#696969] text-[0.9rem]">
                      {testimonial.platform}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
