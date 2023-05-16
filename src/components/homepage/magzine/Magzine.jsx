import React from "react";
import ArtLogo from "../../../assets/images/static/Artnstock Logo Magazine Logo.svg";
import leftMagzineImg from "../../../assets/images/static/MagazineCoverHome.jpg";
import magzineArtImg from "../../../assets/images/static/MagazineCoverArt.jpg"
import magzineHeading from "../../../assets/images/static/MagzineHeader.svg";
import magzineBottomArt from "../../../assets/images/static/magzineBottomArt.jpg";

const Magzine = ({type}) => {
  return (
    <div className="py-[100px] ">
      <img className="mx-auto" src={ArtLogo} alt="" />
      <p className="text-primaryGray text-sm14 mt-2 mb-5 text-center">
        Our periodical publication on Artnstock Magazine shall keep you on tap
        with our refurbished stock and information <br />
        for your visual spark.
      </p>
      <div className="flex p-[30px] shadow-regCardShadow w-w1168 mx-auto rounded-[30px]">
        <div className="flex-1">
          <img src={type === 'home' ? leftMagzineImg : magzineArtImg} alt="" />
        </div>
        <div className="flex-1 pl-[30px]">
          <img src={magzineHeading} alt="" />
          <p className="mt-2 mb-3 text-primaryGray text-sm12 text-left">
            Artnstock is the finest site to purchase high-quality stock
            photographs of <br />
            any subject or genre. For those who require high-quality images at
            reasonable prices, <br />
            our photography collection will expand the possibilities for your
            visual projects.
          </p>
          <button className="blackBtn ">Go to Artnstock Magazine</button>
          <img className="mt-[90px]" src={magzineBottomArt} alt="" />
          <p className="text-sm11 text-primaryGray mt-2.5">All artwork and designs used in this magazine remain the property of <br />
Artnstock Private Limited.</p>
        </div>
      </div>
    </div>
  );
};

export default Magzine;
