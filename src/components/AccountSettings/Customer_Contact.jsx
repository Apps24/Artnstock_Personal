import React from "react";
import pro from "../../assets/images/accountSettings/pro.png";
import IconQue from "../../assets/images/accountSettings/IconQue.png";

const Customer_Contact = () => {
  return (
    <>
      <div className="flex justify-between">
        <p>
          <p className="text-[25px] font-medium text-[#333333]">
            Contact Information
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

      <div className="my-[30px]">
        <p className="text-[15px] text-[#333333]">Personal Details</p>
        <p className="text-[12px] text-[#757575] mt-3">First Name</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Azra "
        />
        <p className="text-[12px] text-[#757575] mt-3">Last Name</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Shaikh"
        />
        <p className="text-[12px] text-[#757575] mt-3">Email Address</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="ksgrafiks2012@gmail.com"
        />
        <button className="blackBtn py-2 px-3 mt-[10px] bg-[#8e8e8e] text-[#ffffff] font-medium text-[12px]">
          Change Email Address
        </button>
        <p className="text-[11px] mt-1 text-[#757575] flex gap-2">
          Status: <button className="text-[#f95d99]">Unconfirmed</button>
          <button className="text-[#f7941d]">Resend Confirmation Email</button>
        </p>

        <p className="text-[15px] mt-[30px] text-[#333333]">
          Shipping Address <img src={IconQue} className="inline" alt="" />
        </p>
        <p className="text-[12px] text-[#757575] mt-[10px]">Location</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="India"
        />
        <p className="text-[12px] text-[#757575] mt-3">Address line 1</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="S. No. 203/2A, Plot 16A, Rajiv Nagar (South),"
        />
        <p className="text-[12px] text-[#757575] mt-3">Address line 2</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Viman Nagar,"
        />
        <p className="text-[12px] text-[#757575] mt-3">City</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Pune"
        />
        <div className="flex gap-5">
          <div>
            <p className="text-[12px] text-[#757575] mt-3">Zip/Postal Code</p>
            <input
              type="text"
              className="regInput my-0 text-[#333333]"
              placeholder="411014"
            />
          </div>
          <div>
            <p className="text-[12px] text-[#757575] mt-3">State/Province</p>
            <input
              type="text"
              className="regInput my-0 text-[#333333]"
              placeholder="Maharashtra"
            />
          </div>
        </div>
        <p className="text-[12px] text-[#757575] mt-3">Phone</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333] bg-[#eeeeee]"
          placeholder="+91 7378666093"
        />

        <p className="text-[15px] mt-[30px] text-[#333333]">
          Residential Address <img src={IconQue} className="inline" alt="" />
        </p>
        <p className="text-[11px] text-[#757575] mt-[10px]">
          <input type="checkbox" className="mr-[8px]" name="" id="" /> My
          shipping and residential address are the same.
        </p>
        <p className="text-[12px] text-[#757575] mt-[10px]">Location</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="India"
        />
        <p className="text-[12px] text-[#757575] mt-3">Address line 1</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="S. No. 203/2A, Plot 16A, Rajiv Nagar (South),"
        />
        <p className="text-[12px] text-[#757575] mt-3">Address line 2</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Viman Nagar,"
        />
        <p className="text-[12px] text-[#757575] mt-3">City</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333]"
          placeholder="Pune"
        />
        <div className="flex gap-5">
          <div>
            <p className="text-[12px] text-[#757575] mt-3">Zip/Postal Code</p>
            <input
              type="text"
              className="regInput my-0 text-[#333333]"
              placeholder="411014"
            />
          </div>
          <div>
            <p className="text-[12px] text-[#757575] mt-3">State/Province</p>
            <input
              type="text"
              className="regInput my-0 text-[#333333]"
              placeholder="Maharashtra"
            />
          </div>
        </div>
        <p className="text-[12px] text-[#757575] mt-3">Phone</p>
        <input
          type="text"
          className="regInput my-0 text-[#333333] bg-[#eeeeee]"
          placeholder="+91 7378666093"
        />

        <div className="flex gap-5 justify-center mt-[30px]">
          <button className="blackBtn text-[14px] text-medium">Save</button>
          <button className=" text-[14px] text-medium border border-[#333333] rounded-full px-4 py-2">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Customer_Contact;
