import selectall from '../../../assets/images/contributor/selectall.png';
import deleteicon from '../../../assets/images/contributor/delete-icon.png';
import undo from '../../../assets/images/contributor/undo.png';
import redo from '../../../assets/images/contributor/redo.png';
import save from '../../../assets/images/contributor/save.png';
import keyword from '../../../assets/images/contributor/keyword.png';

import artcolor from '../../../assets/images/contributor/artcolor.png';
import shirtcolor from '../../../assets/images/contributor/shirtcolor.png';
import mugcolor from '../../../assets/images/contributor/mugcolor.png';
import glasscolor from '../../../assets/images/contributor/glasscolor.png';
import mousecolor from '../../../assets/images/contributor/mousecolor.png';
import coastercolor from '../../../assets/images/contributor/coastercolor.png';
import flowercolor from '../../../assets/images/contributor/flowercolor.png';
import giftcolor from '../../../assets/images/contributor/giftcolor.png';
import bagcolor from '../../../assets/images/contributor/bagcolor.png';
import notepadcolor from '../../../assets/images/contributor/notepadcolor.png';
import shirtfront from '../../../assets/images/contributor/shirtfront.png';
import shirtback from '../../../assets/images/contributor/shirtback.png';
import info from '../../../assets/images/contributor/info.png';
import scale from '../../../assets/images/contributor/scale.png';
import dropdown from '../../../assets/images/socials/dropdown.png';

import frree from '../../../assets/images/combo/free.png';

import { ReactComponent as Shirt } from '../../../assets/images/contributor/shirt.svg';

import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Canvass from './Canvass';
import Slider from '@mui/material/Slider';
import { httpClient } from '../../../axios';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setpath2 } from '../../../store/contriPathSlice';
import trial from '../../../assets/images/combo/trial.png';
import html2canvas from 'html2canvas';

import CheckIcon from '@mui/icons-material/Check';

const images = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '5',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '6',
    image: frree,
  },
  {
    id: '7',
    image: trial,
  },
];

