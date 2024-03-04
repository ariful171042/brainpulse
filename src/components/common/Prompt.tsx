import Image from "next/image";
import React from "react";
import Button from "./Button";
import GradientTitle from "./GradientTitle";
import DifferentTitle from "./DifferentTitle";

const Prompt = () => {
  return (
    <div className="relative flex justify-center items-center mb-32">
      <div className="w-[80%]">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div>
                <GradientTitle title="Get Ready To Gain Knowledge" />
              </div>
              <div>
                <Button variant={"primary"}>SignUp</Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center relative">
              <Image
                src="/assets/img/section-bg.svg"
                alt="Prompt"
                height={400}
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
