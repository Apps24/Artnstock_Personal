import React from 'react';
import ViewMyStoreBanner from '../../assets/images/View My Store/ViewMyStoreBanner.png';
import Share from '../../assets/images/View My Store/Share.png';
import Img1 from '../../assets/images/View My Store/Img1.png';
import Img2 from '../../assets/images/View My Store/Img2.png';
import Img3 from '../../assets/images/View My Store/Img3.png';
import ProfilePhoto from '../../assets/images/View My Store/ProfilePhoto.png';
import location from '../../assets/images/View My Store/location.png';
import Pro from '../../assets/images/View My Store/Pro.png';
import searchIcon from '../../assets/images/View My Store/search.png';
import { useState } from 'react';
import dropdown from '../../assets/images/socials/dropdown.png';
import { ReactComponent as Grid1 } from '../../assets/images/Icons/grid1.svg';
import { ReactComponent as Grid } from '../../assets/images/Icons/grid.svg';

import { useEffect } from 'react';
import { useRef } from 'react';

// test

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

import { useLocation } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
// images for art Hover

import save from '../../assets/images/artList/save.png';
import similar from '../../assets/images/artList/similar.png';
import profile from '../../assets/images/artList/profile.png';
import shopCart from '../../assets/images/artList/shopCart.png';
import enlarge from '../../assets/images/artList/enlarge.png';
import share from '../../assets/images/artList/Share.png';
import { ReactComponent as Wishlist } from '../../assets/images/artList/wishlistsvg.svg';

import ArtLogo from '../../assets/images/View My Store/artlogo.svg';
import FootageLogo from '../../assets/images/View My Store/footagelogo.svg';
import MusicLogo from '../../assets/images/View My Store/musiclogo.svg';
import PhotosLogo from '../../assets/images/View My Store/photoslogo.svg';
import ProductsLogo from '../../assets/images/View My Store/productslogo.svg';
import TemplatesLogo from '../../assets/images/View My Store/templateslogo.svg';
import view from '../../assets/images/View My Store/View.png';
import folderImg from '../../assets/images/View My Store/folderImg.png';
// import { ReactComponent as ArtLogo } from '../../assets/images/View My Store/artlogo.svg';
// import { ReactComponent as FootageLogo } from '../../assets/images/View My Store/footagelogo.svg';
// import { ReactComponent as MusicLogo } from '../../assets/images/View My Store/musiclogo.svg';
// import { ReactComponent as PhotosLogo } from '../../assets/images/View My Store/photoslogo.svg';
// import { ReactComponent as ProductsLogo } from '../../assets/images/View My Store/productslogo.svg';
// import { ReactComponent as TemplatesLogo } from '../../assets/images/View My Store/templateslogo.svg';

import artFiles from '../../assets/images/contributor/artFiles.png';
import photosFiles from '../../assets/images/contributor/photosFiles.png';
import footageFiles from '../../assets/images/contributor/footageFiles.png';
import musicFiles from '../../assets/images/contributor/musicFiles.png';
import templatesFiles from '../../assets/images/contributor/templatesFiles.png';
import productFiles from '../../assets/images/contributor/productFiles.png';
import folder from '../../assets/images/contributor/folder.png';
// import dropArrow from '../../assets/images/Icons/Down arrow.svg';
import backArrow from '../../assets/images/contributor/backArrow.png';
import nextArrow from '../../assets/images/contributor/nextArrow.png';
import folderOfImage from '../../assets/images/contributor/folderOfImage.png';
import allfiles from '../../assets/images/contributor/allfiles.png';

const popularList = [
  {
    id: 1,
    name: 'Featured',
  },
  {
    id: 2,
    name: 'Newest',
  },
  {
    id: 3,
    name: 'Price:Low to High',
  },
  {
    id: 4,
    name: 'Price:High to Low',
  },
];
// test

