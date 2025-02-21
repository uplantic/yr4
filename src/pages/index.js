import * as React from "react";
import Countdown from "../components/common/Countdown.js";

import Layout from "../components/layout.js";
import HeroHome from "../components/page/Home/Hero.js";
import LatestNews from "../components/page/Home/LatestNews.js";
import SpinningGlobe from "../components/page/Home/SpinningGlobe.js";
import FaqSection from "../components/page/Home/Faq.js";

const IndexPage = () => (
  <Layout>
    <Countdown targetDate="2032-12-22T23:59" />
    <HeroHome />
    <div className="flex flex-col">
      <div className="mx-auto">
        <SpinningGlobe />
      </div>
      <div className="w-64 items-center mx-auto">
        <h1 className="text-gun-metal font-display text-6xl md:text-8xl flex items-center justify-center gap-4">0.27%</h1>
        <h3 className="text-gun-metal font-sans text-2xl mt-2 text-center">Impact Probability It Will Hit The Earth</h3>
      </div>
    </div>

    <LatestNews />
    <FaqSection />
  </Layout>
);

export default IndexPage;
