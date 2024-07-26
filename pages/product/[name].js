import { useRouter } from 'next/router';
import PageBanner from '../../components/Common/PageBanner';
import TopHeader from '../../components/HomeSix/TopHeader';
import NavbarSix from '../../components/Layouts/NavbarSix';
import FooterTwo from '../../components/Layouts/FooterTwo';
import Image from 'next/image';
import data from '../../public/data.json';

const ProductDetail = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TopHeader />
      <NavbarSix />
      <PageBanner
        pageTitle={product.name}
        homePageUrl="/"
        homePageText="Home"
        activePageText={product.name}
        bgImg="/images/page-title-bg2.jpg"
      />

      <div className="container ptb-110">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <Image
              src={product.productBanner}
              alt={product.name}
              width={500}
              height={400}
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Product Code: {product.productcode}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h3>Product Images</h3>
            <div className="product-images">
              {product.productImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Product image ${index + 1}`}
                  width={300}
                  height={200}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export async function getStaticPaths() {
  const paths = data.map(product => ({
    params: { name: encodeURIComponent(product.name) },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const productName = decodeURIComponent(params.name);
  const product = data.find(p => p.name === productName);

  return {
    props: {
      product,
    },
  };
}

export default ProductDetail;
