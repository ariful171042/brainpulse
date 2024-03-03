import Card from "@/components/common/Card";
import React from "react";

const page = () => {
  return (
    <div className="bg-pr h-screen">
      <Card
        image={"/assets/img/temp.svg"}
        title={"Kodezi Code: Free Web IDE"}
        description={
          "Swiss-Army Knife for programmers to increase programming productivity!"
        }
      />
    </div>
  );
};

export default page;
