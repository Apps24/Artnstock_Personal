import React, { useEffect, useState } from 'react';
import { httpClient } from '../../../axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSubjectId } from '../../../store/subjectidSlice';

const LimitedEdition = ({ logo, type }) => {
  const [limitedList, setLimitedList] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getLimitedEdition();
  }, []);

  const getLimitedEdition = () => {
    httpClient
      .get(`/limited_edition_master/getTypeWiseList/${type}`)
      .then((res) => {
        // console.log(res);
        setLimitedList(res.data);
      });
  };

  return (
    <div className='w-w1440 mx-auto text-center'>
      <img src={logo} className='mx-auto' alt='' />
      <img
        src={limitedList?.headingImage}
        className='mx-auto my-2.5'
        alt=''
      />
      <button className='bg-[##EEEEEE] border border-[#E9E9E9] px-4 py-2 rounded-2xl text-sm14 leading-4 font-semibold text-primaryBlack '>
        {limitedList?.buttonText}
      </button>
      <img
        src={limitedList?.newText}
        className='mx-auto mt-5 mb-1'
        alt=''
      />
      <img
        src={limitedList?.merchTextImg}
        className='mx-auto'
        alt=''
      />
      <img
        src={limitedList?.mainImage}
        className='mx-auto mt-4 mb-5'
        alt=''
      />

      {type === 'home' ? (
        <button
          onClick={() => {
            navigate('/product-list');
            dispatch(setSubjectId(null));
          }}
          className='blackBtn mx-auto block'
        >
          Discover More
        </button>
      ) : (
        <button
          onClick={() => {
            navigate('/art-list');
            dispatch(setSubjectId(null));
          }}
          className='blackBtn mx-auto block'
        >
          Discover More
        </button>
      )}

      <p className='text-primaryGray text-sm11 mt-2.5'>
        {limitedList?.bottomText}
      </p>
    </div>
  );
};

export default LimitedEdition;
