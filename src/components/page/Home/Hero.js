import React from "react";
import { useId } from "react";
import Container from "../../common/Container";

import { StaticImage } from "gatsby-plugin-image";
import AsteroidDistance from "../../common/AsteroidDistance";

function BackgroundIllustration(props) {
  let id = useId();

  return (
    <div {...props}>
      <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full animate-spin-slow">
        <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" strokeOpacity="0.7" />
        <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke={`url(#${id}-gradient-1)`} strokeLinecap="round" />
        <defs>
          <linearGradient id={`${id}-gradient-1`} x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d1985d" />
            <stop offset="1" stopColor="#d1985d" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full animate-spin-reverse-slower">
        <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" strokeOpacity="0.7" />
        <path d="M913 513c0 220.914-179.086 400-400 400" stroke={`url(#${id}-gradient-2)`} strokeLinecap="round" />
        <defs>
          <linearGradient id={`${id}-gradient-2`} x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d1985d" />
            <stop offset="1" stopColor="#d1985d" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function AsteroidImage() {
  return (
    <div>
      <StaticImage src="../../../images/asteroid-2024-YR4.png" alt="Asteroid 2024 YR4" className="animate-spin-very-slow" />
    </div>
  );
}

const HeroHome = () => {
  return (
    <div className="overflow-hidden py-20 pt-0 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <div className="flex flex-col">
              <div>
                <h1 className="text-4xl font-serif font-medium tracking-tight text-stone-100">Potential Earth Impact in 2032</h1>
                <p className="mt-6 text-lg text-stone-300">
                  For centuries, 2024 YR4 wandered unseen in the vast darkness of space, likely originating from the asteroid belt between Mars and Jupiter.
                </p>
                <p className="mt-6 text-lg text-stone-300">
                  On December 27, 2024, astronomers in Chile spotted its silent approach—just two days after it had passed Earth at a distance twice that of the Moon.
                </p>
                <p className="mt-6 text-lg text-stone-300">
                  But it’s coming back. On December 22, 2032, its path will bring it within 66,000 miles—close enough that its fate, and ours, remains uncertain. Will it pass us by, or will gravity
                  pull it onto a collision course? Every new observation brings us closer to the answer.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <AsteroidImage />
            <AsteroidDistance />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroHome;
