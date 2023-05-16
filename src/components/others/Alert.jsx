import React, { useEffect, useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Alert = ({ type, title, message, toggle, change, time }) => {
    const [toggleBox, setToggleBox] = useState();

    useEffect(() => {
        setToggleBox(toggle);
    }, [toggle]);

  useEffect(() => {
    setTimeout(() => {
      setToggleBox(false);
      change(false);
    }, time);
  }, [toggleBox]);

  return (
    <>
      {toggleBox && (
        <div className="absolute z-50 top-[50%] left-[48%] translate-x-[-50%] translate-y-[-50%] bg-[#ffffff] p-5 rounded-2xl shadow-regCardShadow text-center">
          {type === "error" ? (
            <ErrorOutlineIcon
              className="text-[#ff0000] "
              sx={{ fontSize: 40 }}
            />
          ) : (
            <CheckCircleOutlineIcon color="success" sx={{ fontSize: 40 }} />
          )}
          <p className="regHeading mt-1.5 font-medium">{title}</p>
          <p className="text-sm11 leading-[0.688rem] text-primaryGray font-medium">
            {message}
          </p>
        </div>
      )}
    </>
  );
};

export default Alert;
