import orderSummary from '../../assets/images/ShoppingCart/orderSummary.png';
import Paymentmethods from '../../assets/images/ShoppingCart/PaymentMethods.png';
import Checkmark from '../../assets/images/ShoppingCart/Checkmark.png';
import Rounded_Rectangle from '../../assets/images/ShoppingCart/Rounded_Rectangle.png';
import leftarrow from '../../assets/images/ShoppingCart/leftarrow.png';
import wishlist1 from '../../assets/images/wishlist/wishlist1.png';
import wishlist2 from '../../assets/images/wishlist/wishlist2.png';
import wishlist3 from '../../assets/images/wishlist/wishlist3.png';
import { httpClient } from '../../axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// const wishlist = [
//   {
//     img: `${wishlist1}`,
//     title: 'Office Merchandise Combo',
//     id: '15994539',
//     availability: 'In Stock',
//     description:
//       "International Artist Azra's art work dictates  the expression of man and beast exploring our role and place in this universe.",
//     price: '189.00',
//   },
//   {
//     img: `${wishlist2}`,
//     title: 'Nature vector art printed on mug',
//     id: '15994539',
//     availability: 'In Stock',
//     description:
//       "International Artist Azra's art work dictates the expression of man and beast exploring our role and place in this universe.",
//     price: '10.00',
//   },
//   {
//     img: `${wishlist3}`,
//     title: 'Sunset art printed on Mouse Pad',
//     id: '15994539',
//     availability: 'In Stock',
//     description:
//       "International Artist Azra's art work dictates the expression of man and beast exploring our role and place in this universe.",
//     price: '10.00',
//   },
// ];

const Wishlist2 = () => {
  const [popup, setPopup] = useState(false);

  const [wishlist, setwishlist] = useState();

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    getAllWishlistByUserId();
  }, []);

  const getAllWishlistByUserId = async () => {
    try {
      const res = await httpClient.get(
        `/wishlist_master/getByUserIdList/${userId}`
      );
      setwishlist(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [deletewishid, setdeletewishid] = useState('');

  const wishlistDelete = async (wishlistId) => {
    if (deletewishid !== '') {
      try {
        const res = await httpClient.delete(
          `/wishlist_master/delete/${wishlistId}`
        );
        console.log(res.data);

        setdeletewishid('');
        getAllWishlistByUserId();
      } catch (error) {
        console.error(error);
        setdeletewishid('');
      }
    }
  };

  return (
    <>
      {wishlist?.length > 0 ? (
        <div>
          <div className='wrapper justify-center flex '>
            <main>
              <div className='mt-[30px]'>
                <p className='bullet text-center mb-1'>
                  Artnstock / My Wishlist
                </p>
                <p className='text-[38px] text-[#333333] font-medium text-center'>
                  My Wishlist
                </p>
              </div>

              <div className='flex flex-wrap gap-[30px] mt-[28px] w-[100%] max-w-[1170px]'>
                {wishlist?.map((item) => {
                  return (
                    <div
                      className='w-[570px]
                 rounded-[40px] flex justify-between'
                    >
                      <div
                        style={{
                          backgroundImage: `url(${item.artMaster.image})`,
                        }}
                        className='w-[210px] h-[210px] bg-cover bg-no-repeat rounded-[16px]'
                      ></div>
                      <div className='w-[345px]'>
                        <p className='text-[18px] text-[#333333] font-medium'>
                          {item.artMaster.artName}
                        </p>
                        <p className='text-[11px] pb-2 text-[#757575]'>
                          by{' '}
                          <span className='text-[#f88331]'>
                            Artnstock
                          </span>
                        </p>
                        <div className='text-[11px] text-[#757575] border-t-2 border-[#d6d6d6] '>
                          <span className='text-[12px] font-medium'>
                            Combo ID:
                          </span>{' '}
                          {item.artMaster.arProductNo}
                        </div>
                        <div className='text-[11pt] border-y-2 text-[#7e7e7e] border-[#d6d6d6]'>
                          <span className='text-[12px] font-medium'>
                            Availability:
                          </span>{' '}
                          <span className='text-[12px]'>
                            {item.artMaster.stock > 0 ? (
                              <div>
                                In Stock
                                <img
                                  src={Checkmark}
                                  alt=''
                                  className='inline px-2'
                                />
                              </div>
                            ) : (
                              <p>No Stock Available</p>
                            )}
                            {/* {item.availability}
                          <img
                            src={Checkmark}
                            alt=''
                            className='inline px-2'
                          /> */}
                          </span>
                        </div>
                        <p className='text-[15px] pt-3 font-medium text-[#333333]'>
                          Description:
                        </p>
                        <p className='text-[11px] text-[#757575] leading-4'>
                          {item.artMaster.description}
                        </p>
                        <p className='text-[#f88331] my-3'>
                          ${' '}
                          <span className='text-[25px]'>
                            {item.artMaster.price}
                          </span>
                        </p>

                        <button className='blackBtn flex items-center text-[12px] py-2'>
                          Add to cart
                        </button>
                        <div className='mb-[24px] mt-[4px] text-[#7e7e7e]'>
                          <ul className='flex gap-2 text-[#757575] text-[11px]'>
                            <li>
                              <button
                                onClick={() => {
                                  setPopup(true);
                                  setdeletewishid(item.wishListId);
                                }}
                              >
                                Remove from wishlist
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </main>
          </div>

          {/* Rollover */}
          {popup === true ? (
            <div className='bg-[#ffffff] w-[345px] py-8 px-[50px] rounded-2xl text-center absolute top-[17%] left-[40%] shadow-dropShadow'>
              <p className='text-[#757575] text-[13px] leading-[1.2]'>
                {' '}
                Are you sure you want to remove this item <br /> from
                your wishlist?
              </p>
              <div className='flex gap-[10px] mt-5 justify-center'>
                <button
                  onClick={() => {
                    wishlistDelete(deletewishid);
                    setPopup(false);
                  }}
                  className='blackBtn'
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setPopup(false);
                  }}
                  className='blackBtn bg-[#ffffff] text-[#333333] border border-[#333333] '
                >
                  No
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div className='wrapper text-center'>
          <main>
            <div className='mt-[30px]'>
              <p className='bullet text-center mb-1 text-[12px] text-[#757575]'>
                Artnstock / My Wishlist
              </p>
              <p className='text-[38px] text-[#333333] font-medium text-center'>
                My Wishlist
              </p>
            </div>

            <div className='mt-[30px]'>
              <p className='text-[#ff369f] text-[18px]'>
                You have no items in your wishlist.
              </p>
              <p className='mt-[10px] mb-[20px] text-[12px] text-[#757575]'>
                To add items to your wishlist, simply click the 'Add
                to wishlist' link from any product page.
              </p>
              <button className='blackBtn text-[14px]'>
                Start Here
              </button>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Wishlist2;
