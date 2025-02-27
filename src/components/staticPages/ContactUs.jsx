import React from 'react';
import BannerBG from '../../assets/images/footer/BannerBG.png';
import Footer from '../footer/Footer';
import dropArrow from '../../assets/images/Icons/Down arrow.svg';
import { useState } from 'react';

const ContactUs = () => {
  const [isOpenHelp, setisOpenHelp] = useState(false);
  return (
    <>
      <div className='wrapper pb-[66.313rem]'>
        <main>
          <div
            className='hero'
            style={{
              backgroundImage: `url(${BannerBG})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className='z-50 relative flex justify-center text-center text-[#ffffff] py-10'>
              <div>
                <p className='text-[100px] opacity-70'>Contact</p>
                <p className='text-[25px] mt-7'>
                  Earn 50% Customer Referral Bonus
                </p>
                <p className='text-[13px] mt-3'>
                  Refer a new customer to Artnstock to earn 50% of
                  their first payment <br /> instead of usual 30%
                  referral bonus.
                </p>
              </div>
            </div>
          </div>

          <div className='mt-[30px]'>
            <p className='bullet text-center mb-1'>
              Artnstock / Contact
            </p>
            <p className='text-[38px] text-[#333333] font-semibold text-center'>
              Can't find what you are looking for?
            </p>
            <div className='flex justify-center '>
              <p className='text-[12px] mt-[18px] text-[#333333] text-center'>
                Your questions may already be answerd in our{' '}
                <span className='text-[#FF7A6D]'>support center</span>
                . If not, send us a message. <br /> We'll get back to
                you within 24 hrs.
              </p>
            </div>
          </div>

          <div className='mt-[30px] flex justify-center'>
            <div className='w-w450'>
              <form action=''>
                <label
                  htmlFor=''
                  className='flex justify-start text-[12px] text-[#757575]'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  className='regInput mt-[7px] placeholder:text-[14px] placeholder:text-[#bbbbbb] placeholder:font-medium'
                  placeholder='Enter your full name'
                />
                <label
                  htmlFor=''
                  className='flex justify-start text-[12px] mt-[13px] text-[#757575]'
                >
                  Email Address
                </label>
                <input
                  type='text'
                  className='regInput mt-[7px] placeholder:text-[14px] placeholder:text-[#bbbbbb] placeholder:font-medium'
                  placeholder='Enter your email address'
                />
                <label
                  htmlFor=''
                  className='flex justify-start text-[12px] mt-[13px] text-[#757575]'
                >
                  How can we help you?
                </label>
                {/* <input
                  type='text'
                  className='regInput mt-[7px]'
                  placeholder='Select'
                /> */}
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setisOpenHelp(!isOpenHelp);
                    }}
                    className={`w-[450px] h-[40px] px-[14px] 
                  ${
                    isOpenHelp === true
                      ? 'rounded-t-[20px] shadow-dropShadowButton'
                      : 'rounded-[20px] border  border-[#d6d6d6]'
                  }
                    text-[14px] text-[#bbbbbb] flex justify-between items-center font-medium`}
                  >
                    <span>Select</span>
                    <div>
                      <img src={dropArrow} alt='' />
                    </div>
                  </button>

                  {isOpenHelp && (
                    <ul className='shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#ffffff] p-[14px] w-[450px] text-[13px] leading-[1.2] text-primaryGray'>
                      <li className='cursor-pointer hover:bg-[#F0F0F0] py-[5px]'>
                        2022
                      </li>
                      <li className='cursor-pointer hover:bg-[#F0F0F0] py-[5px]'>
                        2020
                      </li>
                      <li className='cursor-pointer hover:bg-[#F0F0F0] py-[5px]'>
                        2021
                      </li>
                    </ul>
                  )}
                </div>

                <label
                  htmlFor=''
                  className='flex justify-start text-[12px] mt-[13px] text-[#757575]'
                >
                  Message
                </label>
                <textarea
                  name=''
                  id=''
                  cols=''
                  rows=''
                  className='outline-none border border-[#d6d6d6] h-[118px] w-[100%] rounded-3xl resize-none mt-[7px] p-4'
                ></textarea>
                <label
                  htmlFor=''
                  className='flex justify-end text-[12px] text-[#757575]'
                >
                  0/100 words
                </label>

                <div className='flex justify-center mt-6'>
                  <button className='blackBtn mx-2'>Submit</button>
                  <button className='border border-[#333333] rounded-full px-5 py-2.5 mx-2 '>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
