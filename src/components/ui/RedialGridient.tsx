import React, { ReactNode } from "react";

const RedialGridient = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gradient-radial from-gray-100/10 border border-se rounded-lg to-transparent">
      <div className="p-5">{children}</div>
    </div>
  );
};

export default RedialGridient;
