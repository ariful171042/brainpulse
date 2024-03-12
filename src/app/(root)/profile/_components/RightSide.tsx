import RankTable from "@/components/common/Table";
import RedialGridient from "@/components/ui/RedialGridient";
import React from "react";

const RightSide = () => {
  return (
    <section>
      <div className="flex gap-5 w-full justify-between">
        <RedialGridient>
          <div className="flex flex-col justify-center items-center text-white/80 ">
            <h3 className="text-5xl font-bold tracking-widest">10</h3>
            <p> Lorem ipsum dolor sit amet.</p>
          </div>
        </RedialGridient>
        <RedialGridient>
          <div className="flex flex-col justify-center items-center text-white/80">
            <h3 className="text-5xl font-bold tracking-widest">10</h3>
            <p> Lorem ipsum dolor sit amet.</p>
          </div>
        </RedialGridient>
        <RedialGridient>
          <div className="flex flex-col justify-center items-center text-white/80">
            <h3 className="text-5xl font-bold tracking-widest">10</h3>
            <p> Lorem ipsum dolor sit amet.</p>
          </div>
        </RedialGridient>
        <RedialGridient>
          <div className="flex flex-col justify-center items-center text-white/80">
            <h3 className="text-5xl font-bold tracking-widest">10</h3>
            <p> Lorem ipsum dolor sit amet.</p>
          </div>
        </RedialGridient>
      </div>
      <div className="pt-5">
      <RankTable />
      </div>
    </section>
  );
};

export default RightSide;
