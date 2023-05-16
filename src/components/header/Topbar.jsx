import React from "react";
import newArrivals from "../../assets/images/header/New Arrivals (1).svg"
import visitArtnstock from "../../assets/images/header/Visit Artnstock Collectibles (2).svg"

const Topbar = () => {
  return (
    <div className="bg-primaryBlack flex justify-center items-center py-1.5">
      <div className="leftCon">
        <div className="flex">
          <p className="text-lightGray font-semibold text-[0.813rem] leading-5 mr-1.5">
            SELL YOUR PAINTINGS AND OTHER ART ONLINE
          </p>
          <button className="text-secGray text-[0.625rem] font-medium leading-2 border border-solid border-secGray rounded-[10px] px-1.5">
            Learn more
          </button>
        </div>
      </div>
      <div className="w-px bg-secGray mx-3.5 h-[1.133rem]"></div>
      <div className="midCon">
        <img src={newArrivals} alt="" />
      </div>
      <div className="w-px bg-secGray mx-3.5 h-[1.133rem]"></div>

      <div className="rightCon">
        <img src={visitArtnstock} alt="" />
      </div>
    </div>
  );
};

export default Topbar;
