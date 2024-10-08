import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopFeaturedSolutions = () => {
  return (
    <>
      <div className="top-featured-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
              Our Top <b>Featured</b> Solutions Transforming Enterprises With AI
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut
              eget pellentesque nulla viverr.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <Image
                    src="/images/home-six/featured/icon1.png"
                    alt="icon"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Robotic Automation</Link>
                </h3>
                <Link href="/services/details" className="learn-btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <Image
                    src="/images/home-six/featured/icon2.png"
                    alt="icon"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Machine Learning</Link>
                </h3>
                <Link href="/services/details" className="learn-btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <Image
                    src="/images/home-six/featured/icon3.png"
                    alt="icon"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Cognitive Engagement</Link>
                </h3>
                <Link href="/services/details" className="learn-btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <Image
                    src="/images/home-six/featured/icon4.png"
                    alt="icon"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/services/details">Cognitive Automation</Link>
                </h3>
                <Link href="/services/details" className="learn-btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="top-featured-btn">
                <Link href="/contact" className="btn btn-primary">
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFeaturedSolutions;
