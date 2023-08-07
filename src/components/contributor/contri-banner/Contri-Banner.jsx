// import contribanner from '../../../../src/assets/images/contributor/contri-banner.png';
import contribanner from '../../../../src/assets/images/contributor/banner2.png';

const ContriBanner = () => {
  return (
    <div>
      <img className='w-[100%]' src={contribanner} />
    </div>

    // <div
    //   className='h-[100%] max-h-[15.5rem] flex items-center justify-center w-[100%]'
    //   style={{
    //     backgroundImage: `url(${contribanner}) !important`,
    //     backgroundSize: 'cover !important',
    //   }}
    // >

    //  </div>
    // <div>
    //       <p className='sm:text-[12px] md:text-[20px] lg:text-[25px] leading-[29px]   w-[100%] text-[#ffffff] text-center'>
    //         Earn 20% Customer Referral Bonus
    //       </p>
    //       <p className='text-[7px] sm:text-[8px] md:text-[8px] lg:text-[13px] text-[#ffffff] w-[100%] text-center leading-tight'>
    //         Refer a new customer to Artnstock to earn 20% of their first
    //         purchase <br /> instead of the usual 10% referral bonus.
    //       </p>
    //     </div>
  );
};

export default ContriBanner;
