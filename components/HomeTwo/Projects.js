import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div className="projects-area pt-30 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Product Categories</h2>
          </div>
        </div>

        <div className="container">
          <Swiper
            autoHeight={true}
            navigation={true}
            spaceBetween={25}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="projects-slides"
          >
            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img1.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Electrochemistry Consumables</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img2.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Binders</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img3.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Carbon Materials</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img4.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Coin cell Parts</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img5.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Foams</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img5.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Foils</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img5.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Carbon Items & Felt</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img5.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Membrane</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img5.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Mesh</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img5.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Seperator</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img5.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Electrochemical cell</b></h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img5.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />
                <div className="plus-icon">
                  <Link href="/projects">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h6 className=""><b>Fuel cell, Electrolyzer & TEST Cell</b></h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="circle-shape1">
          <Image
            src="/images/projects-shape.png"
            alt="image"
            width={890}
            height={679}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
