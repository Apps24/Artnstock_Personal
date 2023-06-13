import React from 'react';
import leftBackImg from '../../assets/join/mailingAdd.jpg';
import wallpaper from '../../assets/join/Bulk.svg';
import { useDispatch, useSelector } from 'react-redux';
import Stepper from '../../components/others/Stepper';
import infoIcon from '../../assets/images/Icons/iIcon.svg';
import { useFormik } from 'formik';
import { httpClient } from '../../axios';
import { mailingAddressModel } from '../../models/allModel';
import { addressSchema } from '../../schemas';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import errorIcon from '../../assets/join/Icon_Error.svg';
import successIcon from '../../assets/join/Icon_true.svg';

const initialValues = {
  addressOne: '',
  addressTwo: '',
  country: '',
  city: '',
  zipCode: '',
  state: '',
  phNumber: '',
};

const MailingAdd = () => {
  const userType = useSelector((state) => state.userReg);
  // console.log(userType);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: addressSchema,
    onSubmit: (values) => {
      // console.log(values);
      updateAddress();
    },
  });

  let navigate = useNavigate();

  const updateAddress = () => {
    mailingAddressModel.userId = userType.userId;
    mailingAddressModel.shippingAddress.addressLine1 =
      values.addressOne;
    mailingAddressModel.shippingAddress.addressLine2 =
      values.addressTwo;
    mailingAddressModel.shippingAddress.cityName = values.city;
    mailingAddressModel.shippingAddress.countryName = values.country;
    mailingAddressModel.shippingAddress.phoneNo = values.phNumber;
    mailingAddressModel.shippingAddress.stateName = values.state;
    mailingAddressModel.shippingAddress.zipCode = values.zipCode;
    // console.log(mailingAddressModel);
    httpClient
      .put('/user_master/updateShippingAddress', mailingAddressModel)
      .then((res) => {
        // console.log(res);
        if (res.data) {
          toast('Successfully Added');
          navigate('/residential-address', { state: values });
        } else {
          toast('Something went wrong');
        }
      });
  };

  const handlePhoneNumberKeyDown = (event) => {
    const keyCode = event.keyCode || event.which;
    const isCharacterKey =
      (keyCode >= 65 && keyCode <= 90) || // A-Z
      (keyCode >= 97 && keyCode <= 122); // a-z

    const inputValue = event.target.value;
    const numberOfDigits = inputValue.replace(/[^0-9]/g, '').length;

    if (isCharacterKey || (numberOfDigits >= 10 && keyCode !== 8)) {
      event.preventDefault();
    }
  };

  const handleZipCodeKeyDown = (event) => {
    const keyCode = event.keyCode || event.which;
    const isCharacterKey =
      (keyCode >= 65 && keyCode <= 90) || // A-Z
      (keyCode >= 97 && keyCode <= 122); // a-z

    const inputValue = event.target.value;
    const numberOfDigits = inputValue.replace(/[^0-9]/g, '').length;

    if (isCharacterKey || (numberOfDigits >= 6 && keyCode !== 8)) {
      event.preventDefault();
    }
  };

  return (
    <div className='w-full h-[100vh] bg-[#FF7A6D] flex justify-center'>
      <div className='regCard flex'>
        <div
          className='left flex-1 flex items-center justify-center rounded-tl-[30px] rounded-bl-[30px]'
          style={{ backgroundImage: `url('${leftBackImg}')` }}
        >
          <img src={wallpaper} alt='' />
        </div>
        <div className='right flex-1 pl-[15px] pr-[20px] pt-[1.563rem]'>
          {/* Stepper */}
          <div className=' mb-4'>
            <p className='text-sm11 text-placeholderColor font-medium mb-1'>
              {userType.userType === 'customer'
                ? 'Customer Registration'
                : 'Contributor Registration'}
            </p>
            {userType.userType === 'customer' ? (
              <div className='flex'>
                <Stepper
                  tabNo='1'
                  tabBgColor='#BBBBBB'
                  tabColor='#333333'
                />
                <Stepper
                  tabNo='2'
                  tabBgColor='#eeeeee'
                  tabColor='#757575'
                />
                <Stepper
                  tabNo='3'
                  tabBgColor='#eeeeee'
                  tabColor='#757575'
                />
              </div>
            ) : (
              <div className='flex'>
                <Stepper
                  tabNo='1'
                  tabBgColor='#FF369F'
                  tabColor='#333333'
                />
                <Stepper
                  tabNo='2'
                  tabBgColor='#BBBBBB'
                  tabColor='#333333'
                />
                <Stepper
                  tabNo='3'
                  tabBgColor='#eeeeee'
                  tabColor='#757575'
                />
                <Stepper
                  tabNo='4'
                  tabBgColor='#eeeeee'
                  tabColor='#757575'
                />
                <Stepper
                  tabNo='5'
                  tabBgColor='#eeeeee'
                  tabColor='#757575'
                />
                <Stepper
                  tabNo='6'
                  tabBgColor='#eeeeee'
                  tabColor='#757575'
                />
                <Stepper
                  tabNo='7'
                  tabBgColor='#eeeeee'
                  tabColor='#757575'
                />
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className='mb-0.5 flex items-center'>
              <p className='regHeading mr-1'>
                Enter Your Mailing Address{' '}
              </p>
              <img src={infoIcon} alt='' />
            </div>
            <p className='text-sm11 leading-[0.688rem] text-pinkColor'>
              All fields are required.
            </p>
            <input
              className='regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]'
              placeholder='Address Line 1'
              type='text'
              name='addressOne'
              autoComplete='off'
              value={values.addressOne}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              className='regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]'
              placeholder='Address Line 2'
              type='text'
              name='addressTwo'
              autoComplete='off'
              value={values.addressTwo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className='flex gap-[10px]'>
              <input
                className='regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]'
                placeholder='Select Country'
                type='text'
                name='country'
                autoComplete='off'
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className='regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]'
                placeholder='City'
                type='text'
                name='city'
                autoComplete='off'
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className='flex gap-[10px]'>
              <div className='relative'>
                <input
                  className='regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]'
                  placeholder='Zip/Postal Code'
                  type='text'
                  name='zipCode'
                  autoComplete='off'
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={handleZipCodeKeyDown}
                />
                {touched.zipCode ? (
                  errors.zipCode ? (
                    <img
                      className='absolute right-2.5 top-6'
                      src={errorIcon}
                      alt='Error'
                    />
                  ) : (
                    <img
                      className='absolute right-2.5 top-6'
                      src={successIcon}
                      alt='Success'
                    />
                  )
                ) : null}
              </div>
              <input
                className='regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]'
                placeholder='State/Province'
                type='text'
                name='state'
                autoComplete='off'
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className='relative'>
              <input
                className='appearance-none regInput placeholder:text-[0.875rem] placeholder:leading-[0.875rem] placeholder:font-medium placeholder:text-[#BBBBBB]'
                placeholder='Phone Number'
                type='text'
                name='phNumber'
                autoComplete='off'
                value={values.phNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handlePhoneNumberKeyDown}
              />
              {touched.phNumber ? (
                errors.phNumber ? (
                  <img
                    className='absolute right-2.5 top-6'
                    src={errorIcon}
                    alt='Error'
                  />
                ) : (
                  <img
                    className='absolute right-2.5 top-6'
                    src={successIcon}
                    alt='Success'
                  />
                )
              ) : null}
            </div>

            <button type='submit' className='blackBtn mt-[0.938rem]'>
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailingAdd;
