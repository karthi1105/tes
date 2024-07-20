import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <Image
                  src="/images/home-seven/about/about.png"
                  alt="image"
                  width={1008}
                  height={995}
                />

                <div className="circle-shape">
                  <Image
                    src="/images/home-seven/about/circle.png"
                    alt="image"
                    width={536}
                    height={518}
                  />
                </div>
                <div className="vector-shape">
                  <Image
                    src="/images/home-seven/about/vector.png"
                    alt="image"
                    width={102}
                    height={55}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>
                  Analysis And Deep <span>Machine</span> Learning Provider With
                  Ai Solution
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis.
                </p>

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> The Most Personalized
                    Object Detection
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> We Create The Most
                    Realistic AI
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Innovative Machine
                    Learning Products
                  </li>
                </ul>
                <div className="about-btn">
                  <Link href="/about-two" className="btn btn-primary">
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

export default AboutAI;
