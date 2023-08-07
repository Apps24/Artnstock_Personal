import React from 'react';
import pro from '../../assets/images/accountSettings/pro.png';
import profile from '../../assets/images/accountSettings/profile.png';
import IconInfo from '../../assets/images/accountSettings/IconInfo.png';
import coverImg from '../../assets/images/accountSettings/coverImg.png';
import { useState, useEffect } from 'react';
import { httpClient } from '../../axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authSliceAction } from '../../store/authSlice';

const Contributor_Profile = () => {
  const userId = useSelector((state) => state.auth.userId);

  const [userDetail, setUserDetail] = useState({});

  const dispatch = useDispatch();

  const getUserRecord = async () => {
    try {
      const res = await httpClient.get(
        `/user_master/getUserRecord/${userId}`
      );
      setUserDetail(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // console.log('abc');
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const img = event.target.files[0];
    if (img) {
      let formData = new FormData();
      formData.append('file', img);

      const res = await httpClient.post(
        '/CloudinaryImageUpload?parameter=false',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setUserDetail({ ...userDetail, profileImage: res.data });
    }
  };

  // cover image
  const fileInputRefCover = useRef(null);

  const handleButtonClickCover = () => {
    console.log('abc');
    fileInputRefCover.current.click();
  };

  const handleFileChangeCover = async (event) => {
    const img = event.target.files[0];
    if (img) {
      let formData = new FormData();
      formData.append('file', img);

      const res = await httpClient.post(
        '/CloudinaryImageUpload?parameter=false',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setUserDetail({ ...userDetail, coverImage: res.data });
      // setProfileImageCover(res.data);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  // useEffect(() => {
  //   console.log(userDetail);
  // }, [userDetail]);

  const updateUserMaster = async () => {
    try {
      const res = await httpClient.put(
        '/user_master/update',
        userDetail
      );

      if (res.data) {
        dispatch(authSliceAction.setUserDetails(userDetail));
        toast.success('Successfully Updated User Details');
      }

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserRecord();
  }, []);

  return (
    <>
      <div className='flex justify-between'>
        <p>
          <p className='text-[25px] font-medium text-[#333333]'>
            My Profile
          </p>
          <p className='text-[11px] text-[#f95d99]'>
            All fields are required.
          </p>
        </p>
        <p>
          <div className='border border-[#757575] rounded-lg p-1'>
            <img src={pro} alt='' />
            <p className='text-[11px] text-[#757575]'>
              Member since 5 July 2020
            </p>
          </div>
        </p>
      </div>

      <div className='mb-10'>
        <div className='flex gap-5 mt-[30px]'>
          {userDetail?.profileImage !== null ? (
            <div
              style={{
                backgroundImage: `url(${userDetail?.profileImage})`,
              }}
              className='w-[125px] h-[125px] bg-cover bg-center rounded-[50%]'
            ></div>
          ) : (
            <div className='w-[125px] h-[125px] bg-cover bg-center rounded-[50%]'>
              No Image Added
            </div>
          )}

          {/* <img src={profile} alt='' /> */}
          <div className='flex items-center'>
            <input
              type='file'
              multiple
              onChange={handleFileChange}
              accept='image/*'
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
            <div>
              <button
                onClick={handleButtonClick}
                className='blackBtn py-2 px-4 bg-[#8e8e8e] text-[#ffffff] font-medium text-[12px]'
              >
                Upload Profile Photo
              </button>
              <img src={IconInfo} className='inline ml-1' alt='' />
              <p className='text-[#757575] text-[11px] mt-1'>
                <span className='font-medium'>Colour Mode:</span> RGB{' '}
                <span className='font-medium'>Format:</span> JPEG
              </p>
              <p className='text-[#757575] text-[11px]'>
                <span className='font-medium'>Dimensions:</span>{' '}
                500x500 pixels{' '}
                <span className='font-medium'>File Size:</span> Under
                5 MB
              </p>
              <p className='text-[#757575] text-[12px] font-medium mt-3'>
                75% Profile Strength
              </p>
              <div className='w-full h-[8px] bg-[#d6d6d6] rounded-full'>
                <div className='w-[75%] h-[8px] bg-[#01e6e6] rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
        <p className='text-[12px] text-[#757575] mt-3'>User ID</p>
        <input
          type='text'
          className='regInput my-0 bg-[#eeeeee] text-[#333333]'
          placeholder='ANS98765432'
          value={userDetail?.userUniqueNo || ''}
          disabled
        />
        <p className='text-[12px] text-[#757575] mt-3'>
          Display Name (Name you want people to see)
        </p>
        <input
          onChange={handleInputChange}
          name='displayName'
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Azra Creations'
          value={userDetail?.displayName || ''}
        />
        <p className='text-[12px] text-[#757575] mt-3'>
          Contributor Type
        </p>
        <input
          type='text'
          className='regInput my-0  text-[#333333]'
          placeholder='Select Contributor Type'
        />
        <p className='text-[12px] text-[#757575] mt-3'>
          Profession/Specialization/Skills
        </p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Enter your Profession/Specialization/Skill'
        />
        <p className='text-[12px] text-[#757575] mt-3'>Style</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Select Styles'
        />
        <p className='text-[12px] text-[#757575] mt-3'>Subject</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Select Subjects'
        />
        <p className='text-[12px] text-[#757575] mt-3'>Equipment</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Equipments used for Art/Photos/Footage/Music'
        />
        <p className='text-[12px] text-[#757575] mt-3'>
          Store/Portfolio URl (Your Store/Portfolio URl can only be
          changed once.)
        </p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='http://www.artnstock.com/ azracreations'
        />
        <p className='text-[12px] text-[#757575] mt-3'>About me </p>
        <textarea
          onChange={handleInputChange}
          name='useInfo'
          x
          value={userDetail?.useInfo || ''}
          id=''
          cols=''
          rows=''
          className='border border-[#d6d6d6] w-[100%] rounded-2xl resize-none h-[110px] p-2 outline-none text-[#333333]'
        ></textarea>
        <p className='text-[12px] text-[#757575] mt-3'>
          Cover Image{' '}
        </p>

        {userDetail?.coverImage !== null && (
          <div
            style={{
              backgroundImage: `url(${userDetail?.coverImage})`,
            }}
            className='w-[450px] h-[112px] rounded-2xl bg-cover bg-center'
          ></div>
        )}

        {/* <img src={coverImg} alt='' /> */}
        {/* <img src={userDetail?.coverImage} alt='' /> */}
        <input
          type='file'
          multiple
          onChange={handleFileChangeCover}
          accept='image/*'
          style={{ display: 'none' }}
          ref={fileInputRefCover}
        />
        <button
          onClick={handleButtonClickCover}
          className='blackBtn bg-[#8e8e8e] text-[#ffffff] text-[12px] px-3 mt-[10px] py-2'
        >
          Upload Cover Image
        </button>

        <div className='text-[#757575] text-[11px] mt-1'>
          <span className='font-medium'>Colour Mode:</span> RGB{' '}
          <span className='font-medium'>Format:</span> JPEG
        </div>
        <div className='text-[#757575] text-[11px] mb-[30px]'>
          <span className='font-medium'>Dimensions:</span> 500x500
          pixels <span className='font-medium'>File Size:</span> Under
          5 MB
        </div>

        <div className='flex gap-5 justify-center mt-[30px] mb-[40px]'>
          <button
            onClick={updateUserMaster}
            className='blackBtn text-[14px] text-medium'
          >
            Save
          </button>
          <button className=' text-[14px] text-medium border border-[#333333] rounded-full px-4 py-2'>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Contributor_Profile;
