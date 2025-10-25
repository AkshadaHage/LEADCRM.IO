import { ArrowRight } from "lucide-react"
import image1 from "../assets/AI-Comment-image-1-768x603.webp"
import image2 from "../assets/Template-imges-2-768x529.webp"

export default function AIResponseSection() {
  return (
    <section className="w-full bg-gray-50 rounded-[15px] py-16 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-lg text-gray-700 mb-2">
            Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.{" "}
            <span className="inline-block bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full ml-2">
              No Smart Assistance
            </span>
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card - AI Response */}
          <div className="bg-pink-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get the same high-impact engagement in 80% less time.
            </h3>
            <a href="#" className="text-purple-600 font-semibold flex items-center gap-1 mb-8 hover:text-purple-700">
              Try LeadCRM AI Response <ArrowRight size={16} />
            </a>

            {/* AI Settings Dialog Mockup */}
            <img src={image1} />
          </div>

          {/* Right Card - Templates */}
          <div className="bg-pink-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Use Shortcuts to reply faster.</h3>
            <a href="#" className="text-purple-600 font-semibold flex items-center gap-1 mb-8 mt-10 hover:text-purple-700">
              Try LeadCRM Templates <ArrowRight size={16} />
            </a>

            {/* Message Template Mockup */}
           <div className="mt-[85px]"> <img src={image2} /></div>
           </div>
           </div>
      </div>
    </section>
  )
}
