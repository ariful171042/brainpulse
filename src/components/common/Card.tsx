import Image from "next/image";
import React from "react";

type cardProp = {
  image?: string | undefined;
  title: string;
  description: string;
};

const Card = ({ image, title, description }: cardProp) => {
  return (
    <div className="p-10 bg-white w-[34rem] h-[34rem] rounded-2xl flex ">
      <div className="flex flex-col gap-20 items-center">
        <Image
          src={image || "/assets/img/temp.svg"}
          height={400}
          width={400}
          alt="cardImage"
        />
        <div className=" text-black text-left flex flex-col gap-3">
          <h3 className="text-2xl">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
