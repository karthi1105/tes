import React from "react";
import Link from "next/link";
import Image from "next/image";

const HealthAndManufacturing = () => {
  return (
    <>
      <div
        className="tabs-item"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div className="image">
          <Image
            src="/images/services-img1.png"
            alt="image"
            width={569}
            height={456}
          />
        </div>

        <div className="content">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable. If you are going to use a passage.
          </p>

          <Link href="/services/details" className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default HealthAndManufacturing;
