import React, { useEffect, useState } from 'react';
import { ReactComponent as WishlistIcon } from '../assets/images/Icons/wishlistIcon.svg';
import { httpClient } from '../axios';
import { useSelector } from 'react-redux';

const Wishlist = ({ id }) => {
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

  return (
    <div>
      {wishlist?.find((obj) => obj.artMaster?.artId === id) ===
      undefined ? (
        <WishlistIcon
          onClick={() => {
            addToWishlist(id);
          }}
          style={{ fill: '#888888', width: '100%' }}
        />
      ) : (
        <WishlistIcon
          onClick={() => {
            wishlistDelete(id);
          }}
          style={{
            fill: 'red',
            width: '100%',
          }}
        />
      )}
    </div>
  );
};

export default Wishlist;