const ContributorViewMyStore = () => {
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);

  // test
  const navigate = useNavigate();
  // Dropdowns
  const [show, setShow] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [artsList, setArtsList] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sizeBtn, setSizeBtn] = useState();
  const [orientationBtn, setOrientationBtn] = useState();
  const [title, setTitle] = useState('');

  const subjectId = useSelector((state) => state.subjectId.subjectId);

  const userId = useSelector((state) => state.auth.userId);

  // useEffect(() => {
  //   console.log(subjectId);
  // }, [subjectId]);

  // api calls
  const getAllArtList = async () => {
    try {
      if (subjectId === null) {
        const res = await httpClient.get(
          '/art_master/getActiveArtMasterList'
        );
        setTitle('All Art');
        setArtsList(res.data);
        // console.log(res.data);
      } else {
        const res = await httpClient.get(
          `/art_master/subjectNameWiseArtList/${subjectId.subjectName}`
        );
        // const res = await httpClient.get(
        //   `/art_master/getSubjectIdWiseSubjectMaster/${subjectId.subjectId}`
        // );
        setTitle(subjectId.subjectName);
        // console.log(res.data);
        setArtsList(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllArtList();
  }, []);

  const changeSizeFilter = (text) => {
    setSizeBtn(text);
  };

  const changeOrientationFilter = (text) => {
    setOrientationBtn(text);
  };

  const goToArtDetailsPage = (id) => {
    navigate(`/art/art-details`, { state: { id } });
  };

  const [popupArray, setPopupArray] = useState([]);

  const popupOfHover = (id) => {
    // console.log(typeof popupArray);
    const find = popupArray.find((obj) => obj.id === id.id);
    if (find === undefined) {
      setPopupArray((prev) => [...prev, id]);
    } else if (find !== undefined) {
      setPopupArray(popupArray.filter((obj) => obj.id !== id.id));
    }
  };
  const [popupArrayFolder, setPopupArrayFolder] = useState([]);

  const popupOfHoverFolder = (id) => {
    // console.log(typeof popupArray);
    const find = popupArrayFolder.find((obj) => obj.id === id.id);
    if (find === undefined) {
      setPopupArrayFolder((prev) => [...prev, id]);
    } else if (find !== undefined) {
      setPopupArrayFolder(
        popupArrayFolder.filter((obj) => obj.id !== id.id)
      );
    }
  };

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
    let findId;
    wishlist.forEach((obj) => {
      if (obj.artMaster !== null) {
        if (obj.artMaster.artId === artId) {
          findId = undefined;
        }
      }
    });

    if (!findId) {
      const object = {
        artId: artId,
        id: userId,
      };
      httpClient.post(`/wishlist_master/save`, object).then((res) => {
        // console.log(res.data);
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

  // Image Optimization
  const [imageGrid, setImageGrid] = useState('grid');

  const imageLinkChange = (url) => {
    const str = url;
    const newStr = !showSidebar
      ? 'upload/c_fit,w_299/'
      : 'upload/c_fit,w_308/';
    const updatedStr = str.replace('upload/', newStr);
    return updatedStr;
  };

  const imageLinkChangeSquaregrid = (url) => {
    const str = url;
    const newStr = !showSidebar
      ? 'upload/c_scale,w_299,h_299/'
      : 'upload/c_scale,w_308,h_299/';
    const updatedStr = str.replace('upload/', newStr);
    return updatedStr;
  };

  const imageLinkChangeFolder = (url) => {
    const str = url;
    const newStr = !showSidebar
      ? 'upload/w_299,h_299,c_scale/'
      : 'upload/w_308,h_308,c_scale/';
    const updatedStr = str?.replace('upload/', newStr);
    return updatedStr;
  };
  // test

  const [artLogoHover, setArtLogoHover] = useState(false);
  const [photosLogoHover, setPhotosLogoHover] = useState(false);
  const [footagesLogoHover, setFootagesLogoHover] = useState(false);
  const [musicLogoHover, setMusicLogoHover] = useState(false);
  const [templatesLogoHover, setTemplatesLogoHover] = useState(false);
  const [productsLogoHover, setProductsLogoHover] = useState(false);

  // test

  const [categoriesFocus, setCategoriesFocus] = useState('allart');
  const [artTabFocus, setArtTabFocus] = useState(false);
  const [photosTabFocus, setPhotosTabFocus] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isNameOpen, setIsNameOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [folderName, setFolderName] = useState(null);

  const [categories, setCategories] = useState({
    all: [],
    art: [],
    photo: [],
    footage: [],
    music: [],
    templates: [],
    product: [],
  });

  // folder
  // const [folder, setFolder] = useState({});
  const [create, setCreate] = useState(false);
  const [name, setname] = useState('');
  // const [isOpenSortBy, setIsOpenSortBy] = useState(false);

  // const userId = useSelector((state) => state.auth.userId);

  // api calls

  const location = useLocation();

  const user = location.state;

  const [allArt, setallArt] = useState(null);

  const getUserIdWiseArts = async () => {
    try {
      const response = await httpClient.get(
        `/art_master/getUserIdWiseArtMasterList/${user.userId}`
      );
      setallArt(response.data);
      // setCategories((prevCategories) => ({
      //   ...prevCategories,
      //   all: response.data,
      // }));
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getFolders = async () => {
    try {
      const response = await httpClient.get(
        `/file_manager_master/getUserIdWiseFileManagerList/${user.userId}`
      );
      const data = response.data;

      setCategories((prevCategories) => ({
        ...prevCategories,
        art: [],
        photo: [],
        footage: [],
        music: [],
        templates: [],
        product: [],
      }));

      data.forEach((obj) => {
        if (obj.category === 'art') {
          setCategories((prevCategories) => ({
            ...prevCategories,
            art: [...prevCategories.art, obj],
          }));
        } else if (obj.category === 'photos') {
          setCategories((prevCategories) => ({
            ...prevCategories,
            photo: [...prevCategories.photo, obj],
          }));
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserIdWiseArts();
    getFolders();
  }, []);

  // pagination **dont change the sequence of the code below** else will give undefined error
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 18;

  // let abc = [];

  // if (categoriesFocus === 'all') {
  //   abc = categories.all || [];
  // } else if (categoriesFocus === 'art') {
  //   abc = categories.art || [];
  // }

  // const dataToRender = abc;
  // const start = (currentPage - 1) * itemsPerPage;
  // const end = start + itemsPerPage;
  // const currentData = dataToRender.slice(start, end);

  // const totalPages = Math.ceil(dataToRender.length / itemsPerPage);

  // const handlePrevPage = () => {
  //   if (currentPage > 1 && currentPage <= totalPages) {
  //     setCurrentPage((prevPage) => prevPage - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (currentPage >= 1 && currentPage < totalPages) {
  //     setCurrentPage((prevPage) => prevPage + 1);
  //   }
  // };

  //pagination ends

  const [imagesFolderArray, setImagesFolderArray] = useState(null);
  // mapping folders photos/arts
  const folderImages = (obj) => {
    // console.log(obj);
    setImagesFolderArray(obj);
    setCategoriesFocus('folderImages');
  };

  // useEffect(() => {
  //   console.log(categories);
  // }, [categories]);

  // test

  const lengthOfAllCategories = (cate) => {
    let count = 0;
    cate.forEach((obj) =>
      obj.artMaster.forEach((ob) => (count += 1))
    );
    return count;
  };

  return (
    <>
      <div className='wrapper'>
        <main>
          <div
            className='hero'
            style={{
              backgroundImage: `url(${ViewMyStoreBanner})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className='z-50  flex justify-center text-center text-[#ffffff]'>
              <div className='mt-[63px] mb-[68px]'>
                <p className='text-[80px] text-[#333333] font-semibold leading-[1]'>
                  <span className='font-thin'> [ </span>Wall Skin{' '}
                  <span className='font-thin'>]</span>
                </p>
                <ul className='text-[15px] text-[#333333] flex gap-4'>
                  <li>Nature</li>
                  <li>Travel</li>
                  <li>Education</li>
                  <li>Lifestyle</li>
                  <li>Sports</li>
                  <li>People</li>
                </ul>
                <p className='text-[12px] text-[#333333] font-medium'>
                  <span className='font-normal'>by</span> Azra
                  Creation
                </p>
              </div>
            </div>
          </div>

          <div className='flex mt-5 justify-center'>
            <div className='mr-[13px]'>
              <div
                style={{
                  backgroundImage: `url(${
                    user.profileImage !== null
                      ? user.profileImage
                      : profile
                  })`,

                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className='w-[124px] h-[124px] rounded-[50%]'
              ></div>
              {/* <img
                src=
                alt=''
                className='w-[124px]  rounded-[20%]'
              /> */}
            </div>
            <div className='mr-[28px]'>
              <img src={Pro} alt='' />
              <p className='text-[25px] text-[#333333] mt-2  leading-[0.4]'>
                {user.displayName}
              </p>
              <div className='leading-[1.2] mt-2'>
                <p className='text-[11px] text-[#757575] '>
                  Illustrator/Photographer
                </p>
                <img src={location} alt='' className='inline' />
                <span className='text-[11px] text-[#757575]'>
                  {user.shippingAddress.cityName},{' '}
                  {user.shippingAddress.stateName},{' '}
                  {user.shippingAddress.countryName}
                  {/* Pune, Maharashtra, India */}
                </span>
              </div>
              <div className='mt-3 leading-[0.8]'>
                <button className='px-2.5 py-2 bg-[#00f9c6] text-[#333333] text-[11px] rounded-full mr-2'>
                  About Contributor
                </button>
                <img src={Share} alt='' className='inline' />
              </div>
            </div>
            <div>
              <div className='mt-2 border-t-2 border-b-2 border-[#EFEFEF]'>
                <table className='w-[100%]'>
                  <tr className='border-b border-[#EFEFEF]'>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[100px]'>
                      Styles
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                      Abstract, Realastic, Modern
                    </td>
                  </tr>
                  <tr className='border-b border-[#EFEFEF]'>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                      Subjects:
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                      Nature, Travel, Education, Lifestyle, Sports,
                      People
                    </td>
                  </tr>
                  <tr className=''>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                      Equipments:
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                      Canon 550D, Canon 5D Mark II
                    </td>
                  </tr>
                </table>
              </div>
              <p className='font-medium text-[#333333] text-[11px] mt-[10px] mb-1'>
                Recognitions
              </p>
              <div className='flex gap-4'>
                <img src={Img1} alt='' />
                <img src={Img2} alt='' />
                <img src={Img3} alt='' />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* prathamesh */}

      <div className='w-[100%] flex justify-between px-[20px]'>
        {/* title */}
        <div className='flex flex-col gap-[5px] mt-[30px]'>
          <div>
            <p className='text-[12px] text-primaryGray leading-[1]'>
              Artnstock / Contributor Store / All Collections / Art
            </p>
          </div>
          <div className='flex gap-[3px]'>
            <p className='text-[38px] text-primaryBlack font-medium leading-[1]'>
              All Collections
            </p>
            <p className='text-[12px] text-primaryGray mt-[18px]'>
              0 Sets, 2830 Files
            </p>
          </div>
        </div>

        {/* search bar */}
        <div className='mt-[35px] flex items-center max-w-[600px] w-[100%]'>
          <input
            className='bg-[#EEEEEE] flex-1 outline-0 py-2.5 px-5 w-fit placeholder:text-placeholderColor placeholder:font-medium rounded-tl-3xl rounded-bl-3xl  border-[#DADADA]'
            type='text'
            placeholder='Search by Title or Tags'
          />

          <button className=' py-3 rounded-tr-3xl rounded-br-3xl bg-[#e6e6e6] px-4 text-[#888888] text-sm14 font-medium'>
            <img
              className='inline-block mr-2'
              src={searchIcon}
              alt=''
            />
            Search
          </button>
        </div>
        {/* search bar */}

        {/* sort by */}
        <div className='w-[330px] leading-[1] mt-[32px] flex gap-[20px]  flex-row-reverse'>
          <div className='flex gap-[10px] pt-[3px]'>
            <Grid1
              style={{
                fill: `${
                  imageGrid === 'grid' ? '#333333' : '#888888'
                }`,
              }}
              onClick={() => {
                setImageGrid('grid');
              }}
            />
            <Grid
              style={{
                fill: `${
                  imageGrid === 'square' ? '#333333' : '#888888'
                }`,
              }}
              onClick={() => {
                setImageGrid('square');
              }}
            />
            {/* <img
              className='w-[23px] h-[23px]'
              src={gridBlack}
              alt=''
            />
            <img
              className='w-[23px] h-[23px]'
              src={gridGray}
              alt=''
            /> */}
          </div>

          <div className='flex gap-[10px]'>
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
        {/* sort by */}
      </div>

      {/* test */}
      <div className='main py-7'>
        <div
          className={`${showSidebar ? 'pr-6' : 'px-6'} flex gap-x-4`}
        >
          {/* Sidebar */}
          {showSidebar && (
            <div
              className='sidebar w-[17.313rem]  shadow-regCardShadow relative rounded-tr-2xl rounded-br-2xl py-12 pl-6 pr-4'
              style={{
                height: 'fit-content',
              }}
            >
              <img
                onClick={() => setShowSidebar(false)}
                className='absolute top-4 right-4 cursor-pointer'
                src={closeIcon}
                alt=''
              />

              {/* content */}
              <div className='flex justify-between'>
                <div>
                  <p className='text-[15px] font-medium text-primaryBlack leading-[1]'>
                    All Collections
                  </p>
                  <p className='text-[11px] text-primaryGray'>
                    Browse all by Category
                  </p>
                </div>
                <div>
                  <p className='text-[15px] text-primaryGray leading-[1]'>
                    {lengthOfAllCategories(categories.art) +
                      lengthOfAllCategories(categories.photo) +
                      0 +
                      0 +
                      0 +
                      0}
                  </p>
                </div>
              </div>

              {/* logos */}
              <div className='flex gap-[6px] mt-[10px]'>
                <div
                  onClick={() => setCategoriesFocus('allart')}
                  className='flex flex-col gap-[4px] relative'
                >
                  <img
                    onMouseEnter={() => {
                      setArtLogoHover(true);
                    }}
                    onMouseLeave={() => {
                      setArtLogoHover(false);
                    }}
                    src={ArtLogo}
                    alt=''
                  />
                  <p className='text-[11px] text-primaryBlack text-center'>
                    {lengthOfAllCategories(categories.art)}
                  </p>
                  {artLogoHover && (
                    <button className='z-[99] mt-[3px] h-[20px] px-[10px] flex justify-center items-center text-[11px] bg-[#f7f7f7] rounded-[10px] text-primaryGray absolute top-[50px] right-[-6px] border border-[#e4e4e4]'>
                      <span className='leading-[1]'>Art</span>
                    </button>
                  )}
                </div>
                <div className='flex flex-col gap-[4px] relative'>
                  <img
                    onMouseEnter={() => {
                      setPhotosLogoHover(true);
                    }}
                    onMouseLeave={() => {
                      setPhotosLogoHover(false);
                    }}
                    src={PhotosLogo}
                    alt=''
                  />
                  <p className='text-[11px] text-primaryBlack text-center'>
                    {lengthOfAllCategories(categories.photo)}
                  </p>

                  {photosLogoHover && (
                    <button className='z-[99] mt-[3px] h-[20px] px-[10px] flex justify-center items-center text-[11px] bg-[#f7f7f7] rounded-[10px] text-primaryGray absolute top-[50px] left-[-14px] border border-[#e4e4e4]'>
                      <span className='leading-[1]'>Photos</span>
                    </button>
                  )}
                </div>
                <div className='flex flex-col gap-[4px] relative'>
                  <img
                    onMouseEnter={() => {
                      setFootagesLogoHover(true);
                    }}
                    onMouseLeave={() => {
                      setFootagesLogoHover(false);
                    }}
                    src={FootageLogo}
                    alt=''
                  />
                  <p className='text-[11px] text-primaryBlack text-center'>
                    0
                  </p>
                  {footagesLogoHover && (
                    <button className='z-[99] mt-[3px] h-[20px] px-[10px] flex justify-center items-center text-[11px] bg-[#f7f7f7] rounded-[10px] text-primaryGray absolute top-[50px] left-[-14px] border border-[#e4e4e4]'>
                      <span className='leading-[1]'>Footages</span>
                    </button>
                  )}
                </div>
                <div className='flex flex-col gap-[4px] relative'>
                  <img
                    onMouseEnter={() => {
                      setMusicLogoHover(true);
                    }}
                    onMouseLeave={() => {
                      setMusicLogoHover(false);
                    }}
                    src={MusicLogo}
                    alt=''
                  />
                  <p className='text-[11px] text-primaryBlack text-center'>
                    0
                  </p>
                  {musicLogoHover && (
                    <button className='z-[99] mt-[3px] h-[20px] px-[10px] flex justify-center items-center text-[11px] bg-[#f7f7f7] rounded-[10px] text-primaryGray absolute top-[50px] left-[-14px] border border-[#e4e4e4]'>
                      <span className='leading-[1]'>Music</span>
                    </button>
                  )}
                </div>
                <div className='flex flex-col gap-[4px] relative'>
                  <img
                    onMouseEnter={() => {
                      setTemplatesLogoHover(true);
                    }}
                    onMouseLeave={() => {
                      setTemplatesLogoHover(false);
                    }}
                    src={TemplatesLogo}
                    alt=''
                  />
                  <p className='text-[11px] text-primaryBlack text-center'>
                    0
                  </p>
                  {templatesLogoHover && (
                    <button className='z-[99] mt-[3px] h-[20px] px-[10px] flex justify-center items-center text-[11px] bg-[#f7f7f7] rounded-[10px] text-primaryGray absolute top-[50px] left-[-14px] border border-[#e4e4e4]'>
                      <span className='leading-[1]'>Templates</span>
                    </button>
                  )}
                </div>
                <div className='flex flex-col gap-[4px] relative'>
                  <img
                    onMouseEnter={() => {
                      setProductsLogoHover(true);
                    }}
                    onMouseLeave={() => {
                      setProductsLogoHover(false);
                    }}
                    src={ProductsLogo}
                    alt=''
                  />
                  <p className='text-[11px] text-primaryBlack text-center'>
                    0
                  </p>
                  {productsLogoHover && (
                    <button className='z-[99] mt-[3px] h-[20px] px-[10px] flex justify-center items-center text-[11px] bg-[#f7f7f7] rounded-[10px] text-primaryGray absolute top-[50px] left-[-14px] border border-[#e4e4e4]'>
                      <span className='leading-[1]'>Products</span>
                    </button>
                  )}
                </div>
                {/* <ArtLogo />

                <PhotosLogo />
                <FootageLogo />
                <MusicLogo />
                <TemplatesLogo />
                <ProductsLogo /> */}
              </div>
              {/* logos */}

              <p className='text-[11px] text-primaryGray leading-[1] pt-[15px] pb-[5px]'>
                Browse all by Subject
              </p>

              {/* test */}
              <div className='w-[210px]  flex flex-col text-primaryGray'>
                {/* <div
                  onClick={() => {
                    setCategoriesFocus('all');
                  }}
                  className={`flex h-[40px] gap-[8px] bg-[${
                    categoriesFocus === 'all' ? '#f0f0f0' : '#ffffff'
                  }] py-[5px] cursor-pointer border-b border-[#efefef]`}
                >
                  <div>
                    <img src={allfiles} alt='' />
                  </div>

                  <div className='flex w-[184px] justify-between'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                        All Files
                      </p>
                      <p className='text-[11px] leading-[1]'>
                        All Uploaded Files on ArtStock
                      </p>
                    </div>
                    <div>
                      <p className='text-[15px] font-medium'>
                        {categories.all.length}
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* test */}
                <div
                  onClick={() => {
                    setCategoriesFocus('art');
                    setArtTabFocus(!artTabFocus);
                  }}
                  className={`flex h-[38px] gap-[8px] bg-[${
                    categoriesFocus === 'art' ? '#f0f0f0' : '#ffffff'
                  }] py-[5px] border-b border-[#efefef] cursor-pointer`}
                >
                  <div className='my-[auto] pb-[7px]'>
                    <img src={artFiles} alt='' />
                  </div>

                  <div className='flex w-[184px] justify-between items-center'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                        Art{' '}
                      </p>
                      <p className='text-primaryGray text-[11px] leading-[1]'>
                        {categories.art.length} Sets,{' '}
                        {lengthOfAllCategories(categories.art)} Files
                      </p>
                    </div>
                    <div>
                      <img
                        className={`${
                          artTabFocus === true
                            ? 'transform rotate-180'
                            : ''
                        }`}
                        src={dropArrow}
                        alt=''
                      />
                      {/* )} */}
                    </div>
                  </div>
                </div>

                {/* test */}

                {artTabFocus === true &&
                  categories.art.map((obj) => (
                    <div
                      onClick={() => {
                        folderImages(obj);
                      }}
                      className={`flex h-[27px] gap-[8px] bg-[${
                        categoriesFocus === 'folderImages' &&
                        imagesFolderArray.fileManagerId ===
                          obj.fileManagerId
                          ? '#f0f0f0'
                          : '#ffffff'
                      }] py-[5px] border-b border-[#efefef] cursor-pointer`}
                    >
                      <div className='my-[auto]'>
                        <img src={folder} alt='' />
                      </div>
                      <div className='flex w-[184px] justify-between'>
                        <div className='flex flex-col justify-center'>
                          <p className='text-[12px] text-primaryGray font-medium leading-[1]'>
                            {obj.title}
                          </p>
                        </div>
                        <div>
                          <p className='text-[12px]'>
                            {obj.artMaster.length}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* test */}

                <div
                  onClick={() => {
                    setCategoriesFocus('photos');
                    setPhotosTabFocus(!photosTabFocus);
                  }}
                  className={`flex h-[38px] gap-[8px] bg-[${
                    categoriesFocus === 'photos'
                      ? '#f0f0f0'
                      : '#ffffff'
                  }] py-[5px] border-b border-[#efefef] cursor-pointer`}
                >
                  <div className='my-[auto] pb-[7px] w-[16px]'>
                    <img src={photosFiles} alt='' />
                  </div>

                  <div className='flex w-[184px] justify-between items-center'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                        Photos{' '}
                      </p>
                      <span className='text-primaryGray text-[11px] leading-[1]'>
                        {categories.photo.length} Sets,{' '}
                        {lengthOfAllCategories(categories.photo)}{' '}
                        Files
                      </span>
                    </div>
                    <div>
                      <img
                        className={`${
                          photosTabFocus === true
                            ? 'transform rotate-180'
                            : ''
                        }`}
                        src={dropArrow}
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                {/* test */}

                {/* test */}
                {photosTabFocus === true &&
                  categories.photo.map((obj) => (
                    <div
                      onClick={() => {
                        folderImages(obj);
                      }}
                      className={`flex h-[27px] gap-[8px] bg-[${
                        categoriesFocus === 'folderImages' &&
                        imagesFolderArray.fileManagerId ===
                          obj.fileManagerId
                          ? '#f0f0f0'
                          : '#ffffff'
                      }] py-[5px] border-b border-[#efefef] cursor-pointer`}
                    >
                      <div className='my-[auto]'>
                        <img src={folder} alt='' />
                      </div>
                      <div className='flex w-[184px] justify-between'>
                        <div className='flex flex-col justify-center'>
                          <p className='text-[12px] text-primaryGray font-medium leading-[1]'>
                            {obj.title}
                          </p>
                        </div>
                        <div>
                          <p className='text-[12px]'>
                            {obj.artMaster.length}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* test */}

                {/* test */}
                <div className='flex h-[38px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef]'>
                  <div className='my-[auto] pb-[7px] w-[16px]'>
                    <img src={footageFiles} alt='' />
                  </div>

                  <div className='flex w-[184px] justify-between items-center'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                        Footage{' '}
                      </p>
                      <span className='text-primaryGray text-[11px] leading-[1]'>
                        {categories.footage.length} Sets,{' '}
                        {lengthOfAllCategories(categories.footage)}{' '}
                        Files
                      </span>
                    </div>
                    <div>
                      <img src={dropArrow} alt='' />
                    </div>
                  </div>
                </div>
                {/* test */}
                {/* test */}
                <div className='flex h-[38px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef]'>
                  <div className='my-[auto] pb-[7px] w-[16px]'>
                    <img src={musicFiles} alt='' />
                  </div>

                  <div className='flex w-[184px] justify-between items-center'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                        Music{' '}
                      </p>
                      <span className='text-primaryGray text-[11px] leading-[1]'>
                        {categories.music.length} Sets,{' '}
                        {lengthOfAllCategories(categories.music)}{' '}
                        Files
                      </span>
                    </div>
                    <div>
                      <img src={dropArrow} alt='' />
                    </div>
                  </div>
                </div>
                {/* test */}
                {/* test */}
                <div className='flex h-[38px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef]'>
                  <div className='my-[auto] pb-[7px] w-[16px]'>
                    <img src={templatesFiles} alt='' />
                  </div>

                  <div className='flex w-[184px] justify-between items-center'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                        Templates{' '}
                      </p>
                      <span className='text-primaryGray text-[11px] leading-[1]'>
                        {categories.templates.length} Sets,{' '}
                        {lengthOfAllCategories(categories.templates)}{' '}
                        Files
                      </span>
                    </div>
                    <div>
                      <img src={dropArrow} alt='' />
                    </div>
                  </div>
                </div>
                {/* test */}
                {/* test */}
                <div className='flex h-[38px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef]'>
                  <div className='my-[auto] pb-[7px] w-[16px]'>
                    <img src={productFiles} alt='' />
                  </div>

                  <div className='flex w-[184px] justify-between items-center'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                        Product{' '}
                      </p>
                      <span className='text-primaryGray text-[11px] leading-[1]'>
                        {categories.product.length} Sets,{' '}
                        {lengthOfAllCategories(categories.product)}{' '}
                        Files
                      </span>
                    </div>
                    <div>
                      <img src={dropArrow} alt='' />
                    </div>
                  </div>
                </div>
                {/* test */}
              </div>
              {/* test */}

              {/* content */}
            </div>
          )}

          {/* Main Content */}
          <div className='content w-[100%]'>
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

            {/* test */}

            {categoriesFocus === 'allart' && (
              <div>
                {allArt?.length > 0 ? (
                  <div>
                    <div className={`mainImagesCon mt-[15px] }`}>
                      <ResponsiveMasonry
                        columnsCountBreakPoints={
                          !showSidebar ? { 1920: 6 } : { 1920: 5 }
                        }
                      >
                        <Masonry gutter='15px'>
                          {allArt?.map((data) => {
                            return (
                              <div
                                onMouseEnter={() => {
                                  setPopupArray([]);
                                }}
                                key={data?.artId}
                                className={` ${
                                  showSidebar
                                    ? 'w-[19.25rem]'
                                    : 'w-[18.688rem]'
                                }`}
                                style={{ height: 'fit-content' }}
                              >
                                <div
                                  className={` w-full group rounded-2xl relative`}
                                  onClick={() =>
                                    goToArtDetailsPage(data?.artId)
                                  }
                                >
                                  <img
                                    className='rounded-2xl'
                                    style={{ height: '100%' }}
                                    src={
                                      imageGrid === 'grid'
                                        ? imageLinkChange(data?.image)
                                        : imageLinkChangeSquaregrid(
                                            data?.image
                                          )
                                    }
                                    alt=''
                                  />
                                  <div
                                    className='group-hover:flex hidden bg-blackRgba items-center justify-center absolute top-0 left-0 rounded-2xl'
                                    style={{
                                      height: '100%',
                                      width: '100%',
                                    }}
                                  >
                                    <p className='text-[25px] text-[#fff]'>
                                      {data.subjectMaster.subjectName}
                                    </p>
                                    <div className='absolute bottom-[10px] left-[10px] flex gap-[10px]'>
                                      <div
                                        onClick={(e) => {
                                          popupOfHover({
                                            id: data.artId,
                                          });
                                          e.stopPropagation();
                                        }}
                                      >
                                        <img src={save} alt='' />
                                      </div>
                                      <div>
                                        <img src={similar} alt='' />
                                      </div>
                                      <div>
                                        <img src={profile} alt='' />
                                      </div>
                                      <div>
                                        <img src={shopCart} alt='' />
                                      </div>
                                      <div>
                                        <img
                                          onClick={(e) => {
                                            navigate(
                                              '/BuyerReferralProgram'
                                            );
                                            e.stopPropagation();
                                          }}
                                          src={share}
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='absolute right-[10px] bottom-[10px]'>
                                      <img src={enlarge} alt='' />
                                    </div>
                                    <div className='absolute right-[3px] top-[3px]'>
                                      {/* <img
  className='cursor-pointer'
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  src={wishlist}
  alt=''
/> */}

                                      {/* test */}
                                      {wishlist?.find(
                                        (obj) =>
                                          obj.artMaster?.artId ===
                                          data.artId
                                      ) === undefined ? (
                                        <Wishlist
                                          className='cursor-pointer'
                                          onMouseEnter={
                                            handleMouseEnter
                                          }
                                          onMouseLeave={
                                            handleMouseLeave
                                          }
                                          onClick={(e) => {
                                            addToWishlist(
                                              data?.artId
                                            );
                                            e.stopPropagation();
                                          }}
                                          style={{
                                            fill: '#fff',
                                            width: '100%',
                                          }}
                                        />
                                      ) : (
                                        <Wishlist
                                          className='cursor-pointer'
                                          onMouseEnter={
                                            handleMouseEnter
                                          }
                                          onMouseLeave={
                                            handleMouseLeave
                                          }
                                          onClick={(e) => {
                                            wishlistDelete(
                                              data?.artId
                                            );
                                            e.stopPropagation();
                                          }}
                                          style={{
                                            fill: 'red',
                                            width: '100%',
                                          }}
                                        />
                                      )}
                                      {/* test */}

                                      {/* <Wishlist
   className='cursor-pointer'
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
/> */}
                                    </div>
                                    {isHovered && (
                                      <button className='w-[164px] z-[99] mt-[3px] h-[20px] flex justify-center items-center text-[11px] bg-[#f7f7f7] rounded-[10px] text-primaryGray absolute top-[33px] left-[203px] border border-[#e4e4e4]'>
                                        <span className='leading-[1]'>
                                          Save to Wishlist
                                        </span>
                                      </button>
                                    )}
                                    {popupArray.find(
                                      (obj) => obj.id === data.artId
                                    ) && (
                                      <div
                                        className={`z-999 right-[117px] bottom-[15px] bg-[#fff] rounded-[16px] w-[266px] absolute bottom-[44px] left-[-117px]`}
                                        style={{
                                          boxShadow:
                                            '0px 0px 18px rgba(0, 0, 0, 0.2)',
                                        }}
                                      >
                                        <div className='flex gap-[5px] flex-col p-[14px] leading-[1.3] text-center'>
                                          <p className='font-medium text-primaryBlack text-[15px]'>
                                            Create Account
                                          </p>
                                          <p className='text-primaryGray text-[11px]'>
                                            To create and add to a
                                            collection, you must be a
                                            logged-in member
                                          </p>
                                          <button className='bg-[#8e8e8e] rounded-[14px] h-[28px] w-[108px] text-[12px] font-medium text-[white] mx-[auto]'>
                                            Create Account
                                          </button>
                                          <p className='text-orangeColor text-[11px]'>
                                            Already a member? Sign in
                                          </p>
                                          <p className='text-pinkColor text-[11px]'>
                                            Note: Downloaded images
                                            will be saved in
                                            ‘Collections’ folder
                                          </p>
                                        </div>
                                        <div className='absolute left-[47%] bottom-[-10px] w-[20px] h-[20px] bg-[white] rounded-br-[5px] transform rotate-45 shadow-inner'></div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                                  {data?.artName}
                                </p>
                                <p className='text-primaryGray text-sm12 leading-[15px]'>
                                  Artnstock <br />
                                  35.4” x 31.5” Multiple Sizes
                                </p>
                                <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                                  ${data?.price}
                                </p>
                              </div>
                            );
                          })}
                        </Masonry>
                      </ResponsiveMasonry>
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
                ) : (
                  <div>
                    <div className='w-[100%]'>
                      <div className='mt-[30px] mx-[auto] text-center'>
                        <p className='text-[#ff369f] text-[18px]'>
                          It seems contributor have not have not added{' '}
                          <br />
                          any files yet.
                        </p>
                        <p className='mt-[10px] mb-[20px] text-[12px] text-[#757575]'>
                          After adding files by the contributor on
                          Artnstock will show up Here.
                        </p>
                        <button
                          onClick={() => {
                            navigate('/art-list');
                          }}
                          className='blackBtn text-[14px]'
                        >
                          Browse Artnstock
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* test */}

            {categoriesFocus === 'art' && (
              <div>
                {categories.art.length > 0 ? (
                  <div>
                    <div className={`mainImagesCon mt-[15px] }`}>
                      <ResponsiveMasonry
                        columnsCountBreakPoints={
                          !showSidebar ? { 1920: 6 } : { 1920: 5 }
                        }
                      >
                        <Masonry gutter='15px'>
                          {categories.art.map((data) => {
                            return (
                              <div
                                onMouseEnter={() => {
                                  setPopupArray([]);
                                }}
                                // key={data?.artId}
                                className={` ${
                                  showSidebar
                                    ? 'w-[19.25rem]'
                                    : 'w-[18.688rem]'
                                }`}
                                style={{ height: 'fit-content' }}
                                onClick={() => {
                                  folderImages(data);
                                }}
                              >
                                <div
                                  className={` w-full group rounded-2xl relative`}
                                >
                                  <img
                                    className='rounded-2xl'
                                    style={{ height: '308px' }}
                                    src={imageLinkChangeFolder(
                                      data?.artMaster[0]?.image
                                    )}
                                    alt=''
                                  />

                                  <div
                                    className='bg-[#3333334D] flex items-center justify-center absolute top-0 left-0 rounded-2xl'
                                    style={{
                                      height: '100%',
                                      width: '100%',
                                    }}
                                  >
                                    <div
                                      style={{
                                        backgroundImage: `url(${folderImg})`,
                                      }}
                                      className='bg-cover bg-center w-[64px] h-[57px] flex items-center justify-center pt-[5px]'
                                    >
                                      <p className='font-medium text-[18px] text-primaryBlack'>
                                        {data?.artMaster.length}
                                      </p>
                                    </div>
                                    <div className='absolute bottom-[10px] left-[10px] flex gap-[10px]'>
                                      <div>
                                        <img src={view} alt='' />
                                      </div>
                                      <div>
                                        <img
                                          onClick={(e) => {
                                            navigate(
                                              '/BuyerReferralProgram'
                                            );
                                            e.stopPropagation();
                                          }}
                                          src={share}
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    {/* <div className='absolute right-[10px] bottom-[10px]'>
                     <img src={enlarge} alt='' />
                   </div> */}
                                  </div>
                                </div>
                                <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                                  {data?.title}
                                </p>
                                <p className='text-primaryGray text-[12px]'>
                                  {data?.artMaster.length} Art
                                </p>
                              </div>
                            );
                          })}
                        </Masonry>
                      </ResponsiveMasonry>
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
                ) : (
                  <div className='w-[100%]'>
                    <div className='mt-[30px] mx-[auto] text-center'>
                      <p className='text-[#ff369f] text-[18px]'>
                        This contributor have not uploaded any files
                        on ArtnStock yet.
                      </p>
                      <p className='mt-[10px] mb-[20px] text-[12px] text-[#757575]'>
                        After uploading files by the contributor on
                        Artnstock will show up Here.
                      </p>
                      <button
                        onClick={() => {
                          navigate('/art-list');
                        }}
                        className='blackBtn text-[14px]'
                      >
                        Start Here
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {categoriesFocus === 'photos' && (
              <div className={`mainImagesCon mt-[15px] }`}>
                <ResponsiveMasonry
                  columnsCountBreakPoints={
                    !showSidebar ? { 1920: 6 } : { 1920: 5 }
                  }
                >
                  <Masonry gutter='15px'>
                    {categories.photo.map((data) => {
                      return (
                        <div
                          onMouseEnter={() => {
                            setPopupArray([]);
                          }}
                          // key={data?.artId}
                          className={` ${
                            showSidebar
                              ? 'w-[19.25rem]'
                              : 'w-[18.688rem]'
                          }`}
                          style={{ height: 'fit-content' }}
                          onClick={() => {
                            folderImages(data);
                          }}
                        >
                          <div
                            className={` w-full group rounded-2xl relative`}
                          >
                            <img
                              className='rounded-2xl'
                              style={{ height: '308px' }}
                              src={imageLinkChangeFolder(
                                data?.artMaster[0].image
                              )}
                              alt=''
                            />

                            <div
                              className='bg-[#3333334D] flex items-center justify-center absolute top-0 left-0 rounded-2xl'
                              style={{
                                height: '100%',
                                width: '100%',
                              }}
                            >
                              <div
                                style={{
                                  backgroundImage: `url(${folderImg})`,
                                }}
                                className='bg-cover bg-center w-[64px] h-[57px] flex items-center justify-center pt-[5px]'
                              >
                                <p className='font-medium text-[18px] text-primaryBlack'>
                                  {data?.artMaster.length}
                                </p>
                              </div>
                              <div className='absolute bottom-[10px] left-[10px] flex gap-[10px]'>
                                <div>
                                  <img src={view} alt='' />
                                </div>
                                <div>
                                  <img
                                    onClick={(e) => {
                                      navigate(
                                        '/BuyerReferralProgram'
                                      );
                                      e.stopPropagation();
                                    }}
                                    src={share}
                                    alt=''
                                  />
                                </div>
                              </div>
                              {/* <div className='absolute right-[10px] bottom-[10px]'>
                                  <img src={enlarge} alt='' />
                                </div> */}
                            </div>
                          </div>
                          <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                            {data?.title}
                          </p>
                          <p className='text-primaryGray text-[12px]'>
                            {data?.artMaster.length} Photos
                          </p>
                        </div>
                      );
                    })}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            )}

            {/* test */}

            {categoriesFocus === 'folderImages' && (
              <div>
                {imagesFolderArray?.artMaster?.length > 0 ? (
                  <div>
                    <div className={`mainImagesCon mt-[15px] }`}>
                      <ResponsiveMasonry
                        columnsCountBreakPoints={
                          !showSidebar ? { 1920: 6 } : { 1920: 5 }
                        }
                      >
                        <Masonry gutter='15px'>
                          {imagesFolderArray.artMaster.map((data) => {
                            return (
                              <div
                                onMouseEnter={() => {
                                  setPopupArray([]);
                                }}
                                key={data?.artId}
                                className={` ${
                                  showSidebar
                                    ? 'w-[19.25rem]'
                                    : 'w-[18.688rem]'
                                }`}
                                style={{ height: 'fit-content' }}
                              >
                                <div
                                  className={` w-full group rounded-2xl relative`}
                                  onClick={() =>
                                    goToArtDetailsPage(data?.artId)
                                  }
                                >
                                  <img
                                    className='rounded-2xl'
                                    style={{ height: '100%' }}
                                    src={
                                      imageGrid === 'grid'
                                        ? imageLinkChange(data?.image)
                                        : imageLinkChangeSquaregrid(
                                            data?.image
                                          )
                                    }
                                    alt=''
                                  />
                                  <div
                                    className='group-hover:flex hidden bg-blackRgba items-center justify-center absolute top-0 left-0 rounded-2xl'
                                    style={{
                                      height: '100%',
                                      width: '100%',
                                    }}
                                  >
                                    <p className='text-[25px] text-[#fff]'>
                                      {data.subjectMaster.subjectName}
                                    </p>
                                    <div className='absolute bottom-[10px] left-[10px] flex gap-[10px]'>
                                      <div
                                        onClick={(e) => {
                                          popupOfHover({
                                            id: data.artId,
                                          });
                                          e.stopPropagation();
                                        }}
                                      >
                                        <img src={save} alt='' />
                                      </div>
                                      <div>
                                        <img src={similar} alt='' />
                                      </div>
                                      <div>
                                        <img src={profile} alt='' />
                                      </div>
                                      <div>
                                        <img src={shopCart} alt='' />
                                      </div>
                                      <div>
                                        <img
                                          onClick={(e) => {
                                            navigate(
                                              '/BuyerReferralProgram'
                                            );
                                            e.stopPropagation();
                                          }}
                                          src={share}
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='absolute right-[10px] bottom-[10px]'>
                                      <img src={enlarge} alt='' />
                                    </div>
                                    <div className='absolute right-[3px] top-[3px]'>
                                      {/* <img
  className='cursor-pointer'
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  src={wishlist}
  alt=''
/> */}

                                      {/* test */}
                                      {wishlist?.find(
                                        (obj) =>
                                          obj.artMaster?.artId ===
                                          data.artId
                                      ) === undefined ? (
                                        <Wishlist
                                          className='cursor-pointer'
                                          onMouseEnter={
                                            handleMouseEnter
                                          }
                                          onMouseLeave={
                                            handleMouseLeave
                                          }
                                          onClick={(e) => {
                                            addToWishlist(
                                              data?.artId
                                            );
                                            e.stopPropagation();
                                          }}
                                          style={{
                                            fill: '#fff',
                                            width: '100%',
                                          }}
                                        />
                                      ) : (
                                        <Wishlist
                                          className='cursor-pointer'
                                          onMouseEnter={
                                            handleMouseEnter
                                          }
                                          onMouseLeave={
                                            handleMouseLeave
                                          }
                                          onClick={(e) => {
                                            wishlistDelete(
                                              data?.artId
                                            );
                                            e.stopPropagation();
                                          }}
                                          style={{
                                            fill: 'red',
                                            width: '100%',
                                          }}
                                        />
                                      )}
                                      {/* test */}

                                      {/* <Wishlist
   className='cursor-pointer'
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
/> */}
                                    </div>
                                    {isHovered && (
                                      <button className='w-[164px] z-[99] mt-[3px] h-[20px] flex justify-center items-center text-[11px] bg-[#f7f7f7] rounded-[10px] text-primaryGray absolute top-[33px] left-[203px] border border-[#e4e4e4]'>
                                        <span className='leading-[1]'>
                                          Save to Wishlist
                                        </span>
                                      </button>
                                    )}
                                    {popupArray.find(
                                      (obj) => obj.id === data.artId
                                    ) && (
                                      <div
                                        className={`z-999 right-[117px] bottom-[15px] bg-[#fff] rounded-[16px] w-[266px] absolute bottom-[44px] left-[-117px]`}
                                        style={{
                                          boxShadow:
                                            '0px 0px 18px rgba(0, 0, 0, 0.2)',
                                        }}
                                      >
                                        <div className='flex gap-[5px] flex-col p-[14px] leading-[1.3] text-center'>
                                          <p className='font-medium text-primaryBlack text-[15px]'>
                                            Create Account
                                          </p>
                                          <p className='text-primaryGray text-[11px]'>
                                            To create and add to a
                                            collection, you must be a
                                            logged-in member
                                          </p>
                                          <button className='bg-[#8e8e8e] rounded-[14px] h-[28px] w-[108px] text-[12px] font-medium text-[white] mx-[auto]'>
                                            Create Account
                                          </button>
                                          <p className='text-orangeColor text-[11px]'>
                                            Already a member? Sign in
                                          </p>
                                          <p className='text-pinkColor text-[11px]'>
                                            Note: Downloaded images
                                            will be saved in
                                            ‘Collections’ folder
                                          </p>
                                        </div>
                                        <div className='absolute left-[47%] bottom-[-10px] w-[20px] h-[20px] bg-[white] rounded-br-[5px] transform rotate-45 shadow-inner'></div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                                  {data?.artName}
                                </p>
                                <p className='text-primaryGray text-sm12 leading-[15px]'>
                                  Artnstock <br />
                                  35.4” x 31.5” Multiple Sizes
                                </p>
                                <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                                  ${data?.price}
                                </p>
                              </div>
                            );
                          })}
                        </Masonry>
                      </ResponsiveMasonry>
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
                ) : (
                  <div>
                    <div className='w-[100%]'>
                      <div className='mt-[30px] mx-[auto] text-center'>
                        <p className='text-[#ff369f] text-[18px]'>
                          It seems contributor have not have not added{' '}
                          <br />
                          any files yet.
                        </p>
                        <p className='mt-[10px] mb-[20px] text-[12px] text-[#757575]'>
                          After adding files by the contributor on
                          Artnstock will show up Here.
                        </p>
                        <button
                          onClick={() => {
                            navigate('/art-list');
                          }}
                          className='blackBtn text-[14px]'
                        >
                          Browse Artnstock
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* test */}
    </>
  );
};

export default ContributorViewMyStore;
