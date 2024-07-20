import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import Footer from "../components/Layouts/Footer";
import TopHeader from "../components/HomeSix/TopHeader";
import NavbarSix from "../components/Layouts/NavbarSix";
import FooterTwo from "../components/Layouts/FooterTwo";

export default function Faq() {
  return (
    <>
      <TopHeader />

      <NavbarSix />

      <PageBanner
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        bgImg="/images/page-title-bg1.jpg"
      />

      <FaqContent />

      <FooterTwo />
    </>
  );
}
