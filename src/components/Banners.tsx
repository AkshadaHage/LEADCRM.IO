import { ArrowRight } from "lucide-react"
// import salesforce from "../assets/salesforce.png"
// import pipedrive from "../assets/pipedrive.png"
// import hubsport from "../assets/hubsport.png"
// import capterra from "../assets/Capterra.png"
// import { BannerImg4, BlackStar, Camera, GoogleG, Threedot } from "../assets/Svg"
// import banner1 from "../assets/Banner1.png"
// import Banner2 from "../assets/Banner2.png"
// import Banner3 from "../assets/banner3.png"
// import Banner4 from "../assets/Banner4.png"
// import Banner5_1 from "../assets/Banner5.png"
// import Banner5_2 from "../assets/Banner5-2.png"
// import Banner3_2 from "../assets/Bnner3-2.png"
// import Person from "../assets/person.png"
// import Banner4_1 from "../assets/Banner4-1.png"
import MainBanner from "../assets/Product-hunt-banner-image.png"

const LeadCRMBanner = () => {
  return (
    <section className="bg-[#EAEFFA] py-16 px-4">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto mb-0">
        <h2 className="text-[1.5rem] md:text-[2.2rem] font-bold text-[#090F4E] mb-8">
          Join Thousands of Professionals Using LeadCRM
        </h2>

        {/* Banner Image Section */}
        <div
          className="bg-cover bg-center rounded-2xl flex justify-center items-center"
          style={{
            backgroundImage: `url(${MainBanner})`,
            height: "408px", // adjust height as needed
          }}
        >
          <h3 className="text-[1.5rem] md:text-[2.8rem] font-semibold text-white text-center mt-[-250px] ">
            Your LinkedIn Powerhouse for Smarter Lead Management
          </h3>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <button
          className="bg-[#9EE25A] hover:bg-lime-500 text-gray-900 font-bold px-8 py-3 rounded-lg flex items-center gap-2"
          style={{
            boxShadow: "0px 8px 24px 0px #959DA533",
          }}
        >
          Get Started Today
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default LeadCRMBanner;



// const LeadCRMBanner = () => {
//   return (
//     <section className="bg-[#EAEFFA] py-16 px-4">
//       {/* Header */}
//       <div className="max-w-[1400px] mx-auto mb-0">
//         <h2 className="text-[30px] md:text-[36px] font-bold text-[#090F4E] mb-8">
//           Join Thousands of Professionals Using LeadCRM
//         </h2>

//         {/* Main Content Container with Teal Background */}
//         <div
//           className="rounded-[12px] relative overflow-hidden max-w-[1360px] h-auto"
//           style={{
//             background: "linear-gradient(204.61deg, #0995C8 4.1%, #065D7D 77.57%)",
//           }}
//         >

//           {/* Decorative background elements */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
//             <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
//           </div>

//           <div className="relative z-10">
//             {/* Main Title */}
//             <h3 className="text-[2.5rem] md:text-[2.8rem] font-semibold text-[#FFFFFF] my-8 text-center">
//               Your LinkedIn Powerhouse for Smarter Lead Management
//             </h3>

//             {/* Integration Logos and Badges */}
//             <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
//               {/* Salesforce */}
//               <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
//                 <img src={salesforce}></img>
//               </div>

//               {/* HubSpot */}
//               <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
//                 <img src={hubsport} />
//               </div>

//               {/* Pipedrive */}
//               <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
//                 <img src={pipedrive} />
//               </div>

//               {/* Divider */}
//               <div className="w-px h-8 bg-white opacity-50"></div>

//               {/* Capterra Rating */}
//               <div>
//                 <img src={capterra} />
//               </div>

//               {/* Top-rated Product Badge */}
//               <div className="bg-white rounded-[6.8px] px-4 items-center text-center shadow-md py-2">
//                 <div className="text-[10.2px] font-semibold text-[#4285F4]">Top-rated Product</div>
//                 <div className="flex items-center justify-center">
//                   <div className="text-[#FEA500] text-[8px]">4.8 ★★★★★</div>
//                   <GoogleG />
//                 </div>
//               </div>
//             </div>

//             <div
//               className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-[-50px]">
//               <div
//                 className="bg-[#AABEF0] rounded-tr-[18.56px] pr-4 pt-4 shadow-xl mt-[50px]"
//                 style={{
//                   borderTop: "2.16px solid #FFFFFF",
//                   borderRight: "2.16px solid #FFFFFF",
//                   backdropFilter: "blur(15.560656547546387px)",
//                 }}
//               >

//                 <img src={banner1}/>
//               </div>

//               <div
//                 className="bg-[#AABEF0] rounded-t-[18.56px] p-4 shadow-xl mt-[43px]"
//                 style={{
//                   border: "2.16px solid #FFFFFF",
//                   backdropFilter: "blur(15.560656547546387px)",
//                 }}
//               >
//                 <img src={Banner2} />
//               </div>

//               <div
//                 className="bg-[#AABEF0] rounded-t-[18.56px] pt-4 px-4 shadow-xl mt-[43px]"
//                 style={{
//                   border: "2.16px solid #FFFFFF",
//                   backdropFilter: "blur(15.560656547546387px)",
//                 }}
//               >
//                 <div className="bg-white rounded-t-[14.11px] pt-4 px-4 relative shadow-xl">
//                   {/* Icons at top-right */}
//                   <div className="absolute top-2 right-3 flex items-center gap-2">
//                     <Threedot />
//                     <Camera />
//                     <BlackStar />
//                   </div>

//                   {/* Profile Image + Status Dot */}
//                   <div className="flex items-center gap-2 mb-3">
//                     <div className="relative">
//                       <img src={Person} alt="person" className="w-10 h-10 rounded-full" />
//                       <div
//                         className="w-[7.76px] h-[7.76px] rounded-full bg-white absolute bottom-0 right-0"
//                         style={{
//                           boxShadow: "0px 0px 0px 1.41px #FFFFFF",
//                           border: "1.41px solid #01754F",
//                         }}
//                       ></div>
//                     </div>

                   
//                   </div>
//                    <div>
//                       <div className="text-[10.92px] font-semibold text-[#000000E5]">David Steinhoff <span className="font-[7.05] font-[#00000099]">· 1st</span></div>
//                       <div className="text-[9.61px] text-[#000000E5]">Recruitment Specialist @ Microsoft</div>
//                     </div>
//                     <div className="bg-[#C5DCE4] w-[131.46px] h-[4.53px] rounded-[6.35px] my-1"
//                     style={{
//                       borderBottom: "0.79px solid #FFFFFF1A",
//                       backdropFilter: "blur(11.434577941894531px)"

//                     }}></div>
//                     <div className="bg-[#C5DCE4] w-[97.35px] h-[4.53px] rounded-[6.35px] mb-1"
//                     style={{
//                       borderBottom: "0.79px solid #FFFFFF1A",
//                       backdropFilter: "blur(11.434577941894531px)"

//                     }}></div>

//                   {/* Status Section */}
//                   <div className="space-y-2 text-xs">
//                     <div className="">
//                       <img src={Banner3} />
//                     </div>
                   
//                     <div className="">
//                     <img src={Banner3_2}></img>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//               <div
//                 className="bg-[#AABEF0] rounded-t-[18.56px] pt-4 px-4 shadow-xl mt-[43px] w-full"
//                 style={{
//                   border: "2.16px solid #FFFFFF",
//                   backdropFilter: "blur(15.560656547546387px)",
//                 }}
//               >
//                 <img src={Banner4_1}></img>
//                 <BannerImg4 className="w-[300.13px] ml-[-40px]"/>
//               </div>
//               <div
//                 className="bg-[#AABEF0] rounded-tl-[18.56px] p-4 shadow-xl"
//                 style={{
//                   borderTop: "2.16px solid #FFFFFF",
//                   borderLeft: "2.16px solid #FFFFFF",
//                   backdropFilter: "blur(15.560656547546387px)",
//                 }}
//               >
//                 <img src={Banner5_1} width={"245.93px"}/>
//                 <img src={Banner5_2} width={"245.93px"}/>

//               </div>
//             </div>


//           </div>

//         </div>
//         {/* CTA Button */}
//         <div className="flex justify-center mt-10">
//           <button className="bg-[#9EE25A] hover:bg-lime-500 text-gray-900 font-bold px-8 py-3 rounded-lg flex items-center gap-2"
//           style={{
//             boxShadow: "0px 8px 24px 0px #959DA533"

//           }}>
//             Get Started Today
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default LeadCRMBanner
