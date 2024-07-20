import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="ml-main-banner-area with-linear-gradient-color">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-content with-white-color-text">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Analysis & Deep Machine Learning With <b>Ai</b>
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  AI and Machine <span>Learning</span> Products Creators
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul
                  className="banner-btn"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <li>
                    <Link href="/contact" className="btn btn-primary">
                      Get Started Free
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="flaticon-play-button"></i>
                      Watch Intro Video
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-wrap-image">
                <Image
                  src="/images/home-eight/banner/main.png"
                  alt="image"
                  width={1250}
                  height={850}
                />

                <div className="circle-shape"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-main-banner-shape4">
          <Image
            src="/images/home-eight/banner/shape.png"
            alt="image"
            width={174}
            height={62}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
