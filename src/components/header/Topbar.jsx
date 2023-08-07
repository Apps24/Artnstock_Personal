import React from 'react';
import newArrivals from '../../assets/images/header/New Arrivals (1).svg';
import visitArtnstock from '../../assets/images/header/Visit Artnstock Collectibles (2).svg';

const Topbar = () => {
  return (
    <div className='bg-primaryBlack flex justify-center items-center py-1.5 max-h-[30px]'>
      <div className='leftCon'>
        <div className='flex justify-center items-center'>
          <p className='text-lightGray font-semibold text-[13px] mr-1.5'>
            SELL YOUR PAINTINGS AND OTHER ART ONLINE
          </p>
          <button className='text-secGray text-[0.625rem] flex justify-center items-center font-medium leading-2 border border-solid border-secGray rounded-[10px] h-[16px] w-[67px]'>
            Learn more
          </button>
        </div>
      </div>
      <div className='w-[1px] bg-[#575757] mx-[15px] h-[17px]'></div>
      <div className='mt-[1px]'>
        <img src={newArrivals} alt='' />
      </div>
      <div className='w-[1px] bg-[#575757] mx-[15px] h-[17px]'></div>

      <div className='mb-[1px]'>
        <img src={visitArtnstock} alt='' />
      </div>
    </div>
  );
};

export default Topbar;
