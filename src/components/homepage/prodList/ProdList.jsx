import React, { useEffect, useState } from 'react';
import { httpClient } from '../../../axios';
import prodWhiteIcon from '../../../assets/images/Icons/productsIconWhite.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSubjectId } from '../../../store/subjectidSlice';

const ProdList = ({ heading }) => {
  const [prodList, setProdList] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    httpClient.get('/product_master').then((res) => {
      //   console.log(res);
      setProdList(res.data);
    });
  };

  return (
    <div className='w-w1409 mx-auto text-center'>
      <p className='text-heading text-primaryBlack mb-7'>{heading}</p>
      <div className='grid grid-cols-5 gap-4'>
        {prodList.map((data, i) => {
          if (i <= 9) {
            return (
              <div key={data?.productId} className='w-[16.813rem]'>
                <div
                  onClick={() => {
                    dispatch(setSubjectId(data));
                    navigate('/product-list');
                  }}
                  className='h-[16.813rem] w-full group overflow-hidden rounded-2xl relative'
                >
                  <img src={data?.image} alt='' />
                  <div
                    className='group-hover:flex hidden bg-blackRgba items-center justify-center absolute top-0 left-0 text-center'
                    style={{ height: 'inherit', width: '100%' }}
                  >
                    <div>
                      <p className='text-heading text-[#ffffff] font-semibold'>
                        {data?.productName}
                      </p>
                      <p className='text-sm12 text-[#ffffff] font-medium'>
                        An Affair with array of Artistically <br />
                        Printed Products
                      </p>
                      <span className='text-[#FFFFFF] text-heading font-thin'>
                        745+
                      </span>
                    </div>
                    <img
                      className='absolute bottom-2.5 left-2.5'
                      src={prodWhiteIcon}
                      alt=''
                    />
                  </div>
                </div>
                <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                  {data?.productName}
                </p>
                <p className='text-primaryGray text-sm12 leading-[15px]'>
                  {data?.description}
                </p>
                <p className='text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5'>
                  ${data?.price}
                </p>
              </div>
            );
          }
        })}
      </div>
      <button
        onClick={() => {
          navigate('/product-list');
          dispatch(setSubjectId(null));
        }}
        className='blackBtn mx-auto block mt-7 mb-[50px] '
      >
        Discover More
      </button>
    </div>
  );
};

export default ProdList;
