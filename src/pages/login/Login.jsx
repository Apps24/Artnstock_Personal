import React, { useState } from 'react';
import captcha from '../../assets/recaptcha.jpg';
import { httpClient } from '../../axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { authSliceAction } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginForm = {
    userName: '',
    password: '',
  };

  const login = () => {
    if (email.length > 0 && password.length > 0) {
      loginForm.userName = email;
      loginForm.password = password;
      console.log(loginForm);
      httpClient
        .post('/user_master/userLogin', loginForm)
        .then((res) => {
          console.log(res.data);
          if (res.data.responseCode === 200) {
            toast.success('Successfully Logged In');
            dispatch(authSliceAction.loginUser(true));
            dispatch(
              authSliceAction.setUserRole(res.data.userRole[0])
            );
            dispatch(authSliceAction.setUserId(res.data.userId));
            dispatch(authSliceAction.setUserDetails(res.data));
            // console.log(res.data);
            navigate('/');
          } else {
            toast.error(res.data.message);
          }
        });
    } else {
      toast.error('Please enter email and password');
    }
  };

  return (
    <div className='w-full h-[100vh] bg-[#FF369F] flex justify-center'>
      <div className='loginCard py-7 px-[67px]'>
        <p className='text-primaryBlack leading-[2.5rem] mb-0.5 text-[2.375rem] font-medium'>
          Customer Sign In
        </p>
        <input
          className='regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]'
          placeholder='Email Address'
          type='email'
          name='email'
          autoComplete='off'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]'
          placeholder='Password'
          type='password'
          name='password'
          autoComplete='off'
          onChange={(e) => setPassword(e.target.value)}
        />
        <img className='mx-auto my-5' src={captcha} alt='' />
        <button onClick={login} className='blackBtn'>
          Sign In
        </button>
        <p className='text-pinkColor mt-1 text-sm11'>
          Forgot Password?
        </p>
        <p className='text-orangeColor text-sm14 mt-4'>
          Create an Account
        </p>
      </div>
    </div>
  );
};

export default Login;
