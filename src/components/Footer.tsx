import { InstagramIcon, LucideLinkedin } from "lucide-react"
import { Facebook} from "lucide-react"
import LeadcrmLogo from "../assets/LeadcrmLogo.png"
import { GoogleCrome2, MailWithLetter, PhoneIcon, QueIcon, TwitterIcon } from "../assets/Svg"

export default function Footer() {
    return (
        <footer className="mt-[150px]"
            style={{
                background: "linear-gradient(277.75deg, rgba(1, 178, 216, 0.22) 0%, rgba(1, 178, 216, 0.07) 77%)"

            }}>
            {/* Main Footer Content */}
            <div className="max-w-[1400px] mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                    {/* Left Section - Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center space-x-2">
                                <img
                                    src={LeadcrmLogo}
                                    alt="LEADCRM Logo"
                                    className="h-[4rem] w-auto"
                                />
                            </div>
                        </div>
                        <p className="text-[1rem] text-[#000000] mb-6 leading-relaxed">
                            LeadCRM is LinkedIn integration tool for your CRM.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition"
                            >
                                <TwitterIcon size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition"
                            >
                                <LucideLinkedin size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition"
                            >
                                <InstagramIcon size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Integrations Column */}
                    <div>
                        <h3 className="font-bold font-[20px] text-[#090F4E] font-poppins mb-4">Integrations</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    HubSpot
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    Salesforce
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    Pipedrive
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <a href="#" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    Close.io
                                </a>
                                <span className="text-[10px] text-[#002A06] font-poppins px-2 py-2 rounded-full"
                                    style={{
                                        background: "linear-gradient(150.47deg, #D8FFDD 0%, #BDFFC6 100%)",
                                        border: "1px solid #FFFFFF",
                                        fontWeight: "500px"

                                    }}>Coming Soon</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <a href="#" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    Insightly
                                </a>
                                <span className="text-[10px] text-[#002A06] font-poppins px-2 py-2 rounded-full"
                                    style={{
                                        background: "linear-gradient(150.47deg, #D8FFDD 0%, #BDFFC6 100%)",
                                        border: "1px solid #FFFFFF",
                                        fontWeight: "500px"

                                    }}>Coming Soon</span>
                            </li>
                        </ul>
                    </div>

                    {/* Alternative Column */}
                    <div>
                        <h3 className="font-bold font-[20px] text-[#090F4E] font-poppins mb-4">Alternative</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    Surfe VS LeadCRM
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    Linkmatch Alternative
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="font-bold font-[20px] text-[#090F4E] font-poppins mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    Terms of Use
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us Column */}
                    <div>
                        <h3 className="font-bold font-[20px] text-[#090F4E] font-poppins mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <MailWithLetter />
                                <a href="mailto:support@leadcrm.io" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    support@leadcrm.io
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <PhoneIcon />
                                <a href="tel:+12315387466" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    +1 231-538-7466
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <QueIcon />
                                <a href="#" className="text-[14px] text-[#000000] hover:text-cyan-600 transition">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <div className="bg-[#242424] text-[#FFFFFF] px-3 py-2 rounded-[15px] flex items-center gap-2 w-fit lg:ml-[70px]"
                                    style={{
                                        border: "2px solid #242424"
                                    }}>

                                    <div> <div className="text-[1rem] ">Available in</div>
                                        <span className="text-[1rem] ">Chrome</span>
                                    </div>
                                    <GoogleCrome2 size={16} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Bottom Section */}
                <div className="space-y-4">
                    <p className="text-[12px] font-poppins text-center text-[#54595F] leading-relaxed ">
                        Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.
                    </p>
                    {/* Divider */}
                    <div className=""
                        style={
                            {
                                borderTop: "1px solid #8D8D8D94"
                            }
                        }></div>

                    <p className="text-[14px]] text-[#7A7A7A] text-center font-poppins">Copyright © 2025 LeadCRM. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
