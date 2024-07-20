import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const DomainSearch = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="ai-main-banner-area">
        <div className="container-fluid">
          <div className="ai-main-banner-content">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              AI and Machine <span>Learning</span> Products Creators
            </h1>

            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul
              className="banner-btn"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <li>
                <Link href="/contact" className="btn btn-primary">
                  Get Started Free
                </Link>
              </li>
              <li>
                <div onClick={() => setToggler(!toggler)} className="video-btn">
                  <i className="flaticon-play-button"></i>
                  Watch Intro Video
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="ai-main-banner-image">
          <Image
            src="/images/home-six/banner/main1.png"
            alt="image"
            width={678}
            height={450}
          />
          <div className="circle-shape"></div>
        </div>
        <div className="ai-main-banner-image right-image">
          <Image
            src="/images/home-six/banner/main2.png"
            alt="image"
            width={645}
            height={450}
          />
          <div className="circle-shape"></div>
        </div>

        {/* Shape Images */}
        <div className="ai-main-banner-shape-1">
          <Image
            src="/images/home-six/banner/shape-1.png"
            alt="image"
            width={108}
            height={100}
          />
        </div>
        <div className="ai-main-banner-shape-2">
          <Image
            src="/images/home-six/banner/shape-2.png"
            alt="image"
            width={46}
            height={46}
          />
        </div>
        <div className="ai-main-banner-shape-3">
          <Image
            src="/images/home-six/banner/shape-2.png"
            alt="image"
            width={46}
            height={46}
          />
        </div>
      </div>
    </>
  );
};

export default DomainSearch;
