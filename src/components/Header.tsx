import Link from "next/link";
import React from "react";
import Button, { buttonVariants } from "./common/Button";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className=" bg-transparent z-50 border-b border-se">
      <div className="wrapper py-5 text-white flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl">Logo</p>
        </Link>
        <div className="flex lg:gap-20 md:gap-10 gap-5 font-medium tracking-widest lg:text-lg">
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
        <div>
          <button className={cn(buttonVariants())}>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
