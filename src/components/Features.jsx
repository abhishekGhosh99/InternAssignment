import React from "react";
import {
  backgroundGradient,
  featureBanner,
  featureBanner2,
  featureBanner3,
  star,
  listitem1,
  listitem2,
  listitem3,
  bellIcon,
} from "../assets";

const Features = () => {
  return (
    <div>
      <div className="wrapper1 lg:relative flex flex-col-reverse lg:flex-row lg:mt-[350px] px-[30px] overflow-hidden">
        <div className="left w-full lg:w-[50%] relative top-[100px]">
          <img
            className="relative lg:absolute top-24 left-10 w-[40px] rotate-45"
            src={star}
            alt=""
          />
          <img
            className="relative lg:absolute z-0 top-10"
            src={backgroundGradient}
            alt=""
          />
          <img
            className="relative z-10 w-[100%] -top-[200px] lg:top-0"
            src={featureBanner}
            alt=""
          />
        </div>
        <div className="right relative top-24 w-full lg:w-[50%]">
          <div className="text-heading">
            <h2 className="text-[18px] uppercase tracking-widest text-[#FF5555] font-[500]">
              Features
            </h2>
            <h1 className="text-[45px] font-[800] leading-[50px]">
              Uifry Premium
            </h1>
          </div>

          <div className="text-content mt-10">
            <div className="heading flex gap-3">
              <img src={listitem1} alt="" />
              <h1 className="text-[15px] font-[600]">Budgeting Intervals</h1>
            </div>
            <div className="sub-heading text-[#7F7F7F] mt-3 text-[16px] capitalize font-[500] leading-[25px]">
              <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet
              </p>
              <span>
                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
              </span>
            </div>
          </div>

          <div className="text-content mt-10">
            <div className="heading flex gap-3">
              <img src={listitem2} alt="" />
              <h1 className="text-[15px] font-[600]">Budgeting Intervals</h1>
            </div>
            <div className="sub-heading text-[#808080] mt-3 text-[16px] capitalize font-[500] leading-[22px]">
              <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet
              </p>
              <span>
                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
              </span>
            </div>
          </div>

          <div className="text-content mt-10">
            <div className="heading flex gap-3">
              <img src={listitem3} alt="" />
              <h1 className="text-[15px] font-[600]">Budgeting Intervals</h1>
            </div>
            <div className="sub-heading text-[#808080] mt-3 text-[16px] capitalize font-[500] leading-[22px]">
              <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet
              </p>
              <span>
                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
              </span>
            </div>
          </div>

          <img
            className="absolute z-0 -top-10 -right-[260px]"
            src={backgroundGradient}
            alt=""
          />
        </div>
      </div>

      <div className="wrapper2 lg:relative flex flex-col lg:flex-row mt-[0px] lg:mt-[100px] px-[20px]">
        <div className="left w-full lg:w-[50%] lg:justify-center lg:items-center px-0 lg:px-[80px] lg:pl-[100px]">
          <div className="text-heading">
            <h2 className="text-[18px] uppercase tracking-widest text-[#FF5555] font-[500]">
              Advantages
            </h2>
            <h1 className="text-[45px] font-[800] leading-[50px] lg:text-nowrap">
              Why Choose Uifry?
            </h1>
          </div>

          <div className="text-content mt-6">
            <div className="heading flex gap-3">
              <img className="w-[40px]" src={bellIcon} alt="" />
              <h1 className="text-[25px] font-[600]">Clever Notification</h1>
            </div>
            <div className="sub-heading text-[#7F7F7F] mt-3 text-[16px] capitalize font-[500] leading-[25px]">
              <p>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>

        <div className="right w-full lg:w-[50%] relative top-[10px] lg:-top-[160px] left-[0px] lg:right-10 overflow-hidden">
          <img
            className="absolute z-0 top-20 lg:top-36 right-0"
            src={backgroundGradient}
            alt=""
          />
          <img
            className="relative z-10 w-[80%] lg:w-[100%]"
            src={featureBanner2}
            alt=""
          />
          <img
            className="absolute top-10 right-[100px] lg:-right-10 w-[60px]"
            src={star}
            alt=""
          />
        </div>
      </div>

      <div className="wrapper3 lg:relative flex flex-col-reverse lg:flex-row mt-[20px] px-[20px] lg:-mt-[80px]">
        <div
          className="left w-full lg:w-[50%] relative
         top-[40px] lg:-top-[160px] lg:left-10 overflow-hidden"
        >
          <img
            className="absolute z-0 top-10 lg:top-36 right-10 rotate-180"
            src={backgroundGradient}
            alt=""
          />
          <img
            className="relative z-10 w-[90%] lg:w-[100%]"
            src={featureBanner3}
            alt=""
          />
          <img
            className="absolute top-10 right-[80px] w-[40px] rotate-45"
            src={star}
            alt=""
          />
        </div>
        <div className="right w-full lg:w-[50%] px-0 lg:px-[80px]">
          <div className="text-content lg:relative mt-14 -left-10">
            <div className="heading flex gap-3">
              <img className="w-[40px]" src={bellIcon} alt="" />
              <h1 className="text-[25px] font-[600]">Fully Customizable</h1>
            </div>
            <div className="sub-heading text-[#7F7F7F] mt-3 text-[16px] capitalize font-[500] leading-[25px]">
              <p>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
          <img
            className="absolute bottom-[200px] right-[200px] w-[60px]"
            src={star}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
