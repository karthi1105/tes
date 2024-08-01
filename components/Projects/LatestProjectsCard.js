import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LatestProjectsCard = ({ category, subcategory }) => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        // Filter products by category, subcategory, and tag "Latest Product"
        const filteredProducts = data
          .filter(item =>
            item.category === category && (
              Array.isArray(item.subcategory)
                ? item.subcategory.includes(subcategory)
                : item.subcategory === subcategory
            )
          )
          .filter(item => item.tag.includes("Latest Product"))
          .slice(0, 8); 
          
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    if (category && subcategory) {
      fetchData();
    }
  }, [category, subcategory]);

  return (
    <>
      <div className="projects-area ptb-110">
        <div className="container">
            <div className="section-title">
                <h2>Latest Products</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-projects-box">
                            <Image
                            src={product.thumbnailImage}
                            alt={product.name}
                            width={800}
                            height={800}
                            />

                            <div className="plus-icon">
                            <Link href="/product/${product.name}">
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
                <Link href="/" className="btn btn-primary">
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

export default LatestProjectsCard;
