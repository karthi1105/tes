import React from "react";
import Link from "next/link";
import Image from "next/image";

const FunFacts = () => {
  return (
    <>
      <div className="fun-facts-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>We completed 2500+ Projects Yearly Successfully & counting</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div
                className="single-funfacts"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <h3>
                  5000 <span className="sign-icon">+</span>
                </h3>
                <p>Downloaded</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div
                className="single-funfacts"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>
                  3000 <span className="sign-icon">+</span>
                </h3>
                <p>Feedback</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div
                className="single-funfacts"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3>
                  500 <span className="sign-icon">+</span>
                </h3>
                <p>Workers</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div
                className="single-funfacts"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>
                  70 <span className="sign-icon">+</span>
                </h3>
                <p>Contributors</p>
              </div>
            </div>
          </div>

          <div className="contact-cta-box">
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us.</p>

            <Link href="/contact" className="btn btn-primary">
              Contact Us<span></span>
            </Link>
          </div>
        </div>

        {/* Shape Images  */}
        <div className="shape-img1">
          <Image src="/images/map.png" alt="image" width={910} height={443} />
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
            width={12}
            height={11}
          />
        </div>
      </div>
    </>
  );
};

export default FunFacts;
