import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import ProjectsDetailsContent from "../../../components/Projects/ProjectsDetailsContent";
import TopHeader from "../../../components/HomeSix/TopHeader";
import NavbarSix from "../../../components/Layouts/NavbarSix";
import FooterTwo from "../../../components/Layouts/FooterTwo";

const ProjectsDetails = () => {
  return (
    <>
      <TopHeader />

      <NavbarSix />
      
      <PageBanner
        pageTitle="Projects Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects Details"
        bgImg="/images/page-title-bg2.jpg"
      />

      <ProjectsDetailsContent />

      <FooterTwo />
    </>
  );
};

export default ProjectsDetails;
