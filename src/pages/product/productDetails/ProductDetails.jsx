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
import colorCicleImg from '../../../assets/images/Icons/colorCircleImg.png';
import blackCircleImg from '../../../assets/images/Icons/W Art Print.svg';
import roomViewImg from '../../../assets/images/Icons/Icon - View in a room.svg';
import threeDImg from '../../../assets/images/Icons/Icon - 3D View.svg';
import addIcon from '../../../assets/images/Icons/addIcon.svg';

import wishlistIcon from '../../../assets/images/Icons/wishlistIcon.svg';
import CheckIcon from '@mui/icons-material/Check';
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
import artwithframe from '../../../assets/images/products/artwithframe.png';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

// pratiksha
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
import maskGroup from '../../../assets/images/art-details/maskGroup.png';
import stars from '../../../assets/images/art-details/stars.png';
import Footer from '../../../components/footer/Footer';
import custImg from '../../../assets/images/ComboPack/custImg.png';
import custImg2 from '../../../assets/images/ComboPack/custImg2.png';
import custImg3 from '../../../assets/images/ComboPack/custImg3.png';
import Stars from '../../../assets/images/ComboPack/Stars.png';
import like from '../../../assets/images/ComboPack/like.png';
import Merchandise from '../../../assets/images/products/Merchandise.png';
import WallArt from '../../../assets/images/products/WallArt.png';
import Branding from '../../../assets/images/products/Branding.png';
import Size from '../../../assets/images/lifestyle/Size.png';
import Style from '../../../assets/images/lifestyle/Style.png';
import Cotton from '../../../assets/images/lifestyle/Cotton.png';
import Quantity from '../../../assets/images/lifestyle/Quantity.png';
import Colour from '../../../assets/images/lifestyle/Colour.png';
import DescriptionPic from '../../../assets/images/lifestyle/Description.png';
import Wishlist from '../../../utils/wishlist';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { object } from 'yup';
import { toast } from 'react-toastify';
// import { zIndex } from 'html2canvas/dist/types/css/property-descriptors/z-index';
// import html2canvas from 'html2canvas';

const StyledPopupp = styled(Popup)`
  // use your custom style for ".popup-overlay"
  /* &-overlay {
 ...;
} */
  // use your custom style for ".popup-content"
  &-content {
    background-color: #ffffff;
    color: #333333;
    border-radius: 30px;
    padding: 50px;
    width: 490px;
    height: 585px;
  }
`;

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  /* &-overlay {
    ...;
  } */
  // use your custom style for ".popup-content"
  &-content {
    background-color: #ffffff;
    color: #333333;
    border-radius: 30px;
    padding: 0;
    width: 88.063rem;
    height: 56.188rem;
    overflow: hidden;
    border: none;
  }
