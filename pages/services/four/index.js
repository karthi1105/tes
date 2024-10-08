import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import ServicesStyleFour from "../../../components/Services/ServicesStyleFour";

const ServicesFour = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Services Four"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Four"
        bgImg="/images/page-title-bg2.jpg"
      />

      <ServicesStyleFour />

      <Footer />
    </>
  );
};

export default ServicesFour;
