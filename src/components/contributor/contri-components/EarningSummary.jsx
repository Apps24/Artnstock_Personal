import dropdown from '../../../assets/images/socials/dropdown.png';
import download from '../../../assets/images/contributor/download.png';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setpath2 } from '../../../store/contriPathSlice';

const EarningSummary = () => {
  const [isHovered, setIsHovered] = useState(false);
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
    dispatch(setpath2('/ Earning Summary'));
  }, []);

  // const data = null;
  // const data = [
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  //   {
  //     date: '09/09/2022',
  //     d1: '1',
  //     d2: '-',
  //     d3: '1',
  //     d4: '-',
  //     d5: '1',
  //     d6: '-',
  //     d7: '-',
  //     d8: '1',
  //     d9: '-',
  //     d10: '-',
  //     d11: '1',
  //     d12: '1',
  //     d13: '-',
  //     d14: '1',
  //     d15: '-',
  //   },
  // ];

  const dataa = [
    {
      id: '1',
      date: '01/08/2023',
      d1: '1',
      d2: '-',
      d3: '1',
      d4: '-',
      d5: '1',
      d6: '-',
      d7: '-',
      d8: '1',
      d9: '-',
      d10: '-',
      d11: '1',
      d12: '1',
      d12: 'Processing',
    },
    {
      id: '2',
      date: '02/08/2023',
      d1: '1',
      d2: '-',
      d3: '1',
      d4: '-',
      d5: '1',
      d6: '-',
      d7: '-',
      d8: '1',
      d9: '-',
      d10: '-',
      d11: '1',
      d12: '1',
      d12: 'Processing',
    },
    {
      id: '3',
      date: '03/08/2023',
      d1: '1',
      d2: '-',
      d3: '1',
      d4: '-',
      d5: '1',
      d6: '-',
      d7: '-',
      d8: '1',
      d9: '-',
      d10: '-',
      d11: '1',
      d12: '1',
      d12: 'Pending',
    },
  ];

  const [show, setShow] = useState([]);

  const showw = (id) => {
    const find = show.find((obj) => obj.id === id.id);
    // console.log(find);
    if (find === undefined) {
      setShow((prev) => [...prev, id]);
    } else if (find !== undefined) {
      setShow(show.filter((obj) => obj.id !== id.id));
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
        <div className='w-[100%] max-w-[1170px] flex justify-between items-center'>
          <div className='max-w-[13.3rem] mt-[0.625rem]'>
            <p className='text-[1.563rem] font-medium'>
              Earnings Summary
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
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='cursor-pointer pl-[14px]'
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
      {/* {data !== null ? (
        <div className='w-full flex justify-center pt-[15px] pb-[215px]'>
          <div className='wrapper'>
            <table className='w-[1410px] border-separate border-spacing-0'>
              <tbody>
                <tr className=' border text-[13px] text-[15px] font-medium leading-[1.5] text-primaryBlack text-center'>
                  <td
                    className='border border-[#dddddd] bg-[#f3f3f3] rounded-tl-[10px] p-[22px] w-[90px]'
                    rowspan='2'
                  >
                    Date
                  </td>
                  <td
                    className='border-t border-[#dddddd] bg-[#f3f3f3] border-r border-b w-[90px] leading-[1.2]'
                    rowspan='2'
                  >
                    Total Downloads
                  </td>
                  <td
                    className='border-t border-[#dddddd] bg-[#f3f3f3] border-r border-b w-[90px] leading-[1.2]'
                    rowspan='2'
                  >
                    Total Earnings
                  </td>
                  <td
                    className='border-t border-[#dddddd] bg-[#f3f3f3] border-r border-b w-[90px] leading-[1.2]'
                    rowspan='2'
                  >
                    Art
                    <p className='text-[11px] font-normal px-[3px]'>
                      print on Products
                    </p>
                  </td>
                  <td
                    className='border-t border-[#dddddd] bg-[#f3f3f3] border-r border-b h-[35px]'
                    colspan='3'
                  >
                    Photos
                  </td>
                  <td
                    className='border-t border-[#dddddd] bg-[#f3f3f3] border-r border-b'
                    colspan='3'
                  >
                    Footage
                  </td>
                  <td
                    className='border-t border-[#dddddd] bg-[#f3f3f3] border-r border-b'
                    colspan='3'
                  >
                    Music
                  </td>
                  <td
                    className='border-t border-[#dddddd] bg-[#f3f3f3] border-r border-b rounded-tr-[10px]'
                    colspan='3'
                  >
                    Templates
                  </td>
                </tr>
                <tr className='text-[12px] font-medium text-center'>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    Subscription
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    Enhanced
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    On-Demand
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    Subscription
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    Enhanced
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    On-Demand
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    Subscription
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    Enhanced
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    On-Demand
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    Subscription
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    Enhanced
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3]'>
                    On-Demand
                  </td>
                </tr>
                <tr className='text-[13px] font-medium' height='30'>
                  <td className='border-r border-b border-l border-[#dddddd] bg-[#f3f3f3] text-primaryBlack  pl-[10px]'>
                    All-Time
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    -
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    -
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    -
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                </tr>
                <tr className='text-[13px] font-medium' height='30'>
                  <td className='border-r border-b border-l border-[#dddddd] bg-[#f3f3f3] text-primaryBlack  pl-[10px]'>
                    All-Time
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    -
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    -
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                  <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] text-primaryGray  pl-[10px]'>
                    601
                  </td>
                </tr>
                {data.map((da, index) => (
                  <tr
                    className='text-[13px] font-medium text-primaryGray'
                    height='30'
                  >
                    <td
                      className={`border-r border-b border-l border-[#dddddd] bg-[#ffffff]  pl-[10px] ${
                        index == data.length - 1
                          ? 'rounded-bl-[10px]'
                          : ''
                      }`}
                    >
                      {da.date}
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
                    <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                      {da.d5}
                    </td>
                    <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                      {da.d6}
                    </td>
                    <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                      {da.d7}
                    </td>
                    <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                      {da.d8}
                    </td>
                    <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                      {da.d9}
                    </td>
                    <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                      {da.d10}
                    </td>
                    <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                      {da.d11}
                    </td>
                    <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                      {da.d12}
                    </td>
                    <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                      {da.d13}
                    </td>
                    <td className='border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px]'>
                      {da.d14}
                    </td>
                    <td
                      className={`border-r border-b border-[#dddddd] bg-[#ffffff]  pl-[10px] ${
                        index === data.length - 1
                          ? 'rounded-br-[10px]'
                          : ''
                      } `}
                    >
                      {da.d15}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      )} */}
      <div className='w-[100%] flex justify-center'>
        {/* <div className='w-[1170px]'> */}
        <table className='w-[100%] max-w-[1170px] border-separate border-spacing-0'>
          <tbody>
            <tr className=' border text-[13px] text-[15px] font-semibold leading-[1.5] text-primaryBlack text-center'>
              <td
                colspan='3'
                className='border border-[#dddddd] bg-[#e7e7e7] rounded-tl-[10px]'
              >
                August, 2023
              </td>

              <td
                colspan='2'
                className='border-t border-[#dddddd] bg-[#ececec] border-r border-b leading-[1.2]'
              >
                Art
              </td>
              <td
                colspan='2'
                className='border-t border-[#dddddd] bg-[#ececec] border-r border-b h-[35px]'
              >
                Photos
              </td>
              <td
                colspan='2'
                className='border-t border-[#dddddd] bg-[#ececec] border-r border-b'
              >
                Footage
              </td>
              <td
                colspan='2'
                className='border-t border-[#dddddd] bg-[#ececec] border-r border-b'
              >
                Music
              </td>
              <td
                colspan='2'
                className='border-t border-[#dddddd] bg-[#ececec] border-r border-b'
              >
                Templates
              </td>
              <td
                colspan='2'
                className='border-t border-[#dddddd] bg-[#ececec]  border-r border-b rounded-tr-[10px]'
              >
                Payment Status
              </td>
            </tr>

            <tr className='text-[13px] font-medium' height='30'>
              <td className='border-r border-b border-l border-[#dddddd] bg-[#eeeeee] font-medium  text-primaryBlack  pl-[10px]'>
                Date
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#eeeeee] font-medium text-primaryBlack text-center'>
                Items Sold
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#eeeeee] font-medium text-primaryBlack text-center'>
                Earnings
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack text-center'>
                Arts Prints
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack text-center'>
                Products
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack text-center'>
                Standards
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack text-center'>
                Enhanced
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack text-center'>
                Standards
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack text-center'>
                Enhanced
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack text-center'>
                Standards
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack text-center'>
                Enhanced
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack text-center'>
                Standards
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack text-center'>
                Enhanced
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f3f3f3] font-medium text-primaryBlack pl-[10px]'>
                <button
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(220,76,154,1) 0%, rgba(149,147,205,1) 35%, rgba(132,212,156,1) 65%, rgba(204,236,59,1) 100%)',
                  }}
                  className='w-[101px] h-[19px] rounded-[9.5px] flex justify-center items-center'
                >
                  <span className='text-[10px] font-semibold text-primaryBlack'>
                    Updated: 2hrs ago
                  </span>
                </button>
              </td>
            </tr>
            {/* test */}
            <tr className='text-[13px] font-medium' height='30'>
              <td className='border-r border-b border-l border-[#dddddd] bg-[#f9e9e9] font-medium  text-primaryBlack  pl-[10px]'>
                All-Time
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f9e9e9] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#f9e9e9] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-b border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack pl-[10px]'>
                Paid
              </td>
            </tr>
            {/* test */}

            {/* test */}
            <tr className='text-[13px] font-medium' height='30'>
              <td className='border-r border-l border-[#dddddd] bg-[#f9e9e9] font-medium  text-primaryBlack  pl-[10px]'>
                August 2023
              </td>
              <td className='border-r border-[#dddddd] bg-[#f9e9e9] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#f9e9e9] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack text-center'>
                123.2
              </td>
              <td className='border-r border-[#dddddd] bg-[#feeeee] font-medium text-primaryBlack pl-[10px]'>
                Paid
              </td>
            </tr>
            {/* test */}
            {/* test */}

            {dataa.map((data, index) => (
              <>
                {/* dont remove this fragment its for design bugs
            purposes */}
                <tr
                  key={index}
                  className='text-[13px] font-medium'
                  height='30'
                >
                  <td
                    className={`border-r border-t border-l border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'rounded-bl-[10px] border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#ddf5f7]'
                        : 'bg-[#fafafa]'
                    }  font-medium  text-primaryBlack  pl-[10px]`}
                  >
                    {data.date}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#ddf5f7]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d1}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#ddf5f7]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d2}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d3}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d4}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d4}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d5}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d6}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d7}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d8}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d9}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d10}
                  </td>
                  <td
                    className={`border-r border-t border-[#dddddd] ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'border-b'
                        : ''
                    } ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    } font-medium text-primaryBlack text-center`}
                  >
                    {data.d11}
                  </td>
                  <td
                    onClick={() => {
                      showw({ id: data.id });
                    }}
                    className={`border-r border-t border-[#dddddd] ${
                      show.find((obj) => obj.id === data.id)
                        ? 'bg-[#e1fafc]'
                        : 'bg-[#fafafa]'
                    }
                    ${
                      index === dataa.length - 1 &&
                      show.find((obj) => obj.id === data.id) ===
                        undefined
                        ? 'rounded-br-[10px] border-b'
                        : ''
                    }
                     font-medium text-primaryBlack pl-[10px] pr-[10px] cursor-pointer`}
                  >
                    <div className='w-[100%] h-[100%] flex justify-between items-center'>
                      {data.d12}{' '}
                      <div>
                        <img src={dropdown} alt='' />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className='py-[20px] px-[10px] border-l border-r border-[#dddddd]'>
                  {show.find((obj) => obj.id === data.id) && (
                    <td
                      colSpan='14'
                      className={`border-r border-l ${
                        index === dataa.length - 1
                          ? 'border-b rounded-br-[10px] rounded-bl-[10px]'
                          : ''
                      } border-[#dddddd]`}
                    >
                      <div className='px-[10px]'>
                        <div className='mt-[20px]'>
                          <p className='text-primaryBlack text-[18px] font-semibold leading-[1]'>
                            Your Earnings
                          </p>
                          <p className='text-primaryGray text-[11px] font-medium mb-[10px]'>
                            Items purchased by customer
                          </p>
                        </div>

                        <div className='flex gap-[30px] border-b border-b-[#efefef]  mb-[18px] pb-[18px]'>
                          <div className='flex flex-col max-w-[200px] w-[100%] font-medium'>
                            <div
                              style={{
                                backgroundImage: `url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')`,
                                backgroundSize: 'cover',
                              }}
                              className='w-[108px] h-[108px] rounded-[10px] mb-[10px]'
                            ></div>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art
                            </p>
                            <p className='text-[12px] text-primaryBlack leading-[1.1]'>
                              Standard License
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Beautiful Abstract art evening sunset
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art ID: ANS987654321
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art Print Size: 52 cm x 122 cm
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Frame: Included
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Quantity: 1
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1] mb-[10px]'>
                              Sale Price: $250.00
                            </p>
                            <div className='text-[12px] text-primaryBlack border-t border-b border-b-[2px] border-t-[2px] border-[#efefef]'>
                              Earnings: $75.00 (30% of Sale Price) Tax
                              Deduction: $7.50
                            </div>

                            <p className='text-[25px] font-semibold leading-[1] my-[10px]'>
                              <span className='text-[15px]'>$</span>
                              67.50
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Earnings after tax deduction
                            </p>
                          </div>
                          <div className='flex flex-col max-w-[200px] w-[100%] font-medium'>
                            <div
                              style={{
                                backgroundImage: `url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')`,
                                backgroundSize: 'cover',
                              }}
                              className='w-[108px] h-[108px] rounded-[10px] mb-[10px]'
                            ></div>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art
                            </p>
                            <p className='text-[12px] text-primaryBlack leading-[1.1]'>
                              Standard License
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Beautiful Abstract art evening sunset
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art ID: ANS987654321
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art Print Size: 52 cm x 122 cm
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Frame: Included
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Quantity: 1
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1] mb-[10px]'>
                              Sale Price: $250.00
                            </p>
                            <div className='text-[12px] text-primaryBlack border-t border-b border-b-[2px] border-t-[2px] border-[#efefef]'>
                              Earnings: $75.00 (30% of Sale Price) Tax
                              Deduction: $7.50
                            </div>

                            <p className='text-[25px] font-semibold leading-[1] my-[10px]'>
                              <span className='text-[15px]'>$</span>
                              67.50
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Earnings after tax deduction
                            </p>
                          </div>
                          <div className='flex flex-col max-w-[200px] w-[100%] font-medium'>
                            <div
                              style={{
                                backgroundImage: `url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')`,
                                backgroundSize: 'cover',
                              }}
                              className='w-[108px] h-[108px] rounded-[10px] mb-[10px]'
                            ></div>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art
                            </p>
                            <p className='text-[12px] text-primaryBlack leading-[1.1]'>
                              Standard License
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Beautiful Abstract art evening sunset
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art ID: ANS987654321
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art Print Size: 52 cm x 122 cm
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Frame: Included
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Quantity: 1
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1] mb-[10px]'>
                              Sale Price: $250.00
                            </p>
                            <div className='text-[12px] text-primaryBlack border-t border-b border-b-[2px] border-t-[2px] border-[#efefef]'>
                              Earnings: $75.00 (30% of Sale Price) Tax
                              Deduction: $7.50
                            </div>

                            <p className='text-[25px] font-semibold leading-[1] my-[10px]'>
                              <span className='text-[15px]'>$</span>
                              67.50
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Earnings after tax deduction
                            </p>
                          </div>
                          <div className='flex flex-col max-w-[200px] w-[100%] font-medium'>
                            <div
                              style={{
                                backgroundImage: `url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')`,
                                backgroundSize: 'cover',
                              }}
                              className='w-[108px] h-[108px] rounded-[10px] mb-[10px]'
                            ></div>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art
                            </p>
                            <p className='text-[12px] text-primaryBlack leading-[1.1]'>
                              Standard License
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Beautiful Abstract art evening sunset
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art ID: ANS987654321
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Art Print Size: 52 cm x 122 cm
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Frame: Included
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Quantity: 1
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1] mb-[10px]'>
                              Sale Price: $250.00
                            </p>
                            <div className='text-[12px] text-primaryBlack border-t border-b border-b-[2px] border-t-[2px] border-[#efefef]'>
                              Earnings: $75.00 (30% of Sale Price) Tax
                              Deduction: $7.50
                            </div>

                            <p className='text-[25px] font-semibold leading-[1] my-[10px]'>
                              <span className='text-[15px]'>$</span>
                              67.50
                            </p>
                            <p className='text-[12px] text-primaryGray leading-[1.1]'>
                              Earnings after tax deduction
                            </p>
                          </div>
                        </div>

                        <p className='text-[12px] text-primaryBlack'>
                          Your Earnings
                        </p>
                        <p className='text-[38px] text-orangeColor leading-[1] font-medium'>
                          <span className='text-[19px]'>$</span>64.57
                        </p>

                        <div className='text-[12px] text-pinkColor font-medium leading-[1.2] mt-[10px]'>
                          <p>Your earnings on ‘Sale Price’</p>
                          <p>
                            Art Prints 30%, Products 10%, Photos 20%,
                            Footage 30%, Music 30% and Templates 20%.
                          </p>
                          <p>Tax included in Sale Price.</p>
                          <p>
                            10% tax deduction from earning amount.
                          </p>
                        </div>

                        <div className='text-[12px] text-primaryGray font-medium leading-[1.2] mt-[10px] mb-[10px]'>
                          <p>For customers</p>
                          <p>
                            GST, shipping charges, couries charges and
                            other taxes will be added on Sale Price
                            during final billing.
                          </p>
                        </div>
                      </div>
                    </td>
                  )}
                </tr>
              </>
            ))}

            {/* test */}
          </tbody>
        </table>
        {/* </div> */}
      </div>
    </>
  );
};

export default EarningSummary;
