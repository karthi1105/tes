import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Projects = () => {
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        console.log("data", data)
        // Get unique categories
        const uniqueData = data.reduce((acc, current) => {
          const x = acc.find(item => item.category === current.category);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        setUniqueCategories(uniqueData);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, []);

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
            loop={true}
            spaceBetween={25}
            autoplay={{
              delay: 3000,
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
            {uniqueCategories.map((categoryData, index) => (
              <SwiperSlide key={index}>
                <div className="single-projects-box mb-3">
                  <Image
                    src={categoryData.categoryImage}
                    alt={categoryData.category}
                    width={800}
                    height={800}
                  />
                  <div className="plus-icon">
                    <Link href={`/products?category=${categoryData.category}`}>
                      <span></span>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h6 className=""><b>{categoryData.category}</b></h6>
                </div>
              </SwiperSlide>
            ))}
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
