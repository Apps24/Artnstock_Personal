import React from "react";
import Why from "../../assets/images/SellOnArtnstock/Why.png";
import ArtIcon from "../../assets/images/footer/ArtIcon.png";
import FootageIcon from "../../assets/images/footer/FootageIcon.png";
import MusicIcon from "../../assets/images/footer/MusicIcon.png";
import PhotosIcon from "../../assets/images/footer/PhotosIcon.png";
import ProductsIcon from "../../assets/images/footer/ProductsIcon.png";
import TemplatesIcon from "../../assets/images/footer/TemplatesIcon.png";
import ICreate from "../../assets/images/Royalty/ICreate.jpg";
import IUpload from "../../assets/images/Royalty/IUpload.jpg";
import IEarn from "../../assets/images/Royalty/IEarn.jpg";
import IRefer from "../../assets/images/Royalty/IRefer.jpg";
import ArtHomeFaq from "../faq/ArtHomeFaq";
import SellOnArtnstock_HomeBanner from "../../assets/images/SellOnArtnstock/SellOnArtnstock_HomeBanner.png";
import Offer from "../../assets/images/SellOnArtnstock/Offer.png";
import Divider from "../../assets/images/SellOnArtnstock/Divider.png";
import Wallpaper from "../../assets/images/SellOnArtnstock/Wallpaper.png";
import Copyright from "../../assets/images/SellOnArtnstock/Copyright.png"

const earn = [
  {
    img: `${ArtIcon}`,
    title: "Art",
    description:
      " For the first year after a referred contributor signs up, you will earn 10% of the final sale price each time one of their videos is downloaded. For the first two years after",
  },
  {
    img: `${PhotosIcon}`,
    title: "Photos",
    description:
      " For the first year after a referred contributor signs up, you will earn 10% of the final sale price each time one of their videos is downloaded. For the first two years after",
  },
  {
    img: `${FootageIcon}`,
    title: "Footage",
    description:
      " For the first year after a referred contributor signs up, you will earn 10% of the final sale price each time one of their videos is downloaded. For the first two years after",
  },
  {
    img: `${MusicIcon}`,
    title: "Music",
    description:
      " For the first year after a referred contributor signs up, you will earn 10% of the final sale price each time one of their videos is downloaded. For the first two years after",
  },
  {
    img: `${TemplatesIcon}`,
    title: "Templates",
    description:
      " For the first year after a referred contributor signs up, you will earn 10% of the final sale price each time one of their videos is downloaded. For the first two years after",
  },
  {
    img: `${ProductsIcon}`,
    title: "Products",
    description:
      " For the first year after a referred contributor signs up, you will earn 10% of the final sale price each time one of their videos is downloaded. For the first two years after",
  },
];

