import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { httpClient } from "../../../axios";
import viewIcon from "../../../assets/images/Icons/viewIcon.svg";
import conHead from "../../../assets/images/static/conHead.jpg";
import { Tab } from "@headlessui/react";
import frameType1 from "../../../assets/images/static/Thumbnail Frame 01.jpg";
import questionIcon from "../../../assets/images/Icons/questionIcon.svg";
import minusIcon from "../../../assets/images/Icons/minusIcon.svg";
import plusIcon from "../../../assets/images/Icons/plusIcon.svg";
import certificateImg from "../../../assets/images/static/Certificate.jpg";
import festiveImg from "../../../assets/images/static/Festive Offer.jpg";
import vanIcon from "../../../assets/images/Icons/vanIcon.svg";
import packingIcon from "../../../assets/images/Icons/packingIcon.svg";
import colorCicleImg from "../../../assets/images/Icons/Icon - Select Colour Art Print.svg";
import blackCircleImg from "../../../assets/images/Icons/W Art Print.svg";
import roomViewImg from "../../../assets/images/Icons/Icon - View in a room.svg";
import threeDImg from "../../../assets/images/Icons/Icon - 3D View.svg";
import addIcon from "../../../assets/images/Icons/addIcon.svg";
// import wishlistIcon from '../../../assets/images/Icons/wishlistIcon.svg';
import { ReactComponent as WishlistIcon } from "../../../assets/images/Icons/wishlistIcon.svg";
import shareIcon from "../../../assets/images/Icons/shareIcon.svg";
import productHeead from "../../../assets/images/static/Header - Products (1).svg";
import productImg from "../../../assets/images/static/products.svg";
import wallpaperImg from "../../../assets/images/static/wallpaper.svg";
import brandingImg from "../../../assets/images/static/Branding.svg";
import movetoSet from "../../../assets/images/contributor/movetoSet.png";
import Stars from "../../../assets/images/ComboPack/Stars.png";
import like from "../../../assets/images/ComboPack/like.png";
import Popup from "reactjs-popup";

// prathamesh
import artcolor from "../../../assets/images/lifestyle/artcolor.png";
import mugcolor from "../../../assets/images/lifestyle/mugcolor.png";
import glasscolor from "../../../assets/images/lifestyle/glasscolor.png";
import mousecolor from "../../../assets/images/lifestyle/mousecolor.png";
import coastercolor from "../../../assets/images/lifestyle/coastercolor.png";
import flowercolor from "../../../assets/images/lifestyle/flowercolor.png";
import giftcolor from "../../../assets/images/lifestyle/giftcolor.png";
import bagcolor from "../../../assets/images/lifestyle/bagcolor.png";
import shirtcolor from "../../../assets/images/lifestyle/shirtcolor.png";
import notepadcolor from "../../../assets/images/lifestyle/notepadcolor.png";
import dropdown from "../../../assets/images/socials/dropdown.png";
import tshirtphoto from "../../../assets/images/lifestyle/tshirtphoto.png";
import tickgreen from "../../../assets/images/lifestyle/tickgreen.png";

import DigArtPrint from "../../../assets/images/lifestyle/DigArtPrint.png";
import mensTshirt from "../../../assets/images/lifestyle/mensTshirt.png";
import darkBlueColor from "../../../assets/images/lifestyle/darkBlueColor.png";
import mediumSize from "../../../assets/images/lifestyle/mediumSize.png";
import cottonFabric from "../../../assets/images/lifestyle/cottonFabric.png";
import MensShirt from "../../../assets/images/lifestyle/2MensShirt.png";
import cards from "../../../assets/images/lifestyle/cards.png";
import certificate from "../../../assets/images/lifestyle/Certificate.png";
// import pro from '../../../assets/images/art-details/pro.png';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import profile from "../../../assets/images/Menubar/Profile.png";
import pro from "../../../assets/images/art-details/Pro.png";
import locationImg from "../../../assets/images/art-details/location.png";
import R1 from "../../../assets/images/art-details/R1.png";
import R2 from "../../../assets/images/art-details/R2.png";
import R3 from "../../../assets/images/art-details/R3.png";
import IconFacebook from "../../../assets/images/art-details/IconFacebook.png";
import IconInstagram from "../../../assets/images/art-details/IconInstagram.png";
import IconLinkedin from "../../../assets/images/art-details/IconLinkedin.png";
import azra1 from "../../../assets/images/art-details/azra1.png";
import azra2 from "../../../assets/images/art-details/azra2.png";
import azra3 from "../../../assets/images/art-details/azra3.png";
import azra4 from "../../../assets/images/art-details/azra4.png";
import azra5 from "../../../assets/images/art-details/azra5.png";
import grp from "../../../assets/images/art-details/grp.png";
import grp144 from "../../../assets/images/art-details/grp144.png";
import stars from "../../../assets/images/art-details/stars.png";
import Footer from "../../../components/footer/Footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Wishlist from "../../../utils/wishlist";
import colorPaletimg from "../../../assets/images/art-details/Group 133.svg";
import proImg from "../../../assets/images/art-details/Pro.svg";
import locatiomIcon from "../../../assets/images/art-details/Icon - Location Pointer.svg";
import faceBookIcon from "../../../assets/images/footer/FacebookIcon.png";
import linkdinIcon from "../../../assets/images/footer/LinkedinIcon.png";
import instaIcon from "../../../assets/images/footer/InstagramIcon.png";
import custImg from "../../../assets/images/ComboPack/custImg.png";
import { useDetectClickOutside } from "react-detect-click-outside";
import {
  CartartClass,
  CartArtFrameModel,
} from "../../../models/allModel";

import { useCallback, useRef } from "react";
import { toJpeg } from "html-to-image";
import { toast } from "react-toastify";
import { cartSliceAction } from "../../../store/cartSlice";



const custReview = [
  {
    img: `${custImg}`,
    name: "ksgrafiks",
    type: "Abstract",
    reviewCount: "5",
    photo: "1",
    months: "4 months",
    desc: "Very eye pleasing sculpture. Looks best in a bright room as the variation is colored glass. Leaves do not show in dimly lit area. Very eye pleasing sculpture. Looks best in a bright room as the variation is colored glass. Leaves do not show in dimly lit area.",
    like: "24",
    response: "Thanks Azra - Glad we could help!",
    responseMonth: "7 months",
  },
];

const azraDesign = [
  {
    img: `${azra1}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb",
  },
  {
    img: `${azra2}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb",
  },
  {
    img: `${azra3}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb",
  },
  {
    img: `${azra4}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb",
  },
  {
    img: `${azra5}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb",
  },
];

const otherDesign = [
  {
    img: `${azra4}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb",
  },
  {
    img: `${azra5}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb",
  },
  {
    img: `${azra1}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb",
  },
  {
    img: `${azra3}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb",
  },
  {
    img: `${azra2}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurdfv jhgfyvdh uegfy jkugyufewsd fesrgtyb",
  },
];

