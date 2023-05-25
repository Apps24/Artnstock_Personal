import React from "react";

const Wishlist = () => {
  return (
    <>
      <div className="wrapper text-center">
        <main>
          <div className="mt-[30px]">
            <p className="bullet text-center mb-1 text-[12px] text-[#757575]">Artnstock / My Wishlist</p>
            <p className="text-[38px] text-[#333333] font-medium text-center">
              My Wishlist
            </p>
          </div>

          <div className="mt-[30px]">
          <p className="text-[#ff369f] text-[18px]">You have no items in your wishlist.</p>
          <p className="mt-[10px] mb-[20px] text-[12px] text-[#757575]">To add items to your wishlist, simply click the 'Add to wishlist' link from any product page.</p>
          <button className="blackBtn text-[14px]">Start Here</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Wishlist;
