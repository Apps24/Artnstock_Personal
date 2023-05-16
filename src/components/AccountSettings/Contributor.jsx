import React from "react";
import { Tab } from "@headlessui/react";
import Contributor_Profile from "./Contributor_Profile";
import Contributor_Contact from "./Contributor_Contact";
import Contributor_ChangePassword from "./Contributor_ChangePassword";
import Contributor_PaymentInfo from "./Contributor_PaymentInfo";
import Contributor_SocialMedia from "./Contributor_SocialMedia";
import Contributor_Preferences from "./Contributor_Preferences";
import Contributor_DeleteAcc from "./Contributor_DeleteAcc";
import { useState } from "react";

const Contributor = () => {
  const [value, setValue] = useState("My Profile")
  return (
    <>
      <div className="wrapper flex justify-center">
        <main>
          <p className="text-[#757575] text-[12px] text-center mt-[30px] ">
            Artnstock / Account Settings / {value}
          </p>
          <p className="text-center text-[38px] text-[#333333] mt-1 mb-5 leading-[1.2]">
            Account Settings
          </p>

          <Tab.Group>
            <Tab.List className="flex gap-[4px] justify-center h-[28px] mb-[30px]">
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium "
                }
                onClick={()=> setValue("My Profile")}
              >
                My Profile
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={()=> setValue("Contact Information")}
              >
                Contact Information
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={()=> setValue("Change Password")}
              >
                Change Password
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={()=> setValue("Payment Information")}
              >
                Payment Information
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }

                onClick={()=> setValue("Social Media")}
              >
                Social Media
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={()=> setValue("Preferences")}
              >
                Preferences
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={()=> setValue("Delete Account")}
              >
                Delete Account
              </Tab>
            </Tab.List>
            <div className="w-[450px] mx-auto">
              <Tab.Panels>
                <Tab.Panel>
                  <Contributor_Profile />
                </Tab.Panel>
                <Tab.Panel>
                  <Contributor_Contact />
                </Tab.Panel>
                <Tab.Panel>
                  <Contributor_ChangePassword />
                </Tab.Panel>
                <Tab.Panel>
                  <Contributor_PaymentInfo />
                </Tab.Panel>
                <Tab.Panel>
                  <Contributor_SocialMedia />
                </Tab.Panel>
                <Tab.Panel>
                  <Contributor_Preferences />
                </Tab.Panel>
                <Tab.Panel>
                  <Contributor_DeleteAcc />
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </main>
      </div>
    </>
  );
};

export default Contributor;
