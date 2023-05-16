import React from "react";
import pro from "../../assets/images/accountSettings/pro.png";
import profile from "../../assets/images/accountSettings/profile.png";
import IconInfo from "../../assets/images/accountSettings/IconInfo.png";
import coverImg from "../../assets/images/accountSettings/coverImg.png";

const Contributor_Profile = () => {
  return (
    <>
      <div className="flex justify-between">
        <p>
          <p className="text-[25px] font-medium text-[#333333]">My Profile</p>
          <p className="text-[11px] text-[#f95d99]">All fields are required.</p>
        </p>
        <p>
          <div className="border border-[#757575] rounded-lg p-1">
            <img src={pro} alt="" />
            <p className="text-[11px] text-[#757575]">
              Member since 5 July 2020
            </p>
          </div>
        </p>
      </div>

      <div className="mb-10">
        <div className="flex gap-2 mt-[30px]">
          <img src={profile} alt="" />
          <p className="flex items-center">
            <p>
              <button
                className="blackBtn py-2 px-4 bg-[#8e8e8e] text-[#ffffff] font-medium text-[12px]"
                disabled
              >
                Upload Profile Photo
              </button>
              <img src={IconInfo} className="inline ml-1" alt="" />
              <p className="text-[#757575] text-[11px] mt-1">
                <span className="font-medium">Colour Mode:</span> RGB{" "}
                <span className="font-medium">Format:</span> JPEG
              </p>
              <p className="text-[#757575] text-[11px]">
                <span className="font-medium">Dimensions:</span> 500x500 pixels{" "}
                <span className="font-medium">File Size:</span> Under 5 MB
              </p>
              <p className="text-[#757575] text-[12px] font-medium mt-3">
                75% Profile Strength
              </p>
              <div className="w-full h-[8px] bg-[#d6d6d6] rounded-full">
                <div className="w-[75%] h-[8px] bg-[#01e6e6] rounded-full"></div>
              </div>
            </p>
          </p>
        </div>
        <p className="text-[12px] text-[#757575] mt-3">User ID</p>
        <input
          type="text"
          className="regInput my-0 bg-[#eeeeee] text-[#333333]"
          placeholder="ANS98765432"
        />
        <p className="text-[12px] text-[#757575] mt-3">
          Display Name (Name you want people to see)
        </p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Azra Creations"
        />
        <p className="text-[12px] text-[#757575] mt-3">Contributor Type</p>
        <input
          type="text"
          className="regInput my-0  text-[#333333]"
          placeholder="Select Contributor Type"
        />
        <p className="text-[12px] text-[#757575] mt-3">
          Profession/Specialization/Skills
        </p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Enter your Profession/Specialization/Skill"
        />
        <p className="text-[12px] text-[#757575] mt-3">Style</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Select Styles"
        />
        <p className="text-[12px] text-[#757575] mt-3">Subject</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Select Subjects"
        />
        <p className="text-[12px] text-[#757575] mt-3">Equipment</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Equipments used for Art/Photos/Footage/Music"
        />
        <p className="text-[12px] text-[#757575] mt-3">
          Store/Portfolio URl (Your Store/Portfolio URl can only be changed
          once.)
        </p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="http://www.artnstock.com/ azracreations"
        />
        <p className="text-[12px] text-[#757575] mt-3">About me </p>
        <textarea
          name=""
          id=""
          cols=""
          rows=""
          className="border border-[#d6d6d6] w-[100%] rounded-2xl resize-none h-[110px] p-2 outline-none text-[#333333]"
        ></textarea>
        <p className="text-[12px] text-[#757575] mt-3">Cover Image </p>
        <img src={coverImg} alt="" />

        <button className="blackBtn bg-[#8e8e8e] text-[#ffffff] text-[12px] px-3 mt-[10px] py-2">
          Upload Cover Image
        </button>

        <div className="text-[#757575] text-[11px] mt-1">
          <span className="font-medium">Colour Mode:</span> RGB{" "}
          <span className="font-medium">Format:</span> JPEG
        </div>
        <div className="text-[#757575] text-[11px] mb-[30px]">
          <span className="font-medium">Dimensions:</span> 500x500 pixels{" "}
          <span className="font-medium">File Size:</span> Under 5 MB
        </div>

        <div className="flex gap-5 justify-center mt-[30px] mb-[40px]">
          <button className="blackBtn text-[14px] text-medium">Save</button>
          <button className=" text-[14px] text-medium border border-[#333333] rounded-full px-4 py-2">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Contributor_Profile;
