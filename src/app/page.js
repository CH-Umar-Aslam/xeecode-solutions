import Navbar from "@/components/Navbar";
import AboutUsSection from "@/pages/Home/AboutUsSection";
import Clients from "@/pages/Home/Clients";
import FooterSection from "@/pages/Home/FooterSections";
import HeroSection from "@/pages/Home/HeroSection";
import LatestsPosts from "@/pages/Home/LatestPosts";
import OurTeamSection from "@/pages/Home/OurTeamSection";
import RecentWorkSection from "@/pages/Home/RecentWorkSection";
import TestimonialSection from "@/pages/Home/TestimonialSection";
import WhatWeDoSection from "@/pages/Home/WhatWeDoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto bg-secondary">


    <HeroSection/>
    <Clients/>
    <AboutUsSection/>
    <WhatWeDoSection/>
    <OurTeamSection/>
    <RecentWorkSection/>
    <TestimonialSection/>
    <LatestsPosts/>
   
    </div>
  );
}
