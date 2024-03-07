import React from "react";

const SubTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <div className=" border-white rounded-full p-3">
        <p className="text-xl tracking-wider font-normal text-white/90">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SubTitle;
