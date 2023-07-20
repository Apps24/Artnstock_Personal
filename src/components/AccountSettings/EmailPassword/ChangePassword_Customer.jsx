import React from 'react';
import { useState, useEffect } from 'react';
import { httpClient } from '../../../axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ChangePassword_Customer = () => {
  const userId = useSelector((state) => state.auth.userId);

  const changePassword = async () => {
    try {
      const res = httpClient.put(
        `/user_master/updatePassword/${userId}/`
      );
    } catch (err) {
      console.error(err);
    }
  };

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');

      return false;
    } else if (password === confirmPassword) {
      // Passwords match, you can proceed with form submission or other actions
      toast.success('Passwords do not match');
      return true;
    }
  };

  const handleButtonClick = () => {
    if (validatePasswords()) {
      // You can submit the form or perform other actions here
    }
  };

  return (
    <>
      <div className='wrapper w-[100%] h-[100vh] bg-[#ffb851] pt-[30px]'>
        <div className='rounded-2xl w-[450px] mx-auto bg-[#ffffff] py-[30px] px-[51px] text-center'>
          <p className='text-[38px] text-[#333333] font-medium leading-[1.2]'>
            Change Password
          </p>
          <input
            type='text'
            name=''
            className='regInput mt-[12px]'
            placeholder='Current Password'
            id=''
          />
          <input
            type='password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
            className='regInput mt-[11px]'
            placeholder='New Password'
          />
          <input
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className='regInput mt-[11px]'
            placeholder='Confirm New Password'
          />
          <p className='text-[11px] text-[#757575] leading-[1.2] text-start mt-1'>
            Password must be at least 8 characters long
          </p>
          <div className='flex gap-5 justify-center mt-[20px]'>
            <button
              onClick={handleButtonClick}
              className='blackBtn text-[14px] text-medium'
            >
              Save
            </button>
            <button className=' text-[14px] text-medium border border-[#333333] rounded-full px-4 py-2'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword_Customer;
