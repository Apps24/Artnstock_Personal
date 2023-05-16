import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import leftBackImg from "../../assets/join/UploadDoc.jpg";
import wallpaper from "../../assets/join/Wallpaper.svg";
import Stepper from "../../components/others/Stepper";
import UploadBtn from "../../components/others/UploadBtn";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import eyeIcon from "../../assets/images/Icons/eyeIcon.svg";
import deleteIcon from "../../assets/images/Icons/deleteIcon.svg";

const UploadDocuments = () => {
  const dispatch = useDispatch();
  // const userDetails = useSelector((state) => state.userReg);
  let navigate = useNavigate();
  const [uploadBtn, setUploadBtn] = useState(0);
  const [fileData, setFileData] = useState({});
  const [selectedVal, setSelectedVal] = useState(false);

  // console.log(userDetails);

  const nextPage = () => {
    navigate("/upload-sign");
  };

  const uploadsuccess = (val) => {
    // console.log(val);
    setUploadBtn(val);
  };

  const getFormData = (val) => {
    // console.log(val);
    setFileData(val);
  };

  const selected = (val) => {
    // console.log(val);
    setSelectedVal(val);
  };

  return (
    <div className="w-full h-[100vh] bg-[#36DEED] flex justify-center">
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
              <p className="text-sm11 text-placeholderColor font-medium mb-1">
                Contributor Registration
              </p>
            </p>

            <div className="flex">
              <Stepper tabNo="1" tabBgColor="#FF369F" tabColor="#333333" />
              <Stepper tabNo="2" tabBgColor="#FF7A6D" tabColor="#333333" />
              <Stepper tabNo="3" tabBgColor="#FFD133" tabColor="#333333" />
              <Stepper tabNo="4" tabBgColor="#A4E154" tabColor="#333333" />
              <Stepper tabNo="5" tabBgColor="#BBBBBB" tabColor="#333333" />
              <Stepper tabNo="6" tabBgColor="#eeeeee" tabColor="#757575" />
              <Stepper tabNo="7" tabBgColor="#eeeeee" tabColor="#757575" />
            </div>
          </div>

          <form action="">
            <p className="regHeading mb-[10px]">
              Upload Government Issued <br />
              Identification
            </p>
            <p className="text-sm12 leading-[14.68px] text-primaryGray">
              Before submit content, we need to verify your identity. <br />
              Please add a full size image of your passport, driver’s <br />
              license, or state identification.{" "}
              <span className="text-orangeColor">Learn more</span>
            </p>
            <UploadBtn
              selected={selected}
              uploadsuccess={uploadsuccess}
              newFormData={getFormData}
              text="Upload Id"
              type="id"
            />

            {selectedVal && (
              <div className="border-t border-b border-[#EFEFEF] py-2 mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-primaryBlack text-sm12 font-medium">
                    {fileData?.name.substring(0, 30)} (
                    {(fileData?.size * 0.000125).toFixed(2)}KB)
                  </p>
                  {uploadBtn >= 100 && (
                    <div className="flex">
                      <img src={eyeIcon} className="mr-2" alt="" />
                      <img src={deleteIcon} alt="" />
                    </div>
                  )}
                </div>
                {uploadBtn >= 100 ? (
                  ""
                ) : (
                  <div>
                    {" "}
                    <ProgressBar
                      completed={uploadBtn}
                      bgColor="#1b9a89"
                      height="5px"
                      isLabelVisible={false}
                      baseBgColor="#EEEEEE"
                      labelColor="#e80909"
                      className="my-1"
                      maxCompleted={100}
                    />
                    <div className="flex justify-between">
                      <p className="text-primaryGray text-sm11 font-normal">
                        Uploading 0 of {(fileData?.size * 0.000125).toFixed(2)}
                        KB
                      </p>
                      <p className="text-primaryGray text-sm11 font-normal">
                        100%
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            <p className="text-sm11 text-primaryGray mt-1">
              <span className="font-medium">Accepted Files:</span> JPEG, TIFF,
              or PDF <br />
              <span className="font-medium">File Size:</span> 500 KB (Maximum)
            </p>
            <div className="border border-solid border-[#D6D6D6] text-[14px] text-[#BBBBBB] font-normal py-3 pl-4 pr-9 rounded-3xl mt-5 mb-4">
              <span className="font-medium">Document Type</span> (Example:
              Aadhaar Card)
            </div>
            <button
              className="blackBtn disabled:bg-[#eeeeee] mb-[50px]"
              onClick={nextPage}
              disabled={uploadBtn < 100}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
