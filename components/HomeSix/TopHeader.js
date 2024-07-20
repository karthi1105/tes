import React from "react";
import Link from "next/link";

const TopHeader = () => {
  return (
    <>
      <div className="topbar-wrap-area">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-4">
              <div className="topbar-content">
                <span>
                  Welcome to The Electrode Store. Need Help?{" "}
                  <Link href="/contact">Contact Us</Link>
                </span>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <ul className="topbar-action-list">
                <li>
                  <i className="fa-solid fa-location-pin"></i> No. 50, Anand Nagar, II Phase, Sipcot, Hosur, Tamil Nadu,India - 635126
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>{" "}
                  <a href="tel:9025439930">+91 9025439930</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>{" "}
                  <a href="mailto:sales@theelectrodestore.com">sales@theelectrodestore.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
