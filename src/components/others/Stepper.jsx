import React from 'react'

const Stepper = ({tabNo, tabColor, tabBgColor}) => {
  return (
    <div className='rounded-full w-[16px] h-[16px] text-[8px] font-medium flex justify-center items-center mr-[5px]' style={{background: `${tabBgColor}`, color: `${tabColor}`}}>{tabNo}</div>
  )
}

export default Stepper