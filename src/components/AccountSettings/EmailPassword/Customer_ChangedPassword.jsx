import React from "react";
import logo from "../../../assets/images/accountSettings/artnstock.png";
import fb from "../../../assets/images/accountSettings/fb.png";
import twitter from "../../../assets/images/accountSettings/twitter.png";
import linkedin from "../../../assets/images/accountSettings/linkedin.png";
import insta from "../../../assets/images/accountSettings/insta.png";

const Customer_ChangedPassword = () => {
  return (
    <>
      <div className="wrapper w-[600px] h-[544px] shadow-dropShadow mx-auto rounded-[16px]">
        <div className="p-5">
          <img src={logo} className="mx-auto " alt="" />
          <p className="text-[25px] text-[#333333] text-center mt-5">
            Your Artnstock Account
          </p>
          <div className="mt-[27px] mb-[30px]">
            <p className="text-[12px] text-[#757575]">Dear Khalid,</p>
            <p className="text-[12px] text-[#757575] mt-5">
              The Password for the username ksgrafiks2012 was recently changed. <br />
              If you did not make these changes, please contact Artnstock
              Support immediately <br /> at{" "}
              <span className="text-[#f59331]">support@artnstock.com</span>.
            </p>
            <p className="text-[12px] text-[#757575] mt-5">
              Thank you for using Artnstock.
            </p>
            <p className="text-[12px] text-[#757575] mt-5">
              Regards, <br />
              Artnstock Support
            </p>
          </div>
        </div>
        <div className="w-full rounded-b-[16px] py-4 bg-lightGray">
          <div className="flex gap-5 justify-center">
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={insta} alt="" />
          </div>

          <div className="text-[11px] text-[#757575] mt-3 px-4">
            <p className="leading-[1.2] text-center">
              This message was sent to{" "}
              <span className="text-[#f59331]">ksgrafiks@gmail.com</span>.{" "}
              <br />
              Please do not reply to this message. It was sent from an
              unattended mailbox. <br /> If you want to unsubscribe or manage
              your preferences,{" "}
              <span className="text-[#f59331]">please click here</span>.
            </p>
           <div className="hrLine my-3"></div>
            <p className="leading-[1] text-justify">
            All content on Artnstock website, including but not limited to Images, Footage, Music, and related metadata (collectively the "Artnstock Content"), as well as the selection and arrangement of the Artnstock Content, are protected by copyright, trademark, patent, trade secret and other intellectual property laws and treaties. Any unauthorized use of any Artnstock Content violates such laws and this Terms of Use. Except as expressly provided herein or in a separate license agreement between you and Artnstock, Artnstock does not grant any express or implied permission to use the Site or any Artnstock Content. You agree not to copy, republish, frame, link to, download, transmit, modify, adapt, create derivative works based on, rent, lease, loan, sell, assign, distribute, display, perform, license, sublicense or reverse engineer the Site or any Artnstock Content. In addition, you agree not to use any data mining, robots or similar data and/or image gathering and extraction methods in connection with the Site or Artnstock Content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer_ChangedPassword;
