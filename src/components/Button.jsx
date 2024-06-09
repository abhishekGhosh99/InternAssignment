import React from "react";

const Button = ({ text, icon }) => {
  return (
    <div className="button flex justify-center items-center">
      <button className="btn flex justify-center items-center gap-3 bg-black text-white px-4 lg:px-5 py-2 lg:py-3 rounded-[6px] lg:text-[18px] font-[500] hover:text-red-500">
        {text}
        {icon}
      </button>
    </div>
  );
};

export default Button;
