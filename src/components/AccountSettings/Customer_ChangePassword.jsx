import React from 'react';
import pro from '../../assets/images/accountSettings/pro.png';
import { useNavigate } from 'react-router-dom';

const Customer_ChangePassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex justify-between'>
        <p>
          <p className='text-[25px] font-medium text-[#333333]'>
            Change Password
          </p>
          <p className='text-[11px] text-[#f95d99]'>
            All fields are required.
          </p>
        </p>
        <p>
          <div className='border border-[#757575] rounded-lg p-1'>
            <img src={pro} alt='' />
            <p className='text-[11px] text-[#757575]'>
              Member since 5 July 2020
            </p>
          </div>
        </p>
      </div>
      <div>
        <div className='my-[30px]'>
          <p className='text-[12px] text-[#757575] leading-[0] mb-1'>
            Password
          </p>
          <input
            type='password'
            name=''
            className='regInput text-[#333333]'
            placeholder='**********'
            id=''
            disabled
          />
          <p className='text-[11px] text-[#757575] mt-1'>
            Last Changed Nov 14 2019
          </p>
        </div>
        <p className='flex justify-center'>
          <button
            onClick={() => navigate('/change-password-customer')}
            className='blackBtn'
          >
            Change Password
          </button>
        </p>
      </div>
    </>
  );
};

export default Customer_ChangePassword;
