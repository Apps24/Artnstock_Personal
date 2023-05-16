import React from "react";
import pro from "../../assets/images/accountSettings/pro.png";

const Customer_DeleteAcc = () => {
  return (
    <>
      <div className="flex justify-between">
        <p>
          <p className="text-[25px] font-medium text-[#333333]">
            Delete Account
          </p>
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

      <div>
        <p className="text-[12px] text-[#333333] font-medium mt-[30px]">
          Before you delete your account, please note:
        </p>
        <ul
          className="text-[12px] text-[#757575] mb-9"
          style={{ listStyle: "disc" }}
        >
          <li className="mt-1">
            You don't need to deactivate your account just to change your
            display name, you can do this on your profile page.
          </li>
          <li className="mt-1">
            Any content and/or Studios that you do not delete prior to
            deactivation may still show up on Artnstock.
          </li>
          <li className="mt-1">
            We have no control over content indexed by search engines.
          </li>
          <li className="mt-1">
            If you plan on creating a new account and want to use the same user
            name, or email address associated with this account, you must first
            change them on this account before you deactivate it. If you don't,
            the information will be tied to this account and unavailable to use.
          </li>
          <li className="mt-1">
            Please be aware that this is a permanent action.
          </li>
          <li className="mt-1">We cannot restore cancelled accounts.</li>
        </ul>
        <p className="text-[#333333] text-[15px]">
          Please tell us why you are deactivating
        </p>
        <input
          type="text"
          name=""
          className="regInput mt-3 mb-[30px]"
          placeholder="Select the reason"
          id=""
        />
        <div className="flex justify-center">
          <button className="blackBtn">Delete My Account</button>
        </div>
      </div>
    </>
  );
};

export default Customer_DeleteAcc;
