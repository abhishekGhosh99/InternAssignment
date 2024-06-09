import React from "react";
import { logo } from "../assets";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "../components";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper py-16 lg:py-32 px-[20px] lg:px-[120px] overflow-hidden lg:overflow-visible bg-slate-100">
        <div className="footer-content flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-start px-[24px] lg:px-0 gap-[30px] lg:gap-0">
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2">
              <img src={logo} alt="" />
            </li>
            <li className="flex gap-2 font-[500]">
              <IoMail className="text-[#ff5555] text-[20px]" />
              Help@Frybix.com
            </li>
            <li className="flex gap-2 font-[500]">
              <FaPhoneAlt className="text-[#ff5555] text-[20px]" />
              +123 456 678 89
            </li>
          </ul>
          <ul className="flex flex-col gap-3 cursor-pointer">
            <li className="flex gap-2 text-[30px] font-[500]">Links</li>
            <li className="flex gap-2 font-[500]">Home</li>
            <li className="flex gap-2 font-[500]">About Us</li>
            <li className="flex gap-2 font-[500]">Booking</li>
            <li className="flex gap-2 font-[500]">Blog</li>
          </ul>
          <ul className="flex flex-col gap-3 cursor-pointer">
            <li className="flex gap-2 text-[30px] font-[500]">Legal</li>
            <li className="flex gap-2 font-[500]">Terms Of Use</li>
            <li className="flex gap-2 font-[500]">Privacy Policy</li>
            <li className="flex gap-2 font-[500]">Cookie Policy</li>
          </ul>
          <ul className="flex flex-col gap-3 cursor-pointer">
            <li className="flex gap-2 text-[30px] font-[500]">Product</li>
            <li className="flex gap-2 font-[500]">Take Tour</li>
            <li className="flex gap-2 font-[500]">Live Chat</li>
            <li className="flex gap-2 font-[500]">Reviews</li>
          </ul>
          <ul className="flex flex-col gap-3 cursor-pointer">
            <li className="flex gap-2 text-[30px] font-[500]">Newsletter</li>
            <li className="flex gap-2 font-[500]">Stay Up To Date</li>
            <div className="newletter-input flex flex-row">
              <input
                type="text"
                placeholder="Your Email"
                className="w-[160px] lg:w-[200px] border-[1px] border-[#fff] px-3 shadow-xl"
              />
              <Button text="Subscribe" />
            </div>
          </ul>
        </div>
        <hr className="mt-[100px] h-[.5px] bg-black border-0 my-4" />
        <div className="copyrights py-14 flex justify-center items-center text-[15px] font-[500] text-center">
          <h1>Copyright 2022 Uifry.Com All Rights Reserved</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
