import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsCard = () => {
  return (
    <>
      <div className="projects-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Electrochemistry Consumables</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img1.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />

                <div className="plus-icon">
                  <Link href="/projects/details">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center product-title-card">
                <Link href="/projects/details">
                <h6 className=""><b>Fuel cell, Electrolyzer & TEST Cell</b></h6>
                <p>$52</p>
                </Link>
              </div> 
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img2.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />

                <div className="plus-icon">
                  <Link href="/projects/details">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center product-title-card">
                <Link href="/projects/details">
                <h6 className=""><b>Fuel cell, Electrolyzer & TEST Cell</b></h6>
                <p>$52</p>
                </Link>
              </div>              
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img3.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />

                <div className="plus-icon">
                  <Link href="/projects/details">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center product-title-card">
                <Link href="/projects/details">
                <h6 className=""><b>Fuel cell, Electrolyzer & TEST Cell</b></h6>
                <p>$52</p>
                </Link>
              </div> 
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img4.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />

                <div className="plus-icon">
                  <Link href="/projects/details">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center product-title-card">
                <Link href="/projects/details">
                <h6 className=""><b>Fuel cell, Electrolyzer & TEST Cell</b></h6>
                <p>$52</p>
                </Link>
              </div> 
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img5.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />

                <div className="plus-icon">
                  <Link href="/projects/details">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center product-title-card">
                <Link href="/projects/details">
                <h6 className=""><b>Fuel cell, Electrolyzer & TEST Cell</b></h6>
                <p>$52</p>
                </Link>
              </div> 
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img6.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />

                <div className="plus-icon">
                  <Link href="/projects/details">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center product-title-card">
                <Link href="/projects/details">
                <h6 className=""><b>Fuel cell, Electrolyzer & TEST Cell</b></h6>
                <p>$52</p>
                </Link>
              </div> 
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img7.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />

                <div className="plus-icon">
                  <Link href="/projects/details">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center product-title-card">
                <Link href="/projects/details">
                <h6 className=""><b>Fuel cell, Electrolyzer & TEST Cell</b></h6>
                <p>$52</p>
                </Link>
              </div> 
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-projects-box">
                <Image
                  src="/images/projects-img8.jpg"
                  alt="image"
                  width={800}
                  height={800}
                />

                <div className="plus-icon">
                  <Link href="/projects/details">
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="text-center product-title-card">
                <Link href="/projects/details">
                <h6 className=""><b>Fuel cell, Electrolyzer & TEST Cell</b></h6>
                <p>$52</p>
                </Link>
              </div> 
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

export default ProjectsCard;
