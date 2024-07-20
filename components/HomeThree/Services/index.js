import React, { useState } from "react";
import Image from "next/image";
import DataAnalysis from "./DataAnalysis";
import AutomationOptimization from "./AutomationOptimization";
import SecurityAndSurveillance from "./SecurityAndSurveillance";
import HealthAndManufacturing from "./HealthAndManufacturing";
import SoftwareEngineers from "./SoftwareEngineers";
import ITProfessional from "./ITProfessional";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="services-section bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>We Offer Professional Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
                    <span>Data Analysis</span>
                  </li>

                  <li
                    className={`list ${activeTab === 1 ? "current" : ""}`}
                    onClick={() => handleTabClick(1)}
                  >
                    <i className="flaticon-automatic"></i>
                    <span>Automation Optimization</span>
                  </li>

                  <li
                    className={`list ${activeTab === 2 ? "current" : ""}`}
                    onClick={() => handleTabClick(2)}
                  >
                    <i className="flaticon-locked"></i>
                    <span>Security & Surveillance</span>
                  </li>

                  <li
                    className={`list ${activeTab === 3 ? "current" : ""}`}
                    onClick={() => handleTabClick(3)}
                  >
                    <i className="flaticon-molecular"></i>
                    <span>Health & Manufacturing</span>
                  </li>

                  <li
                    className={`list ${activeTab === 4 ? "current" : ""}`}
                    onClick={() => handleTabClick(4)}
                  >
                    <i className="flaticon-gear"></i>
                    <span>Software Engineers</span>
                  </li>

                  <li
                    className={`list ${activeTab === 5 ? "current" : ""}`}
                    onClick={() => handleTabClick(5)}
                  >
                    <i className="flaticon-ceo"></i>
                    <span>IT Professional</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-8 col-md-8">
                <div className="tab-content">
                  {activeTab === 0 && <DataAnalysis />}
                  {activeTab === 1 && <AutomationOptimization />}
                  {activeTab === 2 && <SecurityAndSurveillance />}
                  {activeTab === 3 && <HealthAndManufacturing />}
                  {activeTab === 4 && <SoftwareEngineers />}
                  {activeTab === 5 && <ITProfessional />}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images  */}
        <div className="shape-img1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={523}
            height={586}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
        <div className="dot-shape1">
          <Image
            src="/images/shape/dot1.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot3.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
