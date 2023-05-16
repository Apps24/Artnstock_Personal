import React, { useEffect } from 'react'
import { httpClient } from '../../axios';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const VerifyUserPage = () => {
    const params = useParams()


    useEffect(() => {
        // console.log(params);
        verifyCustomer(params.id, params.otp)
      },[params.id,params.otp])

    const verifyCustomer = (userId,userOTP) => {
        httpClient.get("/user_master/verifyUser/"+String(userId)+"/"+Number(userOTP)).then((res) => {
        //   console.log(res);
          if(res.data != null) {
            window.close()
          } else {
          }
        }).catch((err) => {
          // console.log(err);
          alert(err)
        })
    
      }
  return (
    <div>Verifying User....</div>

  )
}

export default VerifyUserPage