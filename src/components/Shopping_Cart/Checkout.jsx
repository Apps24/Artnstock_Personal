import React, { useEffect, useState } from "react";
import lock from "../../assets/images/ShoppingCart/lock.png";
import leftarrow from "../../assets/images/ShoppingCart/leftarrow.png";
import Cards from "../../assets/images/ShoppingCart/Cards.png";
import removed_1 from "../../assets/images/ShoppingCart/removed_1.png";
import orderSummary from "../../assets/images/ShoppingCart/orderSummary.png";
import Paymentmethods from "../../assets/images/ShoppingCart/PaymentMethods.png";
import Footer from "../footer/Footer";
import msgBg from "../../assets/images/ShoppingCart/messageBG.png";
import { useLocation } from "react-router-dom";
import { httpClient } from "../../axios";
import checkBtnBackImg from "../../assets/images/ShoppingCart/CompleteOrderBG.svg";

import useRazorpay from "react-razorpay";
import logo from "../../assets/Favicon.svg";
import { orderModel } from "../../models/allModel";
import { toast } from "react-toastify";

const Checkout = () => {
  const [cartData, setCartData] = useState();
  const [userData, setUserData] = useState();
  const [paymentCheck, setPaymentCheck] = useState("card");
  const [finalCheckout, setFinalCheckout] = useState("false");

  let location = useLocation();

  useEffect(() => {
    getUserIdWiseCart(location?.state?.userId);
  }, [location?.state?.userId]);

  const getUserIdWiseCart = (userId) => {
    httpClient
      .get(`/cart_master/getUserIdWiseCartData/${userId}`)
      .then((res) => {
        console.log(res.data);
        setUserData(res?.data["userMaster"]);
        setCartData(res?.data);
      });
  };

  function addZeroes(num) {
    const dec = String(num).split(".")[1];
    const len = dec && dec.length > 1 ? dec.length : 2;
    return Number(num).toFixed(len);
  }

  // Razorpay
  const [orderId, setOrderId] = useState();
  const [Razorpay] = useRazorpay();

  const createOrder = async (amount) => {
    // console.log(amount);
    const res = await httpClient.get(`/payment/${amount}`);
    setOrderId(res?.data);
  };

  const handlePayment = async (amount) => {
    amount = amount * 100;
    await createOrder(amount);

    const options = {
      key: "rzp_test_HCTUbGUU3bXXQ6",
      amount: amount,
      currency: "INR",
      name: "Artnstock",
      description: "Test Transaction",
      image: logo,
      order_id: orderId,
      handler: async (res) => {
        console.log(res);
        if (res) await createNewOrder(res);
      },
      prefill: {
        name: `${userData?.userFirstName} ${userData?.userLastName}`,
        email: userData?.emailAddress,
        contact: userData?.shippingAddress?.phoneNo,
      },
      notes: {
        address: "Test",
      },
      theme: {
        color: "#9772FB",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.on("payment.failed", function (response) {
      toast.error("Something Went Wrong", response?.error?.description);
    });

    rzpay.open();
  };
  //End Razorpay

  // order Create
  const createNewOrder = async (paymentRes) => {
    //   {
    //     "razorpay_payment_id": "pay_MG1fxTeT3mr34J",
    //     "razorpay_order_id": "order_MG0wO31u2aNIFw",
    //     "razorpay_signature": "c12c45f998d441d55e00a5af05bf065c0d712122334ff7ef12c979f7147aeb94"
    // }
    try {
      orderModel.orderPaymentStatus = "Success";
      orderModel.paymentInformation.razorpayOrderId =
        paymentRes?.razorpay_order_id;
      orderModel.paymentInformation.razorpayPaymentId =
        paymentRes?.razorpay_payment_id;
      orderModel.paymentInformation.signature = paymentRes?.razorpay_signature;
      orderModel.paymentInformation.status = "Success"
      orderModel.userId = location?.state?.userId;
      let idArray = [];
      for (let i = 0; i < cartData?.cartArtFrameMaster.length; i++) {
        idArray.push(cartData?.cartArtFrameMaster[i]?.cartArtFrameId);
      }
      orderModel.cartArtFrameId = idArray;

      console.log(orderModel);
      await httpClient.post("/order_master/create", orderModel).then((res) => {
        console.log(res.data);
        toast.success("Order Successfull");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="wrapper pt-[30px] mb-[100px]">
        <p className="bullet text-center mb-1 leading-[1.2]">
          Artnstock / Shopping Cart / Checkout
        </p>
        <p className="text-[38px] text-[#333333] font-medium text-center leading-[1]">
          Checkout
        </p>
        <div className="flex mt-7 w-w930 mx-auto">
          {finalCheckout ? (
            <div className="w-[35.625rem]">
              <div className="flex items-center">
                <img src={lock} className="mr-2" alt="" />
                <p className="text-[12px] text-[#757575] leading-[1.2]">
                  Your information is secure. Your encrypted payment method will
                  be saved for future orders. <br /> Manage your payment methods
                  in your{" "}
                  <span className="text-[#F9944C]">Account Settings</span>.
                </p>
              </div>
              <div>
                <p className="text-[25px] font-medium text-[#333333] mt-7 mb-4 leading-[1.2]">
                  Payment Method
                </p>
                <p className="text-[#757575] text-[12px] mt-[15px] mb-1 leading-[1.2]">
                  Select Payment Method
                </p>
                <div className="leading-[1] text-[12px] rounded-[13px] text-[#757575] bg-[#f9f9f9] p-[16px] w-w557">
                  <div>
                    <input
                      type="radio"
                      onClick={() => setPaymentCheck("card")}
                      checked={paymentCheck === "card"}
                      name="payment"
                      className="mr-2"
                      id=""
                    />{" "}
                    Credit/Debit Card
                    <img src={Cards} alt="" className="inline ml-[15px]" />
                  </div>
                  <div>
                    <input
                      type="radio"
                      onClick={() => setPaymentCheck("paypal")}
                      checked={paymentCheck === "paypal"}
                      name="payment"
                      className="mr-2"
                      id=""
                    />{" "}
                    Paypal
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[15px] font-medium text-[#333333] mt-[29px] mb-[20px] leading-[1]">
                  Credit/Debit Card Information
                </p>
                <label className="text-[12px] text-[#757575] leading-[1]">
                  Card Type
                </label>
                <input
                  type="text"
                  className="regInput mt-0"
                  placeholder="Select Card type"
                />
                <div className="flex  mt-4">
                  <div className="w-[275px] mr-[16px]">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0 w-[100%]"
                      placeholder="Card Number"
                    />
                    <label className="mt-1" htmlFor="">
                      <img src={Cards} alt="" />
                    </label>
                  </div>
                  <div className="w-[131px] mr-2.5">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Month & Year
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder="MM/YY"
                    />
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Expiration Date
                    </label>
                  </div>
                  <div className="w-[134px]">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder="123"
                    />
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Security Code
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[25px] font-medium text-[#333333] mt-7 leading-[1]">
                  Contact Information
                </p>
                <p className="mt-0 text-[11px] text-[#f95d99] leading-[1]">
                  All fields are required.
                </p>

                <div>
                  <p className="text-[15px] font-medium text-[#333333] my-[18px] leading-[1]">
                    Personal Details
                  </p>
                  <div className="mb-0">
                    <label className="text-[12px] mt-[13px] mb-0 text-[#757575]  leading-[1]">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.userFirstName}
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] mt-[13px] mb-0 text-[#757575] leading-[1]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.userLastName}
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.emailAddress}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-[15px] font-medium text-[#333333] mt-[33px] mb-[17px] leading-[1]">
                    Shipping Address
                  </p>
                  <div className="mb-0">
                    <label className="text-[12px] mt-[13px] mb-0 text-[#757575] leading-[1]">
                      Location
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.shippingAddress?.countryName}
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] mt-[13px] mb-0 text-[#757575] leading-[1]">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.shippingAddress?.addressLine1}
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.shippingAddress?.addressLine2}
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      City
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.shippingAddress?.cityName}
                    />
                  </div>
                  <div className="flex gap-[14px]">
                    <div className="mt-[13px] mb-0">
                      <label className="text-[12px] text-[#757575] leading-[1]">
                        Zip/Postal Code
                      </label>
                      <input
                        type="text"
                        className="regInput mt-0"
                        placeholder={userData?.shippingAddress?.zipCode}
                      />
                    </div>
                    <div className="mt-[13px] mb-0">
                      <label className="text-[12px] text-[#757575] leading-[1]">
                        State/Province
                      </label>
                      <input
                        type="text"
                        className="regInput mt-0"
                        placeholder={userData?.shippingAddress?.stateName}
                      />
                    </div>
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0 bg-[#eeeeee]"
                      placeholder={userData?.shippingAddress?.phoneNo}
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Shipping Method
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder="Select Shipping Method"
                    />
                  </div>
                  <p className="text-[11px] text-[#757575] mt-[13px] mb-[26px] leading-[1.2]">
                    All products are manufactured on-demand and ship from the
                    manufacturing facility located nearest to your destination
                    address. Gift cards are delivered instantly via e-mail.
                    International orders may take up to 10 days to arrive due to
                    FedEx/UPS delivery times. Please note - your government may
                    charge an import tax on products received from outside your
                    country. The import tax (if applicable) is not included in
                    our shipping charge.
                  </p>
                </div>

                <div>
                  <p className="text-[15px] font-medium text-[#333333] mt-[33px] leading-[1]">
                    Residential Address
                  </p>
                  <div className="my-[17px] text-[#757575] flex gap-[7px] leading-[1]">
                    <input type="checkbox" />
                    My shipping and residential address are the same.
                  </div>
                  <div className="mb-0">
                    <label className="text-[12px] mt-[13px] mb-0 text-[#757575] leading-[1]">
                      Location
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.residentialAddress?.countryName}
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] mt-[13px] mb-0 text-[#757575] leading-[1]">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.residentialAddress?.addressLine1}
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.residentialAddress?.addressLine2}
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      City
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder={userData?.residentialAddress?.cityName}
                    />
                  </div>
                  <div className="flex gap-[14px]">
                    <div className="mt-[13px] mb-0">
                      <label className="text-[12px] text-[#757575] leading-[1]">
                        Zip/Postal Code
                      </label>
                      <input
                        type="text"
                        className="regInput mt-0"
                        placeholder={userData?.residentialAddress?.postalCode}
                      />
                    </div>
                    <div className="mt-[13px] mb-0">
                      <label className="text-[12px] text-[#757575] leading-[1]">
                        State/Province
                      </label>
                      <input
                        type="text"
                        className="regInput mt-0"
                        placeholder={userData?.residentialAddress?.stateName}
                      />
                    </div>
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0 bg-[#eeeeee]"
                      placeholder={userData?.residentialAddress?.phoneNo}
                    />
                  </div>
                  <div className="mt-[13px] mb-[36px]">
                    <label className="text-[12px] text-[#757575] leading-[1]">
                      Shipping Method
                    </label>
                    <input
                      type="text"
                      className="regInput mt-0"
                      placeholder="Select Shipping Method"
                    />
                  </div>

                  <div className="flex justify-end pr-[90px]">
                    <button className="blackBtn">Continue to Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[35.625rem]">
              <div className="flex items-center">
                <img src={lock} className="mr-2" alt="" />
                <p className="text-[12px] text-[#757575] leading-[1.2]">
                  Your information is secure. Your encrypted payment method will
                  be saved for future orders. <br /> Manage your payment methods
                  in your{" "}
                  <span className="text-[#F9944C]">Account Settings</span>.
                </p>
              </div>
              <div>
                <p className="text-[25px] font-medium text-[#333333] mt-7 mb-4 leading-[1.2]">
                  Payment Method
                </p>
                <p className="text-[#757575] text-[12px] mt-[15px] mb-1 leading-[1.2]">
                  Select Payment Method
                </p>
                <div className="leading-[1] text-[12px] rounded-[13px] text-[#757575] bg-[#f9f9f9] p-[16px] w-w557">
                  <div>
                    <input
                      type="radio"
                      onClick={() => setPaymentCheck("card")}
                      checked={paymentCheck === "card"}
                      name="payment"
                      className="mr-2"
                      id=""
                    />{" "}
                    Credit/Debit Card
                    <img src={Cards} alt="" className="inline ml-[15px]" />
                  </div>
                  <div>
                    <input
                      type="radio"
                      onClick={() => setPaymentCheck("paypal")}
                      checked={paymentCheck === "paypal"}
                      name="payment"
                      className="mr-2"
                      id=""
                    />{" "}
                    Paypal
                  </div>
                </div>
              </div>
              {/* User Details */}
              <div className="mt-[20px]">
                <p className="text-primaryBlack text-[15px] mb-2.5 font-semibold">
                  Your Contact Info
                </p>
                <p className="text-[13px] text-primaryGray">
                  Name:{userData?.userFirstName} {userData?.userLastName}
                </p>
                <p className="text-[13px] text-primaryGray">
                  Email:{userData?.emailAddress}
                </p>
                <p className="text-[13px] text-primaryGray">
                  Contact No.:{userData?.shippingAddress?.phoneNo}
                </p>
              </div>
              <div className="mt-[20px]">
                <p className="text-primaryBlack text-[15px] mb-2.5 font-semibold">
                  Shipping Address
                </p>
                <p className="text-[13px] text-primaryGray">
                  {userData?.shippingAddress?.addressLine1},
                </p>
                <p className="text-[13px] text-primaryGray">
                  {userData?.shippingAddress?.addressLine2},
                  {userData?.shippingAddress?.cityName}{" "}
                  {userData?.shippingAddress?.zipCode}.
                </p>
                <p className="text-[13px] text-primaryGray">
                  {userData?.shippingAddress?.stateName}
                </p>
                <p className="text-[13px] text-primaryGray">
                  {userData?.shippingAddress?.countryName}
                </p>
              </div>
              <div className="mt-[20px]">
                <p className="text-primaryBlack text-[15px] mb-2.5 font-semibold">
                  Shipping Method
                </p>
                <p className="text-[13px] text-primaryGray">Standard</p>
                <p className="text-[11px] text-primaryGray">
                  Order now to receive in 10-15 business days
                </p>
              </div>

              <div className="flex gap-2.5 mt-[20px] mb-[30px]">
                <input type="checkbox" defaultChecked="true" />
                <p className="text-[12px] text-primaryGray">
                  Send me news and exclusive offers from Artnstock
                </p>
              </div>

              <div className="w-[242px] h-[40px]">
                <div
                  onClick={() => handlePayment(cartData?.estimateAmount)}
                  className="w-[100%] h-[100%] flex justify-center items-center cursor-pointer"
                  style={{
                    background: `url(${checkBtnBackImg})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <p className="text-[18px] text-primaryBlack font-medium ">
                    Complete order for ${addZeroes(cartData?.estimateAmount)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Second Section */}
          <div className="w-[22.5rem] pl-[30px] ">
            <div className=" rounded-2xl overflow-hidden">
              <div className="bg-[#808080] py-2.5 px-4 flex justify-between items-center">
                <p className="text-[18px] leading-[20px] text-[#FFFFFF] font-medium">
                  Order Summary
                </p>
                <img src={leftarrow} alt="" />
              </div>
              <div className="bg-[#EEEEEE] px-4 py-2.5 flex items-center">
                <div className="bg-[#333333] text-[#FFFFFF] rounded-full w-[25px] h-[25px] flex items-center justify-center">
                  {cartData?.totalQty}
                </div>
                <p className="text-[13px] leading-[20px] text-[#333333] ml-1 font-medium">
                  Items in your cart
                </p>
              </div>

              <div className="px-[15px] pt-[10px] pb-[20px] bg-[#f9f9f9]">
                <div
                  className="h-[100%] w-[100%] py-1 mb-[20px]"
                  style={{
                    background: `url(${msgBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                >
                  <p className="text-[12px] text-primaryBlack font-semibold text-center">
                    Shipping, Taxes, GST, and Promotional Discounts <br />
                    calculated at Checkout.
                  </p>
                </div>
                <div className="h-[2px] w-[100%] my-[20px] bg-[#808080]"></div>
                <div className="flex flex-col">
                  {cartData?.cartArtFrameMaster?.map((cart, i) => (
                    <>
                      <div className="flex gap-2">
                        <div className="w-[79px] h-[79px]">
                          <div
                            style={{
                              margin: `${
                                cart?.["orientationMaster"]?.shape ===
                                  "Vertical" && "0 auto"
                              }`,
                              width: `${
                                cart?.["orientationMaster"]?.shape ===
                                "Vertical"
                                  ? 79 * 0.7
                                  : 79
                              }px`,
                              height: `${
                                cart?.["orientationMaster"]?.shape ===
                                "Horizontal"
                                  ? 79 * 0.7
                                  : 79
                              }px`,
                            }}
                          >
                            <img
                              src={cart?.imgUrl}
                              className="w-[100%] h-[100%]"
                              alt=""
                            />
                          </div>
                        </div>
                        <div>
                          <p className="text-[#333333] text-[15px] font-medium leading-[1.2]">
                            {cart?.artMaster?.artName}
                          </p>
                          <p className="text-[#757575] text-[12px] leading-[1.2]">
                            {cart?.description}
                          </p>
                          <p className="pt-[11px] text-[#F9944C] text-[15px] font-medium leading-[1.2]">
                            ${addZeroes(cart?.amount)}
                            <span className="text-[#757575] line-through ml-[5px]">
                              $220.00
                            </span>
                          </p>
                          <p className="text-[#F9944C] text-[11px] mt-0 leading-[1]">
                            10% Discount Applied
                          </p>
                          <p className="text-[#757575] text-[12px] flex gap-[10px]  leading-[1] mt-1 ">
                            <span>Edit</span>
                            <span>Delete</span>
                            <span>Move to Wishlist</span>
                          </p>
                        </div>
                      </div>
                      {!(cartData?.cartArtFrameMaster.length - 1 === i) && (
                        <div className="h-[1px] w-[100%] bg-[#efefef] mt-[30px] mb-[28px]"></div>
                      )}
                    </>
                  ))}
                </div>
                <div className="h-[2px] w-[100%] my-[20px] bg-[#808080]"></div>

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
                      ${addZeroes(cartData?.totalAmount)}
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
                      ${addZeroes(cartData?.estimateShipping)}
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
                      ${addZeroes(cartData?.taxAmount)}
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
                          {addZeroes(cartData?.estimateAmount)}
                        </span>
                      </p>
                      <p className="mt-0 pt-0 text-[#757575] text-[12px] tracking-tighter">
                        Show Price Details
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-[2px] w-[100%]  bg-[#808080]"></div>
                {/* Promocode */}
                <div className="pt-[15px]">
                  <div className="flex gap-2 items-start mb-2">
                    <input type="checkbox" />
                    <p className="text-[12px] text-primaryGray">
                      Apply Promo codes and Gift Cards <br />
                      (One Promo code per order)
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <div className="relative mb-2.5">
                      <input
                        type="text"
                        className="regInput mt-0 placeholder:text-[13px]"
                        placeholder="Enter Promo or Coupon code"
                      />
                      <button className="text-primaryBlack bg-[#EEEEEE] border border-[#E9E9E9] rounded-2xl py-[0.45rem] px-2 text-[10px] leading-[10px] font-medium absolute top-2 right-2">
                        Add
                      </button>
                    </div>
                    <div className="relative ">
                      <input
                        type="text"
                        className="regInput mt-0 placeholder:text-[13px]"
                        placeholder="Enter Gift Card code"
                      />
                      <button className="text-primaryBlack bg-[#EEEEEE] border border-[#E9E9E9] rounded-2xl py-[0.45rem] px-2 text-[10px] leading-[10px] font-medium absolute top-2 right-2">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setFinalCheckout(false)}
                  className="blackBtn mt-[20px] mx-auto mb-1.5 block"
                >
                  Continue to Checkout
                </button>
                <p className="text-sm11 text-primaryGray text-center">
                  By placing your order, you agree to the{" "}
                  <span className="text-orangeColor">Delivery Terms</span>.
                </p>

                <div className="text-center mt-4">
                  <p className="text-[#878787] mb-1 text-[11px] leading-[1.2]">
                    Accepted Payment Methods
                  </p>
                  <p className="flex justify-center pb-5">
                    <img src={Paymentmethods} alt="" />
                  </p>
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
export default Checkout;
