import Link from "next/link";
import React from "react";
// #020816
const Footer = () => {
  return (
    <footer className=" text-white/80 tracking-wider pt-36">
      <div className="wrapper border-b border-se mb-10"></div>

      <div className="wrapper flex flex-col  gap-8 md:flex-row justify-between antialiased">
        <div className="sm:pl-2">
          <p>Logo</p>
        </div>

        <div className="grid grid-cols-2 md:flex flex-col md:flex-row gap-3 md:gap-20 text-xs ">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-lg font-semibold mb-2 ">Students</h3>
            <ul className="flex flex-col gap-2 text-white/50 cursor-pointer">
              <Link href="/">Docs</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Change Log</Link>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-lg font-semibold mb-2">Developers</h3>
            <ul className="flex flex-col gap-2 text-white/50 cursor-pointer">
              <Link href="/">Docs</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Change Log</Link>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-lg font-semibold mb-2">Teams</h3>
            <ul className="flex flex-col gap-2 text-white/50 cursor-pointer">
              <Link href="/">Docs</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Change Log</Link>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-lg font-semibold mb-2">Integration</h3>
            <ul className="flex flex-col gap-2 text-white/50 cursor-pointer">
              <Link href="/">Web</Link>
              <Link href="/">VS Code</Link>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="flex flex-col gap-2 text-white/50 cursor-pointer ">
              <Link href="/">Docs</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Change Log</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrapper border-b border-se mt-10"></div>

      <div className="wrapper flex justify-between py-6 text-xs antialiased">
        <p>&copy; 2024 Brainplus | All Rights Reserved</p>
        <div className="flex gap-5 text-white/50 antialiased">
          <Link href="/">Terms of services</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
