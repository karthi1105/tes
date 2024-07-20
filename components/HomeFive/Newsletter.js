import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-area">
        <div className="container">
          <div className="newsletter-inner">
            <div className="row align-items-center m-0">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="image text-center">
                  <Image
                    src="/images/woman-smile.png"
                    alt="image"
                    width={380}
                    height={387}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 p-0">
                <div className="content">
                  <h2>Start your free trial</h2>
                  <form className="newsletter-form">
                    <input
                      type="email"
                      className="input-newsletter"
                      placeholder="Enter your business email here"
                    />
                    <button type="submit">Sign Up Free</button>
                  </form>
                  <p>
                    Test out the Machine Learning features for 14 days, no
                    credit card required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
