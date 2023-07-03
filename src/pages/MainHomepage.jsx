import React, { useEffect, useState } from 'react';
import { httpClient } from '../axios';
import Banner from '../components/homepage/banner/Banner';
import Combo from '../components/homepage/combo/Combo';
import HomeJoin from '../components/homepage/homeJoin/HomeJoin';
import LimitedEdition from '../components/homepage/limitedEdition/LimitedEdition';
import Magzine from '../components/homepage/magzine/Magzine';
import MainGrid from '../components/homepage/gridPages/MainGrid';
import ProdList from '../components/homepage/prodList/ProdList';
import Footer from '../components/footer/Footer';
import RoyaltyFree from '../components/Royalty/RoyaltyFree';

const MainHomepage = () => {
  const [homeObject, setHomeObject] = useState();

  useEffect(() => {
    httpClient
      .get(`/dynamic_homepage_content_master/getTypeWiseList/home`)
      .then((res) => {
        // console.log(res);
        setHomeObject(res.data);
      });
  }, []);

  return (
    <>
      <Banner type='home' />
      <MainGrid />
      <div className='hrLine'></div>
      <LimitedEdition logo={homeObject?.smallLogo} type='home' />
      <div className='hrLine'></div>
      <ProdList heading={homeObject?.popularProductTitle} />
      <div className='hrLine'></div>
      <Combo
        logo={homeObject?.smallLogo}
        comboHeading={homeObject?.comboTextImg}
      />
      <div className='hrLine'></div>
      <RoyaltyFree />
      <HomeJoin
        mainBackgroundImg={homeObject?.signInBackground}
        leftBackgroundImg={homeObject?.signInLeftImg}
        leftTextImg={homeObject?.signInLeftMain}
      />
      <Magzine type='home' />
      <Footer />
    </>
  );
};

export default MainHomepage;
