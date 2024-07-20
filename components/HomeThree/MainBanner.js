import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-banner-content">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  World’s Leading Machine Learning Company
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  ML today are able to supply needful of help, information, and
                  positive experience of maintaining intimacy with customers.
                  Eventually, chatbot ideas bring a pleasant experience of all
                  these qualities into the conversation.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <Link href="/contact" className="btn btn-primary">
                    Schedule a Demo
                  </Link>
                  <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="hero-banner-image"
                data-aos="zoom-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <Image
                  src="/images/banner-image.png"
                  alt="image"
                  width={924}
                  height={530}
                />
              </div>
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

export default MainBanner;
