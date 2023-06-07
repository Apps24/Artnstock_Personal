import React, { useEffect, useState } from 'react';
// import { httpClient } from '../../../axios';
import artIcon from '../../../assets/images/Icons/ArtWhite.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSubjectId } from '../../../store/subjectidSlice';

const ArtGrid = ({ gridList, type }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   httpClient
  //     .get(`/subject_master/getTypeWiseSubjectList/art`)
  //     .then((res) => {
  //       setGridList(res.data);
  //       console.log(res);
  //     });
  // }, []);

  const artNextPage = (text) => {
    console.log(text);
    // /art-list
    navigate('/art-list');
  };

  return (
    <div className='w-w1168 mx-auto mt-10'>
      <p className='mb-[2px] bullet'>Artnstock / Art / Home</p>
      <p className='text-primaryBlack text-heading font-semibold text-center'>
        Exciting additions to our <br />
        Art Collections
      </p>
      <p className=' text-sm14 font-normal mt-[9px] text-center text-primaryGray'>
        We have a distinct taste in art we offer, in multiple products
        and sizes to fit any decor style or budget. Our art collection
        will open new horizons <br />
        for your visual projects and would be a perfect solution for
        anyone who needs high-quality art at affordable prices.
      </p>
      <div className=' grid grid-cols-4 gap-4 my-7'>
        {/* Grid 1 */}
        <div
          onClick={() => {
            console.log(gridList[0]);
            dispatch(setSubjectId(gridList[0]));
            if (type === 'product') {
              navigate('/product-list');
            } else {
              navigate('/art-list');
            }
          }}
          className='row-span-4 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[0]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `576px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading '>
                {gridList[0]?.subjectName}
              </p>
              <p className='text-[#FFFFFF] text-sm12 font-medium w-[13.125rem]'>
                {gridList[0]?.subjectDescription}
              </p>
              <span className='text-[#FFFFFF] text-heading font-thin'>
                745+
              </span>
            </div>
            <img
              className='absolute bottom-2.5 left-2.5'
              src={artIcon}
              alt=''
            />
          </div>
        </div>
        {/* Grid 2 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[1]));
            if (type === 'product') {
              navigate('/product-list');
            } else {
              navigate('/art-list');
            }
          }}
          className='row-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[1]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `280px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading '>
                {gridList[1]?.subjectName}
              </p>
              <p className='text-[#FFFFFF] text-sm12 font-medium w-[13.125rem]'>
                {gridList[1]?.subjectDescription}
              </p>
              <span className='text-[#FFFFFF] text-heading font-thin'>
                745+
              </span>
            </div>
            <img
              className='absolute bottom-2.5 left-2.5'
              src={artIcon}
              alt=''
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[2]));
            if (type === 'product') {
              navigate('/product-list');
            } else {
              navigate('/art-list');
            }
          }}
          className='row-span-2 col-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[2]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `280px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading '>
                {gridList[2]?.subjectName}
              </p>
              <p className='text-[#FFFFFF] text-sm12 font-medium w-[13.125rem]'>
                {gridList[2]?.subjectDescription}
              </p>
              <span className='text-[#FFFFFF] text-heading font-thin'>
                745+
              </span>
            </div>
            <img
              className='absolute bottom-2.5 left-2.5'
              src={artIcon}
              alt=''
            />
          </div>
        </div>
        {/* Grid 4 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[3]));
            if (type === 'product') {
              navigate('/product-list');
            } else {
              navigate('/art-list');
            }
          }}
          className='row-span-2 col-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[3]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `280px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading '>
                {gridList[3]?.subjectName}
              </p>
              <p className='text-[#FFFFFF] text-sm12 font-medium w-[13.125rem]'>
                {gridList[3]?.subjectDescription}
              </p>
              <span className='text-[#FFFFFF] text-heading font-thin'>
                745+
              </span>
            </div>
            <img
              className='absolute bottom-2.5 left-2.5'
              src={artIcon}
              alt=''
            />
          </div>
        </div>
        {/* Grid 5 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[4]));
            if (type === 'product') {
              navigate('/product-list');
            } else {
              navigate('/art-list');
            }
          }}
          className='row-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[4]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `280px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading '>
                {gridList[4]?.subjectName}
              </p>
              <p className='text-[#FFFFFF] text-sm12 font-medium w-[13.125rem]'>
                {gridList[4]?.subjectDescription}
              </p>
              <span className='text-[#FFFFFF] text-heading font-thin'>
                745+
              </span>
            </div>
            <img
              className='absolute bottom-2.5 left-2.5'
              src={artIcon}
              alt=''
            />
          </div>
        </div>
        {/* Grid 6 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[5]));
            if (type === 'product') {
              navigate('/product-list');
            } else {
              navigate('/art-list');
            }
          }}
          className='row-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[5]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `280px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading '>
                {gridList[5]?.subjectName}
              </p>
              <p className='text-[#FFFFFF] text-sm12 font-medium w-[13.125rem]'>
                {gridList[5]?.subjectDescription}
              </p>
              <span className='text-[#FFFFFF] text-heading font-thin'>
                745+
              </span>
            </div>
            <img
              className='absolute bottom-2.5 left-2.5'
              src={artIcon}
              alt=''
            />
          </div>
        </div>
        {/* Grid 7 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[6]));
            if (type === 'product') {
              navigate('/product-list');
            } else {
              navigate('/art-list');
            }
          }}
          className='row-span-2 col-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[6]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `280px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading '>
                {gridList[6]?.subjectName}
              </p>
              <p className='text-[#FFFFFF] text-sm12 font-medium w-[13.125rem]'>
                {gridList[6]?.subjectDescription}
              </p>
              <span className='text-[#FFFFFF] text-heading font-thin'>
                745+
              </span>
            </div>
            <img
              className='absolute bottom-2.5 left-2.5'
              src={artIcon}
              alt=''
            />
          </div>
        </div>
        {/* Grid 8 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[7]));
            if (type === 'product') {
              navigate('/product-list');
            } else {
              navigate('/art-list');
            }
          }}
          className='row-span-4 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[7]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `576px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading '>
                {gridList[7]?.subjectName}
              </p>
              <p className='text-[#FFFFFF] text-sm12 font-medium w-[13.125rem]'>
                {gridList[7]?.subjectDescription}
              </p>
              <span className='text-[#FFFFFF] text-heading font-thin'>
                745+
              </span>
            </div>
            <img
              className='absolute bottom-2.5 left-2.5'
              src={artIcon}
              alt=''
            />
          </div>
        </div>
        {/* Grid 9 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[8]));
            if (type === 'product') {
              navigate('/product-list');
            } else {
              navigate('/art-list');
            }
          }}
          className='row-span-2 col-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[8]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `280px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading '>
                {gridList[8]?.subjectName}
              </p>
              <p className='text-[#FFFFFF] text-sm12 font-medium w-[13.125rem]'>
                {gridList[8]?.subjectDescription}
              </p>
              <span className='text-[#FFFFFF] text-heading font-thin'>
                745+
              </span>
            </div>
            <img
              className='absolute bottom-2.5 left-2.5'
              src={artIcon}
              alt=''
            />
          </div>
        </div>
        {/* Grid 10 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[9]));
            if (type === 'product') {
              navigate('/product-list');
            } else {
              navigate('/art-list');
            }
          }}
          className='row-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[9]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `280px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading '>
                {gridList[9]?.subjectName}
              </p>
              <p className='text-[#FFFFFF] text-sm12 font-medium w-[13.125rem]'>
                {gridList[9]?.subjectDescription}
              </p>
              <span className='text-[#FFFFFF] text-heading font-thin'>
                745+
              </span>
            </div>
            <img
              className='absolute bottom-2.5 left-2.5'
              src={artIcon}
              alt=''
            />
          </div>
        </div>
      </div>

      {type === 'product' ? (
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
            artNextPage('all');

            dispatch(setSubjectId(null));
          }}
          className='blackBtn mx-auto block'
        >
          Discover More
        </button>
      )}
    </div>
  );
};

export default ArtGrid;
