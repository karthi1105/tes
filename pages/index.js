import React from "react";
import NavbarSix from "../components/Layouts/NavbarSix";
import TopHeader from "../components/HomeSix/TopHeader";
import MainBanner from "../components/HomeSix/MainBanner";
import FunFacts from "../components/HomeSix/FunFacts";
import TopFeaturedSolutions from "../components/HomeSix/TopFeaturedSolutions";
import AboutAI from "../components/HomeSeven/AboutAI";
import Services from "../components/HomeSix/Services";
import ComputerVisionAI from "../components/HomeSix/ComputerVisionAI";
import PricingPlan from "../components/HomeSix/PricingPlan";
import LatestBlog from "../components/HomeSix/LatestBlog";
import Newsletter from "../components/HomeSix/Newsletter";
import FooterTwo from "../components/Layouts/FooterTwo";
import Projects from "../components/HomeTwo/Projects";
import PopularProjectsCard from "../components/Projects/PopularProjectsCard";
import LatestProjectsCard from "../components/Projects/LatestProjectsCard";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import PartnerSlider from "../components/Common/PartnerSlider";


export default function HomeSix() {
  return (
    <>
      <TopHeader />

      <NavbarSix />

      <MainBanner />

      <FunFacts />

      <Projects />

      <AboutAI />

      <PopularProjectsCard />

      <LatestProjectsCard />

      <FeedbackSlider />

      <PartnerSlider />

      <FooterTwo />
    </>
  );
}; 
