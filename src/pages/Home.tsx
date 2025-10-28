import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import bgImage from "../assets/bgImage.png";
import { Features } from "../components/features";
import ComparisonSection from "../components/comparisonSection";
import TestimonialSlider from "../components/testimonials";
import SupportedLeadCRM from "../components/Support";
import Footer from "../components/Footer";
import FreeTrialBanner from "../components/FloatingSection";
import LeadCRMBanner from "../components/Banners";
import LeadCRMSection from "../components/SalesSection";
import HowItWorks from "../components/HowItsWork";

export const Home = () => {
  return (
    <>
      <div
        className=" bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Navbar />
        <HeroSection />
      </div>
      <Features />
      <ComparisonSection />
      <HowItWorks />
      <TestimonialSlider />
      <LeadCRMSection />
      <SupportedLeadCRM />
      <LeadCRMBanner />
      <Footer />

       {/* Floating Free Trial Banner */}
      <FreeTrialBanner />
    </>
  );
}