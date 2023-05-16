import pro from '../../../assets/images/contributor/pro.png';
import location from '../../../assets/images/contributor/locationPointer.png';
import dashimg from '../../../assets/images/contributor/dashimg.png';
import map from '../../../assets/images/contributor/map.png';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import dropdown from '../../../assets/images/socials/dropdown.png';

// tabs

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// components
import BarChart from '../contri-components/BarChart';

const images = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '2',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Italian',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Italian',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Italian',
  },
  {
    id: '5',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Italian',
  },
  {
    id: '6',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Italian',
  },
  {
    id: '7',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '8',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '9',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '10',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '11',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '12',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '13',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '14',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '15',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '16',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
];

const Dashboard = () => {
  const [value, setValue] = useState('1');
  const [nestedValue, setNestedValue] = useState('2.1');

  // dropdown states
  const [isOpenSummary1, setIsOpenSummary1] = useState(false);
  const [isOpenSummary2, setIsOpenSummary2] = useState(false);

  const [isOpenMonthly1, setIsOpenMonthly1] = useState(false);
  const [isOpenMonthly2, setIsOpenMonthly2] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNestedChange = (event, newValue) => {
    setNestedValue(newValue);
  };

  return (
    <>
      <div className='w-full'>
        <div className='w-[1172px] mx-[auto] flex flex-col gap-[30px] pb-[335px]'>
          <div className='flex gap-[30px]'>
            <div
              className='w-[370px] h-[324px] rounded-[16px] px-[15px] py-[20px] flex gap-[15px]'
              style={{
                boxShadow: '#f0f0f0 0px 0px 4.3px 4px',
              }}
            >
              <div>
                <div
                  className='w-[92px] h-[92px] rounded-[92%] bg-no-repeat bg-center bg-cover'
                  style={{
                    backgroundImage: `url(${dashimg})`,
                  }}
                ></div>
              </div>
              <div className='flex flex-col gap-[17px]'>
                <div>
                  <img src={pro} alt='' />
                  <p className='text-[11px] text-primaryGray'>
                    Contributor ID: ANS578347506
                  </p>
                  <p className='text-primaryBlack text-[18px] font-medium leading-[1.2]'>
                    Azra Creations
                  </p>
                  <p className='text-[11px] text-primaryGray leading-[1.2] font-medium'>
                    Illustrator/Photographer
                  </p>
                  <p className='text-[11px] text-primaryGray leading-[1.2]'>
                    Specialization in Illustration and Photography
                  </p>
                  <p>
                    <img
                      className='inline-block'
                      src={location}
                      alt=''
                    />{' '}
                    <span className='text-[12px] text-primaryGray'>
                      Pune, India
                    </span>
                  </p>
                </div>
                <div>
                  <p className='text-[12px] font-medium text-primaryGray leading-[1] relative top-[3.6px]'>
                    75% Profile Strength
                  </p>
                  <Slider
                    sx={{
                      '& .MuiSlider-thumb': {
                        display: 'none',
                      },
                      '& .MuiSlider-track': {
                        backgroundColor: '#01e6e6',
                        border: 'none',
                      },
                      height: '8px',
                      width: '233px',
                      borderRadius: '4px',
                      paddingTop: '0px',
                      paddingBottom: '0px',
                    }}
                    disabled
                    defaultValue={75}
                    aria-label='Default'
                    // valueLabelDisplay='auto'
                  />
                </div>
                <div>
                  <p className='text-[12px] text-primaryGray'>
                    Increase your discoverability
                  </p>
                  <button className='w-[135px] h-[28px] text-[12px] font-medium text-[#ffffff] rounded-[14px] bg-[#8e8e8e] mt-[3px]'>
                    Upload Profile Photo
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: '#f0f0f0 0px 0px 4.3px 4px',
              }}
              className='w-[770px] h-[324px] rounded-[16px] px-[15px] py-[20px] flex flex-col gap-[15px]'
            >
              <p className='text-[18px] font-medium text-primaryBlack leading-[1]'>
                Upload Content
              </p>

              {/* test */}

              <Box
                sx={{
                  width: '301px',
                  height: '32px',
                  typography: 'body1',
                }}
              >
                <TabContext value={value}>
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: 'divider',
                      display: 'flex',
                      justifyContent: 'center',
                      borderBottom: 'none',
                    }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label='lab API tabs example'
                      sx={{
                        bgcolor: '#eeeeee',
                        color: '#757575',
                        borderRadius: '20px',
                        height: '32px!important',
                        minHeight: '32px!important',
                        fontSize: '12px',
                        padding: '0px',
                        // styles for the indicator
                        '& .MuiTabs-indicator': {
                          display: 'none',
                        },
                        // styles for the selected tab
                        '& .Mui-selected': {
                          bgcolor: '#bbbbbb',
                          color: '#333333!important',
                        },
                      }}
                    >
                      <Tab
                        label='Art'
                        value='1'
                        sx={{
                          textTransform: 'none!important',
                          fontWeight: '500',
                          fontSize: '12px',
                          position: 'relative',
                          bottom: '6.5px',
                          paddingRight: '10px',
                          paddingLeft: '16px',
                          minWidth: '40px!important',
                        }}
                      />
                      <Tab
                        label='Photos'
                        value='2'
                        sx={{
                          textTransform: 'none!important',
                          borderLeft: 'solid 1px #d7d7d7',
                          fontWeight: '500',
                          fontSize: '12px',
                          position: 'relative',
                          bottom: '6.5px',
                          padding: '10px',
                          minWidth: '40px!important',
                        }}
                      />

                      <Tab
                        label='Footage'
                        value='4'
                        sx={{
                          textTransform: 'none!important',
                          borderLeft: 'solid 1px #d7d7d7',
                          fontWeight: '500',
                          fontSize: '11px',
                          position: 'relative',
                          bottom: '6.5px',
                          padding: '10px',
                          minWidth: '40px!important',
                        }}
                      />
                      <Tab
                        label='Music'
                        value='5'
                        sx={{
                          textTransform: 'none!important',
                          borderLeft: 'solid 1px #d7d7d7',
                          fontWeight: '500',
                          fontSize: '12px',
                          position: 'relative',
                          bottom: '6.5px',
                          padding: '10px',
                          minWidth: '40px!important',
                        }}
                      />
                      <Tab
                        label='Templates'
                        value='6'
                        sx={{
                          textTransform: 'none!important',
                          borderLeft: 'solid 1px #d7d7d7',
                          fontWeight: '500',
                          fontSize: '12px',
                          position: 'relative',
                          bottom: '6.5px',
                          paddingRight: '16px',
                          paddingLeft: '10px',
                          minWidth: '40px!important',
                        }}
                      />
                    </TabList>
                  </Box>

                  <TabPanel value='1'>Item One </TabPanel>
                  <TabPanel
                    value='2'
                    sx={{
                      padding: '0px!important',
                    }}
                  >
                    <TabContext value={nestedValue}>
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: 'divider',
                          display: 'flex',
                          justifyContent: 'center',
                          borderBottom: 'none',
                          width: '336px!important',
                          paddingTop: '10px',
                          height: '43px',
                        }}
                      >
                        <TabList
                          onChange={handleNestedChange}
                          aria-label='nested tab example'
                          sx={{
                            '& .MuiTabs-indicator': {
                              display: 'none',
                            },
                            // styles for the selected tab
                            '& .Mui-selected': {
                              bgcolor: '#333333',
                              color: '#ffffff!important',
                              borderColor: '#333333',
                            },
                          }}
                        >
                          <Tab
                            label='To Submit'
                            value='2.1'
                            sx={{
                              textTransform: 'none!important',
                              border: '2px solid #eaeaea',
                              borderRadius: '11.5px!important',
                              color: '#7e7e7e',
                              fontSize: '11px',
                              height: '23px!important',
                              minHeight: 0,
                              minWidth: '70px',
                              padding: '0px',
                              marginRight: '3px',
                              '&:disabled': {
                                opacity: 1,
                                color: '#7e7e7e',
                              },
                            }}
                          />
                          <Tab
                            label='For Review'
                            value='2.2'
                            sx={{
                              textTransform: 'none!important',
                              border: '2px solid #eaeaea',
                              borderRadius: '11.5px!important',
                              color: '#7e7e7e',
                              fontSize: '11px',
                              height: '23px!important',
                              minHeight: 0,
                              minWidth: '70px',
                              paddingTop: '0px',
                              paddingBottom: '0px',
                              paddingRight: '8px',
                              paddingLeft: '8px',
                              marginRight: '3px',
                              '&:disabled': {
                                opacity: 1,
                                color: '#7e7e7e',
                              },
                            }}
                          />
                          <Tab
                            label='Approved Files'
                            value='2.3'
                            sx={{
                              textTransform: 'none!important',
                              border: '2px solid #eaeaea',
                              borderRadius: '11.5px!important',
                              color: '#7e7e7e',
                              fontSize: '11px',
                              height: '23px!important',
                              minHeight: 0,
                              minWidth: '70px',
                              paddingTop: '0px',
                              paddingBottom: '0px',
                              paddingRight: '8px',
                              paddingLeft: '8px',
                              marginRight: '3px',
                              '&:disabled': {
                                opacity: 1,
                                color: '#7e7e7e',
                              },
                            }}
                          />
                          <Tab
                            label='Rejected Files'
                            value='2.4'
                            sx={{
                              textTransform: 'none!important',
                              border: '2px solid #eaeaea',
                              borderRadius: '11.5px!important',
                              color: '#7e7e7e',
                              fontSize: '11px',
                              height: '23px!important',
                              minHeight: 0,
                              minWidth: '70px',
                              paddingTop: '0px',
                              paddingBottom: '0px',
                              paddingRight: '8px',
                              paddingLeft: '8px',
                            }}
                          />
                        </TabList>
                      </Box>
                      <TabPanel
                        value='2.1'
                        sx={{ padding: '0px', minWidth: '530px' }}
                      >
                        <div className='flex justify-center'>
                          <div className='flex justify-center min-w-[530px] h-[30px]  border-t-[1px] border-[#efefef] border-b-[1px]'>
                            <div className='flex gap-[2px] h-[31px]'>
                              <div className='h-[23px] relative top-[3px] border-[#efefef]'>
                                <p className='text-[26px] text-[#cfcfcf] max-h-[100%] relative bottom-[7px] font-thin'>
                                  1
                                </p>
                              </div>
                              <div>
                                <p className='text-[11px] text-[#cfcfcf] pt-[3.5px] leading-3'>
                                  File(s) to be submitted to ArtnStock
                                </p>
                              </div>
                            </div>

                            <div className='flex gap-[2px] h-[31px]'>
                              <div className='h-[23px] border-l-[1px] relative top-[3px] border-[#efefef]'>
                                <p className='text-[26px] text-[#cfcfcf]  pl-[7px] max-h-[100%] relative bottom-[7px] font-thin'>
                                  91
                                </p>
                              </div>
                              <div>
                                <p className='text-[11px] text-[#cfcfcf] pt-[3.5px] leading-3'>
                                  File(s) pending for review
                                </p>
                              </div>
                            </div>
                            <div className='flex gap-[2px] h-[31px]'>
                              <div className='h-[23px] border-l-[1px] relative top-[3px] border-[#efefef]'>
                                <p className='text-[26px] text-[#cfcfcf]  pl-[7px] relative bottom-[7px] font-thin'>
                                  0
                                </p>
                              </div>
                              <div>
                                <p className='text-[11px] text-[#cfcfcf] pt-[3.5px] leading-3'>
                                  File(s) approved by ArtnStock
                                </p>
                              </div>
                            </div>
                            <div className='flex gap-[2px] h-[31px]'>
                              <div className='h-[23px] border-l-[1px] relative top-[3px] border-[#efefef]'>
                                <p className='text-[26px] text-[#cfcfcf] pl-[7px] relative bottom-[7px] font-thin'>
                                  0
                                </p>
                              </div>
                              <div>
                                <p className='text-[11px] text-[#cfcfcf] pt-[3.5px] leading-3'>
                                  File(s) rejected by ArtnStock
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='w-[730px] flex flex-wrap gap-[8px] mt-[10px]'>
                          {images.map((image) => (
                            <div
                              style={{
                                backgroundImage: `url(${image.image})`,
                              }}
                              className='w-[65px] h-[65px] rounded-[10px] bg-no-repeat bg-center bg-cover'
                            ></div>
                          ))}
                        </div>
                      </TabPanel>
                      <TabPanel
                        value='2.2'
                        sx={{ padding: '0px', minWidth: '530px' }}
                      >
                        <div className='flex justify-center'>
                          <div className='flex justify-center min-w-[530px] h-[30px]  border-t-[1px] border-[#efefef] border-b-[1px]'>
                            <div className='flex gap-[2px] h-[31px]'>
                              <div className='h-[23px] relative top-[3px] border-[#efefef]'>
                                <p className='text-[26px] text-[#cfcfcf] max-h-[100%] relative bottom-[7px] font-thin'>
                                  1
                                </p>
                              </div>
                              <div>
                                <p className='text-[11px] text-[#cfcfcf] pt-[3.5px] leading-3'>
                                  File(s) to be submitted to ArtnStock
                                </p>
                              </div>
                            </div>
                            <div className='flex gap-[2px] h-[31px]'>
                              <div className='h-[23px] border-l-[1px] relative top-[3px] border-[#efefef]'>
                                <p className='text-[26px] text-[#cfcfcf]  pl-[7px] max-h-[100%] relative bottom-[7px] font-thin'>
                                  91
                                </p>
                              </div>
                              <div>
                                <p className='text-[11px] text-[#cfcfcf] pt-[3.5px] leading-3'>
                                  File(s) pending for review
                                </p>
                              </div>
                            </div>
                            <div className='flex gap-[2px] h-[31px]'>
                              <div className='h-[23px] border-l-[1px] relative top-[3px] border-[#efefef]'>
                                <p className='text-[26px] text-[#cfcfcf]  pl-[7px] relative bottom-[7px] font-thin'>
                                  0
                                </p>
                              </div>
                              <div>
                                <p className='text-[11px] text-[#cfcfcf] pt-[3.5px] leading-3'>
                                  File(s) approved by ArtnStock
                                </p>
                              </div>
                            </div>
                            <div className='flex gap-[2px] h-[31px]'>
                              <div className='h-[23px] border-l-[1px] relative top-[3px] border-[#efefef]'>
                                <p className='text-[26px] text-[#cfcfcf] pl-[7px] relative bottom-[7px] font-thin'>
                                  0
                                </p>
                              </div>
                              <div>
                                <p className='text-[11px] text-[#cfcfcf] pt-[3.5px] leading-3'>
                                  File(s) rejected by ArtnStock
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='w-[730px] flex flex-wrap gap-[8px] mt-[10px]'>
                          {images.map((image) => (
                            <div
                              style={{
                                backgroundImage: `url(${image.image})`,
                              }}
                              className='w-[65px] h-[65px] rounded-[10px] bg-no-repeat bg-center bg-cover'
                            ></div>
                          ))}
                        </div>
                      </TabPanel>
                      <TabPanel
                        value='2.3'
                        sx={{ paddingTop: '0px' }}
                      >
                        nested 3
                      </TabPanel>
                      <TabPanel
                        value='2.4'
                        sx={{ paddingTop: '0px' }}
                      >
                        nested 4
                      </TabPanel>
                    </TabContext>
                  </TabPanel>
                  <TabPanel value='4'>Item Three</TabPanel>
                  <TabPanel value='5'>Item Four</TabPanel>
                  <TabPanel value='6'>Item Five</TabPanel>
                </TabContext>
              </Box>

              {/* test */}
            </div>
          </div>

          {/* second row */}
          <div className='flex gap-[30px]'>
            {/* first box */}
            <div
              style={{
                boxShadow: '#f0f0f0 0px 0px 4.3px 4px',
              }}
              className='w-[370px] h-[495px] rounded-[16px] px-[15px] py-[20px] flex flex-col'
            >
              <p className='text-[18px] font-medium text-primaryBlack'>
                Earnings Summary
              </p>
              <div className='flex flex-col gap-[15px]'>
                <div className='flex justify-between pt-[10px]'>
                  {/* test */}
                  <div>
                    <button
                      onClick={() => {
                        setIsOpenSummary1(!isOpenSummary1);
                      }}
                      className={`${
                        isOpenSummary1 === true
                          ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#efefef]'
                          : 'rounded-[15px] border  border-[#d6d6d6]'
                      } w-[165px]  text-[12px] h-[32px] p-[10px] flex items-center justify-between z-50`}

                      // className='w-[165px] border border-[#d6d6d6] text-[12px] h-[32px] rounded-[15px] flex items-center justify-between p-[10px]'
                    >
                      <span className='text-[#bbbbbb]'>All</span>
                      <img
                        className='inline-block'
                        src={dropdown}
                        alt=''
                      />
                    </button>
                    {isOpenSummary1 && (
                      <ul className='shadow-dropShadow rounded-b-[20px] hover:overflow-hidden absolute bg-[#ffffff] text-center text-[13px] text-primaryGray w-[165px]'>
                        <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0] border-b border-[#efefef]'>
                          Digital
                        </li>
                        <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0] border-b border-[#efefef]'>
                          Digital
                        </li>
                        <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0]'>
                          Digital
                        </li>
                      </ul>
                    )}
                  </div>
                  {/* test */}

                  <div>
                    <button
                      onClick={() => {
                        setIsOpenSummary2(!isOpenSummary2);
                      }}
                      className={`${
                        isOpenSummary2 === true
                          ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#efefef]'
                          : 'rounded-[15px] border border-[#d6d6d6]'
                      } w-[165px] text-[12px] h-[32px] p-[10px] flex items-center justify-between z-50`}

                      // className='w-[165px] border border-[#d6d6d6] text-[12px] h-[32px] rounded-[15px] flex items-center justify-between p-[10px]'
                    >
                      <span className='text-[#bbbbbb]'>All Time</span>
                      <img
                        className='inline-block'
                        src={dropdown}
                        alt=''
                      />
                    </button>
                    {isOpenSummary2 && (
                      <ul className='z-50 shadow-dropShadow rounded-b-[20px] hover:overflow-hidden absolute bg-[#ffffff] text-center text-[13px] text-primaryGray w-[165px]'>
                        <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0] border-b border-[#efefef]'>
                          Digital
                        </li>
                        <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0] border-b border-[#efefef]'>
                          Digital
                        </li>
                        <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0]'>
                          Digital
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className='flex flex-col'>
                  <p className='text-[15px] font-medium text-primaryBlack leading-[1]'>
                    Total Earnings
                  </p>
                  <p className='text-[38px] text-orangeColor leading-[1]'>
                    <span className='text-[20px]'>$</span>665.00
                  </p>
                </div>
                <div className='flex flex-col'>
                  <div className='flex justify-between border-t-[2px] border-b-[2px] border-[#efefef] py-[1.3px]'>
                    <span className='text-[12px] font-medium flex w-[108px]'>
                      Earning Types{' '}
                      <div className='bg-[#bbbbbb] w-[16px] h-[16px] text-[white] text-center rounded-[50%] ml-[5px]'>
                        ?
                      </div>
                    </span>
                    <span className='text-[12px] font-medium w-[90px]'>
                      Total Downloads
                    </span>
                    <span className='text-[12px] font-medium w-[70px]'>
                      Amount
                    </span>
                  </div>
                  <div className='flex justify-between border-b border-[#efefef] py-[1.3px] text-primaryGray'>
                    <span className='text-[12px] flex w-[108px]'>
                      Subscriptions
                    </span>
                    <span className='text-[12px] w-[90px] text-center'>
                      908
                    </span>
                    <span className='text-[12px] w-[70px]'>
                      $400.00
                    </span>
                  </div>
                  <div className='flex justify-between border-b border-[#efefef] py-[1.3px] text-primaryGray'>
                    <span className='text-[12px] flex w-[108px]'>
                      Standard
                    </span>
                    <span className='text-[12px] w-[90px] text-center'>
                      5
                    </span>
                    <span className='text-[12px] w-[70px]'>
                      $40.00
                    </span>
                  </div>
                  <div className='flex justify-between border-b border-[#efefef] py-[1.3px] text-primaryGray'>
                    <span className='text-[12px] flex w-[108px]'>
                      Enhanced
                    </span>
                    <span className='text-[12px] w-[90px] text-center'>
                      7
                    </span>
                    <span className='text-[12px] w-[70px]'>
                      $88.00
                    </span>
                  </div>
                  <div className='flex justify-between border-b border-[#efefef] py-[1.3px] text-primaryGray'>
                    <span className='text-[12px] flex w-[108px]'>
                      Market-Freeze
                    </span>
                    <span className='text-[12px] w-[90px] text-center'>
                      20
                    </span>
                    <span className='text-[12px] w-[70px]'>
                      $567.00
                    </span>
                  </div>
                  <div className='flex justify-between border-b border-[#efefef] py-[1.3px] text-primaryGray'>
                    <span className='text-[12px] flex w-[108px]'>
                      Referrals
                    </span>
                    <span className='text-[12px] w-[90px] text-center'>
                      76
                    </span>
                    <span className='text-[12px] w-[70px]'>
                      $900.00
                    </span>
                  </div>
                  <p className='text-[11px] text-orangeColor pt-[2px]'>
                    View detailed Earnings Summary
                  </p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-[15px] font-medium text-primaryBlack leading-[1]'>
                    Unpaid Earnings
                  </p>
                  <p className='text-[38px] text-orangeColor leading-[1]'>
                    <span className='text-[20px]'>$</span>65.00
                  </p>
                  <p className='text-[11px] text-primaryGray leading-[1]'>
                    *Updated approximately every 15 minutes
                  </p>
                </div>
                <p className='text-[12px] text-primaryGray leading-[1.2]'>
                  Payments are calculated at the end of every month
                  for contributors who meet their minimum payout
                  amount.{' '}
                  <span className='text-orangeColor'>Learn more</span>
                </p>
              </div>
            </div>
            {/* second box */}
            <div
              style={{
                boxShadow: '#f0f0f0 0px 0px 4.3px 4px',
              }}
              className='w-[370px] h-[495px] rounded-[16px] px-[15px] py-[20px] flex flex-col'
            >
              <p className='text-[18px] font-medium text-primaryBlack'>
                Monthly Earnings
              </p>
              <div className='flex flex-col gap-[13px]'>
                <div className='flex flex-col '>
                  <div className='flex justify-between pt-[10px]'>
                    {/* test */}
                    <div>
                      <button
                        onClick={() => {
                          setIsOpenMonthly1(!isOpenMonthly1);
                        }}
                        className={`${
                          isOpenMonthly1 === true
                            ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#efefef]'
                            : 'rounded-[15px] border  border-[#d6d6d6]'
                        } w-[165px]  text-[12px] h-[32px] p-[10px] flex items-center justify-between z-50`}

                        // className='w-[165px] border border-[#d6d6d6] text-[12px] h-[32px] rounded-[15px] flex items-center justify-between p-[10px]'
                      >
                        <span className='text-[#bbbbbb]'>All</span>
                        <img
                          className='inline-block'
                          src={dropdown}
                          alt=''
                        />
                      </button>
                      {isOpenMonthly1 && (
                        <ul className='shadow-dropShadow rounded-b-[20px] hover:overflow-hidden absolute bg-[#ffffff] text-center text-[13px] text-primaryGray w-[165px]'>
                          <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0] border-b border-[#efefef]'>
                            Digital
                          </li>
                          <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0] border-b border-[#efefef]'>
                            Digital
                          </li>
                          <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0]'>
                            Digital
                          </li>
                        </ul>
                      )}
                    </div>
                    {/* test */}

                    {/* test */}
                    <div>
                      <button
                        onClick={() => {
                          setIsOpenMonthly2(!isOpenMonthly2);
                        }}
                        className={`${
                          isOpenMonthly2 === true
                            ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#efefef]'
                            : 'rounded-[15px] border  border-[#d6d6d6]'
                        } w-[165px]  text-[12px] h-[32px] p-[10px] flex items-center justify-between z-50`}

                        // className='w-[165px] border border-[#d6d6d6] text-[12px] h-[32px] rounded-[15px] flex items-center justify-between p-[10px]'
                      >
                        <span className='text-[#bbbbbb]'>
                          Past 12 Months
                        </span>
                        <img
                          className='inline-block'
                          src={dropdown}
                          alt=''
                        />
                      </button>
                      {isOpenMonthly2 && (
                        <ul className='shadow-dropShadow rounded-b-[20px] hover:overflow-hidden absolute bg-[#ffffff] text-center text-[13px] text-primaryGray w-[165px]'>
                          <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0] border-b border-[#efefef]'>
                            Digital
                          </li>
                          <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0] border-b border-[#efefef]'>
                            Digital
                          </li>
                          <li className='cursor-pointer h-[32px] flex items-center justify-center hover:bg-[#f0f0f0]'>
                            Digital
                          </li>
                        </ul>
                      )}
                    </div>
                    {/* test */}
                  </div>
                </div>
                <div className='h-[275px]'>
                  <BarChart />
                </div>
                <p className='text-[12px] text-primaryGray leading-[1.2]'>
                  This tool helps you compare your earnings from month
                  to month. You can filter results by image type, as
                  well as range or time.
                </p>
              </div>
            </div>
            {/* third box */}
            <div
              style={{
                boxShadow: '#f0f0f0 0px 0px 4.3px 4px',
              }}
              className='w-[370px] h-[495px] rounded-[16px] px-[15px] py-[20px] flex flex-col'
            >
              <p className='text-[18px] font-medium text-primaryBlack'>
                Downloads
              </p>
              <div className='flex flex-col gap-[13px]'>
                <div>
                  <div className='flex justify-center'>
                    <img src={map} alt='' />
                  </div>
                  <p className='text-[12px] text-primaryGray'>
                    <span className='text-orangeColor text-[75px] leading-[0]'>
                      .
                    </span>{' '}
                    Latest Download: Pune, India
                  </p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-[15px] font-medium text-primaryBlack leading-[1]'>
                    Total Downloads
                  </p>
                  <p className='text-[38px] text-orangeColor leading-[1]'>
                    482
                  </p>
                </div>
                {/* test */}
                <div className='flex flex-col'>
                  <div className='flex justify-between border-t-[2px] border-b-[2px] border-[#efefef] py-[1.3px]'>
                    <span className='text-[12px] font-medium flex w-[42px]'>
                      Image{' '}
                    </span>
                    <span className='text-[12px] font-medium flex w-[140px]'>
                      Location
                    </span>
                    <span className='text-[12px] font-medium w-[75px]'>
                      Earnings
                    </span>
                    <span className='text-[12px] font-medium w-[70px]'>
                      Date
                    </span>
                  </div>
                  {/* <div className='flex justify-between border-b border-[#efefef] py-[1.3px] text-primaryGray'>
                    <span className='text-[12px] flex w-[34px]'>
                      <div
                        className='w-[32px] h-[32px] bg-no-repeat bg-center bg-cover'
                        style={{
                          backgroundImage:
                            'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        }}
                      ></div>
                    </span>
                    <span className='text-[12px] flex w-[140px]'>
                      Subscriptions
                    </span>
                    <span className='text-[12px] w-[75px] text-center'>
                      908
                    </span>
                    <span className='text-[12px] w-[70px]'>
                      $400.00
                    </span>
                  </div> */}
                  <div className='flex justify-between border-b border-[#efefef] py-[1.3px] text-primaryGray'>
                    <span className='text-[12px] flex w-[42px]'>
                      <div
                        className='w-[32px] h-[32px] bg-no-repeat bg-center bg-cover rounded-[4px]'
                        style={{
                          backgroundImage:
                            'url(https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                        }}
                      ></div>
                    </span>
                    <span className='text-[12px] flex w-[140px] my-[auto]'>
                      Sydney, Australia
                    </span>
                    <span className='text-[12px] w-[75px] my-[auto]'>
                      $5000
                    </span>
                    <span className='text-[12px] w-[70px] my-[auto]'>
                      09/08/2021
                    </span>
                  </div>
                  <div className='flex justify-between border-b border-[#efefef] py-[1.3px] text-primaryGray'>
                    <span className='text-[12px] flex w-[42px]'>
                      <div
                        className='w-[32px] h-[32px] bg-no-repeat bg-center bg-cover rounded-[4px]'
                        style={{
                          backgroundImage:
                            'url(https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        }}
                      ></div>
                    </span>
                    <span className='text-[12px] flex w-[140px] my-[auto]'>
                      Pune, India
                    </span>
                    <span className='text-[12px] w-[75px] my-[auto]'>
                      $7000
                    </span>
                    <span className='text-[12px] w-[70px] my-[auto]'>
                      08/09/2022
                    </span>
                  </div>
                  <div className='flex justify-between border-b border-[#efefef] py-[1.3px] text-primaryGray'>
                    <span className='text-[12px] flex w-[42px]'>
                      <div
                        className='w-[32px] h-[32px] bg-no-repeat bg-center bg-cover rounded-[4px]'
                        style={{
                          backgroundImage:
                            'url(https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                        }}
                      ></div>
                    </span>
                    <span className='text-[12px] flex w-[140px] my-[auto]'>
                      Ohio, USA
                    </span>
                    <span className='text-[12px] w-[75px] my-[auto]'>
                      $8908
                    </span>
                    <span className='text-[12px] w-[70px] my-[auto]'>
                      08/02/2020
                    </span>
                  </div>
                  <div className='flex justify-between border-b border-[#efefef] py-[1.3px] text-primaryGray'>
                    <span className='text-[12px] flex w-[42px]'>
                      <div
                        className='w-[32px] h-[32px] bg-no-repeat bg-center bg-cover rounded-[4px]'
                        style={{
                          backgroundImage:
                            'url(https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        }}
                      ></div>
                    </span>
                    <span className='text-[12px] flex w-[140px] my-[auto]'>
                      Columbo, Srilanka
                    </span>
                    <span className='text-[12px] w-[75px] my-[auto]'>
                      $2000
                    </span>
                    <span className='text-[12px] w-[70px] my-[auto]'>
                      07/09/2022
                    </span>
                  </div>
                </div>
                {/* test */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
