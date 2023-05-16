import dropdown from '../../../assets/images/socials/dropdown.png';
import downCamera from '../../../assets/images/contributor/downCamera.png';
import downFootage from '../../../assets/images/contributor/downFootage.png';
import downMusic from '../../../assets/images/contributor/downMusic.png';
import downTemp from '../../../assets/images/contributor/downTemp.png';
import clip from '../../../assets/images/contributor/clip.png';
import backArrow from '../../../assets/images/contributor/backArrow.png';
import nextArrow from '../../../assets/images/contributor/nextArrow.png';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setpath2 } from '../../../store/contriPathSlice';

const TopDownloads = () => {
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);
  const [downloadIsOpen, setDownloadIsOpen] = useState(false);
  // const data = null;
  const images = [
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
    {
      id: 'HB67346G3',
      image:
        'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spanish',
      category: 'Abstract',
      Usage: 'Commercial',
      Downloads: '245',
      Earnings: '$ 45.05',
      Description: `Color Splash series. Background design of
      fractal paint and rich texture on the subject of imagination,
      creativity and art.`,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setpath2('/ Top Downloads'));
  }, []);

  //   paginationn **dont change the sequence of the code below** else will give undefined error
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const dataToRender = images || [];

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
              Top Downloads
            </p>
            <p className='text-[0.688rem] text-primaryGray leading-[1.1]'>
              Refer a new customer to earn 30% of their first payment
              <span className='text-orangeColor'> Learn more</span>
            </p>
          </div>

          <div className='flex gap-[10px] relative'>
            <div>
              <button
                onClick={() => {
                  setDownloadIsOpen(!downloadIsOpen);
                }}
                className={`${
                  downloadIsOpen === true
                    ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#efefef]'
                    : 'rounded-[15px] border  border-[#d6d6d6]'
                } cursor-pointer w-[150px] text-[12px] h-[30px] flex items-center justify-between p-[10px]`}
                // className='cursor-pointer w-[120px] border border-[#d6d6d6] text-[12px] h-[30px] rounded-[15px] flex items-center justify-between p-[10px]'
              >
                <span className='text-[#bbbbbb]'>
                  All-Time Downloads
                </span>
                <img className='inline-block' src={dropdown} alt='' />
              </button>
              {downloadIsOpen && (
                <ul className='shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#ffffff] w-[150px] text-center text-[14px] text-primaryGray'>
                  <li className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'>
                    month
                  </li>
                  <li className='cursor-pointer hover:bg-[#F0F0F0] py-[5px]'>
                    year
                  </li>
                </ul>
              )}
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
        </div>
      </div>
      <div className='w-full'>
        <table className='table mt-[20px] w-[73.125rem] mx-[auto] border-separate border-spacing-0'>
          <thead>
            <tr className='text-center'>
              <th
                colSpan='4'
                className='text-[12px] h-[34px] text-primaryGray border-t border-r border-l rounded-tl-[10px] bg-[#ececec] border-[#dddddd] rounded-tr-[10px] '
              >
                <div className='flex justify-center gap-[15px]'>
                  <span>Total Downloads:</span>
                  <div className='flex gap-[5px] items-center'>
                    <div>
                      <img src={downCamera} alt='' />
                    </div>
                    <span>1457</span>
                  </div>

                  <div className='flex gap-[5px] items-center'>
                    <div>
                      <img src={downFootage} alt='' />
                    </div>
                    <span>1457</span>
                  </div>

                  <div className='flex gap-[5px] items-center'>
                    <div>
                      <img src={downMusic} alt='' />
                    </div>
                    <span>1457</span>
                  </div>

                  <div className='flex gap-[5px] items-center'>
                    <div>
                      <img src={downTemp} alt='' />
                    </div>
                    <span>1457</span>
                  </div>
                </div>
              </th>
            </tr>
            <tr className='text-center'>
              <th className='border text-[13px] border-[#dddddd] bg-[#ececec] text-primaryBlack text-[15px] font-medium py-[10px] pl-[10px]'>
                Content
              </th>
              <th className='border-t border-r border-b text-[13px] text-primaryBlack border-[#dddddd] bg-[#ececec] text-[15px] font-medium py-[10px] pl-[10px]'>
                Downloads
              </th>
              <th className='border-t border-r border-b text-[13px] border-[#dddddd] bg-[#ececec] text-primaryBlack text-[15px] font-medium py-[10px] pl-[10px]'>
                Earnings
              </th>
              <th className='border-t border-r border-b text-[13px] text-primaryBlack border-[#dddddd] bg-[#ececec] text-[15px] font-medium py-[10px] pl-[10px]'>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData &&
              currentData.map((image, index) => (
                <tr className=''>
                  <td
                    className={`border-l border-b border-[#dddddd] border-r text-primaryBlack p-[10px] flex items-center gap-[10px]
                ${
                  index === currentData.length - 1
                    ? 'rounded-bl-[10px]'
                    : ''
                }`}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${image.image})`,
                      }}
                      className='w-[65px] h-[65px] rounded-[10px] bg-no-repeat bg-center bg-cover flex items-end p-[5px]'
                    >
                      <img src={clip} alt='' />
                    </div>

                    <div>
                      <div className='text-primaryGray text-[12px]'>
                        <div className='flex'>
                          <p className='w-[97px]'>Image ID:</p>
                          <p>{image.id}</p>
                        </div>
                        <div className='flex'>
                          <p className='w-[97px]'>Image Title:</p>
                          <p>{image.title}</p>
                        </div>
                        <div className='flex'>
                          <p className='w-[97px]'>Image Category:</p>
                          <p>{image.category}</p>
                        </div>
                        <div className='flex '>
                          <p className='w-[97px]'>Image Usage:</p>
                          <p>{image.Usage}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='border-b border-[#dddddd] border-r text-[13px] text-primaryGray pl-[10px]'>
                    {image.Downloads}
                  </td>
                  <td className='border-b border-[#dddddd] border-r text-[13px] text-primaryGray pl-[10px]'>
                    {image.Earnings}
                  </td>
                  <td
                    className={`text-[13px] w-[483px] pl-[10px] pr-[140px] text-primaryGray border-b border-[#dddddd] border-r 
                ${
                  index === currentData.length - 1
                    ? 'rounded-br-[10px]'
                    : ''
                }
                `}
                  >
                    {image.Description}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center'>
          <div className='flex font-medium text-[13px] text-primaryGray mt-[30px] gap-[6px]'>
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
          <div className='flex justify-center'>
            <button className=' mt-[10px] blackBtn w-[88px]'>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopDownloads;
