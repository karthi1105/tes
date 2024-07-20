import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import TermsConditionsContent from "../components/TermsConditions/TermsConditionsContent";
import TopHeader from "../components/HomeSix/TopHeader";
import NavbarSix from "../components/Layouts/NavbarSix";
import FooterTwo from "../components/Layouts/FooterTwo";

export default function TermsConditions() {
  return (
    <>
      <TopHeader />

      <NavbarSix />

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <TermsConditionsContent />

      <FooterTwo />
    </>
  );
}
