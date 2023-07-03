import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import captcha from "../../../assets/recaptcha.jpg";
// import { httpClient } from "../../../axios";
// import { authSliceAction } from "../../../store/authSlice";
// import { toast } from 'react-toastify';


const HomeJoin = ({ mainBackgroundImg, leftBackgroundImg, leftTextImg }) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const loginForm = {
  //   userName: '',
  //   password: '',
  // };

  // const login = () => {
  //   if (email.length > 0 && password.length > 0) {
  //     loginForm.userName = email;
  //     loginForm.password = password;
  //     console.log(loginForm);
  //     httpClient
  //       .post('/user_master/userLogin', loginForm)
  //       .then((res) => {
  //         // console.log(res.data);
  //         if (res.data.responseCode === 200) {
  //           toast.success('Successfully Logged In');
  //           dispatch(authSliceAction.loginUser(true));
  //           dispatch(
  //             authSliceAction.setUserRole(res.data.userRole[0])
  //           );
  //           dispatch(authSliceAction.setUserId(res.data.userId));
  //           navigate('/');
  //         } else {
  //           toast.error(res.data.message);
  //         }
  //       });
  //   } else {
  //     toast.error('Please enter email and password');
  //   }
  // };

  return (
    <div
      style={{ backgroundImage: `url('${mainBackgroundImg}')` }}
      className='h-[500px] flex justify-center items-center flex-col'
    >
      {/* <div className="w-[690px] h-[388px] flex bg-[#ffffff] rounded-[30px] overflow-hidden">
        <div
          className="flex-1 flex items-center justify-center"
          style={{
            backgroundImage: `url('${leftBackgroundImg}')`,
            height: "inherit",
          }}
        >
          <img src={leftTextImg} alt="" />
        </div>
        <div className="flex-1 py-6 px-5">
          <p className="text-sm18 text-primaryBlack font-semibold">
            Already have an account? Signin
          </p>
          <input
            className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
            placeholder="User Name (Email Address)"
          
            type='email'
          name='email'
          autoComplete='off'
          onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]"
            placeholder="Password"
            type='password'
            name='password'
            autoComplete='off'
            onChange={(e) => setPassword(e.target.value)}
          />
          <img className="mx-auto my-2.5" src={captcha} alt="" />
          <button onClick={login} className="blackBtn mb-1">Sign In</button>
          <p className="text-orangeColor text-sm11">Forgot Password?</p>
          <p className="text-primaryBlack font-semibold text-[13px] mt-5">
            Create a new user account.{" "}
            <span className="text-orangeColor">Join</span>
          </p>
          <p className="text-pinkColor text-sm11 mt-1.5">
            You’ll receive weekly updates on recently added collections.
          </p>
        </div>
      </div>
      <p className="text-sm11 text-[#ffffff] mt-7">*Free 30 day trial of the 15 images per month subscription with the option to quit at any moment without losing your
photographs. <span className="text-orangeColor">Learn more</span></p> */}
    </div>
  );
};

export default HomeJoin;
