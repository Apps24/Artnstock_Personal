import React from 'react';
import mainLogo from '../../assets/images/header/mainLogo.svg';
import fb from '../../assets/images/socials/fb.png';
import twitter from '../../assets/images/socials/twitter.png';
import linked from '../../assets/images/socials/linked.png';
import insta from '../../assets/images/socials/insta.png';
import cards from '../../assets/images/socials/Cards.png';
import signup from '../../assets/images/socials/signupart.png';
import globe from '../../assets/images/socials/globe.png';
import usflag from '../../assets/images/socials/usflag.jpg';
import dropdown from '../../assets/images/socials/dropdown.png';
import signuptext from '../../assets/images/Icons/signup.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [isOpenCurr, setIsOpenCurr] = useState(false);
  return (
    <div className='footer'>
      <div className='footer-top text-center text-14px bg-[#F5F5F5] h-[38px] flex justify-center items-center'>
        <p className='class="font-normal text-[14px] leading-4 text-[#757575]'>
          Help us improve your
          <span className='text-[#333333]'>
            {' '}
            Artnstock experience.
          </span>
          <span className='text-[#F7941D]'> Send feedback.</span>
        </p>
      </div>
      <div className='footer-bottom lg:pl-[255px] lg:pr-[255px] pt-[40px] pb-[23px] bg-[#CCCCCC]'>
        <img
          className='w-[217.92px] h-[38px]'
          src={mainLogo}
          alt=''
        />{' '}
        <br />
        {/* <hr className='-w[100%] border-[#BCBCBC] mt-[11px] mb-[11px]' /> */}
        {/* list elements  */}
        <div className='flex flex-wrap gap-[75px]'>
          <div className='flex gap-[54px] flex-wrap '>
            {/* Column 1 bg-gray-100 h-16 */}
            <div className='w-[120px] '>
              <p className='footerHeadings'>COMPANY</p>

              <p className='footerLinks'>
                <Link to='/AboutUs'>About Us</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/ArtnstockMagazine'>
                  ArtnStock Magazine
                </Link>
              </p>

              <p className='footerLinks'>
                <Link to='/PressMedia'>Press/Media</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/Blog'>Blog</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/Careers'>Careers</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/ContactUs'>Contact Us</Link>
              </p>
            </div>
            {/* Column 2 */}

            <div className=''>
              <p className='footerHeadings'>SHOP</p>

              <p className='footerLinks'>Art</p>

              <p className='footerLinks'>Images</p>

              <p className='footerLinks'>Footage</p>

              <p className='footerLinks'>Music</p>

              <p className='footerLinks'>Templates</p>

              <p className='footerLinks'>Products</p>
            </div>
            {/* Column 3 */}

            <div className=''>
              <p className='footerHeadings'>BUYERS</p>

              <p className='footerLinks'>
                <Link to='/PlansPricing'>Plans & Pricing</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/Offers'>Offers</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/PromoCode'>Promo Code</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/BuyerReferralProgram'>
                  Buyer Referral Program
                </Link>
              </p>

              <p className='footerLinks'>
                <Link to='/TrackMyOrder'>Track My Order</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/ShippingDelivery'>
                  Shipping & Delivery
                </Link>
              </p>

              <p className='footerLinks'>
                <Link to='/ReturnMyOrder'>Return My Order</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/ReturnPolicy'>Return Policy</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/BuyersSupportCenter'>
                  Buyers Support Center
                </Link>
              </p>
            </div>
            {/* Column 4 */}

            <div className=' '>
              <p className='footerHeadings'>CONTRIBUTORS</p>

              <p className='footerLinks'>
                <Link to='/BecomeContributor'>
                  Become A Contributor
                </Link>
              </p>

              <p className='footerLinks'>
                <Link to='/DownloadRealeaseForm'>
                  Download Realease Form
                </Link>
              </p>

              <p className='footerLinks'>
                <Link to='/ContributorReferralProgram'>
                  Contributor Referral Program
                </Link>
              </p>

              <p className='footerLinks'>
                <Link to='/ContributorSupportCenter'>
                  Contributor Support Center
                </Link>
              </p>
            </div>
            {/* Column 5 */}

            <div className=''>
              <p className='footerHeadings'>LEGAL</p>

              <p className='footerLinks'>
                <Link to='/TermsAndServices'>Terms of Service</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/LicenseAgreement'>License Agreement</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/PrivacyPolicy'>Privacy Policy</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/CopyrightTrademarkPolicy'>
                  Copyright & Trademark Policy
                </Link>
              </p>

              <p className='footerLinks'>
                <Link to='/CookiesSetting'>Cookies Settings</Link>
              </p>

              <p className='footerLinks'>
                <Link to='/CommunityGuidelines'>
                  Community Guidelines
                </Link>
              </p>

              <p className='footerLinks'>
                <Link to='/DNSMyPersonalInformation'>
                  Do Not Sell My Personal Information
                </Link>
              </p>
            </div>
          </div>

          <div className='flex gap-[10px] flex-wrap'>
            {/* Column 6 */}
            <div className='flex-column'>
              <div>
                <button
                  onClick={() => {
                    setIsOpenLang(!isOpenLang);
                  }}
                  className={`${
                    isOpenLang === true
                      ? 'rounded-t-[20px] shadow-dropShadowButton border-b'
                      : 'rounded-[20px]'
                  } w-[220px] border-[#EFEFEF] px-[15px] text-sm14 font-medium text-[#BBBBBB] h-[40px] bg-[#fff] flex items-center justify-between z-50`}
                >
                  <div className='flex gap-[10px]'>
                    <img src={globe} alt='' />
                    <span>English</span>
                  </div>
                  <div>
                    <img
                      className='inline-block'
                      src={dropdown}
                      alt=''
                    />
                  </div>
                </button>
                {isOpenLang && (
                  <ul className='shadow-dropShadow rounded-b-[20px] hover:overflow-hidden absolute bg-[#ffffff] text-center text-[13px] text-primaryGray w-[220px]'>
                    <li className='cursor-pointer h-[40px] flex items-center pl-[46px] hover:bg-[#f0f0f0] border-b border-[#EFEFEF]'>
                      English
                    </li>
                    <li className='cursor-pointer h-[40px] flex items-center pl-[46px] hover:bg-[#f0f0f0] border-b border-[#EFEFEF]'>
                      German
                    </li>
                    <li className='cursor-pointer h-[40px] flex items-center pl-[46px] hover:bg-[#f0f0f0]'>
                      French
                    </li>
                  </ul>
                )}
              </div>
              <div className='flex mb-[6px] mt-[15px]'>
                <img className='h-[16px] w-[8px]' src={fb} alt='' />
                <img
                  className='h-[13px] w-[16px] ml-[15px] mt-[3px]'
                  src={twitter}
                  alt=''
                />
                <img
                  className='h-[16px] w-[16px] ml-[15px]'
                  src={linked}
                  alt=''
                />
                <img
                  className='h-[16px] w-[16px] ml-[15px]'
                  src={insta}
                  alt=''
                />
              </div>
              <div className='w-[170px]'>
                <span className='font-medium text-[11px] leading-xs text-[#757575] w-[142px] inline-block'>
                  Accepted Payment Methods
                </span>{' '}
                <br />
                <img
                  className='w-[170px] h-[20px] inline-block'
                  src={cards}
                  alt=''
                />
              </div>
            </div>

            {/* Column 7 */}
            {/* Column 7 */}
            <div>
              <button
                onClick={() => {
                  setIsOpenCurr(!isOpenCurr);
                }}
                className={`${
                  isOpenCurr === true
                    ? 'rounded-t-[20px] shadow-dropShadowButton border-b'
                    : 'rounded-[20px]'
                } w-[220px] border-[#EFEFEF] px-[15px] text-sm14 font-medium text-[#BBBBBB] h-[40px] bg-[#fff] flex items-center justify-between z-50`}
              >
                <div className='flex gap-[10px]'>
                  <img src={usflag} alt='' />
                  <span>USD</span>
                </div>
                <div>
                  <img
                    className='inline-block'
                    src={dropdown}
                    alt=''
                  />
                </div>
              </button>
              {isOpenCurr && (
                <ul className='shadow-dropShadow rounded-b-[20px] hover:overflow-hidden absolute bg-[#ffffff] text-center text-[13px] text-primaryGray w-[220px]'>
                  <li className='cursor-pointer h-[40px] flex items-center pl-[46px] hover:bg-[#f0f0f0] border-b border-[#EFEFEF]'>
                    USD
                  </li>
                  <li className='cursor-pointer h-[40px] flex items-center pl-[46px] hover:bg-[#f0f0f0] border-b border-[#EFEFEF]'>
                    INR
                  </li>
                  <li className='cursor-pointer h-[40px] flex items-center pl-[46px] hover:bg-[#f0f0f0]'>
                    EUR
                  </li>
                </ul>
              )}
            </div>
            {/* end col7 */}
          </div>
        </div>
        <hr className='border-[#BCBCBC] mt-[20px] mb-[20px] h-[1px]' />
        <div className='flex justify-center flex-wrap'>
          <div
            style={{ backgroundImage: `url(${signup})` }}
            className='h-[220px] w-[225px] bg-no-repeat'
          >
            <img
              className='mt-[69px] ml-[30px]'
              src={signuptext}
              alt=''
            />
            <span className='ml-[112.7px] text-[13px] leading-[15.86px] font-medium'>
              for exclusive offers
            </span>
          </div>
          <div className='h-[220px] w-[225px] bg-[white] rounded-tr-[16px] rounded-br-[16px]'>
            <input
              className='border border-[#D6D6D6] rounded-[20px] w-[195px] mt-[50px] ml-[15px] placeholder:text-[13px] h-[32px] pl-[12px]'
              type='text'
              placeholder='Enter Email Address'
            />
            <button className='bg-[#333333] text-[white] rounded-[18px] w-[87px] h-[40px] text-[14px] leading-[20.56px] font-semibold ml-[15px] mt-[10px]'>
              Sign Up
            </button>
            <br />
            <div className='ml-[15px] '>
              <p className='text-[#757575] text-[11px] leading-[13.42px] font-normal mt-[5px]'>
                Artnstock is an online platform for promoting quality
                art created by artists worldwide.
              </p>
            </div>
          </div>
        </div>
        <p className='flex justify-center text-[#757575] text-[11px] leading-[11px] font-normal mt-[11px]'>
          Copyright 2023. Artnstock Private Limited. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
