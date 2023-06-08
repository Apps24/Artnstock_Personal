import React from "react";
import leftBackImg from "../../assets/join/welcomeUser.jpg";
import wallpaper from "../../assets/join/joinImg.svg";
import Stepper from "../../components/others/Stepper";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const styles = {
  divClass:
    "w-full h-[100vh] flex justify-center",
};

const WelcomeUser = () => {
  const userDetails = useSelector((state) => state.userReg);

  return (
    <div className={`${userDetails.userType === "customer"? "bg-[#FFD133]" : "bg-[#6174FF]"} ${styles.divClass}`}>
      <div className="regCard flex">
        <div
          className="left flex-1 flex items-center justify-center  rounded-tl-[30px] rounded-bl-[30px]"
          style={{ backgroundImage: `url('${leftBackImg}')` }}
        >
          <img src={wallpaper} alt="" />
        </div>
        <div className="right flex-1 pl-[15px] pr-[20px] pt-[1.563rem]">
          <div className=" mb-4">
            <p className="text-sm11 text-placeholderColor font-medium mb-1">
              {userDetails.userType === "customer"
                ? "Customer Registration"
                : "Contributor Registration"}
            </p>
            {userDetails.userType === "customer" ? (
              <div className="flex">
                <Stepper tabNo="1" tabBgColor="#FF369F" tabColor="#333333" />
                <Stepper tabNo="2" tabBgColor="#FF7A6D" tabColor="#333333" />
                <Stepper tabNo="3" tabBgColor="#FFD133" tabColor="#333333" />
              </div>
            ) : (
              <div className="flex">
                <Stepper tabNo="1" tabBgColor="#FF369F" tabColor="#333333" />
                <Stepper tabNo="2" tabBgColor="#FF7A6D" tabColor="#333333" />
                <Stepper tabNo="3" tabBgColor="#FFD133" tabColor="#333333" />
                <Stepper tabNo="4" tabBgColor="#A4E154" tabColor="#333333" />
                <Stepper tabNo="5" tabBgColor="#36DEED" tabColor="#333333" />
                <Stepper tabNo="6" tabBgColor="#00D9C6" tabColor="#333333" />
                <Stepper tabNo="7" tabBgColor="#6174FF" tabColor="#333333" />
              </div>
            )}
          </div>
          <p className="text-sm18 text-primaryBlack mb-2.5">
            Lets cruise in...
          </p>
          <p className="text-sm12 text-primaryGray leading-[14px] my-2.5">
            Thank you for confirming your identity verification. <br />
            Your sign up is complete, Bon Voyage!!!
          </p>
          <p className="text-sm12 text-primaryGray leading-[14px] my-2.5">
            Start uploading your Art, Photos, Footage, Music or <br />
            Templates
          </p>

          <button className="bg-gradient-to-r from-[#E23C9C] via-[#F2D058] to-[#6EDDED] px-5 py-2.5 rounded-3xl text-sm14 text-primaryBlack font-medium my-[15px]">
            <Link to={userDetails.userType === "customer" ? "/" : "/upload-file"} >Go To Artnstock</Link>
          </button>
          <p className="text-orangeColor text-sm12 font-medium leading-[14px]">
            {" "}
            Go to your Dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeUser;
