"use client"
import Button from "@/components/common/Button";
import DifferentTitle from "@/components/common/DifferentTitle";
import SectionTittle from "@/components/common/SectionTittle";
import BgTopDown from "@/components/ui/BgTopDown";
import { AddInput } from "addinputs";
import React from "react";
const Arif = () => {
  return (
    <div className="wrapper sp bg-pr h-screen w-screen">
      <SectionTittle tittle="Ariful Islam" />
      <Button variant={"secondary"}>Get Start</Button>
      {/* <div className="w-52 h-52">
        <div className="w-96 h-96 bg-gradient-to-r r from-transparent via-white/10 to-transparent border border-se">
          <h2>Hello</h2>
        </div>
      </div> */}

      <div className="w-52 h-52  bg-gradient-radial from-gray-100/10 border border-se rounded-lg to-transparent">
        <div className="">
          <h3 className="text-2xl">30</h3>
        </div>
      </div>

      <BgTopDown>
        <SectionTittle tittle="Hello" />
      </BgTopDown>

      {<AddInput label="Name" btnName="Add" type="text" />}
    </div>
  );
};

export default Arif;