const arrImg = [
  {
    img: `${azra4}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurd jhgfyvdh uegf",
  },
  {
    img: `${azra5}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurd jhgfyvdh uegf",
  },
  {
    img: `${azra1}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurd jhgfyvdh uegf",
  },
  {
    img: `${azra3}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurd jhgfyvdh uegf",
  },
  {
    img: `${azra2}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurd jhgfyvdh uegf",
  },
  {
    img: `${azra1}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurd jhgfyvdh uegf",
  },
  {
    img: `${azra3}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurd jhgfyvdh uegf",
  },
  {
    img: `${azra2}`,
    title: "Lorem Ipsum dolor",
    description: "lorem ijsrg gdurd jhgfyvdh uegf",
  },
];

const CustomerImg = [
  `${azra1}`,
  `${azra2}`,
  `${azra3}`,
  `${azra4}`,
  `${azra5}`,
  `${azra2}`,
  `${azra3}`,
  `${azra5}`,
  `${azra4}`,
  `${azra1}`,
];

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  /* &-overlay {
    ...;
  } */
  // use your custom style for ".popup-content"
  &-content {
    background-color: #ffffff;
    color: #333333;
    border-radius: 30px;
    padding: 0;
    width: 88.063rem;
    height: 56.188rem;
    overflow: hidden;
    border: none;
  }
`;

const SeeAllFramesPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  /* &-overlay {
    ...;
  } */
  // use your custom style for ".popup-content"
  &-content {
    background-color: #ffffff;
    color: #333333;
    border-radius: 30px;
    padding: 30px;
    width: 45.125rem;
    height: 45.313rem;
    overflow: hidden;
    border: none;
  }
`;

const WhatIsMatPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  /* &-overlay {
    ...;
  } */
  // use your custom style for ".popup-content"
  &-content {
    background-color: #ffffff;
    color: #333333;
    border-radius: 30px;
    padding: 30px 50px;
    width: 43.125rem;
    height: 25.625rem;
    overflow: hidden;
    border: none;
  }
`;

const PriceDetailsPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  /* &-overlay {
    ...;
  } */
  // use your custom style for ".popup-content"
  &-content {
    background-color: #ffffff;
    color: #333333;
    border-radius: 30px;
    padding: 30px 28px;
    width: 34.375rem;
    height: 36.25rem;
    overflow: hidden;
    border: none;
  }
`;

const ReturnAndExchangePopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  /* &-overlay {
    ...;
  } */
  // use your custom style for ".popup-content"
  &-content {
    background-color: #ffffff;
    color: #333333;
    border-radius: 30px;
    padding: 30px 28px;
    width: 28.0635rem;
    height: 10.563rem;
    overflow: hidden;
    border: none;
  }
`;

const StyledPopupp = styled(Popup)`
  // use your custom style for ".popup-overlay"
  /* &-overlay {
 ...;
} */
  // use your custom style for ".popup-content"
  &-content {
    background-color: #ffffff;
    color: #333333;
    border-radius: 30px;
    padding: 50px;
    width: 490px;
    height: 585px;
  }
`;

const ArtDetails = () => {
  const location = useLocation();

  const [artDetails, setArtDetails] = useState({});

  const [orientationBtn, setOrientationBtn] = useState('');
  const [includeFrame, setIncludeFrame] = useState(true);
  const [includeTopMat, setIncludeTopMat] = useState(false);
  const [includeBottomMat, setIncludeBottomMat] = useState(false);
  const [isTopMatWidthOpen, setIsTopMatWidthOpen] = useState(false);
  const [isBottomMatWidthOpen, setIsBottomMatWidthOpen] = useState(false);
  const includeTopMatRef = useRef();
  const includeBotMatRef = useRef();





  const [isOpenSortBy, setIsOpenSortBy] = useState(false);
  const [isOpenFilterBy, setIsOpenFilterBy] = useState(false);

  const navigate = useNavigate();

  const userId = useSelector((state) => state.auth.userId);

  const userAuth = useSelector((state) => state.auth);



  const dispatch = useDispatch();



  const [verticalImg, setVerticalImg] = useState();
  const [horizontalImg, setHorizontalImg] = useState();
  const [squareImg, setSquareImg] = useState();
  const mutableVariable = useRef('');
  const mutableColor = useRef({});
  let cartModel = new CartartClass();

  useEffect(() => {
    httpClient
      .get(`/art_master/editArtMaster/${location?.state?.id}`)
      .then((res) => {
        console.log(res.data);
        setRecentlyViewed(res.data?.artId);
        cartModel.artId = res.data?.artId;
        setArtDetails(res.data);
        mutableVariable.current = res?.data['imageMaster']?.type;
        setOrientationBtn(res?.data['imageMaster']?.type);
        setVerticalImg(
          res?.data['imageMaster']['imageOrientation']?.verticalUrl
        );
        setHorizontalImg(
          res?.data['imageMaster']['imageOrientation']?.horizontalUrl
        );
        setSquareImg(
          res?.data['imageMaster']['imageOrientation']?.squareUrl
        );
      });
  }, [location]);

  const setRecentlyViewed = async (artId) => {
    try {
      const recentObj = {
        artId: String,
        userId: String,
      };

      recentObj.artId = artId;
      recentObj.userId = userId;
      const res = await httpClient.post("/recently_view_master", recentObj);

      console.log(`Recetly Viewed => ${res.data}`);
    } catch (err) {
      console.log(err);
    }
  };


 


  const [openBig, setOpenBig] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [returnAndExchange, setReturnAndExchange] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const quantityRef = useRef(1);


  useEffect(() => {
    getActivePaperMasterList();
    getHoriOriList();
    getMatList();
    getAllFrames();
    getFolders();
  }, []);

  // // redux slice
  // const selectedAllFilesImages = useSelector(
  //   (state) => state.fileimages.selectedAllFilesImages
  // );

  const [activePaperMasterList, setActivePaperMasterList] = useState(null);
  const [checking, setChecking] = useState();
  const [materialCheck, setMaterialCheck] = useState();
  const mutablePrint = useRef({});
  // // redux slice
  // const selectedAllFilesImages = useSelector(
  //   (state) => state.fileimages.selectedAllFilesImages
  // );

  // const [activePaperMasterList, setActivePaperMasterList] =
  //   useState(null);


  const getActivePaperMasterList = async () => {
    try {
      const res = await httpClient.get(
        '/printing_material_master/getActivePrintingMaterialMasterList'
      );
      // console.log(res.data);
      setActivePaperMasterList(res?.data);
      setChecking(res?.data[0].printingMaterialId);
      setMaterialCheck(res?.data[0]);
      mutablePrint.current = res?.data[0];
      // console.log(testList);
    } catch (err) {
      console.log(err);
    }
  };

  const getCheckValue = (e) => {
    setMaterialCheck(e);
    setChecking(e.printingMaterialId);
  };

  // Orientaion

  const [horiOriList, setHoriOriList] = useState([]);
  const [vertOriList, setVertOriList] = useState([]);
  const [squaOriList, setSquaOriList] = useState([]);
  const [horiSelect, setHoriSelect] = useState();
  const [vertiSelect, setVertiSelect] = useState();
  const [squareSelect, setSquareSelect] = useState();
  const vertiSelectRef = useRef();
  const horiSelectRef = useRef();
  const squareSelectRef = useRef();

  const getHoriOriList = async () => {
    try {
      // horizontal
      const resh = await httpClient.get(
        `shape_master/getShapeWiseList/Horizontal`
      );

      setHoriOriList(resh.data);
      setHoriSelect(resh.data[0]);
      horiSelectRef.current = resh.data[0];
    } catch (err) {
      console.log(err);
    }
    try {
      // vertical
      const resv = await httpClient.get(
        `shape_master/getShapeWiseList/Vertical`
      );
      setVertOriList(resv.data);
      setVertiSelect(resv.data[0]);
      vertiSelectRef.current = resv.data[0];
    } catch (err) {
      console.log(err);
    }
    try {
      // square
      const ress = await httpClient.get(
        `shape_master/getShapeWiseList/Square`
      );
      setSquaOriList(ress.data);
      setSquareSelect(ress.data[0]);
      squareSelectRef.current = ress.data[0];
    } catch (err) {
      console.log(err);
    }
  };

  // Frame
  const [colorFrame, setcolorFrame] = useState(false);

  const [frameList, setFrameList] = useState();
  const [frameColorr, setFrameColorr] = useState(null);
  const [frameChecked, setFrameChecked] = useState();
  const [colorFrameFocus, setcolorFrameFocus] = useState(null);
  const [frameColor, setFrameColor] = useState();
  const [seeAllopen, setSeeAllOpen] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState();

  const colorDrop = () => {
    setcolorFrame(false);
    setcolorFrameFocus(null);
    // console.log(frameColor);
  };
  const ref1 = useDetectClickOutside({ onTriggered: colorDrop });

  const getAllFrames = () => {
    try {
      includeFrame &&
        httpClient.get("/frame_master/getActiveFrameMaster").then((res) => {
          // console.log(res.data);
          setFrameList(res.data);
          setFrameChecked(res.data[0].frameId);
          setFrameColorr(res.data[0]?.frameColor);
          setFrameColor(res.data[0]?.frameColor[0]);
          mutableColor.current = res.data[0]?.frameColor[0];
          setSelectedFrame(res.data[0]);
          localStorage.setItem("selectFrameData", JSON.stringify(res.data[0]));
        });

    } catch (err) {
      console.log(err);
    }
  };

  const getFrameCheck = (e) => {
    setSelectedFrame(e);
    setFrameColor(e.frameColor[0]);
    localStorage.setItem("selectFrameData", JSON.stringify(e));
    mutableColor.current = e.frameColor[0];
    setFrameChecked(e.frameId);
    setFrameColorr(e.frameColor);
  };

  const selectFrameColor = (e) => {
    // console.log(e);
    setcolorFrameFocus(e);
  };

  const setNewFrameColor = () => {
    setFrameColor(colorFrameFocus);
    mutableColor.current = colorFrameFocus;
    colorDrop();
  };

  // Top Mat
  const [topMatWidth, setTopMatWidth] = useState([]);
  const [bottomMatWidth, setBottomMatWidth] = useState([]);

  const [topMatSelect, setTopMatSelect] = useState();
  const [topMatColor, setTopMatColor] = useState();
  const topMatSelectRef = useRef();
  const topMatColorRef = useRef();

  const botMatSelectRef = useRef();
  const botMatColorRef = useRef();
  const [topColorDrop, setTopColorDrop] = useState(false);

  const [openWhatIsMat, setOpenWhatIsMat] = useState(false);

  const topMatDropdown = () => {
    // console.log("ss");
    setIsTopMatWidthOpen(false);
  };
  const ref2 = useDetectClickOutside({ onTriggered: topMatDropdown });

  const topMatColordropdown = () => {
    setTopColorDrop(false);
  };

  const ref3 = useDetectClickOutside({
    onTriggered: topMatColordropdown,
  });

  const getMatList = async () => {
    try {
      const rest = await httpClient.get(
        '/mat_master/getTypeWiseList/top'
      );
      // console.log(rest.data);
    topMatColorRef.current = rest.data.frameColor[0]
includeTopMatRef.current = false
      setTopMatColor(rest.data.frameColor[0]);
      setTopMatWidth(rest.data);
      localStorage.setItem("topMat", JSON.stringify(rest.data));
    } catch (err) {
      console.log(err);
    }
    try {
      // console.log(rest.data);
      const resb = await httpClient.get("/mat_master/getTypeWiseList/bottom");
    botMatColorRef.current = resb.data.frameColor[0]
    includeBotMatRef.current = false

      setBottomMatColor(resb.data.frameColor[0]);
      // console.log(bottomMatColor);
      setBottomMatWidth(resb.data);
      localStorage.setItem("botMat", JSON.stringify(resb.data));
    } catch (err) {
      console.log(err);
    }
  };

  const setTopMatValue = (data) => {
    // console.log(data);
    if (data === null) {
      setTopMatSelect(0);
      topMatSelectRef.current = 0;
    } else {
      setTopMatSelect(data);
      topMatSelectRef.current = data;
    }
    topMatDropdown();
  };

  const selectNewTopMatColor = () => {
    // console.log(topMatColor);
    setTopMatColor(topMatColor);
    topMatColorRef.current = topMatColor
    topMatColordropdown();
  };

  // Bottom Mat

  const [bottomMatSelect, setBottomMatSelect] = useState();
  const [bottomMatColor, setBottomMatColor] = useState();
  const [bottomColorDrop, setBottomColorDrop] = useState(false);

  const bottomMatDropdown = () => {
    // console.log("ss");
    setIsBottomMatWidthOpen(false);
  };
  const ref4 = useDetectClickOutside({
    onTriggered: bottomMatDropdown,
  });

  const bottomMatColordropdown = () => {
    setBottomColorDrop(false);
  };

  const ref5 = useDetectClickOutside({
    onTriggered: bottomMatColordropdown,
  });

  const setBottomMatValue = (data) => {
    // console.log(data);
    if (data === null) {
      setBottomMatSelect(0);
      botMatSelectRef.current = 0;
    } else {
      setBottomMatSelect(data);
      botMatSelectRef.current = data;
    }
    bottomMatDropdown();
  };

  const selectNewBottomMatColor = () => {
    // console.log(bottomMatColor);
    setBottomMatColor(bottomMatColor);
    botMatColorRef.current = bottomMatColor
    bottomMatColordropdown();
  };
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [folderName, setFolderName] = useState(null);
  const [isNameOpen, setIsNameOpen] = useState(false);

  const addToFolder = () => {
    const object = {
      artId: artDetails.artId,
      collectionId: folderName.collectionId,
    };
    httpClient
      .post("/collection_master/CollectionIdWiseAddArt", object)
      .then((res) => {
        console.log(res.data);

        // getUserIdWiseArts();
        getFolders();
      });
  };

  const [categories, setCategories] = useState({
    all: [],
    art: [],
  });

  const getFolders = async () => {
    try {
      const response = await httpClient.get(
        `/collection_master/getUserIdWiseCollectionMasterList/${userId}`
      );
      const data = response.data;
      setCategories((prevCategories) => ({
        ...prevCategories,
        all: [],
        art: [],
      }));

      data.forEach((obj) => {
        if (obj.category === "art") {
          setCategories((prevCategories) => ({
            ...prevCategories,
            art: [...prevCategories.art, obj],
          }));
        }

      });
    } catch (error) {
      console.error(error);
    }
  };

  const [popupLogin, setpopupLogin] = useState(false);

  // Image Capture
  const ref = useRef(null);
  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  const onButtonClick = useCallback(async () => {
    if (ref.current === null) {
      return;
    }

    toJpeg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        let formData = new FormData();
        formData.append("file", dataURItoBlob(dataUrl));
        httpClient
          .post("/CloudinaryImageUpload?parameter=false", formData)
          .then((res) => {
            // console.log(res.data);
            CartArtFrameModel.imgUrl = res.data;
            addToCart();
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  const cartCount = useSelector((state) => state.cart.cartCount);

  const addToCart = async () => {
    CartArtFrameModel.userId = userId;
    CartArtFrameModel.quantity = quantityRef.current;
    CartArtFrameModel.artId = cartModel.artId;
    const ap = JSON.parse(localStorage.getItem("selectFrameData"));
    delete ap?.frameColor;
    if (ap !== null) {
      CartArtFrameModel.frameMaster = ap;
      CartArtFrameModel.frameMaster.frameColor = mutableColor.current.colorCode;
    }
    if (mutableVariable.current === "Vertical") {
      CartArtFrameModel["orientationMaster"] = vertiSelectRef.current;
    } else if (mutableVariable.current === "Horizontal") {
      CartArtFrameModel["orientationMaster"] = horiSelectRef.current;
    } else {
      CartArtFrameModel["orientationMaster"] = squareSelectRef.current;
    }

    CartArtFrameModel["printingMaterialMaster"] = mutablePrint.current;
    const topMat = JSON.parse(localStorage.getItem("topMat"));
    delete topMat?.matWidth;
    delete topMat?.color;
    const botMat = JSON.parse(localStorage.getItem("botMat"));
    delete botMat?.matWidth;
    delete botMat?.color;

    if (includeTopMatRef.current) {
      CartArtFrameModel["matMasterTop"].matId = topMat.matId;
      CartArtFrameModel["matMasterTop"].matType = topMat.matType;
      CartArtFrameModel["matMasterTop"].price = topMat.price;
      CartArtFrameModel["matMasterTop"].matWidth = topMatSelectRef.current;
      CartArtFrameModel["matMasterTop"].color = topMatColorRef.current?.colorCode;
    }
    if (includeBotMatRef.current) {
      CartArtFrameModel["matMasterBottom"].matId = botMat.matId;
      CartArtFrameModel["matMasterBottom"].matType = botMat.matType;
      CartArtFrameModel["matMasterBottom"].price = botMat.price;
      CartArtFrameModel["matMasterBottom"].matWidth = botMatSelectRef.current;
      CartArtFrameModel["matMasterBottom"].color = botMatColorRef.current?.colorCode;
    }

    console.log(CartArtFrameModel);
    const res = await httpClient.post(
      "/cart_art_frame_master/saveCartArtFrame",
      CartArtFrameModel
    );

    if (res.data) {
      toast.success("Successfully Added to Cart");
      dispatch(cartSliceAction.setCartCount(cartCount + 1));

      navigate("/shopping-cart");
    }
  };

  const changeOrientation = (text) => {
    setOrientationBtn(text);
    mutableVariable.current = text;
  };

  const checkoutPage = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="w-w1168 mx-auto mt-10">
        <p className="bullet mb-0.5">
          Artnstock / Art / Abstract Art / Shop Now
        </p>
        <div className="flex">
          <div className="left">
            <div className="w-[35.625rem] h-[35.625rem] bg-[#F5F5F7] rounded-[30px] relative flex items-center justify-center px-[15px] py-[40px]">
              <div className="bg-primaryBlack text-[#ffffff] absolute top-[15px] left-[15px] text-[10px] font-normal leading-3.5 rounded-2xl py-0.5 px-2.5">
                Exclusive
              </div>
              {/* Frame */}

              <div
                ref={ref}
                className={`frame relative h-[30.625rem]`}
                style={{
                  backgroundColor: `${
                    includeFrame
                      ? frameColor !== null
                        ? `${frameColor?.colorCode}`
                        : '#333333'
                      : 'transparent'
                  }`,
                  width: `${
                    orientationBtn === 'Vertical'
                      ? 30.625 * 0.7
                      : 30.625
                  }rem`,
                  height: `${
                    orientationBtn === 'Horizontal'
                      ? 30.625 * 0.7
                      : 30.625
                  }rem`,
                }}
              >
                <div
                  className={`mat absolute shadow-matInset w-[${
                    !includeFrame && '100%'
                  }] h-[${!includeFrame && '100%'}]`}
                  style={{
                    top: `${
                      includeFrame ? selectedFrame?.width * 5 : 0
                    }px `,
                    bottom: `${
                      includeFrame ? selectedFrame?.width * 5 : 0
                    }px `,
                    left: `${
                      includeFrame ? selectedFrame?.width * 5 : 0
                    }px`,
                    right: `${
                      includeFrame ? selectedFrame?.width * 5 : 0
                    }px`,
                    backgroundColor: `${
                      topMatColor && includeTopMat
                        ? topMatColor?.colorCode
                        : '#f2f2f2'
                    }`,
                  }}
                >
                  <div
                    className={`bottom mat absolute  shadow-matInset`}
                    style={{
                      top: `${
                        includeTopMat ? Number(topMatSelect) * 5 : 0
                      }px`,
                      bottom: `${
                        includeTopMat ? Number(topMatSelect) * 5 : 0
                      }px`,
                      left: `${
                        includeTopMat ? Number(topMatSelect) * 5 : 0
                      }px`,
                      right: `${
                        includeTopMat ? Number(topMatSelect) * 5 : 0
                      }px`,
                      backgroundColor: `${
                        bottomMatColor && includeBottomMat
                          ? bottomMatColor?.colorCode
                          : '#f2f2f2'
                      }`,
                    }}
                  >
                    <div
                      className={`art z-10 absolute  after:content after:block after:absolute after:top-0 after:w-[100%] after:h-[100%] after:shadow-matInset `}
                      style={{
                        top: `${
                          includeBottomMat
                            ? Number(bottomMatSelect) * 5
                            : 0
                        }px`,
                        bottom: `${
                          includeBottomMat
                            ? Number(bottomMatSelect) * 5
                            : 0
                        }px`,
                        left: `${
                          includeBottomMat
                            ? Number(bottomMatSelect) * 5
                            : 0
                        }px`,
                        right: `${
                          includeBottomMat
                            ? Number(bottomMatSelect) * 5
                            : 0
                        }px`,
                      }}
                    >
                      <img
                        src={`${
                          orientationBtn === 'Vertical'
                            ? verticalImg
                            : orientationBtn === 'Horizontal'
                            ? horizontalImg
                            : orientationBtn === 'Square'
                            ? squareImg
                            : artDetails.image
                        }`}
                        alt=''
                        className='w-[100%] h-[100%] '
                      />
                    </div>
                  </div>
                </div>
              </div>

              <img
                src={viewIcon}
                className='absolute bottom-[15px] right-[15px] cursor-pointer'
                alt=''
                onClick={() => setOpenBig(true)}
              />

              <StyledPopup
                open={openBig}
                closeOnDocumentClick={true}
                position={'top center'}
                onClose={() => setOpenBig(false)}
              >
                <img
                  src={horizontalImg}
                  className='w-[100%]'
                  alt=''
                />
              </StyledPopup>
            </div>

            <div className='flex justify-between mt-2.5 mb-5'>
              <div className='flex gap-x-2.5'>
                <img src={colorCicleImg} alt='' />
                <img src={blackCircleImg} alt='' />
                <img src={roomViewImg} alt='' />
                <img src={threeDImg} alt='' />
              </div>
              <div className="flex gap-x-2.5 items-center">
                {popupLogin && (
                  <div
                    className={`z-999 right-[117px] bg-[#fff] rounded-[16px] w-[266px] absolute bottom-[38px] left-[-127px]`}
                    style={{
                      boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="flex gap-[5px] flex-col p-[14px] leading-[1.3] text-center">
                      <p className="font-medium text-primaryBlack text-[15px]">
                        Create Account
                      </p>
                      <p className="text-primaryGray text-[11px]">
                        To create and add to a collection, you must be a
                        logged-in member
                      </p>
                      <button
                        onClick={(e) => {
                          navigate("/join");
                          e.stopPropagation();
                        }}
                        className="bg-[#8e8e8e] rounded-[14px] h-[28px] w-[108px] text-[12px] font-medium text-[white] mx-[auto]"
                      >
                        Create Account
                      </button>
                      <p
                        onClick={(e) => {
                          navigate("/login");
                          e.stopPropagation();
                        }}
                        className="text-orangeColor text-[11px]"
                      >
                        Already a member? Sign in
                      </p>
                      <p className="text-pinkColor text-[11px]">
                        Note: Downloaded images will be saved in ‘Collections’
                        folder
                      </p>
                    </div>
                    <div className="absolute left-[47%] bottom-[-10px] w-[20px] h-[20px] bg-[white] rounded-br-[5px] transform rotate-45 shadow-inner"></div>
                  </div>
                )}

                {userAuth.login === true ? (
                  <StyledPopupp
                    trigger={
                      <img className="cursor-pointer" src={addIcon} alt="" />
                    }
                    modal
                  >
                    {(close) => (
                      <div className="flex flex-col gap-[21px]">
                        {/* {selectedAllFilesImages.length > 0 ? ( */}
                        <div
                          style={{
                            backgroundImage: `url(${artDetails.image})`,
                          }}
                          className="w-[390px] h-[270px] bg-no-repeat bg-center bg-cover rounded-[16px]"
                        ></div>

                        <div>
                          <div className="flex flex-col">
                            <p className="text-[15px] font-medium mb-[3px]">
                              Select Category
                            </p>
                            <div>
                              <button
                                onClick={() => {
                                  setIsCategoryOpen(!isCategoryOpen);
                                }}
                                className={`${
                                  isCategoryOpen === true
                                    ? "rounded-t-[20px] shadow-dropShadowButton border-b border-[#efefef]"
                                    : "rounded-[20px] border  border-[#d6d6d6]"
                                } cursor-pointer w-[390px] h-[40px] bg-[#FFFFFF] text-primaryGray text-sm14 font-medium flex items-center justify-between px-[15px]`}
                              >
                                {category === "" ? (
                                  <span>Select Category</span>
                                ) : (
                                  <span>{category}</span>
                                )}

                                <img
                                  className="inline-block"
                                  src={dropdown}
                                  alt=""
                                />
                              </button>

                              {isCategoryOpen && (
                                <ul className="shadow-dropShadow rounded-b-2xl z-50 cursor-pointer hover:overflow-hidden dropdown__menu absolute bg-[#ffffff] w-[390px] text-center text-[14px] text-primaryGray">
                                  <li
                                    onClick={() => {
                                      setCategory("Art");
                                      setIsCategoryOpen(!isCategoryOpen);
                                      setFolderName(null);
                                    }}
                                    className="py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]"
                                  >
                                    Art
                                  </li>
                                  <li
                                    onClick={() => {
                                      setCategory("Photos");
                                      setIsCategoryOpen(!isCategoryOpen);
                                      setFolderName(null);
                                    }}
                                    className="py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]"
                                  >
                                    Photos
                                  </li>
                                  <li
                                    onClick={() => {
                                      setCategory("Footage");
                                      setIsCategoryOpen(!isCategoryOpen);
                                      setFolderName(null);
                                    }}
                                    className="py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]"
                                  >
                                    Footage
                                  </li>
                                  <li
                                    onClick={() => {
                                      setCategory("Music");
                                      setIsCategoryOpen(!isCategoryOpen);
                                      setFolderName(null);
                                    }}
                                    className="py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]"
                                  >
                                    Music
                                  </li>
                                  <li
                                    onClick={() => {
                                      setCategory("Templates");
                                      setIsCategoryOpen(!isCategoryOpen);
                                      setFolderName(null);
                                    }}
                                    className="py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]"
                                  >
                                    Templates
                                  </li>
                                  <li
                                    onClick={() => {
                                      setCategory("Product");
                                      setIsCategoryOpen(!isCategoryOpen);
                                      setFolderName(null);
                                    }}
                                    className="py-1 px-3.5 hover:bg-[#F0F0F0]"
                                  >
                                    Product
                                  </li>
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col">
                            <p className="text-[15px] font-medium mb-[3px]">
                              Set Name
                            </p>
                            <div>
                              <button
                                onClick={() => {
                                  setIsNameOpen(!isNameOpen);
                                }}
                                // className={`flex items-center justify-between px-[15px] text-primaryGray text-sm14 font-medium cursor-pointer w-[390px] h-[40px] bg-[#FFFFFF] rounded-[20px] border border-[#d6d6d6]`}
                                className={`${
                                  isNameOpen === true
                                    ? "rounded-t-[20px] shadow-dropShadowButton border-b border-[#efefef]"
                                    : "rounded-[20px] border  border-[#d6d6d6]"
                                } cursor-pointer w-[390px] h-[40px] bg-[#FFFFFF] text-primaryGray text-sm14 font-medium flex items-center justify-between px-[15px]`}
                              >
                                {folderName === null ? (
                                  <span>Enter Set Name</span>
                                ) : (
                                  <span>{folderName.title}</span>
                                )}
                                {}

                                <img
                                  className="inline-block"
                                  src={dropdown}
                                  alt=""
                                />
                              </button>

                              {category === "Art" ? (
                                <div>
                                  {isNameOpen && (
                                    <ul className="cursor-pointer shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute bg-[#ffffff] w-[390px] text-center text-[14px] text-primaryGray">
                                      {categories.art.map((items, index) => (
                                        <li
                                          onClick={() => {
                                            setFolderName(items);
                                            setIsNameOpen(!isNameOpen);
                                          }}
                                          className="py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]"
                                        >
                                          {items.title}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ) : category === "Photos" ? (
                                <div>
                                  {isNameOpen && (
                                    <ul className="cursor-pointer shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute bg-[#ffffff] w-[390px] text-center text-[14px] text-primaryGray">
                                      {categories.photo.map((items, index) => (
                                        <li
                                          onClick={() => {
                                            setFolderName(items);
                                            setIsNameOpen(!isNameOpen);
                                          }}
                                          className="py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]"
                                        >
                                          {items.title}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-[10px] justify-center pb-[30px]">
                          <button
                            onClick={() => {
                              addToFolder();
                              close();
                            }}
                            className="blackBtn h-[40px] w-[88px]"
                          >
                            Save
                          </button>
                          <button
                            onClick={close}
                            className="h-[40px] px-6 py-2 rounded-3xl text-sm14 text-primaryBlack border-[2px] w-[88px]"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </StyledPopupp>
                ) : (
                  <img
                    className="cursor-pointer"
                    onClick={() => {
                      setpopupLogin(!popupLogin);
                    }}
                    src={addIcon}
                    alt=""
                  />
                )}
                <Wishlist
                  id={artDetails.artId}
                  type='small'
                  prodType='art'
                />
                <img src={shareIcon} alt='' />
              </div>
            </div>

            <p className='text-primaryBlack text-[15px] font-medium leading-5 mb-1'>
              You have selected
            </p>
            <div className='h-[220px] w-full rounded-2xl bg-gradient-to-r from-[#DC4C9A] via-[#9593CD] via-[#84D49C] via-[#CCEC3B] to-[#F7941D] p-[1px]'>
              <div className=' h-[100%] w-[100%] bg-[#ffffff] rounded-2xl py-2.5 px-2.5'>
                <div className='flex gap-2.5'>
                  {/* Orientation */}
                  {orientationBtn === 'Square' ? (
                    <div className='text-center'>
                      <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M4 1H44C45.6569 1 47 2.34315 47 4V44C47 45.6569 45.6569 47 44 47H4C2.34315 47 1 45.6569 1 44V4C1 2.34315 2.34315 1 4 1ZM44 0H4C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0ZM13 10H35C36.6569 10 38 11.3431 38 13V35C38 36.6569 36.6569 38 35 38H13C11.3431 38 10 36.6569 10 35V13C10 11.3431 11.3431 10 13 10Z'
                          fill='#BBBBBB'
                        />
                      </svg>

                      <p
                        className={`text-sm11 ${'text-primaryGray'} mt-0.5`}
                      >
                        Square <br />
                        Orientation
                      </p>
                    </div>
                  ) : orientationBtn === 'Horizontal' ? (
                    <div>
                      <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M4 1H44C45.6569 1 47 2.34315 47 4V44C47 45.6569 45.6569 47 44 47H4C2.34315 47 1 45.6569 1 44V4C1 2.34315 2.34315 1 4 1ZM44 0H4C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0ZM13 14H35C36.6569 14 38 15.3431 38 17V31C38 32.6569 36.6569 34 35 34H13C11.3431 34 10 32.6569 10 31V17C10 15.3431 11.3431 14 13 14Z'
                          fill='#BBBBBB'
                        />
                      </svg>
                      <p
                        className={`text-sm11 ${'text-primaryGray'} mt-0.5`}
                      >
                        Horizontal <br />
                        Orientation
                      </p>
                    </div>
                  ) : (
                    <div>
                      <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M4 1H44C45.6569 1 47 2.34315 47 4V44C47 45.6569 45.6569 47 44 47H4C2.34315 47 1 45.6569 1 44V4C1 2.34315 2.34315 1 4 1ZM44 0H4C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0ZM17 10H31C32.6569 10 34 11.3431 34 13V35C34 36.6569 32.6569 38 31 38H17C15.3431 38 14 36.6569 14 35V13C14 11.3431 15.3431 10 17 10Z'
                          fill='#BBBBBB'
                        />
                      </svg>
                      <p
                        className={`text-sm11 ${'text-primaryGray'} mt-0.5`}
                      >
                        Vertical <br />
                        Orientation
                      </p>
                    </div>
                  )}

                  {/* Frame */}
                  {includeFrame ? (
                    <div className='text-center'>
                      <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M4 0C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0H4ZM5 3C3.89543 3 3 3.89543 3 5V43C3 44.1046 3.89543 45 5 45H43C44.1046 45 45 44.1046 45 43V5C45 3.89543 44.1046 3 43 3H5Z'
                          className={`${'fill-[#BBBBBB]'}`}
                        />
                        <rect
                          x='10'
                          y='10'
                          width='28'
                          height='28'
                          rx='2'
                          fill='#EEEEEE'
                        />
                      </svg>

                      <p
                        className={`text-sm11 ${'text-primaryGray'} mt-0.5`}
                      >
                        Frame <br /> Included
                      </p>
                    </div>
                  ) : (
                    <div className='text-center'>
                      <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M4 0C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0H4ZM5 3C3.89543 3 3 3.89543 3 5V43C3 44.1046 3.89543 45 5 45H43C44.1046 45 45 44.1046 45 43V5C45 3.89543 44.1046 3 43 3H5Z'
                          className={`${'fill-[#BBBBBB]'}`}
                        />
                        <rect
                          x='10'
                          y='10'
                          width='28'
                          height='28'
                          rx='2'
                          fill='#EEEEEE'
                        />
                        <rect
                          width='58.2986'
                          height='1.0096'
                          rx='0.5'
                          transform='matrix(0.706047 0.708165 -0.706047 0.708165 3.83838 3)'
                          fill='#BBBBBB'
                        />
                        <rect
                          width='58.2986'
                          height='1.0096'
                          rx='0.5'
                          transform='matrix(-0.706047 0.708165 0.706047 0.708165 44.1616 3)'
                          fill='#BBBBBB'
                        />
                      </svg>

                      <p
                        className={`text-sm11 ${'text-primaryGray'} mt-0.5`}
                      >
                        Frame <br /> Excluded
                      </p>
                    </div>
                  )}
                  {includeFrame && (
                    <div className='border rounded-[10px] w-[48px] h-[48px] border-[#EFEFEF] text-center'>
                      <img
                        src={selectedFrame?.frameThumbnailUrl}
                        alt=''
                      />
                      <p
                        className={`text-sm11 mt-0.5 ${'text-primaryGray'}`}
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {/* {selectedFrame?.frameName} */}
                        Chelsea <br />
                        Black
                      </p>
                    </div>
                  )}

                  {/* TopMat */}
                  {includeTopMat && (
                    <div className='text-center'>
                      <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4 0.5H44C45.933 0.5 47.5 2.067 47.5 4V44C47.5 45.933 45.933 47.5 44 47.5H4C2.067 47.5 0.5 45.933 0.5 44V4C0.5 2.067 2.067 0.5 4 0.5Z'
                          className={`${'fill-[#EEEEEE]'}`}
                          stroke='#D6D6D6'
                        />
                        <path
                          d='M36 9H12C10.3431 9 9 10.3431 9 12V36C9 37.6569 10.3431 39 12 39H36C37.6569 39 39 37.6569 39 36V12C39 10.3431 37.6569 9 36 9Z'
                          fill='white'
                        />
                      </svg>

                      <p
                        className={`text-sm11 ${'text-primaryGray'} mt-0.5`}
                      >
                        Top Mat
                      </p>
                    </div>
                  )}

                  {/* Bottom mat */}
                  {includeBottomMat && (
                    <div className='text-center'>
                      <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4 0.5H44C45.933 0.5 47.5 2.067 47.5 4V44C47.5 45.933 45.933 47.5 44 47.5H4C2.067 47.5 0.5 45.933 0.5 44V4C0.5 2.067 2.067 0.5 4 0.5Z'
                          stroke='#D6D6D6'
                        />
                        <path
                          d='M36 8H12C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8Z'
                          className={`${'fill-[#EEEEEE]'}`}
                        />
                        <path
                          d='M30 15H18C16.3431 15 15 16.3431 15 18V30C15 31.6569 16.3431 33 18 33H30C31.6569 33 33 31.6569 33 30V18C33 16.3431 31.6569 15 30 15Z'
                          fill='white'
                        />
                      </svg>

                      <p
                        className={`text-sm11 ${'text-primaryGray'} mt-0.5`}
                      >
                        Bottom Mat
                      </p>
                    </div>
                  )}
                </div>
                <div className='mt-5 border-t border-b border-[#EFEFEF] w-[100%]'>
                  <table className='w-[100%]'>
                    <tr className='border-b border-[#EFEFEF]'>
                      <td className='text-primaryGray text-sm12 font-medium leading-4 w-[120px]'>
                        Image Size:
                      </td>
                      <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                        {orientationBtn === 'Horizontal'
                          ? `${horiSelect?.width}cm x ${horiSelect?.height}cm`
                          : orientationBtn === 'Vertical'
                          ? `${vertiSelect?.width}cm x ${vertiSelect?.height}cm`
                          : `${squareSelect?.width}cm x ${squareSelect?.height}cm`}
                      </td>
                    </tr>
                    <tr className='border-b border-[#EFEFEF]'>
                      <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                        Top Mat Width:
                      </td>
                      <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                        {topMatSelect}cm
                      </td>
                    </tr>
                    <tr className='border-b border-[#EFEFEF]'>
                      <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                        Bottom Mat Width:
                      </td>
                      <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                        {bottomMatSelect}cm
                      </td>
                    </tr>
                    <tr className='border-b border-[#EFEFEF]'>
                      <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                        Frame Width:
                      </td>
                      <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                        {includeFrame ? selectedFrame?.width : 0}cm
                      </td>
                    </tr>
                    <tr className=''>
                      <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                        Overall Size:
                      </td>
                      <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                        {orientationBtn === 'Horizontal'
                          ? `${
                              Number(horiSelect?.width) +
                              (includeFrame
                                ? Number(selectedFrame?.width)
                                : 0) +
                              (topMatSelect !== undefined
                                ? Number(topMatSelect)
                                : 0) +
                              (bottomMatSelect !== undefined
                                ? Number(bottomMatSelect)
                                : 0)
                            }cm x ${
                              Number(horiSelect?.height) +
                              (includeFrame
                                ? Number(selectedFrame?.width)
                                : 0) +
                              (topMatSelect !== undefined
                                ? Number(topMatSelect)
                                : 0) +
                              (bottomMatSelect !== undefined
                                ? Number(bottomMatSelect)
                                : 0)
                            }cm`
                          : orientationBtn === 'Vertical'
                          ? `${
                              Number(vertiSelect?.width) +
                              (includeFrame
                                ? Number(selectedFrame?.width)
                                : 0) +
                              (topMatSelect !== undefined
                                ? Number(topMatSelect)
                                : 0) +
                              (bottomMatSelect !== undefined
                                ? Number(bottomMatSelect)
                                : 0)
                            }cm x ${
                              Number(vertiSelect?.height) +
                              (includeFrame
                                ? Number(selectedFrame?.width)
                                : 0) +
                              (topMatSelect !== undefined
                                ? Number(topMatSelect)
                                : 0) +
                              (bottomMatSelect !== undefined
                                ? Number(bottomMatSelect)
                                : 0)
                            }cm`
                          : `${
                              Number(squareSelect?.width) +
                              (includeFrame
                                ? Number(selectedFrame?.width)
                                : 0) +
                              (topMatSelect !== undefined
                                ? Number(topMatSelect)
                                : 0) +
                              (bottomMatSelect !== undefined
                                ? Number(bottomMatSelect)
                                : 0)
                            }cm x ${
                              Number(squareSelect?.height) +
                              (includeFrame
                                ? Number(selectedFrame?.width)
                                : 0) +
                              (topMatSelect !== undefined
                                ? Number(topMatSelect)
                                : 0) +
                              (bottomMatSelect !== undefined
                                ? Number(bottomMatSelect)
                                : 0)
                            }cm`}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}

          <div className="right pl-7">
            <p className="text-[1.563rem] font-medium leading-7 text-primaryBlack mb-0.5">

              {artDetails?.artName}
            </p>
            {/* <img src={conHead} alt='' /> */}
            <div className="flex gap-[4px]">
              {artDetails?.userMaster?.coverImage === null ? (
                <AccountCircleIcon
                  style={{
                    fontSize: "xx-large",
                  }}
                />
              ) : (
               <div
                  className='w-[32px] h-[32px] bg-cover bg-center rounded-[50%]'
                  style={{
                    backgroundImage: `url(${artDetails?.userMaster?.coverImage})`,
                  }}
                ></div>
              )}

              {/* <div className=''></div> */}
              <div className="flex flex-col mt-[3px]">
                <img className="w-[43px] h-[15px]" src={pro} alt="pro" />
                <p className="text-[11px] text-primaryGray leading-[1] ">
                  by{" "}
                  <span
                    onClick={() => {
                      navigate("/view-my-store", {
                        state: artDetails?.userMaster,
                      });
                    }}
                    className="text-orangeColor"
                  >
                    {artDetails?.userMaster?.displayName}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-2 mb-8 border-t-2 border-b-2 border-[#EFEFEF]">
              <table className="w-[100%]">
                <tr className="border-b border-[#EFEFEF]">
                  <td className="text-primaryGray text-sm12 font-medium leading-4 w-[100px]">
                    Product ID:
                  </td>
                  <td className="text-primaryGray text-sm12 font-normal leading-4 ">
                    {artDetails?.arProductNo}
                  </td>
                </tr>
                <tr className="border-b border-[#EFEFEF]">
                  <td className="text-primaryGray text-sm12 font-medium leading-4 ">
                    Availability:
                  </td>
                  <td className="text-primaryGray text-sm12 font-normal leading-4 ">
                    {artDetails?.stockStatus}
                  </td>
                </tr>
                <tr className="">
                  <td className="text-primaryGray text-sm12 font-medium leading-4 ">
                    Property Release:
                  </td>
                  <td className="text-primaryGray text-sm12 font-normal leading-4 ">
                    Yes
                  </td>
                </tr>
              </table>
            </div>
            {/* Tabs */}
            <Tab.Group>
              <Tab.List
                className="border border-[#E9E9E9]  rounded-3xl overflow-hidden"
                style={{ width: "fit-content" }}
              >
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-[#333333] text-[15px] font-medium leading-5 py-2.5 px-6 outline-none bg-[#bbbbbb]"
                      : "text-[#757575] text-[15px] font-medium leading-5 py-2.5 px-6 border-r border-[#D7D7D7] bg-[#EEEEEE]"
                  }
                >
                  Size
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-[#333333] bg-[#bbbbbb] text-[15px] font-medium leading-5 py-2.5 px-6 outline-none"
                      : "text-[#757575] text-[15px] font-medium leading-5 py-2.5 px-6 border-r border-[#D7D7D7] bg-[#EEEEEE]"
                  }
                >
                  Frame
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-[#333333] bg-[#bbbbbb] text-[15px] font-medium leading-5 py-2.5 px-6 outline-none"
                      : "text-[#757575] text-[15px] font-medium leading-5 py-2.5 px-6 border-r border-[#D7D7D7] bg-[#EEEEEE]"
                  }
                >
                  Mat
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-[#333333] bg-[#bbbbbb] text-[15px] font-medium leading-5 py-2.5 px-6 outline-none"
                      : "text-[#757575] text-[15px] font-medium leading-5 py-2.5 px-6 bg-[#EEEEEE]"
                  }
                >
                  Material
                </Tab>
              </Tab.List>
              <Tab.Panels className="pt-5 pb-7">
                <Tab.Panel>
                  <p className="text-primaryBlack text-[15px] font-medium leading-5 mb-1">
                    Select Print Orientation
                  </p>
                  <div className="flex gap-2.5 mb-5">
                    {/* Horizontal */}
                    <div className="text-center">
                      <svg
                        onClick={() => {
                          changeOrientation('Horizontal');
                        }}
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="39"
                          height="39"
                          rx="3.5"
                          className={`${
                            orientationBtn === 'Horizontal'
                              ? 'stroke-[#333333] '
                              : 'stroke-[#d9d9d9]'
                          }`}
                        />
                        <path
                          d="M8 14C8 12.8954 8.89543 12 10 12H30C31.1046 12 32 12.8954 32 14V26C32 27.1046 31.1046 28 30 28H10C8.89543 28 8 27.1046 8 26V14Z"
                          className={`${
                            orientationBtn === 'Horizontal'
                              ? 'fill-[#333333]'
                              : 'fill-[#BBBBBB]'
                          }`}
                          fill="#BBBBBB"
                        />
                      </svg>
                      <p
                        className={`text-sm11 ${
                          orientationBtn === 'Horizontal'
                            ? 'text-[#333333] '
                            : 'text-primaryGray'
                        }`}
                      >
                        Horizontal
                      </p>
                    </div>

                    {/* Verticle */}
                    <div className='text-center'>
                      <svg
                        onClick={() => {
                          changeOrientation('Vertical');
                        }}
                        width='40'
                        height='40'
                        viewBox='0 0 40 40'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="39"
                          height="39"
                          rx="3.5"
                          className={`${
                            orientationBtn === 'Vertical'
                              ? 'stroke-[#333333] '
                              : 'stroke-[#d9d9d9]'
                          }`}
                        />
                        <path
                          d="M12 10C12 8.89543 12.8954 8 14 8H26C27.1046 8 28 8.89543 28 10V30C28 31.1046 27.1046 32 26 32H14C12.8954 32 12 31.1046 12 30V10Z"
                          className={`${
                            orientationBtn === 'Vertical'
                              ? 'fill-[#333333]'
                              : 'fill-[#BBBBBB]'
                          }`}
                          fill="#BBBBBB"
                        />
                      </svg>
                      <p
                        className={`text-sm11 ${
                          orientationBtn === 'Vertical'
                            ? 'text-[#333333] '
                            : 'text-primaryGray'
                        }`}
                      >
                        Vertical
                      </p>
                    </div>

                    {/* Square */}
                    <div className='text-center'>
                      <svg
                        onClick={() => changeOrientation('Square')}
                        width='40'
                        height='40'
                        viewBox='0 0 40 40'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="39"
                          height="39"
                          rx="3.5"
                          className={`${
                            orientationBtn === 'Square'
                              ? 'stroke-[#333333] '
                              : 'stroke-[#d9d9d9]'
                          }`}
                        />
                        <path
                          d="M8 10C8 8.89543 8.89543 8 10 8H30C31.1046 8 32 8.89543 32 10V30C32 31.1046 31.1046 32 30 32H10C8.89543 32 8 31.1046 8 30V10Z"
                          className={`${
                            orientationBtn === 'Square'
                              ? 'fill-[#333333]'
                              : 'fill-[#BBBBBB]'
                          }`}
                          fill="#BBBBBB"
                        />
                      </svg>
                      <p
                        className={`text-sm11 ${
                          orientationBtn === 'Square'
                            ? 'text-[#333333] '
                            : 'text-primaryGray'
                        }`}
                      >
                        Square
                      </p>
                    </div>
                  </div>

                  {orientationBtn === 'Horizontal' ? (
                    <div>
                      <p className="text-primaryBlack text-[15px] font-medium leading-5 mb-1">
                        Select <span className="capitalize">Horizontal</span>{" "}
                        Orientation
                      </p>

                      <div className='flex gap-5 flex-wrap mb-2.5'>
                        {horiOriList.length > 0 &&
                          horiOriList?.map((obj) => (
                            <div className='flex items-center'>
                              <input
                                checked={
                                  horiSelect?.orientationId ===
                                  obj?.orientationId
                                }
                                onChange={() => {
                                  setHoriSelect(obj);
                                  horiSelectRef.current = obj;
                                }}
                                className=" mr-1"
                                type="checkbox"
                              />
                              <p className='text-[13px] text-primaryGray'>
                                {obj.width}cm x {obj.height}cm
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  ) : orientationBtn === "Vertical" ? (
                    <div>
                      <p className="text-primaryBlack text-[15px] font-medium leading-5 mb-1">
                        Select <span className="capitalize">Vertical</span>{" "}
                        Orientation
                      </p>

                      <div className='flex gap-5 flex-wrap mb-2.5'>
                        {vertOriList.length > 0 &&
                          vertOriList?.map((obj) => (
                            <div className='flex items-center'>
                              <input
                                checked={
                                  vertiSelect?.orientationId ===
                                  obj?.orientationId
                                }
                                onChange={() => {
                                  setVertiSelect(obj);
                                  vertiSelectRef.current = obj;
                                }}
                                className=" mr-1"
                                type="checkbox"
                              />
                              <p className='text-[13px] text-primaryGray'>
                                {obj.width}cm x {obj.height}cm
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-primaryBlack text-[15px] font-medium leading-5 mb-1">
                        Select <span className="capitalize">Square</span>{" "}
                        Orientation
                      </p>

                      <div className='flex gap-5 flex-wrap mb-2.5'>
                        {squaOriList.length > 0 &&
                          squaOriList?.map((obj) => (
                            <div className='flex items-center'>
                              <input
                                checked={
                                  squareSelect?.orientationId ===
                                  obj?.orientationId
                                }
                                onChange={() => {
                                  setSquareSelect(obj);
                                  squareSelectRef.current = obj;
                                }}
                                className=" mr-1"
                                type="checkbox"
                              />
                              <p className='text-[13px] text-primaryGray '>
                                {obj.width}cm x {obj.height}cm
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  <p className="text-sm11 text-primaryGray font-medium">
                    The artwork will be cropped to fit the selected size. <br />
                    The sizes above are standard print sizes for horizontal
                    images.
                  </p>
                </Tab.Panel>
                <Tab.Panel>
                  <p className="text-primaryBlack text-[15px] font-medium leading-5 mb-1">
                    Select Frame and Colour
                  </p>
                  <div className="flex gap-2.5 mb-5">
                    {/* Include Frame */}
                    <div className="text-center">
                      <svg
                        onClick={() => {
                          setIncludeFrame(true);
                        }}
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 0C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0H4ZM5 3C3.89543 3 3 3.89543 3 5V43C3 44.1046 3.89543 45 5 45H43C44.1046 45 45 44.1046 45 43V5C45 3.89543 44.1046 3 43 3H5Z"
                          className={`${
                            includeFrame ? "fill-[#333333]" : "fill-[#BBBBBB]"
                          }`}
                        />
                        <rect
                          x="10"
                          y="10"
                          width="28"
                          height="28"
                          rx="2"
                          fill="#EEEEEE"
                        />
                      </svg>

                      <p
                        className={`text-sm11 ${
                          includeFrame ? "text-[#333333] " : "text-primaryGray"
                        }`}
                      >
                        Include <br /> Frame
                      </p>
                    </div>
                    {/* Exclude Frame */}
                    <div className="text-center">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          setIncludeFrame(false);
                          localStorage.removeItem("selectFrameData");
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 0C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0H4ZM5 3C3.89543 3 3 3.89543 3 5V43C3 44.1046 3.89543 45 5 45H43C44.1046 45 45 44.1046 45 43V5C45 3.89543 44.1046 3 43 3H5Z"
                          className={`${
                            !includeFrame ? "fill-[#333333]" : "fill-[#BBBBBB]"
                          }`}
                        />
                        <rect
                          x="10"
                          y="10"
                          width="28"
                          height="28"
                          rx="2"
                          fill="#EEEEEE"
                        />
                        <rect
                          width="58.2986"
                          height="1.0096"
                          rx="0.5"
                          transform="matrix(0.706047 0.708165 -0.706047 0.708165 3.83838 3)"
                          fill="#BBBBBB"
                        />
                        <rect
                          width="58.2986"
                          height="1.0096"
                          rx="0.5"
                          transform="matrix(-0.706047 0.708165 0.706047 0.708165 44.1616 3)"
                          fill="#BBBBBB"
                        />
                      </svg>

                      <p
                        className={`text-sm11 ${
                          !includeFrame ? "text-[#333333] " : "text-primaryGray"
                        }`}
                      >
                        Exclude <br /> Frame
                      </p>
                    </div>
                    {/*  Frame color */}
                    <div className="relative" ref={ref1}>
                      {/* test */}
                      {colorFrame && (
                        <div
                          className={`z-999 bg-[#fff] rounded-[16px] w-[350px] h-[180px] absolute bottom-[90px] left-[-130px]`}
                          style={{
                            boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          <div className="flex gap-[5px] flex-col p-[14px] leading-[1.3] text-center">
                            <p className="font-medium text-primaryBlack text-[15px]">
                              Select Frame Colour
                            </p>
                            <p className="text-primaryGray text-[11px]">
                              Click the colour icon to select the colour <br />
                              of the frame
                            </p>

                            <div className='w-[100%] flex flex-wrap'>
                              {frameColorr?.map((color, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    selectFrameColor(color);
                                  }}
                                  className={`h-[67px] cursor-pointer  rounded-[8px] ${
                                    colorFrameFocus === color
                                      ? "bg-[#f5f5f7]"
                                      : ""
                                  } flex flex-col p-[4px]`}
                                >
                                  <div
                                    className="h-[32px] w-[32px] rounded-[50%]"
                                    style={{
                                      backgroundColor: `${color?.colorCode}`,
                                    }}
                                  ></div>
                                  <p className='text-primaryGray text-[11px] leading-[1.1] mt-[3px]'>
                                    {color?.colorName}
                                  </p>
                                </div>
                              ))}
                            </div>
                            <button
                              onClick={setNewFrameColor}
                              className={`z-[999] ${
                                colorFrameFocus !== null
                                  ? 'bg-[#333333]'
                                  : 'bg-[#8e8e8e]'
                              } rounded-[14px] h-[28px] w-[108px] text-[12px] font-medium text-[white] mx-[auto]`}
                            >
                              Select Colour
                            </button>
                          </div>
                          <div className="absolute left-[47%] bottom-[-10px] w-[20px] h-[20px] bg-[white] rounded-br-[5px] transform rotate-45 shadow-inner"></div>
                        </div>
                      )}

                      {/* test */}
                      <div
                        onClick={() => {
                          setcolorFrame(!colorFrame);
                        }}
                        className="text-center ml-5 cursor-pointer "
                      >
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M4 0H16V3H10.5H5C3.89539 3 3 3.89542 3 5V16H0V4C0 1.79086 1.79089 0 4 0Z'
                            fill='#A6CF4F'
                          />
                          <rect
                            x="16"
                            y="45"
                            width="16"
                            height="3"
                            fill="#283897"
                          />
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M44 0H32V3H37.5H43C44.1046 3 45 3.89542 45 5V16H48V4C48 1.79086 46.2091 0 44 0Z'
                            fill='#FFAC14'
                          />
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M44 48H32V45H37.5H43C44.1046 45 45 44.1046 45 43V32H48V44C48 46.2091 46.2091 48 44 48Z'
                            fill='#BB0271'
                          />
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M4 48H16V45H10.5H5C3.89539 45 3 44.1046 3 43V32H0V44C0 46.2091 1.79089 48 4 48Z'
                            fill='#02A2B8'
                          />
                          <rect
                            x="45"
                            y="16"
                            width="3"
                            height="16"
                            fill="#F25721"
                          />
                          <rect y="16" width="3" height="16" fill="#01A566" />
                          <rect
                            x="10"
                            y="10"
                            width="28"
                            height="28"
                            rx="2"
                            fill="#EEEEEE"
                          />
                        </svg>

                        <p className={`text-sm11  text-primaryGray `}>
                          Frame <br /> Color
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-primaryBlack text-[15px] font-medium leading-5 mb-1">
                    Select Frame Type
                  </p>
                  <div className='flex gap-2.5 flex-wrap mb-0.5'>
                    {frameList?.map((frame) => (
                      <div
                        key={frame.frameId}
                        onClick={() => getFrameCheck(frame)}
                        className={`border rounded-[10px] ${
                          frame.frameId === frameChecked
                            ? 'border-[#333333]'
                            : 'border-[#EFEFEF]'
                        } `}
                      >
                        <img src={frame?.frameThumbnailUrl} alt='' />
                      </div>
                    ))}
                  </div>
                  <p
                    className='text-orangeColor text-sm12 font-normal cursor-pointer'
                    onClick={() => setSeeAllOpen(true)}
                  >
                    See all frames
                  </p>
                  <SeeAllFramesPopup
                    open={seeAllopen}
                    closeOnDocumentClick={true}
                    position={'top center'}
                    onClose={() => setSeeAllOpen(false)}
                  >
                    <p className='text-heading text-center mb-5'>
                      Art Frames
                    </p>
                    <p className='text-sm11 text-primaryGray mb-1'>
                      Select frame to view details
                    </p>
                    <div className='bg-[#f9f9f9] h-[10.75rem] rounded-[15px] p-2.5 flex gap-2.5 flex-wrap overflow-y-scroll mb-[32px]'>
                      {frameList?.map((data) => {
                        return (
                          <div
                            onClick={() => getFrameCheck(data)}
                            key={data.frameId}
                            className={`relative ${
                              data.frameId === frameChecked
                                ? 'bg-[#b0b0b0]'
                                : 'bg-[#dcdcdc]'
                            } rounded-[10px] w-[70px] h-[70px] group group-hover:bg-[#b0b0b0]`}
                          >
                            <input
                              checked={data.frameId === frameChecked}
                              type='checkbox'
                              className={`absolute top-[5px] right-[5px] ${
                                data.frameId === frameChecked
                                  ? 'block'
                                  : 'hidden'
                              } group-hover:block `}
                            />
                            <img
                              src={data?.frameThumbnailUrl}
                              className='w-[100%]'
                              alt=''
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className='flex gap-[30px]'>
                      <div className='bg-[#f7f7f7] rounded-[20px] flex-1 '>
                        <img
                          src={selectedFrame?.frameImageUrl}
                          alt=''
                        />
                      </div>
                      <div className='flex-1'>
                        <p className='text-[25px] text-primaryBlack font-medium leading-[28px]  '>
                          {selectedFrame?.frameName}
                        </p>
                        <p className='text-sm11 text-primaryGray leading-[15px] mb-[15px]'>
                          Frame ID : {selectedFrame?.frameProductNo}
                        </p>
                        <p className='text-sm11 text-primaryBlack leading-[13px] mb-[15px]'>
                          {selectedFrame?.frameDescription}
                        </p>
                        <p className='text-[13px] text-primaryBlack leading-[17px] font-semibold'>
                          Specifications
                        </p>
                        <div className='mt-[5px] mb-3 border-t border-b border-[#EFEFEF]'>
                          <table className='w-[100%]'>
                            <tr className='border-b border-[#EFEFEF]'>
                              <td className='text-primaryGray text-sm12 font-medium leading-4 w-[100px]'>
                                Colour
                              </td>
                              <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                                {
                                  selectedFrame?.frameColor[0]
                                    ?.colorName
                                }
                              </td>
                            </tr>
                            <tr className='border-b border-[#EFEFEF]'>
                              <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                                Width
                              </td>
                              <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                                {selectedFrame?.width}cm
                              </td>
                            </tr>
                            <tr className='border-b border-[#EFEFEF]'>
                              <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                                Depth
                              </td>
                              <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                                {selectedFrame?.depth}cm
                              </td>
                            </tr>
                            <tr className='border-b border-[#EFEFEF]'>
                              <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                                Material
                              </td>
                              <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                                {selectedFrame?.material}
                              </td>
                            </tr>
                            <tr className='border-b border-[#EFEFEF]'>
                              <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                                Finish
                              </td>
                              <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                                {selectedFrame?.finish}
                              </td>
                            </tr>
                            <tr className=''>
                              <td className='text-primaryGray text-sm12 font-medium leading-4 '>
                                Style
                              </td>
                              <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                                {selectedFrame?.style}
                              </td>
                            </tr>
                          </table>
                        </div>
                        <img
                          src={selectedFrame?.frameDrawingUrl}
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='mt-[20px] flex justify-center gap-2.5'>
                      <button className='blackBtn'>Select</button>
                      <button
                        onClick={() => setSeeAllOpen(false)}
                        className='outlineBtn'
                      >
                        Cancel
                      </button>
                    </div>
                  </SeeAllFramesPopup>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="flex gap-7">
                    <div>
                      <div className="flex items-center mb-1">
                        <p className="text-primaryBlack text-[15px] font-medium leading-5 mr-1">
                          Select Top Mat
                        </p>
                        <img
                          src={questionIcon}
                          className='cursor-pointer'
                          onClick={() => setOpenWhatIsMat(true)}
                          alt=''
                        />
                        <WhatIsMatPopup
                          open={openWhatIsMat}
                          closeOnDocumentClick={true}
                          position={'top center'}
                          onClose={() => setOpenWhatIsMat(false)}
                        >
                          <p className='text-heading mb-[15px] text-center font-medium'>
                            What is Mat (Picture Framing)
                          </p>
                          <div className='flex gap-[30px] mb-9 justify-center'>
                            <img
                              src='https://res.cloudinary.com/artnstockimg/image/upload/v1689330381/artnstock/dv3iwhtzs0airtimunsz.png'
                              alt=''
                            />
                            <img
                              src='https://res.cloudinary.com/artnstockimg/image/upload/v1689330309/artnstock/bjsymefotcgexk1qcrjo.png'
                              alt=''
                            />
                          </div>
                          <p className='text-center text-[13px] text-primaryGray leading-4'>
                            In the picture framing industry, a mat (or
                            matte, or mount in British English) is a
                            thin, flat piece of paper-based material
                            included within a picture frame, which
                            serves as additional decoration and to
                            perform several other, more practical
                            functions, such as separating the art from
                            the glass
                          </p>
                        </WhatIsMatPopup>
                      </div>

                      <div className='flex gap-2.5 mb-5'>
                        {/* Include Mat */}
                        <div className='text-center'>
                          <svg
                            onClick={() => {
                              setIncludeTopMat(true);
                              includeTopMatRef.current = true;
                            }}
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d='M4 0.5H44C45.933 0.5 47.5 2.067 47.5 4V44C47.5 45.933 45.933 47.5 44 47.5H4C2.067 47.5 0.5 45.933 0.5 44V4C0.5 2.067 2.067 0.5 4 0.5Z'
                              className={`${
                                includeTopMat
                                  ? 'fill-primaryBlack'
                                  : 'fill-[#EEEEEE]'
                              }`}
                              stroke='#D6D6D6'
                            />
                            <path
                              d='M36 9H12C10.3431 9 9 10.3431 9 12V36C9 37.6569 10.3431 39 12 39H36C37.6569 39 39 37.6569 39 36V12C39 10.3431 37.6569 9 36 9Z'
                              fill='white'
                            />
                          </svg>

                          <p
                            className={`text-sm11 ${
                              includeTopMat
                                ? 'text-[#333333] '
                                : 'text-primaryGray'
                            }`}
                          >
                            Include <br /> Top Mat
                          </p>
                        </div>
                        {/* Exclude Mat */}
                        <div className='text-center'>
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              setIncludeTopMat(false);
                              includeTopMatRef.current = false;
                            }}
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M4 0C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0H4ZM5 3C3.89543 3 3 3.89543 3 5V43C3 44.1046 3.89543 45 5 45H43C44.1046 45 45 44.1046 45 43V5C45 3.89543 44.1046 3 43 3H5Z'
                              className={`${
                                !includeTopMat
                                  ? 'fill-[#333333]'
                                  : 'fill-[#BBBBBB]'
                              }`}
                            />
                            <rect
                              x='10'
                              y='10'
                              width='28'
                              height='28'
                              rx='2'
                              fill='#EEEEEE'
                            />
                            <rect
                              width='58.2986'
                              height='1.0096'
                              rx='0.5'
                              transform='matrix(0.706047 0.708165 -0.706047 0.708165 3.83838 3)'
                              fill='#BBBBBB'
                            />
                            <rect
                              width='58.2986'
                              height='1.0096'
                              rx='0.5'
                              transform='matrix(-0.706047 0.708165 0.706047 0.708165 44.1616 3)'
                              fill='#BBBBBB'
                            />
                          </svg>

                          <p
                            className={`text-sm11 ${
                              !includeTopMat
                                ? 'text-[#333333] '
                                : 'text-primaryGray'
                            }`}
                          >
                            Exclude <br /> Top Mat
                          </p>
                        </div>
                        {/*  Mat color */}
                        <div className='relative' ref={ref3}>
                          {/* test */}
                          {topColorDrop && (
                            <div
                              className={`z-999 bg-[#fff] rounded-[16px] w-[350px] h-[180px] absolute bottom-[90px] left-[-130px]`}
                              style={{
                                boxShadow:
                                  '0px 0px 18px rgba(0, 0, 0, 0.2)',
                              }}
                            >
                              <div className='flex gap-[5px] flex-col p-[14px] leading-[1.3] text-center'>
                                <p className='font-medium text-primaryBlack text-[15px]'>
                                  Select Top Mat Colour
                                </p>
                                <p className='text-primaryGray text-[11px]'>
                                  Click the colour icon to select the
                                  colour <br />
                                  of the Top Mat
                                </p>

                                <div className='w-[100%] flex flex-wrap'>
                                  {topMatWidth?.frameColor?.map(
                                    (color, i) => (
                                      <div
                                        key={i}
                                        onClick={() => {
                                          setTopMatColor(color);
                                        }}
                                        className={`h-[67px] cursor-pointer  rounded-[8px] ${
                                          topMatColor === color
                                            ? 'bg-[#f5f5f7]'
                                            : ''
                                        } flex flex-col p-[4px]`}
                                      >
                                        <div
                                          className='h-[32px] w-[32px] rounded-[50%]'
                                          style={{
                                            backgroundColor: `${color?.colorCode}`,
                                          }}
                                        ></div>
                                        <p className='text-primaryGray text-[11px] leading-[1.1] mt-[3px]'>
                                          {color?.colorName}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </div>
                                <button
                                  onClick={selectNewTopMatColor}
                                  className={`z-[999] ${
                                    topMatColor !== null
                                      ? 'bg-[#333333]'
                                      : 'bg-[#8e8e8e]'
                                  } rounded-[14px] h-[28px] px-2 text-[12px] font-medium text-[white] mx-[auto]`}
                                >
                                  Select Mat Colour
                                </button>
                              </div>
                              <div className='absolute left-[47%] bottom-[-10px] w-[20px] h-[20px] bg-[white] rounded-br-[5px] transform rotate-45 shadow-inner'></div>
                            </div>
                          )}

                          {/* test */}
                          <div
                            onClick={() => {
                              setTopColorDrop(!topColorDrop);
                            }}
                            className='text-center ml-5 cursor-pointer '
                          >
                            <svg
                              width='48'
                              height='48'
                              viewBox='0 0 48 48'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4 0H16V3H10.5H5C3.89539 3 3 3.89542 3 5V16H0V4C0 1.79086 1.79089 0 4 0Z'
                                fill='#A6CF4F'
                              />
                              <rect
                                x='16'
                                width='16'
                                height='3'
                                fill='#FED303'
                              />
                              <rect
                                x='16'
                                y='45'
                                width='16'
                                height='3'
                                fill='#283897'
                              />
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M44 0H32V3H37.5H43C44.1046 3 45 3.89542 45 5V16H48V4C48 1.79086 46.2091 0 44 0Z'
                                fill='#FFAC14'
                              />
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M44 48H32V45H37.5H43C44.1046 45 45 44.1046 45 43V32H48V44C48 46.2091 46.2091 48 44 48Z'
                                fill='#BB0271'
                              />
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4 48H16V45H10.5H5C3.89539 45 3 44.1046 3 43V32H0V44C0 46.2091 1.79089 48 4 48Z'
                                fill='#02A2B8'
                              />
                              <rect
                                x='45'
                                y='16'
                                width='3'
                                height='16'
                                fill='#F25721'
                              />
                              <rect
                                y='16'
                                width='3'
                                height='16'
                                fill='#01A566'
                              />
                              <rect
                                x='10'
                                y='10'
                                width='28'
                                height='28'
                                rx='2'
                                fill='#EEEEEE'
                              />
                            </svg>

                            <p
                              className={`text-sm11  text-primaryGray `}
                            >
                              Select <br /> Mat Color
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-center mb-1'>
                        <p className='text-primaryBlack text-[15px] font-medium leading-5 mr-1'>
                          Select Bottom Mat
                        </p>
                        <img
                          src={questionIcon}
                          onClick={() => setOpenWhatIsMat(true)}
                          alt=''
                          className='cursor-pointer'
                        />
                      </div>

                      <div className='flex gap-2.5 mb-5'>
                        {/* Include Mat */}
                        <div className='text-center'>
                          <svg
                            onClick={() => {
                              setIncludeBottomMat(true);
                              includeBotMatRef.current = true;
                            }}
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d='M4 0.5H44C45.933 0.5 47.5 2.067 47.5 4V44C47.5 45.933 45.933 47.5 44 47.5H4C2.067 47.5 0.5 45.933 0.5 44V4C0.5 2.067 2.067 0.5 4 0.5Z'
                              stroke='#D6D6D6'
                            />
                            <path
                              d='M36 8H12C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8Z'
                              className={`${
                                includeBottomMat
                                  ? 'fill-primaryBlack'
                                  : 'fill-[#EEEEEE]'
                              }`}
                            />
                            <path
                              d='M30 15H18C16.3431 15 15 16.3431 15 18V30C15 31.6569 16.3431 33 18 33H30C31.6569 33 33 31.6569 33 30V18C33 16.3431 31.6569 15 30 15Z'
                              fill='white'
                            />
                          </svg>

                          <p
                            className={`text-sm11 ${
                              includeBottomMat
                                ? 'text-[#333333] '
                                : 'text-primaryGray'
                            }`}
                          >
                            Include <br /> Bottom Mat
                          </p>
                        </div>
                        {/* Exclude Mat */}
                        <div className='text-center'>
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              setIncludeBottomMat(false);
                              includeBotMatRef.current = false;
                            }}
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M4 0C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0H4ZM5 3C3.89543 3 3 3.89543 3 5V43C3 44.1046 3.89543 45 5 45H43C44.1046 45 45 44.1046 45 43V5C45 3.89543 44.1046 3 43 3H5Z'
                              className={`${
                                !includeBottomMat
                                  ? 'fill-[#333333]'
                                  : 'fill-[#BBBBBB]'
                              }`}
                            />
                            <rect
                              x='10'
                              y='10'
                              width='28'
                              height='28'
                              rx='2'
                              fill='#EEEEEE'
                            />
                            <rect
                              width='58.2986'
                              height='1.0096'
                              rx='0.5'
                              transform='matrix(0.706047 0.708165 -0.706047 0.708165 3.83838 3)'
                              fill='#BBBBBB'
                            />
                            <rect
                              width="58.2986"
                              height="1.0096"
                              rx="0.5"
                              transform="matrix(-0.706047 0.708165 0.706047 0.708165 44.1616 3)"
                              fill="#BBBBBB"
                            />
                          </svg>

                          <p
                            className={`text-sm11 ${
                              !includeBottomMat
                                ? 'text-[#333333] '
                                : 'text-primaryGray'
                            }`}
                          >
                            Exclude <br /> Bottom Mat
                          </p>
                        </div>
                        {/*  Mat color */}
                        <div className='relative' ref={ref5}>
                          {/* test */}
                          {bottomColorDrop && (
                            <div
                              className={`z-999 bg-[#fff] rounded-[16px] w-[350px] h-[180px] absolute bottom-[90px] left-[-130px]`}
                              style={{
                                boxShadow:
                                  '0px 0px 18px rgba(0, 0, 0, 0.2)',
                              }}
                            >
                              <div className='flex gap-[5px] flex-col p-[14px] leading-[1.3] text-center'>
                                <p className='font-medium text-primaryBlack text-[15px]'>
                                  Select Bottom Mat Colour
                                </p>
                                <p className='text-primaryGray text-[11px]'>
                                  Click the colour icon to select the
                                  colour <br />
                                  of the Bottom Mat
                                </p>

                                <div className='w-[100%] flex flex-wrap'>
                                  {bottomMatWidth?.frameColor?.map(
                                    (color, i) => (
                                      <div
                                        key={i}
                                        onClick={() => {
                                          setBottomMatColor(color);
                                        }}
                                        className={`h-[67px] cursor-pointer  rounded-[8px] ${
                                          bottomMatColor === color
                                            ? 'bg-[#f5f5f7]'
                                            : ''
                                        } flex flex-col p-[4px]`}
                                      >
                                        <div
                                          className='h-[32px] w-[32px] rounded-[50%]'
                                          style={{
                                            backgroundColor: `${color?.colorCode}`,
                                          }}
                                        ></div>
                                        <p className='text-primaryGray text-[11px] leading-[1.1] mt-[3px]'>
                                          {color?.colorName}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </div>
                                <button
                                  onClick={selectNewBottomMatColor}
                                  className={`z-[999] ${
                                    bottomMatColor !== null
                                      ? 'bg-[#333333]'
                                      : 'bg-[#8e8e8e]'
                                  } rounded-[14px] h-[28px] px-2 text-[12px] font-medium text-[white] mx-[auto]`}
                                >
                                  Select Mat Colour
                                </button>
                              </div>
                              <div className='absolute left-[47%] bottom-[-10px] w-[20px] h-[20px] bg-[white] rounded-br-[5px] transform rotate-45 shadow-inner'></div>
                            </div>
                          )}

                          {/* test */}
                          <div
                            onClick={() => {
                              setBottomColorDrop(!bottomColorDrop);
                            }}
                            className='text-center ml-5 cursor-pointer '
                          >
                            <svg
                              width='48'
                              height='48'
                              viewBox='0 0 48 48'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4 0H16V3H10.5H5C3.89539 3 3 3.89542 3 5V16H0V4C0 1.79086 1.79089 0 4 0Z'
                                fill='#A6CF4F'
                              />
                              <rect
                                x='16'
                                width='16'
                                height='3'
                                fill='#FED303'
                              />
                              <rect
                                x='16'
                                y='45'
                                width='16'
                                height='3'
                                fill='#283897'
                              />
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M44 0H32V3H37.5H43C44.1046 3 45 3.89542 45 5V16H48V4C48 1.79086 46.2091 0 44 0Z'
                                fill='#FFAC14'
                              />
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M44 48H32V45H37.5H43C44.1046 45 45 44.1046 45 43V32H48V44C48 46.2091 46.2091 48 44 48Z'
                                fill='#BB0271'
                              />
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4 48H16V45H10.5H5C3.89539 45 3 44.1046 3 43V32H0V44C0 46.2091 1.79089 48 4 48Z'
                                fill='#02A2B8'
                              />
                              <rect
                                x='45'
                                y='16'
                                width='3'
                                height='16'
                                fill='#F25721'
                              />
                              <rect
                                y='16'
                                width='3'
                                height='16'
                                fill='#01A566'
                              />
                              <rect
                                x='10'
                                y='10'
                                width='28'
                                height='28'
                                rx='2'
                                fill='#EEEEEE'
                              />
                            </svg>

                            <p
                              className={`text-sm11  text-primaryGray `}
                            >
                              Select <br /> Mat Color
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-[100%] flex gap-[30px] mb-[30px]'>
                    <div className='relative h-[40px]' ref={ref2}>
                      <div
                        className={`${
                          isTopMatWidthOpen === true
                            ? 'shadow-dropShadow'
                            : ''
                        } rounded-[20px] w-[164px] max-h-[260px]`}
                      >
                        <button
                          onClick={() => {
                            setIsTopMatWidthOpen(
                              includeTopMat && !isTopMatWidthOpen
                            );
                          }}
                          className={`${
                            isTopMatWidthOpen === true
                              ? 'rounded-t-[20px] border-b border-[#EFEFEF]'
                              : 'border rounded-[20px] border-[#d6d6d6]'
                          } flex items-center justify-between px-[15px] text-primaryGray text-sm14 font-medium cursor-pointer w-[164px] h-[40px] bg-[#FFFFFF]`}
                        >
                          <span>
                            {topMatSelect === null ||
                            topMatSelect === undefined ||
                            topMatSelect === 0
                              ? `Top Mat Width`
                              : `${topMatSelect}cm`}
                          </span>
                          <img
                            className='inline-block'
                            src={dropdown}
                            alt=''
                          />
                        </button>

                        {isTopMatWidthOpen && (
                          <ul className='cursor-pointer rounded-b-2xl bg-[#ffffff] overflow w-[164px]  text-[14px] text-primaryGray max-h-[220px] overflow-y-auto'>
                            <li
                              className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                              onClick={() => setTopMatValue(null)}
                            >
                              Top Mat Width
                            </li>
                            {topMatWidth?.matWidth?.map((obj) => {
                              return (
                                <li
                                  key={obj}
                                  className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                                  onClick={() => setTopMatValue(obj)}
                                >
                                  {obj}cm
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className='relative h-[40px]' ref={ref4}>
                      <div
                        className={`${
                          isBottomMatWidthOpen === true
                            ? 'shadow-dropShadow'
                            : ''
                        } rounded-[20px] w-[164px] max-h-[260px]`}
                      >
                        <button
                          onClick={() => {
                            setIsBottomMatWidthOpen(
                              includeBottomMat &&
                                !isBottomMatWidthOpen
                            );
                          }}
                          className={`${
                            isBottomMatWidthOpen === true
                              ? 'rounded-t-[20px] border-b border-[#EFEFEF]'
                              : 'border rounded-[20px] border-[#d6d6d6]'
                          } flex items-center justify-between px-[15px] text-primaryGray text-sm14 font-medium cursor-pointer w-[164px] h-[40px] bg-[#FFFFFF]`}
                        >
                          <span>
                            {bottomMatSelect === null ||
                            bottomMatSelect === undefined ||
                            bottomMatSelect === 0
                              ? `Bottom Mat Width`
                              : `${bottomMatSelect}cm`}
                          </span>
                          <img
                            className='inline-block'
                            src={dropdown}
                            alt=''
                          />
                        </button>

                        {isBottomMatWidthOpen && (
                          <ul className='cursor-pointer rounded-b-2xl bg-[#ffffff] overflow w-[164px] text-[14px] text-primaryGray max-h-[220px] overflow-y-auto'>
                            <li
                              className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                              onClick={() => setBottomMatValue(null)}
                            >
                              Bottom Mat Width
                            </li>
                            {bottomMatWidth?.matWidth?.map((obj) => (
                              <li
                                key={obj}
                                className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                                onClick={() => setBottomMatValue(obj)}
                              >
                                {obj}cm
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <p className="text-primaryBlack text-[15px] font-medium leading-5 mb-1">
                    Select Material
                  </p>
                  <div className='flex gap-x-7 flex-wrap w-[308px]'>
                    {activePaperMasterList?.map((obj, i) => (
                      <div
                        key={obj?.printingMaterialId}
                        className='flex items-center'
                      >
                        <input
                          className=' mr-1'
                          type='checkbox'
                          checked={
                            obj?.printingMaterialId === checking
                          }
                          onChange={() => getCheckValue(obj)}
                        />
                        <p className='text-[13px] text-primaryGray capitalize'>
                          {obj?.printingMaterialName}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className='text-[11px] text-primaryGray mt-[10px] mb-[30px] leading-[1.2]'>
                    Art can mimic nature, by seeking to visually
                    replicate objects as they actually appear in real{' '}
                    <br />
                    life. But abstract paintings can also take their
                    visual cue from actual forms in nature, such as{' '}
                    <br />
                    the painting below.
                  </p>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            <div
              className="flex border-2 border-[#EEEEEE] rounded-3xl overflow-hidden"
              style={{ width: "fit-content" }}
            >
              <button
                className="bg-[#EEEEEE] py-3 px-3"
                onClick={() => {
                  quantity > 1 && setQuantity(quantity - 1);
                  quantityRef.current = quantityRef.current - 1;
                }}
              >
                <img src={minusIcon} alt='' />
              </button>
              <input
                className='w-[30px] text-[13px] leading-[15px] font-normal text-primaryGray text-center outline-none'
                type='text'
                value={quantity}
              />
              <button
                className="bg-[#EEEEEE] py-3 px-3"
                onClick={() => {
                  setQuantity(quantity + 1);
                  quantityRef.current = quantityRef.current + 1;
                }}
              >
                <img
                  className='w-[11px] h-[11px]'
                  src={plusIcon}
                  alt=''
                />
              </button>
            </div>

            <div className="flex items-baseline">
              <p className="text-orangeColor text-[22px] font-normal leading-[32px]">
                $
              </p>
              <p className="text-orangeColor text-[38px] font-normal leading-[55px]">
                {artDetails?.price * quantity}
              </p>
            </div>
            <p
              onClick={() => setShowPrice(true)}
              className='text-sm12 font-normal text-primaryGray cursor-pointer'
            >
              Show Price Details
            </p>
            <PriceDetailsPopup
              open={showPrice}
              closeOnDocumentClick={true}
              position={'top center'}
              onClose={() => setShowPrice(false)}
            >
              <p className='text-heading mb-5 text-center font-medium'>
                Price Details
              </p>
              <div className='mt-5 mb-8 border-t-2 border-b-2 border-[#EFEFEF]'>
                <table className='w-[100%]'>
                  <tr className='border-b border-[#EFEFEF] '>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[150px] py-1'>
                      Digital Art Print
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4'>
                      2 Quantity, Print Size: 20cm x 20cm, Colour
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '>
                      $150.00
                    </td>
                  </tr>
                  <tr className='border-b border-[#EFEFEF] '>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[150px] py-1'>
                      Digital Art Print Material
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4'>
                      Glossy Photo Paper
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '></td>
                  </tr>
                  <tr className='border-b border-[#EFEFEF] '>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[150px] py-1'>
                      Mat
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4'>
                      Double Mat
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '></td>
                  </tr>
                  <tr className='border-b border-[#EFEFEF] '>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[150px] py-1'>
                      Frame
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4'>
                      <tr>
                        <td className='w-[80px]'>Frame Type:</td>
                        <td>Chelsea Black</td>
                      </tr>
                      <tr>
                        <td className='w-[80px]'>Frame ID:</td>
                        <td>ANSFR4567</td>
                      </tr>
                      <tr>
                        <td className='w-[80px]'>Colour:</td>
                        <td>Black</td>
                      </tr>
                      <tr>
                        <td className='w-[80px]'>Width:</td>
                        <td>0.75”</td>
                      </tr>
                      <tr>
                        <td className='w-[80px]'>Depth:</td>
                        <td>1.13”</td>
                      </tr>
                      <tr>
                        <td className='w-[80px]'>Material:</td>
                        <td>Wood</td>
                      </tr>
                      <tr>
                        <td className='w-[80px]'>Finish:</td>
                        <td>Gesso</td>
                      </tr>
                      <tr>
                        <td className='w-[80px]'>Style:</td>
                        <td>Contemporary</td>
                      </tr>
                      <p className='w-[100%] mt-5'>
                        Slim and tall, this contemporary Chelsea{' '}
                        <br />
                        wood frame has a matte black finish and is
                        well <br />
                        suited for all art types.
                      </p>
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '></td>
                  </tr>
                  <tr className='border-b border-[#EFEFEF] '>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[150px] py-1'>
                      Glass
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4'>
                      Plain Clear Glass
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '></td>
                  </tr>
                  <tr className='border-b border-[#EFEFEF] '>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[150px] py-1'>
                      Assembly
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4'>
                      Assembly Charge
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '></td>
                  </tr>
                  <tr className='border-b border-[#EFEFEF] '>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[150px] py-1'>
                      Packaging
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4'>
                      Hard Cardboard
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '></td>
                  </tr>
                  <tr className='border-b border-[#EFEFEF] '>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[150px] py-1'>
                      Courier
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4'>
                      Courier charges
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4 '></td>
                  </tr>
                  <tr className='border-b border-[#EFEFEF] '>
                    <td className='text-primaryGray text-sm12 font-medium leading-4 w-[150px] py-1'>
                      Total
                    </td>
                    <td className='text-primaryGray text-sm12 font-normal leading-4'></td>
                    <td className='text-primaryGray text-[25px] font-normal '>
                      $339.00
                    </td>
                  </tr>
                </table>
              </div>
            </PriceDetailsPopup>

            <div className="mt-5 flex gap-x-2.5 mb-1.5">
              <button
                onClick={() => {
                  onButtonClick();
                }}
                className="outlineBtn"
              >
                Add to Cart
              </button>
              <button onClick={checkoutPage} className="blackBtn">
                Shop Now
              </button>
            </div>

            <p className='text-primaryGray text-sm11 font-normal'>
              *GST, Branding, Logistics and Customized Packaging
              charges additional as applicable. <br />
              Returns and exchange.{' '}
              <span
                className='text-orangeColor cursor-pointer'
                onClick={() => setReturnAndExchange(true)}
              >
                Know more
              </span>
            </p>
            <ReturnAndExchangePopup
              open={returnAndExchange}
              closeOnDocumentClick={true}
              position={'top top'}
              onClose={() => setReturnAndExchange(false)}
            >
              <p className='text-heading mb-2.5 font-medium text-center'>
                Returns & Exchanges
              </p>
              <p className='text-primaryGray text-sm11 font-normal mb-3.5 text-center'>
                Shipping dispatched in 1-2 working days.
              </p>
              <p className='text-primaryGray text-sm11 font-normal text-center'>
                Returnable within 7 days of delivery. <br />
                For details, please refer our{' '}
                <span className='text-orangeColor cursor-pointer'>
                  Return Policy
                </span>
                .
              </p>
            </ReturnAndExchangePopup>

            <div className='flex gap-x-2.5 my-7'>
              <img src={certificateImg} alt='' />
              <img src={festiveImg} alt='' />
            </div>
            <p className="text-primaryBlack text-[15px] font-medium leading-5 mb-1">
              Delivery options
            </p>
            <div className="relative mb-1" style={{ width: "fit-content" }}>
              <input
                className="text-[#BBBBBB] border border-[#BBBBBB] rounded-3xl font-medium text-sm14 px-4 py-2.5"
                type="text"
                placeholder="Enter Pincode"
              />
              <button className="absolute right-2 bg-[#EEEEEE] border border-[#E9E9E9] rounded-2xl top-2 py-1 px-2 text-[10px] text-primaryBlack font-medium">
                <img src={vanIcon} alt="" className="inline mr-1" />
                Check
              </button>
            </div>
            <p className="text-sm11 font-normal text-primaryGray mb-2.5">
              Please enter PIN code to check delivery time and Pay on Delivery
              Availability.
            </p>
            <img src={packingIcon} alt="" />
          </div>
        </div>
        {/* <div className="hrLine"></div> */}
     
      </div>

      <div className="hrLine"></div>
      {/* User Details */}
      <div className="w-w1168 flex mx-auto">
        <div className="left flex-1">
          <p className="text-[25px] text-primaryBlack font-medium leading-3 mb-5">
            Art Description
          </p>
          <p className="text-sm14 text-primaryGray font-normal mb-2">
            {artDetails?.description}
          </p>
          <img
            className="w-[300px] h-[160px] rounded-2xl mb-5"
            src={artDetails?.image}
            alt=""
          />
          <div className="mb-5 border-t-2 border-b-2 border-[#EFEFEF]">
            <table className="w-[100%]">
              <tr className="border-b border-[#EFEFEF]">
                <td className="text-primaryGray text-sm12 font-medium leading-4 w-[100px]">
                  Category:
                </td>
                <td className="text-primaryGray text-sm12 font-normal leading-4 ">
                  Abstract Art
                </td>
              </tr>
              <tr className="border-b border-[#EFEFEF]">
                <td className="text-primaryGray text-sm12 font-medium leading-4 ">
                  Subject:
                </td>
                <td className="text-primaryGray text-sm12 font-normal leading-4 ">
                  Abstract
                </td>
              </tr>
              <tr className="">
                <td className="text-primaryGray text-sm12 font-medium leading-4 ">
                  Medium:
                </td>
                <td className="text-primaryGray text-sm12 font-normal leading-4 ">
                  Digital
                </td>
              </tr>
            </table>
          </div>
          <p className="text-[15px] text-primaryBlack font-medium leading-4 mb-1.5">
            Colour Palette
          </p>
          <img src={colorPaletimg} alt="" />
        </div>
        <div className="right flex-1  pl-7">
          <p className="text-sm11 text-primaryGray ">Artist Info</p>
          <div className="flex mb-5">
            <div>
              <img
                className="w-[7rem] h-[7rem] rounded-full"
                src={artDetails?.userMaster?.profileImage}
                alt=""
              />
            </div>
            <div className="ml-2">
              <img src={proImg} alt="" />
              <p className="text-sm11 text-primaryGray font-normal leading-[16px]">
                {artDetails?.userMaster?.displayName}
              </p>
              <p className="text-sm11 text-primaryGray font-normal leading-[16px]">
                Freelance Illustrator/Photographer
              </p>
              <div className="flex items-center mb-3">
                <img className="mr-0.5" src={locatiomIcon} alt="" />
                <p className="text-sm11 text-primaryGray font-normal leading-[16px]">
                  {artDetails?.userMaster?.residentialAddress?.cityName},{" "}
                  {artDetails?.userMaster?.residentialAddress?.countryName}
                </p>
              </div>
              <button
                onClick={() => {
                  navigate("/view-my-store", {
                    state: artDetails?.userMaster,
                  });
                }}
                className="bg-[#00F9C6] text-sm12 text-primaryBlack font-medium px-4 py-1.5 rounded-3xl "
              >
                View Store
              </button>
            </div>
          </div>
          <p className="text-sm14 leading-5 text-primaryGray font-normal mb-4">
            International Artist Azra's art work dictates the expression of man
            and beast exploring our role and place in this universe. Taking
            inspiration from Primitive Art work and a various assortment of
            Modern Art.
          </p>
          <p className="text-sm14 leading-5 text-primaryGray font-normal mb-0.5">
            Recognition
          </p>
          <ul className="mb-5">
            <li className="mb-1.5 flex">
              <img className="mr-2.5" src={proImg} alt="" />
              <p className="text-sm11 leading-3 font-normal text-primaryGray">
                Lorem ipsum dolor sit amet consectetur adipiscing <br />
                elit sed do eiusmod tempor
              </p>
            </li>
          </ul>
          <div className="flex gap-4">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              <img src={faceBookIcon} alt="" />
            </a>
            <img src={linkdinIcon} alt="" />
            <img src={instaIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="hrLine"></div>

      {/* userDetails */}
      <div className="w-w1409 flex justify-center mx-auto">
        <div>
          <p className="text-[38px] font-medium text-center text-[#333333]">
            Designs by Azra
          </p>
          <div className="flex gap-3 text-center mt-4 mb-7">
            {azraDesign.map((item) => {
              return (
                <>
                  <div>
                    <img src={item.img} alt="" />
                    <p className="text-[15px] text-[#333333]">{item.title}</p>
                    <p className="text-[12px] text-[#757575]">
                      {item.description}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <p className=" flex justify-center">
            <button className="blackBtn">Discover more</button>
          </p>
        </div>
      </div>

      <div className="hrLine"></div>

      <div className="w-w1409 flex justify-center mx-auto">
        <div>
          <p className="text-[38px] font-medium text-center text-[#333333]">
            Other designs you might like
          </p>
          <div className="flex gap-3 text-center mt-4 mb-7">
            {otherDesign.map((item) => {
              return (
                <>
                  <div>
                    <img src={item.img} alt="" />
                    <p className="text-[15px] text-[#333333]">{item.title}</p>
                    <p className="text-[12px] text-[#757575]">
                      {item.description}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <p className=" flex justify-center">
            <button className="blackBtn">Discover more</button>
          </p>
        </div>
      </div>

      {/* <div className="hrLine"></div> */}

      <div className="bg-[#F7F7F7] mt-[25px]">
        <div className="flex justify-center py-[80px] gap-2 w-w1409 flex-wrap mx-auto text-center mt-4 mb-7">
          {arrImg.map((item) => {
            return (
              <>
                <div className="text-center">
                  <img
                    src={item.img}
                    className="w-[162px] h-[162px] flex justify-center"
                    alt=""
                  />
                  <p className="text-[15px] text-[#333333]">{item.title}</p>
                  <p className="text-[12px] text-[#757575]">
                    {item.description}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center my-[100px]">
        <img src={grp} alt="" />
      </div>

      <div className="w-w1168 mx-auto ">
        <p className="text-[38px] font-medium text-[#333333] text-center  mb-[19px]">
          Customer Reviews
        </p>
        <div className="flex justify-center gap-[30px]">
          <div>
            <img src={grp144} alt="" />
          </div>
          <div>
            <p className="text-[15px] font-medium">Customer Images</p>

            <div className="flex flex-wrap">
              {CustomerImg.map((item) => {
                return (
                  <>
                    <img src={item} className="w-[65px] h-[65px] m-2" alt="" />
                  </>
                );
              })}
            </div>
            <button className="text-[#F88331] text-[12px]">
              See all customer images
            </button>
          </div>
        </div>
      </div>

      {/* test */}
      {/* buttons */}
      <div className="w-w1168 mx-auto mb-3 mt-[50px] flex justify-between">
        <div className="flex gap-[10px]">
          <button className="blackBtn">Write a Review</button>
          <button className="blackBtn bg-[#FFFFFF] border border-[#333333] rounded-full text-[#333333]">
            See All Review
          </button>
        </div>
        <div className="flex gap-[10px] items-center">
          <div>
            <button
              onClick={() => {
                setIsOpenSortBy(!isOpenSortBy);
              }}
              className={`${
                isOpenSortBy === true
                  ? "rounded-t-[15px] shadow-dropShadowButton border-b border-[#EFEFEF]"
                  : "rounded-[15px] border  border-[#D6D6D6]"
              } cursor-pointer w-[120px] text-[12px] h-[30px] flex items-center justify-between p-[10px]`}
              // className='cursor-pointer w-[120px] border border-[#D6D6D6] text-[12px] h-[30px] rounded-[15px] flex items-center justify-between p-[10px]'
            >
              <span className="text-[#BBBBBB]">Sort by</span>
              <img className="inline-block" src={dropdown} alt="" />
            </button>
            {isOpenSortBy && (
              <ul className="shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#FFFFFF] w-[120px] text-center text-[14px] text-primaryGray">
                <li className="cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]">
                  month
                </li>
                <li className="cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]">
                  date
                </li>
                <li className="cursor-pointer hover:bg-[#F0F0F0] py-[5px]">
                  year
                </li>
              </ul>
            )}
          </div>
          <div>
            <button
              onClick={() => {
                setIsOpenFilterBy(!isOpenFilterBy);
              }}
              className={`${
                isOpenFilterBy === true
                  ? "rounded-t-[15px] shadow-dropShadowButton border-b border-[#EFEFEF]"
                  : "rounded-[15px] border  border-[#D6D6D6]"
              } cursor-pointer w-[120px] text-[12px] h-[30px] flex items-center justify-between p-[10px]`}
              // className='cursor-pointer w-[120px] border border-[#D6D6D6] text-[12px] h-[30px] rounded-[15px] flex items-center justify-between p-[10px]'
            >
              <span className="text-[#BBBBBB]">Filter by</span>
              <img className="inline-block" src={dropdown} alt="" />
            </button>
            {isOpenFilterBy && (
              <ul className="shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#FFFFFF] w-[120px] text-center text-[14px] text-primaryGray">
                <li className="cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]">
                  month
                </li>
                <li className="cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]">
                  date
                </li>
                <li className="cursor-pointer hover:bg-[#F0F0F0] py-[5px]">
                  year
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* buttons */}

      <div
        className="w-w1168 rounded-2xl pt-[15px] mx-auto pl-4"
        style={{
          boxShadow: "#f0f0f0 0px 0px 4.3px 4px",
        }}
      >
        {custReview.map((item) => {
          return (
            <div>
              <div className="flex py-[15px] gap-3">
                <p>
                  <img src={item.img} alt="" />
                </p>
                <div>
                  <p className="text-[15px] text-[#333333] leading-[1.2]">
                    {item.name}
                  </p>
                  <p className="text-[12px] mt-1 mb-3 leading-[1.1] text-[#757575]">
                    <span className="text-[#f88331]">{item.type}</span>{" "}
                    {item.reviewCount} reviews . {item.photo} Photo
                  </p>
                  <p className="text-[12px] leading-[1.2] flex gap-3 text-[#757575]">
                    <img src={Stars} className="inline" alt="" /> {item.months}{" "}
                    ago
                  </p>
                  <p className="text-[13px] mt-3 mb-[19px] leading-[1.2] text-[#757575]">
                    {item.desc}
                  </p>
                  <p className="text-[13px] mb-3 leading-[1.2] text-[#757575] flex items-center">
                    <img src={like} className="inline" alt="" />
                    <span className="pl-1"> {item.like}</span>
                  </p>
                  <div className="border-l-2 text-[12px] leading-[1.2] pl-3 text-[#757575] border-[#dcdcdc]">
                    <p>
                      <span className="text-[#333333] text-[13px] font-medium">
                        Response from the owner
                      </span>{" "}
                      {item.responseMonth} ago
                    </p>
                    <p className="text-[13px] leading-[1.2]">{item.response}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="w-w1168 mx-auto flex justify-between text-[#F88331] text-[12px] mt-2 mb-10">
        <span>Disclosures & Guidlines</span>
        <span>See all 126 reviews</span>
      </p>
      {/* test */}

      <Footer />
    </>
  );
};

export default ArtDetails;
