import React, { useEffect, useState } from 'react';
import { httpClient } from '../../../axios';
import addIcon from '../../../assets/images/Icons/addIcon.svg';
import soppingIcon from '../../../assets/images/Icons/shoppingCart.svg';
import artIcon from '../../../assets/images/Icons/artIcon.svg';
import shareIcon from '../../../assets/images/Icons/shareIcon.svg';

// prathamesh
import magart from '../../../assets/images/combo/magart.png';
import magart2 from '../../../assets/images/combo/magart2.png';
import magart3 from '../../../assets/images/combo/magart3.png';
import artComboLogo from '../../../assets/images/combo/artComboLogo.png';
import { useNavigate } from 'react-router-dom';

const Combo = ({ logo, comboHeading }) => {
  const [comboList, setComboList] = useState([]);

  const [popupOpen, setPopupOpen] = useState(false);
  useEffect(() => {
    getComboList();
  }, []);

  const getComboList = () => {
    httpClient.get('/combo_master/getActiveList').then((res) => {
      // console.log(res);
      setComboList(res.data);
    });
  };

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate('/category-combo-pack', {
      state: { data: data },
    });
  };

  return (
    <div
      onMouseEnter={() => setPopupOpen(false)}
      className='w-w1168 mx-auto text-center'
    >
      <img
        onMouseEnter={() => setPopupOpen(false)}
        src={logo}
        className='mx-auto'
        alt=''
      />
      <img
        onMouseEnter={() => setPopupOpen(false)}
        src={comboHeading}
        className='mx-auto mt-2.5 mb-6'
        alt=''
      />
      <div
        onMouseEnter={() => setPopupOpen(false)}
        className='grid grid-cols-3 gap-4'
      >
        {comboList.map((data, i) => {
          if (i <= 2) {
            return (
              <div
                onClick={() => {
                  handleClick(data);
                }}
                // onMouseEnter is used on divs to avoid flickering problem of popup
                onMouseEnter={() => setPopupOpen(false)}
                key={data?.comboId}
                className='w-[23.688rem] z-50'
              >
                <div className='h-[23.688rem] w-full group rounded-2xl relative'>
                  <img
                    onMouseOut={() => setPopupOpen(false)}
                    src={data?.image}
                    alt=''
                  />
                  <div
                    style={{ padding: '4px 12px' }}
                    className='absolute left-1/2 bottom-4 bg-pinkColor text-[#ffffff] rounded-full p-3'
                  >
                    {data?.count}
                  </div>
                  <div
                    className='group-hover:flex rounded-2xl hidden bg-blackRgba items-center justify-center absolute top-0 left-0 text-center'
                    style={{ height: 'inherit', width: '100%' }}
                  >
                    {/* test */}

                    {/* test */}
                    {popupOpen && (
                      <div
                        className={`z-999 right-[117px] bottom-[15px] relative h-[322px] bg-[#fff] rounded-[16px]`}
                        style={{
                          boxShadow:
                            '0px 0px 18px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        <div className='flex flex-col p-[14px] leading-[1.3] w-[420px] '>
                          <p className='font-semibold text-primaryBlack text-[15px]'>
                            Designs used on Products
                          </p>
                          <p className='text-primaryBlack text-[12px]'>
                            Attractive sorted prints on products of
                            high quality
                          </p>
                          <div className='flex flex-wrap mt-[9px] gap-[10px]'>
                            <div className='w-[90px] h-[90px] border-[#efefef] border rounded-[10px]'>
                              <img
                                className='mx-auto'
                                src={magart}
                                alt=''
                              />
                            </div>
                            <div className='w-[90px] h-[90px] border-[#efefef] border rounded-[10px]'>
                              <img
                                className='mx-auto'
                                src={magart2}
                                alt=''
                              />
                            </div>
                            <div className='w-[90px] h-[90px] border-[#efefef] border rounded-[10px]'>
                              <img
                                className='mx-auto'
                                src={magart3}
                                alt=''
                              />
                            </div>

                            <div className='w-[90px] h-[90px] border-[#efefef] border rounded-[10px]'></div>
                            <div className='w-[90px] h-[90px] border-[#efefef] border rounded-[10px]'></div>
                          </div>
                          <div>
                            <img
                              className='mx-auto mt-[15px]'
                              src={artComboLogo}
                              alt=''
                            />
                          </div>
                        </div>
                        <div className='absolute left-[47%] bottom-[-10px] w-[20px] h-[20px] bg-[white] rounded-br-[5px] transform rotate-45 shadow-inner'></div>
                      </div>
                    )}

                    <div className='absolute bottom-2.5 left-2.5 flex gap-2.5 cursor-pointer'>
                      <img src={addIcon} alt='' />
                      <img src={soppingIcon} alt='' />

                      <img
                        className='z-[99]'
                        onClick={(e) => {
                          setPopupOpen(!popupOpen);
                          e.stopPropagation();
                        }}
                        src={artIcon}
                        alt=''
                      />

                      <img src={shareIcon} alt='' />
                    </div>
                  </div>
                </div>
                <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                  {data?.title}
                </p>
                <p className='text-primaryGray text-sm12 leading-[15px]'>
                  <span className='font-medium'>Products: </span>
                  {data?.description}
                </p>
                <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                  ${data?.price}
                </p>
              </div>
            );
          }
        })}
      </div>
      <button
        onClick={() => {
          navigate('/combo-pack');
        }}
        className='blackBtn mx-auto block mt-7'
      >
        Discover More
      </button>
    </div>
  );
};

export default Combo;
