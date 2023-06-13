import React, { useEffect, useState } from 'react';
import { httpClient } from '../axios';
import Banner from '../components/homepage/banner/Banner';
import Combo from '../components/homepage/combo/Combo';
import HomeJoin from '../components/homepage/homeJoin/HomeJoin';
import LimitedEdition from '../components/homepage/limitedEdition/LimitedEdition';
import Magzine from '../components/homepage/magzine/Magzine';
import MainGrid from '../components/homepage/gridPages/MainGrid';
import ProdList from '../components/homepage/prodList/ProdList';
import ArtGrid from '../components/homepage/gridPages/ArtGrid';
import ArtHomeFaq from '../components/faq/ArtHomeFaq';
import Footer from '../components/footer/Footer';

const ArtHomepage = () => {
  const [homeObject, setHomeObject] = useState();

  const [gridList, setGridList] = useState([]);

  useEffect(() => {
    httpClient
      .get(`/dynamic_homepage_content_master/getTypeWiseList/art`)
      .then((res) => {
        console.log(res);
        setHomeObject(res.data);
      });
  }, []);

  // grid api call
  useEffect(() => {
    httpClient
      .get(`/subject_master/getTypeWiseSubjectList/art`)
      .then((res) => {
        setGridList(res.data);
        console.log(res.data);
      });
  }, []);

  const [faq, setfaq] = useState([]);
  const getArtWiseFaqList = () => {
    httpClient
      .get(`/frequently_asked_master/getTypeWiseFaq/art`)
      .then((res) => {
        setfaq(res.data);
        console.log(res);
      });
  };

  useEffect(() => {
    getArtWiseFaqList();
  }, []);

  return (
    <>
      <Banner type='art' />
      <ArtGrid gridList={gridList} />
      <div className='hrLine'></div>
      <LimitedEdition logo={homeObject?.smallLogo} type='art' />
      <div className='hrLine'></div>
      <ProdList heading={homeObject?.popularProductTitle} />

      <HomeJoin
        mainBackgroundImg={homeObject?.signInBackground}
        leftBackgroundImg={homeObject?.signInLeftImg}
        leftTextImg={homeObject?.signInLeftMain}
      />
      <Magzine type='art' />

      <ArtHomeFaq type={faq} />
      <Footer />
    </>
  );
};

export default ArtHomepage;
