import React from 'react';
import leftarrow from '../../assets/images/ShoppingCart/leftarrow.png';
import cross from '../../assets/images/ShoppingCart/Rounded_Rectangle.png';
import removed_1 from '../../assets/images/ShoppingCart/removed_1.png';
import orderSummary from '../../assets/images/ShoppingCart/orderSummary.png';
import Paymentmethods from '../../assets/images/ShoppingCart/PaymentMethods.png';
import Checkmark from '../../assets/images/ShoppingCart/Checkmark.png';
import Footer from '../footer/Footer';
const ShoppingCart = () => {
  return (
    <>
      <div className='wrapper mb-[100px]'>
        <p className='bullet text-center mb-1'>
          Artnstock / Shopping Cart
        </p>
        <p className='text-[38px] text-[#333333] font-semibold text-center'>
          Shopping Cart
        </p>
        <div className='hrLine w-[50%]'></div>
        <div className='flex w-w930 mx-auto'>
          <div className='w-[35.625rem] shadow-[0px_5px_15px_rgba(0,0,0,0.28)] px-[20px] rounded-2xl'>
            <div className='flex justify-between'>
              <p className='pt-8 text-[12px] text-[#FF369F] leading-[1.2]'>
                This item has been removed from your cart.
              </p>
              <button>
                <img src={cross} alt='' />
              </button>
            </div>
            <div className='flex gap-2 pt-[10px] '>
              <div>
                <img src={removed_1} alt='' />
              </div>
              <div>
                <p className='text-[#333333] text-[18px] font-medium leading-[1]'>
                  Office Merchandise Combo
                </p>
                <p className='text-[11px] leading-[1]'>
                  by <span className='text-[#F9944C]'>Artnstock</span>
                </p>
                <div className='border-y-4 border-[#EFEFEF] mt-[7px] leading-[1.3]'>
                  <p className='text-[12px] text-[#757575]'>
                    Combo ID: ANS15994539
                  </p>
                  <p className='text-[12px] border-t-2 border-[#EFEFEF] text-[#757575]'>
                    Availability: In Stock{' '}
                    <img src={Checkmark} className='inline' alt='' />
                  </p>
                </div>
                <div>
                  <p className='mt-3 leading-[1.2]'>Description</p>
                  <p className='text-[#757575] mt-1 text-[12px] leading-[1.2]'>
                    International Artist Azra's work dictates <br />{' '}
                    the expression of man and <br /> beast exploring
                    our role and place in this universe.
                  </p>
                </div>
                <p className='pt-4 pb-3 text-[#F9944C] leading-[0.6]'>
                  $ <span className=' text-[25px]'>189.00</span>
                </p>
                <button className='blackBtn leading-[1.2]'>
                  Return item to the Cart
                </button>
                <div className='text-[#757575] text-[11px] flex gap-[10px] mt-[6px] mb-[20px] leading-[1]'>
                  <span>Edit</span>
                  <span>Delete</span>
                  <span>Move to Wishlist</span>
                </div>
              </div>
            </div>
          </div>
          {/* Second Section */}
          <div className='w-[22.5rem] pl-[30px] '>
            <div className='shadow-regCardShadow rounded-2xl overflow-hidden'>
              <div className='bg-[#808080] py-2.5 px-4 flex justify-between items-center'>
                <p className='text-[18px] leading-[1.2] text-[#FFFFFF] font-medium'>
                  Order Summary
                </p>
                <img src={leftarrow} alt='' />
              </div>
              <div className='bg-[#EEEEEE] px-4 py-2.5 flex items-center'>
                <div className='bg-[#333333] text-[#FFFFFF] rounded-full w-[25px] h-[25px] flex items-center justify-center'>
                  0
                </div>
                <p className='text-[13px] text-[#333333] ml-1 font-medium'>
                  Items in your cart
                </p>
              </div>
              <div className='bg-[#F9F9F9]'>
                <div className='mx-[15px]'>
                  {/*  */}
                  <div className='flex pt-[20px] justify-center'>
                    <div className='bg-[#FFFFFF] mt-[10px]  px-[10px] pb-[14px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] rounded-2xl flex justify-center'>
                      <div>
                        <div className='flex mt-[8px] text-center'>
                          <div className=' text-[#333333] flex border justify-center rounded-full py-2 px-[25px]'>
                            <img
                              src={orderSummary}
                              alt=''
                              className=''
                              // width="25px"
                              // height="15px"
                            />{' '}
                            <span className='text-[12px] flex items-center leading-[1.2]'>
                              Sign in to your Artnstock account
                            </span>
                          </div>
                        </div>
                        <div className='pt-[10px]'>
                          <p className='text-[13pt] text-[#333333]'>
                            Need Help?
                          </p>
                          <ul className='text-[9pt] text-[#878787] leading-[1.2]'>
                            <li>
                              <button>Shipping</button>
                            </li>
                            <li>
                              <button>Return & Exchanges</button>
                            </li>
                            <li>
                              <button>Contact Us</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center mt-2'>
                    <p className='text-[#878787] mb-1 leading-[1.2]'>
                      Accepted Payment Methods
                    </p>
                    <p className='flex justify-center pb-5'>
                      <img src={Paymentmethods} alt='' />
                    </p>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ShoppingCart;
