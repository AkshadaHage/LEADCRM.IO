import { ArrowRight } from "lucide-react"
import BulkExport1 from "../assets/Bulk-Export-Enrichment.png"
import BulkExport2 from "../assets/Bulk-Export-Enrichment-1.png"

export default function BulkExportSection() {
  return (
    <section className="w-full bg-white px-8 py-16">
      {/* Header with problem statement */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">Your Sales Navigator Workflow is Broken.</h2>
          <span className="bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">Lost Productivity</span>
        </div>
      </div>

      {/* Two column feature cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Card - Bulk Export */}
        <div className="bg-[#ECEAFF] rounded-2xl pt-8 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 px-8 mb-1">Enrich & Export 250 Profiles in Just 60 Seconds.</h3>
          <a href="#" className="text-green-600 px-8 font-semibold flex items-center gap-2 hover:text-green-700">
            Try LeadCRM Bulk Export <ArrowRight size={18} />
          </a>

          {/* Mockup - Sales Navigator */}
          <img src={BulkExport1} />
        </div>

        {/* Right Card - Google Sheet Export */}
        <div className="bg-[#ECEAFF] rounded-2xl pt-8 pl-8 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Export & enrich profiles to the CRM or G-Sheet</h3>
          <a href="#" className="text-green-600 font-semibold flex items-center gap-2 mb-8 hover:text-green-700">
            Try LeadCRM Bulk Export <ArrowRight size={18} />
          </a>

          {/* Mockup - Google Sheet */}
          <div className="mt-3"><img src={BulkExport2} /></div>
          
          </div>
      </div>
    </section>
  )
}
