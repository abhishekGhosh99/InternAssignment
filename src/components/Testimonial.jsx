import React from "react";
import {
  testimonialPoster,
  backgroundGradient,
  star,
  testimonialUser,
} from "../assets";

const Testimonial = () => {
  return (
    <>
      <div className="wrapper w-full overflow-hidden mt-[100px] lg:mt-0 px-[20px]">
        <div className="heading text-center">
          <h2 className="text-[18px] font-[500]  uppercase tracking-widest">
            Testimonial
          </h2>
          <h1 className="text-[45px] leading-[45px] capitalize font-[700]">
            What Our Users
          </h1>
          <h1 className="text-[45px] leading-[45px] capitalize font-[700]">
            Say about us?
          </h1>
        </div>

        <div className="content flex flex-col lg:flex-row">
          <div className="left w-full lg:w-[50%] ">
            <div className="image-container relative mt-10 lg:mt-0">
              <img
                className="absolute bottom-10 lg:left-[50px] rotate-45 w-[40px]"
                src={star}
                alt=""
              />
              <img
                className="absolute top-[100px] z-0 lg:left-[60px]"
                src={backgroundGradient}
                alt=""
              />
              <img
                className="relative w-[100%] z-10 lg:left-[60px]"
                src={testimonialPoster}
                alt=""
              />
            </div>
          </div>
          <div className="right w-full lg:w-[50%] mt-[60px] lg:mt-[100px] px-0 lg:px-[100px]">
            <div className="testimonial_right_heading">
              <h1 className="text-[26px] font-[600] leading-[30px]">
                The Best Financial Accounting App Ever!
              </h1>
            </div>
            <div className="testimonial_right_text mt-[30px]">
              <p className="capitalize text-[16px] font-[500] leading-[30px] text-[#7F7F7F]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </p>
            </div>
            <div className="testimonial_right_users">
              <img className="mt-8" src={testimonialUser} alt="" />
              <p className="mt-5 capitalize font-[600]">Nick Jones</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
