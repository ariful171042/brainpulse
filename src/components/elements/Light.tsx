import Image from "next/image";
import React from "react";

const Light = () => {
  return (
    <div className="absolute top-0 left-0 z-0">
      <Image
        src={"/assets/img/shadow.png"}
        width={1200}
        height={500}
        alt="Image"
      />
    </div>
  );
};

export default Light;
