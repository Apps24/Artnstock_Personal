import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { httpClient } from '../../../axios';
import viewIcon from '../../../assets/images/Icons/viewIcon.svg';
import conHead from '../../../assets/images/static/conHead.jpg';
import { Tab } from '@headlessui/react';
import frameType1 from '../../../assets/images/static/Thumbnail Frame 01.jpg';
import questionIcon from '../../../assets/images/Icons/questionIcon.svg';
import minusIcon from '../../../assets/images/Icons/minusIcon.svg';
import plusIcon from '../../../assets/images/Icons/plusIcon.svg';
import certificateImg from '../../../assets/images/static/Certificate.jpg';
import festiveImg from '../../../assets/images/static/Festive Offer.jpg';
import vanIcon from '../../../assets/images/Icons/vanIcon.svg';
import packingIcon from '../../../assets/images/Icons/packingIcon.svg';
import colorCicleImg from '../../../assets/images/Icons/Icon - Select Colour Art Print.svg';
import blackCircleImg from '../../../assets/images/Icons/W Art Print.svg';
import roomViewImg from '../../../assets/images/Icons/Icon - View in a room.svg';
import threeDImg from '../../../assets/images/Icons/Icon - 3D View.svg';
import addIcon from '../../../assets/images/Icons/addIcon.svg';
// import wishlistIcon from '../../../assets/images/Icons/wishlistIcon.svg';
import { ReactComponent as WishlistIcon } from '../../../assets/images/Icons/wishlistIcon.svg';
import shareIcon from '../../../assets/images/Icons/shareIcon.svg';
import productHeead from '../../../assets/images/static/Header - Products (1).svg';
import productImg from '../../../assets/images/static/products.svg';
import wallpaperImg from '../../../assets/images/static/wallpaper.svg';
import brandingImg from '../../../assets/images/static/Branding.svg';

// prathamesh
import artcolor from '../../../assets/images/lifestyle/artcolor.png';
import mugcolor from '../../../assets/images/lifestyle/mugcolor.png';
import glasscolor from '../../../assets/images/lifestyle/glasscolor.png';
import mousecolor from '../../../assets/images/lifestyle/mousecolor.png';
import coastercolor from '../../../assets/images/lifestyle/coastercolor.png';
import flowercolor from '../../../assets/images/lifestyle/flowercolor.png';
import giftcolor from '../../../assets/images/lifestyle/giftcolor.png';
import bagcolor from '../../../assets/images/lifestyle/bagcolor.png';
import shirtcolor from '../../../assets/images/lifestyle/shirtcolor.png';
import notepadcolor from '../../../assets/images/lifestyle/notepadcolor.png';
import dropdown from '../../../assets/images/socials/dropdown.png';
import tshirtphoto from '../../../assets/images/lifestyle/tshirtphoto.png';
import tickgreen from '../../../assets/images/lifestyle/tickgreen.png';

import DigArtPrint from '../../../assets/images/lifestyle/DigArtPrint.png';
import mensTshirt from '../../../assets/images/lifestyle/mensTshirt.png';
import darkBlueColor from '../../../assets/images/lifestyle/darkBlueColor.png';
import mediumSize from '../../../assets/images/lifestyle/mediumSize.png';
import cottonFabric from '../../../assets/images/lifestyle/cottonFabric.png';
import MensShirt from '../../../assets/images/lifestyle/2MensShirt.png';
import cards from '../../../assets/images/lifestyle/cards.png';
import certificate from '../../../assets/images/lifestyle/Certificate.png';

// Pratiksha
import profile from '../../../assets/images/Menubar/Profile.png';
import pro from '../../../assets/images/art-details/Pro.png';
import locationImg from '../../../assets/images/art-details/location.png';
import R1 from '../../../assets/images/art-details/R1.png';
import R2 from '../../../assets/images/art-details/R2.png';
import R3 from '../../../assets/images/art-details/R3.png';
import IconFacebook from '../../../assets/images/art-details/IconFacebook.png';
import IconInstagram from '../../../assets/images/art-details/IconInstagram.png';
import IconLinkedin from '../../../assets/images/art-details/IconLinkedin.png';
import azra1 from '../../../assets/images/art-details/azra1.png';
import azra2 from '../../../assets/images/art-details/azra2.png';
import azra3 from '../../../assets/images/art-details/azra3.png';
import azra4 from '../../../assets/images/art-details/azra4.png';
import azra5 from '../../../assets/images/art-details/azra5.png';
import grp from '../../../assets/images/art-details/grp.png';
import grp144 from '../../../assets/images/art-details/grp144.png';
import stars from '../../../assets/images/art-details/stars.png';
import Footer from '../../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const styleDrop = [
  { a: 'ddsdd' },
  { a: 'ddsdd' },
  { a: 'ddsdd' },
  { a: 'ddsdd' },
  { a: 'ddsdd' },
  { a: 'ddsdd' },
  { a: 'ddsdd' },
];

const keywordsArr = [
  'Architecture/Buildings',
  'Backgrounds/Textures',
  'Beauty/Fashion',
  ' Business/Finance',
  'Computer/Communiation',
  'Education',
  'Emotions',
  'Health/Medical',
  'Industry/Craft',
  'Music',
  'People',
  'Nature/Landscapes',
  'Computer/Communiation',
  'Education',
  'Emotions',
  ' Health/Medical',
  'Industry/Craft',
  'Music',
  'People',
  'Nature/Landscapes',
];

const azraDesign = [
  {
    img: `${azra1}`,
    title: 'Lorem Ipsum dolor',
    description:
      'lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb',
  },
  {
    img: `${azra2}`,
    title: 'Lorem Ipsum dolor',
    description:
      'lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb',
  },
  {
    img: `${azra3}`,
    title: 'Lorem Ipsum dolor',
    description:
      'lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb',
  },
  {
    img: `${azra4}`,
    title: 'Lorem Ipsum dolor',
    description:
      'lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb',
  },
  {
    img: `${azra5}`,
    title: 'Lorem Ipsum dolor',
    description:
      'lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb',
  },
];

const otherDesign = [
  {
    img: `${azra4}`,
    title: 'Lorem Ipsum dolor',
    description:
      'lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb',
  },
  {
    img: `${azra5}`,
    title: 'Lorem Ipsum dolor',
    description:
      'lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb',
  },
  {
    img: `${azra1}`,
    title: 'Lorem Ipsum dolor',
    description:
      'lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb',
  },
  {
    img: `${azra3}`,
    title: 'Lorem Ipsum dolor',
    description:
      'lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb',
  },
  {
    img: `${azra2}`,
    title: 'Lorem Ipsum dolor',
    description:
      'lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb',
  },
];

