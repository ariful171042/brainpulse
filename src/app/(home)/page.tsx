import Button from "@/components/common/Button";
import SectionTittle from "@/components/common/SectionTittle";

import React from "react";
import HeroSection from "./_components/HeroSection";

const HomePage = () => {
  return (
    <>
      <main className="h-full w-full">
        <div className="relative h-[700px] lg:h-[500px] z-30">
          <HeroSection />
        </div>

        <section>
          <SectionTittle tittle="Hello Ariful Islam" />
        </section>
      </main>
      {/* <Light /> */}
    </>
  );
};

export default HomePage;
