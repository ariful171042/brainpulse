import Button from "@/components/common/Button";
import SectionTittle from "@/components/common/SectionTittle";
import BgTopDown from "@/components/ui/BgTopDown";
import Image from "next/image";
import React from "react";
import { FaElementor, FaStar } from "react-icons/fa";
import LeftSide from "./_components/LeftSide";
import RightSide from "./_components/RightSide";

const Profile = () => {
  return (
    <main className="pt-5">
      <div className="wrapper">
        <div className="flex flex-col lg:grid lg:grid-cols-6 gap-10">
          <div className="col-span-1 lg:col-span-2">
            <LeftSide />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <RightSide />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
