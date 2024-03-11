"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import NavItems from "./NavItems";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen((prv) => !prv)}>
        <CiMenuFries />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-800/75  flex justify-end text-gray-300 backdrop-blur-sm"
          onClick={() => setIsOpen((prv) => !prv)}
        >
          <div className="w-3/5 flex flex-col gap-5 bg-black/80 p-4 modal-content">
            <div>LOGO</div>
            <div className="border-b border-gray-500"></div>
            <div className="w-14">
              <NavItems />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
