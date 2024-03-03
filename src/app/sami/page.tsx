import Card from "@/components/common/Card";
import SectionTittle from "@/components/common/SectionTittle";
import SubTitle from "@/components/common/SubTitle";
import React from "react";

const page = () => {
  return (
    <section className="bg-pr w-full h-fit">
      <div className="pt-24 flex flex-col items-center gap-5 ">
        <SubTitle title={"WE HAVE ONE GOAL"} />

        <div className="w-full text-center font-">
          <SectionTittle tittle={"To help Learn English"} />
        </div>

        <div className="wrapper flex flex-col items-center justify-center gap-8  xl:w-[50%] md:w-[80%] mx-auto pt-10 lg:flex-row md:flex-row pb-10">
          <Card
            image={"/assets/img/temp.svg"}
            title={"Kodezi Code: Free Web IDE"}
            description={
              "Swiss-Army Knife for programmers to increase programming productivity!"
            }
            height={450}
            width={420}
          />
          <Card
            image={"/assets/img/temp.svg"}
            title={"Kodezi Code: Free Web IDE"}
            description={
              "Swiss-Army Knife for programmers to increase programming productivity!"
            }
            height={450}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
