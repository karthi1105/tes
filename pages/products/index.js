import React, { useEffect, useState } from "react";
import PageBanner from "../../components/Common/PageBanner";
import TopHeader from "../../components/HomeSix/TopHeader";
import NavbarSix from "../../components/Layouts/NavbarSix";
import FooterTwo from "../../components/Layouts/FooterTwo";
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [activeSubcategory, setActiveSubcategory] = useState('');
    const router = useRouter();
    const { category } = router.query;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();

                // Filter products by category
                const filteredProducts = data.filter(item => item.category === category);
                setProducts(filteredProducts);

                // Get unique subcategories
                const uniqueSubcategories = [...new Set(filteredProducts.map(item => item.subcategory))];
                setSubcategories(uniqueSubcategories);

                // Set default active subcategory
                setActiveSubcategory(uniqueSubcategories[0]);
            } catch (error) {
                console.error("Error fetching the data", error);
            }
        };

        if (category) {
            fetchData();
        }
    }, [category]);

    const filteredProducts = products.filter(product => product.subcategory === activeSubcategory);

    // Group products by childCategory
    const productsByChildCategory = filteredProducts.reduce((acc, product) => {
        const childCategory = product.childCategory || '';
        if (!acc[childCategory]) {
            acc[childCategory] = [];
        }
        acc[childCategory].push(product);
        return acc;
    }, {});

    return (
        <>
            <TopHeader />
            <NavbarSix />
            <PageBanner
                pageTitle="Products"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Products"
                bgImg="/images/page-title-bg2.jpg"
            />

            <div className="services-section bg-f2f6f9 ptb-110">
                <div className="container">
                    <div className="tab services-tab-list">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <ul className="tabs">
                                    {subcategories.map((subcategory, index) => (
                                        <li
                                            key={index}
                                            className={`list ${activeSubcategory === subcategory ? "current" : ""}`}
                                            onClick={() => setActiveSubcategory(subcategory)}
                                        >
                                            <span>{subcategory}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-lg-9 col-md-9">
                                <div className="tab-content">
                                    <div className="scroll-overflow">
                                        {Object.keys(productsByChildCategory).map((childCategory, index) => (
                                            <div key={index} className="child-category-section">
                                                <h3 style={{color:"#000"}}>{childCategory}</h3>
                                                <div className="row mt-3">
                                                    {productsByChildCategory[childCategory].map(product => (
                                                        <div key={product.id} className="col-lg-3 col-sm-6 col-md-6">
                                                            <div className="single-projects-box mb-3">
                                                                <Image
                                                                    src={product.thumbnailImage}
                                                                    alt={product.name}
                                                                    width={800}
                                                                    height={800}
                                                                />
                                                                <div className="plus-icon">
                                                                    <Link href={`/product//${encodeURIComponent(product.name)}`}>
                                                                        <span></span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="text-center product-title-card title-card-hei">
                                                                <Link href={`/product/${product.name}`}>
                                                                    <h6 className=""><b>{product.name}</b></h6>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                <div className="shape-img2">
                    <Image
                        src="/images/shape/shape2.svg"
                        alt="image"
                        width={21}
                        height={20}
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
                <div className="shape-img4">
                    <Image
                        src="/images/shape/shape4.svg"
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
                <div className="shape-img6">
                    <Image
                        src="/images/shape/shape6.png"
                        alt="image"
                        width={182}
                        height={146}
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
                        src="/images/shape/dot2.png"
                        alt="image"
                        width={12}
                        height={11}
                    />
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default Products;
