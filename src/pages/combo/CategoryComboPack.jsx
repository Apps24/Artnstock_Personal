import minusIcon from '../../assets/images/Icons/minusIcon.svg';
import plusIcon from '../../assets/images/Icons/plusIcon.svg';
import certificateImg from '../../assets/images/static/Certificate.jpg';
import festiveImg from '../../assets/images/static/Festive Offer.jpg';
import vanIcon from '../../assets/images/Icons/vanIcon.svg';
import packingIcon from '../../assets/images/Icons/packingIcon.svg';

import viewIcon from '../../assets/images/Icons/viewIcon.svg';

import addIcon from '../../assets/images/Icons/addIcon.svg';
import wishlistIcon from '../../assets/images/Icons/wishlistIcon.svg';
import shareIcon from '../../assets/images/Icons/shareIcon.svg';
import byartnstock from '../../assets/images/combo/byartnstock.png';
import designUsed1 from '../../assets/images/combo/designUsed1.png';
import designUsed2 from '../../assets/images/combo/designUsed2.png';
import designUsed3 from '../../assets/images/combo/designUsed3.png';
import acceptPayment from '../../assets/images/combo/acceptPayment.png';
import Certificate1 from '../../assets/images/combo/Certificate1.png';
import Certificate2 from '../../assets/images/combo/Certificate2.png';
import Certificate3 from '../../assets/images/combo/Certificate3.png';

import azra1 from '../../assets/images/art-details/azra1.png';
import azra2 from '../../assets/images/art-details/azra2.png';
import azra3 from '../../assets/images/art-details/azra3.png';
import azra4 from '../../assets/images/art-details/azra4.png';
import azra5 from '../../assets/images/art-details/azra5.png';

import grp from '../../assets/images/art-details/grp.png';
import grp144 from '../../assets/images/art-details/grp144.png';
import { useLocation } from 'react-router-dom';
import { httpClient } from '../../axios';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';

import custImg from '../../assets/images/ComboPack/custImg.png';
import custImg2 from '../../assets/images/ComboPack/custImg2.png';
import custImg3 from '../../assets/images/ComboPack/custImg3.png';
import Stars from '../../assets/images/ComboPack/Stars.png';
import like from '../../assets/images/ComboPack/like.png';
import dropdown from '../../assets/images/socials/dropdown.png';

