import Button, { buttonVariants } from "@/components/common/Button";
import SectionTittle from "@/components/common/SectionTittle";

import React from "react";
import HeroSection from "./_components/HeroSection";
import Card from "@/components/common/Card";
import SubTitle from "@/components/common/SubTitle";
import LearnSection from "./_components/LearnSection";
import { cn } from "@/lib/utils";
import DifferentTitle from "@/components/common/DifferentTitle";

const HomePage = () => {
  return (
    <>
      <main className="h-full w-full">
        <div className="relative h-[700px] lg:h-[450px] z-30">
          <HeroSection />
        </div>
        <LearnSection />

        <section>
          <div className="text-center w-full">
            <DifferentTitle
              fristTittle="BrainPlue for"
              secoendTittle="Enterprises..."
            />
            <SubTitle title="Focus on pushing code that doesn't break your codebase. Kodezi Cloud finds issues in your code before every push" />
          </div>

          <div className="flex w-[50%] mx-auto gap-10">
            <Card
              image="https://kodezi.com/_next/static/media/automated-code-review-v1.23a162a1.svg"
              title="Automated Code Review"
              width={500}
              height={500}
              description="Elevate your code quality using Kodezi's automated code review. Reduce manual effort, streamline your review process and amplify productivity."
            />
            <Card
              image="https://kodezi.com/_next/static/media/automated-code-review-v1.23a162a1.svg"
              title="Automated Code Review"
              width={500}
              height={500}
              description="Elevate your code quality using Kodezi's automated code review. Reduce manual effort, streamline your review process and amplify productivity."
            />
          </div>
        </section>
      </main>
      {/* <Light /> */}
    </>
  );
};

export default HomePage;
