import React, { useRef, useState, useEffect } from 'react';
import Topbar from './Topbar';
import mainLogo from '../../assets/images/header/mainLogo.svg';
import notficationIcon from '../../assets/images/Icons/notificationIcon.svg';
// import wishlistIcon from '../../assets/images/Icons/wishlistIcon.svg';
import { ReactComponent as WishlistIcon } from '../../assets/images/Icons/wishlistIcon.svg';
import cartIcon from '../../assets/images/Icons/cartIcon.svg';
import dropArrow from '../../assets/images/Icons/Down arrow.svg';
import searchIcon from '../../assets/images/Icons/searchDarkIcon.svg';
import imageIcon from '../../assets/images/Icons/pictureIcon.svg';
import userIcon from '../../assets/images/Icons/userIcon.svg';
// dropdown

import artIcon from '../../assets/images/Icons/artIcon.svg';
import photoIcon from '../../assets/images/Icons/photosIcon.svg';
import footageIcon from '../../assets/images/Icons/videoIcon.svg';
import musicIcon from '../../assets/images/Icons/music.svg';
import templatesIcon from '../../assets/images/Icons/templatesIcon.svg';
import productsIcon from '../../assets/images/Icons/productsIcon.svg';
import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSliceAction } from '../../store/authSlice';
import crossIcon from '../../assets/images/Icons/crossIcon.svg';

import searchThumb from '../../assets/images/static/searchThumb1.jpg';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

import artDropImg from '../../assets/images/static/Layer2643.png';
import Animals from '../../assets/images/static/Animals.png';
import Architecture from '../../assets/images/static/Architecture.png';
import Botanical from '../../assets/images/static/Botanical.png';
import People from '../../assets/images/static/People.png';
import Scenic from '../../assets/images/static/Scenic.png';

// Product
import comboPack from '../../assets/images/static/Icon - Combo Pack.png';
import customPack from '../../assets/images/static/Icon - Custom Pack.png';

// Profile Click
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import profile from '../../assets/images/Menubar/Profile.png';
import locationIcon from '../../assets/images/Menubar/location.png';

// Notification Click
import combo from '../../assets/images/Menubar/combo.png';
import mug from '../../assets/images/Menubar/mug.png';

// top Loading bar

import LoadingBar from 'react-top-loading-bar';


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
    padding: 30px;
    width: 43.125rem;
    height: 25.5rem;
  }
