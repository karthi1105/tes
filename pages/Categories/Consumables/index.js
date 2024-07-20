import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Working from "./Working";
import Counter from "./Counter";
import Reference from "./Refrence";
import Polishing from "./Polishing";
import Swagelok from "./Swagelok";
import FooterTwo from "../../../components/Layouts/FooterTwo";
import PageBanner from "../../../components/Common/PageBanner";
import NavbarSix from "../../../components/Layouts/NavbarSix";
import TopHeader from "../../../components/HomeSix/TopHeader";

const Consumables = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };

  return (
    <>

        <TopHeader />

        <NavbarSix />

        <PageBanner
        pageTitle="Electrochemical Consumables"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Products"
        bgImg="/images/page-title-bg1.jpg"
        />

        <div className="services-section bg-f2f6f9 ptb-110">
            <div className="container">
            <div className="section-title">
                <h2>Electrochemical Consumables</h2>
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
                        <span>Working Electrode</span>
                    </li>

                    <li
                        className={`list ${activeTab === 1 ? "current" : ""}`}
                        onClick={() => handleTabClick(1)}
                    >
                        <i className="flaticon-automatic"></i>
                        <span>Counter Electrode</span>
                    </li>

                    <li
                        className={`list ${activeTab === 2 ? "current" : ""}`}
                        onClick={() => handleTabClick(2)}
                    >
                        <i className="flaticon-locked"></i>
                        <span>Reference Electrode</span>
                    </li>

                    <li
                        className={`list ${activeTab === 3 ? "current" : ""}`}
                        onClick={() => handleTabClick(3)}
                    >
                        <i className="flaticon-molecular"></i>
                        <span>Polishing Kit</span>
                    </li>

                    <li
                        className={`list ${activeTab === 4 ? "current" : ""}`}
                        onClick={() => handleTabClick(4)}
                    >
                        <i className="flaticon-gear"></i>
                        <span>Swagelok Cell </span>
                    </li>

                    </ul>
                </div>

                <div className="col-lg-8 col-md-8">
                    <div className="tab-content scroll-overflow" >
                    {activeTab === 0 && <Working />}
                    {activeTab === 1 && <Counter />}
                    {activeTab === 2 && <Reference />}
                    {activeTab === 3 && <Polishing />}
                    {activeTab === 4 && <Swagelok />}
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

export default Consumables;
