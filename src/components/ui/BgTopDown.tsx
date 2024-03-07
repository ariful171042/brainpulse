import React, { ReactNode } from "react";

const BgTopDown = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" p-[1px] bg-gradient-to-t from-pr via-transparent to-white/80 rounded-xl">
      <div className="h-full bg-gradient-to-t from-pr via-pr to-se  rounded-xl p-5">
        {children}
      </div>
    </div>
  );
};

export default BgTopDown;
