import React, { useEffect, useRef, useState } from 'react';
import grid1 from '../../assets/images/Icons/grid1.svg';
import grid from '../../assets/images/Icons/grid.svg';
import filterIcon from '../../assets/images/Icons/FilterIcon.svg';
import { httpClient } from '../../axios';
import closeIcon from '../../assets/images/Icons/crossIcon.svg';
import artIcon from '../../assets/images/Icons/artIcon.svg';
import photoIcon from '../../assets/images/Icons/photosIcon.svg';
import footageIcon from '../../assets/images/Icons/videoIcon.svg';
import musicIcon from '../../assets/images/Icons/music.svg';
import templatesIcon from '../../assets/images/Icons/templatesIcon.svg';
import productsIcon from '../../assets/images/Icons/productsIcon.svg';
import dropArrow from '../../assets/images/Icons/Down arrow.svg';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Footer from '../../components/footer/Footer';
import smallRightArrow from '../../assets/images/Icons/smallRightArrow.svg';
import smallLeftArrow from '../../assets/images/Icons/smallLeftArrow.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Facebook from '../../assets/images/products/Facebook.png';
import Twitter from '../../assets/images/products/Twitter.png';
import Linkedin from '../../assets/images/products/Linkedin.png';
import Instagram from '../../assets/images/products/Instagram.png';
import Email from '../../assets/images/products/Email.png';
import Link from '../../assets/images/products/Link.png';
import ProfileEmail from '../../assets/images/products/ProfileEmail.png';
import Save from '../../assets/images/products/Save.png';
import Similar from '../../assets/images/products/Similar.png';
import Artist from '../../assets/images/products/Artist.png';
import ShoppingCart from '../../assets/images/products/ShoppingCart.png';
import Share from '../../assets/images/products/Share.png';
import Enlarge from '../../assets/images/products/Enlarge.png';

