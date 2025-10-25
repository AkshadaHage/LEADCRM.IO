import { ArrowRight, Linkedin } from "lucide-react"
import CRMData1 from "../assets/CRM-Data-Sync-1.png"
import CRMData from "../assets/CRM-Data-Sync.png"

export default function CRMDataSync() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with problem statement */}
        <div className="mb-16">
          <p className="text-lg font-medium text-gray-900">
            40+ hours lost to copy-paste. Every. Single. Month..{" "}
            <span className="inline-block bg-red-200 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold ml-3">
              Lost Lead Context
            </span>
          </p>
        </div>

        {/* Two column features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature 1: Data Sync */}
          <div className="bg-[#FFFFCE] rounded-3xl p-10">
            <h3 className="text-[22px] font-bold text-gray-900 mb-4">The Solution? LeadCRM's Instant Data Sync.</h3>
            <a
              href="#"
              className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors mb-10 text-lg"
            >
              Try LeadCRM Data Sync
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            {/* Mockup - Chat/CRM Interface */}
            <img src={CRMData} />
          </div>

          {/* Feature 2: Data Overlay */}
          <div className="bg-[#FFFFCE] rounded-3xl p-10">
            <h3 className="text-[22px] font-bold text-gray-900 mb-4">
              Unlock instant CRM insights on every profile you visit.
            </h3>
            <a
              href="#"
              className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors mb-10 text-lg"
            >
              Try LeadCRM Data Overlay
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            {/* Mockup - LinkedIn Profile with CRM Overlay */}
            <img src={CRMData1} />
          </div>
        </div>
      </div>
    </section>
  )
}
