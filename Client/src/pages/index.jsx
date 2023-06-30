import React from "react";
import Layout from "../components/Layout";
import SliderSection from "../components/sections/SliderSection";
import SliderbottomSection from "../components/sections/SliderbottomSection";
import AwardSection from "../components/sections/AwardSection";
import Body1Section from "../components/sections/Body1Section";
import BackToTopSection from "../components/sections/BackToTopSection";
import FaqSection from "../components/sections/FaqSection";
import StepSection from "../components/sections/StepSection";

const index = () => {
  return (
    <Layout>
      <SliderSection />
      <SliderbottomSection />
      <AwardSection />
      <Body1Section />
      <StepSection />
      <FaqSection />
      <BackToTopSection />
    </Layout>
  );
};

export default index;
