import React from 'react';
import Banner from '../../components/homepage/banner/Banner';
import free from '../../assets/images/combo/free1.png';
import font from '../../assets/images/combo/font.png';
import designUsed1 from '../../assets/images/combo/designUsed1.png';
import designUsed2 from '../../assets/images/combo/designUsed2.png';
import designUsed3 from '../../assets/images/combo/designUsed3.png';
import { useEffect, useState } from 'react';

import share from '../../assets/images/combo/share.png';
import wishlist from '../../assets/images/combo/wishlist.png';
import save from '../../assets/images/combo/save.png';
import { httpClient } from '../../axios';
import mainlogo from '../../assets/images/header/mainLogo.svg';
import Footer from '../../components/footer/Footer';

const ComboPack = () => {
  const [data, setData] = useState();
  // grid api call

  useEffect(() => {
    httpClient.get(`/combo_master/getActiveList`).then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);
  return (
    <>
      <Banner type='product' />
      <div className='w-[100%]'>
        <p className='w-[100%] text-center text-[12px] text-[#757575] pt-[20px] '>
          Artnstock / Merchandise / Combo Pack
        </p>
        <p className='w-[100%] text-center font-bold text-[64px] text-[#dddddd] pb-[5px] leading-[1]'>
          Combo Pack
        </p>

        <div className='max-w-[1170px] flex flex-wrap mx-[auto] gap-[30px]'>
          {/* cards */}
          {data &&
            data.map((obj) => (
              <div className='w-[570px] mb-[20px]'>
                <div className='w-[100%] rounded-[30px] border border-[#efefef]'>
                  <div
                    style={{
                      backgroundImage: `url(${obj.image})`,
                    }}
                    className='w-[100%] h-[570px] rounded-t-[30px] bg-no-repeat bg-center bg-cover flex justify-center relative'
                  >
                    <div className='flex flex-col absolute bottom-[36px]'>
                      <div className='bg-pinkColor h-[30px] w-[30px] flex justify-center items-center rounded-[50%] text-[#fff] mx-[auto]'>
                        {obj.count}
                      </div>
                      <p className='text-[11px] text-primaryGray'>
                        Products
                      </p>
                    </div>
                  </div>
                  <div className='text-center mt-[15px] flex flex-col gap-[25px] p-[20px] '>
                    <div>
                      <p className='text-[25px] text-primaryBlack font-medium leading-[1]'>
                        Office Merch Combo
                      </p>
                      <p className='text-primaryGray text-[12px]'>
                        jbn hdvbc hbehb befihj
                      </p>
                    </div>
                    <div className='leading-[1]'>
                      <p className='text-orangeColor text-[36px]'>
                        ${obj.price}.00
                      </p>
                      <p className='text-primaryGray text-[11px]'>
                        Show Price Details
                      </p>
                    </div>

                    <div>
                      <div className='flex gap-[0.938rem] justify-center'>
                        <button className='h-[2.500rem] px-4 py-2 font-medium rounded-3xl text-sm14 text-primaryBlack border-[0.125rem]'>
                          Add to cart
                        </button>
                        <button className='blackBtn h-[2.500rem]'>
                          Shot Now
                        </button>
                      </div>
                      <p className='text-primaryGray text-[11px] mt-[3px] leading-[1.2]'>
                        * GST, Branding, Logistics and Customized
                        Packaging charges additional <br /> as
                        applicable.
                      </p>
                    </div>

                    <div className='flex gap-[12px]'>
                      <div
                        style={{
                          backgroundImage: `url(${free})`,
                          boxShadow: '#f0f0f0 0px 0px 4.3px 4px',
                        }}
                        className='h-[318px] w-[256px] bg-no-repeat bg-center bg-cover rounded-[20px] relative'
                      >
                        <img
                          src={mainlogo}
                          className='w-[58px] absolute bottom-[15px] left-[15px]'
                        />
                      </div>
                      <div className='flex flex-col'>
                        <div>
                          <img src={font} alt='' />
                        </div>

                        <p className='text-primaryGray leading-[1.2] text-[12px] w-[257px] mt-[15px] text-left'>
                          The poster will be unframed and A3 size and
                          will be included in your shipment. Lorem
                          ipsum dolor sit amet labore adipiscing
                          consectetur elit sed do eiusmod. Lorem ipsum
                          dolor sit amet labore adipiscing.
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-col gap-[5px]'>
                      <div className='flex justify-center gap-[15px]'>
                        <div>
                          <img src={designUsed1} alt='' />
                        </div>
                        <div>
                          <img src={designUsed2} alt='' />
                        </div>
                        <div>
                          <img src={designUsed3} alt='' />
                        </div>
                      </div>
                      <p className='text-primaryGray text-[12px]'>
                        Designs used on this combo
                      </p>
                    </div>
                  </div>
                </div>
                <p className='text-primaryGray text-[11px] text-center leading-[1.2] mt-[15px]'>
                  All artwork and designs used in this Combo remain
                  the property of Artnstock Private Limited. <br />{' '}
                  Note: There might be a slight variation in the shade
                  of the actual product and the image shown on the
                  screen, <br /> due to the screen resolution and
                  photography effects.
                </p>
                <div className='flex gap-[15px] mt-[10px] justify-center'>
                  <span className='text-[12px] text-primaryBlack'>
                    FAQs
                  </span>
                  <span className='text-[12px] text-primaryBlack'>
                    Returns and Refund
                  </span>
                  <span className='text-[12px] text-primaryBlack'>
                    Ask a Question
                  </span>
                </div>
                <div className='flex gap-[15px] mt-[10px] justify-center'>
                  <img src={save} alt='' />

                  <img src={wishlist} alt='' />
                  <img src={share} alt='' />
                </div>
                <div>
                  <button className='h-[20px] w-[46px] text-primaryGray bg-[#f7f7f7] text-[11px] border border-[#e4e4e4] rounded-[10px] relative left-[295px]'>
                    Share
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComboPack;
