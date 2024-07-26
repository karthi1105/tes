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
                            <div className="col-lg-4 col-md-4">
                                <ul className="tabs">
                                    {subcategories.map((subcategory, index) => (
                                        <li
                                            key={index}
                                            className={`list ${activeSubcategory === subcategory ? "current" : ""}`}
                                            onClick={() => setActiveSubcategory(subcategory)}
                                        >
                                            <i className="flaticon-income"></i>
                                            <span>{subcategory}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="tab-content">
                                    {filteredProducts.map(product => (
                                        <div key={product.id} className="product-item">
                                            <h3>{product.name}</h3>
                                            <p>{product.description}</p>
                                            <Image src={product.thumbnailImage} alt={product.name} width={300} height={200} />
                                            <p>Price: ${product.price}</p>
                                            <Link href={`/product/${product.name}`}>
                                                <button>View Product</button>
                                            </Link>
                                        </div>
                                    ))}
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
