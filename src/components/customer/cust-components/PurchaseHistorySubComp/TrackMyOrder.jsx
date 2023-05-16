import React from 'react';

const TrackMyOrder = () => {
  return (
    <>
      <div className='wrapper'>
        <main>
          <p className='text-[#757575] text-[12px] text-center mt-[30px] '>
            Artnstock / Track My Order
          </p>
          <p className='text-center text-[38px] font-medium text-[#333333] mt-1 mb-5 leading-[1.2]'>
            Track My Order
          </p>
          <p className='text-center text-[12px] text-[#757575]'>
            To track your order, Enter your OrderID in the box below{' '}
            <br /> and press the{' '}
            <span className='text-[#333333]'>Track My Order </span>
            button. This was also given to you on your receipt and in
            the <br /> confirmation email you should have received
          </p>
          <div className='flex justify-center mt-5'>
            <div className='leading-[0.6]'>
              <p className='text-[#757575] text-[12px]'>Order ID</p>
              <input
                type='text'
                name=''
                id=''
                className='regInput w-[369px] mb-[17px] text-[13px] font-medium'
                placeholder='Found in your order confirmation email'
              />
              <p className='text-[#757575] text-[12px]'>
                Billing Email
              </p>
              <input
                type='text'
                name=''
                id=''
                className='regInput w-[369px] mb-5 text-[13px] font-medium'
                placeholder='Email you used during checkout'
              />
            </div>
          </div>
          <p className='flex justify-center'>
            <button className='blackBtn'>Track My Order</button>
          </p>
        </main>
      </div>
    </>
  );
};

export default TrackMyOrder;
