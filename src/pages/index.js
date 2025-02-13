import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Countdown from "../components/common/Countdown.js";

import Layout from "../components/layout.js";
import HeroHome from "../components/page/Home/Hero.js";
import LatestNews from "../components/page/Home/LatestNews.js";
import ThreeScene from "../components/page/Home/ThreeScene.js";
import SpinningGlobe from "../components/page/Home/SpinningGlobe.js";
import SpinningAsteroid from "../components/page/Home/SpinningAsteroid.js";

const IndexPage = () => (
  <Layout>
    <Countdown targetDate="2032-12-22T23:59" />
    <HeroHome />
    <div className="flex flex-col">
      <div className="mx-auto">
        <SpinningGlobe />
      </div>
      <div className="w-64 items-center mx-auto">
        <h1 className="text-gun-metal font-display text-2xl md:text-8xl flex items-center justify-center gap-4">1.2%</h1>
        <h3 className="text-gun-metal font-sans text-2xl mt-2 text-center">Impact Probability It Will Hit The Earth</h3>
      </div>
    </div>

    <LatestNews />
  </Layout>
);

export default IndexPage;
