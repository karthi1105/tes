import React from "react";
import Link from "next/link";
import Image from "next/image";

const BusinessSolution = () => {
  return (
    <>
      <div className="business-solution-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="business-solution-image">
                <Image
                  src="/images/home-seven/business-solution/business-2.png"
                  alt="image"
                  width={1023}
                  height={884}
                />

                <div className="circle-shape">
                  <Image
                    src="/images/home-seven/business-solution/circle-shape-2.png"
                    alt="image"
                    width={449}
                    height={496}
                  />
                </div>
                <div className="wrap-text">
                  <i className="fa-solid fa-check"></i>
                  <span>Advance Data Quality Audit</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="business-solution-content with-some-gap">
                <h3>
                  AI Technology Best For Your <span>Business</span> Solution &
                  Target Audience
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices quis erat diam non rhoncus cras elit.
                </p>

                <ul className="solution-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Easy To Work With Our
                    Expert Engineers
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Advance Data Analysis
                    Operation
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Various Analysis &
                    Competitve Price
                  </li>
                </ul>
                <div className="solution-btn">
                  <Link href="/contact" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSolution;
