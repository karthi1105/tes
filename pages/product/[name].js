import { useRouter } from 'next/router';
import PageBanner from '../../components/Common/PageBanner';
import TopHeader from '../../components/HomeSix/TopHeader';
import NavbarSix from '../../components/Layouts/NavbarSix';
import FooterTwo from '../../components/Layouts/FooterTwo';
import Image from 'next/image';
import data from '../../public/data.json';
import Link from 'next/link';

const ProductDetail = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleDownload = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'datasheet.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <div className="projects-details-area ptb-110">
        <div className="container">
          <div className="projects-details">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="projects-details-image">
                  <Image src={product.productBanner} alt={product.name} width={800} height={400} />
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="projects-details-info">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <ul>
                        <li>
                          <span></span><h4><b>{product.name}</b></h4>
                        </li>
                        <li>
                          <span>Product Code:</span> {product.productcode}
                        </li>
                        <li>
                          <span>Price:</span> ${product.price}
                        </li>
                        <li>
                          <span>Tags:</span> App, Design, Web, Dev
                        </li>
                        <li><br/></li>
                        <li>
                          <button onClick={() => handleDownload(product.datasheet)} className="btn btn-primary">
                            <span style={{color:"#fff"}}>Download Datasheet</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="projects-details-desc">
              <h3>{product.name}</h3>

              <p>
                {product.description}
              </p>
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
                        className='image-prod'
                      />
                    ))}
                  </div>
                </div>
              </div>
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

