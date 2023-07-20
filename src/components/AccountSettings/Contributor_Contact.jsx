import React from 'react';
import pro from '../../assets/images/accountSettings/pro.png';
import IconQue from '../../assets/images/accountSettings/IconQue.png';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { httpClient } from '../../axios';
import { toast } from 'react-toastify';

const Contributor_Contact = () => {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleInputChangeNested = (topName, lowName, value) => {
    setUserDetail({
      ...userDetail,
      [topName]: { ...userDetail[topName], [lowName]: value },
    });
  };

  useEffect(() => {
    console.log(userDetail);
  }, [userDetail]);

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

  const [isChecked, setIsChecked] = useState(false);

  const changeCheckBox = (event) => {
    setIsChecked(event.target.checked);
    if (!isChecked) {
      setUserDetail({
        ...userDetail,
        ['residentialAddress']: {
          ...userDetail['residentialAddress'],
          ['addressLine1']: userDetail.shippingAddress.addressLine1,
          ['addressLine2']: userDetail.shippingAddress.addressLine2,
          ['cityName']: userDetail.shippingAddress.cityName,
          ['countryName']: userDetail.shippingAddress.countryName,
          ['phoneNo']: userDetail.shippingAddress.phoneNo,
          ['postalCode']: userDetail.shippingAddress.zipCode,
          ['stateName']: userDetail.shippingAddress.stateName,
        },
      });
    } else {
      setUserDetail({
        ...userDetail,
        ['residentialAddress']: {
          ...userDetail['residentialAddress'],
          ['addressLine1']: '',
          ['addressLine2']: '',
          ['cityName']: '',
          ['countryName']: '',
          ['phoneNo']: '',
          ['postalCode']: '',
          ['stateName']: '',
        },
      });
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
            Contact Information
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

      <div className='my-[30px]'>
        <p className='text-[15px] text-[#333333]'>Personal Details</p>
        <p className='text-[12px] text-[#757575] mt-3'>First Name</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Azra'
          name='userFirstName'
          value={userDetail?.userFirstName || ''}
          onChange={handleInputChange}
        />
        <p className='text-[12px] text-[#757575] mt-3'>Last Name</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Shaikh'
          name='userLastName'
          value={userDetail?.userLastName || ''}
          onChange={handleInputChange}
        />
        <p className='text-[12px] text-[#757575] mt-3'>
          Email Address
        </p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='ksgrafiks2012@gmail.com'
          name='emailAddress'
          value={userDetail?.emailAddress || ''}
          onChange={handleInputChange}
        />
        <button className='blackBtn py-2 px-3 mt-[10px] bg-[#8e8e8e] text-[#ffffff] font-medium text-[12px]'>
          Change Email Address
        </button>
        <p className='text-[11px] mt-1 text-[#757575] flex gap-2'>
          Status:{' '}
          <button className='text-[#f95d99]'>Unconfirmed</button>
          <button className='text-[#f7941d]'>
            Resend Confirmation Email
          </button>
        </p>

        <p className='text-[15px] mt-[30px] text-[#333333]'>
          Shipping Address{' '}
          <img src={IconQue} className='inline' alt='' />
        </p>
        <p className='text-[12px] text-[#757575] mt-[10px]'>
          Location
        </p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='India'
          name='countryName'
          value={userDetail?.shippingAddress?.countryName || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'shippingAddress',
              e.target.name,
              e.target.value
            )
          }
        />
        <p className='text-[12px] text-[#757575] mt-3'>
          Address line 1
        </p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='S. No. 203/2A, Plot 16A, Rajiv Nagar (South),'
          name='addressLine1'
          value={userDetail?.shippingAddress?.addressLine1 || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'shippingAddress',
              e.target.name,
              e.target.value
            )
          }
        />
        <p className='text-[12px] text-[#757575] mt-3'>
          Address line 2
        </p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Viman Nagar,'
          name='addressLine2'
          value={userDetail?.shippingAddress?.addressLine2 || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'shippingAddress',
              e.target.name,
              e.target.value
            )
          }
        />
        <p className='text-[12px] text-[#757575] mt-3'>City</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Pune'
          name='cityName'
          value={userDetail?.shippingAddress?.cityName || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'shippingAddress',
              e.target.name,
              e.target.value
            )
          }
        />
        <div className='flex gap-5'>
          <div>
            <p className='text-[12px] text-[#757575] mt-3'>
              Zip/Postal Code
            </p>
            <input
              type='text'
              className='regInput my-0 text-[#333333]'
              placeholder='411014'
              name='zipCode'
              value={userDetail?.shippingAddress?.zipCode || ''}
              onChange={(e) =>
                handleInputChangeNested(
                  'shippingAddress',
                  e.target.name,
                  e.target.value
                )
              }
            />
          </div>
          <div>
            <p className='text-[12px] text-[#757575] mt-3'>
              State/Province
            </p>
            <input
              type='text'
              className='regInput my-0 text-[#333333]'
              placeholder='Maharashtra'
              name='stateName'
              value={userDetail?.shippingAddress?.stateName || ''}
              onChange={(e) =>
                handleInputChangeNested(
                  'shippingAddress',
                  e.target.name,
                  e.target.value
                )
              }
            />
          </div>
        </div>
        <p className='text-[12px] text-[#757575] mt-3'>Phone</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333] bg-[#eeeeee]'
          placeholder='+91 7378666093'
          name='phoneNo'
          value={userDetail?.shippingAddress?.phoneNo || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'shippingAddress',
              e.target.name,
              e.target.value
            )
          }
        />

        <p className='text-[15px] mt-[30px] text-[#333333]'>
          Residential Address{' '}
          <img src={IconQue} className='inline' alt='' />
        </p>
        <p className='text-[11px] text-[#757575] mt-[10px]'>
          <input
            value={isChecked}
            onChange={changeCheckBox}
            type='checkbox'
            className='mr-[8px]'
            name=''
            id=''
          />{' '}
          My shipping and residential address are the same.
        </p>
        <p className='text-[12px] text-[#757575] mt-[10px]'>
          Location
        </p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='India'
          name='countryName'
          value={userDetail?.residentialAddress?.countryName || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'residentialAddress',
              e.target.name,
              e.target.value
            )
          }
        />
        <p className='text-[12px] text-[#757575] mt-3'>
          Address line 1
        </p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='S. No. 203/2A, Plot 16A, Rajiv Nagar (South),'
          name='addressLine1'
          value={userDetail?.residentialAddress?.addressLine1 || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'residentialAddress',
              e.target.name,
              e.target.value
            )
          }
        />
        <p className='text-[12px] text-[#757575] mt-3'>
          Address line 2
        </p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Viman Nagar,'
          name='addressLine2'
          value={userDetail?.residentialAddress?.addressLine2 || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'residentialAddress',
              e.target.name,
              e.target.value
            )
          }
        />
        <p className='text-[12px] text-[#757575] mt-3'>City</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333]'
          placeholder='Pune'
          name='cityName'
          value={userDetail?.residentialAddress?.cityName || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'residentialAddress',
              e.target.name,
              e.target.value
            )
          }
        />
        <div className='flex gap-5'>
          <div>
            <p className='text-[12px] text-[#757575] mt-3'>
              Zip/Postal Code
            </p>
            <input
              type='text'
              className='regInput my-0 text-[#333333]'
              placeholder='411014'
              name='postalCode'
              value={userDetail?.residentialAddress?.postalCode || ''}
              onChange={(e) =>
                handleInputChangeNested(
                  'residentialAddress',
                  e.target.name,
                  e.target.value
                )
              }
            />
          </div>
          <div>
            <p className='text-[12px] text-[#757575] mt-3'>
              State/Province
            </p>
            <input
              type='text'
              className='regInput my-0 text-[#333333]'
              placeholder='Maharashtra'
              name='stateName'
              value={userDetail?.residentialAddress?.stateName || ''}
              onChange={(e) =>
                handleInputChangeNested(
                  'residentialAddress',
                  e.target.name,
                  e.target.value
                )
              }
            />
          </div>
        </div>
        <p className='text-[12px] text-[#757575] mt-3'>Phone</p>
        <input
          type='text'
          className='regInput my-0 text-[#333333] bg-[#eeeeee]'
          placeholder='+91 7378666093'
          name='phoneNo'
          value={userDetail?.residentialAddress?.phoneNo || ''}
          onChange={(e) =>
            handleInputChangeNested(
              'residentialAddress',
              e.target.name,
              e.target.value
            )
          }
        />

        <div className='flex gap-5 justify-center mt-[30px]'>
          <button className='blackBtn text-[14px] text-medium'>
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

export default Contributor_Contact;
