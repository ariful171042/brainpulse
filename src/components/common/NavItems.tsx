"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const headerLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Quiz",
    path: "/quiz",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const NavItems = () => {
  const navActive = usePathname();

  return (
    <div className="flex flex-col md:flex-row md:gap-10 gap-3 ">
      {headerLinks.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className={`${navActive === link.path ? "text-violet-300" : ""} `}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
