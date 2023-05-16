import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import pro from "../../assets/images/accountSettings/pro.png";

const Contributor_Preferences = () => {
  const [enabled, setEnabled] = useState(true);
  const [enabled1, setEnabled1] = useState(true);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(false);
  const [enabled4, setEnabled4] = useState(false);

  
  return (
    <>
      <div className="flex justify-between">
        <p>
          <p className="text-[25px] font-medium text-[#333333]">Preferences</p>
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

      <div className="mt-[30px]">
        <p className="text-[#333333] text-[15px]">Email Preferences</p>
        <p className="mt-2 text-[11px] text-[#757575] leading-[0]">
          What type of communication would you like to receive from Artnstock?
        </p>

        <div className="text-[13px] mt-[15px] text-[#757575]">
          <div className="border-t-[1px] flex justify-between py-3 border-[#d6d6d6]">
            <span>
              Design inspiration, tutorials, and professionally curated content
            </span>

            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[25px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-6" : "translate-x-0.5"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-[#333333] shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>
          <p className="border-t-[1px] flex justify-between py-3 border-[#d6d6d6]">
            <span>Special offers and amazing deals</span>
            <span>
              <Switch
                checked={enabled1}
                onChange={setEnabled1}
                className={`${enabled1 ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[25px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled1 ? "translate-x-6" : "translate-x-0.5"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-[#333333] shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </span>
          </p>
          <p className="border-t-[1px] flex justify-between py-3 border-[#d6d6d6]">
            <span>Product education and update</span>
            <span>
              <Switch
                checked={enabled2}
                onChange={setEnabled2}
                className={`${enabled2 ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[25px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled2 ? "translate-x-6" : "translate-x-0.5"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-[#333333] shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </span>
          </p>
          <p className="border-t-[1px] flex justify-between py-3 border-[#d6d6d6]">
            <span>Mature content</span>
            <span>
              <Switch
                checked={enabled3}
                onChange={setEnabled3}
                className={`${enabled3 ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[25px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled3 ? "translate-x-6" : "translate-x-0.5"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-[#333333] shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </span>
          </p>
          <p className="border-y-[1px] flex justify-between py-3 border-[#d6d6d6]">
            <span>Show content marked as mature</span>
            <span>
              <Switch
                checked={enabled4}
                onChange={setEnabled4}
                className={`${enabled4 ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[25px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled4 ? "translate-x-6" : "translate-x-0.5"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-[#333333] shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </span>
          </p>
        </div>

        <p className="mt-[30px] text-[15px] text-[#333333]">
          Language Preferences
        </p>
        <p className="text-[12px] text-[#757575] leading-[0] mb-1 mt-3">
          Select your Language
        </p>
        <input
          type="text"
          name=""
          className="regInput text-[#333333]"
          placeholder="Select Language"
          id=""
        />
        <p className="text-[12px] text-[#757575]">
          This language will be used for emails you receive from us and browsing
          our site.
        </p>
      </div>

      <div className="flex gap-5 justify-center mt-[30px] mb-[40px]">
        <button className="blackBtn text-[14px] text-medium">Save</button>
        <button className=" text-[14px] text-medium border border-[#333333] rounded-full px-4 py-2">
          Cancel
        </button>
      </div>
    </>
  );
};

export default Contributor_Preferences;
