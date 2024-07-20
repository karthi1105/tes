import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>What Clients Say About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

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
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <Image
                    src="/images/author3.jpg"
                    alt="image"
                    width={150}
                    height={1150}
                  />
                  <h3>Sarah Taylor</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <Image
                    src="/images/author1.jpg"
                    alt="image"
                    width={150}
                    height={1150}
                  />
                  <h3>Steven Smith</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Accusantium veritatis dolore ducimus illum, cumque excepturi,
                  autem rerum illo amet placeat odit corporis! Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Aliquid ullam harum
                  sit.
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <Image
                    src="/images/author2.jpg"
                    alt="image"
                    width={150}
                    height={1150}
                  />
                  <h3>James Eva</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Accusantium veritatis dolore ducimus illum, cumque excepturi,
                  autem rerum illo amet placeat odit corporis! Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Aliquid ullam harum
                  sit.
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
            width={18}
            height={18}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
