import React from "react";
import lock from "../../assets/images/ShoppingCart/lock.png";
import leftarrow from "../../assets/images/ShoppingCart/leftarrow.png";
import Cards from "../../assets/images/ShoppingCart/Cards.png";
import removed_1 from "../../assets/images/ShoppingCart/removed_1.png";
import orderSummary from "../../assets/images/ShoppingCart/orderSummary.png";
import Paymentmethods from "../../assets/images/ShoppingCart/PaymentMethods.png";
import Footer from "../footer/Footer";
const Checkout = () => {

  return (
    <>
      <div className="wrapper mb-[100px]">
        <p className="bullet text-center mb-1">
          Artnstock / Shopping Cart / Checkout
        </p>
        <p className="text-[38px] text-[#333333] font-semibold text-center">
          Checkout
        </p>
        <div className="flex mt-7 w-w930 mx-auto">
          <div className="w-[35.625rem]">
            <div className="flex items-center">
              <img src={lock} className="mr-2" alt="" />
              <p className="text-[12px] text-[#757575] ">
                Your information is secure. Your encrypted payment method will
                be saved for future orders. <br /> Manage your payment methods
                in your <span className="text-[#F9944C]">Account Settings</span>
                .
              </p>
            </div>{" "}
            <div>
              <p className="text-[25px] font-medium text-[#333333] mt-7 mb-4">
                Payment Method
              </p>
              <p className="text-[#757575] text-[12px] mt-[15px] mb-1">
                Select Payment Method
              </p>
              <div className="leading-[18px] text-[12px] rounded-[13px] text-[#757575] bg-[#f9f9f9] p-[16px] w-w557">
                <p>
                  <input type="radio" name="payment" className="mr-2" id="" />{" "}
                  Credit/Debit Card
                  <img src={Cards} alt="" className="inline ml-[15px]" />
                </p>
                <p>
                  <input type="radio" name="payment" className="mr-2" id="" />{" "}
                  Paypal
                </p>
              </div>
            </div>
            <div>
              <p className="text-[15px] font-medium text-[#333333] mt-[29px] mb-[20px]">
                Credit/Debit Card Information
              </p>
              <label htmlFor="" className="text-[12px] text-[#757575]">
                Card Type
              </label>
              <input
                type="text"
                name=""
                id=""
                className="regInput mt-0"
                placeholder="Select Card type"
              />
              <div className="flex gap-[14px] mt-4">
                <div>
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="Card Number"
                  />
                  <label htmlFor="">
                    <img src={Cards} alt="" />
                  </label>
                </div>
                <div>
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Month & Year
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="MM/YY"
                  />
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Expiration Date
                  </label>
                </div>
                <div>
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    CVC
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="123"
                  />
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Security Code
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[25px] font-medium text-[#333333] mt-7">
                Contact Information
              </p>
              <p className="mt-0 text-[11px] text-[#f95d99]">
                All fields are required.
              </p>

              <div>
                <p className="text-[15px] font-medium text-[#333333] my-[18px]">
                  Personal Details
                </p>
                <div className="mb-0">
                  <label
                    htmlFor=""
                    className="text-[12px] mt-[13px] mb-0 text-[#757575]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="Azra"
                  />
                </div>
                <div className="mt-[13px] mb-0">
                  <label
                    htmlFor=""
                    className="text-[12px] mt-[13px] mb-0 text-[#757575]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="Shaikh"
                  />
                </div>
                <div className="mt-[13px] mb-0">
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="ksgrafiks2012@gmail.com"
                  />
                </div>
              </div>

              <div>
                <p className="text-[15px] font-medium text-[#333333] mt-[33px] mb-[17px]">
                  Shipping Address
                </p>
                <div className="mb-0">
                  <label
                    htmlFor=""
                    className="text-[12px] mt-[13px] mb-0 text-[#757575]"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="India"
                  />
                </div>
                <div className="mt-[13px] mb-0">
                  <label
                    htmlFor=""
                    className="text-[12px] mt-[13px] mb-0 text-[#757575]"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="S. no. 203/2A,Plot 16A,Rajiv Nagar (South)"
                  />
                </div>
                <div className="mt-[13px] mb-0">
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="Viman Nagar,"
                  />
                </div>
                <div className="mt-[13px] mb-0">
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    City
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="Pune"
                  />
                </div>
                <div className="flex gap-[14px]">
                  <div className="mt-[13px] mb-0">
                    <label htmlFor="" className="text-[12px] text-[#757575]">
                      Zip/Postal Code
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="regInput mt-0"
                      placeholder="411404"
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label htmlFor="" className="text-[12px] text-[#757575]">
                      State/Province
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="regInput mt-0"
                      placeholder="Maharashtra"
                    />
                  </div>
                </div>
                <div className="mt-[13px] mb-0">
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Phone
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0 bg-[#eeeeee]"
                    placeholder="+91 7378666093"
                  />
                </div>
                <div className="mt-[13px] mb-0">
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Shipping Method
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="Select Shipping Method"
                  />
                </div>
                <p className="text-[11px] text-[#757575] mt-[13px] mb-[26px]">
                  All products are manufactured on-demand and ship from the
                  manufacturing facility located nearest to your destination
                  address. Gift cards are delivered instantly via e-mail.
                  International orders may take up to 10 days to arrive due to
                  FedEx/UPS delivery times. Please note - your government may
                  charge an import tax on products received from outside your
                  country. The import tax (if applicable) is not included in our
                  shipping charge.
                </p>
              </div>

              <div>
                <p className="text-[15px] font-medium text-[#333333] mt-[33px] ">
                  Residential Address
                </p>
                <p className="my-[17px] text-[#757575] flex gap-[7px]">
                  <input type="checkbox" />
                  My shipping and residential address are the same.
                </p>
                <div className="mb-0">
                  <label
                    htmlFor=""
                    className="text-[12px] mt-[13px] mb-0 text-[#757575]"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="India"
                  />
                </div>
                <div className="mt-[13px] mb-0">
                  <label
                    htmlFor=""
                    className="text-[12px] mt-[13px] mb-0 text-[#757575]"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="S. no. 203/2A,Plot 16A,Rajiv Nagar (South)"
                  />
                </div>
                <div className="mt-[13px] mb-0">
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="Viman Nagar,"
                  />
                </div>
                <div className="mt-[13px] mb-0">
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    City
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0"
                    placeholder="Pune"
                  />
                </div>
                <div className="flex gap-[14px]">
                  <div className="mt-[13px] mb-0">
                    <label htmlFor="" className="text-[12px] text-[#757575]">
                      Zip/Postal Code
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="regInput mt-0"
                      placeholder="411404"
                    />
                  </div>
                  <div className="mt-[13px] mb-0">
                    <label htmlFor="" className="text-[12px] text-[#757575]">
                      State/Province
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="regInput mt-0"
                      placeholder="Maharashtra"
                    />
                  </div>
                </div>
                <div className="mt-[13px] mb-0">
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Phone
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="regInput mt-0 bg-[#eeeeee]"
                    placeholder="+91 7378666093"
                  />
                </div>
                <div className="mt-[13px] mb-[36px]">
                  <label htmlFor="" className="text-[12px] text-[#757575]">
                    Shipping Method
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
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

          {/* Second Section */}

          <div className="w-[22.5rem] pl-[30px] ">
            <div className="shadow-regCardShadow rounded-2xl overflow-hidden">
              <div className="bg-[#808080] py-2.5 px-4 flex justify-between items-center">
                <p className="text-[18px] leading-[20px] text-[#FFFFFF] font-medium">
                  Order Summary
                </p>
                <img src={leftarrow} alt="" />
              </div>
              <div className="bg-[#EEEEEE] px-4 py-2.5 flex items-center">
                <div className="bg-[#333333] text-[#FFFFFF] rounded-full w-[25px] h-[25px] flex items-center justify-center">
                  3
                </div>
                <p className="text-[13px] leading-[20px] text-[#333333] ml-1 font-medium">
                  Items in your cart
                </p>
              </div>

              <div className="bg-[#f9f9f9]">
                <div className="mx-[15px]">
                  <div className="pt-[10px] pb-[40px] text-center bg-[url()]">
                    <p className="text-[12px] font-medium border rounded-full px-[15px] py-[8px]">
                      Shipping, Taxes, GST, and Promotional Discounts calculated
                      at Checkout
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <div>
                      <img src={removed_1} alt="" />
                    </div>
                    <div>
                      <p className="text-[#333333] text-[15px] font-medium">
                        Office Merchandise Combo
                      </p>
                      <p className="text-[#757575] text-[12px] leading-4">
                        International Artist Azra's work dictates the expression
                        of man and beast.
                      </p>
                      <p className="pt-[11px] text-[#F9944C] text-[15px] font-medium">
                        $200.00{" "}
                        <span className="text-[#757575] line-through">
                          $220.00
                        </span>
                      </p>
                      <p className="text-[#F9944C] text-[11px] mt-0">
                        10% Discount Applied
                      </p>
                      <p className="text-[#757575] text-[12px] flex gap-[10px] mb-[20px]">
                        <span>Edit</span>
                        <span>Delete</span>
                        <span>Move to Wishlist</span>
                      </p>
                    </div>
                  </div>

                  <div className=" border-y-4 pt-[18px] border-[#808080]">
                    <div className="flex justify-between pb-[15px]">
                      <p>
                        <p className="text-[#333333] font-medium">
                          Your Cart Items
                        </p>
                        <p className="text-[11px] text-[#757575]">
                          includes $45 in items discounts
                        </p>
                      </p>
                      <p className="text-[#333333] font-medium">$219.08</p>
                    </div>
                    <div className="flex justify-between pb-[15px]">
                      <p>
                        <p className="text-[#333333] font-medium">
                          Estimated Shipping
                        </p>
                        <p className="text-[11px] text-[#757575]">
                          Your Order will be shipped in 1 package
                        </p>{" "}
                      </p>
                      <p className="text-[#333333] font-medium">$5.00</p>
                    </div>
                    <div className="flex justify-between mb-[15px]">
                      <p>
                        <p className="text-[#333333] font-medium">Tax</p>
                        <p className="text-[11px] text-[#757575]">
                          Lorem Ipsum dolor set
                        </p>{" "}
                      </p>
                      <p className="text-[#333333] font-medium">$43.81</p>
                    </div>
                    <div className="flex justify-between items-center border-t-2 border-[#808080] pt-[12px] pb-[10px]">
                      <p>
                        <p className="text-[#333333] font-medium">
                          Estimated Total
                        </p>
                        <p className="text-[11px] text-[#757575]">
                          includes $45 in items discounts
                        </p>{" "}
                      </p>
                      <p className="text-[#F9944C]">
                        <p>
                          $ <span className="text-[35px]">267.89</span>{" "}
                        </p>
                        <p className="mt-0 pt-0 text-[#757575]">
                          Show Price Details
                        </p>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="my-[17px] text-[#757575] flex gap-[7px]">
                      <input type="checkbox" />
                      <p>
                        Apply Promo codes and Gift cards.
                        <p>(One Promo code per order)</p>
                      </p>
                    </p>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="regInput mt-0 mb-[10px]"
                        placeholder="Enter Promo or Coupon code"
                      />

                      <input
                        type="text"
                        name=""
                        id=""
                        className="regInput mt-0 mb-4"
                        placeholder="Enter Gift Card code"
                      />
                      <div className="flex justify-center mb-1.5">
                        <button className="blackBtn">
                          Continue to Checkout
                        </button>
                      </div>
                      <p className="text-[12px] text-[#757575] ">
                        By placing your order, you agree to the{" "}
                        <span className="text-[#F9944C]">Delivery Terms</span>.
                      </p>
                    </div>
                  </div>

                  {/*  */}

                  <div className="flex mt-[23px] justify-center">
                    <div className="bg-[#ffffff] mt-[10px]  px-[10px] pb-[14px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] rounded-2xl flex justify-center">
                      <div>
                        <div className="flex mt-[8px] text-center">
                          <p className=" text-[#333333] flex border justify-center rounded-full py-2 px-[25px]">
                            <img
                              src={orderSummary}
                              alt=""
                              className=""
                              // width="25px"
                              // height="15px"
                            />{" "}
                            <span className="text-[12px] flex items-center">
                              Sign in to your Artnstock account
                            </span>
                          </p>
                        </div>
                        <div className="pt-[10px]">
                          <p className="text-[13pt] text-[#333333]">
                            Need Help?
                          </p>
                          <ul className="text-[9pt] text-[#878787] leading-3.5">
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
                  <div className="text-center mt-2">
                    <p className="text-[#878787] mb-1">
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
      </div>
      <Footer />
    </>
  );
};
export default Checkout;