`;

const ProductDetails = () => {
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);
  const [isOpenFilterBy, setIsOpenFilterBy] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isAllStyleOpen, setIsAllStyleOpen] = useState(false);

  const [orientationBtn, setOrientationBtn] = useState('horizontal');
  const [includeFrame, setIncludeFrame] = useState(true);
  const [includeTopMat, setIncludeTopMat] = useState(false);
  const [includeBottomMat, setIncludeBottomMat] = useState(false);

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
  const [checked, setChecked] = useState(''); //Store ID temporary

  const styleDrop = [
    { a: 'ddsdd' },
    { a: 'ddsdd' },
    { a: 'ddsdd' },
    { a: 'ddsdd' },
    { a: 'ddsdd' },
    { a: 'ddsdd' },
    { a: 'ddsdd' },
  ];

  const check = (item) => {
    setChecked(item);
    setProductCart((prevItem) => ({
      ...prevItem,
      artProductMaster: {
        ...prevItem.artProductMaster,
        images: {
          image: item.image,
          colorCode: item.colorCode,
          color: item.color,
        },
      },

      // image: item.image,
      // colorCode: item.colorCode,
      // color: item.color,
    }));
    // setShirt(item.backgroundColor);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const custReview = [
    {
      img: `${custImg}`,
      name: 'ksgrafiks',
      type: 'Abstract',
      reviewCount: '5',
      photo: '1',
      months: '4 months',
      desc: 'Very eye pleasing sculpture. Looks best in a bright room as the variation is colored glass. Leaves do not show in dimly lit area. Very eye pleasing sculpture. Looks best in a bright room as the variation is colored glass. Leaves do not show in dimly lit area.',
      like: '24',
      response: 'Thanks Azra - Glad we could help!',
      responseMonth: '7 months',
    },
    {
      img: `${custImg2}`,
      name: 'ksgrafiks',
      type: 'Creative',
      reviewCount: '5',
      photo: '1',
      months: '4 months',
      desc: 'Very eye pleasing sculpture. Looks best in a bright room as the variation is colored glass. Leaves do not show in dimly lit area. Very eye pleasing sculpture. Looks best in a bright room as the variation is colored glass. Leaves do not show in dimly lit area.',
      like: '24',
      response: 'Thanks Azra - Glad we could help!',
      responseMonth: '7 months',
    },
    {
      img: `${custImg3}`,
      name: 'ksgrafiks',
      type: 'Artistic',
      reviewCount: '5',
      photo: '1',
      months: '4 months',
      desc: 'Very eye pleasing sculpture. Looks best in a bright room as the variation is colored glass. Leaves do not show in dimly lit area. Very eye pleasing sculpture. Looks best in a bright room as the variation is colored glass. Leaves do not show in dimly lit area.',
      like: '24',
      response: 'Thanks Azra - Glad we could help!',
      responseMonth: '7 months',
    },
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

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [folderName, setFolderName] = useState(null);
  const [isNameOpen, setIsNameOpen] = useState(false);

  const location = useLocation();
  const userAuth = useSelector((state) => state.auth);

  const data = location.state.data;

  const backgroundImageURL = () => {
    const matchedImage = data?.images?.find(
      (img) => img.color === checked
    );
    return matchedImage ? matchedImage.image : null;
  };

  const userId = useSelector((state) => state.auth.userId);

  // this code is for valdating if artProductId already exists in wishlist
  const [wishlist, setwishlist] = useState();

  useEffect(() => {
    console.log(data);
    getFolders();
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
  // above code is for valdating if artProductId already exists in wishlist

  const [productCart, setProductCart] = useState({
    artProductMaster: {
      artId: data?.artMaster?.artId,
      artProductId: data?.artProductId,
      artProductName: data?.artProductName,
      artProductUniqueNo: data?.artProductUniqueNo,
      canvasSize: data?.canvasSize,
      canvasX: data?.canvasX,
      canvasY: data?.canvasY,
      images: {
        color: '',
        colorCode: '',
        image: '',
      },
      productId: '',
      // qty: 0,
      sizeAndPrices: {
        basePrice: 0,
        sellPrice: 0,
        size: '',
        sizeName: '',
      },
      // status: '',
    },

    description: '',
    productName: '',
    quantity: 1,
    size: '',
    style: '',
    userId: '',
  });

  useEffect(() => {
    console.log(data);
  }, []);

  useEffect(() => {
    let abc = data?.productMaster?.sizeAndPrices[0]?.sellPrice;

    setProductCart((prevItem) => ({
      ...prevItem,
      artProductMaster: {
        ...prevItem.artProductMaster,
        images: {
          image: data?.images[0]?.image,
          color: data?.images[0]?.color,
        },
        productId: data?.productMaster.productId,
        sizeAndPrices: {
          size: data?.productMaster.sizeAndPrices[0].size,
          sizeName: data?.productMaster.sizeAndPrices[0].sizeName,
          sellPrice: abc,
        },
      },
      description: data?.artMaster?.description,
      productName: data?.productMaster?.productName,
      size: data?.productMaster.sizeAndPrices[0].size,
      userId: userId,
    }));
    console.log(productCart);

    setChecked(data?.images[0]);

    getAllWishlistByUserId();
  }, []);

  const setSizeAndAccordingPrice = (obj) => {
    // console.log(obj);
    setProductCart((prev) => ({
      ...prev,
      artProductMaster: {
        ...prev.artProductMaster,
        sizeAndPrices: {
          size: obj.size,
          sizeName: obj.sizeName,
          sellPrice: obj.sellPrice,
        },
      },
    }));
  };

  const increaseQuantity = () => {
    // console.log('Before update:', productCart.quantity);

    setProductCart((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));

    // console.log('After update:', productCart.quantity);
  };

  const decreaseQuantity = () => {
    if (productCart.quantity > 1) {
      setProductCart((prev) => ({
        ...prev,
        quantity: prev.quantity - 1,
      }));
    }
  };

  // useEffect(() => {
  //   setProductCart((prev) => ({
  //     ...prev,
  //     artProductMaster: {
  //       sizeAndPrices: {
  //         sellPrice: abc,
  //       },
  //     },
  //   }));
  // }, []);

  useEffect(() => {
    console.log(productCart);
  }, [productCart]);

  const [categories, setCategories] = useState({
    all: [],
    // art: [],
    // photo: [],
    // footage: [],
    // music: [],
    // templates: [],
    product: [],
  });

  const getFolders = async () => {
    try {
      const response = await httpClient.get(
        `/collection_master/getUserIdWiseCollectionMasterList/${userId}`
      );

      const data = response.data;

      // console.log(data);

      setCategories((prevCategories) => ({
        ...prevCategories,
        all: [],
        // art: [],
        // photo: [],
        // footage: [],
        // music: [],
        // templates: [],
        product: [],
      }));

      data.forEach((obj) => {
        if (obj.category === 'product') {
          setCategories((prevCategories) => ({
            ...prevCategories,
            product: [...prevCategories.product, obj],
          }));
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  // productArt wishlist function

  //  const addToWishlist = (artProductId) => {
  //   console.log('here', artProductId);
  //   // const findId = wishlist.find(
  //   //   (obj) => obj.artProductMaster.artProductId === artProductId
  //   // );

  //   let findId;
  //   wishlist.forEach((wishlist) => {
  //     if (wishlist.artMaster === null) {
  //       if (
  //         wishlist.artProductMaster?.artProductId === artProductId
  //       ) {
  //         findId = undefined;
  //       }
  //     }
  //   });

  //   if (!findId) {
  //     const object = {
  //       artProductId: artProductId,
  //       id: userId,
  //     };
  //     httpClient.post(`/wishlist_master/save`, object).then((res) => {
  //       // console.log(res);
  //       getAllWishlistByUserId();
  //     });
  //   }
  // };

  // const wishlistDelete = async (id) => {
  //   wishlist?.forEach(async (obj) => {
  //     if (obj.artProductMaster?.artProductId === id) {
  //       try {
  //         const res = await httpClient.delete(
  //           `/wishlist_master/delete/${obj.wishListId}`
  //         );
  //         getAllWishlistByUserId();
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   });
  // };

  const [openBig, setOpenBig] = useState(false);
  const [popupLogin, setpopupLogin] = useState(false);

  const navigate = useNavigate();

  const addToFolder = () => {
    const object = {
      artProductId: data?.artProductId,
      collectionId: folderName.collectionId,
    };
    httpClient
      .post('/collection_master/CollectionIdWiseAddArt', object)
      .then((res) => {
        console.log(res.data);

        // getUserIdWiseArts();
        getFolders();
      });
  };

  const handleClickOutside = () => {
    // Code to handle click outside
    setIsAllStyleOpen(false);
  };

  const styleClickOutside = useDetectClickOutside({
    onTriggered: handleClickOutside,
  });

  const addToCart = async () => {
    try {
      const res = await httpClient.post('/cart_master', productCart);
      toast.success('Successfully Addes to Cart');
      console.log(res.data);
    } catch (error) {
      toast.error('Error');
      console.error(error);
    }
  };

  // useEffect(() => {
  //   console.log(productCart);
  // }, [productCart]);

  return (
    <>
      <div className='w-[100%] flex justify-center'></div>
      <div className='w-full flex justify-center pt-[30px]'>
        <div
          className='w-w1170 flex p-[30px] rounded-[30px] gap-[30px]'
          // style={{
          //   boxShadow: '#f0f0f0 0px 0px 4.3px 4px',
          // }}
        >
          <div className='w-[50%]'>
            <div
              style={{
                backgroundImage: `url(${productCart?.artProductMaster?.images?.image})`,
              }}
              //earlier4
              // style={{
              //   backgroundImage: `url(${tshirtphoto})`,
              // }}
              className='relative w-[540px] h-[540px] rounded-[16.01px] bg-[#f5f5f7] flex flex-col justify-center bg-contain bg-no-repeat items-center'
            >
              <img
                onClick={() => setOpenBig(true)}
                src={viewIcon}
                className='absolute bottom-[15px] right-[15px]'
                alt=''
              />

              <StyledPopup
                open={openBig}
                closeOnDocumentClick={true}
                position={'top center'}
                onClose={() => setOpenBig(false)}
              >
                <img
                  src={
                    data?.artMaster?.imageMaster.imageOrientation
                      .horizontalUrl
                  }
                  className='w-[100%]'
                  alt=''
                />
              </StyledPopup>
            </div>
            <div className='flex justify-between mt-2.5 mb-5'>
              <div className='flex gap-x-2.5'>
                <img src={colorCicleImg} alt='' />
                <img src={blackCircleImg} alt='' />
                {/* <img src={roomViewImg} alt='' /> */}
                <img src={threeDImg} alt='' />
              </div>
              <div className='flex items-center gap-x-2.5'>
                {popupLogin && (
                  <div
                    className={`z-999 right-[117px] bottom-[15px] bg-[#fff] rounded-[16px] w-[266px] absolute bottom-[38px] left-[-127px]`}
                    style={{
                      boxShadow: '0px 0px 18px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <div className='flex gap-[5px] flex-col p-[14px] leading-[1.3] text-center'>
                      <p className='font-medium text-primaryBlack text-[15px]'>
                        Create Account
                      </p>
                      <p className='text-primaryGray text-[11px]'>
                        To create and add to a collection, you must be
                        a logged-in member
                      </p>
                      <button
                        onClick={(e) => {
                          navigate('/join');
                          e.stopPropagation();
                        }}
                        className='bg-[#8e8e8e] rounded-[14px] h-[28px] w-[108px] text-[12px] font-medium text-[white] mx-[auto]'
                      >
                        Create Account
                      </button>
                      <p
                        onClick={(e) => {
                          navigate('/login');
                          e.stopPropagation();
                        }}
                        className='text-orangeColor text-[11px]'
                      >
                        Already a member? Sign in
                      </p>
                      <p className='text-pinkColor text-[11px]'>
                        Note: Downloaded images will be saved in
                        ‘Collections’ folder
                      </p>
                    </div>
                    <div className='absolute left-[47%] bottom-[-10px] w-[20px] h-[20px] bg-[white] rounded-br-[5px] transform rotate-45 shadow-inner'></div>
                  </div>
                )}

                {/* test */}
                {userAuth.login === true ? (
                  <StyledPopupp
                    trigger={
                      <img
                        className='cursor-pointer'
                        src={addIcon}
                        alt=''
                      />
                    }
                    modal
                  >
                    {(close) => (
                      <div className='flex flex-col gap-[21px]'>
                        {/* {selectedAllFilesImages.length > 0 ? ( */}
                        <div
                          style={{
                            backgroundImage: `url(${productCart.image})`,
                          }}
                          className='w-[390px] h-[270px] bg-no-repeat bg-center bg-cover rounded-[16px]'
                        ></div>

                        <div>
                          <div className='flex flex-col'>
                            <p className='text-[15px] font-medium mb-[3px]'>
                              Select Category
                            </p>
                            <div>
                              <button
                                onClick={() => {
                                  setIsCategoryOpen(!isCategoryOpen);
                                }}
                                className={`${
                                  isCategoryOpen === true
                                    ? 'rounded-t-[20px] shadow-dropShadowButton border-b border-[#efefef]'
                                    : 'rounded-[20px] border  border-[#d6d6d6]'
                                } cursor-pointer w-[390px] h-[40px] bg-[#FFFFFF] text-primaryGray text-sm14 font-medium flex items-center justify-between px-[15px]`}
                              >
                                {category === '' ? (
                                  <span>Select Category</span>
                                ) : (
                                  <span>{category}</span>
                                )}

                                <img
                                  className='inline-block'
                                  src={dropdown}
                                  alt=''
                                />
                              </button>

                              {isCategoryOpen && (
                                <ul className='shadow-dropShadow rounded-b-2xl z-50 cursor-pointer hover:overflow-hidden dropdown__menu absolute bg-[#ffffff] w-[390px] text-center text-[14px] text-primaryGray'>
                                  <li
                                    onClick={() => {
                                      setCategory('Art');
                                      setIsCategoryOpen(
                                        !isCategoryOpen
                                      );
                                      setFolderName(null);
                                    }}
                                    className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                                  >
                                    Art
                                  </li>
                                  <li
                                    onClick={() => {
                                      setCategory('Photos');
                                      setIsCategoryOpen(
                                        !isCategoryOpen
                                      );
                                      setFolderName(null);
                                    }}
                                    className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                                  >
                                    Photos
                                  </li>
                                  <li
                                    onClick={() => {
                                      setCategory('Footage');
                                      setIsCategoryOpen(
                                        !isCategoryOpen
                                      );
                                      setFolderName(null);
                                    }}
                                    className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                                  >
                                    Footage
                                  </li>
                                  <li
                                    onClick={() => {
                                      setCategory('Music');
                                      setIsCategoryOpen(
                                        !isCategoryOpen
                                      );
                                      setFolderName(null);
                                    }}
                                    className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                                  >
                                    Music
                                  </li>
                                  <li
                                    onClick={() => {
                                      setCategory('Templates');
                                      setIsCategoryOpen(
                                        !isCategoryOpen
                                      );
                                      setFolderName(null);
                                    }}
                                    className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                                  >
                                    Templates
                                  </li>
                                  <li
                                    onClick={() => {
                                      setCategory('Product');
                                      setIsCategoryOpen(
                                        !isCategoryOpen
                                      );
                                      setFolderName(null);
                                    }}
                                    className='py-1 px-3.5 hover:bg-[#F0F0F0]'
                                  >
                                    Product
                                  </li>
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='flex flex-col'>
                            <p className='text-[15px] font-medium mb-[3px]'>
                              Set Name
                            </p>
                            <div>
                              <button
                                onClick={() => {
                                  setIsNameOpen(!isNameOpen);
                                }}
                                // className={`flex items-center justify-between px-[15px] text-primaryGray text-sm14 font-medium cursor-pointer w-[390px] h-[40px] bg-[#FFFFFF] rounded-[20px] border border-[#d6d6d6]`}
                                className={`${
                                  isNameOpen === true
                                    ? 'rounded-t-[20px] shadow-dropShadowButton border-b border-[#efefef]'
                                    : 'rounded-[20px] border  border-[#d6d6d6]'
                                } cursor-pointer w-[390px] h-[40px] bg-[#FFFFFF] text-primaryGray text-sm14 font-medium flex items-center justify-between px-[15px]`}
                              >
                                {folderName === null ? (
                                  <span>Enter Set Name</span>
                                ) : (
                                  <span>{folderName.title}</span>
                                )}
                                {}

                                <img
                                  className='inline-block'
                                  src={dropdown}
                                  alt=''
                                />
                              </button>

                              {category === 'Product' ? (
                                <div>
                                  {isNameOpen && (
                                    <ul className='cursor-pointer shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute bg-[#ffffff] w-[390px] text-center text-[14px] text-primaryGray'>
                                      {categories.product.map(
                                        (items, index) => (
                                          <li
                                            onClick={() => {
                                              setFolderName(items);
                                              setIsNameOpen(
                                                !isNameOpen
                                              );
                                            }}
                                            className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                                          >
                                            {items.title}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className='flex gap-[10px] justify-center pb-[30px]'>
                          <button
                            onClick={() => {
                              addToFolder();
                              close();
                            }}
                            className='blackBtn h-[40px] w-[88px]'
                          >
                            Save
                          </button>
                          <button
                            onClick={close}
                            className='h-[40px] px-6 py-2 rounded-3xl text-sm14 text-primaryBlack border-[2px] w-[88px]'
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </StyledPopupp>
                ) : (
                  <img
                    className='cursor-pointer'
                    onClick={() => {
                      setpopupLogin(!popupLogin);
                    }}
                    src={addIcon}
                    alt=''
                  />
                )}
                {/* test */}

                <Wishlist
                  id={data?.artProductId}
                  prodType='product'
                />
                {/* <div>
                  {wishlist?.find(
                    (obj) =>
                      obj.artProductMaster?.artProductId ===
                      data?.artProductId
                  ) === undefined ? (
                    <WishlistIcon
                      onClick={() => {
                        addToWishlist(data?.artProductId);
                      }}
                      style={{ fill: '#888888', width: '100%' }}
                    />
                  ) : (
                    <WishlistIcon
                      onClick={() => {
                        wishlistDelete(data?.artProductId);
                      }}
                      style={{
                        fill: 'red',
                        width: '100%',
                      }}
                    />
                  )}
                </div> */}
                <img src={shareIcon} alt='' />
              </div>
            </div>

            <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
              You have selected
            </p>
            <div className='w-full rounded-2xl bg-gradient-to-r from-[#DC4C9A] via-[#9593CD] via-[#84D49C] via-[#CCEC3B] to-[#F7941D] p-[1px]'>
              <div className='flex flex-col h-[100%] w-[100%] bg-[#ffffff] rounded-2xl p-[12px] text-primaryGray text-[12px]'>
                <div className='flex gap-[10px] text-[11px]'>
                  <div className='flex-col'>
                    <div className='w-[48px]'>
                      <img src={DigArtPrint} alt='' />
                      <p className='text-center'>Digital Art Print</p>
                    </div>
                  </div>
                  <div className='flex-col'>
                    <div className='w-[48px]'>
                      <img src={Style} alt='' />
                      <p className='text-center'>Mens's T-Shirt</p>
                    </div>
                  </div>
                  <div className='flex-col'>
                    <div className='w-[48px]'>
                      <div className='w-[48px] h-[48px] rounded-[10px] border-[1px] border-[#d6d6d6] flex justify-center items-center'>
                        <div
                          style={{
                            backgroundColor: `${checked.colorCode}`,
                          }}
                          className='w-[32px] h-[32px] rounded-[50%]'
                        ></div>
                      </div>
                      <p className='text-center'>
                        {productCart?.artProductMaster?.images?.color?.replace(
                          /\b\w/g,
                          (char) => char.toUpperCase()
                        )}{' '}
                        Color
                      </p>
                    </div>
                  </div>
                  <div className='flex-col'>
                    <div className='w-[48px]'>
                      <div className='w-[48px] h-[48px] rounded-[10px] border-[1px] border-[#d6d6d6] flex justify-center items-center'>
                        <p className='text-[15px] font-medium text-primaryGray'>
                          {
                            productCart?.artProductMaster
                              ?.sizeAndPrices?.size
                          }
                        </p>
                      </div>
                      <p className='text-center'>
                        {
                          productCart?.artProductMaster?.sizeAndPrices
                            ?.sizeName
                        }
                      </p>
                    </div>
                  </div>
                  <div className='flex-col'>
                    <div className='w-[48px]'>
                      <img src={Cotton} alt='' />
                      <p className='text-center'>Cotton Fabric</p>
                    </div>
                  </div>
                  <div className='flex-col'>
                    <div className='w-[48px]'>
                      <img src={Quantity} alt='' />
                      <p className='text-center'>2 Men's Shirt</p>
                    </div>
                  </div>
                </div>

                <div className='text-[11px]'>
                  <div className='flex border-b border-[#efefef] mt-[10px]'>
                    <p className='w-[80px] font-medium'>Style:</p>
                    <p>{productCart.style}</p>
                  </div>
                  <div className='flex border-b border-[#efefef]'>
                    <p className='w-[80px] font-medium'>
                      Front/Back:
                    </p>
                    <p>Front</p>
                  </div>
                  <div className='flex border-b border-[#efefef]'>
                    <p className='w-[80px] font-medium'>Colours:</p>
                    <p>
                      {productCart.artProductMaster?.images?.color}
                    </p>
                  </div>
                  <div className='flex '>
                    <p className='w-[80px] font-medium'>PrintSize:</p>
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
              {/* Printed Artnstock Limited Edition <br /> on the Cotton
              T-Shirt */}
              {data?.productMaster.productName}
            </p>

            <div className='flex border-b border-t border-t-[2px] border-[#efefef] text-primaryGray text-[12px] mt-[10px]'>
              <p className='w-[100px] font-medium'>Product ID:</p>
              <p>{data?.artProductUniqueNo}</p>
              {/* <p>ANSHVB4R44</p> */}
            </div>

            <div className='flex border-b border-b-[2px] border-[#efefef] text-primaryGray text-[12px]'>
              <p className='w-[100px] font-medium'>Availability:</p>
              <p>In Stock</p>
              <div className='h-[20px] flex pl-[5px]'>
                <img className='my-[auto]' src={tickgreen} alt='' />{' '}
              </div>
            </div>

            <div className='flex flex-col mt-[15px]'>
              <p className='text-[15px] font-medium mb-[3px]'>
                Select Style
              </p>

              {/* test */}
              <div className='relative h-[40px]'>
                <div
                  ref={styleClickOutside}
                  className={`${
                    isAllStyleOpen === true ? 'shadow-dropShadow' : ''
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
                    {productCart?.style !== '' ? (
                      <span>{productCart.style}</span>
                    ) : (
                      <span>Select Style</span>
                    )}

                    <img
                      className='inline-block'
                      src={dropdown}
                      alt=''
                    />
                  </button>

                  {isAllStyleOpen && (
                    <ul className='cursor-pointer rounded-b-2xl bg-[#ffffff] overflow w-[272px] text-center text-[14px] text-primaryGray max-h-[220px] overflow-y-auto'>
                      <li></li>
                      {data?.productMaster.style.map((obj) => (
                        <li
                          onClick={() => {
                            setProductCart((prev) => ({
                              ...prev,
                              style: obj,
                            }));

                            setIsAllStyleOpen(false);
                          }}
                          className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                        >
                          {obj}
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
                {data?.images?.map((item, index) => (
                  <div
                    key={index}
                    className={`w-[32px] h-[32px] rounded-full border flex justify-center items-center cursor-pointer`}
                    style={{
                      color: `${
                        item.colorCode === '#ffffff'
                          ? '#000000'
                          : '#ffffff'
                      }`,
                      backgroundColor: `${item.colorCode}`,
                      borderColor: `${
                        item.colorCode === '#ffffff' ? '#000000' : ''
                      }`,
                    }}
                    onClick={() => check(item)}
                  >
                    {item.colorCode == checked.colorCode && (
                      <CheckIcon />
                    )}
                  </div>
                ))}
                {/* {circle.map((item) => (
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
                ))} */}
              </div>
            </div>

            <div className='flex flex-col pt-[17px]'>
              <p className='text-[15px] font-medium'>Select Size</p>
              <div className='flex gap-[10px] p-[3px] text-[15px] font-medium'>
                {data?.productMaster.sizeAndPrices?.map((obj) => (
                  <div
                    // style={{
                    //   backgroundColor: `${
                    //     productCart.size === obj.size ? '#bbbbbb' : ''
                    //   }`,
                    //   borderColor: `${
                    //     productCart.size === obj.size
                    //       ? '#bbbbbb'
                    //       : '#D6D6D6'
                    //   }`,
                    // }}
                    className={`cursor-pointer w-[48px] h-[48px] border border-[#D6D6D6] rounded-[10px] flex justify-center items-center ${
                      productCart?.artProductMaster?.sizeAndPrices
                        ?.size === obj.size
                        ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                        : 'border-[#D6D6D6] text-primaryGray'
                    }`}
                    onClick={() => setSizeAndAccordingPrice(obj)}
                  >
                    {obj.size}
                  </div>
                ))}
                {/* <div
                  className={`cursor-pointer w-[48px] h-[48px] border rounded-[10px] flex justify-center items-center ${
                    productCart.size === 'S'
                      ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                      : 'border-[#D6D6D6] text-primaryGray'
                  }`}
                  onClick={() =>
                    setProductCart((prev) => ({
                      ...prev,
                      size: 'S',
                    }))
                  }
                >
                  S
                </div>
                <div
                  className={`cursor-pointer w-[48px] h-[48px] border rounded-[10px] flex justify-center items-center ${
                    productCart.size === 'M'
                      ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                      : 'border-[#D6D6D6] text-primaryGray'
                  }`}
                  onClick={() =>
                    setProductCart((prev) => ({
                      ...prev,
                      size: 'M',
                    }))
                  }
                >
                  M
                </div>
                <div
                  className={`cursor-pointer w-[48px] h-[48px] border rounded-[10px] flex justify-center items-center ${
                    productCart.size === 'L'
                      ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                      : 'border-[#D6D6D6] text-primaryGray'
                  }`}
                  onClick={() =>
                    setProductCart((prev) => ({
                      ...prev,
                      size: 'L',
                    }))
                  }
                >
                  L
                </div>
                <div
                  className={`cursor-pointer w-[48px] h-[48px] border rounded-[10px] flex justify-center items-center ${
                    productCart.size === 'XL'
                      ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                      : 'border-[#D6D6D6] text-primaryGray'
                  }`}
                  onClick={() =>
                    setProductCart((prev) => ({
                      ...prev,
                      size: 'XL',
                    }))
                  }
                >
                  XL
                </div>
                <div
                  className={`cursor-pointer w-[48px] h-[48px] border rounded-[10px] flex justify-center items-center ${
                    productCart.size === '2XL'
                      ? 'bg-[#bbbbbb] border-[#bbbbbb]'
                      : 'border-[#D6D6D6] text-primaryGray'
                  }`}
                  onClick={() =>
                    setProductCart((prev) => ({
                      ...prev,
                      size: '2XL',
                    }))
                  }
                >
                  2XL
                </div> */}
              </div>
              <p className='text-[11px] text-orangeColor'>
                Size Guide
              </p>
            </div>

            <div className='flex flex-col pt-[15px] gap-[5px]'>
              <div className='flex gap-[5px]'>
                <p className='text-[15px] font-medium'>Description</p>
              </div>
              <p className='text-[13px] text-primaryGray leading-[1.3]'>
                {/* 180 GSM, 100% Pre-Combed cotton (Bio-Washed and
                Pre-Shrunk) <br /> Round Neck, Half Sleeved <br />{' '}
                Machine wash, Wash in cold water */}
                {data?.productMaster.description}
              </p>
              <img
                src={DescriptionPic}
                className='mt-4 w-[286px] h-[35px]'
                alt=''
              />
              {/* table */}
              <div className='wrapper mt-[36px] w-[520px]'>
                {/* test */}
                <div
                  className='flex border-2 border-[#EEEEEE] rounded-3xl overflow-hidden'
                  style={{ width: 'fit-content' }}
                >
                  <button
                    onClick={decreaseQuantity}
                    className='bg-[#EEEEEE] py-3 px-3'
                  >
                    <img src={minusIcon} alt='' />
                  </button>
                  <input
                    className='w-[30px] text-[13px] leading-[15px] font-normal text-primaryGray text-center outline-none'
                    type='text'
                    value={productCart.quantity}
                  />
                  <button
                    onClick={increaseQuantity}
                    className='bg-[#EEEEEE] py-3 px-3'
                  >
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
                    {(
                      productCart?.artProductMaster?.sizeAndPrices
                        ?.sellPrice * productCart.quantity
                    ).toFixed(2)}
                  </p>
                </div>
                <p className='text-sm12 font-normal text-primaryGray'>
                  Show Price Details
                </p>

                <div className='mt-5 flex gap-x-2.5 mb-1.5'>
                  <button onClick={addToCart} className='outlineBtn'>
                    Add to Cart
                  </button>
                  <button className='blackBtn'>Shop Now</button>
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
                  Please enter PIN code to check delivery time and Pay
                  on Delivery Availability.
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
      <div className='hrLine'></div>
      {/* Product */}
      <div className='w-full'>
        <div>
          <p className='text-[#dddddd] text-[64px] text-center font-medium leading-[1.2]'>
            Merchandise
          </p>
          <div className='flex justify-center mt-[30px] mb-5 gap-2'>
            <img src={Merchandise} alt='' />
            <img src={WallArt} alt='' />
            <img src={Branding} alt='' />
          </div>
        </div>
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
                          backgroundImage: `url(${artwithframe})`,
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
                        <div className='flex gap-x-2.5'>
                          <img src={addIcon} alt='' />
                          <img src={wishlistIcon} alt='' />
                          <img src={shareIcon} alt='' />
                        </div>
                      </div>

                      <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
                        You have selected
                      </p>
                      <div className='w-full rounded-2xl bg-gradient-to-r from-[#DC4C9A] via-[#9593CD] via-[#84D49C] via-[#CCEC3B] to-[#F7941D] p-[1px]'>
                        <div className='flex flex-col h-[100%] w-[100%] bg-[#ffffff] rounded-2xl p-[12px] text-primaryGray text-[12px]'>
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
                            <div className='flex border-b border-[#efefef] border-t mt-[10px]'>
                              <p className='w-[115px] font-medium'>
                                Image Size:
                              </p>
                              <p>20cm x 12cm</p>
                            </div>
                            <div className='flex border-b border-[#efefef]'>
                              <p className='w-[115px] font-medium'>
                                Top Mat Width:
                              </p>
                              <p>5cm</p>
                            </div>
                            <div className='flex border-b border-[#efefef]'>
                              <p className='w-[115px] font-medium'>
                                Bottom Mat Width:
                              </p>
                              <p>3cm</p>
                            </div>
                            <div className='flex border-b border-[#efefef]'>
                              <p className='w-[115px] font-medium'>
                                Frame Size:
                              </p>
                              <p>36cm x 28px</p>
                            </div>
                            <div className='flex border-b border-[#efefef]'>
                              <p className='w-[115px] font-medium'>
                                Frame Width:
                              </p>
                              <p>4cm</p>
                            </div>
                            <div className='flex border-b border-[#efefef]'>
                              <p className='w-[115px] font-medium'>
                                Finish Size:
                              </p>
                              <p>36cm x 28px</p>
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
                        Printable Wall Art Home Decor <br /> Artnstock
                        Limited Edition
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
                      <img
                        className='mt-[10px]'
                        src={conHead}
                        alt=''
                      />
                      {/* Tabs */}
                      <Tab.Group>
                        <Tab.List
                          className='border border-[#E9E9E9]  rounded-3xl overflow-hidden mt-[30px]'
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
                                  onClick={() =>
                                    setOrientationBtn('verticle')
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
                                  onClick={() =>
                                    setOrientationBtn('square')
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
                                <input
                                  className=' mr-1'
                                  type='checkbox'
                                />
                                <p className='text-[13px] text-primaryGray '>
                                  25cm x 20cm
                                </p>
                              </div>
                              <div className='flex items-center'>
                                <input
                                  className=' mr-1'
                                  type='checkbox'
                                />
                                <p className='text-[13px] text-primaryGray '>
                                  36cm x 28cm
                                </p>
                              </div>
                            </div>
                            <p className='text-sm11 text-primaryGray font-medium'>
                              The artwork will be cropped to fit the
                              selected size. <br />
                              The sizes above are standard print sizes
                              for horizontal images.
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
                                  onClick={() =>
                                    setIncludeFrame(true)
                                  }
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
                                  onClick={() =>
                                    setIncludeFrame(false)
                                  }
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
                                    fillRule='evenodd'
                                    clipRule='evenodd'
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
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M44 0H32V3H37.5H43C44.1046 3 45 3.89542 45 5V16H48V4C48 1.79086 46.2091 0 44 0Z'
                                    fill='#FFAC14'
                                  />
                                  <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M44 48H32V45H37.5H43C44.1046 45 45 44.1046 45 43V32H48V44C48 46.2091 46.2091 48 44 48Z'
                                    fill='#BB0271'
                                  />
                                  <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
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
                                      onClick={() =>
                                        setIncludeTopMat(true)
                                      }
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
                                      onClick={() =>
                                        setIncludeTopMat(false)
                                      }
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
                                        fillRule='evenodd'
                                        clipRule='evenodd'
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
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M44 0H32V3H37.5H43C44.1046 3 45 3.89542 45 5V16H48V4C48 1.79086 46.2091 0 44 0Z'
                                        fill='#FFAC14'
                                      />
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M44 48H32V45H37.5H43C44.1046 45 45 44.1046 45 43V32H48V44C48 46.2091 46.2091 48 44 48Z'
                                        fill='#BB0271'
                                      />
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
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
                                      onClick={() =>
                                        setIncludeBottomMat(true)
                                      }
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
                                      onClick={() =>
                                        setIncludeBottomMat(false)
                                      }
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
                                        fillRule='evenodd'
                                        clipRule='evenodd'
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
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M44 0H32V3H37.5H43C44.1046 3 45 3.89542 45 5V16H48V4C48 1.79086 46.2091 0 44 0Z'
                                        fill='#FFAC14'
                                      />
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M44 48H32V45H37.5H43C44.1046 45 45 44.1046 45 43V32H48V44C48 46.2091 46.2091 48 44 48Z'
                                        fill='#BB0271'
                                      />
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
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
                                <input
                                  className=' mr-1'
                                  type='checkbox'
                                />
                                <p className='text-[13px] text-primaryGray '>
                                  Cavas
                                </p>
                              </div>
                              <div className='flex items-center'>
                                <input
                                  className=' mr-1'
                                  type='checkbox'
                                />
                                <p className='text-[13px] text-primaryGray '>
                                  Picture Rag
                                </p>
                              </div>
                              <div className='flex items-center'>
                                <input
                                  className=' mr-1'
                                  type='checkbox'
                                />
                                <p className='text-[13px] text-primaryGray '>
                                  Glossy Photo Paper
                                </p>
                              </div>
                              <div className='flex items-center'>
                                <input
                                  className=' mr-1'
                                  type='checkbox'
                                />
                                <p className='text-[13px] text-primaryGray '>
                                  Somerset Velvet
                                </p>
                              </div>
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>

                      {/* <img src={Description} alt="" /> */}
                      {/* table */}
                      <div className='wrapper w-[520px]'>
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
                          Packaging charges additional as applicable.{' '}
                          <br />
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
                          Please enter PIN code to check delivery time
                          and Pay on Delivery Availability.
                        </p>
                        <img src={packingIcon} alt='' />
                        {/* test */}
                      </div>
                      {/* table */}
                    </div>
                    <div className='pt-[20px]'></div>
                  </div>
                </div>
                {/* </div>
</div> */}
                <div className='w-full pt-[45px] flex flex-col'>
                  <div className='flex justify-center'>
                    <p className='text-primaryGray text-[11px] text-center'>
                      Note: There might be a slight variation in the
                      shade of the <br /> actual product and the image
                      shown on the screen, due to the screen
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
      {/* userDetails */}
      {/* userprofile */}
      <div className='hrLine'></div>
      <div className='flex justify-center gap-7'>
        <div>
          <p className='text-[25px] font-medium mb-5 text-[#333333]'>
            Art Description
          </p>
          <p className='text-[14px] leading-[20px] text-[#757575]'>
            By attempting to depict items as they actually look in
            real life, art can imitate nature. But <br /> abstract
            artwork can also draw inspiration from real-world natural
            shapes, as seen in the <br /> image below. This work was
            inspired by the study, observation, and meditation on
            natural <br /> events and forms. This art poster features
            clear, colourful pictures with excellent colour <br />{' '}
            fidelity. This excellent reproduction, a part of the
            adaptable family of art prints, embodies <br /> the best
            of both worlds in terms of both quality and price.
          </p>
          <img src={maskGroup} className='my-6' alt='' />
          {/* <p className="border-y-2 border-[#D6D6D6]"> */}
          <div className='text-[#7E7E7E] border-t-2 flex gap-4 border-[#EFEFEF] '>
            <span className='text-[11px] font-medium'>Category:</span>
            <span className='text-[11px]'>Abstract Art</span>
          </div>
          <div className=' border-y-2 flex gap-7 text-[#7E7E7E] border-[#EFEFEF]'>
            <span className='text-[11px] font-medium'>Subject:</span>
            <span className='text-[11px]'>
              Abstract Expressionism, Abstract, Modern, Impressionism
            </span>
          </div>
          <div className=' flex gap-5 border-b-2 text-[#7E7E7E] border-[#EFEFEF]'>
            <span className='text-[11px] font-medium'>Medium:</span>
            <span className='text-[11px]'>Digital</span>
          </div>
          {/* </p> */}
          <p className='text-[15px] font-medium mt-5'>
            Colour Palatte
          </p>
          <div className='w-[150px] h-[40px] flex'>
            <div className='bg-[#27D3C9] w-[15px] rounded-l-lg'></div>
            <div className='bg-[#E4D045] w-[15px]'></div>
            <div className='bg-[#67E0D3] w-[15px]'></div>
            <div className='bg-[#BDF0EB] w-[15px]'></div>
            <div className='bg-[#C6CC8E] w-[15px]'></div>
            <div className='bg-[#F87797] w-[15px] '></div>
            <div className='bg-[#076F69] w-[15px]'></div>
            <div className='bg-[#8CE7E1] w-[15px]'></div>
            <div className='bg-[#E7C7CD] w-[15px]'></div>
            <div className='bg-[#D1B4C1] w-[15px] rounded-r-lg'></div>
          </div>
        </div>
        <div>
          <p className='text-[11px] text-[#757575]'>Artist Info</p>
          <div className='flex gap-2'>
            <img src={profile} alt='' />
            <div className='flex items-center'>
              <div>
                <img src={pro} alt='' />
                <p className='text-[11px] text-[#757575]'>
                  Azra Creations
                </p>
                <p className='text-[11px] text-[#757575]'>
                  Freelance Illustrator/Photographer
                </p>
                <div className='text-[11px] mt-[7px] text-[#757575]'>
                  <img
                    src={locationImg}
                    className='inline mr-1'
                    alt=''
                  />
                  Pune, India
                </div>
                <button className='rounded-full mt-[14px]  bg-[#00F9C6] text-[#333333] text-[12px] font-medium w-[87.85px] h-[30px]'>
                  View Store
                </button>
              </div>
            </div>
          </div>
          <p className='mt-6 mb-10 text-[14px] text-[#757575]'>
            International Artist Azra's art work dictates the
            expression of man and beast exploring our <br /> role and
            place in this universe. Taking inspiration from Primitive
            Art work and a various <br /> assortment of Modern Art.
          </p>
          <p>Recognition</p>
          <div>
            <div className='flex text-[11px] text-[#757575] gap-3 mt-[10px]'>
              <img src={R1} alt='' />
              Lorem ipsum dolor sit amet consectetur adipisicing{' '}
              <br /> elit. Ipsa quo, fugit a consectetur,
            </div>
            <div className='flex text-[11px] text-[#757575] gap-3 mt-1'>
              <img src={R2} alt='' />
              Lorem ipsum dolor sit amet consectetur adipisicing{' '}
              <br /> elit. Ipsa quo, fugit a consectetur,
            </div>
            <div className='flex text-[11px] text-[#757575] gap-3 mt-1'>
              <img src={R3} alt='' />
              Lorem ipsum dolor sit amet consectetur adipisicing{' '}
              <br /> elit. Ipsa quo, fugit a consectetur,
            </div>
          </div>
          <div className='flex gap-[15px] mt-5'>
            <img src={IconFacebook} alt='' />
            <img src={IconLinkedin} alt='' />
            <img src={IconInstagram} alt='' />
          </div>
        </div>
      </div>

      <div className='w-[1140px] mx-auto'>
        <div className='hrLine w-[100%]'></div>
        <p className='text-[#333333] text-[18px] font-medium leading-[1.2]'>
          Related Keywords
        </p>
        <div className='flex flex-wrap gap-[5px] text-[11px] text-[#757575]'>
          {keywordsArr.map((items) => {
            return (
              <>
                <p className='px-2.5 py-1 border border-[#dddddd] rounded-full'>
                  {items}
                </p>
              </>
            );
          })}
        </div>
      </div>

      <div className='hrLine bg-[#d6d6d6]'></div>
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

      {/* buttons */}
      <div className='w-w1168 mx-auto mb-3 mt-[50px] flex justify-between'>
        <div className='flex gap-[10px]'>
          <button className='blackBtn'>Write a Review</button>
          <button className='blackBtn bg-[#FFFFFF] border border-[#333333] rounded-full text-[#333333]'>
            See All Review
          </button>
        </div>
        <div className='flex gap-[10px] items-center'>
          <div>
            <button
              onClick={() => {
                setIsOpenSortBy(!isOpenSortBy);
              }}
              className={`${
                isOpenSortBy === true
                  ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#EFEFEF]'
                  : 'rounded-[15px] border  border-[#D6D6D6]'
              } cursor-pointer w-[120px] text-[12px] h-[30px] flex items-center justify-between p-[10px]`}
              // className='cursor-pointer w-[120px] border border-[#D6D6D6] text-[12px] h-[30px] rounded-[15px] flex items-center justify-between p-[10px]'
            >
              <span className='text-[#BBBBBB]'>Sort by</span>
              <img className='inline-block' src={dropdown} alt='' />
            </button>
            {isOpenSortBy && (
              <ul className='shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#FFFFFF] w-[120px] text-center text-[14px] text-primaryGray'>
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
          <div>
            <button
              onClick={() => {
                setIsOpenFilterBy(!isOpenFilterBy);
              }}
              className={`${
                isOpenFilterBy === true
                  ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#EFEFEF]'
                  : 'rounded-[15px] border  border-[#D6D6D6]'
              } cursor-pointer w-[120px] text-[12px] h-[30px] flex items-center justify-between p-[10px]`}
              // className='cursor-pointer w-[120px] border border-[#D6D6D6] text-[12px] h-[30px] rounded-[15px] flex items-center justify-between p-[10px]'
            >
              <span className='text-[#BBBBBB]'>Filter by</span>
              <img className='inline-block' src={dropdown} alt='' />
            </button>
            {isOpenFilterBy && (
              <ul className='shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#FFFFFF] w-[120px] text-center text-[14px] text-primaryGray'>
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
      {/* buttons */}

      <div
        className='w-w1168 rounded-2xl pt-[15px] mx-auto pl-4'
        style={{
          boxShadow: '#f0f0f0 0px 0px 4.3px 4px',
        }}
      >
        {custReview.map((item) => {
          return (
            <div>
              <div className='flex py-[15px] gap-3'>
                <p>
                  <img src={item.img} alt='' />
                </p>
                <div>
                  <p className='text-[15px] text-[#333333] leading-[1.2]'>
                    {item.name}
                  </p>
                  <p className='text-[12px] mt-1 mb-3 leading-[1.1] text-[#757575]'>
                    <span className='text-[#f88331]'>
                      {item.type}
                    </span>{' '}
                    {item.reviewCount} reviews . {item.photo} Photo
                  </p>
                  <p className='text-[12px] leading-[1.2] flex gap-3 text-[#757575]'>
                    <img src={Stars} className='inline' alt='' />{' '}
                    {item.months} ago
                  </p>
                  <p className='text-[13px] mt-3 mb-[19px] leading-[1.2] text-[#757575]'>
                    {item.desc}
                  </p>
                  <p className='text-[13px] mb-3 leading-[1.2] text-[#757575] flex items-center'>
                    <img src={like} className='inline' alt='' />
                    <span className='pl-1'> {item.like}</span>
                  </p>
                  <div className='border-l-2 text-[12px] leading-[1.2] pl-3 text-[#757575] border-[#dcdcdc]'>
                    <p>
                      <span className='text-[#333333] text-[13px] font-medium'>
                        Response from the owner
                      </span>{' '}
                      {item.responseMonth} ago
                    </p>
                    <p className='text-[13px] leading-[1.2]'>
                      {item.response}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className='w-w1168 mx-auto flex justify-between text-[#F88331] text-[12px] mt-2 mb-10'>
        <span>Disclosures & Guidlines</span>
        <span>See all 126 reviews</span>
      </p>
      <Footer />
    </>
  );
};

export default ProductDetails;
