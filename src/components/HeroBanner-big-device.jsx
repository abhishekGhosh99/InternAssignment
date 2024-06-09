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
    <div>
      <div className="wrapper relative flex flex-row w-full">
        <div className="left relative w-[60%] px-[100px]">
          <img
            className="absolute top-1 left-10 w-[40px] rotate-45"
            src={star}
            alt=""
          />
          <div className="background-img">
            <img
              className="relative -top-[80px] left-[100px] z-0 h-[300px]"
              src={backgroundGradient}
              alt=""
            />
          </div>

          <div className="text absolute top-20 z-10 leading-[60px]">
            <div className="heading text-[60px] font-[800]">
              <h1>Make The Best</h1>
              <span>Financial Decisions</span>
            </div>

            <div className="content-text text-[#808080] mt-8 text-[16px] capitalize font-[500] leading-[25px]">
              <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet
              </p>
              <span>
                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
              </span>
            </div>
          </div>

          <div className="buttons relative flex justify-between items-center">
            <div className="first-btn flex flex-row justify-center items-center absolute top-0 left-0 text-[18px]">
              <Button
                text="Get Started"
                icon={<HiArrowLongRight className="text-[30px]" />}
              />
            </div>

            <div className="second-btn flex justify-center items-center absolute top-0 left-[200px]">
              <button className="flex justify-center items-center gap-3 bg-white text-black px-5 py-3 rounded-[6px] text-[18px] font-[500]">
                <IoPlayCircleOutline className="text-[30px]" /> Watch Video
              </button>
            </div>

            <div className="banner-tape">
              <img
                className="relative top-20 w-[90%]"
                src={bannerTape}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="right w-[40%]">
          <div className="background-img">
            <img
              className="absolute top-[-40px] right-0 w-[50%] object-contain"
              src={iPhoneImageGroup}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
