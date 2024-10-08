import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="about-area pt-0 ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <Image
                  src="/images/about/about3.png"
                  alt="image"
                  width={460}
                  height={493}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <h2>Engaging New Audiences through Smart Approach</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Classification
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Examples
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Extensions
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Extraction
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Selection
                    </span>
                  </li>
                </ul>

                <Link href="/about-two" className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={523}
            height={586}
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
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
