import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent";
import TopHeader from "../components/HomeSix/TopHeader";
import NavbarSix from "../components/Layouts/NavbarSix";
import FooterTwo from "../components/Layouts/FooterTwo";

export default function PrivacyPolicy() {
  return (
    <>
      <TopHeader />

      <NavbarSix />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
      />

      <PrivacyPolicyContent />

      <FooterTwo />
    </>
  );
}
