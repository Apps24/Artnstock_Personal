import React from 'react';
import Banner from '../components/homepage/banner/Banner';
import ArtGrid from '../components/homepage/gridPages/ArtGrid';
import LimitedEdition from '../components/homepage/limitedEdition/LimitedEdition';
import { useState, useEffect } from 'react';
import { httpClient } from '../axios';
import Combo from '../components/homepage/combo/Combo';
import HomeJoin from '../components/homepage/homeJoin/HomeJoin';
import Magzine from '../components/homepage/magzine/Magzine';
import Footer from '../components/footer/Footer';
import ArtHomeFaq from '../components/faq/ArtHomeFaq';
import Product from '../components/product/Product';

const ProductHomepage = () => {
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
  // useEffect(() => {
  //   httpClient
  //     .get(`/art_product_master/getActiveArtProductMaster`)
  //     .then((res) => {
  //       setGridList(res.data);
  //       console.log(res.data);
  //     });
  // }, []);
  useEffect(() => {
    httpClient
      .get(`/product_sub_category_master/getActiveProductSubCategory`)
      .then((res) => {
        setGridList(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <Banner type='product' />
      <ArtGrid gridList={gridList} type={'product'} />
      <div className='hrLine'></div>

      <LimitedEdition logo={homeObject?.smallLogo} type='product' />
      <div className='hrLine'></div>

      <Product heading='Home Decor' />
      <div className='hrLine'></div>
      <Combo
        logo={homeObject?.smallLogo}
        comboHeading={homeObject?.comboTextImg}
      />
      <div className='mt-[50px]'>
        <HomeJoin
          mainBackgroundImg={homeObject?.signInBackground}
          leftBackgroundImg={homeObject?.signInLeftImg}
          leftTextImg={homeObject?.signInLeftMain}
        />
      </div>
      <Magzine type='product' />
      <ArtHomeFaq type='product' />
      <Footer />
    </>
  );
};

export default ProductHomepage;
