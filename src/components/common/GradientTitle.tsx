import React from "react";

type gradientTitleProps = {
  title: string;
};

const GradientTitle = ({ title }: gradientTitleProps) => {
  const titleArr = title.split(" ");

  const target = titleArr.splice(0, 1);
  const rest = titleArr.join(" ");

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-200 text-center">
        <span className="text-transparent bg-gradient-to-r from-red-500 via-pink-600 to-vaiolet bg-clip-text">
          {target}
        </span>
        {` ${rest}`}
      </h2>
    </div>
  );
};

export default GradientTitle;
