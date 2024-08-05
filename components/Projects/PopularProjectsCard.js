import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PopularProjectsCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        
        // Ensure data structure is as expected
        if (!Array.isArray(data)) {
          throw new Error("Data is not an array");
        }
        
        // Filter products by tag "evergreen"
        const filteredProducts = data
          .filter(item => item.tag.includes("Our Popular Product"))
          .slice(0, 8);
          
        console.log("Filtered products:", filteredProducts);
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="projects-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Popular Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            {products.map(product => (
              <div key={product.id} className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-projects-box mb-3">
                  <Image
                    src={product.thumbnailImage}
                    alt={product.name}
                    width={800}
                    height={800}
                  />
                  <div className="plus-icon">
                    <Link href={`/product/${product.name}`}>
                      <span></span>
                    </Link>
                  </div>
                </div>
                <div className="text-center product-title-card">
                  <Link href={`/product/${product.name}`}>
                    <h6 className=""><b>{product.name}</b></h6>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="ai-all-services-btn">
              <Link href="/products" className="btn btn-primary">
                View All Products
              </Link>
            </div>
          </div>
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

export default PopularProjectsCard;
