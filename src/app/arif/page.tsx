import Button from "@/components/common/Button";
import SectionTittle from "@/components/common/SectionTittle";
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

      <div className="w-52 h-52  bg-gradient-radial from-gray-100/20 to-transparent">
        <div className="mix-blend-multiply bg-some-svg"></div>
      </div>
    </div>
  );
};

export default Arif;
