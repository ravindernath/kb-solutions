import React from 'react'

import Layout from "../components/Layout";
import SliderSection from "../components/sections/SliderSection";
import SliderbottomSection from "../components/sections/SliderbottomSection";
import AwardSection from "../components/sections/AwardSection";
import HomeSection2 from "../components/sections/HomeSection2";
import BackToTopSection from "../components/sections/BackToTopSection";
import FaqSection from "../components/sections/FaqSection";
import HomeSection5 from "../components/sections/HomeSection5";
import HomeSection4 from "../components/sections/HomeSection4";
import HomeSection3 from "../components/sections/HomeSection3";
import HomeSection1 from "../components/sections/HomeSection1";
const Home = () => {
  return (
    <Layout>
      <SliderSection />
      <SliderbottomSection />
      <HomeSection1 />
      <AwardSection />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <FaqSection />
      <BackToTopSection />
    </Layout>
  );
}

export default Home
