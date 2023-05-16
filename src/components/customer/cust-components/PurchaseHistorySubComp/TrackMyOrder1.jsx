import React from 'react';
import Tracker from '../../../../assets/images/purchase-history/Tracker.png';
import product1 from '../../../../assets/images/trackOrder/product1.png';

const TrackMyOrder1 = () => {
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

          <div className='w-w930 mb-16 mx-auto'>
            <div className='flex gap-[30px]'>
              <div>
                <p className='text-[25px] font-medium text-[#333333] leading-[0.8]'>
                  Shipment Tracking
                </p>
                <p className='text-[15px] text-[#333333] my-[15px]'>
                  In Transit:{' '}
                  <span className='text-[#00a656]'>On Time</span>
                </p>
                <p className='text-[12px] text-[#757575] leading-[0.8]'>
                  Expected Delivery:{' '}
                  <span className='text-[#00a656]'>
                    Thursday, Feb 11, 2021, by 8:00pm
                  </span>
                </p>
                <p className='text-[12px] text-[#757575] mt-3'>
                  Your package has left the Artnstock facility and is
                  on the way. <br />
                  (Updated 0 minute(s) ago)
                </p>
                <img src={Tracker} className='my-[30px]' alt='' />
                <p className='text-[15px] text-[#333333] font-medium'>
                  Tracking Details
                </p>
                <div className='h-[130px] w-[570px] mt-[10px] mb-[30px] border border-[#d6d6d6] rounded-2xl'>
                  <table className='mx-auto w-[570px]'>
                    <tr className='text-[#757575] border-b-2 border-[#d6d6d6] rounded-t-2xl h-[26px] text-[12px]'>
                      <td className='px-2'>
                        Courier collected by Courier service provider
                        (February 11, 2021, 1:48 am, Pune,
                        Maharashtra, India)
                      </td>
                    </tr>
                    <tr className='text-[#757575] border-b-2 border-[#d6d6d6] h-[26px] text-[12px]'>
                      <td className='px-2'>
                        Package has left Artnstock facility and is
                        transit to carrier
                      </td>
                    </tr>
                    <tr className='text-[#757575] border-b-2 border-[#d6d6d6] h-[26px] text-[12px]'>
                      <td className='px-2'></td>
                    </tr>
                    <tr className='text-[#757575] border-b-2 border-[#d6d6d6] h-[26px] text-[12px]'>
                      <td className='px-2'></td>
                    </tr>
                  </table>
                </div>
                <p className='text-[15px] text-[#333333] font-medium'>
                  Shipment Updates via Text
                </p>
                <p className='text-[12px] text-[#757575] leading-[1.3] mt-[10px]'>
                  Receive text updates on the status of all your
                  future shipments. <br /> Message and data rates may
                  apply.
                </p>
                <p className='text-[12px] text-[#757575] leading-[0.9] mt-[10px]'>
                  Your Mobile Number
                </p>
                <input
                  type='text'
                  name=''
                  id=''
                  className='regInput w-[210px] mt-1'
                  placeholder='Mobile Number'
                />
                <p className='flex gap-2 my-[10px]'>
                  <input type='checkbox' name='' id='' />{' '}
                  <label
                    htmlFor=''
                    className='text-[12px] text-[#757575]'
                  >
                    I agree to the <span>Terms and Conditions</span>{' '}
                    for this Program
                  </label>
                </p>
                <p>
                  <button className='blackBtn bg-[#8e8e8e] text-[#ffffff] mb-20'>
                    Sign Up
                  </button>
                </p>
              </div>
              <div className=''>
                <div className='border border-[#d6d6d6] rounded-2xl'>
                  <p className='py-2 bg-[#808080] text-[#ffffff] font-medium border-t-[1] border-[#d6d6d6] rounded-t-2xl px-[15px]'>
                    Shipment Information
                  </p>
                  <div className='p-[15px] bg-[#f9f9f9] border-b-[1] border-[#d6d6d6] rounded-b-2xl'>
                    <p className='mt-[13px] text-[15px] leading-[1]  text-[#333333]'>
                      Delivering to: <br />
                      <span className='text-[#757575] text-[12px] '>
                        Khalid Shaikh <br /> S. No. 203/2A, Plot 16A
                        Rajiv Nagar (South) <br /> Viman Nagar, Pune{' '}
                        <br /> Maharashtra, India
                      </span>
                    </p>
                    <p className='mt-5 text-[15px] leading-[1] text-[#333333]'>
                      Carrier: <br />{' '}
                      <span className='mt-1 text-[12px] text-[#757575]'>
                        lorem ipsum dolor set
                      </span>{' '}
                      <br />{' '}
                      <span className='text-[12px] text-[#757575]'>
                        icon +1234567890
                      </span>
                    </p>
                    <p className='mt-[20px]  leading-[1] text-[#333333] text-[15px]'>
                      Carrier Tracking #: <br />{' '}
                      <span className='text-[12px] text-[#757575]'>
                        987654321-12345
                      </span>
                    </p>
                    <p className='mt-[20px]  leading-[1] text-[#333333] text-[15px]'>
                      Order #: <br />
                      <span className='text-[12px] text-[#757575]'>
                        987654321-12345
                      </span>
                    </p>
                    <hr className='my-[21px]' />
                    <p className='text-[#333333]'>
                      Artnstock page contains:
                    </p>
                    <div className='flex py-[17px] gap-2'>
                      <img
                        src={product1}
                        className='w-[80px] h-[80px]'
                        alt=''
                      />
                      <div>
                        <p className='text-[15px] text-[#333333] font-medium'>
                          Office Merchandise <br /> Combo
                        </p>
                        <p className='text-[12px] text-[#757575]'>
                          Lorem ipsum dolor sit amet, consectetur
                          adipisicing eli
                        </p>
                      </div>
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

export default TrackMyOrder1;
