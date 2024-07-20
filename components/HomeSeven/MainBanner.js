import React from "react";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="ml-main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-content">
                <span className="sub-title">
                  Analysis & Deep Machine Learning With <b>Ai</b>
                </span>
                <h1>
                  AI and Machine <span>Learning</span> Products Creators
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <form className="banner-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                  />
                  <button type="submit">Request Demo</button>
                </form>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-image">
                <Image
                  src="/images/home-seven/banner/main.png"
                  alt="image"
                  width={1065}
                  height={844}
                />

                <div className="circle-shape"></div>

                <div className="wrap-shape">
                  <Image
                    src="/images/home-seven/banner/shape3.png"
                    alt="image"
                    width={230}
                    height={254}
                  />
                </div>

                <div className="wrap-text">
                  <i className="fa-solid fa-check"></i>
                  <span>Get Professional Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-main-banner-shape1">
          <Image
            src="/images/home-seven/banner/shape1.png"
            alt="image"
            width={59}
            height={41}
          />
        </div>
        <div className="ai-main-banner-shape2">
          <Image
            src="/images/home-seven/banner/shape2.png"
            alt="image"
            width={109}
            height={108}
          />
        </div>
        <div className="ai-main-banner-shape3">
          <Image
            src="/images/home-seven/banner/shape4.png"
            alt="image"
            width={70}
            height={70}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
