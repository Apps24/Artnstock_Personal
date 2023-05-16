import React from 'react'

const ChangePassword_Customer = () => {
  return (
    <>
      <div className="wrapper w-[100%] h-[100vh] bg-[#ffb851] pt-[30px]">
        <div className="rounded-2xl w-[450px] mx-auto bg-[#ffffff] py-[30px] px-[51px] text-center">
          <p className="text-[38px] text-[#333333] font-medium leading-[1.2]">
            Change Password
          </p>
          <input
            type="text"
            name=""
            className="regInput mt-[12px]"
            placeholder="Current Password"
            id=""
          />
          <input
            type="text"
            name=""
            className="regInput mt-[11px]"
            placeholder="New Password"
            id=""
          />
          <input
            type="text"
            name=""
            className="regInput mt-[11px]"
            placeholder="Confirm New Password"
            id=""
          />
          <p className='text-[11px] text-[#757575] leading-[1.2] text-start mt-1'>Password must be at least 8 characters long</p>
          <div className="flex gap-5 justify-center mt-[20px]">
            <button className="blackBtn text-[14px] text-medium">Save</button>
            <button className=" text-[14px] text-medium border border-[#333333] rounded-full px-4 py-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangePassword_Customer