const SellOnArtnstock_Home = () => {
  return (
    <>
      <div className="wrapper">
        <main>
          <div
            className="hero "
            style={{
              backgroundImage: `url(${SellOnArtnstock_HomeBanner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="flex justify-between py-[110px] mx-[100px]">
              <div>
                <p className="text-[75px] leading-[1] font-medium text-[#333333]">
                  Art <span className="font-thin text-[40px]">[Wall Skin]</span>
                </p>
                <p className="text-[38px] mt-[20px] text-medium text-[#333333] leading-[41px]">
                  Creatively tailored art in all <br /> forms, media and colours
                </p>
                <p className="mt-[17px] mb-[11px]">
                  <button className="blackBtn">Discover Collections</button>
                </p>
                <p className="text-[11px] text-[#333333] font-medium" ><img src={Copyright} className="inline" alt="" /> Copyright 2022. Artnstock Private Limited.</p>
                <p className="text-[11px] text-[#333333]" >
                  All content included in the website (including, but not
                  limited to, logos, images, <br /> photo, designs, graphics and
                  text) is the property of Artnstock Pvt. Ltd.
                </p>
              </div>
              <div>
                <img src={Offer} alt="" />
                <p className="leading-[1.2] mt-[10px] text-[12px] ">
                  <span className="font-medium">
                    An exclusive welcome offer on your first order
                  </span>{" "}
                  <br /> <span>*Offer is available to new customers only.</span>
                </p>
                <p>
                  <button className="blackBtn mt-2 bg-[#a4e154] text-[#333333] text-[12px]">
                    Shop with 20% Off
                  </button>
                </p>
                <p className="my-3">
                  <img src={Divider} alt="" />
                </p>
                <p>
                  <img src={Wallpaper} alt="" />
                </p>
              </div>
            </div>
            <p className="text-[#333333] text-[15px] text-end pr-3 pb-3">Wall Skin by <span className="font-medium">Artnstock</span></p>
          </div>

          <div className="text-center w-w1168 mx-auto">
            <p className="text-[#757575] text-[12px] text-center mt-[30px] mb-5 leading-[0]">
              Artnstock / Sell on Artnstock
            </p>
            <p className="text-[38px] leading-[1.1] font-medium text-[#333333]">
              Lucrative approch with your Art, Photos, <br /> Music, Footage and
              Templates
            </p>
            <p className="text-[14px] mt-4 mb-[30px] text-[#757575]">
              Avail our exclusive multiple products and sizes to fit any decor
              style or budget. Our Creative collections will artistically
              sensitise your visual projects <br />
              and would be a perfect solution for anyone who needs high-quality
              art at affordable prices.
            </p>
            <p className="">
              <button className="blackBtn mb-[30px]">
                Become a Contributor
              </button>
            </p>
            <div className="hrLine"></div>
            <img src={Why} className=" w-[1920px]" alt="" />
            <p className="text-[14px] text-[#757575]">
              Join us! We are a thriving artist community dedicated to
              supporting one another <br /> with inVougue contributors which
              matches our mission <br />{" "}
              <span className="font-medium text-[#333333]">
                "Passion is Vision"
              </span>
            </p>
          </div>

          <div className="hrLine w-w1168 bg-[#efefef]"></div>
          <div className=" mx-auto w-w930">
            <p className="text-center mt-[90px] text-[38px] font-medium text-[#333333]">
              How much you will earn
            </p>
            <p className="text-center mt-5 mb-2 leading-[1.2]">On-Demand</p>

            {/* Table */}

            <div className="flex justify-center">
              <table className="table mx-auto border-spacing-0 border-separate rounded-2xl">
                <thead>
                  <tr className="text-center text-[13px] border-t-[1] py-[12px] border-[#dddddd] rounded-tl-[10px]">
                    <th
                      className="border px-10 rounded-tl-2xl py-[6px] pl-[6px] font-medium text-[#333333] bg-[#ececec] border-[#dddddd]"
                      rowSpan={2}
                    >
                      Levels
                    </th>
                    <th
                      className="border px-[37px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]"
                      rowSpan={2}
                    >
                      Royalties
                    </th>
                    <th
                      className="border px-[26px] font-medium text-[#333333] bg-[#ececec] border-[#dddddd]"
                      colSpan={2}
                    >
                      Photos
                    </th>
                    <th
                      className="border px-[26px] font-medium text-[#333333] bg-[#ececec] border-[#dddddd]"
                      colSpan={2}
                    >
                      Footage
                    </th>
                    <th
                      className="border px-[30px] font-medium text-[#333333] bg-[#ececec] border-[#dddddd]"
                      colSpan={2}
                    >
                      Music
                    </th>
                    <th
                      className="border px-[21px] font-medium text-[#333333] bg-[#ececec] border-[#dddddd]"
                      colSpan={2}
                    >
                      Templates
                    </th>
                    <th
                      className="border rounded-tr-2xl px-[37px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]"
                      rowSpan={2}
                    >
                      Downloads
                    </th>
                  </tr>
                  <tr className="text-[13px]">
                    <th className="border px-[26px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Standard License
                    </th>
                    <th className="border px-[26px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Enhanced License
                    </th>
                    <th className="border px-[30px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Standard License
                    </th>
                    <th className="border px-[21px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Enhanced License
                    </th>
                    <th className="border px-[37px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Standard License
                    </th>
                    <th className="border px-[26px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Enhanced License
                    </th>
                    <th className="border px-[26px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Standard License
                    </th>
                    <th className="border px-[30px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Enhanced License
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border font-medium text-[#333333] text-[13px] py-[6px] pl-[6px] border-[#dddddd]">
                      Level 1
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      30%
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.25
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.25
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.25
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.25
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.35
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.35
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.35
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.35
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      Up to 499
                    </td>
                  </tr>
                  <tr>
                    <td className="border font-medium text-[#333333] text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd]">
                      Level 2
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      32%
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.27
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.27
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.27
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.27
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.37
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.37
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.37
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.37
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      500 - 4,999
                    </td>
                  </tr>
                  <tr>
                    <td className="border font-medium text-[#333333] text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd]">
                      Level 3
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      34%
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.29
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.29
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.29
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.29
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.39
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.39
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.39
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.39
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      5,000-24,999
                    </td>
                  </tr>
                  <tr>
                    <td className="border font-medium text-[#333333] text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd]">
                      Level 4
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      36%
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.31
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.31
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.31
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.31
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.41
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.41
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.41
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.41
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      25,000-149,999 downloads
                    </td>
                  </tr>
                  <tr>
                    <td className="border font-medium text-[#333333] text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd] rounded-bl-2xl">
                      Level 5
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      38%
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.33
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.33
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.33
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.33
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.43
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.43
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.43
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.43
                    </td>
                    <td className="border rounded-br-2xl text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      150,000+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center mt-8 mb-2 leading-[1.2]">Subscription</p>

            {/* Table */}

            <div className="flex justify-center">
              <table className="table mx-auto border-spacing-0 border-separate rounded-2xl">
                <thead>
                  <tr className="text-center text-[13px] border-t-[1] py-[12px] border-[#dddddd] rounded-tl-[10px]">
                    <th
                      className="border px-10 rounded-tl-2xl py-[6px] pl-[6px] font-medium text-[#333333] bg-[#ececec] border-[#dddddd]"
                      rowSpan={2}
                    >
                      Levels
                    </th>
                    <th
                      className="border px-[37px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]"
                      rowSpan={2}
                    >
                      Royalties
                    </th>
                    <th
                      className="border px-[26px] font-medium text-[#333333] bg-[#ececec] border-[#dddddd]"
                      colSpan={2}
                    >
                      Photos
                    </th>
                    <th
                      className="border px-[26px] font-medium text-[#333333] bg-[#ececec] border-[#dddddd]"
                      colSpan={2}
                    >
                      Footage
                    </th>
                    <th
                      className="border px-[30px] font-medium text-[#333333] bg-[#ececec] border-[#dddddd]"
                      colSpan={2}
                    >
                      Music
                    </th>
                    <th
                      className="border px-[21px] font-medium text-[#333333] bg-[#ececec] border-[#dddddd]"
                      colSpan={2}
                    >
                      Templates
                    </th>
                    <th
                      className="border rounded-tr-2xl px-[37px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]"
                      rowSpan={2}
                    >
                      Downloads
                    </th>
                  </tr>
                  <tr className="text-[13px]">
                    <th className="border px-[26px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Standard License
                    </th>
                    <th className="border px-[26px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Enhanced License
                    </th>
                    <th className="border px-[30px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Standard License
                    </th>
                    <th className="border px-[21px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Enhanced License
                    </th>
                    <th className="border px-[37px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Standard License
                    </th>
                    <th className="border px-[26px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Enhanced License
                    </th>
                    <th className="border px-[26px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Standard License
                    </th>
                    <th className="border px-[30px] font-medium text-[#333333] bg-[#f3f3f3] border-[#dddddd]">
                      Enhanced License
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border font-medium text-[#333333] text-[13px] py-[6px] pl-[6px] border-[#dddddd]">
                      Level 1
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      30%
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.25
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.25
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.25
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.25
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.35
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.35
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.35
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      $0.35
                    </td>
                    <td className="border text-center text-primaryGray border-[#dddddd]">
                      Up to 499
                    </td>
                  </tr>
                  <tr>
                    <td className="border font-medium text-[#333333] text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd]">
                      Level 2
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      32%
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.27
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.27
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.27
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.27
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.37
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.37
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.37
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.37
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      500 - 4,999
                    </td>
                  </tr>
                  <tr>
                    <td className="border font-medium text-[#333333] text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd]">
                      Level 3
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      34%
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.29
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.29
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.29
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.29
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.39
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.39
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.39
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.39
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      5,000-24,999
                    </td>
                  </tr>
                  <tr>
                    <td className="border font-medium text-[#333333] text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd]">
                      Level 4
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      36%
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.31
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.31
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.31
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.31
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.41
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.41
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.41
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.41
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      25,000-149,999 downloads
                    </td>
                  </tr>
                  <tr>
                    <td className="border font-medium text-[#333333] text-[13px] py-[6px] pl-[6px] bg-[#f7f7f7] border-[#dddddd] rounded-bl-2xl">
                      Level 5
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      38%
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.33
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.33
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.33
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.33
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.43
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.43
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.43
                    </td>
                    <td className="border text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      $ 0.43
                    </td>
                    <td className="border rounded-br-2xl text-center text-primaryGray bg-[#ffffff] border-[#dddddd]">
                      150,000+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc list-outside pl-3.5 mt-6 text-[#757575]">
              <li>
                New levels are based on the number of times your content is
                licensed
              </li>
              <li>
                Contributors reset to level 1 for Photos, Footage, Music and
                templates every year on January 1st
              </li>
              <li>
                Each file downloaded using On-Demand Downloads counts as
                download. A file purchased via subscription plan counts as
                one-third download; Le, 3 files downloaded via subscription plan
                count as 1 download.
              </li>
              <li>
                {" "}
                If a Photos, Footage, Music and templates is purchased with
                On-Demand downloads under a Standard or Enhanced License, your
                royalty rate depends solely upon your Contributor's Level.
              </li>
              <li>
                If a Photos, Footage, Music and templates is purchased with any
                of our Subscription Plans under a Standard or Enhanced License,
                your royalty rate depends solely upon
              </li>
              <li>
                your Contributor's Level Royalties for files downloaded under
                the Program's are aggregated and paid start of the month,
              </li>
              <li>
                Royalty calculations are based on the actual amount paid by the
                buyer not on a "standard" value of a file. If a Buyer gets a
                discount on the purchase, the royalties received by the
                Contributor for the file will be based on the amount paid by the
                Buyer, incorporating the discount, and not the "standard" value
                of the file.
              </li>
            </ul>
          </div>

          <div className="w-w1168 mx-auto">
            <div className="hrLine w-[100%] bg-[#efefef]"></div>
            <p className="text-[38px] font-medium text-[#333333] text-center">
              Referral Program
            </p>
            <div className="flex gap-[30px] mt-3">
              <div className="w-[570px] h-[530px] bg-[#f5f5f7] rounded-2xl"></div>
              <div className=" flex justify-center">
                <div className="">
                  {earn.map((item) => {
                    return (
                      <div className="flex gap-[17px] w-[570px] py-[10px]">
                        <img src={item.img} alt="" />
                        <p>
                          <p className="text-[18px]">{item.title}</p>
                          <p className="text-[13px] text-[#757575] leading-[1.3]">
                            {item.description}
                          </p>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="hrLine w-[100%] bg-[#efefef]"></div>
            <p className="text-[38px] font-medium text-[#333333] text-center">
              How it works
            </p>
            <p className="text-[#757575] text-center text-[14px]">
              To become a Artnstock contributor, signup and submit images for
              reviewing. On approval, start uploading files to collections,{" "}
              <br /> add the right keywords and upload on the website.
            </p>
            <div className="flex gap-4 justify-center mt-[24px] mx-auto w-w1168">
              <div className="border border-[#EFEFEF] w-[280px] h-[280px] p-[50px] rounded-2xl">
                <div className="text-center">
                  <img src={ICreate} alt="" className="w-[72px] mx-auto" />
                  <div className="mt-4">
                    <p className="font-medium text-[18px]">Create</p>
                    <p className="text-[12px] text-[#757575]">
                      Produce exclusive Art, Photos, Footage, Music and
                      Templates for customers to buy
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-[#EFEFEF] w-[280px] h-[280px] p-[50px] rounded-2xl">
                <div className="text-center">
                  <img src={IUpload} alt="" className="w-[72px] mx-auto" />
                  <div className="mt-4">
                    <p className="font-medium text-[18px]">Submit</p>
                    <p className="text-[12px] text-[#757575]">
                      Synchronise your content with our easy-to-use platform,
                      and spike your success
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-[#EFEFEF] w-[280px] h-[280px] p-[50px] rounded-2xl">
                <div className="text-center">
                  <img src={IEarn} alt="" className="w-[72px] mx-auto" />
                  <div className="mt-4">
                    <p className="font-medium text-[18px]">Get Paid</p>
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
                    <p className="font-medium text-[18px]">Refer</p>
                    <p className="text-[12px] text-[#757575]">
                      Gain or earn on your referral of a Customer or Contributor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hrLine w-w1168 bg-[efefef]"></div>

          <ArtHomeFaq />
        </main>
      </div>
    </>
  );
};

export default SellOnArtnstock_Home;
