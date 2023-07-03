import React, { useEffect, useState } from 'react';
import { ReactComponent as WishlistIcon } from '../assets/images/Icons/wishlistIcon.svg';
import { httpClient } from '../axios';
import { useSelector } from 'react-redux';

const Wishlist = ({ id, type, prodType }) => {
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
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToWishlist = (artId) => {
    let findId;
    wishlist.forEach((obj) => {
      if (obj.artMaster !== null) {
        if (obj.artMaster.artId === artId) {
          findId = true;
        }
      }
    });
    if (!findId) {
      const object = {
        artId: artId,
        id: userId,
      };
      httpClient.post(`/wishlist_master/save`, object).then((res) => {
        // console.log(res);
        getAllWishlistByUserId();
      });
    }
  };

  const wishlistDelete = async (id) => {
    wishlist?.forEach(async (obj) => {
      if (obj.artMaster.artId === id) {
        try {
          const res = await httpClient.delete(
            `/wishlist_master/delete/${obj.wishListId}`
          );
          getAllWishlistByUserId();
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  // productArt wishlist function

  const addToWishlistProd = (artProductId) => {
    console.log('here', artProductId);
    // const findId = wishlist.find(
    //   (obj) => obj.artProductMaster.artProductId === artProductId
    // );

    let findId;
    wishlist.forEach((wishlist) => {
      if (wishlist.artMaster === null) {
        if (
          wishlist.artProductMaster?.artProductId === artProductId
        ) {
          findId = undefined;
        }
      }
    });

    if (!findId) {
      const object = {
        artProductId: artProductId,
        id: userId,
      };
      httpClient.post(`/wishlist_master/save`, object).then((res) => {
        // console.log(res);
        getAllWishlistByUserId();
      });
    }
  };

  const wishlistDeleteProd = async (id) => {
    wishlist?.forEach(async (obj) => {
      if (obj.artProductMaster?.artProductId === id) {
        try {
          const res = await httpClient.delete(
            `/wishlist_master/delete/${obj.wishListId}`
          );
          getAllWishlistByUserId();
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  return (
    <>
      {prodType === 'product' ? (
        <div>
          {wishlist?.find(
            (obj) => obj.artProductMaster?.artProductId === id
          ) === undefined ? (
            <WishlistIcon
              onClick={() => {
                addToWishlistProd(id);
              }}
              style={{ fill: '#888888', width: '100%' }}
            />
          ) : (
            <WishlistIcon
              onClick={() => {
                wishlistDeleteProd(id);
              }}
              style={{
                fill: 'red',
                width: '100%',
              }}
            />
          )}
        </div>
      ) : (
        <div className='cursor-pointer'>
          {wishlist?.find((obj) => obj.artMaster?.artId === id) ===
          undefined ? (
            <WishlistIcon
              onClick={(e) => {
                addToWishlist(id);
                e.stopPropagation();
              }}
              style={{
                fill: `${type === 'small' ? '#888888' : '#fff'}`,
                // fill: '#888888',
                // width: '100%',
                width: `${type === 'large' ? '24px' : ''}`,
                height: `${type === 'large' ? '24px' : ''}`,
              }}
            />
          ) : (
            <WishlistIcon
              onClick={(e) => {
                wishlistDelete(id);
                e.stopPropagation();
              }}
              style={{
                fill: 'red',
                width: `${type === 'large' ? '24px' : ''}`,
                height: `${type === 'large' ? '24px' : ''}`,
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Wishlist;
