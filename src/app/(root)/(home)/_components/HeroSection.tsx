import Button from "@/components/common/Button";
import SectionTittle from "@/components/common/SectionTittle";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className=" pt-32 h-[50%]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] flex justify-center">
          <div className="pt-32 z-10">
            <div className=" w-full flex flex-col justify-center text-center gap-5">
              <SectionTittle tittle="Ensure Correct Verb" />
              <SectionTittle tittle="Usage with Our Tense Checker" />
              <div className="pt-3">
                <Button variant={"primary"}>
                  <Link href="/quiz">Get Start</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
