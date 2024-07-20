import React, { useState } from "react";
import FooterTwo from "../../../components/Layouts/FooterTwo";
import PageBanner from "../../../components/Common/PageBanner";
import NavbarSix from "../../../components/Layouts/NavbarSix";
import TopHeader from "../../../components/HomeSix/TopHeader";
import Films from "./FIlms";
import Foamss from "./Foams";

const Foams = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };

  return (
    <>

        <TopHeader />

        <NavbarSix />

        <PageBanner
        pageTitle="Foams & Films"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Products"
        bgImg="/images/page-title-bg1.jpg"
        />

        <div className="services-section bg-f2f6f9 ptb-110">
            <div className="container">
            <div className="section-title">
                <h2>Foams & Films</h2>
            </div>

            <div className="tab services-tab-list">
                <div className="row">
                <div className="col-lg-4 col-md-4">
                    <ul className="tabs">
                    <li
                        className={`list ${activeTab === 0 ? "current" : ""}`}
                        onClick={() => handleTabClick(0)}
                    >
                        <i className="flaticon-income"></i>
                        <span>Foams</span>
                    </li>

                    <li
                        className={`list ${activeTab === 1 ? "current" : ""}`}
                        onClick={() => handleTabClick(1)}
                    >
                        <i className="flaticon-automatic"></i>
                        <span>Aluminium Laminated Films</span>
                    </li>

                    </ul>
                </div>

                <div className="col-lg-8 col-md-8">
                    <div className="tab-content scroll-overflow">
                    {activeTab === 0 && <Foamss />}
                    {activeTab === 1 && <Films />}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <FooterTwo />
    </>
  );
};

export default Foams;
