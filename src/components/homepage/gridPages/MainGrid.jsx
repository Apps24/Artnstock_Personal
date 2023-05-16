import React, { useEffect, useState } from 'react';
import { httpClient } from '../../../axios';
import artIcon from '../../../assets/images/Icons/ArtWhite.svg';
import { useNavigate } from 'react-router-dom';
import { setSubjectId } from '../../../store/subjectidSlice';
import { useDispatch } from 'react-redux';

const MainGrid = () => {
  const [gridList, setGridList] = useState([]);

  // redux slice
  // const subjectId = useSelector((state) => state.subjectId.subjectId);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    httpClient
      .get(`/subject_master/getTypeWiseSubjectList/home`)
      .then((res) => {
        setGridList(res.data);
        // console.log(res.data);
      });
  }, []);

  const artNextPage = (text) => {
    console.log(text);
    // /art-list
    navigate('/art-list');
  };

  return (
    <div className='w-w1168 mx-auto mt-10'>
      <p className='mb-[2px] bullet'>Artnstock / Home</p>
      <p className='text-primaryBlack text-heading font-semibold text-center'>
        Diversely sized, aesthetic pleasing <br />
        and styled art
      </p>
      <p className=' text-sm14 font-normal mt-[9px] text-center text-primaryGray'>
        Every piece of art we sell is offered in a variety of products
        and sizes to suit any interior design aesthetic or price
        range. If you need high-quality <br />
        artwork at fair costs, our choice of works of art will expand
        the possibilities for your visual initiatives.
      </p>
      <div className=' grid grid-cols-4 gap-4 my-7'>
        {/* Grid 1 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[0]));
            navigate('/art-list');
          }}
          className='row-span-4 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[0]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `${gridList[0]?.gridHeight}px`,
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
            navigate('/art-list');
          }}
          className='row-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[1]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `${gridList[1]?.gridHeight}px`,
          }}
        >
          <div
            className='group-hover:flex hidden bg-blackRgba items-center justify-center relative text-center'
            style={{ height: 'inherit' }}
          >
            <div>
              <p className='text-[#FFFFFF] text-heading'>
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
            dispatch(setSubjectId(gridList[1]));
            navigate('/art-list');
          }}
          className='row-span-3 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[2]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `${gridList[2]?.gridHeight}px`,
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
            navigate('/art-list');
          }}
          className='row-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[3]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `${gridList[3]?.gridHeight}px`,
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
            navigate('/art-list');
          }}
          className='row-span-3 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[4]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `${gridList[4]?.gridHeight}px`,
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
            navigate('/art-list');
          }}
          className='row-span-3 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[5]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `${gridList[5]?.gridHeight}px`,
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
        {/* Grid 6 */}
        <div
          onClick={() => {
            dispatch(setSubjectId(gridList[6]));
            navigate('/art-list');
          }}
          className='row-span-4 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[6]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `${gridList[6]?.gridHeight}px`,
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
            navigate('/art-list');
          }}
          className='row-span-3 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[7]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `${gridList[7]?.gridHeight}px`,
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
            navigate('/art-list');
          }}
          className='row-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[8]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `${gridList[8]?.gridHeight}px`,
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
            navigate('/art-list');
          }}
          className='row-span-2 rounded-2xl group overflow-hidden'
          style={{
            backgroundImage: `url(${gridList[9]?.image})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: `${gridList[9]?.gridHeight}px`,
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
      <button
        onClick={() => {
          artNextPage('all');
          dispatch(setSubjectId(null));
        }}
        className='blackBtn mx-auto block'
      >
        Discover More
      </button>
    </div>
  );
};

export default MainGrid;
