import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <div className="unique-testimonials-section ptb-110">
        <div className="container">
          <Swiper
            autoHeight={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="unique-testimonials-slides"
          >
            <SwiperSlide>
              <div className="unique-testimonials-box">
                <span className="sub-title">
                  EXCILENT WORK DONE BY BARITON!
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis id erat diam non rhoncus
                  cras elit.
                </p>
                <div className="client-info">
                  <h3>Thomas Adbadon</h3>
                  <span>Global Head of Operations - Techxol LTD.</span>

                  <div className="image">
                    <Image
                      src="/images/author1.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>

                <div className="testimonials-shape-1">
                  <Image
                    src="/images/home-seven/testimonials-shape-1.png"
                    alt="image"
                    width={220}
                    height={211}
                  />
                </div>
                <div className="testimonials-shape-2">
                  <Image
                    src="/images/home-seven/testimonials-shape-2.png"
                    alt="image"
                    width={74}
                    height={53}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-testimonials-box">
                <span className="sub-title">
                  EXCILENT WORK DONE BY BARITON!
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis id erat diam non rhoncus
                  cras elit.
                </p>
                <div className="client-info">
                  <h3>John Smith</h3>
                  <span>Web Developer</span>

                  <div className="image">
                    <Image
                      src="/images/author2.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>

                <div className="testimonials-shape-1">
                  <Image
                    src="/images/home-seven/testimonials-shape-1.png"
                    alt="image"
                    width={220}
                    height={211}
                  />
                </div>
                <div className="testimonials-shape-2">
                  <Image
                    src="/images/home-seven/testimonials-shape-2.png"
                    alt="image"
                    width={74}
                    height={53}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="unique-testimonials-box">
                <span className="sub-title">
                  EXCILENT WORK DONE BY BARITON!
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis id erat diam non rhoncus
                  cras elit.
                </p>
                <div className="client-info">
                  <h3>Camile Taylor</h3>
                  <span>Desginer</span>

                  <div className="image">
                    <Image
                      src="/images/author3.jpg"
                      className="rounded-circle"
                      alt="image"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>

                <div className="testimonials-shape-1">
                  <Image
                    src="/images/home-seven/testimonials-shape-1.png"
                    alt="image"
                    width={220}
                    height={211}
                  />
                </div>
                <div className="testimonials-shape-2">
                  <Image
                    src="/images/home-seven/testimonials-shape-2.png"
                    alt="image"
                    width={74}
                    height={53}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
