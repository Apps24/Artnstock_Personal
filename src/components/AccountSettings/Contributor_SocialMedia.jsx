import React from "react";
import pro from "../../assets/images/accountSettings/pro.png";

const Contributor_SocialMedia = () => {
  return (
    <>
      <div className="flex justify-between mb-[30px]">
        <p>
          <p className="text-[25px] font-medium text-[#333333]">Social Media</p>
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

      <div className="">
        <p className="text-[12px] text-[#757575]">Twitter</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="@"
        />
        <p className="text-[12px] text-[#757575] mt-3">LinkedIn</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="http://linkedin.com/in/"
        />
        <p className="text-[12px] text-[#757575] mt-3">Facebook</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="http://facebook.com/"
        />
        <p className="text-[12px] text-[#757575] mt-3">Google+</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="http://plus.google.com/"
        />
        <p className="text-[12px] text-[#757575] mt-3">Pinterest</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="http://pinterest.com/"
        />
      </div>

      <div className="flex gap-5 justify-center mt-[30px]">
        <button className="blackBtn text-[14px] text-medium">Save</button>
        <button className=" text-[14px] text-medium border border-[#333333] rounded-full px-4 py-2">
          Cancel
        </button>
      </div>
    </>
  );
};

export default Contributor_SocialMedia;
