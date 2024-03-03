import Button from "@/components/common/Button";
import SectionTittle from "@/components/common/SectionTittle";
import Card from "@/components/common/Card";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="relative min-h-screen w-full bg-slate-950 z-[]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] flex justify-center">
          <div className="pt-32 z-10">
            {/* <h1 className="text-5xl font-semibold">
              <span>Ensure Correct Verb</span> Usage with Our{" "}
              <span>Tense Checker</span> Tool
            </h1> */}
            <SectionTittle tittle="Ariful Islam Rakib" />
            <Button variant={"primary"}>Get Start</Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-0">
        <Image
          src={"/assets/img/shadow.png"}
          width={1200}
          height={500}
          alt="Image"
        />
      </div>
    </>
  );
};

export default HomePage;
