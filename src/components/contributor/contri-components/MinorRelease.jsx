import dropdown from '../../../assets/images/socials/dropdown.png';
import view from '../../../assets/images/contributor/view.png';
import edit from '../../../assets/images/contributor/edit.png';
import deletee from '../../../assets/images/contributor/delete.png';
import searchIcon from '../../../assets/images/Icons/searchDarkIcon.svg';
import backArrow from '../../../assets/images/contributor/backArrow.png';
import nextArrow from '../../../assets/images/contributor/nextArrow.png';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setpath2 } from '../../../store/contriPathSlice';

const images = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Spanish',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '2',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Italian',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Spanish',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Italian',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Spanish',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '2',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Italian',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Spanish',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Italian',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Spanish',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '2',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Italian',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Spanish',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Italian',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Spanish',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '2',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Italian',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Spanish',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    title: 'Italian',
    category: 'Abstract',
    Usage: 'Commercial',
    type: 'Property Release',
    form: 'Blue sky and nature Lorem Ipsum dolor amet',
  },
];

const MinorRelease = () => {
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);
  //   paginationn **dont change the sequence of the code below** else will give undefined error
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const dataToRender = images || [];

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = dataToRender.slice(start, end);

  const totalPages = Math.ceil(dataToRender.length / itemsPerPage);

  const handlePrevPage = () => {
    // console.log(currentPage);
    if (currentPage > 1 && currentPage <= totalPages) {
      console.log('i am running');
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    // console.log(currentPage);
    if (currentPage >= 1 && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setpath2('/ Minor Release'));
  }, []);

  return (
    <div>
      <div className='flex justify-center'>
        <div className='flex justify-center border-t-[0.063rem] border-[#efefef] border-b-[0.063rem]'>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <p className='text-[3.000rem] text-[#cfcfcf] relative bottom-[0.688rem] font-thin'>
              33
            </p>
            <p className='text-[0.688rem] text-[#cfcfcf] pt-[0.375rem] max-w-[70px] leading-3'>
              Releases Uploaded on ArtnStock
            </p>
          </div>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <div className='h-[2.375rem] border-l-[0.063rem] relative top-[0.313rem] border-[#efefef]'>
              <p className='text-[3.000rem] text-[#cfcfcf]  pl-[0.438rem] max-h-[100%] relative bottom-[0.938rem] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[0.688rem] text-[#cfcfcf] max-w-[65px] pt-[0.375rem] leading-3'>
                Property releases uploaded
              </p>
            </div>
          </div>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <div className='h-[2.375rem] border-l-[0.063rem] relative top-[0.313rem] border-[#efefef]'>
              <p className='text-[3.000rem] text-[#cfcfcf]  pl-[0.438rem] relative bottom-[0.938rem] font-thin'>
                00
              </p>
            </div>
            <div>
              <p className='text-[0.688rem] text-[#cfcfcf] max-w-[65px] pt-[0.375rem] leading-3'>
                Model releases uploaded
              </p>
            </div>
          </div>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <div className='h-[2.375rem] border-l-[0.063rem] relative top-[0.313rem] border-[#efefef]'>
              <p className='text-[3.000rem] text-[#cfcfcf] pl-[0.438rem] relative bottom-[0.938rem] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[0.688rem] text-[#cfcfcf] max-w-[65px] pt-[0.375rem] leading-3'>
                Minor releases uploaded
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] flex justify-center pt-[15px]'>
        <div className='w-[73.125rem] flex justify-between items-center'>
          <div className='max-w-[12.46rem] mt-[0.625rem]'>
            <p className='text-[1.563rem] font-medium'>
              Minor Release{' '}
            </p>
            <p className='text-[0.688rem] text-primaryGray leading-[1.1]'>
              Refer a new customer to earn 30% of their first payment
              <span className='text-orangeColor'> Learn more</span>
            </p>
          </div>

          <div className='w-[3.125rem] h-[3.125rem] text-center flex flex-col justify-between ml-[7rem]'>
            <img
              className='mx-[auto] w-[16px]'
              src={deletee}
              alt=''
            />

            <p className='text-[0.688rem] text-primaryGray leading-[1]'>
              Delete Release(s)
            </p>
          </div>

          <div className='flex gap-[0.56rem] '>
            {/* test */}
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
            {/* test */}

            <button className='greenBlueButton w-[12.313rem] h-[1.875rem] text-[0.813rem] font-medium px-[0.313rem]'>
              Download New Release Form
            </button>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='mt-3.5 flex items-center w-[73.125rem] mx-[auto]'>
          <input
            className='bg-[#EEEEEE] flex-1 outline-0 py-3 px-5 placeholder:text-placeholderColor placeholder:font-medium rounded-tl-3xl rounded-bl-3xl  border-[#DADADA]'
            type='text'
            placeholder='Search by Release Name'
          />

          <button className=' py-3.5 rounded-tr-3xl rounded-br-3xl bg-[#e6e6e6] px-4 text-primaryBlack text-sm14 font-medium'>
            <img
              className='inline-block mr-2'
              src={searchIcon}
              alt=''
            />
            Search
          </button>
        </div>
      </div>
      <div className='w-full'>
        <table className='table mt-[20px] w-[73.125rem] mx-[auto] rounded-[10px] border-separate border-spacing-0'>
          <thead>
            <tr>
              <th className='border text-[13px] border-[#dddddd] rounded-tl-[10px] bg-[#ececec] text-primaryBlack text-[15px] font-medium text-start py-[10px] pl-[10px]'>
                Content Attached
              </th>
              <th className='border-t border-r border-b text-[13px] text-primaryBlack border-[#dddddd] bg-[#ececec] text-[15px] font-medium text-start py-[10px] pl-[10px]'>
                Release Type
              </th>
              <th className='border-t border-r border-b text-[13px] border-[#dddddd] bg-[#ececec] text-primaryBlack text-[15px] font-medium text-start py-[10px] pl-[10px]'>
                Release Forms
              </th>
              <th className='border-t border-r border-b text-[13px] text-primaryBlack border-[#dddddd] bg-[#ececec] text-[15px] font-medium text-start py-[10px] pl-[10px]'>
                Date Uploaded
              </th>
              <th className='border-t border-r border-b rounded-tr-[10px] text-[13px] text-primaryBlack border-[#dddddd] bg-[#ececec] text-[15px] font-medium text-start py-[10px] pl-[10px]'></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((image, index) => (
              <tr className=''>
                <td
                  className={`border-l border-b border-[#dddddd] border-r text-primaryBlack font-medium flex p-[10px] flex gap-[10px]
                ${
                  index === currentData.length - 1
                    ? 'rounded-bl-[10px]'
                    : ''
                }`}
                >
                  <input type='checkbox' />{' '}
                  <img
                    className='w-[64px] h-[64px] rounded-[10px]'
                    src={image.image}
                  />{' '}
                  <div>
                    <div className='text-primaryGray text-[11px]'>
                      <div className='flex'>
                        <p className='w-[89px] font-medium'>
                          Image ID:
                        </p>
                        <p>{image.id}</p>
                      </div>
                      <div className='flex'>
                        <p className='w-[89px] font-medium'>
                          Image Title:
                        </p>
                        <p>{image.title}</p>
                      </div>
                      <div className='flex'>
                        <p className='w-[89px] font-medium'>
                          Image Category:
                        </p>
                        <p>{image.category}</p>
                      </div>
                      <div className='flex '>
                        <p className='w-[89px] font-medium'>
                          Image Usage:
                        </p>
                        <p>{image.Usage}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className='border-b border-[#dddddd] border-r text-[12px] text-primaryGray pl-[10px]'>
                  {image.type}
                </td>
                <td className='border-b border-[#dddddd] border-r text-[12px] text-primaryGray pl-[10px]'>
                  {image.form}
                </td>
                <td className='border-b border-[#dddddd] border-r text-[12px] text-primaryGray pl-[10px]'>
                  {image.uploaded}
                </td>
                <td
                  className={`text-[12px] text-primaryGray border-b border-[#dddddd] border-r 
                ${
                  index === currentData.length - 1
                    ? 'rounded-br-[10px]'
                    : ''
                }
                `}
                >
                  <div className='flex gap-[13px] justify-center'>
                    <div className='pt-[3px]'>
                      <img src={view} alt='' />
                    </div>
                    <div>
                      <img src={edit} alt='' />
                    </div>
                    <div>
                      <img src={deletee} alt='' />
                    </div>
                  </div>
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
    </div>
  );
};

export default MinorRelease;
