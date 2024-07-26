import React, { useEffect, useState } from "react";
import PageBanner from "../../components/Common/PageBanner";
import TopHeader from "../../components/HomeSix/TopHeader";
import NavbarSix from "../../components/Layouts/NavbarSix";
import FooterTwo from "../../components/Layouts/FooterTwo";
import Link from "next/link";

const Projects = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();

        // Get unique categories from data and count products in each category
        const categoryCounts = data.reduce((acc, item) => {
          acc[item.category] = (acc[item.category] || 0) + 1;
          return acc;
        }, {});

        setCategories(categoryCounts);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TopHeader />
      <NavbarSix />
      <PageBanner
        pageTitle="Products"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Products"
        bgImg="/images/page-title-bg1.jpg"
      />

      <div className="main-services-area ptb-110">
        <div className="container">
          <div className="row">
            {Object.keys(categories).map((category, index) => (
              <div key={index} className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-main-services-box">
                  <div className="icon">
                    <i className="flaticon-robot-1"></i>
                  </div>
                  <h3>
                    <Link href={`/products?category=${category}`}>
                      {category}
                    </Link>
                  </h3>
                  <p>{categories[category]} products available</p>
                  <Link href={`/products?category=${category}`} className="link-btn">
                    View Products
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default Projects;