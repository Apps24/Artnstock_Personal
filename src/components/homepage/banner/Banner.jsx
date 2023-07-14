import React, { useEffect, useState } from 'react';
import { httpClient } from '../../../axios';
import leftArrow from '../../../assets/images/Icons/Left Arrow.svg';
import rightArrow from '../../../assets/images/Icons/Right Arrow.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import percentImg from '../../../assets/images/static/20% Off.png';
import { useNavigate } from 'react-router-dom';

const Banner = ({ type }) => {
  const [bannerList, setBannerList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getBanner = async () => {
      await httpClient
        .get('/banner_master/getBannerTypeWiseList/' + type)
        .then((res) => {
          // console.log(res);
          setBannerList(res.data);
        });
    };
    getBanner();
  }, [type]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src={rightArrow} alt='left' />,
    prevArrow: <img src={leftArrow} alt='right' />,
  };
  return (
    <Slider {...settings}>
      {bannerList.map((data) => {
        return (
          <div className='relative' key={data?.bannerId}>
            <img
              alt='ted'
              style={{ width: '100%' }}
              src={data?.imagePath}
            />
            <div className='absolute left-24 z-10 top-12'>
              <p className='text-[4.688rem] font-semibold leading-[110px] text-primaryBlack'>
                {data?.bannerLeftTitle}
              </p>
              <p className='text-[2.375rem] font-medium leading-[40px] w-[500px] text-primaryBlack'>
                {data?.bannerLeftDescription}
              </p>
              <button className='blackBtn my-4'>
                Discover Collections
              </button>
              <p className='w-[300px] text-primaryBlack text-sm11 font-medium'>
                {data?.copyRightText}
              </p>
            </div>
            <div className='absolute right-24 z-10 top-14'>
              <img src={percentImg} alt='' />
              <p className='text-[15px] font-semibold leading-[22px] text-primaryBlack mt-1'>
                {data?.offerText}
              </p>
              <p className='text-sm11 text-primaryBlack mb-1'>
                {data?.offerDesc}
              </p>
              <button
                onClick={() => {
                  navigate('/Offers');
                }}
                className='bg-pinkColor text-sm12 text-primaryBlack font-semibold rounded-2xl py-1 px-2'
              >
                Shop with 20% Off
              </button>
              <div className='bg-primaryBlack w-[10px] h-[6px] rounded-2xl my-2.5'></div>
              <img src={data?.rightBottomImg} alt='' />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Banner;
