import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { httpClient } from "../../axios";
import { userRegSliceAction } from "../../store/userRejSlice";

const UploadBtn = ({text, type, uploadsuccess, newFormData, selected}) => {
  const dispatch = useDispatch();
  const [fileUploaded, setFileUploaded] = useState(false);
  

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    selected(true)
    const files = acceptedFiles[0];
    // console.log(files);
    newFormData(files)
    let formData = new FormData();
    formData.append("file", files);
    // console.log(formData);
    // create variable to increase by 10 every second to simulate progress
    let progress = 0;
    // create interval to increase progress by 10 every second
    if(fileUploaded === false) {
    const interval = setInterval(() => {
      if(fileUploaded === false) {
      progress += 10;
      // set progress to state
      // setProgress(progress);
      // if progress is 100 clear interval
      // console.log(fileUploaded);
      uploadsuccess(progress)
      if (progress >= 75 && !fileUploaded) {
        clearInterval(interval);
        progress = 0;
      }
    }
    }, 1000);
  }
  
    httpClient
      .post("/bucket/push", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res);
        setFileUploaded(true)
        uploadsuccess(100)
        progress = 100
        // console.log("file uploaded successfully");
        if(type === "sign"){
          dispatch(userRegSliceAction.setSignUpload(res.data))
        }else {
          dispatch(userRegSliceAction.setAadharUpload(res.data))

        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <p
        style={{ width: "fit-content" }}
        className="bg-[#8E8E8E] text-[#ffffff] rounded-2xl text-sm12 font-medium leading-[17px] py-[6.5px] px-3 mt-4 mb-[5px]"
      >
        {text}
      </p>
    </div>
  );
};

export default UploadBtn;
