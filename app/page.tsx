// import Navbar from './components/Navbar'
// import HeroSection from './components/HeroSection'
// import Services from './components/Services'
// import HowItWorks from './components/HowItWorks'
// import ServiceCards from './components/ServiceCards'
// import Testimonials from './components/Testimonials'
// import FAQ from './components/FAQ'
// import ContactForm from './components/ContactForm'
// import Footer from './components/Footer'
// import Gallery from './components/Gallery'
// import WhyChooseUs from './components/WhyChooseUs'

import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import ServiceCards from "@/components/ServiceCards";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Gallery />
      <ServiceCards />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}

