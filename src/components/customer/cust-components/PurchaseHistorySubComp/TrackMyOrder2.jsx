import React, { useEffect, useState } from "react";
import Tracker from "../../../../assets/images/purchase-history/Tracker.png";
import Tracker2 from "../../../../assets/images/purchase-history/Tracker2.png";
import product1 from "../../../../assets/images/trackOrder/product1.png";
import Cards from "../../../../assets/images/purchase-history/Cards.png";
import Checkmark from "../../../../assets/images/trackOrder/Checkmark.png";
import { ListItem } from "@mui/material";
import { useLocation } from "react-router-dom";
import { httpClient } from "../../../../axios";



const TrackMyOrder2 = () => {
  const location = useLocation();
  const [orderData, setOrderData] = useState();

  useEffect(() => {
    getOrderTrack();
  }, [location]);

  const getOrderTrack = async () => {
    try {
      const res = await httpClient.get(
        `/order_master/getCartArtFrameUniqueNoWiseData/${location?.state?.cartArtFrameUniqueNo}/${location?.state?.orderId}`
      );
      console.log(res.data);
      setOrderData(res?.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="wrapper">
        <main>
          <p className="text-[#757575] text-[12px] text-center mt-[30px] ">
            Artnstock / Track My Order
          </p>
          <p className="text-center text-[38px] font-medium text-[#333333] mt-1 mb-5 leading-[1.2]">
            Track My Order
          </p>
          <p className="text-heading mt-[12px] text-center">Track My Order</p>

          <p className="text-[#757575] font-medium  text-[12px] text-center my-[20px] ">
            To track your order please enter your Order ID in the box below{" "}
            <br />
            and press the <span className="text-[#333333]">
              Track My Order
            </span>{" "}
            button. This was also given to you on your receipt and in the <br />
            confirmation email you should have received.
          </p>

          <div className="w-[371px] mx-auto ">
            <p className="text-[#757575] font-medium  text-[12px]  mb-1 ">
              Order ID
            </p>
            <input
              value={location?.state?.orderId}
              disabled={true}
              type="text"
              className="regInput mt-0"
              placeholder="Found in your order confirmation email"
            />
            <p className="text-[#757575] font-medium  text-[12px]  mb-1 mt-4">
              Biling Email
            </p>
            <input
              type="text"
              className="regInput mt-0 mb-5"
              placeholder="Email you used during checkout"
            />
            <button className="blackBtn mx-auto block">Track My Order</button>
          </div>
          <div className="h-[1px] w-w930 bg-[#efefef] my-[50px] mx-auto"></div>

          <div className="w-w930 mb-[50px] mt-[101px] mx-auto">
            <div className="flex gap-[30px]">
              <div>
                <p className="text-[25px] text-[#333333] font-medium">
                  <img src={Checkmark} className="inline" alt="" /> Thank you&nbsp;{orderData?.userFirstName}!
                </p>
                <p className="text-[15px] text-[#333333] font-medium">
                  Your Shipment has been delivered.
                </p>
                <p className="text-[12px] mt-1 text-[#757575]">
                  Your Shipment has been delivered to the address you provided.{" "}
                  <br /> If you havn't received it, or if you have any other
                  problem, <span>Please contact us</span> .
                </p>
                <p className="text-[15px] mt-3 text-[#333333] font-medium">
                  Carrier Tracking #:{" "}
                  <span className="text-[#757575]">9876543210-12345</span>
                </p>
                <p className="my-[33px]">
                  <img src={Tracker2} alt="" />
                </p>
                <p className="mb-[30px]">
                  <button className="blackBtn bg-[#8e8e8e] text-[#ffffff]">
                    Re-order the same items
                  </button>
                </p>
                <p className="text-[15px] text-[#333333] font-medium">
                  Your Contact Info
                </p>
                <p className="text-[13px] mt-2 text-[#757575] leading-[1.3]">
                  Name: {orderData?.userFirstName} {orderData?.userLastName} <br />
                  Email:ksgrafiks2012@gmail.com <br /> Contact No.: {orderData?.shippingAddress?.phoneNo}{" "}
                </p>
                <p className="text-[15px] text-[#333333] mt-5 font-medium">
                  Shipping Address
                </p>
                <p className="text-[13px] mt-2 text-[#757575] leading-[1.3]">
                  {orderData?.shippingAddress?.addressLine1}, {orderData?.shippingAddress?.addressLine2} <br /> {orderData?.shippingAddress?.cityName}, <br /> {orderData?.shippingAddress?.stateName}, {orderData?.shippingAddress?.countryName}
                </p>
                <p className="text-[15px] mt-[15px] text-[#333333] font-medium">
                  Shipping Method
                </p>
                <p className="text-[12px] text-[#757575] mt-2 leading-[1.3]">
                  <span className="text-[13px] font-medium ">Standard</span>{" "}
                  <br />{" "}
                  <span>Order Now to receive in 10-15 business days</span>{" "}
                  <br />{" "}
                  <span className="text-[#ff369f]">Promo code applied</span>
                </p>
                <p className="mt-5 text-[15px] text-[#333333]">
                  Payment Method
                </p>
                <p className="text-[#757575] text-[13px] mb-1">
                  Credit/Debit Card
                </p>
                <img src={Cards} alt="" />
              </div>
              <div className="">
                <div className="border border-[#d6d6d6] rounded-2xl">
                  <p className="py-2 bg-[#808080] text-[#ffffff] font-medium border-t-[1] border-[#d6d6d6] rounded-t-2xl px-[15px]">
                    Shipment Information
                  </p>
                  <div className="bg-[#eeeeee] text-[#333333] py-2 px-[15px] text-[13px]">
                    <span className="px-1.5 py-[0.9] rounded-full text-[#ffffff] bg-[#333333] ">
                      <span className="">1</span>
                    </span>{" "}
                    items
                  </div>
                  <div className="p-[15px] bg-[#f9f9f9] border-b-[1] border-[#d6d6d6] rounded-b-2xl">
                    
                        <div className="flex pb-[17px] gap-2">
                         <div className="w-[79px] h-[79px]">
                  <div
                    style={{
                      margin: `${
                        orderData?.orientationMaster?.shape === "Vertical" &&
                        "0 auto"
                      }`,
                      width: `${
                        orderData?.orientationMaster?.shape === "Vertical"
                          ? 79 * 0.7
                          : 79
                      }px`,
                      height: `${
                        orderData?.orientationMaster?.shape === "Horizontal"
                          ? 79 * 0.7
                          : 79
                      }px`,
                    }}
                  >
                    <img
                      src={orderData?.imgUrl}
                      className="w-[100%] h-[100%]"
                      alt=""
                    />
                  </div>
                </div>
                          <div>
                            <p className="text-[15px] text-[#333333] font-medium">
                              {orderData?.artFrameName}
                            </p>
                            <p className="text-[12px] text-[#757575]">
                              {orderData?.artDescription}
                            </p>
                            <p className="my-2 text-[#757575] text-[12px] leading-[1.2]">
                              Quantity: {orderData?.quantity}
                            </p>
                            <p className="text-[#f88331] text-[15px] leading-[0.9]">
                              {orderData?.price}
                              <br />{" "}
                              <span className="text-[11px]">
                                {orderData?.discount} Discount applied
                              </span>
                            </p>
                          </div>
                        </div>
                  
                  
                <div className="">
                  <div className="flex justify-between pb-[14px]">
                    <div className="leading-[1.2]">
                      <p className="text-[#333333] font-medium">
                        Your Cart Items
                      </p>
                      <p className="text-[11px] text-[#757575]">
                        includes $45 in items discounts
                      </p>
                    </div>
                    <p className="text-[#333333] font-medium leading-[1]">
                      ${orderData?.totalAmount}
                    </p>
                  </div>

                  <div className="flex justify-between pb-[14px]">
                    <div className="leading-[1.2]">
                      <p className="text-[#333333] font-medium">
                        Estimated Shipping
                      </p>
                      <p className="text-[11px] text-[#757575]">
                        Your Order will be shipped in 1 package
                      </p>{" "}
                    </div>
                    <p className="text-[#333333] font-medium leading-[1]">
                      ${orderData?.estimateShipping}
                    </p>
                  </div>
                  <div className="flex justify-between mb-[14px]">
                    <div className="leading-[1.2]">
                      <p className="text-[#333333] font-medium">Tax</p>
                      <p className="text-[11px] text-[#757575]">
                        Lorem Ipsum dolor set
                      </p>{" "}
                    </div>
                    <p className="text-[#333333] font-medium">
                      ${orderData?.taxAmount}
                    </p>
                  </div>
                  <div className="h-[1px] w-[100%]  bg-[#808080]"></div>
                  <div className="flex justify-between items-center  pt-[8px] pb-[8px]">
                    <div>
                      <p className="text-[#333333] font-medium text-[15px] leading-[14px] ">
                        Estimated Total
                      </p>
                      <p className="text-[11px] text-[#757575] leading-[14px]">
                        includes $45 in items discounts
                      </p>
                    </div>
                    <div className="text-[#F9944C] leading-[1.2] flex flex-col items-end">
                      <p>
                        ${" "}
                        <span className="text-[35px]">
                          {orderData?.finalAmount}
                        </span>
                      </p>
                      <p className="mt-0 pt-0 text-[#757575] text-[12px] tracking-tighter">
                        Show Price Details
                      </p>
                    </div>
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

export default TrackMyOrder2;
