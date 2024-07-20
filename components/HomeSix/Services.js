import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
              We Offer Professional <b>Solutions</b> With Artificial
              Intelligence
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut
              eget pellentesque nulla viverr.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <Image
                    src="/images/home-six/services/icon1.png"
                    alt="icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Software Engineers</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>

                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <Image
                    src="/images/home-six/services/icon2.png"
                    alt="icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Data Analysts</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <Image
                    src="/images/home-six/services/icon3.png"
                    alt="icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Security & Surveillance</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-four">
                  <Image
                    src="/images/home-six/services/icon4.png"
                    alt="icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Health & Manufacturing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-five">
                  <Image
                    src="/images/home-six/services/icon5.png"
                    alt="icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Robotic Automation</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <Image
                    src="/images/home-six/services/icon6.png"
                    alt="icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Automatic Optimization</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/services/details" className="read-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="ai-all-services-btn">
                <Link href="/services" className="btn btn-primary">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-services-shape">
          <Image
            src="/images/home-six/services/shape.png"
            alt="image"
            width={34}
            height={34}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
