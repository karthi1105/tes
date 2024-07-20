import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterTwo = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-wrap-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/TES-logo.png"
                      alt="image"
                      width={149}
                      height={37}
                    />
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>Information</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/">Electrochemical Accesories</Link>
                  </li>
                  <li>
                    <Link href="/">Battery Materials</Link>
                  </li>
                  <li>
                    <Link href="/">Super Capacitor Materials</Link>
                  </li>
                  <li>
                    <Link href="/">Fuel Cell Accessories</Link>
                  </li>
                  <li>
                    <Link href="/">Custom Requirements</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                  <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ's</Link>
                  </li>
                  {/* <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    No. 50, Anand Nagar, II Phase, Sipcot, Hosur, Tamil Nadu,India - 635126
                  </li>
                  <li>
                    <span>Email:</span>
                    sales@theelectrodestore.com
                  </li>
                  <li>
                    <span>Phone:</span>
                    +91 9025439930
                  </li>
                  <li>
                    <span>Fax:</span>
                    +44 785 4578964
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} Electrochemical Workstation. All Rights Reserved{" "}
                  <a href="https://ahattrickz.com/" target="_blank">
                    Ahattrickz Infotech
                  </a>
                  .
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <Image
            src="/images/circle-map.png"
            alt="image"
            width={370}
            height={292}
          />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="footer-wrap-shape-1">
          <Image
            src="/images/home-six/footer/shape-1.png"
            alt="image"
            width={970}
            height={465}
          />
        </div>
        <div className="footer-wrap-shape-2">
          <Image
            src="/images/home-six/footer/shape-2.png"
            alt="image"
            width={108}
            height={99}
          />
        </div>
        <div className="footer-wrap-shape-3">
          <Image
            src="/images/home-six/footer/shape-3.png"
            alt="image"
            width={34}
            height={34}
          />
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
