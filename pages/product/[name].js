import { useRouter } from 'next/router';
import PageBanner from '../../components/Common/PageBanner';
import TopHeader from '../../components/HomeSix/TopHeader';
import NavbarSix from '../../components/Layouts/NavbarSix';
import FooterTwo from '../../components/Layouts/FooterTwo';
import Image from 'next/image';
import data from '../../public/data.json';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

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

  const renderTable = (tableData) => {
    return (
      <table className="table">
        <thead>
          <tr>
            {tableData.header.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
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
                <div className="projects-details-image p-3">
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
                    {product.productImages.map((image, index)  => (
                      <SwiperSlide key={index}>
                        <div className="single-projects-box">
                          <Image
                            src={image}
                            alt={'Product image ${index + 1}'}
                            width={800}
                            height={800}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* <Image src={product.productBanner} alt={product.name} width={800} height={400} /> */}
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
                        {product.ElectrodeDiameterOptions ? (
                        <li>
                          <span>Electrode Diameter Options:</span> {product.ElectrodeDiameterOptions}
                        </li>
                        ):("")}
                        {product.Material ? (
                        <li>
                          <span>Material:</span> {product.Material}
                        </li>
                        ):("")}
                         {product.CellType ? (
                        <li>
                          <span>Cell Type:</span> {product.CellType}
                        </li>
                        ):("")}
                         {product.SealType ? (
                        <li>
                          <span>Seal Type:</span> {product.SealType}
                        </li>
                        ):("")}
                        {product.PolishingPadGrades ? (
                        <li>
                          <span>Polishing Pad Grades:</span> {product.PolishingPadGrades}
                        </li>
                        ):("")}
                        {product.PolishingCompounds ? (
                        <li>
                          <span>Polishing Compounds:</span> {product.PolishingCompounds}
                        </li>
                        ):("")}
                        {product.ClothMaterial ? (
                        <li>
                          <span>Cloth Material:</span> {product.ClothMaterial}
                        </li>
                        ):("")}
                        {product.HolderMaterial ? (
                        <li>
                          <span>Holder Material:</span> {product.HolderMaterial}
                        </li>
                        ):("")}
                        {product.CaseDimensions ? (
                        <li>
                          <span>Case Dimensions:</span> {product.CaseDimensions}
                        </li>
                        ):("")}
                        {product.ElectrodeType ? (
                        <li>
                          <span>Electrode Type:</span> {product.ElectrodeType}
                        </li>
                        ):("")}
                        {product.Length ? (
                        <li>
                          <span>Length:</span> {product.Length}
                        </li>
                        ):("")}
                        {product.ReferencePotential ? (
                        <li>
                          <span>Reference Potential:</span> {product.ReferencePotential}
                        </li>
                        ):("")}
                        {product.Electrolyte ? (
                        <li>
                          <span>Electrolyte:</span> {product.Electrolyte}
                        </li>
                        ):("")}
                        {product.BodyMaterial ? (
                        <li>
                          <span>Body Material:</span> {product.BodyMaterial}
                        </li>
                        ):("")}
                        {product.JunctionType ? (
                        <li>
                          <span>Junction Type:</span> {product.JunctionType}
                        </li>
                        ):("")}
                        {product.CapillaryDiameter ? (
                        <li>
                          <span>Capillary Diameter:</span> {product.CapillaryDiameter}
                        </li>
                        ):("")}
                        {product.OuterDiameter ? (
                        <li>
                          <span>Outer Diameter:</span> {product.OuterDiameter}
                        </li>
                        ):("")}
                        {product.RodLength ? (
                        <li>
                          <span>Rod Length:</span> {product.RodLength}
                        </li>
                        ):("")}
                        {product.Diameter ? (
                        <li>
                          <span>Diameter:</span> {product.Diameter}
                        </li>
                        ):("")}
                        {product.SpiralLength ? (
                        <li>
                          <span>Spiral Length:</span> {product.SpiralLength}
                        </li>
                        ):("")}
                        {product.SpiralDiameter ? (
                        <li>
                          <span>Spiral Diameter:</span> {product.SpiralDiameter}
                        </li>
                        ):("")}
                        {product.MeshType ? (
                        <li>
                          <span>Mesh Type:</span> {product.MeshType}
                        </li>
                        ):("")}
                        {product.HolderMaterial ? (
                        <li>
                          <span>Holder Material:</span> {product.HolderMaterial}
                        </li>
                        ):("")}
                        {product.InnerDiameter ? (
                        <li>
                          <span>Inner Diameter:</span> {product.InnerDiameter}
                        </li>
                        ):("")}
                        
                        {product.ElectrodeDiameter ? (
                        <li>
                          <span>Electrode Diameter:</span> {product.ElectrodeDiameter}
                        </li>
                        ):("")}
                        {product.ElectrodeDimension ? (
                        <li>
                          <span>Electrode Dimension:</span> {product.ElectrodeDimension}
                        </li>
                        ):("")}
                         {product.ElectrodeArea ? (
                        <li>
                          <span>Electrode Area:</span> {product.ElectrodeArea}
                        </li>
                        ):("")}
                        {product.ElectrodeLength ? (
                        <li>
                          <span>Electrode Length:</span> {product.ElectrodeLength}
                        </li>
                        ):("")}
                        {product.LShapeDimensions ? (
                        <li>
                          <span>L-ShapeD imensions:</span> {product.LShapeDimensions}
                        </li>
                        ):("")}
                        {product.Components ? (
                        <li>
                          <span>Components:</span> {product.Components}
                        </li>
                        ):("")}
                        {product.Packaging ? (
                        <li>
                          <span>Packaging:</span> {product.Packaging}
                        </li>
                        ):("")}
                        {product.ElectrodeCompatibility ? (
                        <li>
                          <span>Electrode Compatibility:</span> {product.ElectrodeCompatibility}
                        </li>
                        ):("")}
                        {product.SampleCompatibility ? (
                        <li>
                          <span>Sample Compatibility:</span> {product.SampleCompatibility}
                        </li>
                        ):("")}
                        {product.HolderDimensions ? (
                        <li>
                          <span>Holder Dimensions:</span> {product.HolderDimensions}
                        </li>
                        ):("")}
                        {product.Dimension ? (
                        <li>
                          <span>Dimensions:</span> {product.Dimension}
                        </li>
                        ):("")}
                        {product.Thickness ? (
                        <li>
                          <span>Thickness:</span> {product.Thickness}
                        </li>
                        ):("")}
                        {product.PlateThickness ? (
                        <li>
                          <span>Plate Thickness:</span> {product.PlateThickness}
                        </li>
                        ):("")}
                        {product.Finish? (
                        <li>
                          <span>Finish:</span> {product.Finish}
                        </li>
                        ):("")}
                        {product.ConnectorType ? (
                        <li>
                          <span>Connector Type:</span> {product.ConnectorType}
                        </li>
                        ):("")}
                        {product.SurfaceFinish? (
                        <li>
                          <span>Surface Finish:</span> {product.SurfaceFinish}
                        </li>
                        ):("")}
                        {product.Weight ? (
                        <li>
                          <span>Weight:</span> {product.Weight}
                        </li>
                        ):("")}
                        {product.PackSize ? (
                        <li>
                          <span>Pack Size:</span> {product.PackSize}
                        </li>
                        ):("")}
                        {product.ElectrodeConductivity ? (
                        <li>
                          <span>Electrode Conductivity:</span> {product.ElectrodeConductivity}
                        </li>
                        ):("")}
                        {/* <li>
                          <span>Price:</span> ${product.price}
                        </li>
                        <li>
                          <span>Tags:</span> App, Design, Web, Dev
                        </li> */}
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
              {/* <h3>{product.name}</h3> */}
              <h5>Introduction</h5>
              <p>
                {product.introduction}
              </p>
              { product.features ? (
              <div>
                <h5>Features</h5>
                <p>
                  {product.features.map((features, index) => (
                    <ul key={index}>
                      <li type='square'>{features}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.KitContents ? (
              <div>
                <h5>Kit Contents</h5>
                <p>
                  {product.KitContents.map((KitContents, index) => (
                    <ul key={index}>
                      <li type='square'>{KitContents}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.applications ? (
              <div>
                <h5>Applications</h5>
                <p>
                  {product.applications.map((application, index) => (
                    <ul key={index}>
                      <li type='square'>{application}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              {/* <div className="row mt-5">
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
              </div> */}
              <div className="row mt-5">
                <h5>Order Information</h5>
                {product.tableData && product.tableData.map((table, index) => (
                  <div key={index}>
                    {renderTable(table)}
                  </div>
                ))}
                <h5>Customization</h5>
                <p>{product.Customization}</p>
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
