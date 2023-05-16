import dropdown from '../../../assets/images/socials/dropdown.png';
import download from '../../../assets/images/contributor/download.png';
import backArrow from '../../../assets/images/contributor/backArrow.png';
import nextArrow from '../../../assets/images/contributor/nextArrow.png';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setpath2 } from '../../../store/contriPathSlice';

const UnpaidEarnings = () => {
  const [isHovered, setIsHovered] = useState(false);
  //   const [currentData, setCurrentData] = useState([]);
  const [isOpenSortByYear, setIsOpenSortByYear] = useState(false);
  const [isOpenSortByMonth, setIsOpenSortByMonth] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setpath2('/ Unpaid Earnings'));
  }, []);

  // const data = null;
  const data = [
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Pending',
    },
    {
      d0: '09/09/2022',
      d1: 'Buyers Referrals',
      d2: '7653445676',
      d3: 'Bank Deposite',
      d4: '$ 1.15',
      d5: 'Processing',
    },
  ];

  //   paginationn **dont change the sequence of the code below** else will give undefined error
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const dataToRender = data || [];

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = dataToRender.slice(start, end);

  const totalPages = Math.ceil(dataToRender.length / itemsPerPage);

  const handlePrevPage = () => {
    console.log(currentPage);
    if (currentPage > 1 && currentPage <= totalPages) {
      console.log('i am running');
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    console.log(currentPage);
    if (currentPage >= 1 && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      {' '}
      <div className='flex justify-center'>
        <div className='flex justify-center border-t-[0.063rem] border-[#efefef] border-b-[0.063rem]'>
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
      <div className='w-[100%] flex justify-center pt-[15px]'>
        <div className='w-[1170px] flex justify-between items-center'>
          <div className='max-w-[13.3rem] mt-[0.625rem]'>
            <p className='text-[1.563rem] font-medium'>
              Unpaid Earnings
            </p>
            <p className='text-[0.688rem] text-primaryGray leading-[1.1]'>
              Refer a new customer to earn 30% of their first payment
              <span className='text-orangeColor'> Learn more</span>
            </p>
          </div>

          <div className='flex gap-[5px] relative'>
            {/* test */}
            <div>
              <button
                onClick={() => {
                  setIsOpenSortByYear(!isOpenSortByYear);
                }}
                className={`${
                  isOpenSortByYear === true
                    ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#efefef]'
                    : 'rounded-[15px] border  border-[#d6d6d6]'
                } cursor-pointer w-[80px] text-[12px] h-[30px] flex items-center justify-between p-[10px]`}
                // className='cursor-pointer w-[120px] border border-[#d6d6d6] text-[12px] h-[30px] rounded-[15px] flex items-center justify-between p-[10px]'
              >
                <span className='text-[#bbbbbb]'>2021</span>
                <img className='inline-block' src={dropdown} alt='' />
              </button>
              {isOpenSortByYear && (
                <ul className='shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#ffffff] w-[80px] text-center text-[14px] text-primaryGray'>
                  <li className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'>
                    2022
                  </li>
                  <li className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'>
                    2020
                  </li>
                  <li className='cursor-pointer hover:bg-[#F0F0F0] py-[5px]'>
                    2021
                  </li>
                </ul>
              )}
            </div>

            {/* test */}

            <div>
              <button
                onClick={() => {
                  setIsOpenSortByMonth(!isOpenSortByMonth);
                }}
                className={`${
                  isOpenSortByMonth === true
                    ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#efefef]'
                    : 'rounded-[15px] border  border-[#d6d6d6]'
                } cursor-pointer w-[105px] text-[12px] h-[30px] flex items-center justify-between p-[10px]`}
                // className='cursor-pointer w-[120px] border border-[#d6d6d6] text-[12px] h-[30px] rounded-[15px] flex items-center justify-between p-[10px]'
              >
                <span className='text-[#bbbbbb]'>August</span>
                <img className='inline-block' src={dropdown} alt='' />
              </button>
              {isOpenSortByMonth && (
                <ul className='shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#ffffff] w-[105px] text-center text-[14px] text-primaryGray'>
                  <li className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'>
                    September
                  </li>
                  <li className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'>
                    June
                  </li>

                  <li className='cursor-pointer hover:bg-[#F0F0F0] py-[5px]'>
                    August
                  </li>
                </ul>
              )}
            </div>
            {/* test */}

            <button className='bg-primaryBlack rounded-[15px] text-[white] font-medium text-[12px] w-[60px] h-[30px]'>
              Show
            </button>
            <div className='flex flex-col justify-center'>
              <img
                className='cursor-pointer pl-[14px]'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                src={download}
                alt=''
              />
            </div>
            {isHovered && (
              <button className='w-[164px] h-[20px] flex justify-center items-center text-[11px] bg-[#f7f7f7] rounded-[10px] text-primaryGray absolute top-[33px] left-[203px] border border-[#e4e4e4]'>
                <span className='leading-[1]'>
                  Download Monthly Statement
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
      {data !== null ? (
        <div className='w-full flex flex-col pt-[15px] pb-[100px]'>
          <div className='wrapper mx-auto'>
            <table className='w-[1170px] border-separate border-spacing-0'>
              <tbody>
                <tr className='text-[15px] font-medium' height='30'>
                  <td className='border border-[#dddddd] bg-[#f3f3f3] text-primaryBlack  pl-[10px] rounded-tl-[10px]'>
                    Date
                  </td>
                  <td className='border-r border-b border-t border-[#dddddd] bg-[#f3f3f3] text-primaryBlack  pl-[10px] w-[360px]'>
                    Earning Type
                  </td>
                  <td className='border-r  border-b border-t  border-[#dddddd] bg-[#f3f3f3] text-primaryBlack  pl-[10px]'>
                    Transaction ID
                  </td>
                  <td className='border-r  border-b border-t  border-[#dddddd] bg-[#f3f3f3] text-primaryBlack  pl-[10px]'>
                    Payment Mode
                  </td>
                  <td className='border-r  border-b border-t  border-[#dddddd] bg-[#f3f3f3] text-primaryBlack  pl-[10px]'>
                    Amount
                  </td>

                  <td className='border-r w-[280px] border-b border-t border-[#dddddd] bg-[#f3f3f3] text-primaryBlack  pl-[10px] rounded-tr-[10px]'>
                    <div className='flex gap-[5px] items-center'>
                      <span>Status</span>
                      <button className='inline-block flex flex-col justify-center items-center bg-pinkColor text-[11px] text-[white] font-medium w-[107px] h-[17px] rounded-[8.5px]'>
                        <span> Updated: 5 hrs ago</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {currentData &&
                  currentData.map((da, index) => (
                    <tr
                      className='text-[13px] text-primaryGray'
                      height='30'
                    >
                      <td
                        className={`border-r border-b border-l border-[#dddddd] bg-[#ffffff]  pl-[10px] ${
                          index == currentData.length - 1
                            ? 'rounded-bl-[10px]'
                            : ''
                        }`}
                      >
                        {da.d0}
                      </td>
                      <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                        {da.d1}
                      </td>
                      <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                        {da.d2}
                      </td>
                      <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                        {da.d3}
                      </td>
                      <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                        {da.d4}
                      </td>

                      <td
                        className={`border-r border-b border-[#dddddd] bg-[#ffffff] pr-[10px] pl-[10px] ${
                          index === currentData.length - 1
                            ? 'rounded-br-[10px]'
                            : ''
                        } `}
                      >
                        <div className='flex justify-between '>
                          {da.d5}{' '}
                          <div>
                            <img
                              className='inline-block w-[10px] h-[6px]'
                              src={dropdown}
                              alt=''
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className='flex mx-[auto] font-medium text-[13px] text-primaryGray mt-[30px] gap-[6px]'>
            <p className='my-[auto]'>page</p>
            <div className='flex items-center w-[88px] h-[30px]'>
              <div
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className='w-[29.33px] h-[30px] flex justify-center items-center border border-[#e8e8e8] bg-[#f7f7f7] rounded-l-[15px] cursor-pointer'
              >
                <img src={backArrow} alt='' />
              </div>
              <div className='w-[29.33px] h-[30px] flex justify-center items-center border-t border-b border-[#e8e8e8]'>
                <span>{currentPage}</span>
              </div>
              <div
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className='w-[29.33px] h-[30px] flex justify-center items-center border border-[#e8e8e8] bg-[#f7f7f7] rounded-r-[15px] cursor-pointer'
              >
                <img src={nextArrow} alt='' />
              </div>
            </div>
            <p className='my-[auto]'>of {totalPages} &nbsp;</p>
          </div>
          <div className='mx-auto pt-[10px]'>
            <button className='blackBtn w-[88px]'>Next</button>
          </div>

          {/* terms and conditions */}
          <div className='flex justify-center'>
            <div className='w-[1170px]'>
              <p className='text-[25px] text-[#333333] font-medium'>
                Terms & Conditions
              </p>
              <p className='text-[15px] mt-[12px] text-[#333333] font-medium'>
                Referring Contributors
              </p>
              <p className='text-[14px] text-[#757575]'>
                For the first year after a referred contributor signs
                up, you will earn 10% of the final sale price each
                time one of their videos is downloaded. For the first
                two years after a referred contributor is approved,
                you will earn $0.04 each time one of their images is
                downloaded
              </p>
              <p className='text-[15px] mt-[18px] text-[#333333]  font-medium'>
                Referring Customers
              </p>
              <p className='text-[14px] text-[#757575]'>
                Each time you refer a new customer to Artnstock, you
                will earn 20% of their first payment, up to $200. For
                monthly plans, you will earn a referral commission
                based on the referred customer's first monthly payment
                only. For example, if you refer a customer whose first
                purchase is a $249 monthly membership, 20% ($49) will
                be added to your account. Referred customers must make
                their first purchase within 30 days after creating a
                new Artnstock customer account for you to be credited
                with their referral.
              </p>
              <p className='text-[15px] mt-[18px] text-[#333333]  font-medium'>
                Delivery of Payment
              </p>
              <p className='text-[14px] text-[#757575]'>
                Artnstock reserves the right to delay payment of your
                referral earnings for up to 90 days from the date your
                referred contributor or customer establishes their
                account (see Paragraphs 10a and 10b of the{' '}
                <span className='text-[#FF7A6D]'>
                  Terms of Service
                </span>{' '}
                ).
              </p>
              <p className='text-[14px] text-[#757575] mt-[18px]'>
                To protect contributors from fraudulent activity,
                Artnstock maintains a three month probationary period
                on all earnings accrued from customer referrals.
                Following the end of this probationary period, you
                will see these earnings appear in your account. You
                can review the status of pending earnings in the
                customer referral earnings section.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center pt-[8px] pb-[1000px]'>
          <p className='text-pinkColor text-[18px]'>
            Looks like you havn’t made any <br /> sales yet
          </p>
          <p className='text-primaryGray text-[12px]'>
            Promote your portfolio and earn up to Rs. 2,000 for every
            new customer <br /> you refer.{' '}
            <span className='text-orangeColor'> Learn more</span>
          </p>
        </div>
      )}
    </>
  );
};

export default UnpaidEarnings;
