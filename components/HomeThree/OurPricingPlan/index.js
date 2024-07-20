import React, { useState } from "react";
import Image from "next/image";
import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";

const OurPricingPlan = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="pricing-area ptb-110 pt-0">
        <div className="container">
          <div className="section-title">
            <h2>Our Pricing Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="tab pricing-tab bg-color">
            <ul className="tabs">
              <li
                className={`list ${activeTab === 0 ? "current" : ""}`}
                onClick={() => handleTabClick(0)}
              >
                Monthly Plan
              </li>

              <li
                className={`list ${activeTab === 1 ? "current" : ""}`}
                onClick={() => handleTabClick(1)}
              >
                Yearly Plan
              </li>
            </ul>

            <div className="tab-content">
              {activeTab === 0 && <MonthlyPlan />}
              {activeTab === 1 && <YearlyPlan />}
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={21}
            height={20}
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
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img7">
          <Image
            src="/images/shape/shape3.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
      </div>
    </>
  );
};

export default OurPricingPlan;
