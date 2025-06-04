import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import ServiceCards from "@/components/ServiceCards";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 ">
      <Navbar />
      <HeroSection />
      <Services />
      <ServiceAreas />
      {/* <Gallery /> */}
      <WhyChooseUs />
      <ServiceCards />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  )
}

