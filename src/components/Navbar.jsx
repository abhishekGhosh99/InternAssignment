import React, { useState } from "react";
import { logo } from "../assets";
import { Button } from "../components";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex justify-center items-center my-[20px] mx:[10px]">
      <div className="navbar flex justify-between items-center w-full lg:w-[90%] px-[40px] lg:px-[100px] gap-24">
        <div className="left-div flex md:justify-center md:items-center text-nowrap md:gap-14 lg:gap-14">
          <div className="logo flex min-w-[140px]">
            <img className="w-[140px]" src={logo} alt="logo" />
          </div>
          <div className="content flex justify-between items-center">
            <div className="nav-links hidden md:flex flex-row justify-center items-center">
              <ul className="flex gap-8 text-[20px] font-[500]">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-div hidden lg:flex justify-center items-center">
          <div className="download-btn ">
            <Button text="Download" />
          </div>
        </div>

        <div className="menu-icon md:hidden">
          <RiMenu3Fill
            className="text-[25px]"
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="mobile-nav-links fixed flex flex-col bg-[#ff5555] text-white top-0 right-0 w-[70%] h-[100vh] transition-[0.5s ease] z-[100] py-[25px]">
              <div className="close-icon flex justify-end pr-9">
                <IoClose
                  className="text-[35px]"
                  onClick={() => setToggleMenu(false)}
                />
              </div>
              <ul className="flex flex-col items-start px-[60px] text-[24px] font-[500] my-10">
                <li className="my-5">
                  <a href="#">Home</a>
                </li>
                <li className="my-5">
                  <a href="#">About Us</a>
                </li>
                <li className="my-5">
                  <a href="#">Pricing</a>
                </li>
                <li className="my-5">
                  <a href="#">Features</a>
                </li>
              </ul>
              <div className="right-div flex flex-col items-center justify-center pt-[180px] gap-2">
                <div className="download-text text-[20px] font-[500]">
                  Download Our App
                </div>
                <div className="download-btn">
                  <Button text="Download" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
