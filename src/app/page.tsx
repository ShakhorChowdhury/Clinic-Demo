import Image from "next/image";

import Hero from "./components/hero";
import Navbar from "./components/navbar";
import FloatingCards from "./components/FloatingCards";
import Services from "./components/Services";
import MissionStatement from "./components/MissionStatement";
import HowItWorks from "./components/HowItWorks";
import AppointmentForm from "./components/AppointmentForm";
import OurDoctors from "./components/OurDoctors";
import PatientTestimonials from "./components/PatientTestimonials";
import Footer from "./components/Footer";
import NewsletterBanner from "./components/NewsletterBanner";

export default function Home() {
  return (
    <div>
      <div className=" font-opensans min-h-screen bg-center bg-[url('/BackgroundSm.png')] md:bg-[url('/BackgroundMd.png')] lg:bg-[url('/BackgroundLg.png')] xl:bg-[url('/BackgroundXl.png')] 2xl:bg-[url('/Background2xl.png')] max-h-[100vh] bg-no-repeat bg-cover">
        <Navbar />
        <Hero />
        <FloatingCards />
        <MissionStatement />
        <Services />
        <HowItWorks />
        <AppointmentForm/>
         <OurDoctors />
        <PatientTestimonials />
        <NewsletterBanner />
          <Footer />
      </div>

    </div>
  );
}
