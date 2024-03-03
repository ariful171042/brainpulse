import Button, { buttonVariants } from "@/components/common/Button";
import SectionTittle from "@/components/common/SectionTittle";

import React from "react";
import HeroSection from "./_components/HeroSection";
import Card from "@/components/common/Card";
import SubTitle from "@/components/common/SubTitle";
import LearnSection from "./_components/LearnSection";
import { cn } from "@/lib/utils";

const HomePage = () => {
  return (
    <>
      <main className="h-full w-full">
        <div className="relative h-[700px] lg:h-[450px] z-30">
          <HeroSection />
        </div>
        <LearnSection />

        <div className={cn(buttonVariants(), "")}>hello</div>
      </main>
      {/* <Light /> */}
    </>
  );
};

export default HomePage;
