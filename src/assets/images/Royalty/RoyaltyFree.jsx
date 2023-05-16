import React from "react";
import royalty_01 from "../../assets/images/Royalty/royalty_01.jpg";
import royalty_02 from "../../assets/images/Royalty/royalty_02.jpg";
import royalty_03 from "../../assets/images/Royalty/royalty_03.jpg";
import ICreate from "../../assets/images/Royalty/ICreate.jpg";
import IUpload from "../../assets/images/Royalty/IUpload.jpg";
import IEarn from "../../assets/images/Royalty/IEarn.jpg";
import IRefer from "../../assets/images/Royalty/IRefer.jpg";
import vector from "../../assets/images/Royalty/Vector.png";
import IFootage from "../../assets/images/Royalty/IFootage.png";
import IMusic from "../../assets/images/Royalty/IMusic.png";

const RoyaltyFree = () => {
  return (
    <>
      <div className="wrapper flex justify-center">
        <div className="w-w1409 mx-auto">
          <p className="text-primaryBlack text-heading font-semibold text-center mb-[9px]">
            Royalty-Free stock images, footage and <br /> music for your
            artistic endeavours
          </p>
          <p className="text-sm14 font-normal mt-2 text-center text-primaryGray">
            Come explore further our Jukebox, Treasure Chest and Bundle of
            Goodies of royalty-free Music, Images and Footage <br /> all to
            entice your senses.
          </p>

          <div className="flex justify-center">
            <div className=" flex gap-4 mt-6 text-center text-[#ffffff]">
              <div className="card">
                <div
                  className="w-w459 h-[257px] rounded-2xl group relative overflow-hidden"
                  style={{ background: `url(${royalty_01})` }}
                >
                  <div
                    className="hidden group-hover:flex justify-center items-center absolute top-0 left-0 bg-blackRgba"
                    style={{ height: "inherit", width: "100%" }}
                  >
                    <div>
                      <p className="font-bold text-[50px]">Photos</p>
                      <p className="text-[20px] leading-6">
                        Finding stories in a spill of colours, <br />
                        memories captured
                      </p>
                      <p className="text-[50px] font-extralight">86450+</p>
                      <img
                        src={vector}
                        className="absolute bottom-2.5 left-2.5"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-[#757575] mt-2">
                  Dwell into a best high quality photos, in any <br /> subject
                  or genre.
                </p>
              </div>
              <div className="card">
                <div
                  className="w-w459 h-[257px] rounded-2xl group relative overflow-hidden"
                  style={{ background: `url(${royalty_02})` }}
                >
                  <div
                    className="hidden group-hover:flex justify-center items-center absolute top-0 left-0 bg-blackRgba"
                    style={{ height: "inherit", width: "100%" }}
                  >
                    <img
                      src={IFootage}
                      className="absolute bottom-2.5 left-2.5"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-[11px] text-[#757575] mt-2">
                  Royalty-free footages, for your innovative usage we have
                  display of <br /> good quality footages for your requisite.
                </p>
              </div>
              <div className="card">
                <div
                  className="w-w459 h-[257px] rounded-2xl group relative overflow-hidden"
                  style={{ background: `url(${royalty_03})` }}
                >
                  <div
                    className="hidden group-hover:flex justify-center items-center absolute top-0 left-0 bg-blackRgba"
                    style={{ height: "inherit", width: "100%" }}
                  >
                    <img
                      src={IMusic}
                      className="absolute bottom-2.5 left-2.5"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-[11px] text-[#757575] mt-2">
                  Traverse our rhythmic and melodious royalty-free music
                  collection. <br />
                  Tune with music from Trans through Jazz to Classical
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hrLine"></div>
      <div className="w-w1168 mx-auto mb-[50px]">
        <p className="text-primaryBlack text-heading font-semibold text-center">
          Market your creative piece of art, photos, <br /> footage, music and
          templates
        </p>
        <p className="text-sm14 font-normal mt-[9px] text-center text-primaryGray">
          We promote top-notch works of art produced by artists all around the
          world through an easy registration procedure at your service <br />{" "}
          for every need to be satiated in any form of art.
        </p>
        <div className="flex gap-4 justify-center mt-[24px] w-w1168">
          <div className="border border-[#EFEFEF] w-[280px] h-[280px] p-[50px] rounded-2xl">
            <div className="text-center">
              <img src={ICreate} alt="" className="w-[72px] mx-auto" />
              <div className="mt-4">
                <p className="font-semibold text-[18px]">Create</p>
                <p className="text-[12px] text-[#757575]">
                  Produce exclusive Art, Photos, Footage, Music and Templates
                  for customers to buy
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#EFEFEF] w-[280px] h-[280px] p-[50px] rounded-2xl">
            <div className="text-center">
              <img src={IUpload} alt="" className="w-[72px] mx-auto" />
              <div className="mt-4">
                <p className="font-semibold text-[18px]">Submit</p>
                <p className="text-[12px] text-[#757575]">
                  Synchronise your content with our easy-to-use platform, and
                  spike your success
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#EFEFEF] w-[280px] h-[280px] p-[50px] rounded-2xl">
            <div className="text-center">
              <img src={IEarn} alt="" className="w-[72px] mx-auto" />
              <div className="mt-4">
                <p className="font-semibold text-[18px]">Get Paid</p>
                <p className="text-[12px] text-[#757575]">
                  Be profitable every time your content is downloaded by our
                  customers
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#EFEFEF] w-[280px] h-[280px] p-[50px] rounded-2xl ">
            <div className="text-center">
              <img src={IRefer} alt="" className="w-[72px] mx-auto" />
              <div className="mt-4">
                <p className="font-semibold text-[18px]">Refer</p>
                <p className="text-[12px] text-[#757575]">
                  Gain or earn on your referral of a Customer or Contributor
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="blackBtn mx-auto block mt-7">Get Started</button>
      </div>
    </>
  );
};

export default RoyaltyFree;