const ActivateProducts = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [checkedId, setCheckedId] = useState(null);
  const [value, setValue] = useState('2.1');
  const [circle, setCircle] = useState([
    {
      id: 'icon1',
      backgroundColor: '#37537A',
      borderColor: '#37537A',
      textColor: '#FFFFFF',
    },
    {
      id: 'icon2',
      backgroundColor: '#27D3C9',
      borderColor: '#27D3C9',
      textColor: '#FFFFFF',
    },
    {
      id: 'icon3',
      backgroundColor: '#E4D045',
      borderColor: '#E4D045',
      textColor: '#FFFFFF',
    },
    {
      id: 'icon4',
      backgroundColor: '#F87797',
      borderColor: '#F87797',
      textColor: '#FFFFFF',
    },
    {
      id: 'icon5',
      backgroundColor: '#DDDDDD',
      borderColor: '#DDDDDD',
      textColor: 'white',
    },
    {
      id: 'icon6',
      backgroundColor: '#000000',
      borderColor: '#000000',
      textColor: 'white',
    },
    {
      id: 'icon7',
      backgroundColor: '#FFFFFF',
      borderColor: '#000000',
      textColor: 'black',
    },
  ]);
  const [alignVerticalFocus, setAlignVerticalFocus] = useState(true);

  const [checked, setChecked] = useState([]); //Store ID temporary
  const [shirt, setShirt] = useState('#fff'); //Store ID temporary
  const [photo, setPhoto] = useState(''); //Store ID temporary

  // dropdown
  const [isAllStyleOpen, setIsAllStyleOpen] = useState(false);

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    dispatch(setpath2('/ Activate Products'));
  }, []);

  const check = async (item) => {
    // const abc = handleDownloadClick();
    setShirt(item.backgroundColor);
    // test
    const element = document.querySelector('.myDiv'); // Replace '.myDiv' with the appropriate selector for your div element
    const button = element.querySelector('.greenBlueButton'); // Replace '.greenBlueButton' with the appropriate selector for your button element
    setDottedLine(true); //hide dotted line
    button.style.display = 'none'; // Hide the button before taking the screenshot

    // Delay the screenshot function until the next tick of the event loop
    setTimeout(() => {
      html2canvas(element, { useCORS: true }).then(async (canvas) => {
        button.style.display = 'block'; // Show the button again after the download link is clicked
        setDottedLine(false); // Show the dotted line again after the download link is clicked
        const dataUrl = canvas.toDataURL('image/png');

        let formData = new FormData();
        formData.append('file', dataURItoBlob(dataUrl));

        const res = await httpClient.post(
          '/CloudinaryImageUpload?parameter=false',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        const find = checked?.find((obj) => obj.id === item.id);

        if (find === undefined) {
          try {
            const mergedObj = { ...item, image: res.data };

            setChecked((prev) => [...prev, mergedObj]);
          } catch (error) {
            console.error('Error occurred during download:', error);
          }
        } else if (find !== undefined) {
          setChecked(checked.filter((obj) => obj.id !== item.id));
        }

        setShirt('#ffffff');
      });
    }, 0);
    // test

    // setChecked(item);
    // setShirt(item.backgroundColor);
  };

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const [artName, setartName] = useState(null);

  const handleClick = (card) => {
    if (card.artId === checkedId) {
      setCheckedId(null);
      setPhoto(null);
      setartName(null);
    } else {
      setCheckedId(card.artId);
      setPhoto(card.image);
      setartName(card.artName);
    }
  };

  const [sizeRangeValue, setSizeRangeValue] = useState(50);

  const sizeRange = (event) => {
    const value = event.target.value;
    if (value !== 0) {
      setSizeRangeValue(value);
      // console.log(value);
    }
  };

  // this code is just for triggering align buttons
  const [vertcalAlign, setVerticalAlign] = useState(null);
  const verticalAlign = () => {
    if (vertcalAlign === null) {
      setVerticalAlign(true);
    } else if (vertcalAlign === true || vertcalAlign === false) {
      setVerticalAlign(!vertcalAlign);
    }
    setAlignVerticalFocus(true);
  };

  const [horzontalAlign, setHorizontalAlign] = useState(null);
  const horizontalAlign = () => {
    if (horzontalAlign === null) {
      setHorizontalAlign(true);
    } else if (horzontalAlign === true || horzontalAlign === false) {
      setHorizontalAlign(!horzontalAlign);
    }
    setAlignVerticalFocus(false);
  };

  // api calls
  const [styleList, setStyleList] = useState([]);

  useEffect(() => {
    const getStyleList = async () => {
      const response = await httpClient.get('/style_master');
      setStyleList(response.data);
      // console.log(response.data);
    };
    getStyleList();
  }, []);

  // state to hide dotted line around canvas
  const [dottedLine, setDottedLine] = useState(false);
  const [productImage, setproductImage] = useState(null);

  function handleDownloadClick() {
    const element = document.querySelector('.myDiv'); // Replace '.myDiv' with the appropriate selector for your div element
    const button = element.querySelector('.greenBlueButton'); // Replace '.greenBlueButton' with the appropriate selector for your button element
    setDottedLine(true); //hide dotted line
    button.style.display = 'none'; // Hide the button before taking the screenshot

    // Delay the screenshot function until the next tick of the event loop
    setTimeout(() => {
      html2canvas(element, { useCORS: true }).then(async (canvas) => {
        button.style.display = 'block'; // Show the button again after the download link is clicked
        setDottedLine(false); // Show the dotted line again after the download link is clicked
        const dataUrl = canvas.toDataURL('image/png');

        // const downloadLink = document.createElement('a');
        // downloadLink.href = dataUrl;
        // console.log(downloadLink.href);

        // downloadLink.download = 'myDivImage.png';
        // downloadLink.click();

        let formData = new FormData();
        formData.append('file', dataURItoBlob(dataUrl));

        const res = await httpClient.post(
          '/CloudinaryImageUpload?parameter=false',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(res.data);
        return res.data;

        // let object = {
        //   artId: checkedId,
        //   artProductName: artName,
        //   image: res.data.secureUrl,
        //   productId: productImage.productId,
        //   productSubCategoryId:
        //     productImage.productSubCategoryMaster
        //       .productSubCategoryId,
        //   userId: userId,
        // };

        // const response = await httpClient.post(
        //   '/art_product_master/create',
        //   object
        // );
        // console.log(response.data);
      });
    }, 0);
  }

  // Helper function to convert data URI to Blob
  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  const getActiveProduct = async () => {
    const res = await httpClient.get(
      '/product_master/getActiveProductMaster'
    );

    let abc = res.data;
    let a;

    abc.forEach((product) =>
      product.productName === 'shirt' ? (a = product) : ''
    );

    setproductImage(a);
    // console.log(a);
  };

  const [artList, setartList] = useState(null);

  const getUserIdWiseArts = async () => {
    try {
      const res = await httpClient.get(
        `/art_master/getUserIdAndStatusWiseUserMaster/${userId}/Approved`
      );
      setartList(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserIdWiseArts();
    getActiveProduct();
  }, []);

  return (
    <div className='font-heebo'>
      <div className='flex justify-center'>
        <div className='flex justify-center border-t-[1px] border-[#efefef] border-b-[1px]'>
          <div className='flex gap-[2px] h-[47px]'>
            <p className='text-[48px] text-[#cfcfcf] relative bottom-[11px] font-thin'>
              0
            </p>
            <p className='text-[11px] text-[#cfcfcf] pt-[6px] max-w-[70px] leading-3'>
              File(s) to be submitted to Artnstock
            </p>
          </div>
          <div className='flex gap-[2px] h-[47px]'>
            <div className='h-[38px] border-l-[1px] relative top-[5px] border-[#efefef]'>
              <p className='text-[48px] text-[#cfcfcf]  pl-[7px] max-h-[100%] relative bottom-[15px] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[11px] text-[#cfcfcf] max-w-[70px] pt-[6px] leading-3'>
                File(s) pending for review
              </p>
            </div>
          </div>
          <div className='flex gap-[2px] h-[47px]'>
            <div className='h-[38px] border-l-[1px] relative top-[5px] border-[#efefef]'>
              <p className='text-[48px] text-[#cfcfcf]  pl-[7px] relative bottom-[15px] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[11px] text-[#cfcfcf] max-w-[70px] pt-[6px] leading-3'>
                File(s) approved by Artnstock
              </p>
            </div>
          </div>
          <div className='flex gap-[2px] h-[47px]'>
            <div className='h-[38px] border-l-[1px] relative top-[5px] border-[#efefef]'>
              <p className='text-[48px] text-[#cfcfcf] pl-[7px] relative bottom-[15px] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[11px] text-[#cfcfcf] max-w-[70px] pt-[6px] leading-3'>
                File(s) rejected by Artnstock
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] flex justify-center pt-[15px]'>
        <div className='w-w1170 flex justify-between'>
          <div className='max-w-[199.3px] mt-[10px]'>
            <p className='text-[25px] font-medium'>
              Activate Products
            </p>
            <p className='text-[11px] text-primaryGray leading-[1.1]'>
              Select art and products below to set your markup.
              <span className='text-orangeColor'> Learn more</span>
            </p>
          </div>
          <div className='flex gap-[20px] mt-[17px]'>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={selectall}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px] bg-[#d7d7d7]'
              />
              <p className='text-primaryGray text-[11px]'>
                Select All
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={deleteicon}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Delete Image
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={undo}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Undo Changes
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={redo}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Redo Changes
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={save}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Save Draft
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={keyword}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Keyword Manager
              </p>
            </div>
          </div>
          <div className='w-[205px] pl-[95px] leading-[1] mt-[17px]'>
            <p className='text-[11px] text-primaryGray'>
              Your Unpaid Earnings
            </p>
            <p className='text-[25px] text-pinkColor'>
              <span className='text-[16px]'>$</span>600.00
            </p>
            <button className='bg-[#888888] text-[white] text-[11px] rounded-[20px] px-[10px] py-[2px]'>
              Account Summary
            </button>
          </div>
        </div>
      </div>
      <div className='w-[100%] flex justify-center pt-[12px] pb-[28px]'>
        <div className='w-w1170 justify-center flex-column gap-[10px]'>
          <div className='flex justify-start flex-wrap gap-[10px]'>
            {/* px-[16.68px] */}
            {artList?.map((card) => (
              <div
                key={card.artId}
                className='h-[108px] w-[108px] rounded-[20px] relative'
                onMouseEnter={() => handleMouseEnter(card.artId)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <div
                  className={`rounded-[10px] h-full w-full bg-no-repeat bg-center bg-cover filter brightness-[${
                    hoveredId === card.artId ? '70%' : '100%'
                  }] absolute overflow-hidden inset-0`}
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {hoveredId === card.artId ||
                checkedId === card.artId ? (
                  <>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <button
                        onClick={() => handleClick(card)}
                        className='w-[52px] h-[20px] bg-[#e8e8e8] text-[11px] opacity-[100%] cursor-pointer rounded-[20px]'
                      >
                        Select
                      </button>
                    </div>

                    <div className='absolute top-0 right-0 p-2'>
                      <input
                        type='checkbox'
                        className='w-6 h-6'
                        checked={checkedId === card.artId}
                        onChange={() => handleClick(card)}
                      />
                    </div>
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <TabContext value={value}>
        {/* value={nestedValue} */}
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
            aria-label='nested tab example'
            sx={{
              '& .MuiTabs-indicator': {
                display: 'none',
              },
              // styles for the selected tab
              '& .Mui-selected': {
                bgcolor: '#bbbbbb',
                color: '#333333!important',
                borderColor: '#bbbbbb',
              },
            }}
          >
            <Tab
              label='Home Decor'
              value='2.1'
              sx={{
                textTransform: 'none!important',
                border: '2px solid #eaeaea',
                borderRadius: '25px',
                color: '#7e7e7e',
                fontSize: '12px',
                marginLeft: '2px',
                marginRight: '2px',
                height: '28px!important',
                minHeight: 0,
                minWidth: 0,
                '&:disabled': {
                  opacity: 1,
                  color: '#7e7e7e',
                },
              }}
            />
            <Tab
              label='Life Style'
              value='2.2'
              sx={{
                textTransform: 'none!important',
                border: '2px solid #eaeaea',
                borderRadius: '25px',
                color: '#7e7e7e',
                fontSize: '12px',
                marginLeft: '2px',
                marginRight: '2px',
                height: '28px!important',
                minHeight: 0,
                minWidth: 0,
                '&:disabled': {
                  opacity: 1,
                  color: '#7e7e7e',
                },
              }}
            />
            <Tab
              label='Tech'
              value='2.3'
              sx={{
                textTransform: 'none!important',
                border: '2px solid #eaeaea',
                borderRadius: '25px',
                color: '#7e7e7e',
                fontSize: '12px',
                marginLeft: '2px',
                marginRight: '2px',
                height: '28px!important',
                minHeight: 0,
                minWidth: 0,
                '&:disabled': {
                  opacity: 1,
                  color: '#7e7e7e',
                },
              }}
            />
            <Tab
              label='Apparel'
              value='2.4'
              sx={{
                textTransform: 'none!important',
                border: '2px solid #eaeaea',
                borderRadius: '25px',
                color: '#7e7e7e',
                fontSize: '12px',
                marginLeft: '2px',
                marginRight: '2px',
                height: '28px!important',
                minHeight: 0,
                minWidth: 0,
              }}
            />
            <Tab
              label='Stationary'
              value='2.5'
              sx={{
                textTransform: 'none!important',
                border: '2px solid #eaeaea',
                borderRadius: '25px',
                color: '#7e7e7e',
                fontSize: '12px',
                marginLeft: '2px',
                marginRight: '2px',
                height: '28px!important',
                minHeight: 0,
                minWidth: 0,
              }}
            />
          </TabList>
        </Box>
        <TabPanel value='2.1' sx={{ paddingTop: '0px' }}>
          nested 1
        </TabPanel>
        <TabPanel
          value='2.2'
          sx={{ paddingTop: '0px', fontFamily: 'Heebo!important' }}
        >
          <div className='w-[100%] flex justify-center'>
            <div className='w-w456 flex gap-[10px] border-t border-b border-[#efefef] pt-[5px]'>
              <div className='flex-col w-[40px]'>
                <img className='mx-auto' src={artcolor} alt='' />
                <p className='text-primaryGray text-[11px] text-center'>
                  Art
                </p>
              </div>
              <div className='flex-col w-[40px]'>
                <img className='mx-auto' src={shirtcolor} alt='' />
                <p className='text-primaryGray text-[11px] text-center'>
                  T-Shirt
                </p>
              </div>
              <div className='flex-col w-[40px]'>
                <img className='mx-auto' src={mugcolor} alt='' />
                <p className='text-primaryGray text-[11px] text-center'>
                  Mugs
                </p>
              </div>
              <div className='flex-col w-[40px]'>
                <img className='mx-auto' src={glasscolor} alt='' />
                <p className='text-primaryGray text-[11px] text-center'>
                  Glass
                </p>
              </div>
              <div className='flex-col w-[40px]'>
                <img className='mx-auto' src={mousecolor} alt='' />
                <p className='text-primaryGray text-[11px] text-center'>
                  Mouse Pad
                </p>
              </div>
              <div className='flex-col w-[40px]'>
                <img className='mx-auto' src={coastercolor} alt='' />
                <p className='text-primaryGray text-[11px] text-center'>
                  Coaster
                </p>
              </div>
              <div className='flex-col w-[40px]'>
                <img className='mx-auto' src={flowercolor} alt='' />
                <p className='text-primaryGray text-[11px] text-center'>
                  Flower Pot
                </p>
              </div>
              <div className='flex-col w-[40px]'>
                <img className='mx-auto' src={giftcolor} alt='' />
                <p className='text-primaryGray text-[11px] text-center'>
                  Gift Box
                </p>
              </div>
              <div className='flex-col w-[40px]'>
                <img className='mx-auto' src={bagcolor} alt='' />
                <p className='text-primaryGray text-[11px] text-center'>
                  Bag
                </p>
              </div>
              <div className='flex-col w-[40px] '>
                <img className='mx-auto' src={notepadcolor} alt='' />
                <p className='text-primaryGray text-[11px] text-center'>
                  Notepad
                </p>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center pt-[30px]'>
            <div
              className='w-w1170 flex p-[30px] rounded-[30px] gap-[30px]'
              style={{
                boxShadow: '#f0f0f0 0px 0px 4.3px 4px',
              }}
            >
              <div className='w-[50%]'>
                <div className='myDiv w-[540px] h-[540px] rounded-[16.01px] bg-[#f5f5f7] flex flex-col justify-center  items-center'>
                  <Shirt fill={`${shirt}`} />
                  {/* <img
                    src={productImage?.productDetails[0]?.frontImage}
                    alt=''
                  /> */}
                  <div
                    className={`${
                      dottedLine
                        ? ''
                        : 'border border-dashed border-[#d6d6d6]'
                    } absolute `}
                  >
                    <div>
                      <Canvass
                        photo={photo}
                        sizeRangeValue={sizeRangeValue}
                        vertcalAlign={vertcalAlign}
                        horzontalAlign={horzontalAlign}
                      />
                    </div>
                  </div>

                  <div className='w-full flex justify-center mt-[22px]'>
                    <button className='greenBlueButton absolute'>
                      Replace Image
                    </button>
                  </div>
                </div>
                <div>
                  <div className='w-full flex justify-center'>
                    <div>
                      <Slider
                        onChange={sizeRange}
                        sx={{
                          width: '203px',
                          height: '8px',
                          padding: '0',
                          '& .MuiSlider-rail': {
                            opacity: '1',
                            background:
                              'linear-gradient(to right, #fd4b9e, #9794d0, #46d59a, #beed10)',
                          },
                          '& .MuiSlider-track': {
                            opacity: '0',
                          },
                          '& .MuiSlider-thumb': {
                            width: '11px',
                            height: '13px',
                            borderStyle: 'solid',
                            borderRadius: '1px',
                            borderBottomLeftRadius: '21px',
                            borderBottomRightRadius: '21px',
                            backgroundColor: '#888888',
                          },
                        }}
                        defaultValue={50}
                        aria-label='Disabled slider'
                      />

                      <img
                        className='relative bottom-[6px]'
                        src={scale}
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                <div className='w-full flex gap-[5px] justify-center pt-[5px]'>
                  {alignVerticalFocus == true ? (
                    <button
                      onClick={verticalAlign}
                      className='w-[105px] h-[28px] bg-[#bbbbbb] text-[12px] rounded-[14px]'
                    >
                      Align Vertically
                    </button>
                  ) : (
                    <button
                      onClick={verticalAlign}
                      className='w-[105px] h-[28px] bg-[#ffffff] text-[#878787] text-[12px] rounded-[14px] border border-[#eaeaea]'
                    >
                      Align Vertically
                    </button>
                  )}
                  {alignVerticalFocus == true ? (
                    <button
                      onClick={horizontalAlign}
                      className='w-[105px] h-[28px] bg-[#ffffff] text-[#878787] text-[12px] rounded-[14px] border border-[#eaeaea]'
                    >
                      Align Horizontally
                    </button>
                  ) : (
                    <button className='w-[105px] h-[28px] bg-[#bbbbbb] text-[12px] rounded-[14px]'>
                      Align Horizontally
                    </button>
                  )}
                </div>
                <div>
                  <p className='text-[15px] text-primaryBlack font-medium'>
                    You have selected
                  </p>
                  <div className='text-primaryGray text-[12px] w-[540px] border rounded-[16px] border-[#d6d6d6] p-[12px]'>
                    <div className='flex border-b border-[#efefef]'>
                      <p className='w-[80px] font-medium'>Style:</p>
                      <p>All Styles</p>
                    </div>
                    <div className='flex border-b border-[#efefef]'>
                      <p className='w-[80px] font-medium'>
                        Front/Back:
                      </p>
                      <p>Front</p>
                    </div>
                    <div className='flex border-b border-[#efefef]'>
                      <p className='w-[80px] font-medium'>Colours:</p>
                      <p>All Colours</p>
                    </div>
                    <div className='flex '>
                      <p className='w-[80px] font-medium'>
                        PrintSize:
                      </p>
                      <p>2400 x 3200px</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[50%]'>
                <p className='text-[25px] text-primaryBlack font-medium leading-[1]'>
                  T-Shirt
                </p>
                <div className='flex flex-col mt-[15px]'>
                  <p className='text-[15px] font-medium mb-[3px]'>
                    Select Style
                  </p>

                  {/* test */}

                  <div>
                    <button
                      onClick={() => {
                        setIsAllStyleOpen(!isAllStyleOpen);
                      }}
                      className='flex items-center justify-between px-[15px] text-primaryGray text-sm14 font-medium cursor-pointer w-[272px] h-[40px] bg-[#FFFFFF] rounded-[20px] border border-[#d6d6d6]'
                    >
                      <span>All Styles</span>
                      <img
                        className='inline-block'
                        src={dropdown}
                        alt=''
                      />
                    </button>

                    {isAllStyleOpen && (
                      <ul
                        className='shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#ffffff] w-[272px] text-center text-[14px] text-primaryGray'
                        // style={{
                        //   boxShadow:
                        //     ' rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        // }}
                      >
                        {styleList.map((style) => (
                          <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'>
                            {style.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className='flex flex-col pt-[17px]'>
                  <p className='text-[15px] font-medium'>
                    Select Front or Back
                  </p>
                  <div className='flex gap-[10px] p-[3px]'>
                    <div className='flex flex-col text-center'>
                      <div className='border border-[#bbbbbb] rounded-[4px] p-[7px] '>
                        <img src={shirtfront} />
                      </div>
                      <p className='text-[#bbbbbb] text-[11px]'>
                        front
                      </p>
                    </div>
                    <div className='flex flex-col text-center'>
                      <div className='border border-[#bbbbbb] rounded-[4px] p-[7px] '>
                        <img src={shirtback} />
                      </div>
                      <p className='text-[#bbbbbb] text-[11px]'>
                        back
                      </p>
                    </div>
                  </div>
                </div>

                <div className='pt-[14px]'>
                  <p className='text-[15px] font-medium'>
                    Select Colours
                  </p>
                  <div className='flex gap-[8px] pt-[3px]'>
                    {circle?.map((item) => (
                      <div
                        key={item.id}
                        className={`w-[32px] h-[32px] rounded-full border border-${item.borderColor} flex justify-center items-center cursor-pointer`}
                        style={{
                          color: `${item.textColor}`,
                          backgroundColor: `${item.backgroundColor}`,
                        }}
                        onClick={() => check(item)}
                      >
                        {checked?.find(
                          (obj) => obj.id === item.id
                        ) && (
                          // <i
                          //   className={`bi bi-check-lg`}
                          // ></i>
                          <CheckIcon />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className='flex flex-col pt-[15px] gap-[7px]'>
                  <div className='flex gap-[5px]'>
                    <p className='text-[15px] font-medium'>
                      Select Markup
                    </p>
                    <div className='max-h-full flex items-center'>
                      <img src={info} className='my-[auto]' />
                    </div>
                  </div>
                  <p className='text-[13px] text-primaryGray leading-[1.3]'>
                    Please enter your mark-up below. Your markup gets
                    added to the base price to arrive at the final
                    sell price. Mark-up is 10% fixed for all prints on
                    products.
                  </p>
                  {/* table */}
                  <div className='wrapper mt-[5px]'>
                    <table className='w-[520px] border-separate border-spacing-0'>
                      <tr className='overflow-hidden text-[15px] text-left'>
                        <th className='bg-[#ECECEC] rounded-tl-[10px] py-[0.4rem] px-2 border border-[#d6d6d6]'>
                          Size
                        </th>
                        <th className='bg-[#ECECEC] py-[0.4rem] px-2 border-r border-b border-t border-[#d6d6d6]'>
                          Base Price
                        </th>
                        <th className='bg-[#ECECEC] py-[0.4rem] px-2 border-r border-b border-t border-[#d6d6d6]'>
                          Your Markup
                        </th>
                        <th className='bg-[#ECECEC] py-[0.4rem] px-2 border-r border-b border-t border-[#d6d6d6] rounded-tr-[10px]'>
                          Sell Price
                        </th>
                      </tr>

                      <tr className='text-start text-[13px]'>
                        <td className='bg-[#F7F7F7] px-2 py-[0.1rem] border-l border-r border-b border-[#d6d6d6]'>
                          XS
                        </td>
                        <td className='bg-[#F7F7F7] px-2 py-[0.1rem] border-r border-b border-[#d6d6d6]'>
                          18.00
                        </td>
                        <td className='px-2 py-[0.1rem] border-r border-b border-[#d6d6d6] text-center'>
                          <input
                            type='text'
                            placeholder='10%'
                            className='rounded-xl border border-[#d6d6d6] px-5 w-[111.99px]'
                          />
                        </td>
                        <td className='px-2 py-[0.1rem] border-r border-b border-[#d6d6d6]'>
                          19.80
                        </td>
                      </tr>
                      <tr className='text-start text-[13px]'>
                        <td className='bg-[#F7F7F7] px-2 py-[0.1rem] border-l border-r border-b border-[#d6d6d6]'>
                          S
                        </td>
                        <td className='bg-[#F7F7F7] px-2 py-[0.1rem] border-r border-b border-[#d6d6d6]'>
                          18.00
                        </td>
                        <td className='px-2 py-[0.1rem] border-r border-b border-[#d6d6d6] text-center'>
                          <input
                            type='text'
                            placeholder='10%'
                            className='rounded-xl border border-[#d6d6d6] px-5 w-[111.99px]'
                          />
                        </td>
                        <td className='px-2 py-[0.1rem] border-r border-b border-[#d6d6d6]'>
                          19.80
                        </td>
                      </tr>
                      <tr className='text-start text-[13px]'>
                        <td className='px-2 py-[0.1rem] bg-[#F7F7F7] border-l border-r border-b border-[#d6d6d6]'>
                          M
                        </td>
                        <td className='px-2 py-[0.1rem] bg-[#F7F7F7] border-r border-b border-[#d6d6d6]'>
                          18.00
                        </td>
                        <td className='px-2 py-[0.1rem] border-r border-b border-[#d6d6d6] text-center'>
                          <input
                            type='text'
                            placeholder='10%'
                            className='rounded-xl border px-5 border-[#d6d6d6] w-[111.99px]'
                          />
                        </td>

                        <td className=' px-2 py-[0.1rem] border-r border-b border-[#d6d6d6]'>
                          19.80
                        </td>
                      </tr>

                      {/* added */}
                      <tr className='text-start text-[13px]'>
                        <td className='px-2 py-[0.1rem] bg-[#F7F7F7] border-l border-r border-b border-[#d6d6d6]'>
                          L
                        </td>
                        <td className='px-2 py-[0.1rem] bg-[#F7F7F7] border-r border-b border-[#d6d6d6]'>
                          18.00
                        </td>
                        <td className='px-2 py-[0.1rem] border-r border-b border-[#d6d6d6] text-center'>
                          <input
                            type='text'
                            placeholder='10%'
                            className='rounded-xl border px-5 border-[#d6d6d6] w-[111.99px]'
                          />
                        </td>

                        <td className=' px-2 py-[0.1rem] border-r border-b border-[#d6d6d6]'>
                          19.80
                        </td>
                      </tr>
                      <tr className='text-start text-[13px]'>
                        <td className='px-2 py-[0.1rem] bg-[#F7F7F7] border-l border-r border-b border-[#d6d6d6]'>
                          XL
                        </td>
                        <td className='px-2 py-[0.1rem] bg-[#F7F7F7] border-r border-b border-[#d6d6d6]'>
                          18.00
                        </td>
                        <td className='px-2 py-[0.1rem] border-r border-b border-[#d6d6d6] text-center'>
                          <input
                            type='text'
                            placeholder='10%'
                            className='rounded-xl border px-5 border-[#d6d6d6] w-[111.99px]'
                          />
                        </td>

                        <td className=' px-2 py-[0.1rem] border-r border-b border-[#d6d6d6]'>
                          19.80
                        </td>
                      </tr>

                      {/* added */}

                      <tr className='text-start text-[13px]'>
                        <td className=' px-2 py-[0.1rem] bg-[#F7F7F7] border-l border-r border-b border-[#d6d6d6]'>
                          2XL
                        </td>
                        <td className=' px-2 py-[0.1rem] bg-[#F7F7F7] border-r border-b border-[#d6d6d6]'>
                          21.00
                        </td>
                        <td className=' px-2 py-[0.1rem] border-r border-b border-[#d6d6d6] text-center'>
                          <input
                            type='text'
                            placeholder='10%'
                            className='rounded-xl border px-5 border-[#d6d6d6] w-[111.99px]'
                          />
                        </td>
                        <td className=' px-2 py-[0.2rem] border-r border-b border-[#d6d6d6]'>
                          23.10
                        </td>
                      </tr>
                      <tr className='text-start text-[13px]'>
                        <td className=' pl-2 py-[0.1rem] bg-[#F7F7F7] border-l border-r border-b border-[#d6d6d6] rounded-bl-[10px]'>
                          3XL
                        </td>
                        <td className=' px-2 py-[0.1rem] bg-[#F7F7F7] border-r border-b border-[#d6d6d6]'>
                          23.00
                        </td>
                        <td className=' px-2 py-[0.1rem] border-r border-b border-[#d6d6d6] text-center'>
                          <input
                            type='text'
                            placeholder='10%'
                            className='rounded-xl border px-5 border-[#d6d6d6] w-[111.99px]'
                          />
                        </td>
                        <td className=' px-2 py-[0.1rem] border-r border-b border-[#d6d6d6] rounded-br-[10px]'>
                          25.30
                        </td>
                      </tr>
                    </table>
                  </div>
                  {/* table */}
                </div>
                <div className='pt-[20px]'>
                  <button
                    // onClick={save}
                    onClick={handleDownloadClick}
                    className='blackBtn w-[90px] h-[40px]'
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full pt-[45px]'>
            <p className='text-[15px] text-primaryBlack text-center font-medium'>
              Artist Agreement for “Printable Wall Art Home Decor”
            </p>
            <div className='w-[930px] mx-[auto] text-[11px] text-primaryGray flex flex-col gap-[12px] pt-[12px]'>
              <p>
                Any violation of Artnstock's{' '}
                <span className='text-orangeColor'>
                  Terms of Service or Copyright & Trademark Policy
                </span>{' '}
                may result in your artwork being taken down, your
                account being suspended or terminated, and/or any
                other remedies or penalties under applicable law. In
                addition, you will not receive any Artist Share
                amounts related to such artwork.
              </p>
              <div className='flex gap-[5px]'>
                <input type='checkbox' />
                <p className='text-primaryBlack'>
                  I represent and warrant that I have the right to
                  upload and use this artwork and it does not violate
                  Artnstock's Terms of Service or Copyright &
                  Trademark Policy, including:
                </p>
              </div>
              <div>
                <ul>
                  <ol>• I created and own this original artwork.</ol>
                  <ol>
                    • I did not copy someone else’s artwork,
                    photograph or design.
                  </ol>
                  <ol>
                    • I have the right to display any person,
                    character, name, logo, image or quote contained in
                    this artwork.
                  </ol>
                </ul>
              </div>
              <div>
                <p className='text-primaryBlack'>
                  Does this artwork contain mature content?
                </p>
                <div>
                  <input
                    type='radio'
                    name='option'
                    value='option1'
                    className='relative top-[2px]'
                  />{' '}
                  <span className='ml-[3px]'>Yes</span>
                  <input
                    type='radio'
                    name='option'
                    value='option2'
                    className='relative top-[2px] ml-[10px]'
                  />
                  <span className='ml-[4px]'>No</span>
                </div>
              </div>
              <p>
                Mature content is generally anything that contains
                sexual, graphic, or violent imagery or language. To
                learn more visit our{' '}
                <span className='text-orangeColor'>
                  Community Guideline.
                </span>
              </p>
            </div>
            <div className='flex gap-[15px] justify-center mt-[35px] pb-[30px]'>
              <button className='blackBtn h-[40px]'>
                Set Store Markup
              </button>
              <button className='h-[40px] px-6 py-2 rounded-3xl text-sm14 text-primaryBlack border-[2px]'>
                Cancel
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value='2.3' sx={{ paddingTop: '0px' }}>
          nested 3
        </TabPanel>
        <TabPanel value='2.4' sx={{ paddingTop: '0px' }}>
          nested 4
        </TabPanel>
        <TabPanel value='2.5' sx={{ paddingTop: '0px' }}>
          nested 5
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default ActivateProducts;
