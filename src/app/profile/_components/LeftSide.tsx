import BgTopDown from "@/components/ui/BgTopDown";
import Image from "next/image";
import React from "react";
import { FaElementor, FaStar } from "react-icons/fa";

const LeftSide = () => {
  return (
    <BgTopDown>
      <div className="w-full flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <div className="w-[100px] h-[100px] overflow-hidden rounded-full border-[2px] border-white/80">
            <Image
              src={
                "https://images.pexels.com/photos/20433278/pexels-photo-20433278/free-photo-of-indian-blue-jay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="Profile"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-4xl tracking-wider font-semibold flex items-center gap-2.5">
              Ariful Islam{" "}
              <span className="w-[8px] h-[8px] bg-green-500 rounded-full"></span>
            </h3>
            <h5 className="text-lg text-white/60 tracking-widest">
              arif171042@gmail.com
            </h5>
            <button className="border py-1 px-3 rounded-lg text-lg">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="border py-2 px-5 rounded-lg text-xl">
          <div className="flex gap-2.5 items-center">
            <h2>Level:</h2>
            <div className="bg-blue/50 h-[5px] w-full rounded-xl">
              <div className="bg-blue/80 w-[30%] h-[5px]  rounded-xl"></div>
            </div>
          </div>
        </div>
        <hr className="border-se border-[1.5px]" />

        <div className="">
          <h4 className="text-2xl tracking-wider">Badges collected</h4>
          <div className="pt-3 flex gap-2.5 text-4xl">
            <FaStar />
            <FaStar />
          </div>
        </div>
        <hr className="border-se border-[1.5px]" />

        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center bg-se py-5 px-5 rounded-lg">
            <FaElementor size={50} />
            <div className="">
              <h3 className="text-2xl tracking-wider font-semibold">
                Present Tense
              </h3>
              <p className="text-white/70">Feb 23, 2023</p>
            </div>
            10.4
          </div>
          <div className="flex justify-between items-center bg-se py-5 px-5 rounded-lg">
            <FaElementor size={50} />
            <div className="">
              <h3 className="text-2xl tracking-wider font-semibold">
                Present Tense
              </h3>
              <p className="text-white/70">Feb 23, 2023</p>
            </div>
            10.4
          </div>
        </div>
      </div>
    </BgTopDown>
  );
};

export default LeftSide;
