import fs from 'fs';
import path from 'path';
import React from "react";
import NavbarSix from "../components/Layouts/NavbarSix";
import TopHeader from "../components/HomeSix/TopHeader";
import MainBanner from "../components/HomeSix/MainBanner";
import FunFacts from "../components/HomeSix/FunFacts";
import AboutAI from "../components/HomeSeven/AboutAI";
import FooterTwo from "../components/Layouts/FooterTwo";
import Projects from "../components/HomeTwo/Projects";
import PopularProjectsCard from "../components/Projects/PopularProjectsCard";
import LatestProjectsCard from "../components/Projects/LatestProjectsCard";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import PartnerSlider from "../components/Common/PartnerSlider";

export async function getStaticProps() {
  // Read the data from data.json
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  // Extract unique categories and subcategories
  const categories = [...new Set(data.map(item => item.category))];
  const subcategories = [...new Set(data.map(item => item.subcategory))];

  // Select the first category and subcategory as default (or update as needed)
  const category = categories[0];
  const subcategory = subcategories[0];

  return {
    props: {
      category,
      subcategory
    }
  };
}

export default function HomeSix({ category, subcategory }) {
  return (
    <>
      <TopHeader />

      <NavbarSix />

      <MainBanner />

      <FunFacts />

      <Projects />

      <AboutAI />

      <PopularProjectsCard category={category} subcategory={subcategory} />

      <LatestProjectsCard  category={category} subcategory={subcategory}/>

      <FeedbackSlider />

      <PartnerSlider />

      <FooterTwo />
    </>
  );
}
