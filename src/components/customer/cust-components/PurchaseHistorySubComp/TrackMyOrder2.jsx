import React from 'react';
import Tracker from '../../../../assets/images/purchase-history/Tracker.png';
import Tracker2 from '../../../../assets/images/purchase-history/Tracker2.png';
import product1 from '../../../../assets/images/trackOrder/product1.png';
import Cards from '../../../../assets/images/purchase-history/Cards.png';
import Checkmark from '../../../../assets/images/trackOrder/Checkmark.png';
import { ListItem } from '@mui/material';

const orderItems = [
  {
    img: `${product1}`,
    title: 'Office Merchandise Combo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing eli',
    price: '$200.00',
    quantity: '1',
    discount: '10%',
  },
  {
    img: `${product1}`,
    title: 'Office Merchandise Combo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing eli',
    price: '$200.00',
    quantity: '1',
    discount: '10%',
  },
  {
    img: `${product1}`,
    title: 'Office Merchandise Combo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing eli',
    price: '$200.00',
    quantity: '1',
    discount: '10%',
  },
  {
    img: `${product1}`,
    title: 'Office Merchandise Combo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing eli',
    price: '$200.00',
    quantity: '1',
    discount: '10%',
  },
];

const TrackMyOrder2 = () => {
  let orderLength = orderItems.length;
  return (
    <>
      <div className='wrapper'>
        <main>
          <p className='text-[#757575] text-[12px] text-center mt-[30px] '>
            Artnstock / Track My Order
          </p>
          <p className='text-center text-[38px] font-medium text-[#333333] mt-1 mb-5 leading-[1.2]'>
            Track My Order
          </p>
          <p className='text-center text-[12px] text-[#757575]'>
            To track your order, Enter your OrderID in the box below{' '}
            <br /> and press the{' '}
            <span className='text-[#333333]'>Track My Order </span>
            button. This was also given to you on your receipt and in
            the <br /> confirmation email you should have received
          </p>
          <div className='flex justify-center mt-5'>
            <div className='leading-[0.6]'>
              <p className='text-[#757575] text-[12px]'>Order ID</p>
              <input
                type='text'
                name=''
                id=''
                className='regInput w-[369px] mb-[17px] text-[13px] font-medium'
                placeholder='Found in your order confirmation email'
              />
              <p className='text-[#757575] text-[12px]'>
                Billing Email
              </p>
              <input
                type='text'
                name=''
                id=''
                className='regInput w-[369px] mb-5 text-[13px] font-medium'
                placeholder='Email you used during checkout'
              />
            </div>
          </div>
          <p className='flex justify-center'>
            <button className='blackBtn'>Track My Order</button>
          </p>

          <div className='hrLine'></div>

          <div className='w-w930 mb-[50px] mt-[101px] mx-auto'>
            <div className='flex gap-[30px]'>
              <div>
                <p className='text-[25px] text-[#333333] font-medium'>
                  <img src={Checkmark} className='inline' alt='' />{' '}
                  Thank you Khalid!
                </p>
                <p className='text-[15px] text-[#333333] font-medium'>
                  Your Shipment has been delivered.
                </p>
                <p className='text-[12px] mt-1 text-[#757575]'>
                  Your Shipment has been delivered to the address you
                  provided. <br /> If you havn't received it, or if
                  you have any other problem,{' '}
                  <span>Please contact us</span> .
                </p>
                <p className='text-[15px] mt-3 text-[#333333] font-medium'>
                  Carrier Tracking #:{' '}
                  <span className='text-[#757575]'>
                    9876543210-12345
                  </span>
                </p>
                <p className='my-[33px]'>
                  <img src={Tracker2} alt='' />
                </p>
                <p className='mb-[30px]'>
                  <button className='blackBtn bg-[#8e8e8e] text-[#ffffff]'>
                    Re-order the same items
                  </button>
                </p>
                <p className='text-[15px] text-[#333333] font-medium'>
                  Your Contact Info
                </p>
                <p className='text-[13px] mt-2 text-[#757575] leading-[1.3]'>
                  Name: Khalid Shaikh <br />
                  Email:ksgrafiks2012@gmail.com <br /> Contact No.:
                  +91 7378666093{' '}
                </p>
                <p className='text-[15px] text-[#333333] mt-5 font-medium'>
                  Shipping Address
                </p>
                <p className='text-[13px] mt-2 text-[#757575] leading-[1.3]'>
                  S. No. 203/2A, Plot 16A Rajiv Nagar (South) <br />{' '}
                  Viman Nagar, Pune <br /> Maharashtra, India
                </p>
                <p className='text-[15px] mt-[15px] text-[#333333] font-medium'>
                  Shipping Method
                </p>
                <p className='text-[12px] text-[#757575] mt-2 leading-[1.3]'>
                  <span className='text-[13px] font-medium '>
                    Standard
                  </span>{' '}
                  <br />{' '}
                  <span>
                    Order Now to receive in 10-15 business days
                  </span>{' '}
                  <br />{' '}
                  <span className='text-[#ff369f]'>
                    Promo code applied
                  </span>
                </p>
                <p className='mt-5 text-[15px] text-[#333333]'>
                  Payment Method
                </p>
                <p className='text-[#757575] text-[13px] mb-1'>
                  Credit/Debit Card
                </p>
                <img src={Cards} alt='' />
              </div>
              <div className=''>
                <div className='border border-[#d6d6d6] rounded-2xl'>
                  <p className='py-2 bg-[#808080] text-[#ffffff] font-medium border-t-[1] border-[#d6d6d6] rounded-t-2xl px-[15px]'>
                    Shipment Information
                  </p>
                  <div className='bg-[#eeeeee] text-[#333333] py-2 px-[15px] text-[13px]'>
                    <span className='px-1.5 py-[0.9] rounded-full text-[#ffffff] bg-[#333333] '>
                      <span className=''>{orderLength}</span>
                    </span>{' '}
                    items
                  </div>
                  <div className='p-[15px] bg-[#f9f9f9] border-b-[1] border-[#d6d6d6] rounded-b-2xl'>
                    {orderItems.map((items) => {
                      return (
                        <div className='flex pb-[17px] gap-2'>
                          <img
                            src={items.img}
                            className='w-[80px] h-[80px]'
                            alt=''
                          />
                          <div>
                            <p className='text-[15px] text-[#333333] font-medium'>
                              {items.title}
                            </p>
                            <p className='text-[12px] text-[#757575]'>
                              {items.description}
                            </p>
                            <p className='my-2 text-[#757575] text-[12px] leading-[1.2]'>
                              Quantity: {items.quantity}
                            </p>
                            <p className='text-[#f88331] text-[15px] leading-[0.9]'>
                              {items.price}
                              <br />{' '}
                              <span className='text-[11px]'>
                                {items.discount} Discount applied
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                    <div className='border-y-2 border-[#808080]'>
                      <div className='flex justify-between mt-[15px]'>
                        <div>
                          <p className='text-[15px] text-[#333333]'>
                            Your Cart items
                          </p>
                          <p className='text-[12px] text-[#757575] leading-[1.2]'>
                            Includes $45 in items discounts
                          </p>
                        </div>
                        <p>$219.08</p>
                      </div>
                      <div className='flex justify-between my-[15px]'>
                        <div>
                          <p className='text-[15px] text-[#333333]'>
                            Shipping Charges
                          </p>
                          <p className='text-[12px] text-[#757575] leading-[1.2]'>
                            Your order will be shipped in 1 package
                          </p>
                        </div>
                        <p>$5.00</p>
                      </div>
                      <div className='flex justify-between mb-[15px]'>
                        <div>
                          <p className='text-[15px] text-[#333333]'>
                            Tax
                          </p>
                          <p className='text-[12px] text-[#757575] leading-[1.2]'>
                            Lorem ipsum dolor set
                          </p>
                        </div>
                        <p>$43.81</p>
                      </div>
                    </div>
                    <div className='flex justify-between border-b-4 border-[#808080] mt-[15px] mb-[30px]'>
                      <div>
                        <p className='text-[15px] text-[#333333]'>
                          Total
                        </p>
                        <p className='text-[12px] text-[#757575] mb-[15px]'>
                          Includes $45 in items discounts
                        </p>
                      </div>
                      <p>
                        $ <span>267.89</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TrackMyOrder2;
