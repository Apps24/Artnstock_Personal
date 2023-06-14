import React, { useState } from "react";
import leftBackImg from "../../assets/join/customerDetails.jpg";
import wallpaper from "../../assets/join/Wallpaper.svg";
import Tooltip from "../../components/others/Tooltip";
import infoIcon from "../../assets/images/Icons/iIcon.svg";
import Stepper from "../../components/others/Stepper";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import errorIcon from "../../assets/join/Icon_Error.svg";
import successIcon from "../../assets/join/Icon_true.svg";
import { useDispatch, useSelector } from "react-redux";
import { httpClient } from "../../axios";
import { userModel } from "../../models/allModel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userRegSliceAction } from "../../store/userRejSlice";
import Popup from "reactjs-popup";
import Alert from "../../components/others/Alert";

const initialValues = {
  fName: "",
  lName: "",
  dName: "",
  email: "",
  password: "",
};

const UserDetails = () => {
  const [alertToggle, setAlertToggle] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        // console.log(values);
        createUser();
      },
    });
  const dispatch = useDispatch();

  const userType = useSelector((state) => state.userReg);

  let navigate = useNavigate();
  // console.log(userType);

  const createUser = () => {
    // setAlertToggle(true);
    userModel.userFirstName = values.fName;
    userModel.userLastName = values.lName;
    userModel.displayName = values.dName;
    userModel.emailAddress = values.email;
    userModel.password = values.password;
    userModel.userRole.push(userType.userType);
    
    httpClient.post("/user_master/save", userModel)
    .then((res) => {
      console.log(res);
      if (res.data.flag === true) {
        toast("Successfully Added");
        userType.userType === "customer"
          ? navigate("/verify-Email")
          : navigate("/mailing-address");
        dispatch(userRegSliceAction.setUserId(res.data.id));
        dispatch(userRegSliceAction.setUserEmail(values.email));
      } else {
        toast("Something went wrong");
      }
    });
  };

  const changeState = () => {
    setAlertToggle(false);
  };

  // console.log(Formik);
  return (
    <div className="w-full h-[100vh] bg-[#FF369F] flex justify-center">
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
                <Stepper tabNo="1" tabBgColor="#BBBBBB" tabColor="#333333" />
                <Stepper tabNo="2" tabBgColor="#eeeeee" tabColor="#757575" />
                <Stepper tabNo="3" tabBgColor="#eeeeee" tabColor="#757575" />
                <Stepper tabNo="4" tabBgColor="#eeeeee" tabColor="#757575" />
                <Stepper tabNo="5" tabBgColor="#eeeeee" tabColor="#757575" />
                <Stepper tabNo="6" tabBgColor="#eeeeee" tabColor="#757575" />
                <Stepper tabNo="7" tabBgColor="#eeeeee" tabColor="#757575" />
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <p className="regHeading mb-0.5">Enter Your Personal Details</p>
            <p className="text-sm11 leading-[0.688rem] text-pinkColor">
              All fields are required.
            </p>
            <div className="relative">
              <input
                className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
                placeholder="First Name"
                type="text"
                name="fName"
                autoComplete="off"
                value={values.fName}
                onChange={handleChange}
                onBlur={handleBlur}
               autoFocus
              />

              {touched.fName ? (
                errors.fName ? (
                  <img
                    className="absolute right-2.5 top-6"
                    src={errorIcon}
                    alt="Error"
                  />
                ) : (
                  <img
                    className="absolute right-2.5 top-6"
                    src={successIcon}
                    alt="Success"
                  />
                )
              ) : null}
            </div>
            <div className="relative">
              <input
                className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
                placeholder="Last Name"
                type="text"
                name="lName"
                autoComplete="off"
                value={values.lName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.lName ? (
                errors.lName ? (
                  <img
                    className="absolute right-2.5 top-6"
                    src={errorIcon}
                    alt="Error"
                  />
                ) : (
                  <img
                    className="absolute right-2.5 top-6"
                    src={successIcon}
                    alt="Success"
                  />
                )
              ) : null}
            </div>
            <div className="relative">
              <input
                className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
                placeholder="Display Name"
                type="text"
                name="dName"
                autoComplete="off"
                value={values.dName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.dName ? (
                errors.dName ? (
                  <img
                    className="absolute right-8 top-6"
                    src={errorIcon}
                    alt="Error"
                  />
                ) : (
                  <img
                    className="absolute right-8 top-6"
                    src={successIcon}
                    alt="Success"
                  />
                )
              ) : null}
              <Popup
                trigger={
                  <img
                    className="absolute right-2.5 top-6"
                    src={infoIcon}
                    alt=""
                  />
                }
                position="top center"
                on={["hover", "focus"]}
              >
                <span className="text-primaryGray text-sm11 leading-0">
                  The name customers will see <br />
                  associated with your content. <br />
                  This will also be your name in the <br />
                  customer/contributor reviews.{" "}
                </span>
              </Popup>
            </div>
            <div className="relative">
              <input
                className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
                placeholder="Email Address (Your Username)"
                type="email"
                name="email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email ? (
                errors.email ? (
                  <img
                    className="absolute right-8 top-6"
                    src={errorIcon}
                    alt="Error"
                  />
                ) : (
                  <img
                    className="absolute right-8 top-6"
                    src={successIcon}
                    alt="Success"
                  />
                )
              ) : null}
              <img className="absolute right-2.5 top-6" src={infoIcon} alt="" />
            </div>

            <div className="relative">
              <input
                className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
                placeholder="Password"
                type="password"
                name="password"
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password ? (
                errors.password ? (
                  <img
                    className="absolute right-8 top-6"
                    src={errorIcon}
                    alt="Error"
                  />
                ) : (
                  <img
                    className="absolute right-8 top-6"
                    src={successIcon}
                    alt="Success"
                  />
                )
              ) : null}
              <img className="absolute right-2.5 top-6" src={infoIcon} alt="" />
            </div>
            <button onClick={() => setAlertToggle(true)} type="submit" className="blackBtn mt-[0.938rem]">
              Next
            </button>
          </form>
          <Alert type="success" message={"Appps"} title={"Error"} toggle={alertToggle} change={changeState} time={5000}  />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
