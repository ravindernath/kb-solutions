import React from 'react'

import Layout from "../components/Layout";
import SliderSection from "../components/sections/SliderSection";
import SliderbottomSection from "../components/sections/SliderbottomSection";
import AwardSection from "../components/sections/AwardSection";
import Body1Section from "../components/sections/Body1Section";
import BackToTopSection from "../components/sections/BackToTopSection";
import FaqSection from "../components/sections/FaqSection";
import StepSection from "../components/sections/StepSection";
import SecuritySection from "../components/sections/SecuritySection";
import TradingToolsSection from "../components/sections/TradingToolsSection";
import BuyAndTradeSection from "../components/sections/BuyAndTradeSection";
const Home = () => {
    return (
        <Layout>
          <SliderSection />
          <SliderbottomSection />
          <BuyAndTradeSection />
          <AwardSection />
          <Body1Section />
          <TradingToolsSection />
          <SecuritySection />
          <StepSection />
          <FaqSection />
          <BackToTopSection />
        </Layout>
      );
}

export default Home
