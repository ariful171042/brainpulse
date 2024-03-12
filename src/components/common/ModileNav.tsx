"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavItems from "./NavItems";
import { UserButton } from "@clerk/nextjs";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen((prv) => !prv)}>
        <div className="text-gray-400 text-2xl text-center pt-2">
          <IoMenu />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end text-gray-300 backdrop-blur-sm">
          <div
            className="w-2/5 bg-gray-800/75"
            onClick={() => setIsOpen((prv) => !prv)}
          ></div>

          <div className="w-3/5 flex flex-col gap-5 bg-black/90 p-4 modal-content">
            <div className="flex justify-between items-center">
              <UserButton afterSignOutUrl="/" />
              <div>LOGO</div>
            </div>

            <div className="border-b border-gray-500"></div>

            <div className="w-full " onClick={() => setIsOpen((prv) => !prv)}>
              <NavItems />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
