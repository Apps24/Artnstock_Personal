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

const Footer = () => {
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
              <div className='group relative dropdown cursor-pointer  pt-[0.45rem] bg-[#E6E6E6] w-[220px] h-[40px] bg-[#FFFFFF] rounded-[20px] mb-[15px]'>
                <a className=' px-4 text-primaryGray text-sm14 font-medium text-[#BBBBBB]'>
                  <img
                    className='inline-block mr-[10px]'
                    src={globe}
                    alt=''
                  />
                  English
                  <img
                    className='inline-block ml-[100px]'
                    src={dropdown}
                    alt=''
                  />
                </a>
                <div className='group-hover:block dropdown-menu absolute top-[2.55rem] hidden h-auto w-[8.813rem]'>
                  <ul className='top-0  bg-white shadow-dropShadow rounded-2xl bg-[#ffffff] hover:overflow-hidden'>
                    <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'>
                      <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                        <img
                          src=''
                          className='inline-block mr-3'
                          alt=''
                        />
                        Hindi
                      </a>
                    </li>
                    <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'>
                      <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                        <img
                          src=''
                          className='inline-block mr-3'
                          alt=''
                        />
                        French
                      </a>
                    </li>
                    <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'>
                      <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                        <img
                          src=''
                          className='inline-block mr-3'
                          alt=''
                        />
                        German
                      </a>
                    </li>
                    <li className='py-1 px-3.5 hover:bg-[#F0F0F0] '>
                      <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                        <img
                          src=''
                          className='inline-block mr-3'
                          alt=''
                        />
                        English
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex mb-[16px]'>
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
            <div className='flex-column gap-[60px] flex-wrap'>
              <div className='group relative dropdown cursor-pointer  pt-[0.45rem] bg-[#E6E6E6] w-[220px] h-[40px] bg-[#FFFFFF] rounded-[20px] mb-[15px]'>
                <a className=' px-4 text-primaryGray text-sm14 font-medium text-[#BBBBBB]'>
                  <img
                    className='inline-block mr-[10px]'
                    src={usflag}
                    alt=''
                  />
                  USD
                  <img
                    className='inline-block ml-[105px]'
                    src={dropdown}
                    alt=''
                  />
                </a>
                <div className='group-hover:block dropdown-menu absolute top-[2.55rem] hidden h-auto w-[8.813rem]'>
                  <ul className='top-0  bg-white shadow-dropShadow rounded-2xl bg-[#ffffff] hover:overflow-hidden'>
                    <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'>
                      <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                        <img
                          src=''
                          className='inline-block mr-3'
                          alt=''
                        />
                        INR
                      </a>
                    </li>
                    <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'>
                      <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                        <img
                          src=''
                          className='inline-block mr-3'
                          alt=''
                        />
                        JPY
                      </a>
                    </li>
                    <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'>
                      <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                        <img
                          src=''
                          className='inline-block mr-3'
                          alt=''
                        />
                        GBP
                      </a>
                    </li>
                    <li className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'>
                      <a className='block cursor-pointer text-[0.813rem] text-primaryGray font-normal hover:text-primaryBlack leading-[2.438rem]'>
                        <img
                          src=''
                          className='inline-block mr-3'
                          alt=''
                        />
                        USD
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