const arrImg = [
  {
    img: `${azra4}`,
    title: 'Lorem Ipsum dolor',
    description: 'lorem ijsrg gdurd jhgfyvdh uegf',
  },
  {
    img: `${azra5}`,
    title: 'Lorem Ipsum dolor',
    description: 'lorem ijsrg gdurd jhgfyvdh uegf',
  },
  {
    img: `${azra1}`,
    title: 'Lorem Ipsum dolor',
    description: 'lorem ijsrg gdurd jhgfyvdh uegf',
  },
  {
    img: `${azra3}`,
    title: 'Lorem Ipsum dolor',
    description: 'lorem ijsrg gdurd jhgfyvdh uegf',
  },
  {
    img: `${azra2}`,
    title: 'Lorem Ipsum dolor',
    description: 'lorem ijsrg gdurd jhgfyvdh uegf',
  },
  {
    img: `${azra1}`,
    title: 'Lorem Ipsum dolor',
    description: 'lorem ijsrg gdurd jhgfyvdh uegf',
  },
  {
    img: `${azra3}`,
    title: 'Lorem Ipsum dolor',
    description: 'lorem ijsrg gdurd jhgfyvdh uegf',
  },
  {
    img: `${azra2}`,
    title: 'Lorem Ipsum dolor',
    description: 'lorem ijsrg gdurd jhgfyvdh uegf',
  },
];

const CustomerImg = [
  `${azra1}`,
  `${azra2}`,
  `${azra3}`,
  `${azra4}`,
  `${azra5}`,
  `${azra2}`,
  `${azra3}`,
  `${azra5}`,
  `${azra4}`,
  `${azra1}`,
];

