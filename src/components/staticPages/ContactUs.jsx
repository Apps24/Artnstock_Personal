import React from 'react';
import BannerBG from '../../assets/images/footer/BannerBG.png';
import Footer from '../footer/Footer';

const ContactUs = () => {
  return (
    <>
      <div className='wrapper mb-[60px]'>
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
                  className='regInput mt-[7px]'
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
                  className='regInput mt-[7px]'
                  placeholder='Enter your email address'
                />
                <label
                  htmlFor=''
                  className='flex justify-start text-[12px] mt-[13px] text-[#757575]'
                >
                  How can we help you?
                </label>
                <input
                  type='text'
                  className='regInput mt-[7px]'
                  placeholder='Select'
                />
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
