import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import SingleProductsContent from "../../../components/Shop/SingleProductsContent";
import Footer from "../../../components/Layouts/Footer";

const SingleProducts = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Single Products"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Single Products"
        bgImg="/images/page-title-bg1.jpg"
      />

      <SingleProductsContent />

      <Footer />
    </>
  );
};

export default SingleProducts;
