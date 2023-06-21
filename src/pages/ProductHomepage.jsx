import React from "react";
import Banner from "../components/homepage/banner/Banner";
import ArtGrid from "../components/homepage/gridPages/ArtGrid";
import LimitedEdition from "../components/homepage/limitedEdition/LimitedEdition";
import { useState, useEffect } from "react";
import { httpClient } from "../axios";
import Combo from "../components/homepage/combo/Combo";
import HomeJoin from "../components/homepage/homeJoin/HomeJoin";
import Magzine from "../components/homepage/magzine/Magzine";
import Footer from "../components/footer/Footer";
import ArtHomeFaq from "../components/faq/ArtHomeFaq";
import Product from "../components/product/Product";

const ProductHomepage = () => {
  const [homeObject, setHomeObject] = useState();
  const [gridList, setGridList] = useState([]);
  const [prodMainCat, setProdMainCat] = useState([]);

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
      .get(`/product_sub_category_master/getTypeWiseList/homeGrid`)
      .then((res) => {
        setGridList(res.data);
        // console.log(res);
      });

    httpClient
      .get("/product_main_category_master/getActiveProductMainCategory")
      .then((res) => {
        // console.log(res.data);
        setProdMainCat(res.data);
      });
  }, []);

  const [faq, setfaq] = useState([]);
  const getArtWiseFaqList = () => {
    httpClient
      .get(`/frequently_asked_master/getTypeWiseFaq/product`)
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

      <Banner type="product" />
      <ArtGrid type="product" gridList={gridList} />
      <div className='hrLine'></div>
      <LimitedEdition logo={homeObject?.smallLogo} type="product" />
      <div className="hrLine"></div>

      {prodMainCat?.map((item) => {
        return (
          <Product
            heading={item?.productMainCategoryName}
            prodMainCatId={item?.productMainCategoryId}
            key={item?.productMainCategoryId}
          />
        );
      })}
      <div className="hrLine"></div>
      <Combo
        logo={homeObject?.smallLogo}
        comboHeading={homeObject?.comboTextImg}
      />
      <div className="mt-[50px]">
        <HomeJoin
          mainBackgroundImg={homeObject?.signInBackground}
          leftBackgroundImg={homeObject?.signInLeftImg}
          leftTextImg={homeObject?.signInLeftMain}
        />
      </div>

      <Magzine type='product' />
      <ArtHomeFaq type={faq} />

      <Footer />
    </>
  );
};

export default ProductHomepage;