const ArtDetails = () => {
  const location = useLocation();

  const [artDetails, setArtDetails] = useState({});

  const [orientationBtn, setOrientationBtn] = useState('horizontal');
  const [includeFrame, setIncludeFrame] = useState(true);
  const [includeTopMat, setIncludeTopMat] = useState(false);
  const [includeBottomMat, setIncludeBottomMat] = useState(false);
  const [isAllStyleOpen, setIsAllStyleOpen] = useState(false);

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
  const [checked, setChecked] = useState('icon7'); //Store ID temporary
  const [selectedSize, setSelectedSize] = useState('M');

  const navigate = useNavigate();

  const userId = useSelector((state) => state.auth.userId);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const check = (item) => {
    setChecked(item.id);
    // setShirt(item.backgroundColor);
  };

  useEffect(() => {
    httpClient
      .get(`/art_master/editArtMaster/${location?.state?.id}`)
      .then((res) => {
        console.log(res.data);
        setArtDetails(res.data);
      });
  }, []);

  const addToCart = () => {
    // const object = {
    //   artProductId: artDetails.artId,
    //   size: artDetails.size,
    //   userId: userId,
    // };

    // httpClient
    //   .post(`/art_product_master/create`, object)
    //   .then((res) => {
    //     console.log(res.data);
    //   });

    // navigate to product cart page
    navigate('/shopping-cart');
  };

  // this code is for valdating if artId already exists in wishlist
  const [wishlist, setwishlist] = useState();

  useEffect(() => {
    getAllWishlistByUserId();
  }, []);

  const getAllWishlistByUserId = async () => {
    try {
      const res = await httpClient.get(
        `/wishlist_master/getByUserIdList/${userId}`
      );
      setwishlist(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  // above code is for valdating if artId already exists in wishlist

  const addToWishlist = (artId) => {
    const findId = wishlist.find(
      (obj) => obj.artMaster.artId === artId
    );

    if (!findId) {
      const object = {
        artId: artId,
        id: userId,
      };
      httpClient.post(`/wishlist_master/save`, object).then((res) => {
        // console.log(res);
        getAllWishlistByUserId();
      });
    }
  };

  const wishlistDelete = async (id) => {
    wishlist?.forEach(async (obj) => {
      if (obj.artMaster.artId === id) {
        try {
          const res = await httpClient.delete(
            `/wishlist_master/delete/${obj.wishListId}`
          );
          getAllWishlistByUserId();
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  const checkoutPage = () => {
    // navigate to checkout page
    navigate('/checkout');
  };

  useEffect(() => {
    console.log(artDetails);
  }, [artDetails]);

  return (
    <>
      <div className='w-w1168 mx-auto mt-10'>
        <p className='bullet mb-0.5'>
          Artnstock / Art / Abstract Art / Shop Now
        </p>
        <div className='flex'>
          <div className='left'>
            <div className='w-[35.625rem] h-[35.625rem] bg-[#F5F5F7] rounded-[30px] relative flex items-center justify-center'>
              <div className='bg-primaryBlack text-[#ffffff] absolute top-[15px] left-[15px] text-[10px] font-normal leading-3.5 rounded-2xl py-0.5 px-2.5'>
                Exclusive
              </div>
              <div className='frameDiv relative'>
                <div
                  className={`after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:right-0 after:top-0 after:border-8 after:border-primaryBlack after:p-5`}
                >
                  <div
                    className={`after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:right-0 after:top-0 after:border-8 after:border-[#07f2cf] `}
                  >
                    <img
                      src={`${
                        artDetails.image +
                        '?tr=w-300,h-200,c-maintain_ratio'
                      }`}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <img
                src={viewIcon}
                className='absolute bottom-[15px] right-[15px]'
                alt=''
              />
            </div>

            <div className='flex justify-between mt-2.5 mb-5'>
              <div className='flex gap-x-2.5'>
                <img src={colorCicleImg} alt='' />
                <img src={blackCircleImg} alt='' />
                <img src={roomViewImg} alt='' />
                <img src={threeDImg} alt='' />
              </div>
              <div className='flex gap-x-2.5 items-center'>
                <img src={addIcon} alt='' />

                {wishlist?.find(
                  (obj) => obj.artMaster.artId === artDetails.artId
                ) === undefined ? (
                  <WishlistIcon
                    onClick={() => {
                      addToWishlist(artDetails?.artId);
                    }}
                    style={{ fill: '#888888', width: '100%' }}
                  />
                ) : (
                  <WishlistIcon
                    onClick={() => {
                      wishlistDelete(artDetails?.artId);
                    }}
                    style={{
                      fill: 'red',
                      width: '100%',
                    }}
                  />
                )}

                {/* <WishlistIcon
                  style={{
                    width: '100%',
                    fill: `${
                      wishlist?.find(
                        (obj) =>
                          obj.artMaster.artId === artDetails.artId
                      ) === undefined
                        ? '#888888'
                        : 'red'
                    }`,
                  }}
                  onClick={() => {
                    addToWishlist(artDetails?.artId);
                  }}
                /> */}

                <img src={shareIcon} alt='' />
              </div>
            </div>

            <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
              You have selected
            </p>
            <div class='h-[220px] w-full rounded-2xl bg-gradient-to-r from-[#DC4C9A] via-[#9593CD] via-[#84D49C] via-[#CCEC3B] to-[#F7941D] p-[1px]'>
              <div class='flex h-[100%] w-[100%] bg-[#ffffff] rounded-2xl pt-2.5 pl-2.5'></div>
            </div>
          </div>
          <div className='right pl-7'>
            <p className='text-[1.563rem] font-medium leading-7 text-primaryBlack mb-0.5'>
              {artDetails?.artName}
            </p>
            <img src={conHead} alt='' />
            <div className='mt-2 mb-8 border-t-2 border-b-2 border-[#EFEFEF]'>
              <table className='w-[100%]'>
                <tr className='border-b border-[#EFEFEF]'>
                  <td className='text-primaryGray text-sm12 font-medium leading-4 w-[100px]'>
                    Product ID:
                  </td>
                  <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                    {artDetails?.arProductNo}
                  </td>
                </tr>
                <tr className='border-b border-[#EFEFEF]'>
                  <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                    Availability:
                  </td>
                  <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                    {artDetails?.stockStatus}
                  </td>
                </tr>
                <tr className=''>
                  <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                    Property Release:
                  </td>
                  <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                    Yes
                  </td>
                </tr>
              </table>
            </div>
            {/* Tabs */}
            <Tab.Group>
              <Tab.List
                className='border border-[#E9E9E9]  rounded-3xl overflow-hidden'
                style={{ width: 'fit-content' }}
              >
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'text-[#333333] text-[15px] font-medium leading-5 py-2.5 px-6 outline-none bg-[#bbbbbb]'
                      : 'text-[#757575] text-[15px] font-medium leading-5 py-2.5 px-6 border-r border-[#D7D7D7] bg-[#EEEEEE]'
                  }
                >
                  Size
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'text-[#333333] bg-[#bbbbbb] text-[15px] font-medium leading-5 py-2.5 px-6 outline-none'
                      : 'text-[#757575] text-[15px] font-medium leading-5 py-2.5 px-6 border-r border-[#D7D7D7] bg-[#EEEEEE]'
                  }
                >
                  Frame
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'text-[#333333] bg-[#bbbbbb] text-[15px] font-medium leading-5 py-2.5 px-6 outline-none'
                      : 'text-[#757575] text-[15px] font-medium leading-5 py-2.5 px-6 border-r border-[#D7D7D7] bg-[#EEEEEE]'
                  }
                >
                  Mat
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'text-[#333333] bg-[#bbbbbb] text-[15px] font-medium leading-5 py-2.5 px-6 outline-none'
                      : 'text-[#757575] text-[15px] font-medium leading-5 py-2.5 px-6 bg-[#EEEEEE]'
                  }
                >
                  Material
                </Tab>
              </Tab.List>
              <Tab.Panels className='pt-5 pb-7'>
                <Tab.Panel>
                  <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
                    Select Print Orientation
                  </p>
                  <div className='flex gap-2.5 mb-5'>
                    {/* Horizontal */}
                    <div className='text-center'>
                      <svg
                        onClick={() =>
                          setOrientationBtn('horizontal')
                        }
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
                          className={`${
                            orientationBtn === 'horizontal'
                              ? 'stroke-[#333333] '
                              : 'stroke-[#d9d9d9]'
                          }`}
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
                      <p
                        className={`text-sm11 ${
                          orientationBtn === 'horizontal'
                            ? 'text-[#333333] '
                            : 'text-primaryGray'
                        }`}
                      >
                        Horizontal
                      </p>
                    </div>

                    {/* Verticle */}
                    <div>
                      <svg
                        onClick={() => setOrientationBtn('verticle')}
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
                          className={`${
                            orientationBtn === 'verticle'
                              ? 'stroke-[#333333] '
                              : 'stroke-[#d9d9d9]'
                          }`}
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
                      <p
                        className={`text-sm11 ${
                          orientationBtn === 'verticle'
                            ? 'text-[#333333] '
                            : 'text-primaryGray'
                        }`}
                      >
                        Vertical
                      </p>
                    </div>

                    {/* Square */}
                    <div>
                      <svg
                        onClick={() => setOrientationBtn('square')}
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
                          className={`${
                            orientationBtn === 'square'
                              ? 'stroke-[#333333] '
                              : 'stroke-[#d9d9d9]'
                          }`}
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
                      <p
                        className={`text-sm11 ${
                          orientationBtn === 'square'
                            ? 'text-[#333333] '
                            : 'text-primaryGray'
                        }`}
                      >
                        Square
                      </p>
                    </div>
                  </div>
                  <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
                    Select{' '}
                    <span className='capitalize'>
                      {orientationBtn}
                    </span>{' '}
                    Orientation
                  </p>
                  <div className='flex gap-5 flex-wrap mb-2.5'>
                    <div className='flex items-center'>
                      <input className=' mr-1' type='checkbox' />
                      <p className='text-[13px] text-primaryGray '>
                        25cm x 20cm
                      </p>
                    </div>
                    <div className='flex items-center'>
                      <input className=' mr-1' type='checkbox' />
                      <p className='text-[13px] text-primaryGray '>
                        36cm x 28cm
                      </p>
                    </div>
                  </div>
                  <p className='text-sm11 text-primaryGray font-medium'>
                    The artwork will be cropped to fit the selected
                    size. <br />
                    The sizes above are standard print sizes for
                    horizontal images.
                  </p>
                </Tab.Panel>
                <Tab.Panel>
                  <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
                    Select Frame and Colour
                  </p>
                  <div className='flex gap-2.5 mb-5'>
                    {/* Include Frame */}
                    <div className='text-center'>
                      <svg
                        onClick={() => setIncludeFrame(true)}
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M4 0C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0H4ZM5 3C3.89543 3 3 3.89543 3 5V43C3 44.1046 3.89543 45 5 45H43C44.1046 45 45 44.1046 45 43V5C45 3.89543 44.1046 3 43 3H5Z'
                          className={`${
                            includeFrame
                              ? 'fill-[#333333]'
                              : 'fill-[#BBBBBB]'
                          }`}
                        />
                        <rect
                          x='10'
                          y='10'
                          width='28'
                          height='28'
                          rx='2'
                          fill='#EEEEEE'
                        />
                      </svg>

                      <p
                        className={`text-sm11 ${
                          includeFrame
                            ? 'text-[#333333] '
                            : 'text-primaryGray'
                        }`}
                      >
                        Include <br /> Frame
                      </p>
                    </div>
                    {/* Exclude Frame */}
                    <div className='text-center'>
                      <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        onClick={() => setIncludeFrame(false)}
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M4 0C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0H4ZM5 3C3.89543 3 3 3.89543 3 5V43C3 44.1046 3.89543 45 5 45H43C44.1046 45 45 44.1046 45 43V5C45 3.89543 44.1046 3 43 3H5Z'
                          className={`${
                            !includeFrame
                              ? 'fill-[#333333]'
                              : 'fill-[#BBBBBB]'
                          }`}
                        />
                        <rect
                          x='10'
                          y='10'
                          width='28'
                          height='28'
                          rx='2'
                          fill='#EEEEEE'
                        />
                        <rect
                          width='58.2986'
                          height='1.0096'
                          rx='0.5'
                          transform='matrix(0.706047 0.708165 -0.706047 0.708165 3.83838 3)'
                          fill='#BBBBBB'
                        />
                        <rect
                          width='58.2986'
                          height='1.0096'
                          rx='0.5'
                          transform='matrix(-0.706047 0.708165 0.706047 0.708165 44.1616 3)'
                          fill='#BBBBBB'
                        />
                      </svg>

                      <p
                        className={`text-sm11 ${
                          !includeFrame
                            ? 'text-[#333333] '
                            : 'text-primaryGray'
                        }`}
                      >
                        Exclude <br /> Frame
                      </p>
                    </div>
                    {/*  Frame color */}
                    <div className='text-center ml-5'>
                      <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M4 0H16V3H10.5H5C3.89539 3 3 3.89542 3 5V16H0V4C0 1.79086 1.79089 0 4 0Z'
                          fill='#A6CF4F'
                        />
                        <rect
                          x='16'
                          width='16'
                          height='3'
                          fill='#FED303'
                        />
                        <rect
                          x='16'
                          y='45'
                          width='16'
                          height='3'
                          fill='#283897'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M44 0H32V3H37.5H43C44.1046 3 45 3.89542 45 5V16H48V4C48 1.79086 46.2091 0 44 0Z'
                          fill='#FFAC14'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M44 48H32V45H37.5H43C44.1046 45 45 44.1046 45 43V32H48V44C48 46.2091 46.2091 48 44 48Z'
                          fill='#BB0271'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M4 48H16V45H10.5H5C3.89539 45 3 44.1046 3 43V32H0V44C0 46.2091 1.79089 48 4 48Z'
                          fill='#02A2B8'
                        />
                        <rect
                          x='45'
                          y='16'
                          width='3'
                          height='16'
                          fill='#F25721'
                        />
                        <rect
                          y='16'
                          width='3'
                          height='16'
                          fill='#01A566'
                        />
                        <rect
                          x='10'
                          y='10'
                          width='28'
                          height='28'
                          rx='2'
                          fill='#EEEEEE'
                        />
                      </svg>

                      <p className={`text-sm11  text-primaryGray `}>
                        Frame <br /> Color
                      </p>
                    </div>
                  </div>
                  <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
                    Select Frame Type
                  </p>
                  <div className='flex gap-5 flex-wrap mb-0.5'>
                    <div className=''>
                      <img src={frameType1} alt='' />
                    </div>
                  </div>
                  <p className='text-orangeColor text-sm12 font-normal'>
                    See all frames
                  </p>
                </Tab.Panel>
                <Tab.Panel>
                  <div className='flex gap-7'>
                    <div>
                      <div className='flex items-center mb-1'>
                        <p className='text-primaryBlack text-[15px] font-medium leading-5 mr-1'>
                          Select Top Mat
                        </p>
                        <img src={questionIcon} alt='' />
                      </div>
                      <div className='flex gap-2.5 mb-5'>
                        {/* Include Mat */}
                        <div className='text-center'>
                          <svg
                            onClick={() => setIncludeTopMat(true)}
                            width='48'
                            height='48'
                            viewBox='0 0 48 48'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M4 0.5H44C45.933 0.5 47.5 2.067 47.5 4V44C47.5 45.933 45.933 47.5 44 47.5H4C2.067 47.5 0.5 45.933 0.5 44V4C0.5 2.067 2.067 0.5 4 0.5Z'
                              className={`${
                                includeTopMat
                                  ? 'fill-primaryBlack'
                                  : 'fill-[#EEEEEE]'
                              }`}
                              stroke='#D6D6D6'
                            />
                            <path
                              d='M36 9H12C10.3431 9 9 10.3431 9 12V36C9 37.6569 10.3431 39 12 39H36C37.6569 39 39 37.6569 39 36V12C39 10.3431 37.6569 9 36 9Z'
                              fill='white'
                            />
                          </svg>

                          <p
                            className={`text-sm11 ${
                              includeTopMat
                                ? 'text-[#333333] '
                                : 'text-primaryGray'
                            }`}
                          >
                            Include <br /> Top Mat
                          </p>
                        </div>
                        {/* Exclude Mat */}
                        <div className='text-center'>
                          <svg
                            width='48'
                            height='48'
                            viewBox='0 0 48 48'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            onClick={() => setIncludeTopMat(false)}
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M4 0C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0H4ZM5 3C3.89543 3 3 3.89543 3 5V43C3 44.1046 3.89543 45 5 45H43C44.1046 45 45 44.1046 45 43V5C45 3.89543 44.1046 3 43 3H5Z'
                              className={`${
                                !includeTopMat
                                  ? 'fill-[#333333]'
                                  : 'fill-[#BBBBBB]'
                              }`}
                            />
                            <rect
                              x='10'
                              y='10'
                              width='28'
                              height='28'
                              rx='2'
                              fill='#EEEEEE'
                            />
                            <rect
                              width='58.2986'
                              height='1.0096'
                              rx='0.5'
                              transform='matrix(0.706047 0.708165 -0.706047 0.708165 3.83838 3)'
                              fill='#BBBBBB'
                            />
                            <rect
                              width='58.2986'
                              height='1.0096'
                              rx='0.5'
                              transform='matrix(-0.706047 0.708165 0.706047 0.708165 44.1616 3)'
                              fill='#BBBBBB'
                            />
                          </svg>

                          <p
                            className={`text-sm11 ${
                              !includeTopMat
                                ? 'text-[#333333] '
                                : 'text-primaryGray'
                            }`}
                          >
                            Exclude <br /> Top Mat
                          </p>
                        </div>
                        {/*  Frame color */}
                        <div className='text-center ml-5'>
                          <svg
                            width='48'
                            height='48'
                            viewBox='0 0 48 48'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4 0H16V3H10.5H5C3.89539 3 3 3.89542 3 5V16H0V4C0 1.79086 1.79089 0 4 0Z'
                              fill='#A6CF4F'
                            />
                            <rect
                              x='16'
                              width='16'
                              height='3'
                              fill='#FED303'
                            />
                            <rect
                              x='16'
                              y='45'
                              width='16'
                              height='3'
                              fill='#283897'
                            />
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M44 0H32V3H37.5H43C44.1046 3 45 3.89542 45 5V16H48V4C48 1.79086 46.2091 0 44 0Z'
                              fill='#FFAC14'
                            />
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M44 48H32V45H37.5H43C44.1046 45 45 44.1046 45 43V32H48V44C48 46.2091 46.2091 48 44 48Z'
                              fill='#BB0271'
                            />
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4 48H16V45H10.5H5C3.89539 45 3 44.1046 3 43V32H0V44C0 46.2091 1.79089 48 4 48Z'
                              fill='#02A2B8'
                            />
                            <rect
                              x='45'
                              y='16'
                              width='3'
                              height='16'
                              fill='#F25721'
                            />
                            <rect
                              y='16'
                              width='3'
                              height='16'
                              fill='#01A566'
                            />
                            <rect
                              x='10'
                              y='10'
                              width='28'
                              height='28'
                              rx='2'
                              fill='#EEEEEE'
                            />
                          </svg>

                          <p
                            className={`text-sm11  text-primaryGray `}
                          >
                            Select <br /> Mat Color
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center mb-1'>
                        <p className='text-primaryBlack text-[15px] font-medium leading-5 mr-1'>
                          Select Bottom Mat
                        </p>
                        <img src={questionIcon} alt='' />
                      </div>
                      <div className='flex gap-2.5 mb-5'>
                        {/* Include Mat */}
                        <div className='text-center'>
                          <svg
                            onClick={() => setIncludeBottomMat(true)}
                            width='48'
                            height='48'
                            viewBox='0 0 48 48'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M4 0.5H44C45.933 0.5 47.5 2.067 47.5 4V44C47.5 45.933 45.933 47.5 44 47.5H4C2.067 47.5 0.5 45.933 0.5 44V4C0.5 2.067 2.067 0.5 4 0.5Z'
                              stroke='#D6D6D6'
                            />
                            <path
                              d='M36 8H12C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8Z'
                              className={`${
                                includeBottomMat
                                  ? 'fill-primaryBlack'
                                  : 'fill-[#EEEEEE]'
                              }`}
                            />
                            <path
                              d='M30 15H18C16.3431 15 15 16.3431 15 18V30C15 31.6569 16.3431 33 18 33H30C31.6569 33 33 31.6569 33 30V18C33 16.3431 31.6569 15 30 15Z'
                              fill='white'
                            />
                          </svg>

                          <p
                            className={`text-sm11 ${
                              includeBottomMat
                                ? 'text-[#333333] '
                                : 'text-primaryGray'
                            }`}
                          >
                            Include <br /> Bottom Mat
                          </p>
                        </div>
                        {/* Exclude Mat */}
                        <div className='text-center'>
                          <svg
                            width='48'
                            height='48'
                            viewBox='0 0 48 48'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            onClick={() => setIncludeBottomMat(false)}
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M4 0C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0H4ZM5 3C3.89543 3 3 3.89543 3 5V43C3 44.1046 3.89543 45 5 45H43C44.1046 45 45 44.1046 45 43V5C45 3.89543 44.1046 3 43 3H5Z'
                              className={`${
                                !includeBottomMat
                                  ? 'fill-[#333333]'
                                  : 'fill-[#BBBBBB]'
                              }`}
                            />
                            <rect
                              x='10'
                              y='10'
                              width='28'
                              height='28'
                              rx='2'
                              fill='#EEEEEE'
                            />
                            <rect
                              width='58.2986'
                              height='1.0096'
                              rx='0.5'
                              transform='matrix(0.706047 0.708165 -0.706047 0.708165 3.83838 3)'
                              fill='#BBBBBB'
                            />
                            <rect
                              width='58.2986'
                              height='1.0096'
                              rx='0.5'
                              transform='matrix(-0.706047 0.708165 0.706047 0.708165 44.1616 3)'
                              fill='#BBBBBB'
                            />
                          </svg>

                          <p
                            className={`text-sm11 ${
                              !includeBottomMat
                                ? 'text-[#333333] '
                                : 'text-primaryGray'
                            }`}
                          >
                            Exclude <br /> Bottom Mat
                          </p>
                        </div>
                        {/*  Frame color */}
                        <div className='text-center ml-5'>
                          <svg
                            width='48'
                            height='48'
                            viewBox='0 0 48 48'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4 0H16V3H10.5H5C3.89539 3 3 3.89542 3 5V16H0V4C0 1.79086 1.79089 0 4 0Z'
                              fill='#A6CF4F'
                            />
                            <rect
                              x='16'
                              width='16'
                              height='3'
                              fill='#FED303'
                            />
                            <rect
                              x='16'
                              y='45'
                              width='16'
                              height='3'
                              fill='#283897'
                            />
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M44 0H32V3H37.5H43C44.1046 3 45 3.89542 45 5V16H48V4C48 1.79086 46.2091 0 44 0Z'
                              fill='#FFAC14'
                            />
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M44 48H32V45H37.5H43C44.1046 45 45 44.1046 45 43V32H48V44C48 46.2091 46.2091 48 44 48Z'
                              fill='#BB0271'
                            />
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M4 48H16V45H10.5H5C3.89539 45 3 44.1046 3 43V32H0V44C0 46.2091 1.79089 48 4 48Z'
                              fill='#02A2B8'
                            />
                            <rect
                              x='45'
                              y='16'
                              width='3'
                              height='16'
                              fill='#F25721'
                            />
                            <rect
                              y='16'
                              width='3'
                              height='16'
                              fill='#01A566'
                            />
                            <rect
                              x='10'
                              y='10'
                              width='28'
                              height='28'
                              rx='2'
                              fill='#EEEEEE'
                            />
                          </svg>

                          <p
                            className={`text-sm11  text-primaryGray `}
                          >
                            Select <br /> Mat Color
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
                    Select Material
                  </p>
                  <div className='flex gap-x-7 flex-wrap w-[308px]'>
                    <div className='flex items-center'>
                      <input className=' mr-1' type='checkbox' />
                      <p className='text-[13px] text-primaryGray '>
                        Cavas
                      </p>
                    </div>
                    <div className='flex items-center'>
                      <input className=' mr-1' type='checkbox' />
                      <p className='text-[13px] text-primaryGray '>
                        Picture Rag
                      </p>
                    </div>
                    <div className='flex items-center'>
                      <input className=' mr-1' type='checkbox' />
                      <p className='text-[13px] text-primaryGray '>
                        Glossy Photo Paper
                      </p>
                    </div>
                    <div className='flex items-center'>
                      <input className=' mr-1' type='checkbox' />
                      <p className='text-[13px] text-primaryGray '>
                        Somerset Velvet
                      </p>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            <div
              className='flex border-2 border-[#EEEEEE] rounded-3xl overflow-hidden'
              style={{ width: 'fit-content' }}
            >
              <button className='bg-[#EEEEEE] py-3 px-3'>
                <img src={minusIcon} alt='' />
              </button>
              <input
                className='w-[30px] text-[13px] leading-[15px] font-normal text-primaryGray text-center outline-none'
                type='text'
                value={1}
              />
              <button className='bg-[#EEEEEE] py-3 px-3'>
                <img
                  className='w-[11px] h-[11px]'
                  src={plusIcon}
                  alt=''
                />
              </button>
            </div>

            <div className='flex items-baseline'>
              <p className='text-orangeColor text-[22px] font-normal leading-[32px]'>
                $
              </p>
              <p className='text-orangeColor text-[38px] font-normal leading-[55px]'>
                {artDetails?.price}
              </p>
            </div>
            <p className='text-sm12 font-normal text-primaryGray'>
              Show Price Details
            </p>

            <div className='mt-5 flex gap-x-2.5 mb-1.5'>
              <button
                onClick={() => {
                  addToCart();
                }}
                className='outlineBtn'
              >
                Add to Cart
              </button>
              <button onClick={checkoutPage} className='blackBtn'>
                Shop Now
              </button>
            </div>

            <p className='text-primaryGray text-sm11 font-normal'>
              *GST, Branding, Logistics and Customized Packaging
              charges additional as applicable. <br />
              Returns and exchange.{' '}
              <span className='text-orangeColor'>Know more</span>
            </p>
            <div className='flex gap-x-2.5 my-7'>
              <img src={certificateImg} alt='' />
              <img src={festiveImg} alt='' />
            </div>
            <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
              Delivery options
            </p>
            <div
              className='relative mb-1'
              style={{ width: 'fit-content' }}
            >
              <input
                className='text-[#BBBBBB] border border-[#BBBBBB] rounded-3xl font-medium text-sm14 px-4 py-2.5'
                type='text'
                placeholder='Enter Pincode'
              />
              <button className='absolute right-2 bg-[#EEEEEE] border border-[#E9E9E9] rounded-2xl top-2 py-1 px-2 text-[10px] text-primaryBlack font-medium'>
                <img src={vanIcon} alt='' className='inline mr-1' />
                Check
              </button>
            </div>
            <p className='text-sm11 font-normal text-primaryGray mb-2.5'>
              Please enter PIN code to check delivery time and Pay on
              Delivery Availability.
            </p>
            <img src={packingIcon} alt='' />
          </div>
        </div>
        <div className='hrLine'></div>
        {/* Product */}
        <div className='w-full'>
          <div className='mx-[auto]'>
            <Tab.Group>
              <Tab.List className='flex gap-[4px] justify-center h-[28px] '>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'border-[#bbbbbb] bg-[#bbbbbb] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium'
                      : 'border-[#eaeaea] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium'
                  }
                >
                  Home Decor
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'border-[#bbbbbb] bg-[#bbbbbb] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium'
                      : 'border-[#eaeaea] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium'
                  }
                >
                  Life Style
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'border-[#bbbbbb] bg-[#bbbbbb] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium'
                      : 'border-[#eaeaea] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium'
                  }
                >
                  Tech
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'border-[#bbbbbb] bg-[#bbbbbb] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium'
                      : 'border-[#eaeaea] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium'
                  }
                >
                  Apparel
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'border-[#bbbbbb] bg-[#bbbbbb] border rounded-[14px] text-primaryBlack px-[13px] flex items-center text-[12px] font-medium'
                      : 'border-[#eaeaea] border rounded-[14px] text-primaryGray px-[13px] flex items-center text-[12px] font-medium'
                  }
                >
                  Stationary
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel className='pt-[15px]'>
                  <div className='w-[100%] flex justify-center'>
                    <div className='w-w456 flex gap-[10px] border-t border-b border-[#efefef] pt-[5px]'>
                      <div className='flex-col w-[40px]'>
                        <img
                          className='mx-auto'
                          src={artcolor}
                          alt=''
                        />
                        <p className='text-primaryGray text-[11px] text-center'>
                          Art
                        </p>
                      </div>
                      <div className='flex-col w-[40px]'>
                        <img
                          className='mx-auto'
                          src={shirtcolor}
                          alt=''
                        />
                        <p className='text-primaryGray text-[11px] text-center'>
                          T-Shirt
                        </p>
                      </div>
                      <div className='flex-col w-[40px]'>
                        <img
                          className='mx-auto'
                          src={mugcolor}
                          alt=''
                        />
                        <p className='text-primaryGray text-[11px] text-center'>
                          Mugs
                        </p>
                      </div>
                      <div className='flex-col w-[40px]'>
                        <img
                          className='mx-auto'
                          src={glasscolor}
                          alt=''
                        />
                        <p className='text-primaryGray text-[11px] text-center'>
                          Glass
                        </p>
                      </div>
                      <div className='flex-col w-[40px]'>
                        <img
                          className='mx-auto'
                          src={mousecolor}
                          alt=''
                        />
                        <p className='text-primaryGray text-[11px] text-center'>
                          Mouse Pad
                        </p>
                      </div>
                      <div className='flex-col w-[40px]'>
                        <img
                          className='mx-auto'
                          src={coastercolor}
                          alt=''
                        />
                        <p className='text-primaryGray text-[11px] text-center'>
                          Coaster
                        </p>
                      </div>
                      <div className='flex-col w-[40px]'>
                        <img
                          className='mx-auto'
                          src={flowercolor}
                          alt=''
                        />
                        <p className='text-primaryGray text-[11px] text-center'>
                          Flower Pot
                        </p>
                      </div>
                      <div className='flex-col w-[40px]'>
                        <img
                          className='mx-auto'
                          src={giftcolor}
                          alt=''
                        />
                        <p className='text-primaryGray text-[11px] text-center'>
                          Gift Box
                        </p>
                      </div>
                      <div className='flex-col w-[40px]'>
                        <img
                          className='mx-auto'
                          src={bagcolor}
                          alt=''
                        />
                        <p className='text-primaryGray text-[11px] text-center'>
                          Bag
                        </p>
                      </div>
                      <div className='flex-col w-[40px] '>
                        <img
                          className='mx-auto'
                          src={notepadcolor}
                          alt=''
                        />
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
                        <div
                          style={{
                            backgroundImage: `url(${tshirtphoto})`,
                          }}
                          className='relative w-[540px] h-[540px] rounded-[16.01px] bg-[#f5f5f7] flex flex-col justify-center  items-center'
                        >
                          <img
                            src={viewIcon}
                            className='absolute bottom-[15px] right-[15px]'
                            alt=''
                          />
                        </div>
                        <div className='flex justify-between mt-2.5 mb-5'>
                          <div className='flex gap-x-2.5'>
                            <img src={colorCicleImg} alt='' />
                            <img src={blackCircleImg} alt='' />
                            {/* <img src={roomViewImg} alt='' /> */}
                            <img src={threeDImg} alt='' />
                          </div>
                          <div className='flex gap-x-2.5 items-center'>
                            <img src={addIcon} alt='' />
                            <div>
                              <WishlistIcon />
                            </div>
                            {/* <img
                              style={{ fill: 'red' }}
                              src={wishlistIcon}
                              alt=''
                            /> */}
                            <img src={shareIcon} alt='' />
                          </div>
                        </div>

                        <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
                          You have selected
                        </p>
                        <div class='w-full rounded-2xl bg-gradient-to-r from-[#DC4C9A] via-[#9593CD] via-[#84D49C] via-[#CCEC3B] to-[#F7941D] p-[1px]'>
                          <div class='flex flex-col h-[100%] w-[100%] bg-[#ffffff] rounded-2xl p-[12px] text-primaryGray text-[12px]'>
                            <div className='flex gap-[10px] text-[11px]'>
                              <div className='flex-col'>
                                <div className='w-[48px]'>
                                  <img src={DigArtPrint} alt='' />
                                  <p className='text-center'>
                                    Digital Art Print
                                  </p>
                                </div>
                              </div>
                              <div className='flex-col'>
                                <div className='w-[48px]'>
                                  <img src={mensTshirt} alt='' />
                                  <p className='text-center'>
                                    Mens's T-Shirt
                                  </p>
                                </div>
                              </div>
                              <div className='flex-col'>
                                <div className='w-[48px]'>
                                  <img src={darkBlueColor} alt='' />
                                  <p className='text-center'>
                                    Dark Blue Color
                                  </p>
                                </div>
                              </div>
                              <div className='flex-col'>
                                <div className='w-[48px]'>
                                  <img src={mediumSize} alt='' />
                                  <p className='text-center'>
                                    Medium Size
                                  </p>
                                </div>
                              </div>
                              <div className='flex-col'>
                                <div className='w-[48px]'>
                                  <img src={cottonFabric} alt='' />
                                  <p className='text-center'>
                                    Cotton Fabric
                                  </p>
                                </div>
                              </div>
                              <div className='flex-col'>
                                <div className='w-[48px]'>
                                  <img src={MensShirt} alt='' />
                                  <p className='text-center'>
                                    2 Men's Shirt
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className='text-[11px]'>
                              <div className='flex border-b border-[#efefef] mt-[10px]'>
                                <p className='w-[80px] font-medium'>
                                  Style:
                                </p>
                                <p>All Styles</p>
                              </div>
                              <div className='flex border-b border-[#efefef]'>
                                <p className='w-[80px] font-medium'>
                                  Front/Back:
                                </p>
                                <p>Front</p>
                              </div>
                              <div className='flex border-b border-[#efefef]'>
                                <p className='w-[80px] font-medium'>
                                  Colours:
                                </p>
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

                        {/* <div>
                          <p className='text-[15px] text-primaryBlack font-medium'>
                            You have selected
                          </p>
                          <div className='text-primaryGray text-[12px] w-[540px] border rounded-[16px] border-[#d6d6d6] p-[12px]'>
                            
                          </div>
                        </div> */}
                      </div>
                      <div className='w-[50%]'>
                        <p className='text-[25px] text-primaryBlack font-medium leading-[1]'>
                          Printed Artnstock Limited Edition <br /> on
                          the Cotton T-Shirt
                        </p>

                        <div className='flex border-b border-t border-t-[2px] border-[#efefef] text-primaryGray text-[12px] mt-[10px]'>
                          <p className='w-[100px] font-medium'>
                            Product ID:
                          </p>
                          <p>ANSHVB4R44</p>
                        </div>

                        <div className='flex border-b border-b-[2px] border-[#efefef] text-primaryGray text-[12px]'>
                          <p className='w-[100px] font-medium'>
                            Availability:
                          </p>
                          <p>In Stock</p>
                          <div className='h-[20px] flex pl-[5px]'>
                            <img
                              className='my-[auto]'
                              src={tickgreen}
                              alt=''
                            />{' '}
                          </div>
                        </div>

                        <div className='flex flex-col mt-[15px]'>
                          <p className='text-[15px] font-medium mb-[3px]'>
                            Select Style
                          </p>

                          {/* test */}
                          <div className='relative h-[40px]'>
                            <div
                              className={`${
                                isAllStyleOpen === true
                                  ? 'shadow-dropShadow'
                                  : ''
                              } absolute rounded-[20px] w-[272px] max-h-[260px]`}
                            >
                              <button
                                onClick={() => {
                                  setIsAllStyleOpen(!isAllStyleOpen);
                                }}
                                className={`${
                                  isAllStyleOpen === true
                                    ? 'rounded-t-[20px] border-b border-[#EFEFEF]'
                                    : 'border rounded-[20px] border-[#d6d6d6]'
                                } flex items-center justify-between px-[15px] text-primaryGray text-sm14 font-medium cursor-pointer w-[272px] h-[40px] bg-[#FFFFFF]`}
                              >
                                <span>Men's Style</span>
                                <img
                                  className='inline-block'
                                  src={dropdown}
                                  alt=''
                                />
                              </button>

                              {isAllStyleOpen && (
                                <ul className='cursor-pointer rounded-b-2xl bg-[#ffffff] overflow w-[272px] text-center text-[14px] text-primaryGray max-h-[220px] overflow-y-auto'>
                                  {styleDrop.map((obj) => (
                                    <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'>
                                      {obj.a}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className='pt-[14px]'>
                          <p className='text-[15px] font-medium'>
                            Select Colours
                          </p>
                          <div className='flex gap-[8px] pt-[3px]'>
                            {circle.map((item) => (
                              <div
                                key={item.id}
                                className={`w-[32px] h-[32px] rounded-full border border-${item.borderColor} flex justify-center items-center cursor-pointer`}
                                style={{
                                  color: `${item.textColor}`,
                                  backgroundColor: `${item.backgroundColor}`,
                                }}
                                onClick={() => check(item)}
                              >
                                {item.id == checked && (
                                  <i className={`bi bi-check-lg`}></i>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className='flex flex-col pt-[17px]'>
                          <p className='text-[15px] font-medium'>
                            Select Size
                          </p>
                          <div className='flex gap-[10px] p-[3px] text-[15px] font-medium'>
                            <div
                              className={`cursor-pointer w-[48px] h-[48px] border border-[#D6D6D6] rounded-[10px] flex justify-center items-center ${
                                selectedSize === 'XS'
                                  ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                                  : 'border-[#D6D6D6] text-primaryGray'
                              }`}
                              onClick={() => handleSizeClick('XS')}
                            >
                              XS
                            </div>
                            <div
                              className={`cursor-pointer w-[48px] h-[48px] border rounded-[10px] flex justify-center items-center ${
                                selectedSize === 'S'
                                  ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                                  : 'border-[#D6D6D6] text-primaryGray'
                              }`}
                              onClick={() => handleSizeClick('S')}
                            >
                              S
                            </div>
                            <div
                              className={`cursor-pointer w-[48px] h-[48px] border rounded-[10px] flex justify-center items-center ${
                                selectedSize === 'M'
                                  ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                                  : 'border-[#D6D6D6] text-primaryGray'
                              }`}
                              onClick={() => handleSizeClick('M')}
                            >
                              M
                            </div>
                            <div
                              className={`cursor-pointer w-[48px] h-[48px] border rounded-[10px] flex justify-center items-center ${
                                selectedSize === 'L'
                                  ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                                  : 'border-[#D6D6D6] text-primaryGray'
                              }`}
                              onClick={() => handleSizeClick('L')}
                            >
                              L
                            </div>
                            <div
                              className={`cursor-pointer w-[48px] h-[48px] border rounded-[10px] flex justify-center items-center ${
                                selectedSize === 'XL'
                                  ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                                  : 'border-[#D6D6D6] text-primaryGray'
                              }`}
                              onClick={() => handleSizeClick('XL')}
                            >
                              XL
                            </div>
                            <div
                              className={`cursor-pointer w-[48px] h-[48px] border rounded-[10px] flex justify-center items-center ${
                                selectedSize === '2XL'
                                  ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                                  : 'border-[#D6D6D6] text-primaryGray'
                              }`}
                              onClick={() => handleSizeClick('2XL')}
                            >
                              2XL
                            </div>
                          </div>
                          <p className='text-[11px] text-orangeColor'>
                            Size Guide
                          </p>
                        </div>

                        <div className='flex flex-col pt-[15px] gap-[5px]'>
                          <div className='flex gap-[5px]'>
                            <p className='text-[15px] font-medium'>
                              Description
                            </p>
                          </div>
                          <p className='text-[13px] text-primaryGray leading-[1.3]'>
                            180 GSM, 100% Pre-Combed cotton
                            (Bio-Washed and Pre-Shrunk) <br /> Round
                            Neck, Half Sleeved <br /> Machine wash,
                            Wash in cold water
                          </p>
                          {/* table */}
                          <div className='wrapper mt-[67px] w-[520px]'>
                            {/* test */}
                            <div
                              className='flex border-2 border-[#EEEEEE] rounded-3xl overflow-hidden'
                              style={{ width: 'fit-content' }}
                            >
                              <button className='bg-[#EEEEEE] py-3 px-3'>
                                <img src={minusIcon} alt='' />
                              </button>
                              <input
                                className='w-[30px] text-[13px] leading-[15px] font-normal text-primaryGray text-center outline-none'
                                type='text'
                                value={1}
                              />
                              <button className='bg-[#EEEEEE] py-3 px-3'>
                                <img
                                  className='w-[11px] h-[11px]'
                                  src={plusIcon}
                                  alt=''
                                />
                              </button>
                            </div>

                            <div className='flex items-baseline'>
                              <p className='text-orangeColor text-[22px] font-normal leading-[32px]'>
                                $
                              </p>
                              <p className='text-orangeColor text-[38px] font-normal leading-[55px]'>
                                189
                              </p>
                            </div>
                            <p className='text-sm12 font-normal text-primaryGray'>
                              Show Price Details
                            </p>

                            <div className='mt-5 flex gap-x-2.5 mb-1.5'>
                              <button className='outlineBtn'>
                                Add to Cart
                              </button>
                              <button className='blackBtn'>
                                Shop Now
                              </button>
                            </div>

                            <p className='text-primaryGray text-sm11 font-normal'>
                              *GST, Branding, Logistics and Customized
                              Packaging charges additional as
                              applicable. <br />
                              Returns and exchange.{' '}
                              <span className='text-orangeColor'>
                                Know more
                              </span>
                            </p>
                            <div className='flex gap-x-2.5 my-7'>
                              <img src={certificateImg} alt='' />
                              <img src={festiveImg} alt='' />
                            </div>
                            <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
                              Delivery options
                            </p>
                            <div
                              className='relative mb-1'
                              style={{ width: 'fit-content' }}
                            >
                              <input
                                className='w-[310px] text-[#BBBBBB] border border-[#BBBBBB] rounded-3xl font-medium text-sm14 px-4 py-2.5'
                                type='text'
                                placeholder='Enter Pincode'
                              />
                              <button className='absolute right-2 bg-[#EEEEEE] border border-[#E9E9E9] rounded-2xl top-2 py-1 px-2 text-[10px] text-primaryBlack font-medium'>
                                <img
                                  src={vanIcon}
                                  alt=''
                                  className='inline mr-1'
                                />
                                Check
                              </button>
                            </div>
                            <p className='text-sm11 font-normal text-primaryGray mb-2.5'>
                              Please enter PIN code to check delivery
                              time and Pay on Delivery Availability.
                            </p>
                            <img src={packingIcon} alt='' />
                            {/* test */}
                          </div>
                          {/* table */}
                        </div>
                        <div className='pt-[20px]'></div>
                      </div>
                    </div>
                  </div>

                  <div className='w-full pt-[45px] flex flex-col'>
                    <div className='flex justify-center'>
                      <p className='text-primaryGray text-[11px] text-center'>
                        Note: There might be a slight variation in the
                        shade of the <br /> actual product and the
                        image shown on the screen, due to the screen
                        resolution and photography effects.
                      </p>
                    </div>
                    <div className='text-[12px] text-[#333333] gap-[17px] flex justify-center'>
                      <span>FAQs </span>
                      <span>Returns & Refunds</span>
                      <span>Ask a Question</span>
                    </div>

                    <div className='flex flex-col pt-[12px] gap-[7px]'>
                      <p className='text-[15px] font-medium text-[#333333] flex justify-center'>
                        Checkout securely with
                      </p>
                      <div className='flex justify-center'>
                        <img src={cards} alt='' />
                      </div>
                      <div className='flex justify-center mt-[15px]'>
                        <img src={certificate} alt='' />
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
                <Tab.Panel>Content 4</Tab.Panel>
                <Tab.Panel>Content 5</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        <div className='hrLine'></div>
        {/* User Details */}
      </div>

      {/* userDetails */}
      <div className='w-w1409 flex justify-center mx-auto'>
        <div>
          <p className='text-[38px] font-medium text-center text-[#333333]'>
            Designs by Azra
          </p>
          <div className='flex gap-3 text-center mt-4 mb-7'>
            {azraDesign.map((item) => {
              return (
                <>
                  <div>
                    <img src={item.img} alt='' />
                    <p className='text-[15px] text-[#333333]'>
                      {item.title}
                    </p>
                    <p className='text-[12px] text-[#757575]'>
                      {item.description}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <p className=' flex justify-center'>
            <button className='blackBtn'>Discover more</button>
          </p>
        </div>
      </div>

      <div className='hrLine'></div>

      <div className='w-w1409 flex justify-center mx-auto'>
        <div>
          <p className='text-[38px] font-medium text-center text-[#333333]'>
            Other designs you might like
          </p>
          <div className='flex gap-3 text-center mt-4 mb-7'>
            {otherDesign.map((item) => {
              return (
                <>
                  <div>
                    <img src={item.img} alt='' />
                    <p className='text-[15px] text-[#333333]'>
                      {item.title}
                    </p>
                    <p className='text-[12px] text-[#757575]'>
                      {item.description}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <p className=' flex justify-center'>
            <button className='blackBtn'>Discover more</button>
          </p>
        </div>
      </div>

      {/* <div className="hrLine"></div> */}

      <div className='bg-[#F7F7F7] mt-[25px]'>
        <div className='flex justify-center py-[80px] gap-2 w-w1409 flex-wrap mx-auto text-center mt-4 mb-7'>
          {arrImg.map((item) => {
            return (
              <>
                <div className='text-center'>
                  <img
                    src={item.img}
                    className='w-[162px] h-[162px] flex justify-center'
                    alt=''
                  />
                  <p className='text-[15px] text-[#333333]'>
                    {item.title}
                  </p>
                  <p className='text-[12px] text-[#757575]'>
                    {item.description}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className='flex justify-center my-[100px]'>
        <img src={grp} alt='' />
      </div>

      <div className='w-w1168 mx-auto '>
        <p className='text-[38px] font-medium text-[#333333] text-center  mb-[19px]'>
          Customer Reviews
        </p>
        <div className='flex justify-center gap-[30px]'>
          <div>
            <img src={grp144} alt='' />
          </div>
          <div>
            <p className='text-[15px] font-medium'>Customer Images</p>

            <div className='flex flex-wrap'>
              {CustomerImg.map((item) => {
                return (
                  <>
                    <img
                      src={item}
                      className='w-[65px] h-[65px] m-2'
                      alt=''
                    />
                  </>
                );
              })}
            </div>
            <button className='text-[#F88331] text-[12px]'>
              See all customer images
            </button>
          </div>
        </div>
      </div>

      <div className='w-w1168 h-[726px] mt-[95px] rounded-2xl mx-auto shadow-dropShadow'></div>
      <p className='w-w1168 mx-auto flex justify-between text-[#F88331] text-[12px] mt-2 mb-10'>
        <span>Disclosures & Guidlines</span>
        <span>See all 126 reviews</span>
      </p>
      <Footer />
    </>
  );
};

export default ArtDetails;
