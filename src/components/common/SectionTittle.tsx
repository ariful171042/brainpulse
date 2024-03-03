import React from "react";

interface SectionTittleProps {
  tittle: string;
}

const SectionTittle: React.FC<SectionTittleProps> = ({ tittle }) => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-vaiolet text-transparent bg-clip-text ">
      <h3 className="text-5xl font-semibold tracking-wider py-2">{tittle}</h3>
    </div>
  );
};

export default SectionTittle;
