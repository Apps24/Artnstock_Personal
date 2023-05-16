import React from 'react';

const Tax3 = () => {
  return (
    <>
      {' '}
      <div className='flex justify-center'>
        <div className='flex justify-center border-[0.063rem] border-[#efefef] rounded-[10px] pl-[10px]'>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <p className='text-[3.000rem] text-[#cfcfcf] relative bottom-[0.688rem] font-thin'>
              <span className='text-[27px]'>$</span>328.25
            </p>
            <p className='text-[0.688rem] text-[#cfcfcf] pt-[0.375rem] pr-[5px] max-w-[75px] leading-3'>
              Total Earnings from Sales and Referrals
            </p>
          </div>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <div className='h-[2.375rem] border-l-[0.063rem] relative top-[0.313rem] border-[#efefef]'>
              <p className='text-[3.000rem] text-[#cfcfcf]  pl-[0.438rem] max-h-[100%] relative bottom-[0.938rem] font-thin'>
                <span className='text-[27px]'>$</span>122.15
              </p>
            </div>
            <div>
              <p className='text-[0.688rem] text-[#cfcfcf] max-w-[4.375rem] pt-[0.375rem] leading-3'>
                Files Uploaded in Photos
              </p>
            </div>
          </div>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <div className='h-[2.375rem] border-l-[0.063rem] relative top-[0.313rem] border-[#efefef]'>
              <p className='text-[3.000rem] text-[#cfcfcf]  pl-[0.438rem] relative bottom-[0.938rem] font-thin'>
                <span className='text-[27px]'>$</span>198.00
              </p>
            </div>
            <div>
              <p className='text-[0.688rem] text-[#cfcfcf] max-w-[4.375rem] pt-[0.375rem] leading-3'>
                Files Uploaded in Footage
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[1040px]'>
          <div className='max-w-[12.86rem] mt-[0.625rem]'>
            <p className='text-[1.563rem] font-medium'>Tax</p>
            <p className='text-[0.688rem] text-primaryGray leading-[1.1]'>
              Refer a new customer to earn 30% of their first payment
              <span className='text-orangeColor'> Learn more</span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[1040px]'></div>
      </div>
    </>
  );
};

export default Tax3;