`;

const styles = {
  normalIp:
    'bg-[#EEEEEE] w-[100%] outline-0 py-3 px-5 placeholder:text-placeholderColor placeholder:font-medium rounded-tl-3xl rounded-bl-3xl border-r-2 border-[#DADADA]',
  activeIp:
    'bg-[#ffffff] rounded-tl-3xl py-3 px-5 rounded-tr-3xl outline-none border border-[#E9E9E9] border-b-0 w-[100%] ',
};

const Mainbar = () => {
  const userAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDrop, setShowDrop] = useState(false);
  const ref = useRef(null);
  const [selectItems, setSelectItems] = useState(null);

  //loading bar
  const [progress, setProgress] = useState(0);

  const location = useLocation();

  const [activeLink, setActiveLink] = useState(
    location.pathname === '/'
      ? 'home'
      : location.pathname === '/art-home'
      ? 'Art'
      : location.pathname === '/photo-home'
      ? 'Photos'
      : location.pathname === '/footage-home'
      ? 'Footage'
      : location.pathname === '/music-home'
      ? 'Music'
      : location.pathname === '/templates-home'
      ? 'Templates'
      : location.pathname === '/products-home'
      ? 'Products'
      : 'home'
  );

  // console.log(activeLink);
  const pathh = (val) => {
    navigate('/tabs', {
      state: val,
    });
  };

  const pathhcust = (val) => {
    navigate('/customer-tabs', {
      state: val,
    });

  };

  const customerSetting = () => {
    navigate('/customer');
  };

  const logout = () => {
    // dispatch(setUserRole(''));
    dispatch(authSliceAction.logoutUser());
  };

  const changeNavigation = (nav) => {
    // console.log(nav);
    if (nav === 'home') {
      navigate('/');
      setActiveLink('home');
    }
  };

  const changeinput = (e) => {
    console.log(e.target.value);
  };

  // redux useSelector of userRole

  const userRole = useSelector((state) => state.auth.userRole);

  // useEffect(() => {
  //   console.log(userRole);
  // }, []);

  useEffect(() => {
    setProgress(100);
  }, []);

  useEffect(() => {
    location.pathname === '/' && setSelectItems(null);
    location.pathname === '/art-home' && setSelectItems('Art');
    location.pathname === '/photo-home' && setSelectItems('Photos');
    location.pathname === '/footage-home' && setSelectItems('Footage');
    location.pathname === '/music-home' && setSelectItems('Music');
    location.pathname === '/templates-home' && setSelectItems('Templates');
    location.pathname === '/product-home' && setSelectItems('Products');
  }, [location]);

  return (
    <>
      {/* loading bar */}
      <LoadingBar
        color='linear-gradient(90deg, rgba(220,76,154,1) 0%, rgba(149,147,205,1) 35%, rgba(132,212,156,1) 65%, rgba(204,236,59,1) 100%)'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      {/* loading bar */}
      <Topbar />
      <div className='px-6 py-3'>
        <div className='flex items-center justify-between relative'>
          <div className='left flex items-center'>
            <img
              className='mr-5'
              onClick={() => changeNavigation('home')}
              src={mainLogo}
              alt=''
            />
            <ul>
              <li
                className={`${
                  activeLink === 'Art' && 'text-primaryBlack'
                } menu-link group hover:text-primaryBlack relative`}
              >
                <NavLink
                  onClick={() => setActiveLink('Art')}
                  to='/art-home'
                >
                  ART
                </NavLink>
                <div className='bg-[#ffffff] pt-5 px-5 pb-7 absolute rounded-3xl z-50 shadow-regCardShadow top-8 left-0 hidden group-hover:block'>
                  <div className='flex gap-4 mb-7'>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={artDropImg}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        Abstract
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={Animals}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        Animals
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={Architecture}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        Architecture
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={Botanical}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        Botanical
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={People}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        People
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={Scenic}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        Scenic
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button className='block mx-auto text-[#ffffff] text-sm12 font-medium bg-secGray py-1.5 px-4 rounded-2xl'>
                    See All Subjects
                  </button>
                </div>
              </li>
              <li className='menu-link'>PHOTOS</li>
              <li className='menu-link'>FOOTAGE</li>
              <li className='menu-link'>MUSIC</li>
              <li className='menu-link'>TEMPLATES</li>
              <li
                className={`${
                  activeLink === 'Products' && 'text-primaryBlack'
                } menu-link group hover:text-primaryBlack relative`}
              >
                <NavLink
                  onClick={() => setActiveLink('Products')}
                  to='/product-home'
                >
                  PRODUCTS
                </NavLink>
                <div className='bg-[#ffffff] pt-5 px-5 pb-7 absolute rounded-3xl z-50 shadow-regCardShadow top-8 left-0 hidden group-hover:block'>
                  <div className='flex gap-4 mb-7'>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={artDropImg}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        Abstract
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={Animals}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        Animals
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={Architecture}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        Architecture
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={Botanical}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        Botanical
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        className='h-[150px] w-[150px] max-w-none'
                        src={People}
                        alt=''
                      />
                      <p className='my-2.5 font-medium text-[15px] text-primaryBlack'>
                        People
                      </p>
                      <ul>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Arts for Kids
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Astronomy & Space
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Bevrages
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Book Illustration
                        </li>
                        <li className='text-[13px] text-primaryGray font-normal leading-[19px]'>
                          Comics
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button className='block mx-auto text-[#ffffff] text-sm12 font-medium bg-secGray py-1.5 px-4 rounded-2xl'>
                    See All Products
                  </button>
                  <div className='bg-[#efefef] h-[1px] w-[100%] my-[30px]'></div>
                  <div className='flex items-center justify-center'>
                    <div className='flex items-center'>
                      <img src={comboPack} alt='' />
                      <p className='text-[28px] text-primaryBlack ml-2.5'>
                        Combo Pack
                      </p>
                    </div>
                    <div className='bg-[#efefef] w-[1px] h-[38px] mx-[25px]'></div>
                    <div className='flex items-center'>
                      <img src={customPack} alt='' />
                      <p className='text-[28px] text-primaryGray ml-2.5'>
                        Custom Pack
                      </p>
                    </div>
                  </div>
                  <button className='bg-[#ffffff] text-primaryGray text-sm11 border border-[#8e8e8e] py-0.5 px-1.5 rounded-xl mt-2.5 block mx-auto'>
                    Browse through our Pack Collections of
                    best-selling Limited Editions
                  </button>
                </div>
              </li>
              <li className='menu-link'>BLOG</li>
              <li className='menu-link'>AUCTIONS</li>
            </ul>
          </div>
          <div
            className='mid absolute left-2/4'
            style={{ transform: 'translate(-40%, 0)' }}
          >
            <button
              onClick={() => {
                navigate('/SellOnArtnstock-Home');
              }}
              className='bg-gradient-to-r from-[#3DFCDC] via-[#9EFD58] to-[#FFE82A] px-2.5 py-1.5 rounded-3xl text-primaryBlack font-medium text-[0.75rem] leading-4'
            >
              Sell on Artnstock
            </button>
          </div>
          <div className='right'>
            <ul>
              <li className='menu-link'>PLANS & PRICING</li>
              {userAuth.login ? (
                <li className='menu-link'>
                  <div className=''>
                    <Menu as='div' className='relative '>
                      <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                        <img src={userIcon} alt='' />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-0 mt-2 w-w245 z-50 origin-top-right divide-y divide-[#efefef] rounded-[16px] bg-[#ffffff] shadow-dropShadow focus:outline-none'>
                          <div className='px-[14px] text-[12px] text-[#757575] '>
                            <Menu.Item>
                              <div>
                                <div className='flex gap-[10px] justify-center mt-[14px] mb-[20px]'>
                                  {/* <img src={profile} alt="" /> */}

                                  <div>
                                    <div
                                      className='w-[70px] h-[70px] rounded-[92%] bg-no-repeat bg-center bg-cover'
                                      style={{
                                        backgroundImage: `url(${profile})`,
                                      }}
                                    ></div>
                                  </div>

                                  <p className='leading-[1.3]'>
                                    <p className='text-[18px] text-[#333333]'>
                                      Azra Creations
                                    </p>
                                    <p className='text-[11px] text-[#757575]'>
                                      User ID: ANS98765432
                                    </p>
                                    <p className='text-[11px] text-[#757575]'>
                                      Illustrator/Photographer
                                    </p>
                                    <p className='text-[11px] text-[#757575]'>
                                      <img
                                        src={locationIcon}
                                        className='inline'
                                        alt=''
                                      />{' '}
                                      Pune, India
                                    </p>
                                  </p>
                                </div>
                                <button onClick={customerSetting} className='text-[#333333] border w-[111px] h-[22px] rounded-[11px] flex justify-center items-center p-0 mb-[10px]'>
                                  <span>Account Settings</span>
                                </button>
                              </div>
                            </Menu.Item>
                          </div>
                          <div>
                            <Menu.Item className='px-[14px] text-[12px] text-[#757575] '>
                              <button
                                onClick={() => {
                                  pathhcust('1');
                                }}
                              >
                                My Collections
                              </button>
                            </Menu.Item>
                          </div>
                          <div className='px-[14px] text-[12px] text-[#757575]'>
                            <Menu.Item>
                              <button
                                onClick={() => {
                                  pathhcust('2');
                                }}
                              >
                                Plan
                              </button>
                            </Menu.Item>
                          </div>
                          <div className='px-[14px] text-[12px] text-[#757575]'>
                            <Menu.Item>
                              <button
                                onClick={() => {
                                  pathhcust('3');
                                }}
                              >
                                Purchase History
                              </button>
                            </Menu.Item>
                          </div>
                          <div className='px-[14px] text-[12px] text-[#757575]'>
                            <Menu.Item>
                              <button
                                onClick={() => {
                                  pathhcust('4');
                                }}
                              >
                                Referral Earnings
                              </button>
                            </Menu.Item>
                          </div>
                          <div className='px-[14px] text-[12px] text-[#757575]'>
                            <Menu.Item>
                              <button
                                onClick={() => {
                                  pathhcust('5');
                                }}
                              >
                                Customer Support
                              </button>
                            </Menu.Item>
                          </div>

                          {/* contributor view start */}
                          {userRole === 'contributor' ? (
                            <div>
                              <div className='px-[14px] text-[12px] text-[#757575]'>
                                <Menu.Item>
                                  <p className='text-[#333333] text-[18px] pt-4'>
                                    Contributor
                                  </p>
                                </Menu.Item>
                              </div>
                              <div className='px-[14px] text-[12px] text-[#757575]'>
                                <Menu.Item>
                                  <button
                                    onClick={() => {
                                      pathh('1');
                                    }}
                                  >
                                    Dashboard{' '}
                                  </button>
                                </Menu.Item>
                              </div>
                              <div className='px-[14px] text-[12px] text-[#757575]'>
                                <Menu.Item>
                                  <button
                                    onClick={() => {
                                      pathh('2');
                                    }}
                                  >
                                    Upload
                                  </button>
                                </Menu.Item>
                              </div>
                              <div className='px-[14px] text-[12px] text-[#757575]'>
                                <Menu.Item>
                                  <button
                                    onClick={() => {
                                      pathh('3');
                                    }}
                                  >
                                    File Manager
                                  </button>
                                </Menu.Item>
                              </div>
                              <div className='px-[14px] text-[12px] text-[#757575]'>
                                <Menu.Item>
                                  <button
                                    onClick={() => {
                                      pathh('4');
                                    }}
                                  >
                                    Releases
                                  </button>
                                </Menu.Item>
                              </div>
                              <div className='px-[14px] text-[12px] text-[#757575]'>
                                <Menu.Item>
                                  <button
                                    onClick={() => {
                                      pathh('5');
                                    }}
                                  >
                                    Earnings
                                  </button>
                                </Menu.Item>
                              </div>
                              <div className='px-[14px] text-[12px] text-[#757575]'>
                                <Menu.Item>
                                  <button
                                    onClick={() => {
                                      pathh('6');
                                    }}
                                  >
                                    Contributor Support
                                  </button>
                                </Menu.Item>
                              </div>
                              <div className='px-[14px] text-[12px] text-[#757575]'>
                                <Menu.Item>
                                  <button>Promote My Work</button>
                                </Menu.Item>
                              </div>
                              <div className='px-[14px] text-[12px] text-[#757575]'>
                                <Menu.Item>
                                  <button>View My Shop</button>
                                </Menu.Item>
                              </div>
                            </div>
                          ) : (
                            <div></div>
                          )}
                          {/* contributor view end */}

                          <div className='px-[14px] flex justify-center '>
                            <Menu.Item>
                              <button
                                onClick={logout}
                                className='blackBtn py-1.5 text-sm12 border-none mt-[10px] mb-[20px]'
                              >
                                Sign Out
                              </button>
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </li>
              ) : (
                <>
                  <li className='menu-link'>
                    <Link to='/join'>JOIN</Link>
                  </li>
                  <li className='menu-link'>
                    <Link to='/login'>SIGN IN</Link>
                  </li>
                </>
              )}
              <li className='menu-link'>
                <div className=''>
                  <Menu as='div' className='relative '>
                    <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                      <img src={notficationIcon} alt='' />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 mt-2 px-[18px] w-w350 z-50 origin-top-right divide-y divide-[#efefef] rounded-[16px] bg-[#ffffff] shadow-dropShadow focus:outline-none'>
                        <Menu.Item className='px-[14px] text-[12px] mt-[22px] mb-[10px] text-[#757575] '>
                          <p className='text-[#dc399b]'>
                            Recently added on Artnstock
                          </p>
                        </Menu.Item>

                        <Menu.Item className='px-[14px] text-[12px] py-[11px] text-[#757575] '>
                          <div className='flex gap-2'>
                            <img src={combo} alt='' />
                            <div>
                              <p className='text-[15px] text-[#333333]'>
                                Office Merchandise Combo
                              </p>
                              <p className='text-[11px] text-[#757575] leading-[14px] pt-1'>
                                International artist Azra's work{' '}
                                <br /> dictates the expression
                              </p>
                            </div>
                          </div>
                        </Menu.Item>

                        <Menu.Item className='px-[14px] text-[12px] py-[11px] text-[#757575]'>
                          <div className='flex gap-2'>
                            <img src={mug} alt='' />
                            <div>
                              <p className='text-[15px] text-[#333333]'>
                                Vector art printed on mug
                              </p>
                              <p className='text-[11px] text-[#757575] leading-[14px] pt-1'>
                                International artist Azra's work{' '}
                                <br /> dictates the expression
                              </p>
                            </div>
                          </div>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </li>
              <li className='menu-link'>
                {/* <img
                  onClick={() => {
                    navigate('/wishlist');
                  }}
                  src={wishlistIcon}
                  alt=''
                /> */}
                <WishlistIcon
                  onClick={() => {
                    navigate('/wishlist');
                  }}
                  style={{
                    fill: '#888888',
                  }}
                />
              </li>
              <li className='menu-link m-0'>
                <img
                  onClick={() => {
                    navigate('/shopping-cart');
                  }}
                  src={cartIcon}
                  alt=''
                />
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-3.5 flex items-center '>
          {/* Search Input */}
          <div className='group relative w-fit flex-1 bg-[#EEEEEE] rounded-tl-3xl rounded-bl-3xl'>
            <input
              className={`${
                showDrop ? styles.activeIp : styles.normalIp
              }`}
              type='text'
              placeholder='Find something great'
              onChange={changeinput}
              ref={ref}
              onFocus={() => setShowDrop(true)}
              onBlur={() => setShowDrop(false)}
            />
            <img
              className={`${
                showDrop ? 'block' : 'hidden'
              } absolute z-20 right-5 top-4 `}
              src={crossIcon}
              alt=''
            />
            <div
              className={`${
                showDrop ? 'block' : 'hidden'
              } absolute border border-[#E9E9E9] bg-[#ffffff] w-[100%] px-5  border-t-0 rounded-bl-3xl rounded-br-3xl z-10`}
            >
              <div className=' border-t border-[#EFEFEF] pt-5 pb-7 flex'>
                <div className='flex-1 border-r border-[#EFEFEF]'>
                  <ul>
                    <li className='linkSearch'>Arts for Kids</li>
                    <li className='linkSearch'>Astronomy & Space</li>
                    <li className='linkSearch'>Beverages</li>
                    <li className='linkSearch'>Book Illustration</li>
                    <li className='linkSearch'>Comics</li>
                    <li className='linkSearch'>Dance</li>
                    <li className='linkSearch'>Education</li>
                    <li className='linkSearch'>Fantasy</li>
                    <li className='linkSearch'>Fashion</li>
                    <li className='linkSearch'>Figurative</li>
                  </ul>
                </div>
                <div className='flex-1 flex flex-col justify-between border-r  border-[#EFEFEF] pl-5'>
                  <div>
                    <p className='text-sm18 leading-[29.7px] text-primaryBlack font-semibold'>
                      Recent Searches
                    </p>
                    <ul>
                      <li className='linkSearch'>Abstract</li>
                      <li className='linkSearch'>Nature</li>
                    </ul>
                  </div>
                  <button
                    style={{ width: 'fit-content' }}
                    className='bg-[#888888] rounded-2xl text-sm12 text-[#ffffff] font-medium px-2.5 py-1.5'
                  >
                    Clear All Recent Searches
                  </button>
                </div>
                <div className='flex-1 pl-5 flex flex-col justify-between'>
                  <div>
                    <p className='text-sm18 leading-[29.7px] text-primaryBlack font-semibold'>
                      Recently Viewed
                    </p>
                    <div className='flex gap-2.5 flex-wrap'>
                      <div className='rounded-2xl w-[6.25rem] h-[6.25rem] overflow-hidden '>
                        <img src={searchThumb} alt='' />
                      </div>
                      <div className='rounded-2xl w-[6.25rem] h-[6.25rem] overflow-hidden '>
                        <img src={searchThumb} alt='' />
                      </div>
                      <div className='rounded-2xl w-[6.25rem] h-[6.25rem] overflow-hidden '>
                        <img src={searchThumb} alt='' />
                      </div>
                      <div className='rounded-2xl w-[6.25rem] h-[6.25rem] overflow-hidden '>
                        <img src={searchThumb} alt='' />
                      </div>
                      <div className='rounded-2xl w-[6.25rem] h-[6.25rem] overflow-hidden '>
                        <img src={searchThumb} alt='' />
                      </div>
                    </div>
                  </div>
                  <button
                    style={{ width: 'fit-content' }}
                    className='bg-[#888888] rounded-2xl mt-7 text-sm12 text-[#ffffff] font-medium px-2.5 py-1.5'
                  >
                    Clear All Recently Viewed
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="rightdiv py-3 bg-[#E6E6E6] flex"> */}
          <div className='group relative dropdown cursor-pointer  py-3 bg-[#E6E6E6]'>
            <a className=' px-4 text-primaryGray text-sm14 font-medium'>
             {selectItems !== null ? selectItems : "All Items"}
              <img
                className='inline-block ml-2'
                src={dropArrow}
                alt=''
              />
            </a>
            <div className='group-hover:block  z-10 dropdown-menu absolute top-12 hidden h-auto w-[8.813rem]'>
              <ul className='top-0 bg-white shadow-dropShadow rounded-2xl bg-[#ffffff] hover:overflow-hidden'>
                <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]' onClick={() => setSelectItems('Art')}>
                  <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                    <img
                      src={artIcon}
                      className='inline-block mr-3'
                      alt=''
                    />
                    Art
                  </a>
                </li>
                <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]' onClick={() => setSelectItems('Photos')}>
                  <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                    <img
                      src={photoIcon}
                      className='inline-block mr-3'
                      alt=''
                    />
                    Photos
                  </a>
                </li>
                <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]' onClick={() => setSelectItems('Footage')}>
                  <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                    <img
                      src={footageIcon}
                      className='inline-block mr-3'
                      alt=''
                    />
                    Footage
                  </a>
                </li>
                <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]' onClick={() => setSelectItems('Music')}>
                  <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                    <img
                      src={musicIcon}
                      className='inline-block mr-3'
                      alt=''
                    />
                    Music
                  </a>
                </li>
                <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]' onClick={() => setSelectItems('Templates')}>
                  <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                    <img
                      src={templatesIcon}
                      className='inline-block mr-3'
                      alt=''
                    />
                    Templates
                  </a>
                </li>
                <li className='py-1 px-3.5 hover:bg-[#F0F0F0] ' onClick={() => setSelectItems('Products')}>
                  <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                    <img
                      src={productsIcon}
                      className='inline-block mr-3'
                      alt=''
                    />
                    Products
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <StyledPopup
            trigger={
              <button className='border-l border-[#DADADA] py-3.5 bg-[#E6E6E6] px-4 text-primaryGray text-sm14 font-medium'>
                <img
                  className='inline-block mr-2'
                  src={imageIcon}
                  alt=''
                />
                Search by image
              </button>
            }
            modal
          >
            {(close) => (
              <div className='bg-[#F9F9F9] border h-[21.75rem] border-[#F1F1F1] flex justify-center items-center rounded-3xl'>
                <div className='text-center'>
                  <p className='text-[38px] leading-[38px] font-semibold text-primaryBlack'>
                    Search by image
                  </p>
                  <p className='text-sm11 text-primaryGray mt-1 mb-4'>
                    Choose any of the methods below to start your
                    search
                  </p>
                  <p className='mb-3 text-sm18 font-semibold text-primaryBlack'>
                    Drag and drop your image here
                  </p>
                  <div className='flex gap-2.5 mx-auto justify-center'>
                    <button className='blackBtn'>
                      Choose a File
                    </button>
                    <button onClick={close} className='outlineBtn'>
                      Cancel
                    </button>
                  </div>
                  <p className='text-sm11 text-primaryGray mt-2.5'>
                    Your JPEG or PNG image can’t be larger than 4000px
                    in width <br /> and height, and must be smaller
                    than 5 MB in file size.
                  </p>
                </div>
              </div>
            )}
          </StyledPopup>

          <button className=' py-3.5 rounded-tr-3xl rounded-br-3xl bg-placeholderColor px-4 text-primaryBlack text-sm14 font-medium'>
            <img
              className='inline-block mr-2'
              src={searchIcon}
              alt=''
            />
            Search
          </button>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Mainbar;
