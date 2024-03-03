import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" bg-pr2">
      <div className="wrapper py-5 text-white flex justify-between">
        <Link href="/">
          <p className="text-white text-2xl">Logo</p>
        </Link>
        <div className="flex lg:gap-20 md:gap-10 gap-5 font-medium tracking-widest lg:text-lg">
          <Link href="/test" className="nav-link">
            Test
          </Link>
          <Link href="/profile" className="nav-link">
            Porfile
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        <div>login</div>
      </div>
    </header>
  );
};

export default Header;
