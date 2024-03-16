"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavItems from "./NavItems";
import { UserButton } from "@clerk/nextjs";
import { ImProfile } from "react-icons/im";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <div className="text-gray-400 text-2xl text-center pt-2">
          <IoMenu />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-50 flex justify-end text-gray-300 backdrop-blur-sm transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-2/5" onClick={() => setIsOpen(false)}></div>

        <div className="w-3/5 flex flex-col gap-5 bg-black/90 p-4 modal-content">
          <div className="flex  items-center  gap-[40%] text-gray-300">
            <Link href="/profile" onClick={() => setIsOpen((prv) => !prv)}>
              <ImProfile />
            </Link>
            <div>LOGO</div>
          </div>

          <div className="border-b border-gray-500"></div>

          <div className="w-full px-2" onClick={() => setIsOpen(false)}>
            <NavItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
