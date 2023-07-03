import React, { useEffect, useState } from 'react';
import leftBackImg from '../../assets/join/verifyEmail.jpg';
import wallpaper from '../../assets/join/Bulk.svg';
import Stepper from '../../components/others/Stepper';
import { useDispatch, useSelector } from 'react-redux';
import { httpClient } from '../../axios';
import { toast } from 'react-toastify';
import { userRegSliceAction } from '../../store/userRejSlice';
import { authSliceAction } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { setUserRole } from '../../store/authSlice';

const styles = {
  divClass: 'w-full h-[100vh] flex justify-center',
};

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  /* &-overlay {
    ...;
  } */
  // use your custom style for ".popup-content"
  &-content {
    background: linear-gradient(
      90deg,
      #e23c9c 0.8%,
      #f2d058 50%,
      #6edded 99.2%
    );
    border-radius: 12px;
    width: 15.625rem;
    height: 3.5rem;
    /* text-align: center; */
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -29%;
  }
`;

const VerifyEmail = () => {
  const userDetails = useSelector((state) => state.userReg);
  const userAuth = useSelector((state) => state.auth);
  const [userEmail, setUserEmail] = useState(userDetails.userEmail);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);
  // const closeModal = () => setOpen(false);

  // console.log(userDetails);
  // console.log(userAuth);

  const sendMail = () => {
    httpClient
      .get(`/user_master/sendVerifyMailUser/${userDetails.userId}`)
      .then((res) => {
        // console.log(res);
        if (res.data) {
          //  toast("Mail Send Successfully")
          setOpen(true);
        } else {
          toast('Something went wrong');
          setOpen(false);
        }
      });
  };

  useEffect(() => {
    httpClient
      .get('/user_master/checkUserStatus/' + userDetails.userId)
      .then((res) => {
        // console.log(res);
        dispatch(userRegSliceAction.setUserStatus(res.data));
        if (res.data.status === 'Active') {
          dispatch(authSliceAction.loginUser(true));
          dispatch(authSliceAction.setUserRole(res.data.userRole[0]));
          dispatch(authSliceAction.setUserId(res.data.userId));
          dispatch(authSliceAction.setUserDetails(res.data));
        }
        if (res.data.status === 'InProcess') {
          sendMail();
          setTimeout(() => {
            setOpen(false);
          }, 5000);
        }
      });
  }, []);

  const nextPage = () => {
    userDetails.userType === 'customer'
      ? userAuth.login
        ? navigate('/welcome-user')
        : toast('Something went wrong')
      : userAuth.login
      ? navigate('/upload-document')
      : toast('Something went wrong');
  };

  return (
    <>
      <div
        className={`${
          userDetails.userType === 'customer'
            ? 'bg-[#FF7A6D]'
            : 'bg-[#A4E154]'
        } ${styles.divClass}`}
      >
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
                <p className='text-sm11 text-placeholderColor font-medium mb-1'>
                  {userDetails.userType === 'customer'
                    ? 'Customer Registration'
                    : 'Contributor Registration'}
                </p>
              </p>
              {userDetails.userType === 'customer' ? (
                <div className='flex'>
                  <Stepper
                    tabNo='1'
                    tabBgColor='#FF369F'
                    tabColor='#333333'
                  />
                  {userAuth.login ? (
                    <Stepper
                      tabNo='2'
                      tabBgColor='#FF7A6D'
                      tabColor='#333333'
                    />
                  ) : (
                    <Stepper
                      tabNo='2'
                      tabBgColor='#BBBBBB'
                      tabColor='#333333'
                    />
                  )}
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
                    tabBgColor='#FF7A6D'
                    tabColor='#333333'
                  />
                  <Stepper
                    tabNo='3'
                    tabBgColor='#FFD133'
                    tabColor='#333333'
                  />
                  {userAuth.login ? (
                    <Stepper
                      tabNo='4'
                      tabBgColor='#A4E154'
                      tabColor='#333333'
                    />
                  ) : (
                    <Stepper
                      tabNo='4'
                      tabBgColor='#BBBBBB'
                      tabColor='#333333'
                    />
                  )}
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

            {userAuth.login ? (
              <div>
                <p className='text-sm18 text-primaryBlack mb-2.5'>
                  Check your inbox to verify your <br />
                  email address
                </p>
                <p className='text-sm12 text-primaryGray leading-[14px] my-2.5'>
                  Your email address will be your username.
                </p>
                <p className='text-sm12 text-primaryGray leading-[14px] mb-[15px]'>
                  Click
                  <span className='font-medium'>“Next”</span> to
                  complete your sign-up and access <br />
                  the Best of Artnstock.
                </p>
                <div>
                  <input
                    className='float-left mr-1'
                    type='checkbox'
                    name=''
                    id=''
                    defaultChecked='true'
                    disabled
                  />
                  <p className='text-sm11 text-primaryGray'>
                    I confirm that I am over 18 years of age and agree
                    to <br />
                    Artnstock’s
                    <span className='text-orangeColor'>
                      Terms of Service
                    </span>
                    ,
                    <span className='text-orangeColor'>
                      License Agreement
                    </span>
                    ,
                    <span className='text-orangeColor'>
                      Privacy Policy
                    </span>
                    <br />
                    and
                    <span className='text-orangeColor'>
                      Copyright and Trademark Policy
                    </span>
                    .
                  </p>
                </div>
                <button
                  onClick={nextPage}
                  className='blackBtn mt-[15px]'
                >
                  Next
                </button>
              </div>
            ) : (
              <div>
                <p className='text-sm18 text-primaryBlack '>
                  Check your inbox to verify your <br />
                  email address
                </p>
                <p className='text-sm12 text-primaryGray leading-[14px] my-2.5'>
                  We have sent you an email to “{userEmail}”
                </p>
                <p className='text-sm12 text-primaryGray leading-[14px] mb-[15px]'>
                  Click{' '}
                  <span className='font-medium'>
                    “Verify Email Address”
                  </span>{' '}
                  to complete your sign-up and <br />
                  access the Best of Artnstock.
                </p>
                <button
                  className='blackBtn disabled:bg-[#eeeeee] mb-[50px]'
                  disabled
                >
                  Next
                </button>
                <p className='text-primaryGray text-sm12 leading-[14px] mb-2.5'>
                  Did not get email?{' '}
                  <span
                    className='text-orangeColor'
                    onClick={sendMail}
                  >
                    Send again
                  </span>
                </p>
                <div>
                  <p className='text-primaryGray text-sm12 leading-[14px] mb-1'>
                    Not {userEmail}?
                  </p>
                  <div className='relative '>
                    <input
                      type='text'
                      className='regInput mt-0'
                      placeholder='Change Email Address'
                    />
                    <button className='text-primaryBlack bg-[#EEEEEE] border border-[#E9E9E9] rounded-2xl py-[0.45rem] px-1.5 text-[10px] leading-[10px] font-medium absolute top-2 right-2'>
                      Change
                    </button>
                    <p className='text-pinkColor text-sm11 mt-5'>
                      After verifying your email address, please
                      refresh this page <br />
                      to continue.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <StyledPopup
        open={open}
        closeOnDocumentClick={false}
        position={'top center'}
      >
        <div className='text-center'>
          <p className='text-[#242021] font-medium text-sm18'>
            Email has been sent to
          </p>
          <p className='text-[#242021] font-normal text-sm12'>
            {userEmail}
          </p>
        </div>
      </StyledPopup>
    </>
  );
};

export default VerifyEmail;
