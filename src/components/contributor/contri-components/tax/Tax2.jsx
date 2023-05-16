import React from 'react';

const Tax2 = ({ changeTax3 }) => {
  return (
    <>
      <div className='wrapper'>
        <main>
          <div className='flex justify-center'>
            <div className='w-[1049px]'>
              <div className='max-w-[12.86rem] mt-[0.625rem]'>
                <p className='text-[1.563rem] font-medium'>Tax</p>
                <p className='text-[0.688rem] text-primaryGray leading-[1.1]'>
                  Refer a new customer to earn 30% of their first
                  payment
                  <span className='text-orangeColor'>
                    {' '}
                    Learn more
                  </span>
                </p>
              </div>

              <p className='mb-[12px] mt-[24px] text-[#757575] text-[13px]'>
                Before we can pay you. Artnstock needs to have your
                correct tax form on file.
              </p>
              <p className='mb-[12px] text-[#757575] text-[13px]'>
                While we can't give you tax or legal advice, we've
                created the following questions to help you choose the
                best tax form and make your own decision about how to
                comply with applicable Indian tax laws, if you still
                have questions after reviewing the information weve
                provided, please contact your legal and/or tax advisor
              </p>
              <p className='mb-[23px] text-[#757575] text-[13px]'>
                Please answer the following questions to help us
                determone which tax form is appropriate for your
                situation:
              </p>

              <p className='text-[15px] text-[#333333] mb-[7px] font-semibold flex items-center'>
                For Indian tax purposes, are you a Indian person*?
                <div className='bg-[#bbbbbb] w-[16px] h-[16px] text-[white] text-center rounded-[50%] ml-[5px] flex items-center justify-center'>
                  <span className='text-[13px]'>?</span>
                </div>
              </p>
              <p className='flex gap-[7px]'>
                <input type='radio' name='Indian' id='' />
                <label
                  htmlFor=''
                  className='text-[13px] text-[#757575]'
                >
                  Yes
                </label>
              </p>
              <p className='flex gap-[7px] mb-4'>
                <input type='radio' name='Indian' id='' />
                <label
                  htmlFor=''
                  className='text-[13px] text-[#757575]'
                >
                  No
                </label>
              </p>

              <p className='text-[15px] text-[#333333] mb-[7px] font-semibold'>
                Are you contributing to Artnstock as an individual or
                as a business?
              </p>
              <p className='flex gap-[7px]'>
                <input type='radio' name='Contribute' id='' />
                <label
                  htmlFor=''
                  className='text-[13px] text-[#757575]'
                >
                  Individual
                </label>
              </p>
              <p className='flex gap-[7px]'>
                <input type='radio' name='Contribute' id='' />
                <label
                  htmlFor=''
                  className='text-[13px] text-[#757575]'
                >
                  Business
                </label>
              </p>
              <button
                onClick={changeTax3}
                className='blackBtn mt-[21px]'
              >
                Submit
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Tax2;
