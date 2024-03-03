import Image from "next/image";
import React from "react";

type cardProp = {
  image?: string | undefined;
  title: string;
  description: string;
  height: number;
  width: number;
};

const Card = ({ image, title, description, height, width }: cardProp) => {
  return (
    <div className=" bg-black p-[2px] rounded-3xl bg-gradient-to-b from-pink-400 via-purple-500 to-vaiolet">
      <div className="flex flex-col gap-20 p-10 rounded-[calc(1.5rem-1px)] items-center bg-gradient-to-r from-slate-800 to-slate-700">
        <Image
          src={image || "/assets/img/temp.svg"}
          height={height}
          width={width}
          alt="cardImage"
        />
        <div className=" text-white/70 text-left flex flex-col gap-3">
          <h3 className="text-2xl text-white md:text-xl">{title}</h3>
          <p className="text-lg md:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
