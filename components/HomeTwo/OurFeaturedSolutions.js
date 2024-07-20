import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurFeaturedSolutions = () => {
  return (
    <>
      <div className="featured-solutions-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Featured Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="icon">
                  <Image
                    src="/images/icon1.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/projects/details">Robotic Automation</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>
                <Link href="/projects/details" className="learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="icon">
                  <Image
                    src="/images/icon2.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/projects/details">Machine Learning</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>
                <Link href="/projects/details" className="learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="icon">
                  <Image
                    src="/images/icon3.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/projects/details">Cognitive Engagement</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>
                <Link href="/projects/details" className="learn-more-btn">
                  Read More
                </Link>
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

export default OurFeaturedSolutions;
