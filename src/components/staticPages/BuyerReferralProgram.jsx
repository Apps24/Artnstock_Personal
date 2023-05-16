import React from "react";
import ArtIcon from "../../assets/images/footer/ArtIcon.png";
import FootageIcon from "../../assets/images/footer/FootageIcon.png";
import MusicIcon from "../../assets/images/footer/MusicIcon.png";
import PhotosIcon from "../../assets/images/footer/PhotosIcon.png";
import ProductsIcon from "../../assets/images/footer/ProductsIcon.png";
import TemplatesIcon from "../../assets/images/footer/TemplatesIcon.png";
import facebookIcon from "../../assets/images/footer/FacebookIcon.png";
import twitterIcon from "../../assets/images/footer/TwitterIcon.png";
import emailIcon from "../../assets/images/footer/EmailIcon.png";
import linkedinIcon from "../../assets/images/footer/LinkedinIcon.png";
import instagramIcon from "../../assets/images/footer/InstagramIcon.png";
import linkIcon from "../../assets/images/footer/LinkIcon.png";
import BannerBG from "../../assets/images/footer/BannerBG.png";
import Footer from "../footer/Footer";

const BuyerReferralProgram = () => {
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
                <p className="text-[100px] opacity-70">Referral Program</p>
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

          <div className="mt-[30px]">
            <p className="bullet text-center mb-1">
              Artnstock / My Account / Contributor / Referral Program
            </p>
            <p className="text-[38px] text-[#333333] font-semibold text-center">
              How much you'll earn?
            </p>
          </div>
          <div className=" flex justify-center">
            <div className="w-w690">
              <div className="flex gap-[19px] pt-[20px] pb-[10px]">
                <img src={ArtIcon} alt="" />
                <p>
                  <p className="text-[18px]">Art</p>
                  <p className="text-[12px] text-[#757575]">
                    For the first year after a referred contributor signs up,
                    you will eam 10% of the final sale price each time one of
                    their videos in downloaded For the first two years after a
                    referred contributor is approved, you will earn $0.04 each
                    time one of their images is downloaded.
                  </p>
                </p>
              </div>
              <div className="flex gap-[19px] py-[10px]">
                <img src={PhotosIcon} alt="" />
                <p>
                  <p className="text-[18px] text-[#333333]">Photos</p>
                  <p className="text-[12px] text-[#757575]">
                    For the first year after a referred contributor signs up,
                    you will eam 10% of the final sale price each time one of
                    their videos in downloaded For the first two years after a
                    referred contributor is approved, you will earn $0.04 each
                    time one of their images is downloaded.
                  </p>
                </p>
              </div>
              <div className="flex gap-[19px] py-[10px]">
                <img src={FootageIcon} alt="" />
                <p>
                  <p className="text-[18px] text-[#333333]">Footage</p>
                  <p className="text-[12px] text-[#757575]">
                    For the first year after a referred contributor signs up,
                    you will eam 10% of the final sale price each time one of
                    their videos in downloaded For the first two years after a
                    referred contributor is approved, you will earn $0.04 each
                    time one of their images is downloaded.
                  </p>
                </p>
              </div>
              <div className="flex gap-[19px] py-[10px]">
                <img src={MusicIcon} alt="" />
                <p>
                  <p className="text-[18px] text-[#333333]">Music</p>
                  <p className="text-[12px] text-[#757575]">
                    For the first year after a referred contributor signs up,
                    you will eam 10% of the final sale price each time one of
                    their videos in downloaded For the first two years after a
                    referred contributor is approved, you will earn $0.04 each
                    time one of their images is downloaded.
                  </p>
                </p>
              </div>
              <div className="flex gap-[19px] py-[10px]">
                <img src={TemplatesIcon} alt="" />
                <p>
                  <p className="text-[18px] text-[#333333]">Templates</p>
                  <p className="text-[12px] text-[#757575]">
                    For the first year after a referred contributor signs up,
                    you will eam 10% of the final sale price each time one of
                    their videos in downloaded For the first two years after a
                    referred contributor is approved, you will earn $0.04 each
                    time one of their images is downloaded.
                  </p>
                </p>
              </div>
              <div className="flex gap-[19px] pt-[10px]">
                <img src={ProductsIcon} alt="" />
                <p>
                  <p className="text-[18px] text-[#333333]">Products</p>
                  <p className="text-[12px] text-[#757575]">
                    For the first year after a referred contributor signs up,
                    you will eam 10% of the final sale price each time one of
                    their videos in downloaded For the first two years after a
                    referred contributor is approved, you will earn $0.04 each
                    time one of their images is downloaded.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-[101px] w-w449 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-3xl py-8 px-5 text-center">
              <p className="text-[25px] text-[#333333]">Refer a Friend</p>
              <p className="text-[12px] text-[#757575]">
                Earn 20% up to Rs. 2,000.00 of a customer's first payment when
                they <br /> use your link to sign{" "}
                <span className="text-[#FF7A6D]"> Learn More</span>
              </p>
              <p className="my-5 flex justify-center gap-[13px]">
                <img src={facebookIcon} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={linkedinIcon} alt="" />
                <img src={instagramIcon} alt="" />
                <img src={emailIcon} alt="" />
                <img src={linkIcon} alt="" />
              </p>

              <form action="">
                <label
                  htmlFor=""
                  className="flex justify-start text-[12px] text-[#757575]"
                >
                  Send to
                </label>
                <input
                  type="text"
                  className="regInput mt-1"
                  placeholder=" Name or email address"
                />
                <textarea
                  name=""
                  id=""
                  cols=""
                  rows=""
                  className="outline-none border border-[#757575] h-[118px] w-[100%] rounded-3xl resize-none mt-3 p-4"
                ></textarea>
                <p className="mt-[10px]">
                  <button className="blackBtn">Send</button>
                </p>
                <p className="mt-[22px] text-[11px] text-[#757575]">
                  To copy link select the category
                </p>
                <p className="flex gap-1 justify-center px-5 mt-[10px] text-[#757575]">
                  <p className="border-[#333333] rounded-full border px-2 py-1 text-[12px]">
                    Art
                  </p>
                  <p className="border-[#333333] rounded-full border px-2 py-1 text-[12px]">
                    Photos
                  </p>
                  <p className="border-[#333333] rounded-full border px-2 py-1 text-[12px]">
                    Footage
                  </p>
                  <p className="border-[#333333] rounded-full border px-2 py-1 text-[12px]">
                    Music
                  </p>
                  <p className="border-[#333333] rounded-full border px-2 py-1 text-[12px]">
                    Template
                  </p>
                  <p className="border-[#333333] rounded-full border px-2 py-1 text-[12px]">
                    Merchandise
                  </p>
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="regInput"
                  placeholder="http://submit.artnstock.com/rid=230540637"
                />
                <button className="blackBtn mt-[10px]" disabled>
                  Copy Link
                </button>

                <p className="my-5 flex justify-center gap-[13px]">
                  <img src={facebookIcon} alt="" />
                  <img src={twitterIcon} alt="" />
                  <img src={linkedinIcon} alt="" />
                  <img src={instagramIcon} alt="" />
                  <img src={emailIcon} alt="" />
                  <img src={linkIcon} alt="" />
                </p>
              </form>
            </div>
          </div>

          <div className="flex justify-center mt-[133px] mb-[103px]">
            <div className="w-w1168 ">
              <p className="text-[25px] text-[#333333]">Terms & Conditions</p>
              <p className="text-[20px] mt-[22px] text-[#333333]">
                Referring Contributors
              </p>
              <p className="text-[16px] mt-2 text-[#757575]">
                For the first year after a referred contributor signs up, you
                will earn 10% of the final sale price each time one of their
                videos is downloaded. For the first two years after a referred
                contributor is approved, you will earn $0.04 each time one of
                their images is downloaded
              </p>
              <p className="text-[20px] mt-6 text-[#333333]">
                Referring Customers
              </p>
              <p className="text-[16px] mt-2 text-[#757575]">
                Each time you refer a new customer to Artnstock, you will earn
                20% of their first payment, up to $200. For monthly plans, you
                will earn a referral commission based on the referred customer's
                first monthly payment only. For example, if you refer a customer
                whose first purchase is a $249 monthly membership, 20% ($49)
                will be added to your account. Referred customers must make
                their first purchase within 30 days after creating a new
                Artnstock customer account for you to be credited with their
                referral.
              </p>
              <p className="text-[20px] mt-6 text-[#333333]">
                Delivery of Payment
              </p>
              <p className="text-[16px] mt-2 text-[#757575]">
                Artnstock reserves the right to delay payment of your referral
                earnings for up to 90 days from the date your referred
                contributor or customer establishes their account (see
                Paragraphs 10a and 10b of the{" "}
                <span className="text-[#FF7A6D]">Terms of Service</span> ).
              </p>
              <p className="text-[16px] text-[#757575]">
                To protect contributors from fraudulent activity, Artnstock
                maintains a three month probationary period on all earnings
                accrued from customer referrals. Following the end of this
                probationary period, you will see these earnings appear in your
                account. You can review the status of pending earnings in the
                customer referral earnings section.
              </p>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default BuyerReferralProgram;
