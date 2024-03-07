import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white/80 tracking-wider py-8">
      <div className="wrapper flex  gap-8 md:flex-row  justify-between">
        <div className="sm:pl-2">
          <p>Logo</p>
        </div>

        <div className=" flex gap-20 text-xs">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-lg font-semibold mb-2">Students</h3>
            <ul className="flex flex-col gap-2 text-white/50">
              <li>Docs</li>
              <li>Blog</li>
              <li>Change Log</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-lg font-semibold mb-2">Developers</h3>
            <ul className="flex flex-col gap-2 text-white/50">
              <li>Docs</li>
              <li>Blog</li>
              <li>Change Log</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-lg font-semibold mb-2">Teams</h3>
            <ul className="flex flex-col gap-2 text-white/50">
              <li>Docs</li>
              <li>Blog</li>
              <li>Change Log</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-lg font-semibold mb-2">Integration</h3>
            <ul className="flex flex-col gap-2 text-white/50">
              <li>Web</li>
              <li>VS Code</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="flex flex-col gap-2 text-white/50">
              <li>Docs</li>
              <li>Blog</li>
              <li>Change Log</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
