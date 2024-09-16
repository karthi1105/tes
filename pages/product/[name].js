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
        pageTitle={product.productName}
        homePageUrl="/"
        homePageText="Home"
        activePageText={product.productName}
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
                          <span></span><h4><b>{product.productName}</b></h4>
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
                        {product.standardDimension ? (
                        <li>
                          <span>Standard Dimension:</span> {product.standardDimension}
                        </li>
                        ):("")}
                        {product.thicknessOptions ? (
                        <li>
                          <span>Thickness Options:</span> {product.thicknessOptions}
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
                        {/* Composition */}
                        {product.ActiveIngredient ? (
                        <li>
                          <span>Active Ingredient:</span> {product.ActiveIngredient}
                        </li>
                        ):("")}
                        {product.SolventSystem ? (
                        <li>
                          <span>Solvent System:</span> {product.SolventSystem}
                        </li>
                        ):("")}
                        {product.form ? (
                        <li>
                          <span>Form:</span> {product.form}
                        </li>
                        ):("")}
                        {product.PrimaryComponent ? (
                        <li>
                          <span>Primary Component:</span> {product.PrimaryComponent}
                        </li>
                        ):("")}
                        {product.AdditionalComponents ? (
                        <li>
                          <span>Additional Components:</span> {product.AdditionalComponents}
                        </li>
                        ):("")}
                        {product.ChemicalFormula ? (
                        <li>
                          <span>Chemical Formula:</span> {product.ChemicalFormula}
                        </li>
                        ):("")}
                        {product.MolecularWeight ? (
                        <li>
                          <span>Molecular Weight:</span> {product.MolecularWeight}
                        </li>
                        ):("")}
                        {product.Purity ? (
                        <li>
                          <span>Purity:</span> {product.Purity}
                        </li>
                        ):("")}
                        {product.Appearance ? (
                        <li>
                          <span>Appearance:</span> {product.Appearance}
                        </li>
                        ):("")}
                         {product.particularsize ? (
                        <li>
                          <span>particular Size:</span> {product.particularsize}
                        </li>
                        ):("")}
                         {product.surfacearea ? (
                        <li>
                          <span>surface Area:</span> {product.surfacearea}
                        </li>
                        ):("")}
                         {product.BulkDensity  ?(
                        <li>
                          <span>Bulk Density:</span> {product.BulkDensity}
                        </li>
                        ):("")}
                         {product. pH ? (
                        <li>
                          <span>pH:</span> {product.pH}
                        </li>
                        ):("")}
                         {product.StandardDimension ? (
                        <li>
                          <span>StandardDimension:</span> {product.StandardDimension}
                        </li>
                        ):("")}
                        {product.ThicknessOptions ? (
                        <li>
                          <span>Thickness Options:</span> {product.ThicknessOptions}
                        </li>
                        ):("")}
                         {product.Density ? (
                        <li>
                          <span>Density:</span> {product.Density}
                        </li>
                        ):("")}
                         {product.Porosity ? (
                        <li>
                          <span>Porosity:</span> {product.Porosity}
                        </li>
                        ):("")}
                        {product.Additive ? (
                        <li>
                          <span>Additive:</span> {product.Additive}
                        </li>
                        ):("")}
                        {product.CoatingComponent? (
                        <li>
                          <span>CoatingComponen:</span> {product.CoatingComponen}
                        </li>
                        ):("")}
                        {product.Base? (
                        <li>
                          <span>Base:</span> {product.Base}
                        </li>
                        ):("")}
                        {product.Coating ? (
                        <li>
                          <span>Coating :</span> {product.Coating }
                        </li>
                        ):("")}
                         
                         {product.OperatingTemperatureRange ? (
                        <li>
                          <span>Operating Temperature Range:</span> {product.OperatingTemperatureRange}
                        </li>
                        ):("")}
                         {product.MaximumOperatingPressure ? (
                        <li>
                          <span>Maximum Operating Pressure:</span> {product.MaximumOperatingPressure}
                        </li>
                        ):("")}
                        {product.Quantity ? (
                        <li>
                          <span>Quantity:</span> {product.Quantity}
                        </li>
                        ):("")}
                        {product.volume ? (
                        <li>
                          <span>Volume:</span> {product.volume}
                        </li>
                        ):("")}
                        {product.volumeOptions ? (
                        <li>
                          <span>Volume Options:</span> {product.volumeOptions}
                        </li>
                        ):("")}
                        {product.volumeOptionsperCompartment ? (
                        <li>
                          <span>Volume Options per Compartment:</span> {product.volumeOptionsperCompartment}
                        </li>
                        ):("")}
                        {product.application ? (
                        <li>
                          <span>Applications:</span> {product.application}
                        </li>
                        ):("")}
                        {product.measurementType ? (
                        <li>
                          <span>Measurement Types:</span> {product.measurementType}
                        </li>
                        ):("")}
                        {product.humidityRange ? (
                        <li>
                          <span>Humidity Range:</span> {product.humidityRange}
                        </li>
                        ):("")}
                        {product.sampleSize ? (
                          <li>
                            <span>Sample Size:</span> {product.sampleSize}
                          </li>
                          ):("")}
                        {product.conductivity ? (
                          <li>
                            <span>Conductivity:</span> {product.conductivity}
                          </li>
                          ):("")}
                          {product.powerSupply ? (
                          <li>
                            <span>Power Supply:</span> {product.powerSupply}
                          </li>
                          ):("")}
                          {product.TemperatureRange ? (
                          <li>
                            <span>Temperature Range:</span> {product.TemperatureRange}
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
              { product.physicalProperties ? (
              <div>
                <h5>Physical Properties</h5>
                <p>
                  {product.physicalProperties.map((physicalProperties, index) => (
                    <ul key={index}>
                      <li type='square'>{physicalProperties}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
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
              {product.keyfeatures && product.keyfeatures.length > 0 ? (
                <div>
                  <h5>Key Features</h5>
                  <p>
                  {product.keyfeatures
                      .filter((keyfeature) => keyfeature !== "") // Filter out empty strings
                      .map((keyfeature, index) => (
                      <ul key={index}>
                    
                        <li  type='square'>{keyfeature}</li>
                      
                  </ul>))}
                  </p>
                </div>
              ) : ("")}

              {/* { product.keyfeatures ? (
              <div>
                <h5>Key Features</h5>
                <p>
                  {product.keyfeatures.map((keyfeatures, index) => (
                    <ul key={index}>
                      <li type='square'>{keyfeatures}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")} */}
               { product.ecoFriendlyMaterial ? (
              <div>
                <h6>Eco-Friendly Material :</h6>
                <p>
                  {product.ecoFriendlyMaterial.map((ecoFriendlyMaterial, index) => (
                    <ul key={index}>
                      <li type='square'>{ecoFriendlyMaterial}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
               { product.highEfficiency ? (
              <div>
                <h6>High Efficiency :</h6>
                <p>
                  {product.highEfficiency.map((highEfficiency, index) => (
                    <ul key={index}>
                      <li type='square'>{highEfficiency}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
               { product.chemicalCompatibility ? (
              <div>
                <h6>Chemical Compatibility :</h6>
                <p>
                  {product.chemicalCompatibility.map((chemicalCompatibility, index) => (
                    <ul key={index}>
                      <li type='square'>{chemicalCompatibility}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.materialComposition ? (
              <div>
                <h6>Material Composition :</h6>
                <p>
                  {product.materialComposition.map((materialComposition, index) => (
                    <ul key={index}>
                      <li type='square'>{materialComposition}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.durabilityAndResistance ? (
              <div>
                <h6>Durability And Resistance :</h6>
                <p>
                  {product.durabilityAndResistance.map((durabilityAndResistance, index) => (
                    <ul key={index}>
                      <li type='square'>{durabilityAndResistance}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.efficientSeparation ? (
              <div>
                <h6>Efficient Separation :</h6>
                <p>
                  {product.efficientSeparation.map((efficientSeparation, index) => (
                    <ul key={index}>
                      <li type='square'>{efficientSeparation}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.versatileApplications ? (
              <div>
                <h6>Versatile Applications :</h6>
                <p>
                  {product.versatileApplications.map((versatileApplications, index) => (
                    <ul key={index}>
                      <li type='square'>{versatileApplications}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.easyMaintenance ? (
              <div>
                <h6>Easy Maintenance :</h6>
                <p>
                  {product.easyMaintenance.map((easyMaintenance, index) => (
                    <ul key={index}>
                      <li type='square'>{easyMaintenance}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              {product.componentsAndSpecification && product.componentsAndSpecification.length > 0 ? (
                <div>
                  <h5>Components And Specification</h5>
                  <p>
                  {product.componentsAndSpecification
                      .filter((componentsAndSpecification) => componentsAndSpecification !== "") // Filter out empty strings
                      .map((componentsAndSpecification, index) => (
                      <ul key={index}>
                    
                        <li  type='square'>{componentsAndSpecification}</li>
                      
                  </ul>))}
                  </p>
                </div>
              ) : ("")}
              { product.positiveCap ? (
              <div>
                <h6>Positive Cap :</h6>
                <p>
                  {product.positiveCap.map((positiveCap, index) => (
                    <ul key={index}>
                      <li type='square'>{positiveCap}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.negativeCap ? (
              <div>
                <h6>Negative Cap :</h6>
                <p>
                  {product.negativeCap.map((negativeCap, index) => (
                    <ul key={index}>
                      <li type='square'>{negativeCap}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.insulatorRing ? (
              <div>
                <h6>Insulator Ring :</h6>
                <p>
                  {product.insulatorRing.map((insulatorRing, index) => (
                    <ul key={index}>
                      <li type='square'>{insulatorRing}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.spacer ? (
              <div>
                <h6>Spacer :</h6>
                <p>
                  {product.spacer.map((spacer, index) => (
                    <ul key={index}>
                      <li type='square'>{spacer}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.safetyVent ? (
              <div>
                <h6>Safety Vent :</h6>
                <p>
                  {product.safetyVent.map((safetyVent, index) => (
                    <ul key={index}>
                      <li type='square'>{safetyVent}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.cases ? (
              <div>
                <h6>Case :</h6>
                <p>
                  {product.cases.map((cases, index) => (
                    <ul key={index}>
                      <li type='square'>{cases}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.temperatureControl ? (
              <div>
                <h6>Temperature Control :</h6>
                <p>
                  {product.temperatureControl.map((temperatureControl, index) => (
                    <ul key={index}>
                      <li type='square'>{temperatureControl}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.humidityControl ? (
              <div>
                <h6>Humidity Control :</h6>
                <p>
                  {product.humidityControl.map((humidityControl, index) => (
                    <ul key={index}>
                      <li type='square'>{humidityControl}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.SampleCompatibilitys ? (
              <div>
                <h6>Sample Compatibilitys :</h6>
                <p>
                  {product.SampleCompatibilitys.map((SampleCompatibilitys, index) => (
                    <ul key={index}>
                      <li type='square'>{SampleCompatibilitys}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.measurementAccuracy ? (
              <div>
                <h6>Measurement Accuracy :</h6>
                <p>
                  {product.measurementAccuracy.map((measurementAccuracy, index) => (
                    <ul key={index}>
                      <li type='square'>{measurementAccuracy}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.dataIntegration ? (
              <div>
                <h6>Data Integration :</h6>
                <p>
                  {product.dataIntegration.map((dataIntegration, index) => (
                    <ul key={index}>
                      <li type='square'>{dataIntegration}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.constructionandDesign ? (
              <div>
                <h6>Construction And Design :</h6>
                <p>
                  {product.constructionandDesign.map((constructionandDesign, index) => (
                    <ul key={index}>
                      <li type='square'>{constructionandDesign}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
             
             {product.specification && product.specification.length > 0 ? (
                <div>
                  <h5>Specification</h5>
                  <p>
                  {product.specification
                      .filter((specification) => specification !== "") // Filter out empty strings
                      .map((specification, index) => (
                      <ul key={index}>
                    
                        <li  type='square'>{specification}</li>
                      
                  </ul>))}
                  </p>
                </div>
              ) : ("")}
               { product.materials ? (
              <div>
                <h6>Material :</h6>
                <p>
                  {product.materials.map((materials, index) => (
                    <ul key={index}>
                      <li type='square'>{materials}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.measurementTypes ? (
              <div>
                <h6>Measurement Types :</h6>
                <p>
                  {product.measurementTypes.map((measurementTypes, index) => (
                    <ul key={index}>
                      <li type='square'>{measurementTypes}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
               { product.components ? (
              <div>
                <h6>Components :</h6>
                <p>
                  {product.components.map((components, index) => (
                    <ul key={index}>
                      <li type='square'>{components}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
              { product.dimension ? (
              <div>
                <h6>Dimensions :</h6>
                <p>
                  {product.dimension.map((dimension, index) => (
                    <ul key={index}>
                      <li type='square'>{dimension}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}
               { product.operatingConditions ? (
              <div>
                <h6>Operating Conditions :</h6>
                <p>
                  {product.operatingConditions.map((operatingConditions, index) => (
                    <ul key={index}>
                      <li type='square'>{operatingConditions}</li>
                    </ul>
                  ))}
                </p>
              </div>
              ) : ("")}

              { product.physicalPropertiess ? (
                <div>
                  <h6>Physical Properties</h6>
                  <p>
                    {product.physicalPropertiess.map((physicalPropertiess, index) => (
                      <ul key={index}>
                        <li type='square'>{physicalPropertiess}</li>
                      </ul>
                    ))}
                  </p>
                </div>
                ) : ("")}
                { product.chemicalProperties ? (
                <div>
                  <h6>Chemical Properties</h6>
                  <p>
                    {product.chemicalProperties.map((chemicalProperties, index) => (
                      <ul key={index}>
                        <li type='square'>{chemicalProperties}</li>
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
              { product.benefits ? (
              <div>
                <h5>Benefits</h5>
                <p>
                  {product.benefits.map((benefits, index) => (
                    <ul key={index}>
                      <li type='square'>{benefits}</li>
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
