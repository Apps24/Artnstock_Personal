import React, { useEffect } from "react";
import leftarrow from "../../assets/images/ShoppingCart/leftarrow.png";
import cross from "../../assets/images/ShoppingCart/Rounded_Rectangle.png";
import removed_1 from "../../assets/images/ShoppingCart/removed_1.png";
import orderSummary from "../../assets/images/ShoppingCart/orderSummary.png";
import Paymentmethods from "../../assets/images/ShoppingCart/PaymentMethods.png";
import Checkmark from "../../assets/images/ShoppingCart/Checkmark.png";
import minusIcon from "../../assets/images/Icons/minusIcon.svg";
import plusIcon from "../../assets/images/Icons/plusIcon.svg";
import Footer from "../footer/Footer";
import { httpClient } from "../../axios";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import msgBg from "../../assets/images/ShoppingCart/messageBG.png";
import { useNavigate } from "react-router-dom";
import { cartSliceAction } from "../../store/cartSlice";
import { toast } from "react-toastify";

const ShoppingCart = () => {
  const [cartData, setCartData] = useState();
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  // Gift and Promo code
  const [applyPromo, setApplyPromo] = useState(false);
  const [giftCode, setGiftCode] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const addGiftCode = async () => {
    try {
      const promoObj = {
        giftCode: String,
        userMasterId: String
      };
      promoObj.userId = userId;
      promoObj.giftCode = giftCode;
      console.log(promoObj);
    await  httpClient
        .put("/cart_master/UpdateEstimateAmountUsingGiftCode")
        .then((res) => {
          console.log(res.data);
          toast.success("added Gift code");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const addPromoCode = async () => {
    try {
      const promoObj = {
        promoCode: String,
        totalAmount: 0,
        userId: String
      };
      promoObj.userId = userId;
      promoObj.promoCode = promoCode;
      console.log(promoObj);
    await  httpClient
        .put("/cart_master/UpdateEstimateAmountUsingPromoCode")
        .then((res) => {
          console.log(res.data);
          toast.success("added promo code");
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserIdWiseCart();
  }, []);

  const getUserIdWiseCart = () => {
    httpClient
      .get(`/cart_master/getUserIdWiseCartData/${userId}`)
      .then((res) => {
        console.log(res.data);
        setCartData(res?.data);
      });
  };

  function addZeroes(num) {
    const dec = String(num).split(".")[1];
    const len = dec && dec.length > 1 ? dec.length : 2;
    return Number(num).toFixed(len);
  }

  const navigate = useNavigate();

  const gotoCheckout = () => {
    navigate("/checkout", { state: { userId: userId } });
  };

  const gotoCheckoutWithOne = async (cartArtFrameId) => {
    // for (let i = 0; i <= cartData?.cartArtFrameMaster.length; i++) {
    //   if (cartArtFrameId !== cartData?.cartArtFrameMaster[i]?.cartArtFrameId) {
    //     // console.log(cartData?.cartArtFrameMaster[i]?.cartArtFrameId);
    //     await removeOrder(cartData?.cartArtFrameMaster[i]?.cartArtFrameId);
    //   }
    // }

    navigate("/checkout", { state: { userId: userId } });

    // removeOrder
    //
  };

  const increaseCartQuantity = (cartArtFrameId) => {
    try {
      httpClient.get(`/cart_art_frame_master/IncreaseCartQty/${cartArtFrameId}`)
      .then((res) => {
        console.log(res.data);
        getUserIdWiseCart()
      })
    } catch (error) {
      console.log(error);
    }
  }
  const decreaseCartQuantity = (cartArtFrameId) => {
    try {
      httpClient.get(`/cart_art_frame_master/DecreaseCartQty/${cartArtFrameId}`)
      .then((res) => {
        console.log(res.data);
        getUserIdWiseCart()
      })
    } catch (error) {
      console.log(error);
    }
  }

  // Remove Order
  const cartCount = useSelector((state) => state.cart.cartCount);

  const removeOrder = async (cartArtFrameId) => {
    try {
      await httpClient
        .delete(`/cart_art_frame_master/deleteCart/${cartArtFrameId}`)
        .then((res) => {
          // console.log(res.data);
          getUserIdWiseCart();
          dispatch(cartSliceAction.setCartCount(cartCount - 1));
          return res.data;
        });
    } catch (err) {
      console.log(err);
      getUserIdWiseCart();
    }
  };

  

  return (
    <>
      <div className="pt-[30px] mb-[100px]">
        <p className="bullet text-center mb-1">Artnstock / Shopping Cart</p>
        <p className="text-heading text-center">Shopping Cart</p>
        <div className="flex w-w930 mx-auto mt-[30px]">
          <div className="w-[35.625rem] flex flex-col ">
            {cartData?.cartArtFrameMaster?.map((cart, i) => (
              <>
                <div key={cart?.cartArtFrameId} className="flex gap-3.5 ">
                  <div className="w-[209px] h-[209px]">
                    <div
                      style={{
                        margin: `${
                          cart?.["orientationMaster"]?.shape === "Vertical" &&
                          "0 auto"
                        }`,
                        width: `${
                          cart?.["orientationMaster"]?.shape === "Vertical"
                            ? 209 * 0.7
                            : 209
                        }px`,
                        height: `${
                          cart?.["orientationMaster"]?.shape === "Horizontal"
                            ? 209 * 0.7
                            : 209
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
                    <p className="text-[#333333] text-[18px] font-medium leading-[20px]">
                      {cart["artMaster"]?.artName}
                    </p>
                    <p className="text-[11px] leading-[1]">
                      by{" "}
                      <span className="text-[#F9944C]">
                        {cart?.artMaster?.userMaster?.displayName}
                      </span>
                    </p>
                    <div className="border-y-2 border-[#EFEFEF] mt-[7px] leading-[1.3]">
                      <p className="text-[12px] text-[#757575]">
                        Combo ID: {cart?.cartArtFrameUniqueNo}
                      </p>
                      <p className="text-[12px] border-t border-[#EFEFEF] text-[#757575]">
                        Availability: In Stock{" "}
                        <img src={Checkmark} className="inline" alt="" />
                      </p>
                    </div>
                    <div>
                      <p className="mt-2.5 leading-[1.2]">Description</p>
                      <p className="text-[#757575] w-[289px] mt-1 text-[12px] leading-[1.2]">
                        {cart?.description}
                      </p>
                    </div>
                    <p className="pt-4  text-[#F9944C] leading-[0.6]">
                      $
                      <span className=" text-[25px]">
                        {addZeroes(cart?.amount)}
                      </span>
                    </p>
                    <div
                      className="flex border-2 my-[12px] border-[#EEEEEE] rounded-3xl overflow-hidden"
                      style={{ width: "fit-content" }}
                    >
                      <button
                        className="bg-[#EEEEEE] py-2 px-2.5"
                        onClick={() => cart?.quantity > 1 && decreaseCartQuantity(cart?.cartArtFrameId)}
                      >
                        <img src={minusIcon} alt="" />
                      </button>
                      <input
                        className="w-[25px] text-[13px] leading-[15px] font-normal text-primaryGray text-center outline-none"
                        type="text"
                        value={cart?.quantity}
                      />
                      <button
                        className="bg-[#EEEEEE] py-2 px-2.5"
                        onClick={() => increaseCartQuantity(cart?.cartArtFrameId)}
                      >
                        <img
                          className="w-[11px] h-[11px]"
                          src={plusIcon}
                          alt=""
                        />
                      </button>
                    </div>
                    <button
                      onClick={() => gotoCheckoutWithOne(cart?.cartArtFrameId)}
                      className="blackBtn leading-[1.2]"
                    >
                      Checkout
                    </button>
                    <div className="text-[#757575] text-[11px] flex gap-[10px] mt-[6px] mb-[20px] leading-[1] cursor-pointer">
                      <span>Edit</span>
                      <span onClick={() => removeOrder(cart?.cartArtFrameId)}>
                        Delete
                      </span>
                      <span>Move to Wishlist</span>
                    </div>
                  </div>
                </div>
                {!(cartData?.cartArtFrameMaster.length - 1 === i) && (
                  <div className="h-[1px] w-[100%] bg-[#efefef] mt-[30px] mb-[28px]"></div>
                )}
              </>
            ))}
          </div>
          {/* Second Section */}
          <div className="w-[22.5rem] ">
            <div className="rounded-2xl overflow-hidden">
              <div className="bg-[#808080] py-2.5 px-4 flex justify-between items-center">
                <p className="text-[18px] leading-[1.2] text-[#FFFFFF] font-medium">
                  Order Summary
                </p>
                <img src={leftarrow} alt="" />
              </div>
              <div className="bg-[#EEEEEE] px-4 py-2.5 flex items-center">
                <div className="bg-[#333333] text-[#FFFFFF] rounded-full w-[25px] h-[25px] flex items-center justify-center">
                  {cartData?.totalCount}
                </div>
                <p className="text-[13px] text-[#333333] ml-1 font-medium">
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
                <div className="h-[2px] w-[100%] bg-[#808080]"></div>
                <div className="py-[15px]">
                  <div className="mb-[14px] flex justify-between">
                    <div>
                      <p className="text-[15px] leading-[14px] text-primaryBlack font-medium">
                        Your Cart items
                      </p>
                      <p className="text-[11px] leading-[14px] text-primaryGray">
                        Includes $45.00 in items discounts
                      </p>
                    </div>
                    <p className="text-[15px] text-primaryBlack  font-semibold">
                      ${addZeroes(cartData?.totalAmount)}
                    </p>
                  </div>
                  <div className="mb-[14px] flex justify-between">
                    <div>
                      <p className="text-[15px] leading-[14px] text-primaryBlack font-medium">
                        Estimated Shipping
                      </p>
                      <p className="text-[11px] leading-[14px] text-primaryGray">
                        Your order will be shipped in 1 package
                      </p>
                    </div>
                    <p className="text-[15px] text-primaryBlack  font-semibold">
                      ${addZeroes(cartData?.estimateShipping)}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[15px] leading-[14px] text-primaryBlack font-medium">
                        Tax
                      </p>
                      <p className="text-[11px] leading-[14px] text-primaryGray">
                        Lorem ipsum dolor set
                      </p>
                    </div>
                    <p className="text-[15px] text-primaryBlack  font-semibold">
                      ${addZeroes(cartData?.taxAmount)}
                    </p>
                  </div>
                </div>
                <div className="h-[1px] w-[100%] bg-[#808080]"></div>
                <div className="flex justify-between py-2 items-center">
                  <div>
                    <p className="text-[15px] leading-[14px] text-primaryBlack font-medium">
                      Estimated Total
                    </p>
                    <p className="text-[11px] leading-[14px] text-primaryGray">
                      Includes $45.00 in items discounts
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-[35px] text-orangeColor font-normal leading-[35px] tracking-tighter">
                      ${addZeroes(cartData?.estimateAmount)}
                    </p>
                    <p className="text-[12px] cursor-pointer text-primaryGray leading-[12px]">
                      Show Price Details
                    </p>
                  </div>
                </div>
                <div className="h-[2px] w-[100%] bg-[#808080]"></div>
                {/* Promo Code */}
                <div className="pt-[15px]">
                  <div className="flex gap-2 items-start">
                    <input
                      type="checkbox"
                      checked={applyPromo}
                      onChange={(e) => setApplyPromo(!applyPromo)}
                    />
                    <p className="text-[12px] text-primaryGray">
                      Apply Promo codes and Gift Cards <br />
                      (One Promo code per order)
                    </p>
                  </div>
                  {applyPromo && (
                    <div className="mt-2.5">
                      <div className="relative mb-2.5">
                        <input
                          type="text"
                          className="regInput mt-0 placeholder:text-[13px]"
                          placeholder="Enter Promo or Coupon code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button
                          onClick={addPromoCode}
                          className="text-primaryBlack bg-[#EEEEEE] border border-[#E9E9E9] rounded-2xl py-[0.45rem] px-2 text-[10px] leading-[10px] font-medium absolute top-2 right-2"
                        >
                          Add
                        </button>
                      </div>
                      <div className="relative ">
                        <input
                          type="text"
                          className="regInput mt-0 placeholder:text-[13px]"
                          placeholder="Enter Gift Card code"
                          value={giftCode}
                          onChange={(e) => setGiftCode(e.target.value)}
                        />
                        <button
                          onClick={addGiftCode}
                          className="text-primaryBlack bg-[#EEEEEE] border border-[#E9E9E9] rounded-2xl py-[0.45rem] px-2 text-[10px] leading-[10px] font-medium absolute top-2 right-2"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={gotoCheckout}
                  className="blackBtn mt-[20px] mx-auto mb-1.5 block"
                >
                  Continue to Checkout
                </button>
                <p className="text-sm11 text-primaryGray text-center">
                  By placing your order, you agree to the{" "}
                  <span className="text-orangeColor">Delivery Terms</span>.
                </p>

                <p className="text-sm11 text-primaryGray text-center mt-[20px]">
                  Accepted Payment Methods
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={gotoCheckout}
          className="blackBtn mt-[50px] block mx-auto"
        >
          Continue to Checkout
        </button>
      </div>
      <Footer />
    </>
  );
};
export default ShoppingCart;
