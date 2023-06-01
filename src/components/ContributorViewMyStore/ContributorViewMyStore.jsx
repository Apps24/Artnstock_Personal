import React from "react";
import ViewMyStoreBanner from "../../assets/images/View My Store/ViewMyStoreBanner.png";
import Share from "../../assets/images/View My Store/Share.png";
import Img1 from "../../assets/images/View My Store/Img1.png";
import Img2 from "../../assets/images/View My Store/Img2.png";
import Img3 from "../../assets/images/View My Store/Img3.png";
import ProfilePhoto from "../../assets/images/View My Store/ProfilePhoto.png";
import location from "../../assets/images/View My Store/location.png";
import Pro from "../../assets/images/View My Store/Pro.png";

const ContributorViewMyStore = () => {
  return (
    <>
      <div className="wrapper">
        <main>
          <div
            className="hero"
            style={{
              backgroundImage: `url(${ViewMyStoreBanner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="z-50  flex justify-center text-center text-[#ffffff]">
              <div className="mt-[63px] mb-[68px]">
                <p className="text-[80px] text-[#333333] font-semibold leading-[1]">
                  <span className="font-thin"> [ </span>Wall Skin{" "}
                  <span className="font-thin">]</span>
                </p>
                <ul className="text-[15px] text-[#333333] flex gap-4">
                  <li>Nature</li>
                  <li>Travel</li>
                  <li>Education</li>
                  <li>Lifestyle</li>
                  <li>Sports</li>
                  <li>People</li>
                </ul>
                <p className="text-[12px] text-[#333333] font-medium">
                  <span className="font-normal">by</span> Azra Creation
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-5 justify-center">
            <div className="mr-[13px]">
              <img src={ProfilePhoto} alt="" />
            </div>
            <div className="mr-[28px]">
              <img src={Pro} alt="" />
              <p className="text-[25px] text-[#333333] mt-2  leading-[0.4]">Azra Creation</p>
              <div className="leading-[1.2] mt-2">
              <p className="text-[11px] text-[#757575] ">Illustrator/Photographer</p>
              <img src={location} alt="" className="inline " />
              <span className="text-[11px] text-[#757575] ml-1">Pune, Maharashtra, India</span>
              </div>
              <div className="mt-3 leading-[0.8]">
                <button className="px-2.5 py-2 bg-[#00f9c6] text-[#333333] text-[11px] rounded-full mr-2">
                  About Contributor
                </button>
                <img src={Share} alt="" className="inline" />
              </div>
            </div>
            <div>
              <div className="mt-2 border-t-2 border-b-2 border-[#EFEFEF]">
                <table className="w-[100%]">
                  <tr className="border-b border-[#EFEFEF]">
                    <td className="text-primaryGray text-sm12 font-medium leading-4 w-[100px]">
                      Styles
                    </td>
                    <td className="text-primaryGray text-sm12 font-normal leading-4 ">
                      Abstract, Realastic, Modern
                    </td>
                  </tr>
                  <tr className="border-b border-[#EFEFEF]">
                    <td className="text-primaryGray text-sm12 font-medium leading-4 ">
                      Subjects:
                    </td>
                    <td className="text-primaryGray text-sm12 font-normal leading-4 ">
                      Nature, Travel, Education, Lifestyle, Sports, People
                    </td>
                  </tr>
                  <tr className="">
                    <td className="text-primaryGray text-sm12 font-medium leading-4 ">
                      Equipments:
                    </td>
                    <td className="text-primaryGray text-sm12 font-normal leading-4 ">
                      Canon 550D, Canon 5D Mark II
                    </td>
                  </tr>
                </table>
              </div>
              <p className="font-medium text-[#333333] text-[11px] mt-[10px] mb-1">Recognitions</p>
              <div className="flex gap-4">
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContributorViewMyStore;
