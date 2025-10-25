import { useState } from "react";
import Robo from "../assets/Robo.png";
import {
  CompassIcon,
  DataIntegration,
  HumanBrain,
  SyncLogo,
} from "../assets/Svg";
import CRMDataSync from "./CRMDatasync";
import BulkExportSection from "./BulkExport";
import AIResponseSection from "./AIProductivity";
import CRMEnterprize from "./CRMDataEnterprize";

export default function LeadCRMSection() {
  const [activeTab, setActiveTab] = useState("CRM Data Enrichment");

  const tabs = [
    {
      title: "CRM Data Enrichment",
      logo: DataIntegration,
    },
    {
      title: "CRM Data Sync",
      logo: SyncLogo,
    },
    {
      title: "Bulk Export & Enrichment",
      logo: CompassIcon,
    },
    {
      title: "AI Productivity",
      logo: HumanBrain,
    },
  ];

  return (
    <div className="w-full relative">
      <div className="absolute top-0 left-0 mt-10">
        <img src={Robo} alt="Robo" className="w-[80px] h-[150px]" />
      </div>

      <section className="w-full max-w-[1400px] mx-auto px-0 py-16 font-expo">
        {/* Top Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[1.5rem] md:text-[2.3rem] font-semibold text-[#090F4E] mb-2">
            Complete LinkedIn Sales Solutions
          </h2>
          <p className="text-[#4D4D4D] font-[1.1rem]">
            Everything you need for professional LinkedIn prospecting
          </p>
        </div>

        {/* Tabs */}
        <div
          className="
            flex gap-8 mb-10  px-[62px]
            overflow-x-auto no-scrollbar
            sm:justify-between sm:flex-nowrap
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(tab.title)}
              className={`flex items-center flex-shrink-0 gap-2 border-b-2 pb-2 text-sm transition ${
                activeTab === tab.title
                  ? "border-b-4 border-[#090F4E] text-[#090F4E] font-semibold"
                  : "border-transparent text-[#4C4C4C] hover:text-[#2042B6]"
              }`}
            >
              <tab.logo className="w-5 h-5" />
              <span className="whitespace-nowrap">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "CRM Data Enrichment" && <CRMEnterprize />}
        {activeTab === "CRM Data Sync" && <CRMDataSync />}
        {activeTab === "Bulk Export & Enrichment" && <BulkExportSection />}
        {activeTab === "AI Productivity" && <AIResponseSection />}
      </section>
    </div>
  );
}
