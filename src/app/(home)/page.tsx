import DifferentTitle from "@/components/common/DifferentTitle";
import Prompt from "@/components/common/Prompt";
import SubTitle from "@/components/common/SubTitle";
import RankTable from "@/components/common/Table";
import BgTopDown from "@/components/ui/BgTopDown";
import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import LearnSection from "./_components/LearnSection";

const HomePage = () => {
  return (
    <>
      <main className="h-full w-full flex flex-col gap-32">
        <div className="relative h-[700px] lg:h-[450px] z-30">
          <HeroSection />
        </div>
        <LearnSection />

        <section>
          <div className="flex flex-col gap-8">
            <div className="text-center w-full">
              <DifferentTitle
                fristTittle="BrainPlue for"
                secoendTittle="Enterprises..."
              />
              <SubTitle title="Focus on pushing code that doesn't break your codebase. Kodezi Cloud finds issues in your code before every push" />
            </div>

            <div className="flex w-[80%] lg:w-[60%] flex-col lg:flex-row mx-auto gap-10">
              <BgTopDown>
                <Image
                  src={
                    "https://kodezi.com/_next/static/media/automated-code-review-v1.23a162a1.svg"
                  }
                  height={500}
                  width={500}
                  alt={"Automated Code Review"}
                />
                <div className=" text-white/70 text-left flex flex-col gap-3">
                  <h3 className="text-2xl text-white md:text-xl">
                    {"Automated Code Review"}
                  </h3>
                  <p className="text-lg md:text-sm">
                    {
                      "Elevate your code quality using Kodezis automated code review. Reduce manual effort, streamline your review process and amplify productivity."
                    }
                  </p>
                </div>
              </BgTopDown>
              <BgTopDown>
                <Image
                  src={
                    "https://kodezi.com/_next/static/media/automated-code-review-v1.23a162a1.svg"
                  }
                  height={500}
                  width={500}
                  alt={"Automated Code Review"}
                />
                <div className=" text-white/70 text-left flex flex-col gap-3">
                  <h3 className="text-2xl text-white md:text-xl">
                    {"Automated Code Review"}
                  </h3>
                  <p className="text-lg md:text-sm">
                    {
                      "Elevate your code quality using Kodezis automated code review. Reduce manual effort, streamline your review process and amplify productivity."
                    }
                  </p>
                </div>
              </BgTopDown>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-8">
            <DifferentTitle fristTittle="Top User" secoendTittle="Rank" />
            <RankTable />
          </div>
        </section>

        <section>
          <div>
            <Prompt />
          </div>
        </section>
      </main>
      {/* <Light /> */}
    </>
  );
};

export default HomePage;
