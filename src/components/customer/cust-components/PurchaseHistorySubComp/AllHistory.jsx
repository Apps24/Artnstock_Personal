import React from 'react';
import { useState } from 'react';
import product1 from '../../../../assets/images/purchase-history/product1.png';
import dropdown from '../../../../assets/images/socials/dropdown.png';

const showall = [
  {
    img: `${product1}`,
    title: 'Office Merchandise Combo',
    id: 'COMBO15994539',
    description:
      "International artist Azra's artwork dictects the expression of man and beast exploring our role and place in this universe.",
    price: '189',
    order: '',
    location: 'abc',
    address: 'abc',
  },
];

const AllHistory = () => {
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);
  return (
    <>
      <div className='w-w1170 mx-auto flex justify-between'>
        <div className='text-[25px] font-medium text-[#333333] text-start'>
          Show All{' '}
          <span className='text-[12px] text-[#757575]'>
            219 items
          </span>
          <p className='text-[12px] font-normal leading-[1.2] text-[#757575]'>
            Select an item to add details and submit for review.
          </p>
          <p className='text-[12px] font-normal leading-[1.2] text-[#f88331]'>
            Learn More
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setIsOpenSortBy(!isOpenSortBy);
            }}
            className={`${
              isOpenSortBy === true
                ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#efefef]'
                : 'rounded-[15px] border  border-[#d6d6d6]'
            } cursor-pointer w-[120px] text-[12px] h-[30px] flex items-center justify-between p-[10px]`}
            // className='cursor-pointer w-[120px] border border-[#d6d6d6] text-[12px] h-[30px] rounded-[15px] flex items-center justify-between p-[10px]'
          >
            <span className='text-[#bbbbbb]'>Sort by</span>
            <img className='inline-block' src={dropdown} alt='' />
          </button>
          {isOpenSortBy && (
            <ul className='shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#ffffff] w-[120px] text-center text-[14px] text-primaryGray'>
              <li className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'>
                month
              </li>
              <li className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'>
                date
              </li>
              <li className='cursor-pointer hover:bg-[#F0F0F0] py-[5px]'>
                year
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className='text-[18px] w-[860px] flex justify-center gap-[30px] mx-auto'>
        <div className='text-start my-5'>
          <div className='flex'>
            {showall.map((item) => (
              <div className='flex gap-[15px]'>
                <div>
                  <img
                    src={item.img}
                    alt=''
                    className=''
                    style={{ width: '210px', height: '210px' }}
                  />
                </div>

                <div className='max-w-[345px]'>
                  <p className='text-[18px] text-[#333333] font-medium leading-[1]'>
                    {item.title}
                  </p>
                  <p className='text-[12px] mb-1 text-[#333333]'>
                    by{' '}
                    <span className='text-[#f88331]'>Artnstock</span>
                  </p>
                  <p className=' mb-1 text-[12px] border-y-[3px] border-[#efefef] text-[#757575] font-normal'>
                    <span className='font-medium'>Combo id:</span> ANS
                    {item.id}
                  </p>
                  <p className='text-[12px]'>
                    <span className='text-[15px] text-[#333333] font-medium'>
                      Description:
                    </span>{' '}
                    <br />
                    <span className='text-[#757575] font-normal'>
                      {item.description}
                    </span>
                  </p>
                  <p className='text-[15px] mt-1 text-[#f88331] font-normal leading-[1]'>
                    $
                    <span className='text-[25px] '>{item.price}</span>{' '}
                    <br />{' '}
                    <span className='text-[11px] text-[#757575]'>
                      Show Price Details
                    </span>
                  </p>
                  <p className='mt-3 mb-1'>
                    <button className='blackBtn'>Buy it Again</button>
                  </p>
                  <p className='text-[11px] font-normal flex gap-3 mb-2'>
                    <span className='text-[#757575]'>Edit Order</span>
                    <span className='text-[#f88331]'>
                      Cancel Order
                    </span>
                  </p>
                  <p className='text-[11px] font-normal text-[#757575] leading-[1.2]'>
                    GST, Branding, Logistics and Customized Packaging
                    charges included. Read our{' '}
                    <span className='text-[#f88331]'>
                      Return and exchange
                    </span>{' '}
                    policy.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=' text-start my-[15px]'>
          <p className='text-[15px] font-medium text-[#333333]'>
            Order Placed
          </p>
          <p className='text-[11px] text-[#757575] font-normal'>
            19 Sept 2021, 16:10 hrs (IST)
          </p>
          <p className='text-[15px] font-medium text-[#333333] mt-3'>
            Location
          </p>
          <p className='text-[11px] text-[#757575] font-normal mb-4'>
            Pune, India
          </p>
          <p className='text-[15px] font-medium text-[#333333]'>
            Shipped to:
          </p>
          <p className='text-[11px] text-[#757575] font-normal mb-3'>
            Khalid Shaikh <br /> S. No. 203/2A, Plot 16A, Rajiv Nagar
            (South) <br />
            Viman Nagar, Pune 411014 <br /> Maharashtra, India
          </p>
          <div className='flex gap-[5px] font-medium w-[260px]'>
            <button className='text-[12px] h-[28px] px-[10px] rounded-[14px] bg-[#00f9c6] text-[#333333] '>
              Track Package
            </button>
            <button className='text-[12px] h-[28px] px-[10px] rounded-[14px] bg-[#8e8e8e] text-[#ffffff]'>
              Change Shipping Method
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllHistory;
