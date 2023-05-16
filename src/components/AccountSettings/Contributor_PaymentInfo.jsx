import React from "react";
import pro from "../../assets/images/accountSettings/pro.png";
import payment from "../../assets/images/accountSettings/payment.png";

const Contributor_PaymentInfo = () => {
  return (
    <>
      <div className="flex justify-between">
        <p>
          <p className="text-[25px] font-medium text-[#333333]">
            Payment Information
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
        <p className="mt-[30px] text-[12px] text-[#757575]">
          Payment Method (Credit/Debit Cards)
        </p>
        <div className="w-full h-[236px] border rounded-2xl flex justify-center items-center text-center border-[#d6d6d6]">
          <div>
            <p className="text-[#ff369f] text-[18px] leading-[1.2]">
              No Payment Methods on File
            </p>
            <p className="text-[11px] text-[#757575]">
              Payment methods you add will appear here.
            </p>
            <p>
              <button className="text-[12px] text-[#333333] bg-[#00f9c6] px-3 py-2 rounded-full mt-3 mb-5">
                Add Card
              </button>
            </p>
            <p>
              <img src={payment} className="mx-auto" alt="" />
            </p>
          </div>
        </div>
        <button className="blackBtn bg-[#8e8e8e] mt-3">
          Remove Payment Method
        </button>
        <p className="mt-[30px]">Payment Details for Referral Earnings</p>
        <p className="text-[12px] text-[#757575] leading-[0] mb-1 mt-4">
          Make Payment to
        </p>
        <input
          type="text"
          name=""
          className="regInput text-[#333333]"
          placeholder="Enter Payee Name"
          id=""
        />
        <p className="text-[12px] text-[#757575] leading-[0] mb-1 mt-3">
          Payment Method
        </p>
        <input
          type="text"
          name=""
          className="regInput text-[#333333]"
          placeholder="None Selected"
          id=""
        />
        <p className="text-[12px] text-[#757575] leading-[0] mb-1 mt-3">
          Payout Email
        </p>
        <input
          type="text"
          name=""
          className="regInput text-[#333333]"
          placeholder="Enter Payee Email"
          id=""
        />
        <p className="text-[12px] text-[#757575] leading-[0] mb-1 mt-3">
          Minimum Payout
        </p>
        <input
          type="number"
          name=""
          className="regInput text-[#333333]"
          placeholder="$50"
          id=""
        />
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

export default Contributor_PaymentInfo;
