import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";
import {
  bannerTape,
  backgroundGradient,
  iPhoneImageGroup,
  star,
} from "../assets";
import { Button } from "../components";

const HeroBanner = () => {
  return (
    <div className="wrapper w-full relative flex flex-col lg:flex-row">
      <div className="left flex flex-col lg:flex-row relative w-full lg:w-[60%] px-[40px] lg:px-[100px] overflow-hidden lg:overflow-visible">
        <img
          className="absolute top-0 lg:top-1 -left-3 lg:left-10 w-[40px] rotate-45"
          src={star}
          alt=""
        />
        <div className="background-img">
          <img
            className="absolute -top-[80px] left-[100px] z-0 h-[300px]"
            src={backgroundGradient}
            alt=""
          />
        </div>

        <div className="text lg:absolute top-24 lg:top-20 z-10 leading-[40px] lg:leading-[60px] py-[40px] lg:py-0">
          <div className="heading flex flex-col text-[35px] md:text-[50px] lg:text-[60px] font-[600] lg:font-[800]">
            <h1>Make The Best</h1>
            <span>Financial Decisions</span>
          </div>

          <div className="content-text text-[#808080] mt-8 text-[16px] capitalize font-[500] leading-[25px]">
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            </p>
            <span>
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </span>
          </div>
        </div>

        <div className="buttons lg:relative flex flex-col-reverse lg:flex-none justify-between items-center gap-6 lg:gap-0 top-0 lg:top-[300px]">
          <div className="button flex flex-col gap-[30px]">
            <div className="first-btn flex flex-row justify-center items-center lg:absolute top-0 left-0 text-[18px]">
              <Button
                text="Get Started"
                icon={<HiArrowLongRight className="text-[30px]" />}
              />
            </div>

            <div className="second-btn flex justify-center items-center lg:absolute top-0 left-[200px]">
              <button className="flex justify-center items-center gap-3 bg-white text-black px-5 py-3 rounded-[6px] text-[18px] font-[500]">
                <IoPlayCircleOutline className="text-[30px]" /> Watch Video
              </button>
            </div>
          </div>

          <div className="banner-tape flex lg:flex-none items-center relative top-[-30px] lg:top-0">
            <img
              className="lg:relative top-0 lg:top-20 w-[90%]"
              src={bannerTape}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="right w-full lg:w-[40%] flex justify-center items-center">
        <div className="background-img w-[100%] md:w-[80%] lg:w-full flex justify-center items-center">
          <img
            className="lg:absolute top-[-40px] right-0 w-[100%] lg:w-[50%] object-fit lg:object-contain"
            src={iPhoneImageGroup}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
