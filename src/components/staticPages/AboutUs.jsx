import React from 'react';
import Video from '../../assets/images/FooterSubComp/Video.png';
import WeForYou from '../../assets/images/FooterSubComp/weforyou.png';
import Wallpaper from '../../assets/images/FooterSubComp/Wallpaper.png';
import OnlineVougue from '../../assets/images/FooterSubComp/OnlineVogue.png';
import FreshInflux from '../../assets/images/FooterSubComp/FreshInflux.png';
import Auction from '../../assets/images/FooterSubComp/Auction.png';
import Certificate1 from '../../assets/images/FooterSubComp/Certificate1.png';
import Certificate2 from '../../assets/images/FooterSubComp/Certificate2.png';
import Certificate3 from '../../assets/images/FooterSubComp/Certificate3.png';
import ArtBanner from '../../assets/images/FooterSubComp/ArtBanner.png';
import Footer from '../footer/Footer';

const AboutUs = () => {
  return (
    <>
      <div className='wrapper'>
        <main>
          <div
            className='hero'
            style={{
              backgroundImage: `url(${ArtBanner})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className='z-50  flex justify-center text-center text-[#ffffff]'>
              <div className='mt-[63px] mb-[68px]'>
                <p className='text-[75px] text-[#333333] font-semibold leading-[1]'>
                  ABOUT US
                </p>
                <p className='text-[14px] text-[#333333] '>
                  Join us! We are a thriving artist community
                  dedicated to supporting one another <br />
                  with InVogue contributors which matches our mission
                </p>
                <p className='text-[18px] text-[#333333] font-medium'>
                  Passion is Vision
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className='text-[#757575] text-[12px] text-center mt-[30px] leading-[0]'>
              Artnstock / About Us
            </p>
            <p className='text-center font-medium  text-[38px] text-[#333333] mt-1.5 mb-5 leading-[1.1]'>
              We bring creative empowerment <br /> to every creative
              community
            </p>
            <p className='flex h-[658px] w-w1168 justify-center mx-auto mt-[25px]'>
              <iframe
                width='100%'
                height='100%'
                className='rounded-2xl'
                src='https://www.youtube.com/embed/kw4tT7SCmaY'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </p>
            <div className='text-center'>
              <p className='mt-[100px] font-medium text-[38px] text-[#333333]'>
                Our Foresight
              </p>
              <p className='mt-[10px] mb-[25px] text-[#757575] text-[14px]'>
                At Artnstock we aim at bringing together the artists
                of today from across the world and giving them a
                platform to display their passion in different <br />{' '}
                forms ranging from paintings to videos and create a
                home where creativity is encouraged and transpired
                into great works of design. Our objective <br /> with
                this website is to bring to the world’s creative minds
                a platform where they can develop and use creativity
                in the way that suits you. We are here <br /> to
                generate global designs with a touch of desi (tadka)
                in it. A market that aims at bringing the world
                together through creations of the innovative <br />{' '}
                mind. A market that fuels the creative energy residing
                inside you and brings out the best in you.
              </p>
              <p className='text-[18px] text-[#333333]'>
                Skillup GenZers empower yourself others
              </p>
              <div className='w-w1409 h-[700px] mt-[100px] bg-[#f5f5f7] rounded-2xl mx-auto'></div>
            </div>
            <div className='flex justify-center gap-[30px] mt-[100px] mb-[278px]'>
              <div className=' flex items-center'>
                <img src={WeForYou} className='h-[327px]' alt='' />
              </div>
              <div className='text-[22px] text-[#757575]'>
                <p className='leading-[1.2]'>
                  Displaying cultures from across the globe to <br />{' '}
                  spectators from all around the world.
                </p>
                <p className='mt-[34px] leading-[1.2]'>
                  We give you our esteemed collectors, <br />
                  connoisseurs and astethe the true feeling of <br />{' '}
                  Midas Touch!!! and owning one.
                </p>
                <p className='mt-[34px] leading-[1.2]'>
                  Artnstockers is conceived with passion and <br />
                  delivered with sheer happiness, as we hold <br />
                  you our dear customers and passionate <br />
                  contributors as our assets dear to out heart <br />
                  and clear to our soul!
                </p>
              </div>
            </div>
            <div className='border-t-2 border-[#efefef] py-[30px]'>
              <div
                className='flex justify-center
              '
              >
                <p className='mr-[50px]'>
                  <img src={Wallpaper} alt='' />
                </p>
                <p className='border-x-2 border-[#efefef] px-[50px]'>
                  <img src={OnlineVougue} alt='' />
                </p>
                <p className='border-r-2 border-[#efefef] px-[50px]'>
                  <img src={FreshInflux} alt='' />
                </p>
                <p className='ml-[50px]'>
                  <img src={Auction} alt='' />
                </p>
              </div>
            </div>
            <div className='bg-[#f5f5f7] py-[15px]'>
              <div className='flex justify-center gap-[18px]'>
                <p>
                  <img src={Certificate1} alt='' />
                </p>
                <p>
                  <img src={Certificate2} alt='' />
                </p>
                <p>
                  <img src={Certificate3} alt='' />
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
