import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Testimonials from "../components/HomeTwo/Testimonials";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import CustomerFeedback from "../components/HomeFive/CustomerFeedback";
import Footer from "../components/Layouts/Footer";

export default function Feedback() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Feedback"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Feedback"
        bgImg="/images/page-title-bg3.jpg"
      />

      <Testimonials />

      <FeedbackSlider />

      <CustomerFeedback />

      <Footer />
    </>
  );
}
