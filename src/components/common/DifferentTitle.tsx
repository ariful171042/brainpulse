import React from "react";

const DifferentTitle = ({
  fristTittle,
  secoendTittle,
  flex,
}: {
  fristTittle: string;
  secoendTittle: string;
  flex?: boolean;
}) => {
  return (
    <>
      <div
        className={`${
          flex
            ? "flex flex-col gap-5 items-center"
            : "flex gap-2.5 justify-center"
        } text-center wrapper `}
      >
        <div className="inline-block bg-gradient-to-r from-pink-500 to-vaiolet text-transparent bg-clip-text ">
          <span className="text-2xl md:text-5xl font-semibold tracking-wider py-2">
            {fristTittle}
          </span>
        </div>
        <div className="inline-block bg-gradient-to-r from-vaiolet to-white bg-clip-text text-transparent">
          <span className="text-2xl md:text-5xl font-semibold tracking-wider py-2">
            {secoendTittle}
          </span>
        </div>
      </div>
    </>
  );
};

export default DifferentTitle;
