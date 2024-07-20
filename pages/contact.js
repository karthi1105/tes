import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import Footer from "../components/Layouts/Footer";
import FooterTwo from "../components/Layouts/FooterTwo";
import TopHeader from "../components/HomeSix/TopHeader";
import NavbarSix from "../components/Layouts/NavbarSix";

export default function Contact() {
  return (
    <>
      <TopHeader />

      <NavbarSix />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImg="/images/page-title-bg3.jpg"
      />

      <ContactFormContent />

      <FooterTwo />
    </>
  );
}
