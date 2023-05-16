import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import AllHistory from "./PurchaseHistorySubComp/AllHistory";

const PurchaseHistory = () => {
  const [value, setValue] = useState("Show All");
  return (
    <>
      <div className="wrapper">
        <main>
          <Tab.Group>
            <Tab.List className="flex gap-[4px] justify-center h-[28px] mb-[30px]">
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium "
                }
                onClick={() => setValue("My Profile")}
              >
                Show All
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={() => setValue("Contact Information")}
              >
                Art
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={() => setValue("Change Password")}
              >
                Photos
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={() => setValue("Payment Information")}
              >
                Footage
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={() => setValue("Preferences")}
              >
                Music
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={() => setValue("Delete Account")}
              >
                Template
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "border-[#BBBBBB] bg-[#BBBBBB] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium outline-none"
                    : "border-[#EAEAEA] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium"
                }
                onClick={() => setValue("Delete Account")}
              >
                Products
              </Tab>
            </Tab.List>
            <div className=" mx-auto">
              <Tab.Panels>
                <Tab.Panel>
                  <AllHistory />
                </Tab.Panel>
                <Tab.Panel></Tab.Panel>
                <Tab.Panel></Tab.Panel>
                <Tab.Panel></Tab.Panel>
                <Tab.Panel></Tab.Panel>
                <Tab.Panel></Tab.Panel>
                <Tab.Panel></Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </main>
      </div>
    </>
  );
};

export default PurchaseHistory;
