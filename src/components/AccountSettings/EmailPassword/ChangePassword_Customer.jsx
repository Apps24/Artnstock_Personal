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

  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  // useEffect(() => {
  //   console.log(object);
  // }, [confirmPassword]);

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const validatePasswords = () => {
    if (password === '') {
      toast.error('Please enter current password');
      return false;
    } else if (newPassword === '' || confirmPassword === '') {
      toast.error('Please enter New Password & Confirm Password');
      return false;
    } else if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return false;
    } else if (newPassword === confirmPassword) {
      // Passwords match, you can proceed with form submission or other actions

      return true;
    }
  };

  const handleButtonClick = async () => {
    try {
      if (validatePasswords()) {
        // You can submit the form or perform other actions here
        let object = {
          newPassword: newPassword,
          confirmPassword: confirmPassword,
          password: password,
          userId: userId,
        };

        const res = await httpClient.put(
          '/user_master/updatePasswordUser',
          object
        );
        if (res) {
          toast.success('Password successfully updated');
          setConfirmPassword('');
          setNewPassword('');
          setPassword('');
        }
      }
    } catch (err) {
      console.error(err);
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
            type='password'
            name='oldpassword'
            className='regInput mt-[12px]'
            placeholder='Current Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type='password'
            name='password'
            value={newPassword}
            onChange={handleNewPasswordChange}
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
