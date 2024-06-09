import React from "react";
import PropTypes from "prop-types";
import { star, FAQposter, backgroundGradient } from "../assets";

const FAQcard = ({ background }) => {
  const textColor = background === "#ff5454" ? "text-white" : "text-black";
  const subtitleTextColor =
    background === "#ff5454" ? "text-white" : "text-[#808080]";

  return (
    <div
      className="card w-full lg:w-[48%] px-[30px] py-[24px] rounded-[10px] leading-[30px] z-20"
      style={{ background: background }}
    >
      <h1 className={`text-[26px] ${textColor} font-[600]`}>
        The Best Financial Accounting App Ever!
      </h1>
      <p
        className={`text-[16px] mt-3 leading-6 ${subtitleTextColor} capitalize tracking-wide font-[500]`}
      >
        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris.
      </p>
    </div>
  );
};

FAQcard.propTypes = {
  background: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

const FAQ = () => {
  return (
    <>
      <div className="FAQ-wrapper px-[20px] lg:mx-[120px] mt-[80px] overflow-hidden lg:overflow-visible">
        <div className="heading relative flex">
          <div className="head-text">
            <h2 className="text-[#FF5555] font-[500] tracking-widest">FAQ</h2>
            <div className="text-[45px] font-[800] leading-[48px]">
              <h2>Frequently Asked</h2>
              <h2>Questions</h2>
            </div>
          </div>
          <div className="star absolute right-[460px] top-[50px] w-[60px]">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="FAQ-content mt-10">
          <div className="FAQ-cards flex flex-wrap gap-[20px]">
            <FAQcard background="#ff5454" />
            <FAQcard background="white" />
            <FAQcard background="white" />
            <FAQcard background="#ff5454" />
            <FAQcard background="#ff5454" />
            <FAQcard background="white" />
          </div>
        </div>
        <div className="FAQ-poster relative flex justify-center items-center my-[30px] lg:mt-[200px]">
          <div className="image-container flex justify-center items-center">
            <img
              className="absolute top-[90px] -left-[100px] z-20 rotate-45 w-[20px] lg:w-[40px]"
              src={star}
              alt=""
            />
            <img
              className="absolute z-0 -top-[180px] -left-[200px]"
              src={backgroundGradient}
              alt=""
            />
            <img className="w-[90%] relative z-10" src={FAQposter} alt="" />
            <img
              className="absolute -top-[100px] right-0 w-[40px]"
              src={star}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
