const Tax1 = ({ changeTax2 }) => {
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

              <p className='mt-[27px] mb-[5px] text-[18px] font-medium text-[#333333]'>
                Your Recent Document
              </p>
              <div className='w-[135px] text-[12px] text-[#757575] h-[188px] flex items-center justify-center text-center bg-[#f7f7f7] rounded-lg px-5'>
                Once your form is approved you'll see it here.
              </div>
              <p className='text-[#757575] text-[11px]'>Document 1</p>
              <p className='text-[18px] text-[#333333] font-medium mt-9 mb-[5px]'>
                Your Tax Profile
              </p>
              <p className='text-[12px] text-[#757575] mb-3'>
                For Indian tax purposes, are you a Indian person?*:{' '}
                <span className='font-medium'>Yes</span> <br />
                Are you contributing to Artnstock as an individual or
                as a business?:{' '}
                <span className='font-medium'>Individual</span>
              </p>
              <p>
                <button
                  onClick={changeTax2}
                  className='rounded-[14px] text-[12px] text-[white] bg-[#8e8e8e] w-[130px] h-[28px]'
                >
                  Submit a New Form
                </button>
              </p>

              <div className='h-[1px] bg-[#efefef] my-[30px] w-[100%]'></div>

              <div>
                <p className='mb-[5px] text-[18px] font-medium'>
                  Your Address
                </p>
                <div className='flex gap-[120px]'>
                  <div>
                    <p className='text-[12px]'>Permanent Address</p>
                    <p className='mb-4 text-[12px] text-[#757575]'>
                      S. No. 203/2A, Plot 16A, Rajiv Nagar (South),{' '}
                      <br /> Viman Nagar, Pune <br /> Maharashtra
                      411014, India
                    </p>
                    <p>
                      <button className='rounded-[14px] text-[12px] text-[white] bg-[#8e8e8e] w-[109px] h-[28px]'>
                        Change Address
                      </button>
                    </p>
                  </div>
                  <div>
                    <p className='text-[12px]'>Mailing Address</p>
                    <p className=' text-[12px] text-[#757575]'>
                      S. No. 203/2A, Plot 16A, Rajiv Nagar (South),{' '}
                      <br /> Viman Nagar, Pune <br /> Maharashtra
                      411014, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Tax1;
