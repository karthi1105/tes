import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import Services from "../components/HomeOne/Services";
import Team from "../components/Common/Team";
import PartnerContent from "../components/Common/PartnerContent";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import PricingCard from "../components/Common/PricingCard";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Layouts/Footer";
import TopHeader from "../components/HomeSix/TopHeader";
import NavbarSix from "../components/Layouts/NavbarSix";
import FooterTwo from "../components/Layouts/FooterTwo";
import TeamMember from "../components/HomeEight/TeamMember";

export default function AboutUs() {
  return (
    <>
      <TopHeader />

      <NavbarSix />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImg="/images/page-title-bg1.jpg"
      />

      <AboutContact />

      <Services />

      <TeamMember />

      <FeedbackSlider />

      <PartnerContent />

      <FooterTwo />
    </>
  );
}
