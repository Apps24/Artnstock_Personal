import React from "react";
import BannerPromo from "../../assets/images/footer/BannerPromo.png";
// import RolloverImg from "../../assets/images/promocode/RolloverImg.png"
import Discount from "../../assets/images/promocode/Discount.png"

const PromoCode = () => {
  return (
    <>
      <div
        className="wrapper flex w-[100%] justify-center text-center pb-[234px]"
        style={{
          backgroundImage: `url(${BannerPromo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <p className="text-[12px] pt-5 text-[#ffffff]">
            Artnstock / Buyers / Promocode
          </p>
          <p className="text-[64px] text-[#ffffff] opacity-70">Promocode</p>
          <div className="bg-[#ffffff] mt-[25px] rounded-2xl py-[32px] ">
            <p className="text-[38px] text-[#333333] leading-tight">
              Download Photos and save <br /> with your Artnstock Promocode
            </p>
            <p className="text-[13px] mt-[18px] text-[#333333]">
              Get creative without busting your budget when downloading images
              with us. <br /> Use our exclusive promo code now to enjoy some
              savings.
            </p>

            <div className=" bg-[#cdfd35] rounded-2xl px-5 pb-5 mx-[120px] mt-5">
              <div className="flex gap-[13px] justify-center items-center">
                <div className="flex items-center">
               <img src={Discount} alt="" />
                   
                </div>
                <div className="text-[#333333] text-[15px]">
                  An exclusive <br /> welcome offer on your <br /> first order
                  <p>
                    <button className="blackBtn mt-[13px]">
                      Shop with 20% off
                    </button>
                  </p>
                </div>
              </div>
              <p className="text-[#535353] text-[12px]">
                *Offer is available to new customer only. Applicable for
                one-time, online purchase only. <br />
                Cannot be combined with other offers. Excludes Exclusive, <br />{" "}
                Limited Edition and Auction Arts.
              </p>
            </div>
          </div>
        </div>
      
      </div>

      {/* Roll over */}
        {/* <div >
          <div className="border absolute top-[10%] left-[39%]">
          <img src={RolloverImg} alt="" />
          </div>
        </div> */}
    </>
  );
};

export default PromoCode;
