import React from "react";
import Link from "next/link";

const MainServices = () => {
  return (
    <>
      <div className="main-services-area ptb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <i className="flaticon-robot-1"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Robotic Process Automation
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>

                <Link href="/services/details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <i className="flaticon-neural"></i>
                </div>
                <h3>
                  <Link href="/services/details">Machine Learning</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>

                <Link href="/services/details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <i className="flaticon-machine-learning"></i>
                </div>
                <h3>
                  <Link href="/services/details">Cognitive Engagement</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>

                <Link href="/services/details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServices;
