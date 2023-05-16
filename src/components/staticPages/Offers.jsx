import React from "react";
import BannerBG from "../../assets/images/footer/BannerBG.png";
import Offers_product from "../../assets/images/footer/Offers_products.png";
import Offers_product2 from "../../assets/images/footer/Offers_products2.png";
import Offers_Art from "../../assets/images/footer/Offers_Art.png";
import SweetSteams from "../../assets/images/footer/SweetStems.png";
import Throwback from "../../assets/images/footer/Throwback.png";
import Ride from "../../assets/images/footer/Ride.png";
import SaveIcon from "../../assets/images/footer/SaveIcon.png";
import ShareIcon from "../../assets/images/footer/ShareIcon.png";
import WishIcon from "../../assets/images/footer/WishIcon.png";

const Offers = () => {
  return (
    <>
      <div className="wrapper">
        <main>
          <div
            className="hero"
            style={{
              backgroundImage: `url(${BannerBG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="z-50 relative flex justify-center text-center text-[#ffffff] py-10">
              <div>
                <p className="text-[100px] font-thin opacity-40">Offers </p>
                <p className="text-[25px] mt-2">
                  Earn 50% Customer Referral Bonus
                </p>
                <p className="text-[13px] mt-[14px]">
                  Refer a new customer to Artnstock to earn 50% of their first
                  payment <br /> instead of usual 30% referral bonus.
                </p>
              </div>
            </div>
          </div>

          <div className="my-[30px]">
            <p className="bullet text-center mb-1">
              Artnstock / Buyer / Offers
            </p>
            <p className="text-[64px] text-[#333333] opacity-30 font-bold text-center">
              Artnstock Offers
            </p>
          </div>

          <div className="flex justify-center gap-8">
            <div>
              <div className="border border-[#efefef] rounded-[28px] text-center">
                <img src={Offers_product} className="w-[100%]" alt="" />
                <p className="text-[25px] mt-5">Office Merch Combo</p>
                <p className="text-[12px] mb-5 text-[#757575]">
                  Our Pack Collections of our best-selling Limited Editions.
                </p>
                <p className="text-[36px] text-[#f88331]">$189.00</p>
                <p className="text-[11px] text-[#757575] mb-6">
                  Show Price Details
                </p>
                <p className="flex justify-center mt-6 mb-[6px] gap-5">
                  <button className="border border-[#333333] rounded-full px-5 py-2.5 mx-1 ">
                    Add to Cart
                  </button>
                  <button className="blackBtn">Shop Now</button>
                </p>
                <p className="text-[11px] text-[#757575] mb-8">
                  * GST, Branding, Logistics and Customized Packaging charges
                  additional <br /> as applicable.
                </p>
                <div className="flex gap-[10px] px-[10px] justify-center items-center">
                  <img src={Offers_Art} className="w-[100%]" alt="" />
                  <p className=" text-start">
                    <div className="leading-9">
                      <p className="text-[#0ec8d0] text-[38px] font-bold">
                        GET{" "}
                      </p>
                      <p className="text-[#00dac1] text-[38px] font-bold">
                        A FREE
                      </p>
                      <p className="text-[#34db7e] text-[38px] font-bold">
                        POSTER
                      </p>
                      <p className="text-[#ffc030] text-[38px] font-bold">
                        WITH
                      </p>
                      <p className="text-[#fa9732] text-[38px] font-bold">
                        THIS
                      </p>
                      <p className="text-[#ff6b16] text-[38px] font-bold">
                        CUSTOM
                      </p>
                      <p className="text-[#f13a2b] text-[38px] font-bold">
                        PACK
                      </p>
                    </div>
                    <p className="text-[11px] text-[#757575]">
                      The poster will be unframed and A3 size and <br /> will be
                      included in your shipment. Lorem ipsum <br /> dolor sit
                      amet labore adipiscing consectetur elit <br /> sed do
                      eiusmod. Lorem ipsum dolor sit amet <br />
                      labore adipiscing.
                    </p>
                  </p>
                </div>

                <div className="flex gap-10 mt-8 justify-center">
                  <img
                    src={SweetSteams}
                    className="bg-[#f5f5f7] p-5 rounded-2xl"
                    alt=""
                  />
                  <img src={Throwback} alt="" />
                  <img src={Ride} alt="" />
                </div>

                <p className="text-center pb-5 text-[11px]">
                  Designs used on this combo
                </p>
              </div>
              <p className="text-center mt-[17px] text-[#757575] text-[11px]">
                All artwork and designs used in this Combo remain the property
                of Artnstock Private Limited. <br /> Note: There might be a
                slight variation in the shade of the actual product and the
                image shown on the screen, <br /> due to the screen resolution
                and photography effects
              </p>
              <p className="text-[12px] mt-[14px] text-[#333333] flex gap-5 justify-center">
                <a href="">FAQs</a>
                <a href="">Returns and Refunds</a>
                <a href="">Ask a Question</a>
              </p>
              <p className="flex gap-4 mt-[18px] mb-10 justify-center">
                <img src={SaveIcon} alt="" />
                <img src={WishIcon} alt="" />
                <img src={ShareIcon} alt="" />
              </p>
            </div>
            <div>
              <div className="border border-[#efefef] rounded-[28px] text-center">
                <img src={Offers_product2} alt="" />
                <p className="text-[25px] mt-5">Office Merch Combo</p>
                <p className="text-[12px] mb-5 text-[#757575]">
                  Our Pack Collections of our best-selling Limited Editions.
                </p>
                <p className="text-[36px] text-[#f88331]">$189.00</p>
                <p className="text-[11px] text-[#757575] mb-6">
                  Show Price Details
                </p>
                <p className="flex justify-center mt-6 mb-[6px] gap-5">
                  <button className="border border-[#333333] rounded-full px-5 py-2.5 mx-1 ">
                    Add to Cart
                  </button>
                  <button className="blackBtn">Shop Now</button>
                </p>
                <p className="text-[11px] text-[#757575] mb-8">
                  * GST, Branding, Logistics and Customized Packaging charges
                  additional <br /> as applicable.
                </p>
                <div className="flex gap-10 pt-[28px] mt-[465px] justify-center">
                  <img
                    src={SweetSteams}
                    className="bg-[#f5f5f7] p-5 rounded-2xl"
                    alt=""
                  />
                  <img src={Throwback} alt="" />
                  <img src={Ride} alt="" />
                </div>
                <p className="text-center pb-5 text-[11px]">
                  Designs used on this combo
                </p>
              </div>
              <p className="text-center mt-[17px] text-[#757575] text-[11px]">
                All artwork and designs used in this Combo remain the property
                of Artnstock Private Limited. <br /> Note: There might be a
                slight variation in the shade of the actual product and the
                image shown on the screen, <br /> due to the screen resolution
                and photography effects
              </p>
              <p className="text-[12px] mt-[14px] text-[#333333] flex gap-5 justify-center">
                <a href="">FAQs</a>
                <a href="">Returns and Refunds</a>
                <a href="">Ask a Question</a>
              </p>
              <p className="flex gap-4 mt-[18px] mb-10 justify-center">
                <img src={SaveIcon} alt="" />
                <img src={WishIcon} alt="" />
                <img src={ShareIcon} alt="" />
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Offers;