const CategoryComboPack = () => {
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

  const keywords = [
    'jjn',
    'jxnfrgrgtrhys',
    'jxnshhhy',
    'jxns',
    'jxnsyhyh',
    'jxns',
    'jxns',
    'jxnshyh',
    'jxns',
    'jxnshtgr',
    'ththtjxns',
    'jxnshththty',
    'jxnsthth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
    'jxnsthhth',
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

  const [list, setList] = useState(null);

  const [isOpenSortBy, setIsOpenSortBy] = useState(false);
  const [isOpenFilterBy, setIsOpenFilterBy] = useState(false);

  const location = useLocation();
  const combo = location.state?.data;

  // grid api call
  useEffect(() => {
    httpClient
      .get(`/combo_master/editComboMaster/${combo.comboId}`)
      .then((res) => {
        setList(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <div className='w-w1168 mx-auto mt-10'>
        <p className='bullet mb-0.5'>
          Artnstock / Merchandise / Lifestyle / Combo Pack
        </p>
        {list && (
          <div className='flex gap-[30px]'>
            <div className='left'>
              <div className='w-[35.625rem] h-[35.625rem] bg-[#F5F5F7] rounded-[30px] relative flex items-center justify-center'>
                {/* <div className='bg-primaryBlack text-[#ffffff] absolute top-[15px] left-[15px] text-[10px] font-normal leading-3.5 rounded-2xl py-0.5 px-2.5'>
                Exclusive
              </div> */}
                <div className='frameDiv relative flex justify-center'>
                  <img src={`${list.image}`} alt='' />
                  <div className='flex flex-col absolute bottom-[0px]'>
                    <div className='bg-pinkColor h-[30px] w-[30px] flex justify-center items-center rounded-[50%] text-[#fff] mx-[auto]'>
                      {list.count}
                    </div>
                    <p className='text-[11px] text-primaryGray'>
                      Products
                    </p>
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
                  {/* <img src={colorCicleImg} alt='' />
                <img src={blackCircleImg} alt='' />
                <img src={roomViewImg} alt='' />
                <img src={threeDImg} alt='' /> */}
                </div>
                <div className='flex gap-x-2.5'>
                  <img src={addIcon} alt='' />
                  <img src={wishlistIcon} alt='' />
                  <img src={shareIcon} alt='' />
                </div>
              </div>
            </div>
            <div className='w-[50%]'>
              <div className='w-[100%] flex justify-between'>
                <p className='text-[25px] text-primaryBlack font-medium leading-[1] mb-0.5'>
                  {list.title} <br /> from Artnstock
                </p>
                <img src={certificateImg} alt='' />
              </div>
              <img src={byartnstock} alt='' />
              <div className='mt-2 mb-7 border-t-2 border-b-2 border-[#EFEFEF]'>
                <table className='w-[100%]'>
                  <tr className='border-b border-[#EFEFEF]'>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[100px]'>
                      Product ID:
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                      {/* {artDetails?.arProductNo} */}
                    </td>
                  </tr>
                  <tr className='border-b border-[#EFEFEF]'>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                      Availability:
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                      {/* {artDetails?.stockStatus} */}
                    </td>
                  </tr>
                  <tr className=''>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                      Category:
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                      {/* Yes */}
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <p className='text-[15px] font-medium'>Description</p>

                <p className='text-[13px] text-primaryGray leading-[1.3]'>
                  {list.description}
                </p>
              </div>

              <div
                className='flex border-2 border-[#EEEEEE] rounded-3xl overflow-hidden mt-[28px]'
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

              <div className='flex items-baseline mt-[10px]'>
                <p className='text-orangeColor text-[22px] font-normal leading-[0.8]'>
                  $
                </p>
                <p className='text-orangeColor text-[38px] font-normal leading-[0.8]'>
                  {list.price}
                </p>
              </div>
              <p className='text-sm12 font-normal text-primaryGray leading-[1]'>
                Show Price Details
              </p>

              <div className='mt-5 flex gap-x-2.5 mb-1.5'>
                <button className='outlineBtn'>Add to Cart</button>
                <button className='blackBtn'>Shop Now</button>
              </div>

              <p className='text-primaryGray text-sm11 font-normal'>
                *GST, Branding, Logistics and Customized Packaging
                charges additional as applicable. <br />
                Returns and exchange.{' '}
                <span className='text-orangeColor'>Know more</span>
              </p>
              <div className='flex gap-x-2.5 my-7'>
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
                Please enter PIN code to check delivery time and Pay
                on Delivery Availability.
              </p>
              <img src={packingIcon} alt='' />
            </div>
          </div>
        )}
        <div className='hrLine w-[100%]'></div>

        <div className='text-center'>
          <p className='text-[18px] text-primaryBlack font-medium'>
            This Combo Pack includes 8 products
          </p>

          <table className='w-[690px] border-separate border-spacing-0 text-[12px] text-primaryGray mx-[auto] mb-[30px] mt-[4px]'>
            <tr className='h-[25px]'>
              <td className='border border-[#d6d6d6] font-medium rounded-tl-[10px] bg-[#f9f9f9] px-[5px]'>
                1
              </td>
              <td className='border-t border-r border-b border-[#d6d6d6] font-medium bg-[#f9f9f9]'>
                Slipper Water Bottle
              </td>
              <td className='border-t border-r border-b border-[#d6d6d6]'>
                Aluminium Bottle With Screw Top
              </td>
              <td className='border-t border-r border-b border-[#d6d6d6]'>
                750ml
              </td>
              <td className='border-t border-r border-b border-[#d6d6d6] rounded-tr-[10px] px-[10px]'>
                2
              </td>
            </tr>
            <tr className='h-[25px]'>
              <td className='border-l border-r border-b border-[#d6d6d6] font-medium bg-[#f9f9f9]'>
                2
              </td>
              <td className='border-r border-b border-[#d6d6d6] font-medium bg-[#f9f9f9]'>
                bhb
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                hvbc hbc hbc hbdcw{' '}
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                54ml
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                3
              </td>
            </tr>
            <tr className='h-[25px]'>
              <td className='border-l border-r border-b border-[#d6d6d6] font-medium bg-[#f9f9f9]'>
                2
              </td>
              <td className='border-r border-b border-[#d6d6d6] font-medium bg-[#f9f9f9]'>
                bhb
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                hvbc hbc hbc hbdcw{' '}
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                54ml
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                3
              </td>
            </tr>
            <tr className='h-[25px]'>
              <td className='border-l border-r border-b border-[#d6d6d6] font-medium bg-[#f9f9f9]'>
                2
              </td>
              <td className='border-r border-b border-[#d6d6d6] font-medium bg-[#f9f9f9]'>
                bhb
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                hvbc hbc hbc hbdcw{' '}
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                54ml
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                3
              </td>
            </tr>
            <tr className='h-[25px]'>
              <td className='border-l border-r border-b border-[#d6d6d6] font-medium bg-[#f9f9f9] rounded-bl-[10px]'>
                2
              </td>
              <td className='border-r border-b border-[#d6d6d6] font-medium bg-[#f9f9f9]'>
                bhb
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                hvbc hbc hbc hbdcw{' '}
              </td>
              <td className='border-r border-b border-[#d6d6d6]'>
                54ml
              </td>
              <td className='border-r border-b border-[#d6d6d6] rounded-br-[10px]'>
                3
              </td>
            </tr>
          </table>

          <div className='flex flex-col gap-[5px]'>
            <div className='flex justify-center gap-[15px]'>
              <div>
                <img src={designUsed1} alt='' />
              </div>
              <div>
                <img src={designUsed2} alt='' />
              </div>
              <div>
                <img src={designUsed3} alt='' />
              </div>
            </div>
            <p className='text-primaryGray text-[11px] leading-[1.1] mt-[4px]'>
              All artwork and designs used in this Combo remain the
              property of <br /> Artnstock Private Limited.
            </p>
          </div>
          <p className='text-primaryGray text-[11px] text-center leading-[1.2] mt-[25px]'>
            Note: There might be a slight variation in the shade of
            the <br /> actual product and the image shown on the
            screen, due to the screen resolution and photography
            effects.
          </p>
          <div className='flex gap-[15px] mt-[5px] justify-center'>
            <span className='text-[13px] text-primaryBlack'>
              FAQs
            </span>
            <span className='text-[13px] text-primaryBlack'>
              Returns and Refund
            </span>
            <span className='text-[13px] text-primaryBlack'>
              Ask a Question
            </span>
          </div>
          <div className='flex flex-col pt-[12px] gap-[7px]'>
            <p className='text-[15px] font-medium text-[#333333] flex justify-center'>
              Checkout securely with
            </p>
            <div className='flex justify-center'>
              <img src={acceptPayment} alt='' />
            </div>
            <div className=' py-[15px]'>
              <div className='flex justify-center gap-[18px]'>
                <p>
                  <img src={Certificate1} alt='' />
                </p>
                <p>
                  <img src={Certificate2} alt='' />
                </p>
                <p>
                  <img src={Certificate3} alt='' />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='hrLine w-[100%]'></div>
        <div>
          <p className='text-[18px] text-primaryBlack font-medium'>
            Related Keywords
          </p>
          <div className='flex flex-wrap gap-[5px]'>
            {keywords.map((obj) => (
              <div className='h-[26px] rounded-[13px] border border-[#dddddd] text-[11px] text-primaryGray p-[8px] flex justify-center items-center'>
                {obj}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* userDetails */}
      <div className='w-w1409 mx-[auto]'>
        <div className='hrLine w-[100%]'></div>
        <div className='w-w1409 flex justify-center mx-auto '>
          <div>
            <p className='text-[38px] font-medium text-center text-[#333333]'>
              More Combos from Artnstock
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
              <button className='blackBtn'>See All Combos</button>
            </p>
          </div>
        </div>
      </div>

      <div className='hrLine'></div>

      <div className='w-w1409 flex justify-center mx-auto'>
        <div>
          <p className='text-[38px] font-medium text-center text-[#333333]'>
            You may also like
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
            <button className='blackBtn'>See All Designs</button>
          </p>
        </div>
      </div>

      {/* <div className="hrLine"></div> */}

      <div className='bg-[#F7F7F7] mt-[25px]'>
        <p className='text-[25px] font-medium pt-[80px] text-primaryBlack text-center'>
          Recently Viewed
        </p>
        <div className='flex justify-center pb-[80px] gap-2 w-w1409 flex-wrap mx-auto text-center mb-7'>
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
      <div className='w-w1168 mx-auto mb-3 flex justify-between'>
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

export default CategoryComboPack;
