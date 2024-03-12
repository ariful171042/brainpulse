"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // env
    const templateId = "template_wfvg3ze";
    const serviceId = "service_mi02xbb";
    const publicKey = "B7ZbiG-5itYXTy4df";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Sami Khan",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(response);

        setEmail("");
        setMessage("");
        setName("");

        toast.success("Message set successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Message set failed");
      });
  };

  return (
    <section className="wrapper text-md md:text-xl text-purple-300 mt-10 ">
      {/* <Link
        href="/"
        className="gap-2 items-center text-purple-300 hidden md:block md:flex"
      >
        <IoArrowBackCircleOutline />
        <span>Back to home</span>
      </Link> */}

      <div className="flex flex-col md:flex-row gap-10 md:justify-between md:bg-gray-800/40 md:p-12 rounded-2xl md:border-[1px] border-white/20 order-2 md:order-1">
        <div className="flex flex-col gap-6 md:gap-28 order-last md:order-first">
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
        <div className=" md:bg-gray-700/60 p-5 md:w-[60%] rounded-2xl flex flex-col  items-center gap-12 ">
          <div className="flex flex-col gap-2 justify-center items-center md:pt-14">
            <h1 className="text-3xl text-center">
              Shere your experience with Us
            </h1>
            <p className="text-sm text-center">
              Tell us about your experience, so improve it even further
            </p>
          </div>
          <div className="">
            <form onSubmit={handleSubmit} className=" flex flex-col gap-10">
              <div className="flex gap-11">
                <label htmlFor="email" className="">
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-[15rem] md:w-[20rem] bg-transparent outline-none border-b border-gray-500/50"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="flex gap-11">
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[15rem] md:w-[20rem] bg-transparent outline-none border-b border-gray-500/50"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex gap-4 ">
                <label htmlFor="message" className="">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-[15rem] md:w-[20rem] bg-transparent border-b border-gray-500/50 outline-none h28"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-purple-400 rounded-full text-white/70 hover:text-gray-700 duration-200 py-1.5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
