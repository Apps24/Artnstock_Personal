import React from 'react';
import Certificate1 from '../../../assets/images/FooterSubComp/Certificate1.png';
import Certificate2 from '../../../assets/images/FooterSubComp/Certificate2.png';
import Certificate3 from '../../../assets/images/FooterSubComp/Certificate3.png';
import Wallpaper from '../../../assets/images/FooterSubComp/Wallpaper.png';
import OnlineVougue from '../../../assets/images/FooterSubComp/OnlineVogue.png';
import FreshInflux from '../../../assets/images/FooterSubComp/FreshInflux.png';
import Auction from '../../../assets/images/FooterSubComp/Auction.png';

const Certificate = () => {
  return (
    <div>
      <div className='border-t-2 border-[#efefef] py-[30px]'>
        <div
          className='flex justify-center
              '
        >
          <p className='mr-[50px]'>
            <img src={Wallpaper} alt='' />
          </p>
          <p className='border-x-2 border-[#efefef] px-[50px]'>
            <img src={OnlineVougue} alt='' />
          </p>
          <p className='border-r-2 border-[#efefef] px-[50px]'>
            <img src={FreshInflux} alt='' />
          </p>
          <p className='ml-[50px]'>
            <img src={Auction} alt='' />
          </p>
        </div>
      </div>
      <div className='bg-[#f5f5f7] py-[15px]'>
        <div className='flex justify-center gap-[18px]'>
          <p>
            <img src={Certificate1} alt='' />
          </p>
          <p>
            <img src={Certificate2} alt='' />
          </p>
          <p>
            <img src={Certificate3} alt='' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
