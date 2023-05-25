import React, { useState } from "react";
import orderSummary from "../../assets/images/ShoppingCart/orderSummary.png";
import Paymentmethods from "../../assets/images/ShoppingCart/PaymentMethods.png";
import Checkmark from "../../assets/images/ShoppingCart/Checkmark.png";
import Rounded_Rectangle from "../../assets/images/ShoppingCart/Rounded_Rectangle.png";
import leftarrow from "../../assets/images/ShoppingCart/leftarrow.png";
import wishlist1 from "../../assets/images/wishlist/wishlist1.png";
import wishlist2 from "../../assets/images/wishlist/wishlist2.png";
import wishlist3 from "../../assets/images/wishlist/wishlist3.png";

const wishlist = [
  {
    img: `${wishlist1}`,
    title: "Office Merchandise Combo",
    id: "15994539",
    availability: "In Stock",
    description:
      "International Artist Azra's art work dictates  the expression of man and beast exploring our role and place in this universe.",
    price: "189.00",
  },
  {
    img: `${wishlist2}`,
    title: "Nature vector art printed on mug",
    id: "15994539",
    availability: "In Stock",
    description:
      "International Artist Azra's art work dictates the expression of man and beast exploring our role and place in this universe.",
    price: "10.00",
  },
  {
    img: `${wishlist3}`,
    title: "Sunset art printed on Mouse Pad",
    id: "15994539",
    availability: "In Stock",
    description:
      "International Artist Azra's art work dictates the expression of man and beast exploring our role and place in this universe.",
    price: "10.00",
  },
];

const Wishlist2 = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div className="wrapper justify-center flex ">
        <main>
          <div className="mt-[30px]">
            <p className="bullet text-center mb-1">Artnstock / My Wishlist</p>
            <p className="text-[38px] text-[#333333] font-medium text-center">
              My Wishlist
            </p>
          </div>

          <div className="flex mt-[28px] flex-wrap w-w1168 pr-0">
            {wishlist?.map((item) => {
             return(
                <div
                  className="w-[570px] mt-[30px] 
                  pl-[18px] pt-[20px] rounded-[40px]"
                >
                  <div className="flex">
                    <div className="">
                      <img src={item.img} alt="" />
                    </div>
                    <div className=" pl-[20px]">
                      <p className="text-[18px] text-[#333333] font-medium">
                        {item.title}
                      </p>
                      <p className="text-[11px] pb-2 text-[#757575]">
                        by <span className="text-[#f88331]">Artnstock</span>
                      </p>
                      <div className="text-[11px] text-[#757575] border-t-2 border-[#d6d6d6] ">
                        <span className="text-[12px] font-medium">
                          Combo ID:
                        </span>{" "}
                        ANS{item.id}
                      </div>
                      <div className="text-[11pt] border-y-2 text-[#7e7e7e] border-[#d6d6d6]">
                        <span className="text-[12px] font-medium">
                          Availability:
                        </span>{" "}
                        <span className="text-[12px]">
                          {item.availability}
                          <img src={Checkmark} alt="" className="inline px-2" />
                        </span>
                      </div>
                      <p className="text-[15px] pt-3 font-medium text-[#333333]">
                        Description:
                      </p>
                      <p className="text-[11px] text-[#757575] leading-4">
                        {item.description}
                      </p>
                      <p className="text-[#f88331] my-3">
                        $ <span className="text-[25px]">{item.price}</span>
                      </p>

                      <button className="blackBtn flex items-center text-[12px] py-2">
                        Add to cart
                      </button>
                      <div className="mb-[24px] mt-[4px] text-[#7e7e7e]">
                        <ul className="flex gap-2 text-[#757575] text-[11px]">
                          <li>
                            <button  onClick={() => setPopup(true)}>
                              Remove from wishlist
                            </button>
                          </li>
                        </ul>
                      </div>
 
                    </div>
                  </div>
                </div>
             )
            })}
          </div>
        </main>
      </div>

      {/* Rollover */}
      {popup === true ? (
        <div className="bg-[#ffffff] w-[345px] py-8 px-[50px] rounded-2xl text-center absolute top-[17%] left-[40%] shadow-dropShadow">
          <p className="text-[#757575] text-[13px] leading-[1.2]">
            {" "}
            Are you sure you want to remove this item <br /> from your wishlist?
          </p>
          <div className="flex gap-[10px] mt-5 justify-center">
            <button className="blackBtn ">Yes</button>
            <button className="blackBtn bg-[#ffffff] text-[#333333] border border-[#333333] ">
              No
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Wishlist2;