const ProductList = () => {
  const navigate = useNavigate();
  // Dropdowns
  const [show, setShow] = useState(false);
  const [showStyles, setShowStyles] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showMedium, setShowMedium] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const [selectStylesValue, setSelectStylesValue] = useState();
  const [selectSubValue, setSelectSubValue] = useState();
  const [selectMediumValue, setSelectMediumValue] = useState();
  const ref1 = useDetectClickOutside({ onTriggered: apps1 });
  const ref2 = useDetectClickOutside({ onTriggered: apps2 });
  const ref3 = useDetectClickOutside({ onTriggered: apps3 });
  const ref4 = useDetectClickOutside({ onTriggered: apps4 });
  function apps1(e) {
    setShow(false);
  }
  function apps2(e) {
    setShowStyles(false);
  }
  function apps3(e) {
    setShowSub(false);
  }
  function apps4(e) {
    setShowMedium(false);
  }

  function changeValue1(e) {
    // console.log(e);
    setShow(false);
    setSelectValue(e);
  }
  function changeValue2(e) {
    // console.log(e);
    setShowStyles(false);
    setSelectStylesValue(e);
  }
  function changeValue3(e) {
    // console.log(e);
    setShowSub(false);
    setSelectSubValue(e);
  }
  function changeValue4(e) {
    // console.log(e);
    setShowMedium(false);
    setSelectMediumValue(e);
  }

  const [artsList, setArtsList] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sizeBtn, setSizeBtn] = useState();
  const [orientationBtn, setOrientationBtn] = useState();
  const [title, setTitle] = useState('');
  const [popup, setPopup] = useState(false);

  // useEffect(() => {
  //   console.log(artsList);
  // }, [artsList]);

  useEffect(() => {
    getAllProductList();
  }, []);

  const subjectId = useSelector((state) => state.subjectId.subjectId);

  const getAllProductList = async () => {
    if (subjectId === null) {
      const res = await httpClient.get(
        '/art_product_master/getActiveArtProductMaster'
      );
      setTitle('All Products');
      // console.log(res.data);
      setArtsList(res.data);
    } else {
      const res = await httpClient.get(
        `/art_product_master/getProductSubCategoryIdWiseArtProductMaster/${subjectId.productSubCategoryId}`
      );
      setTitle(subjectId.productSubCategoryName);
      setArtsList(res.data);
    }
  };

  // useEffect(() => {
  //   console.log(subjectId);
  // }, []);

  // useEffect(() => {
  //   console.log(artsList);
  // }, [artsList]);

  // useEffect(() => {
  //   console.log(subjectId);
  // }, [subjectId]);

  const changeSizeFilter = (text) => {
    setSizeBtn(text);
    // console.log(text);
  };

  const changeOrientationFilter = (text) => {
    setOrientationBtn(text);
    // console.log(text);
  };

  const goToProductDetailsPage = (data) => {
    navigate('/product-details', { state: { data } });
  };

  const [id, setId] = useState('');

  // useEffect(() => {
  //   console.log(id);
  // }, [id]);

  const imageLinkChange = (url) => {
    const str = url;

    const updatedStr = str?.replace(
      'upload/',
      'upload/c_scale,h_362,w_362/'
    );

    return updatedStr;
  };

  return (
    <>
      <div className='main py-7'>
        <div className='px-6'>
          <p className='mb-[2px] bullet text-left'>
            Artnstock / Products / {title}
          </p>
          <div className='flex justify-between mb-1.5'>
            <div className='flex items-end'>
              <p className='text-heading text-primaryBlack'>
                {title}
              </p>
              <p className='text-primaryGray text-sm12 ml-1'>
                850 Items
              </p>
            </div>
            <div className='flex items-center'>
              <img
                src={grid}
                className='mr-2.5 w-[23px] h-[23px]'
                alt=''
              />
              <img src={grid1} className='w-[23px] h-[23px]' alt='' />
            </div>
          </div>
        </div>
        <div
          className={`${showSidebar ? 'pr-6' : 'px-6'} flex gap-x-4`}
        >
          {/* Sidebar */}
          {showSidebar && (
            <div className='sidebar w-[17.313rem] h-[64.375rem] shadow-regCardShadow relative rounded-tr-2xl rounded-br-2xl py-12 pl-6 pr-4'>
              <img
                onClick={() => setShowSidebar(false)}
                className='absolute top-4 right-4 cursor-pointer'
                src={closeIcon}
                alt=''
              />
              <div className='topIconBar flex gap-x-3.5 mb-6'>
                <img src={artIcon} alt='' />
                <img src={photoIcon} alt='' />
                <img src={footageIcon} alt='' />
                <img src={musicIcon} alt='' />
                <img src={templatesIcon} alt='' />
                <img src={productsIcon} alt='' />
              </div>
              <form action='' onSubmit={(e) => e.preventDefault()}>
                {/* Dropdown Filters */}
                <label
                  className='text-sm12 text-primaryGray font-medium leading-3.5 mb-1'
                  htmlFor='mostPopular'
                >
                  Sort by
                </label>
                <div className='w-[100%] mb-2.5' ref={ref1}>
                  <div
                    onClick={() => setShow((prev) => !prev)}
                    className={`${
                      show
                        ? 'rounded-tl-3xl rounded-tr-3xl'
                        : 'rounded-3xl'
                    } bg-[#ffffff] border border-[#D6D6D6]  flex items-center py-3 px-4 justify-between w-[100%] `}
                  >
                    <p className='text-[#BBBBBB] text-[13px] leading-[13px] font-medium'>
                      {selectValue ? selectValue : 'Most Popular'}
                    </p>
                    <img
                      className={`${
                        show === true ? 'transform rotate-180' : ''
                      }`}
                      src={dropArrow}
                      alt=''
                    />
                  </div>
                  {show && (
                    <div className='relative'>
                      <ul className='w-[100%] border border-[#D6D6D6] border-t-0 absolute rounded-bl-3xl rounded-br-3xl  bg-[#ffffff]'>
                        <li
                          onClick={() => changeValue1('Most Popular')}
                          className='py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]'
                        >
                          Most Popular
                        </li>
                        <li
                          onClick={() => changeValue1('Ap2')}
                          className='py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium'
                        >
                          Ap2
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <label
                  className='text-sm12 text-primaryGray font-medium leading-3.5 mb-1'
                  htmlFor='styles'
                >
                  Style
                </label>
                <div className='w-[100%] mb-2.5' ref={ref2}>
                  <div
                    onClick={() => setShowStyles((prev) => !prev)}
                    className={`${
                      showStyles
                        ? 'rounded-tl-3xl rounded-tr-3xl'
                        : 'rounded-3xl'
                    } bg-[#ffffff] border border-[#D6D6D6]  flex items-center py-3 px-4 justify-between w-[100%] `}
                  >
                    <p className='text-[#BBBBBB] text-[13px] leading-[13px] font-medium'>
                      {selectStylesValue
                        ? selectStylesValue
                        : 'All Styles'}
                    </p>
                    <img
                      className={`${
                        showStyles === true
                          ? 'transform rotate-180'
                          : ''
                      }`}
                      src={dropArrow}
                      alt=''
                    />
                  </div>
                  {showStyles && (
                    <div className='relative'>
                      <ul className='w-[100%] border border-[#D6D6D6] border-t-0 absolute rounded-bl-3xl rounded-br-3xl  bg-[#ffffff]'>
                        <li
                          onClick={() => changeValue2('All Styles')}
                          className='py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]'
                        >
                          All Styles
                        </li>
                        <li
                          onClick={() => changeValue2('Ap2')}
                          className='py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium'
                        >
                          Ap2
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <label
                  className='text-sm12 text-primaryGray font-medium leading-3.5 mb-1'
                  htmlFor='subject'
                >
                  Subject
                </label>
                <div className='w-[100%] mb-2.5' ref={ref3}>
                  <div
                    onClick={() => setShowSub((prev) => !prev)}
                    className={`${
                      showSub
                        ? 'rounded-tl-3xl rounded-tr-3xl'
                        : 'rounded-3xl'
                    } bg-[#ffffff] border border-[#D6D6D6]  flex items-center py-3 px-4 justify-between w-[100%] `}
                  >
                    <p className='text-[#BBBBBB] text-[13px] leading-[13px] font-medium'>
                      {selectSubValue
                        ? selectSubValue
                        : 'All Subjects'}
                    </p>
                    <img
                      className={`${
                        showSub === true ? 'transform rotate-180' : ''
                      }`}
                      src={dropArrow}
                      alt=''
                    />
                  </div>
                  {showSub && (
                    <div className='relative'>
                      <ul className='w-[100%] border border-[#D6D6D6] border-t-0 absolute rounded-bl-3xl rounded-br-3xl  bg-[#ffffff]'>
                        <li
                          onClick={() => changeValue3('All Subjects')}
                          className='py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]'
                        >
                          All Subjects
                        </li>
                        <li
                          onClick={() => changeValue3('Ap2')}
                          className='py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium'
                        >
                          Ap2
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <label
                  className='text-sm12 text-primaryGray font-medium leading-3.5 mb-1'
                  htmlFor='medium'
                >
                  Medium
                </label>
                <div className='w-[100%] ' ref={ref4}>
                  <div
                    onClick={() => setShowMedium((prev) => !prev)}
                    className={`${
                      showMedium
                        ? 'rounded-tl-3xl rounded-tr-3xl'
                        : 'rounded-3xl'
                    } bg-[#ffffff] border border-[#D6D6D6]  flex items-center py-3 px-4 justify-between w-[100%] `}
                  >
                    <p className='text-[#BBBBBB] text-[13px] leading-[13px] font-medium'>
                      {selectMediumValue
                        ? selectMediumValue
                        : 'All Mediums'}
                    </p>
                    <img
                      className={`${
                        showMedium === true
                          ? 'transform rotate-180'
                          : ''
                      }`}
                      src={dropArrow}
                      alt=''
                    />
                  </div>
                  {showMedium && (
                    <div className='relative'>
                      <ul className='w-[100%] border border-[#D6D6D6] absolute border-t-0 rounded-bl-3xl rounded-br-3xl  bg-[#ffffff]'>
                        <li
                          onClick={() => changeValue4('All Mediums')}
                          className='py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]'
                        >
                          All Mediums
                        </li>
                        <li
                          onClick={() => changeValue4('Ap2')}
                          className='py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium'
                        >
                          Ap2
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Select Filters */}
                <div className='mb-6 mt-6'>
                  <label
                    className='text-sm12 text-primaryGray font-medium leading-3.5 mb-1 mt-6'
                    htmlFor='size'
                  >
                    Size
                  </label>
                  <div className='flex gap-2.5'>
                    <button
                      onClick={() => changeSizeFilter('S')}
                      className={`${
                        sizeBtn === 'S'
                          ? 'bg-[#BBBBBB] text-primaryBlack'
                          : 'bg-[#ffffff] text-primaryGray'
                      } w-[40px] h-[40px] border border-[#D6D6D6] rounded-lg text-primaryGray text-sm14 leading-4 font-medium`}
                    >
                      S
                    </button>
                    <button
                      onClick={() => changeSizeFilter('M')}
                      className={`${
                        sizeBtn === 'M'
                          ? 'bg-[#BBBBBB] text-primaryBlack'
                          : 'bg-[#ffffff] text-primaryGray'
                      } w-[40px] h-[40px] border border-[#D6D6D6] rounded-lg text-primaryGray text-sm14 leading-4 font-medium`}
                    >
                      M
                    </button>
                    <button
                      onClick={() => changeSizeFilter('L')}
                      className={`${
                        sizeBtn === 'L'
                          ? 'bg-[#BBBBBB] text-primaryBlack'
                          : 'bg-[#ffffff] text-primaryGray'
                      } w-[40px] h-[40px] border border-[#D6D6D6] rounded-lg text-primaryGray text-sm14 leading-4 font-medium`}
                    >
                      L
                    </button>
                  </div>

                  {/* Orientation */}
                  <label
                    className='text-sm12 text-primaryGray font-medium leading-3.5 mb-1 mt-2'
                    htmlFor='orientation'
                  >
                    Orientation
                  </label>
                  <div className='flex gap-2.5'>
                    {/* Custom */}
                    <svg
                      onClick={() =>
                        changeOrientationFilter('custom')
                      }
                      className={`${
                        orientationBtn === 'custom'
                          ? 'fill-[#BBBBBB]'
                          : 'fill-[#ffffff]'
                      }`}
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='0.5'
                        y='0.5'
                        width='39'
                        height='39'
                        rx='3.5'
                        stroke='#D9D9D9'
                      />
                      <path
                        className={`${
                          orientationBtn === 'custom'
                            ? 'fill-[#333333]'
                            : 'fill-[#BBBBBB]'
                        }`}
                        d='M8 10C8 8.89543 8.89543 8 10 8H18C19.1046 8 20 8.89543 20 10V15C20 16.1046 19.1046 17 18 17H10C8.89543 17 8 16.1046 8 15V10Z'
                        fill='#333333'
                      />
                      <path
                        className={`${
                          orientationBtn === 'custom'
                            ? 'fill-[#333333]'
                            : 'fill-[#BBBBBB]'
                        }`}
                        d='M8 21C8 19.8954 8.89543 19 10 19H18C19.1046 19 20 19.8954 20 21V29C20 30.1046 19.1046 31 18 31H10C8.89543 31 8 30.1046 8 29V21Z'
                        fill='#333333'
                      />
                      <path
                        className={`${
                          orientationBtn === 'custom'
                            ? 'fill-[#333333]'
                            : 'fill-[#BBBBBB]'
                        }`}
                        d='M22 10C22 8.89543 22.8954 8 24 8H29C30.1046 8 31 8.89543 31 10V29C31 30.1046 30.1046 31 29 31H24C22.8954 31 22 30.1046 22 29V10Z'
                        fill='#333333'
                      />
                    </svg>

                    {/* Horizontal */}
                    <svg
                      onClick={() =>
                        changeOrientationFilter('horizontal')
                      }
                      className={`${
                        orientationBtn === 'horizontal'
                          ? 'fill-[#BBBBBB]'
                          : 'fill-[#ffffff]'
                      }`}
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='0.5'
                        y='0.5'
                        width='39'
                        height='39'
                        rx='3.5'
                        stroke='#D9D9D9'
                      />
                      <path
                        d='M8 14C8 12.8954 8.89543 12 10 12H30C31.1046 12 32 12.8954 32 14V26C32 27.1046 31.1046 28 30 28H10C8.89543 28 8 27.1046 8 26V14Z'
                        className={`${
                          orientationBtn === 'horizontal'
                            ? 'fill-[#333333]'
                            : 'fill-[#BBBBBB]'
                        }`}
                        fill='#BBBBBB'
                      />
                    </svg>

                    {/* Verticle */}
                    <svg
                      onClick={() =>
                        changeOrientationFilter('verticle')
                      }
                      className={`${
                        orientationBtn === 'verticle'
                          ? 'fill-[#BBBBBB]'
                          : 'fill-[#ffffff]'
                      }`}
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='0.5'
                        y='0.5'
                        width='39'
                        height='39'
                        rx='3.5'
                        stroke='#D9D9D9'
                      />
                      <path
                        d='M12 10C12 8.89543 12.8954 8 14 8H26C27.1046 8 28 8.89543 28 10V30C28 31.1046 27.1046 32 26 32H14C12.8954 32 12 31.1046 12 30V10Z'
                        className={`${
                          orientationBtn === 'verticle'
                            ? 'fill-[#333333]'
                            : 'fill-[#BBBBBB]'
                        }`}
                        fill='#BBBBBB'
                      />
                    </svg>

                    {/* Square */}
                    <svg
                      onClick={() =>
                        changeOrientationFilter('square')
                      }
                      className={`${
                        orientationBtn === 'square'
                          ? 'fill-[#BBBBBB]'
                          : 'fill-[#ffffff]'
                      }`}
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='0.5'
                        y='0.5'
                        width='39'
                        height='39'
                        rx='3.5'
                        stroke='#D9D9D9'
                      />
                      <path
                        d='M8 10C8 8.89543 8.89543 8 10 8H30C31.1046 8 32 8.89543 32 10V30C32 31.1046 31.1046 32 30 32H10C8.89543 32 8 31.1046 8 30V10Z'
                        className={`${
                          orientationBtn === 'square'
                            ? 'fill-[#333333]'
                            : 'fill-[#BBBBBB]'
                        }`}
                        fill='#BBBBBB'
                      />
                    </svg>
                  </div>
                </div>

                {/* Price */}
                <div className='mb-6'>
                  <label
                    className='text-sm12 text-primaryGray font-medium leading-3.5 mb-1 '
                    htmlFor='price'
                  >
                    Price
                  </label>
                  <p className='text-sm11 font-normal text-primaryGray mb-2'>
                    Select minimum and maximum price range
                  </p>
                </div>

                {/* Search */}
                <div className='mb-6'>
                  <label
                    className='text-sm12 text-primaryGray font-medium leading-3.5 mb-1 '
                    htmlFor='search'
                  >
                    Search by Artist/Contributor
                  </label>
                  <div className='relative'>
                    <input
                      className='border border-[#D6D6D6] w-[100%] rounded-3xl placeholder:text-[#BBBBBB] placeholder:text-[13px] placeholder:leading-3 placeholder:font-medium py-2 px-4'
                      type='text'
                      placeholder='Contributor’s Name'
                    />
                    <button className='absolute right-1.5 top-1.5 bg-[#EEEEEE] text-primaryBlack text-[10px] font-medium leading-2.5 py-2 px-3 rounded-2xl'>
                      Search
                    </button>
                  </div>
                </div>

                {/* Colors */}
                <div className='mb-6'>
                  <label
                    className='text-sm12 text-primaryGray font-medium leading-3.5 mb-1 '
                    htmlFor='colors'
                  >
                    Colors
                  </label>
                  <p className='text-orangeColor text-sm12 font-normal'>
                    Clear Colour Filter
                  </p>
                </div>
                <button className='blackBtn'>
                  Clear All Filters
                </button>
              </form>
            </div>
          )}
          <div className='content'>
            <div className='flex'>
              {!showSidebar && (
                <img
                  className='cursor-pointer mr-3'
                  onClick={() => setShowSidebar(true)}
                  src={filterIcon}
                  alt=''
                />
              )}
              <div className='flex gap-1'>
                <div className='text-sm12 text-primaryGray py-1.5 border border-[#D6D6D6] rounded-2xl px-3'>
                  Architecture/Buildings
                </div>
                <div className='text-sm12 text-primaryGray py-1.5 border border-[#D6D6D6] rounded-2xl px-3'>
                  Backgrounds/Textures
                </div>
              </div>
            </div>
            <div
              className={`mainImagesCon mt-[15px] grid gap-4 ${
                showSidebar ? 'grid-cols-4' : 'grid-cols-5'
              } `}
            >
              {artsList.map((data) => {
                return (
                  <div
                    key={data?.artProductId}
                    className={` ${
                      showSidebar ? 'w-[24.3125rem]' : 'w-[22.625rem]'
                    } relative`}
                  >
                    <div
                      className={` w-full group overflow-hidden rounded-2xl relative`}
                      style={{ height: `${data?.height}px` }}
                      onClick={() => goToProductDetailsPage(data)}
                    >
                      <img
                        style={{ height: '100%', width: '100%' }}
                        src={imageLinkChange(data?.images[0]?.image)}
                        alt=''
                      />
                      <div
                        className='group-hover:flex hidden bg-blackRgba items-center justify-center absolute top-0 left-0 text-center'
                        style={{ height: '100%', width: '100%' }}
                      >
                        <div>
                          <div>
                            <p className='text-heading text-[#ffffff] font-semibold'>
                              {data?.productMaster.productName}
                            </p>
                            <p className='text-sm12 text-[#ffffff] font-medium'>
                              An Affair with array of Artistically{' '}
                              <br />
                              Printed Products
                            </p>
                            <span className='text-[#FFFFFF] text-heading font-thin'>
                              745+
                            </span>
                          </div>
                          <div className='absolute bottom-2 left-3 flex gap-2'>
                            <img src={Save} alt='' />
                            <img src={Similar} alt='' />
                            <img src={Artist} alt='' />
                            <img src={ShoppingCart} alt='' />
                            <img
                              src={Share}
                              onClick={(e) => {
                                setId(data?.productId);
                                setPopup(!popup);
                                e.stopPropagation();
                              }}
                              alt=''
                            />
                            <img src={Enlarge} alt='' />
                          </div>
                        </div>

                        {/* <img
                      className="absolute bottom-2.5 left-2.5"
                      src={prodWhiteIcon}
                      alt=""
                    /> */}
                      </div>
                    </div>
                    <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                      {data?.productMaster.productName}
                    </p>
                    <p className='text-primaryGray text-sm12 leading-[15px]'>
                      Artnstock <br />
                      35.4” x 31.5” Multiple Sizes
                    </p>
                    <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                      ${data?.sizeAndPrices[0].sellPrice}
                    </p>
                    {/* Rollover */}
                    {popup === true && data.productId === id ? (
                      <div className='absolute z-[999] top-[360px] left-[110px]'>
                        <div className='w-[305px] shadow-dropShadow bg-[#ffffff] p-5 rounded-2xl'>
                          <p className='text-[13px] text-[#333333] leading-[1.2]'>
                            Share and get paid with our{' '}
                            <span className='text-[#f88331]'>
                              Reseller Program
                            </span>
                          </p>
                          <div className='flex gap-3 py-4'>
                            <img src={Facebook} alt='' />
                            <img src={Twitter} alt='' />
                            <img src={Linkedin} alt='' />
                            <img src={Instagram} alt='' />
                            <img src={Email} alt='' />
                            <img src={Link} alt='' />
                          </div>
                          <p className='text-[13px] text-[#333333] leading-[1.2]'>
                            Send to
                          </p>
                          <div className='border border-[#d6d6d6] rounded-2xl px-3 py-2 my-2 '>
                            <div className=''>
                              <input
                                type='text'
                                name=''
                                className='regInput border-b-2 w-[80%] border-x-0 border-t-0 rounded-none mx-5 my-5 '
                                id=''
                              />
                              <div className='flex gap-2 my-2'>
                                <div>
                                  <img src={ProfileEmail} alt='' />
                                </div>
                                <div className='leading-[1.3]'>
                                  <p className='text-[13px] text-[#757575]'>
                                    ksgrafiks2012@gmail.com
                                  </p>
                                  <p className='text-[11px] text-[#757557]'>
                                    Lorem ipsum dolor
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='px-5 py-2 hidden'>
                            <input
                              type='text'
                              name=''
                              placeholder='Enter Email'
                              className='regInput '
                              id=''
                            />

                            <div className='flex gap-2 my-2'>
                              <div>
                                <img src={ProfileEmail} alt='' />
                              </div>
                              <div className='leading-[1.3]'>
                                <p className='text-[13px] text-[#757575]'>
                                  ksgrafiks2012@gmail.com
                                </p>
                                <p className='text-[11px] text-[#757557]'>
                                  Lorem ipsum dolor
                                </p>
                              </div>
                            </div>
                            <div className='w-[100%] h-[120px] border border-[#d6d6d6] rounded-2xl mb-2'>
                              Abstract de
                            </div>
                            <div className='mb-2'>
                              <button className='blackBtn'>
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className='flex gap-[5px] mt-24 mx-auto items-center justify-center'>
              <p className='text-[13px] text-primaryGray leading-[15px] font-normal'>
                Page
              </p>
              <div className='flex w-[88px] border border-[#D6D6D6] rounded-2xl overflow-hidden'>
                <button className='bg-[#F7F7F7] py-2.5 px-3'>
                  <img src={smallLeftArrow} alt='' />
                </button>
                <input
                  className='w-[30px] text-[13px] leading-[15px] font-normal text-primaryGray text-center'
                  type='text'
                  value={1}
                />
                <button className='bg-[#F7F7F7] py-2.5 px-3'>
                  <img src={smallRightArrow} alt='' />
                </button>
              </div>
              <p className='text-[13px] text-primaryGray leading-[15px] font-normal'>
                of 18
              </p>
            </div>
            <button className='blackBtn mt-2.5 mb-24 mx-auto block'>
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
