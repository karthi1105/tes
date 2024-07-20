import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import Footer from "../../../components/Layouts/Footer";

const BlogDetails = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImg="/images/page-title-bg3.jpg"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
