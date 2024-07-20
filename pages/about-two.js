import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutUsContent from "../components/AboutTwo/AboutUsContent";
import ProfessionalSolutions from "../components/HomeFive/ProfessionalSolutions";
import PartnerSlider from "../components/AboutTwo/PartnerSlider";
import CustomerFeedback from "../components/HomeFive/CustomerFeedback";
import Team from "../components/Common/Team";
import Footer from "../components/Layouts/Footer";

export default function AboutTwo() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImg="/images/page-title-bg2.jpg"
      />

      <AboutUsContent />

      <ProfessionalSolutions />

      <Team />

      <PartnerSlider />

      <CustomerFeedback />

      <Footer />
    </>
  );
}
