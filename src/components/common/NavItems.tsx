"use client";

import Link from "next/link";
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
  return (
    <div className="flex flex-col md:flex-row md:gap-10 gap-3 ">
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/quiz" className="nav-link">
        Quiz
      </Link>
      <Link href="/contact" className="nav-link">
        Contact
      </Link>
      <Link href="/profile" className="nav-link">
        Profile
      </Link>
    </div>
  );
};

export default NavItems;
