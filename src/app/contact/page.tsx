import Link from "next/link";
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="wrapper text-md md:text-xl text-purple-300 mt-4 ">
      <div className="flex flex-col gap-6 md:gap-28 md:bg-gray-800/40 md:p-12 rounded-xl md:border-[1px] border-white/20">
        <Link href="/" className="flex gap-2 items-center text-purple-300">
          <IoArrowBackCircleOutline />
          <span>Back to home</span>
        </Link>

        <div className="flex flex-col gap-8">
          <div className="flex gap-5 md:items-start ">
            <div className="p-2 border border-purple-300 rounded-lg w-9 h-9">
              <IoChatbubblesOutline />
            </div>
            <div className="flex flex-col gap-4 pt-1">
              <h3 className="font-semibold text-lg md:text-xl">Chat to us</h3>
              <p>Our friendly team is here to help.</p>
              <p className=" font-semibold">hi@furniture.com</p>
            </div>
          </div>

          <div className="flex gap-7 md:items-start">
            <div className="p-2 border border-purple-300 rounded-lg w-9 h-9">
              <IoLocationOutline />
            </div>
            <div className="flex flex-col gap-4 pt-1">
              <h3 className="font-semibold text-lg md:text-xl">Office</h3>
              <p>Come say hello at our office HQ</p>
              <p className=" font-semibold">Tangail Dhaka Bangladesh</p>
            </div>
          </div>

          <div className="flex gap-7 md:items-start">
            <div className="p-2 border border-purple-300 rounded-lg w-9 h-9">
              <FiPhoneCall />
            </div>
            <div className="flex flex-col gap-4 pt-1">
              <h3 className="font-semibold text-lg md:text-xl">Phone</h3>
              <p>Mon-fri from 8am to 5pm</p>
              <p className=" font-semibold">+880 1111111111</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8 md:mt-0">
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaLinkedin />
          </span>
          <span>
            <FaYoutube />
          </span>
          <span>
            <FaInstagramSquare />
          </span>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Contact;
