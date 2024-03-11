import Link from "next/link";
import React from "react";
import Button, { buttonVariants } from "./common/Button";
import { cn } from "@/lib/utils";
import NavItems from "./common/NavItems";
import ModileNav from "./common/ModileNav";

const Header = () => {
  return (
    <header className=" bg-transparent z-50 border-b border-se">
      <div className="wrapper py-5 text-white flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl">Logo</p>
        </Link>
        <div className="md:flex hidden text-lg">
          <NavItems />
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="md:hidden">
            <ModileNav />
          </div>
          {/* <div>
            <button className={cn(buttonVariants())}>Login</button>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
