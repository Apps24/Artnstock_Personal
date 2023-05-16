import React from "react";

const Tooltip = ({ children, message }) => {
  return (
    <div className="group relative flex justify-center">
      {children}
      <span
        className="absolute z-50 bottom-5 scale-0 transition-all py-[7px] px-[13px] rounded shadow-[0px 0px 8px rgba(0, 0, 0, 0.2)] bg-[#CDFD35] text-sm11 text-primaryGray group-hover:scale-100"
        
      >
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
