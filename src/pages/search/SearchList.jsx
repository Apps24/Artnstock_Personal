import React, { useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { httpClient } from "../../axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Footer from "../../components/footer/Footer";

// Icons
import { ReactComponent as Grid1 } from "../../assets/images/Icons/grid1.svg";
import { ReactComponent as Grid } from "../../assets/images/Icons/grid.svg";
import filterIcon from "../../assets/images/Icons/FilterIcon.svg";
import closeIcon from "../../assets/images/Icons/crossIcon.svg";
import artIcon from "../../assets/images/Icons/artIcon.svg";
import photoIcon from "../../assets/images/Icons/photosIcon.svg";
import footageIcon from "../../assets/images/Icons/videoIcon.svg";
import musicIcon from "../../assets/images/Icons/music.svg";
import templatesIcon from "../../assets/images/Icons/templatesIcon.svg";
import productsIcon from "../../assets/images/Icons/productsIcon.svg";
import dropArrow from "../../assets/images/Icons/Down arrow.svg";
import smallRightArrow from "../../assets/images/Icons/smallRightArrow.svg";
import smallLeftArrow from "../../assets/images/Icons/smallLeftArrow.svg";
import { styleSliceAction } from "../../store/styleSlice";

const popularList = [
  {
    id: 1,
    name: "Featured",
  },
  {
    id: 2,
    name: "Newest",
  },
  {
    id: 3,
    name: "Price:Low to High",
  },
  {
    id: 4,
    name: "Price:High to Low",
  },
];

const SearchList = () => {
  const navigate = useNavigate();
  // Dropdowns
  const [show, setShow] = useState(false);
  const [showStyles, setShowStyles] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showMedium, setShowMedium] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const [selectStylesValue, setSelectStylesValue] = useState();
  const [selectSubValue, setSelectSubValue] = useState();
  const [selectMediumValue, setSelectMediumValue] = useState();
  const ref1 = useDetectClickOutside({ onTriggered: apps1 });
  const ref2 = useDetectClickOutside({ onTriggered: apps2 });
  const ref3 = useDetectClickOutside({ onTriggered: apps3 });
  const ref4 = useDetectClickOutside({ onTriggered: apps4 });

  const dispatch = useDispatch();

  function apps1(e) {
    setShow(false);
  }

  function apps2(e) {
    setShowStyles(false);
  }

  function apps3(e) {
    setShowSub(false);
  }

  function apps4(e) {
    setShowMedium(false);
  }

  function changeValue1(e) {
    // console.log(e);
    setShow(false);
    setSelectValue(e);
  }

  function changeValue2(e) {
    // console.log(e);
    dispatch(styleSliceAction.setStyle(e));
    setShowStyles(false);
    setSelectStylesValue(e.name);
    setFilterObj({ ...filterObj, styleName: e === "All Styles" ? "" : e.name });
  }

  function changeValue3(e) {
    // console.log(e);
    setShowSub(false);
    setSelectSubValue(e);
    setFilterObj({ ...filterObj, subjectName: e === "All Subjects" ? "" : e });
  }

  function changeValue4(e) {
    // console.log(e);
    setShowMedium(false);
    setSelectMediumValue(e);
  }

  const [artsList, setArtsList] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sizeBtn, setSizeBtn] = useState();
  const [orientationBtn, setOrientationBtn] = useState();
  const [title, setTitle] = useState("");
  // const [searchText, setSearchText] = useState("");

  const location = useLocation();
  // console.log(location);

  const searchText = useSelector((state) => state.searchText);
  // console.log(searchText);

  const style = useSelector((state) => state.style.style);
  const userDetails = useSelector((state) => state.auth.userDetails);

  // console.log(userDetails);

  const [showStyle, setShowStyle] = useState(false);

  useEffect(() => {
    getActiveStyleList();
    getActiveSubjectList();
  }, []);

  // api calls
  const getAllArtList = async (searchText) => {
    try {
      // console.log(searchText);

      if (
        searchText === null ||
        searchText === undefined ||
        searchText === ""
      ) {
        // console.log("style");
        let o = Object.fromEntries(
          Object.entries(filterObj).filter(([_, v]) => v !== "" && v !== 0)
        );

        // console.log(o);
        const res = await httpClient.post(
          `/art_master/ArtFilter/${"style"}/${style?.name}`,
          o
        );
        setTitle(style?.name);
        setShowStyle(true);
        setArtsList(res.data);
      } else {
        // console.log("searcj");
        setShowStyle(false);
        setTitle(searchText);
        let o = Object.fromEntries(
          Object.entries(filterObj).filter(([_, v]) => v !== "" && v !== 0)
        );
        const res = await httpClient.post(
          `/art_master/ArtFilter/${"search"}/${searchText}`,
          o
        );
        recentSearch()
        //   console.log(res);
        setArtsList(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Recent search

  const recentSearch = async () => {
    const data = {
      text: "",
      userId: ""
    }
    try {
      data.userId = userDetails?.userId
      data.text = searchText.searchText
      const res = await httpClient.post("/recently_search_master", data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Filter
  const [filterObj, setFilterObj] = useState({
    orientation: "",
    price: 0,
    size: "",
    styleName: "",
    subjectName: "",
    userFirstName: "",
  });

  useEffect(() => {
    // console.log(searchText);
    if(searchText.type === "keyword") {
      getKeywordWiseSearchList(searchText.searchText)
    } else {
      getAllArtList(searchText.searchText);
    }
  }, [searchText, style, filterObj]);


  // KeyWord Search List

  const getKeywordWiseSearchList = (keyword) => {
    setTitle(keyword)
    httpClient.get(`/art_master/getKeywordWiseArtMasterList/${keyword}`)
    .then((res) => {
      setArtsList(res.data);
      recentSearch()
    })
  }

  const [styleList, setStyleList] = useState(null);

  const getActiveStyleList = async () => {
    try {
      const res = await httpClient.get("/style_master/getActiveStyleMaster");
      setStyleList(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [subjectList, setSubjectList] = useState(null);

  const getActiveSubjectList = async () => {
    try {
      const res = await httpClient.get("/subject_master/getActiveSubject");
      setSubjectList(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeSizeFilter = (text) => {
    setSizeBtn(text);
  };

  const changeOrientationFilter = (text) => {
    setOrientationBtn(text);
  };

  const goToArtDetailsPage = (id) => {
    navigate(`/art/art-details`, { state: { id } });
  };

  // Image Optimization

  const [imageGrid, setImageGrid] = useState("grid");

  const imageLinkChange = (url) => {
    const str = url;
    const newStr = !showSidebar ? "upload/c_fit,w_299/" : "upload/c_fit,w_308/";
    const updatedStr = str.replace("upload/", newStr);

    return updatedStr;
  };

  const imageLinkChangeSquaregrid = (url) => {
    const str = url;
    const newStr = !showSidebar
      ? "upload/c_scale,w_299,h_299/"
      : "upload/c_scale,w_308,h_299/";
    const updatedStr = str.replace("upload/", newStr);

    return updatedStr;
  };

  // Pagination
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(18);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const nextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      setFirstPage(firstPage + 18);
      setLastPage(lastPage + 18);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setFirstPage(firstPage - 18);
      setLastPage(lastPage - 18);
    }
  };

  useEffect(() => {
    setTotalPage(Math.ceil(artsList.length / 18));
  }, [artsList]);

  return (
    <>
      <div className="main py-7">
        <div className="px-6">
          <p className="mb-[2px] bullet text-left">Artnstock / Art / {title}</p>
          <div className="flex justify-between mb-1.5">
            <div className="flex items-end">
              <p className="text-heading text-primaryBlack">{title}</p>
              <p className="text-primaryGray text-sm12 ml-1">
                {artsList.length} Items
              </p>
            </div>
            <div className="flex items-center">
              <Grid
                onClick={() => setImageGrid("sqaure")}
                fill={imageGrid === "sqaure" ? "#333333" : "#757575"}
                className="mr-2.5 w-[23px] h-[23px]"
              />
              <Grid1
                onClick={() => setImageGrid("grid")}
                fill={imageGrid === "grid" ? "#333333" : "#757575"}
                className="w-[23px] h-[23px]"
              />
            </div>
          </div>
        </div>
        <div className={`${showSidebar ? "pr-6" : "px-6"} flex gap-x-4`}>
          {/* Sidebar */}
          {showSidebar && (
            <div className="sidebar w-[17.313rem] h-[64.375rem] shadow-regCardShadow relative rounded-tr-2xl rounded-br-2xl py-12 pl-6 pr-4">
              <img
                onClick={() => setShowSidebar(false)}
                className="absolute top-4 right-4 cursor-pointer"
                src={closeIcon}
                alt=""
              />
              <div className="topIconBar flex gap-x-3.5 mb-6">
                <img src={artIcon} alt="" />
                <img src={photoIcon} alt="" />
                <img src={footageIcon} alt="" />
                <img src={musicIcon} alt="" />
                <img src={templatesIcon} alt="" />
                <img src={productsIcon} alt="" />
              </div>
              <form action="" onSubmit={(e) => e.preventDefault()}>
                {/* Dropdown Filters */}
                <label
                  className="text-sm12 text-primaryGray font-medium leading-3.5 mb-1"
                  htmlFor="mostPopular"
                >
                  Sort by
                </label>
                <div className="w-[100%] mb-2.5" ref={ref1}>
                  <div
                    onClick={() => setShow((prev) => !prev)}
                    className={`${
                      show ? "rounded-tl-3xl rounded-tr-3xl" : "rounded-3xl"
                    } bg-[#ffffff] border border-[#D6D6D6]  flex items-center py-3 px-4 justify-between w-[100%] `}
                  >
                    <p className="text-[#BBBBBB] text-[13px] leading-[13px] font-medium">
                      {selectValue ? selectValue : "Most Popular"}
                    </p>
                    <img
                      className={`${
                        show === true ? "transform rotate-180" : ""
                      }`}
                      src={dropArrow}
                      alt=""
                    />
                  </div>
                  {show && (
                    <div className="relative">
                      <ul className="w-[100%] border border-[#D6D6D6] border-t-0 absolute rounded-bl-3xl rounded-br-3xl  bg-[#ffffff]">
                        <li
                          onClick={() => changeValue1("Most Popular")}
                          className="py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]"
                        >
                          Most Popular
                        </li>
                        {popularList.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => changeValue1(item.name)}
                            className="py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]"
                          >
                            {item.name}
                          </li>
                        ))}
                        {/* <li
                        onClick={() => changeValue1('Ap2')}
                        className='py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium'
                      >
                        Ap2
                      </li> */}
                      </ul>
                    </div>
                  )}
                </div>
                <label
                  className="text-sm12 text-primaryGray font-medium leading-3.5 mb-1"
                  htmlFor="styles"
                >
                  Style
                </label>
                <div className="w-[100%] mb-2.5" ref={ref2}>
                  <div
                    onClick={() => setShowStyles((prev) => !prev)}
                    className={`${
                      showStyles
                        ? "rounded-tl-3xl rounded-tr-3xl"
                        : "rounded-3xl"
                    } bg-[#ffffff] border border-[#D6D6D6]  flex items-center py-3 px-4 justify-between w-[100%] `}
                  >
                    <p className="text-[#BBBBBB] text-[13px] leading-[13px] font-medium">
                      {showStyle
                        ? style?.name
                        : selectStylesValue
                        ? selectStylesValue
                        : "All Styles"}
                    </p>
                    <img
                      className={`${
                        showStyles === true ? "transform rotate-180" : ""
                      }`}
                      src={dropArrow}
                      alt=""
                    />
                  </div>
                  {showStyles && (
                    <div className="relative">
                      <ul className="w-[100%] border border-[#D6D6D6] border-t-0 absolute rounded-bl-3xl rounded-br-3xl  bg-[#ffffff] max-h-[191px] overflow-y-auto">
                        <li
                          onClick={() => {
                            changeValue2("All Styles");
                          }}
                          className="py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]"
                        >
                          All Styles
                        </li>
                        {/* binded already */}
                        {styleList.map((obj) => (
                          <li
                            onClick={() => {
                              changeValue2(obj);
                            }}
                            className="py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]"
                          >
                            {obj.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <label
                  className="text-sm12 text-primaryGray font-medium leading-3.5 mb-1"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <div className="w-[100%] mb-2.5" ref={ref3}>
                  <div
                    onClick={() => setShowSub((prev) => !prev)}
                    className={`${
                      showSub ? "rounded-tl-3xl rounded-tr-3xl" : "rounded-3xl"
                    } bg-[#ffffff] border border-[#D6D6D6]  flex items-center py-3 px-4 justify-between w-[100%] `}
                  >
                    <p className="text-[#BBBBBB] text-[13px] leading-[13px] font-medium">
                      {selectSubValue ? selectSubValue : "All Subjects"}
                    </p>
                    <img
                      className={`${
                        showSub === true ? "transform rotate-180" : ""
                      }`}
                      src={dropArrow}
                      alt=""
                    />
                  </div>
                  {showSub && (
                    <div className="relative">
                      <ul className="w-[100%] border border-[#D6D6D6] border-t-0 absolute rounded-bl-3xl rounded-br-3xl  bg-[#ffffff] max-h-[191px] overflow-y-auto">
                        <li
                          onClick={() => {
                            changeValue3("All Subjects");
                          }}
                          className="py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]"
                        >
                          All Subjects
                        </li>
                        {subjectList.map((obj) => (
                          <li
                            onClick={() => {
                              changeValue3(obj.subjectName);
                            }}
                            className="py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]"
                          >
                            {obj.subjectName}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <label
                  className="text-sm12 text-primaryGray font-medium leading-3.5 mb-1"
                  htmlFor="medium"
                >
                  Medium
                </label>
                <div className="w-[100%] " ref={ref4}>
                  <div
                    onClick={() => setShowMedium((prev) => !prev)}
                    className={`${
                      showMedium
                        ? "rounded-tl-3xl rounded-tr-3xl"
                        : "rounded-3xl"
                    } bg-[#ffffff] border border-[#D6D6D6]  flex items-center py-3 px-4 justify-between w-[100%] `}
                  >
                    <p className="text-[#BBBBBB] text-[13px] leading-[13px] font-medium">
                      {selectMediumValue ? selectMediumValue : "All Mediums"}
                    </p>
                    <img
                      className={`${
                        showMedium === true ? "transform rotate-180" : ""
                      }`}
                      src={dropArrow}
                      alt=""
                    />
                  </div>
                  {showMedium && (
                    <div className="relative">
                      <ul className="w-[100%] border border-[#D6D6D6] absolute border-t-0 rounded-bl-3xl rounded-br-3xl bg-[#ffffff] max-h-[191px] overflow-y-auto">
                        <li
                          onClick={() => changeValue4("All Mediums")}
                          className="py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium border-b border-[#D6D6D6]"
                        >
                          All Mediums
                        </li>
                        <li
                          onClick={() => changeValue4("Ap2")}
                          className="py-3 px-4 cursor-pointer text-[#BBBBBB] text-[13px] leading-[13px] font-medium"
                        >
                          Ap2
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Select Filters */}
                <div className="mb-6 mt-6">
                  <label
                    className="text-sm12 text-primaryGray font-medium leading-3.5 mb-1 mt-6"
                    htmlFor="size"
                  >
                    Size
                  </label>
                  <div className="flex gap-2.5">
                    <button
                      onClick={() => changeSizeFilter("S")}
                      className={`${
                        sizeBtn === "S"
                          ? "bg-[#BBBBBB] text-primaryBlack"
                          : "bg-[#ffffff] text-primaryGray"
                      } w-[40px] h-[40px] border border-[#D6D6D6] rounded-lg text-primaryGray text-sm14 leading-4 font-medium`}
                    >
                      S
                    </button>
                    <button
                      onClick={() => changeSizeFilter("M")}
                      className={`${
                        sizeBtn === "M"
                          ? "bg-[#BBBBBB] text-primaryBlack"
                          : "bg-[#ffffff] text-primaryGray"
                      } w-[40px] h-[40px] border border-[#D6D6D6] rounded-lg text-primaryGray text-sm14 leading-4 font-medium`}
                    >
                      M
                    </button>
                    <button
                      onClick={() => changeSizeFilter("L")}
                      className={`${
                        sizeBtn === "L"
                          ? "bg-[#BBBBBB] text-primaryBlack"
                          : "bg-[#ffffff] text-primaryGray"
                      } w-[40px] h-[40px] border border-[#D6D6D6] rounded-lg text-primaryGray text-sm14 leading-4 font-medium`}
                    >
                      L
                    </button>
                  </div>

                  {/* Orientation */}
                  <label
                    className="text-sm12 text-primaryGray font-medium leading-3.5 mb-1 mt-2"
                    htmlFor="orientation"
                  >
                    Orientation
                  </label>
                  <div className="flex gap-2.5">
                    {/* Custom */}
                    <svg
                      onClick={() => changeOrientationFilter("custom")}
                      className={`${
                        orientationBtn === "custom"
                          ? "fill-[#BBBBBB]"
                          : "fill-[#ffffff]"
                      }`}
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
                        stroke="#D9D9D9"
                      />
                      <path
                        className={`${
                          orientationBtn === "custom"
                            ? "fill-[#333333]"
                            : "fill-[#BBBBBB]"
                        }`}
                        d="M8 10C8 8.89543 8.89543 8 10 8H18C19.1046 8 20 8.89543 20 10V15C20 16.1046 19.1046 17 18 17H10C8.89543 17 8 16.1046 8 15V10Z"
                        fill="#333333"
                      />
                      <path
                        className={`${
                          orientationBtn === "custom"
                            ? "fill-[#333333]"
                            : "fill-[#BBBBBB]"
                        }`}
                        d="M8 21C8 19.8954 8.89543 19 10 19H18C19.1046 19 20 19.8954 20 21V29C20 30.1046 19.1046 31 18 31H10C8.89543 31 8 30.1046 8 29V21Z"
                        fill="#333333"
                      />
                      <path
                        className={`${
                          orientationBtn === "custom"
                            ? "fill-[#333333]"
                            : "fill-[#BBBBBB]"
                        }`}
                        d="M22 10C22 8.89543 22.8954 8 24 8H29C30.1046 8 31 8.89543 31 10V29C31 30.1046 30.1046 31 29 31H24C22.8954 31 22 30.1046 22 29V10Z"
                        fill="#333333"
                      />
                    </svg>

                    {/* Horizontal */}
                    <svg
                      onClick={() => changeOrientationFilter("horizontal")}
                      className={`${
                        orientationBtn === "horizontal"
                          ? "fill-[#BBBBBB]"
                          : "fill-[#ffffff]"
                      }`}
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
                        stroke="#D9D9D9"
                      />
                      <path
                        d="M8 14C8 12.8954 8.89543 12 10 12H30C31.1046 12 32 12.8954 32 14V26C32 27.1046 31.1046 28 30 28H10C8.89543 28 8 27.1046 8 26V14Z"
                        className={`${
                          orientationBtn === "horizontal"
                            ? "fill-[#333333]"
                            : "fill-[#BBBBBB]"
                        }`}
                        fill="#BBBBBB"
                      />
                    </svg>

                    {/* Verticle */}
                    <svg
                      onClick={() => changeOrientationFilter("verticle")}
                      className={`${
                        orientationBtn === "verticle"
                          ? "fill-[#BBBBBB]"
                          : "fill-[#ffffff]"
                      }`}
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
                        stroke="#D9D9D9"
                      />
                      <path
                        d="M12 10C12 8.89543 12.8954 8 14 8H26C27.1046 8 28 8.89543 28 10V30C28 31.1046 27.1046 32 26 32H14C12.8954 32 12 31.1046 12 30V10Z"
                        className={`${
                          orientationBtn === "verticle"
                            ? "fill-[#333333]"
                            : "fill-[#BBBBBB]"
                        }`}
                        fill="#BBBBBB"
                      />
                    </svg>

                    {/* Square */}
                    <svg
                      onClick={() => changeOrientationFilter("square")}
                      className={`${
                        orientationBtn === "square"
                          ? "fill-[#BBBBBB]"
                          : "fill-[#ffffff]"
                      }`}
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
                        stroke="#D9D9D9"
                      />
                      <path
                        d="M8 10C8 8.89543 8.89543 8 10 8H30C31.1046 8 32 8.89543 32 10V30C32 31.1046 31.1046 32 30 32H10C8.89543 32 8 31.1046 8 30V10Z"
                        className={`${
                          orientationBtn === "square"
                            ? "fill-[#333333]"
                            : "fill-[#BBBBBB]"
                        }`}
                        fill="#BBBBBB"
                      />
                    </svg>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <label
                    className="text-sm12 text-primaryGray font-medium leading-3.5 mb-1 "
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <p className="text-sm11 font-normal text-primaryGray mb-2">
                    Select minimum and maximum price range
                  </p>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label
                    className="text-sm12 text-primaryGray font-medium leading-3.5 mb-1 "
                    htmlFor="search"
                  >
                    Search by Artist/Contributor
                  </label>
                  <div className="relative">
                    <input
                      className="border border-[#D6D6D6] w-[100%] rounded-3xl placeholder:text-[#BBBBBB] placeholder:text-[13px] placeholder:leading-3 placeholder:font-medium py-2 px-4"
                      type="text"
                      placeholder="Contributor’s Name"
                    />
                    <button className="absolute right-1.5 top-1.5 bg-[#EEEEEE] text-primaryBlack text-[10px] font-medium leading-2.5 py-2 px-3 rounded-2xl">
                      Search
                    </button>
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <label
                    className="text-sm12 text-primaryGray font-medium leading-3.5 mb-1 "
                    htmlFor="colors"
                  >
                    Colors
                  </label>
                  <p className="text-orangeColor text-sm12 font-normal">
                    Clear Colour Filter
                  </p>
                </div>
                <button className="blackBtn">Clear All Filters</button>
              </form>
            </div>
          )}
          {/* Main Content */}
          <div className="content w-[100%]">
            <div className="flex">
              {!showSidebar && (
                <img
                  className="cursor-pointer mr-3"
                  onClick={() => setShowSidebar(true)}
                  src={filterIcon}
                  alt=""
                />
              )}
              <div className="flex gap-1">
                <div className="text-sm12 text-primaryGray py-1.5 border border-[#D6D6D6] rounded-2xl px-3">
                  Architecture/Buildings
                </div>
                <div className="text-sm12 text-primaryGray py-1.5 border border-[#D6D6D6] rounded-2xl px-3">
                  Backgrounds/Textures
                </div>
              </div>
            </div>
            <div className={`mainImagesCon mt-[15px] }`}>
              <ResponsiveMasonry
                columnsCountBreakPoints={
                  !showSidebar ? { 1920: 6 } : { 1920: 5 }
                }
              >
                <Masonry gutter="15px">
                  {artsList.map((data, i) => {
                    if (i >= firstPage && i < lastPage) {
                      return (
                        <div
                          key={data?.artId}
                          className={` ${
                            "w-[100%]"
                          }`}
                          style={{ height: "fit-content" }}
                        >
                          <div
                            className={` w-full group rounded-2xl relative`}
                            // style={{ height: `${data?.height}px` }}
                            onClick={() => goToArtDetailsPage(data?.artId)}
                          >
                            <img
                              style={{ height: "100%" }}
                              src={
                                imageGrid === "grid"
                                  ? imageLinkChange(data?.image)
                                  : imageLinkChangeSquaregrid(data?.image)
                              }
                              alt=""
                              className="rounded-2xl"
                            />
                            <div
                              className="group-hover:flex hidden rounded-2xl bg-blackRgba items-center justify-center absolute top-0 left-0 text-center"
                              style={{ height: "100%", width: "100%" }}
                            >
                              <div>
                                <p className="text-heading text-[#ffffff] font-semibold">
                                  {data?.productName}
                                </p>
                                <p className="text-sm12 text-[#ffffff] font-medium">
                                  An Affair with array of Artistically <br />
                                  Printed Products
                                </p>
                                <span className="text-[#FFFFFF] text-heading font-thin">
                                  745+
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5">
                            {data?.artName}
                          </p>
                          <p className="text-primaryGray text-sm12 leading-[15px]">
                            Artnstock <br />
                            35.4” x 31.5” Multiple Sizes
                          </p>
                          <p className="text-primaryBlack text-[15px] leading-[18px] font-semibold mt-1.5">
                            ${data?.price}
                          </p>
                        </div>
                      );
                    }
                  })}
                </Masonry>
              </ResponsiveMasonry>
            </div>

            {/* Pagination */}
            <div className="flex gap-[5px] mt-24 mx-auto items-center justify-center">
              <p className="text-[13px] text-primaryGray leading-[15px] font-normal">
                Page
              </p>
              <div className="flex w-[88px] border border-[#D6D6D6] rounded-2xl overflow-hidden">
                <button onClick={prevPage} className="bg-[#F7F7F7] py-2.5 px-3">
                  <img src={smallLeftArrow} alt="" />
                </button>
                <input
                  className="w-[30px] text-[13px] leading-[15px] font-normal text-primaryGray text-center"
                  type="text"
                  value={currentPage}
                />
                <button onClick={nextPage} className="bg-[#F7F7F7] py-2.5 px-3">
                  <img src={smallRightArrow} alt="" />
                </button>
              </div>
              <p className="text-[13px] text-primaryGray leading-[15px] font-normal">
                of {totalPage}
              </p>
            </div>
            <button
              onClick={nextPage}
              className="blackBtn mt-2.5 mb-24 mx-auto block"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchList;
