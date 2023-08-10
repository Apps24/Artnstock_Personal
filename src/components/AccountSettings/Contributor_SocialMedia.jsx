import pro from '../../assets/images/accountSettings/pro.png';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { httpClient } from '../../axios';
import { toast } from 'react-toastify';

const Contributor_SocialMedia = () => {
  const userId = useSelector((state) => state.auth.userId);

  const [userDetail, setUserDetail] = useState({});

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

  const handleInputChangeNested = (topName, lowName, value) => {
    setUserDetail({
      ...userDetail,
      [topName]: { ...userDetail[topName], [lowName]: value },
    });
  };

  // useEffect(() => {
  //   console.log(userDetail.socialMedia);
  // }, [userDetail]);

  const updateUserMaster = async () => {
    try {
      const res = await httpClient.put(
        '/user_master/update',
        userDetail
      );
      toast.success('Successfully Updated User Details');
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
      <div className='flex justify-between mb-[30px]'>
        <p>
          <p className='text-[25px] font-medium text-[#333333]'>
            Social Media
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

      <div className=''>
        <p className='text-[12px] text-[#757575]'>Twitter</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='@'
          name='twitterLink'
          value={userDetail?.socialMedia?.twitterLink || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'socialMedia',
              e.target.name,
              e.target.value
            )
          }
        />
        <p className='text-[12px] text-[#757575] mt-3'>LinkedIn</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='http://linkedin.com/in/'
          name='linkedinLink'
          value={userDetail?.socialMedia?.linkedinLink || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'socialMedia',
              e.target.name,
              e.target.value
            )
          }
        />
        <p className='text-[12px] text-[#757575] mt-3'>Facebook</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='http://facebook.com/'
          name='facebookLink'
          value={userDetail?.socialMedia?.facebookLink || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'socialMedia',
              e.target.name,
              e.target.value
            )
          }
        />
        <p className='text-[12px] text-[#757575] mt-3'>Google+</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='http://plus.google.com/'
          name='googleLink'
          value={userDetail?.socialMedia?.googleLink || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'socialMedia',
              e.target.name,
              e.target.value
            )
          }
        />
        <p className='text-[12px] text-[#757575] mt-3'>Pinterest</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='http://pinterest.com/'
          name='pinterestLink'
          value={userDetail?.socialMedia?.pinterestLink || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'socialMedia',
              e.target.name,
              e.target.value
            )
          }
        />
      </div>

      <div className='flex gap-5 justify-center mt-[30px]'>
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
    </>
  );
};

export default Contributor_SocialMedia;
