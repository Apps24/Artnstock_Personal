import React, { useEffect, useState } from "react";
import custIcon from "../../assets/join/Icon - Customer.svg";
import contIcon from "../../assets/join/Icon - Contributor.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegSliceAction } from "../../store/userRejSlice";
import { authSliceAction } from "../../store/authSlice";


const styles = {
  divClass:
    "text-center py-8 w-[13.125rem] border border-[#EFEFEF] hover:bg-[#EEEEEE] cursor-pointer",
};
const Join = () => {
  const navigate = useNavigate()
  const [userType, setUserType] = useState("customer");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authSliceAction.logoutUser())
    dispatch(userRegSliceAction.clearUserReg())
  },[])

  const changeType = (text) => {
    setUserType(text);
  };

  const nextPage = () => {
    dispatch(userRegSliceAction.setUserType(userType))
    // sessionStorage.setItem("userType", userType)
    navigate("/user-details")
  }
 
  return (
    <div className="w-full h-[100vh] bg-[#cccccc] flex justify-center">
      <div className="regCard flex flex-col items-center text-center py-7">
        <h1 className="text-heading text-primaryBlack">Join Artnstock</h1>

        {/* Middle Container */}
        <div className="flex mt-2.5 mb-5">
          <div
            onClick={() => changeType("customer")}
            className={` ${styles.divClass} ${
              userType === "customer"
                ? "bg-[#EEEEEE]  rounded-tl-3xl rounded-bl-3xl"
                : "bg-[#ffffff]  rounded-tl-3xl rounded-bl-3xl"
            }  `}
          >
            <img className="pb-1.5 mx-auto" src={custIcon} alt="" />
            <p className="text-primaryBlack text-[1.125rem] leading-[1.313rem] font-medium">
              Customer
            </p>
            <p className="text-primaryGray text-[0.688rem] leading-[0.813rem] font-normal">
              Browse the marketplace <br />
              and find your thing. Earn 20% off <br />
              on your first order.
            </p>
          </div>
          <div
            onClick={() => changeType("contributor")}
            className={`${styles.divClass} ${
              userType === "contributor"
                ? "bg-[#EEEEEE]  rounded-tr-3xl rounded-br-3xl"
                : "bg-[#ffffff] rounded-tr-3xl rounded-br-3xl"
            }`}
          >
            <img className="pb-1.5 mx-auto" src={contIcon} alt="" />
            <p className="text-primaryBlack text-[1.125rem] leading-[1.313rem] font-medium">
              Contributor
            </p>
            <p className="text-primaryGray text-[0.688rem] leading-[0.813rem] font-normal">
              Set up shop and start selling <br />
              your Art, Photos, Footage, Music <br />
              and Templates
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-sm11 text-primaryGray">
          Please carefully read our{" "}
          <span className="text-orangeColor">Terms of Service </span>,{" "}
          <span className="text-orangeColor">License Agreement</span>,{" "}
          <span className="text-orangeColor">Privacy Policy</span> and{" "}
          <span className="text-orangeColor">
            Copyright and Trademark Policy
          </span>
          . <br /> Before you may use the Services, you must agree to these
          Terms and Policies. By creating an account, publishing <br /> artwork,
          purchasing products, and otherwise using the Services, you agree to
          all of the terms, policies, agreements and <br /> procedures relating
          to the Services that we may publish from time to time.
        </p>

        {/* Btn */}
        <button onClick={nextPage} className="blackBtn my-3.5">Continue</button>

        {/* Bootom Text */}
        <p className="text-sm11 text-primaryGray">
          Sign up as Artnstock Customer for{" "}
          <span className="font-medium">20% off</span> your first order. <br />
          Your Promo Code will be emailed after sign up. <br />
          <span className="text-pinkColor">
            You will receive weekly updates on recently added collections
          </span>
          .
        </p>
        <p className="text-sm12 font-medium text-primaryBlack mt-3">Already have an account? <Link to="/login" className="text-orangeColor">SignIn</Link></p>
      </div>
    </div>
  );
};

export default Join;
