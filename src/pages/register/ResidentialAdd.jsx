import { useFormik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import leftBackImg from "../../assets/join/resAdd.jpg";
import wallpaper from "../../assets/join/Wallpaper.svg";
import { addressSchema } from "../../schemas";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { httpClient } from "../../axios";
import { residentialAddressModel } from "../../models/allModel";
import Stepper from "../../components/others/Stepper";
import infoIcon from "../../assets/images/Icons/iIcon.svg";

const initialValues = {
  addressOne: "",
  addressTwo: "",
  country: "",
  city: "",
  zipCode: "",
  state: "",
  phNumber: "",
};

const ResidentialAdd = () => {
  const userType = useSelector((state) => state.userReg);
  let navigate = useNavigate();
  let location = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  // console.log(location);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: addressSchema,
      onSubmit: (values) => {
        updateAddress();
      },
    });

  const changeCheckBox = (event) => {
    setIsChecked(event.target.checked);
    if (!isChecked) {
      values.addressOne = location.state.addressOne;
      values.addressTwo = location.state.addressTwo;
      values.country = location.state.country;
      values.city = location.state.city;
      values.state = location.state.state;
      values.zipCode = location.state.zipCode;
      values.phNumber = location.state.phNumber;
    } else {
      values.addressOne = "";
      values.addressTwo = "";
      values.country = "";
      values.city = "";
      values.state = "";
      values.zipCode = "";
      values.phNumber = "";
    }
  };

  const updateAddress = () => {
    residentialAddressModel.userId = userType.userId;
    residentialAddressModel.residentialAddress.addressLine1 = values.addressOne;
    residentialAddressModel.residentialAddress.addressLine2 = values.addressTwo;
    residentialAddressModel.residentialAddress.cityName = values.city;
    residentialAddressModel.residentialAddress.countryName = values.country;
    residentialAddressModel.residentialAddress.phoneNo = values.phNumber;
    residentialAddressModel.residentialAddress.stateName = values.state;
    residentialAddressModel.residentialAddress.zipCode = values.zipCode;
    // console.log(residentialAddressModel); 
    httpClient
      .put("/user_master/updateResidentialAddress", residentialAddressModel)
      .then((res) => {
        // console.log(res);
        if (res.data) {
          toast("Successfully Added");
          navigate("/verify-Email");
        } else {
          toast("Something went wrong");
        }
      });
  };
  return (
    <div className="w-full h-[100vh] bg-[#FFD133] flex justify-center">
      <div className="regCard flex">
        <div
          className="left flex-1 flex items-center justify-center rounded-tl-[30px] rounded-bl-[30px]"
          style={{ backgroundImage: `url('${leftBackImg}')` }}
        >
          <img src={wallpaper} alt="" />
        </div>
        <div className="right flex-1 pl-[15px] pr-[20px] pt-[1.563rem]">
          {/* Stepper */}
          <div className=" mb-4">
            <p className="text-sm11 text-placeholderColor font-medium mb-1">
              {userType.userType === "customer"
                ? "Customer Registration"
                : "Contributor Registration"}
            </p>
            {userType.userType === "customer" ? (
              <div className="flex">
                <Stepper tabNo="1" tabBgColor="#BBBBBB" tabColor="#333333" />
                <Stepper tabNo="2" tabBgColor="#eeeeee" tabColor="#757575" />
                <Stepper tabNo="3" tabBgColor="#eeeeee" tabColor="#757575" />
              </div>
            ) : (
              <div className="flex">
                <Stepper tabNo="1" tabBgColor="#FF369F" tabColor="#333333" />
                <Stepper tabNo="2" tabBgColor="#FF7A6D" tabColor="#333333" />
                <Stepper tabNo="3" tabBgColor="#BBBBBB" tabColor="#333333" />
                <Stepper tabNo="4" tabBgColor="#eeeeee" tabColor="#757575" />
                <Stepper tabNo="5" tabBgColor="#eeeeee" tabColor="#757575" />
                <Stepper tabNo="6" tabBgColor="#eeeeee" tabColor="#757575" />
                <Stepper tabNo="7" tabBgColor="#eeeeee" tabColor="#757575" />
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-0.5 flex items-center">
              <p className="regHeading mr-1">Enter Your Residential Address</p>
              <img src={infoIcon} alt="" />
            </div>
            <p className="text-sm11 leading-[0.688rem] text-pinkColor">
              All fields are required.
            </p>
            <div className="mt-3">
              <input
                className="float-left mr-1"
                type="checkbox"
                value={isChecked}
                onChange={changeCheckBox}
                // defaultChecked="true"
                // disabled
              />
              <p className="text-sm11 text-primaryGray">
                My Mailing and residential addresses are the same.
              </p>
            </div>
            <input
              className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
              placeholder="Address Line 1"
              type="text"
              name="addressOne"
              autoComplete="off"
              value={values.addressOne}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
              placeholder="Address Line 2"
              type="text"
              name="addressTwo"
              autoComplete="off"
              value={values.addressTwo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="flex gap-[10px]">
              <input
                className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
                placeholder="Select Country"
                type="text"
                name="country"
                autoComplete="off"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
                placeholder="City"
                type="text"
                name="city"
                autoComplete="off"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex gap-[10px]">
              <input
                className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
                placeholder="Zip/Postal Code"
                type="text"
                name="zipCode"
                autoComplete="off"
                value={values.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
                placeholder="State/Province"
                type="text"
                name="state"
                autoComplete="off"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <input
              className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
              placeholder="Phone Number"
              type="text"
              name="phNumber"
              autoComplete="off"
              value={values.phNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <button type="submit" className="blackBtn mt-[0.938rem]">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResidentialAdd;
