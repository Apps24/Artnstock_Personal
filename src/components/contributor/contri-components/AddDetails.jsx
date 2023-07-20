import selectall from '../../../assets/images/contributor/selectall.png';
import deleteicon from '../../../assets/images/contributor/delete-icon.png';
import undo from '../../../assets/images/contributor/undo.png';
import redo from '../../../assets/images/contributor/redo.png';
import save from '../../../assets/images/contributor/save.png';
import keyword from '../../../assets/images/contributor/keyword.png';
import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import GrayBoxforDetails from './GrayBoxforDetails';
import iconart from '../../../assets/images/contributor/icon-art.png';
import iconphotos from '../../../assets/images/contributor/icon-photos.png';
import iconfootage from '../../../assets/images/contributor/icon-footage.png';
import iconmusic from '../../../assets/images/contributor/icon-music.png';
import icontemplates from '../../../assets/images/contributor/icon-templates.png';
import addsmall from '../../../assets/images/contributor/addsmall.png';
import { httpClient } from '../../../axios';
import { artMasterModel } from '../../../models/allModel';
import AttachFileCards from './AttachFileCards';
import { setpath2 } from '../../../store/contriPathSlice';
import { useDispatch } from 'react-redux';
import view from '../../../assets/images/contributor/view.png';
import edit from '../../../assets/images/contributor/edit.png';
import deletee from '../../../assets/images/contributor/delete.png';

const releaseCards = [
  { id: '1', name: 'jn jencj jbnejne eudnedn' },
  { id: '1', name: 'jn jencj jbnejne eudnedn' },
  { id: '1', name: 'jn jencj jbnejne eudnedn' },
];

const AddDetails = () => {
  const [images, setImages] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [thumbnail, setThumbnail] = useState('');
  const [description, setDescription] = useState('');
  const [charCountt, setCharCount] = useState(0);
  const [cards, setCards] = useState([]);
  const [textWord, setTextWord] = useState('');

  // drop down menu states
  const [isOpenSubject, setIsOpenSubject] = useState(false);
  const [isOpenStyle, setIsOpenStyle] = useState(false);
  const [isOpenMedium, setIsOpenMedium] = useState(false);
  const [subjectMenu, setSubjectMenu] = useState(null);
  const [styleMenu, setStyleMenu] = useState(null);
  const [mediumMenu, setMediumMenu] = useState('Select Medium');
  const [subjectMenuList, setSubjectMenuList] = useState([]);
  const [styleMenuList, setStyleMenuList] = useState([]);

  // form main state
  const [formData, setFormData] = useState(artMasterModel);

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userId);

  // useEffect(() => {
  //   console.log(userId);
  // }, []);

  useEffect(() => {
    dispatch(setpath2('/ Add Details'));
  }, []);

  // api calls start
  useEffect(() => {
    const getSubjectList = async () => {
      const response = await httpClient.get('/subject_master');
      setSubjectMenuList(response.data);
      // console.log(response.data);
    };

    const getStyleList = async () => {
      const response = await httpClient.get('/style_master');
      setStyleMenuList(response.data);
      // console.log(response.data);
    };
    getSubjectList();
    getStyleList();
  }, []);

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await httpClient.post(
        '/art_master/create',
        formData
      );
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // api calls end

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newCards = Array.from(files);

    setCards((prevCards) => [...prevCards, ...newCards]);

    // console.log('new card', newCards);
    newCards.forEach((cards) => {
      let formData = new FormData();
      formData.append('file', cards);
      httpClient
        .post('/CloudinaryImageUpload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log('file uploaded successfully');
          // console.log(res);
          setFormData((prevFormData) => ({
            ...prevFormData,
            referenceFile: [
              ...prevFormData.referenceFile,
              res.data.secureUrl,
            ],
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const selectedImages = useSelector(
    (state) => state.images.selectedImages
  );

  const toggleMenuSubject = () => {
    setIsOpenSubject(!isOpenSubject);
  };
  const toggleMenuStyle = () => {
    setIsOpenStyle(!isOpenStyle);
  };
  const toggleMenuMedium = () => {
    setIsOpenMedium(!isOpenMedium);
  };

  const handleCardSelect = (card) => {
    // console.log('card selected', card);
    setSelectedCard(card);
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   image: card,
    // }));
  };

  // dropdown select func
  const handleSubjectMenuClick = (subject) => {
    setSubjectMenu(subject);
    setFormData((prevFormData) => ({
      ...prevFormData,
      subjectId: subject.subjectId,
    }));
  };

  const handleStyleMenuClick = (style) => {
    setStyleMenu(style);
    setFormData((prevFormData) => ({
      ...prevFormData,
      styleId: style.styleId,
    }));
  };

  const handleMediumMenuClick = (value) => {
    setMediumMenu(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      artMedium: value,
    }));
  };

  // button click
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // description onchange func
  const handleDescriptionChange = (event) => {
    const char = event.target.value.slice(0, 250);
    setDescription(char);
    const CharCount = char.length;
    setCharCount(CharCount);
    handleInputChange(event);
    // console.log(charCountt);
  };

  const keywordText = (e) => {
    const text = e.target.value;
    setTextWord(text);
  };

  const addKeyword = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      keywords: [...prevFormData.keywords, textWord],
    }));
    setTextWord('');
  };

  const deleteKeyword = (keyword) => {
    const updatedKeyword = formData.keywords.filter(
      (obje) => obje !== keyword
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      keywords: updatedKeyword,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    // console.log(event.target.name);

    if (type === 'checkbox' && name == 'commercialUser') {
      if (checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          commercialUser: [...prevFormData.commercialUser, value],
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          commercialUser: prevFormData.commercialUser.filter(
            (usage) => usage !== value
          ),
        }));
      }
    } else if (type === 'checkbox' && name == 'typeOfContent') {
      if (checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          typeOfContent: [...prevFormData.typeOfContent, value],
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          typeOfContent: prevFormData.typeOfContent.filter(
            (usage) => usage !== value
          ),
        }));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  useEffect(() => {
    setImages(selectedImages);
    setFormData((prevFormData) => ({
      ...prevFormData,
      userId: userId,
    }));
  }, []);

  // useEffect(() => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     referenceFile: cards,
  //   }));
  // }, [cards]);

  useEffect(() => {
    if (selectedImages && selectedImages.length > 0) {
      const firstImg = selectedImages[0];

      setFormData((prevFormData) => ({
        ...prevFormData,
        image: firstImg,
      }));

      const url = firstImg;
      setThumbnail(url);
    }
  }, [selectedImages]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // releasefileInputRefRelease

  const fileInputRefRelease = useRef(null);

  const handleButtonClickRelease = () => {
    fileInputRefRelease.current.click();
  };

  const [tempRelese, settempRelese] = useState([]);

  const handleFileChangeRelease = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files);

    // upload images
    newImages.forEach((cards) => {
      let formData = new FormData();
      formData.append('file', cards);
      httpClient
        .post('/CloudinaryImageUpload?parameter=false', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log('file uploaded successfully');
          // console.log(res);
          const dataa = res.data;

          settempRelese((prevImages) => [
            ...prevImages,
            { dataa, cards },
          ]);
        })

        .catch((err) => {
          console.log(err);
        });
    });
    // upload images
  };

  const handleCheckboxChangeRelease = (obj) => {
    const array = formData.releases.find(
      (item) => item === obj.dataa
    );
    if (!array) {
      setFormData((prevImages) => ({
        ...prevImages,
        releases: [...prevImages.releases, obj.dataa],
      }));
    } else {
      setFormData((prevImages) => ({
        ...prevImages,
        releases: prevImages.releases.filter(
          (item) => item !== obj.dataa
        ),
      }));
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex justify-center border-t-[1px] border-[#efefef] border-b-[1px]'>
          <div className='flex gap-[2px] h-[47px]'>
            <p className='text-[48px] text-[#cfcfcf] relative bottom-[11px] font-thin'>
              0
            </p>
            <p className='text-[11px] text-[#cfcfcf] pt-[6px] max-w-[70px] leading-3'>
              File(s) to be submitted to Artnstock
            </p>
          </div>
          <div className='flex gap-[2px] h-[47px]'>
            <div className='h-[38px] border-l-[1px] relative top-[5px] border-[#efefef]'>
              <p className='text-[48px] text-[#cfcfcf]  pl-[7px] max-h-[100%] relative bottom-[15px] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[11px] text-[#cfcfcf] max-w-[70px] pt-[6px] leading-3'>
                File(s) pending for review
              </p>
            </div>
          </div>
          <div className='flex gap-[2px] h-[47px]'>
            <div className='h-[38px] border-l-[1px] relative top-[5px] border-[#efefef]'>
              <p className='text-[48px] text-[#cfcfcf]  pl-[7px] relative bottom-[15px] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[11px] text-[#cfcfcf] max-w-[70px] pt-[6px] leading-3'>
                File(s) approved by Artnstock
              </p>
            </div>
          </div>
          <div className='flex gap-[2px] h-[47px]'>
            <div className='h-[38px] border-l-[1px] relative top-[5px] border-[#efefef]'>
              <p className='text-[48px] text-[#cfcfcf] pl-[7px] relative bottom-[15px] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[11px] text-[#cfcfcf] max-w-[70px] pt-[6px] leading-3'>
                File(s) rejected by Artnstock
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] flex justify-center pt-[15px]'>
        <div className='w-w1170 flex justify-between'>
          <div className='max-w-[179.09px] mt-[10px]'>
            <p className='text-[25px] font-medium'>Add Details</p>
            <p className='text-[11px] text-primaryGray leading-[1.1]'>
              Select an item to add details and submit for review.
              <span className='text-orangeColor'> Learn more</span>
            </p>
          </div>
          <div className='flex gap-[20px] mt-[17px]'>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={selectall}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px] bg-[#d7d7d7]'
              />
              <p className='text-primaryGray text-[11px]'>
                Select All
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={deleteicon}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Delete Image
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={undo}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Undo Changes
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={redo}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Redo Changes
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={save}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Save Draft
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={keyword}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Keyword Manager
              </p>
            </div>
          </div>
          <div className='w-[205px] pl-[95px] leading-[1] mt-[17px]'>
            <p className='text-[11px] text-primaryGray'>
              Your Unpaid Earnings
            </p>
            <p className='text-[25px] text-pinkColor'>
              <span className='text-[16px]'>$</span>600.00
            </p>
            <button className='bg-[#888888] text-[white] text-[11px] rounded-[20px] px-[10px] py-[2px]'>
              Account Summary
            </button>
          </div>
        </div>
      </div>
      <div className='w-[100%] flex mt-[10px] justify-center'>
        <div className='w-w1168  flex-column gap-[10px] pb-[30px]'>
          <div className='flex justify-start flex-wrap gap-[10px]'>
            {/* dynamic gray box */}

            {images.map((card, index) => (
              <GrayBoxforDetails
                key={index}
                card={card}
                isSelected={selectedCard === card}
                onCardSelect={handleCardSelect}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='w-[100%] text-center '>
        <div
          className='flex flex-col justify-center w-w690 h-[27.813rem] mx-[auto] bg-[#f7f7f7] rounded-[36px] h-full w-full bg-no-repeat bg-center bg-cover'
          style={{
            backgroundImage: selectedCard
              ? `url(${thumbnail})`
              : undefined,
          }}
        >
          {!selectedCard && (
            <div>
              <p className='text-pinkColor text-[18px] my-[auto]'>
                Select thumbnail to view the image.
              </p>
              <p className='text-primaryGray text-[11px] my-[auto]'>
                Select an item to add details and submit for review.{' '}
                <span className='text-orangeColor text-[11px]'>
                  Learn more
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className='w-[100%]'>
        <div className='w-w690 mx-[auto]'>
          <div className='flex gap-[5px] pt-[10px]'>
            <button className='w-[100px] h-[27px] text-[11px] border-[1px] border-[#eaeaea] rounded-[13.5px] text-primaryGray'>
              Set as Featured
            </button>
            <button className='w-[100px] h-[27px] text-[11px] border-[1px] border-[#eaeaea] rounded-[13.5px] text-primaryGray'>
              Set as Exclusive
            </button>
          </div>
          <div className='flex flex-col pt-[30px]'>
            <p className='text-[15px] text-primaryBlack font-medium'>
              Select Category
            </p>
            <div className='flex gap-[10px] pt-[10px]'>
              <img src={iconart} />
              <img src={iconphotos} />
              <img src={iconfootage} />
              <img src={iconmusic} />
              <img src={icontemplates} />
            </div>
          </div>
          <div className='flex flex-col pt-[30px]'>
            <p className='text-[15px] text-primaryBlack font-medium'>
              Select Art Category
            </p>
            <div>
              <p className='text-[12px] primary-Gray pt-[10px]'>
                Image Title
              </p>
              <input
                type='text'
                placeholder='Enter Title'
                className='w-[100%] h-[40px] rounded-[20px] border-[1px] border-[#d6d6d6] pl-[15px]'
                onChange={handleInputChange}
                name='artName'
              />
            </div>
            <div className='flex gap-[15px]'>
              <div className='flex flex-col'>
                <p className='text-[12px] primary-Gray pt-[10px]'>
                  Subject
                </p>

                <div
                  className='abc'
                  onClick={() => {
                    setIsOpenSubject(!isOpenSubject);
                  }}
                >
                  <button className='w-[220px] h-[40px] rounded-[20px] border-[1px] border-[#d6d6d6] pl-[15px] text-[14px] text-primaryGray text-start'>
                    {subjectMenu ? (
                      <span>{subjectMenu.subjectName}</span>
                    ) : (
                      <span>Select Subject</span>
                    )}
                  </button>
                  {isOpenSubject && (
                    <ul className='shadow-dropShadow rounded-b-2xl dropdown__menu absolute z-50 bg-[#ffffff] w-[220px] text-center text-[14px] text-primaryGray max-h-[220px] overflow-y-auto'>
                      {subjectMenuList &&
                        subjectMenuList.map((subject) => (
                          <li
                            className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'
                            onClick={() => {
                              handleSubjectMenuClick(subject);
                            }}
                          >
                            {subject.subjectName}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className='flex flex-col'>
                <p className='text-[12px] primary-Gray pt-[10px]'>
                  Style
                </p>

                <div
                  className='abc'
                  // onMouseEnter={toggleMenuStyle}
                  // onMouseLeave={toggleMenuStyle}
                  onClick={() => {
                    setIsOpenStyle(!isOpenStyle);
                  }}
                >
                  <button className='w-[220px] h-[40px] rounded-[20px] border-[1px] border-[#d6d6d6] pl-[15px] text-[14px] text-primaryGray text-start'>
                    {styleMenu ? (
                      <span>{styleMenu.name}</span>
                    ) : (
                      <span>Select Style</span>
                    )}
                  </button>
                  {isOpenStyle && (
                    <ul
                      className='shadow-dropShadow rounded-b-2xl dropdown__menu absolute z-50 bg-[#ffffff] w-[220px] text-center text-[14px] text-primaryGray max-h-[220px] overflow-y-auto'
                      // style={{
                      //   boxShadow:
                      //     ' rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      // }}
                    >
                      {styleMenuList &&
                        styleMenuList.map((style) => (
                          <li
                            className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'
                            onClick={() => {
                              handleStyleMenuClick(style);
                            }}
                          >
                            {style.name}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* tempi */}
              <div className='flex flex-col'>
                <p className='text-[12px] primary-Gray pt-[10px]'>
                  Medium
                </p>

                <div
                  className='abc'
                  // onMouseEnter={toggleMenuMedium}
                  // onMouseLeave={toggleMenuMedium}
                  onClick={() => {
                    setIsOpenMedium(!isOpenMedium);
                  }}
                >
                  <button className='w-[220px] h-[40px] rounded-[20px] border-[1px] border-[#d6d6d6] pl-[15px] text-[14px] text-primaryGray text-start'>
                    {mediumMenu ? (
                      <span>{mediumMenu}</span>
                    ) : (
                      <span>Select Medium</span>
                    )}
                    {/* {mediumMenu} */}
                  </button>
                  {isOpenMedium && (
                    <ul
                      className='shadow-dropShadow rounded-b-2xl dropdown__menu absolute z-50 bg-[#ffffff] w-[220px] text-center text-[14px] text-primaryGray max-h-[220px] overflow-y-auto'
                      style={{
                        boxShadow:
                          ' rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      }}
                    >
                      <li
                        className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'
                        onClick={() => {
                          handleMediumMenuClick('Digital');
                        }}
                      >
                        Digital
                      </li>
                      <li
                        className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'
                        onClick={() => {
                          handleMediumMenuClick('Digital');
                        }}
                      >
                        Digital
                      </li>
                      <li
                        className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'
                        onClick={() => {
                          handleMediumMenuClick('Digital');
                        }}
                      >
                        Digital
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              {/* tempi */}
            </div>
          </div>

          {/* tempi */}

          <div className='flex flex-col pt-[30px]'>
            <p className='text-[15px] text-primaryBlack font-medium'>
              Select Commercial Usage
            </p>
            <p className='text-[11px] primary-Gray'>
              Lorem Ipsum dolor sit amet consectetur adipiscing elit
              sed do.
            </p>
            <div className='flex flex-col gap-[6px] pt-[10px]'>
              <div className='flex gap-[5px]'>
                <input
                  type='checkbox'
                  name='commercialUser'
                  value='Web Media'
                  onChange={handleInputChange}
                />
                <p className='text-[13px] text-primaryGray'>
                  Web Media
                </p>
              </div>
              <div className='flex gap-[5px]'>
                <input
                  type='checkbox'
                  name='commercialUser'
                  value='Print Media'
                  onChange={handleInputChange}
                />
                <p className='text-[13px] text-primaryGray'>
                  Print Media
                </p>
              </div>
              <div className='flex gap-[5px]'>
                <input
                  type='checkbox'
                  name='commercialUser'
                  value='Print on Products'
                  onChange={handleInputChange}
                />
                <p className='text-[13px] text-primaryGray'>
                  Print on Products
                </p>
              </div>
              <div className='flex gap-[5px]'>
                <input
                  type='checkbox'
                  name='commercialUser'
                  value='Sell the rights'
                  onChange={handleInputChange}
                />
                <p className='text-[13px] text-primaryGray'>
                  Sell the rights
                </p>
              </div>
            </div>
          </div>

          {/* tempi */}

          <div className='flex flex-col pt-[30px]'>
            <p className='text-[15px] text-primaryBlack font-medium'>
              Select Type of Content
            </p>
            <p className='text-[11px] primary-Gray'>
              Lorem Ipsum dolor sit amet consectetur adipiscing elit
              sed do.
            </p>
            <div className='flex flex-col gap-[6px] pt-[10px]'>
              <div className='flex gap-[5px]'>
                <input
                  type='checkbox'
                  name='typeOfContent'
                  value='Original Content'
                  onChange={handleInputChange}
                />
                <p className='text-[13px] text-primaryGray'>
                  Original Content
                </p>
              </div>
              <div className='flex gap-[5px]'>
                <input
                  type='checkbox'
                  name='typeOfContent'
                  value='Content with Reference'
                  onChange={handleInputChange}
                />
                <p className='text-[13px] text-primaryGray'>
                  Content with Reference
                </p>
              </div>
              <div className='flex gap-[5px]'>
                <input
                  type='checkbox'
                  name='typeOfContent'
                  value='Matured Content'
                  onChange={handleInputChange}
                />
                <p className='text-[13px] text-primaryGray'>
                  Matured Content
                </p>
              </div>
            </div>
          </div>
          <div className='pt-[5px]'>
            <p className='text-[12px] text-primaryGray'>
              Attach Reference file
            </p>
            <div className='flex flex-wrap gap-[10px] border border-dashed rounded-[13px] pt-[8px] pb-[8px] pl-[8px] border-[#d6d6d6]'>
              <input
                type='file'
                multiple
                onChange={handleFileChange}
                accept='image/*'
                style={{ display: 'none' }}
                ref={fileInputRef}
              />
              {cards.map((card, index) => (
                <AttachFileCards key={index} card={card} />
              ))}

              {/* {cards.map((card) => (
                <div
                  style={{
                    backgroundImage: `url(${URL.createObjectURL(
                      card
                    )})`,
                  }}
                  className='w-[65px] h-[65px] rounded-[10px] flex justify-center items-center bg-no-repeat bg-center bg-cover transform translate-z-0'
                ></div>
              ))} */}
              <div
                onClick={handleButtonClick}
                className='w-[65px] h-[65px] bg-[#f7f7f7] rounded-[10px] flex justify-center items-center'
              >
                <img className='h-[25px] w-[25px]' src={addsmall} />
              </div>
            </div>
          </div>
          <div className='pt-[7px]'>
            <p className='text-[12px] text-primaryGray'>
              Description
            </p>
            <div className=''>
              <textarea
                name='description'
                type='text'
                className='border border-[#d6d6d6] h-[112px] w-[455px] rounded-[16px] pb-[70px] pl-[10px]'
                value={description}
                onChange={handleDescriptionChange}
              />
              <p className='text-[11px] text-primaryGray'>
                {charCountt}/250 characters
              </p>
            </div>
          </div>

          {/* release test */}
          <div className='pt-[25px]'>
            <p className='text-[15px] text-primaryBlack font-medium'>
              Attach Releases
            </p>
            <p className='text-[11px] primary-Gray'>
              Lorem Ipsum dolor sit amet consectetur adipiscing elit
              sed do.
            </p>
            <div>
              <input
                type='file'
                multiple
                onChange={handleFileChangeRelease}
                accept='image/*'
                style={{ display: 'none' }}
                ref={fileInputRefRelease}
              />
              <button
                onClick={handleButtonClickRelease}
                className='w-[6.625rem] h-[1.750rem] bg-[#8e8e8e] text-[#ffffff] rounded-[0.875rem] text-[0.750rem] font-medium'
              >
                Attach Release
              </button>
              <p className='text-[0.688rem] mt-[0.188rem]'>
                JPEG or PDF file only. Max 4MB.
              </p>
            </div>
            {tempRelese.length > 0 && (
              <div className='text-[0.750rem] border border-[#d6d6d6] rounded-[0.625rem]'>
                {tempRelese.map((obj, index) => (
                  <p
                    key={index}
                    className={`${
                      index !== tempRelese.length - 1
                        ? 'border-b border-[#d6d6d6]'
                        : ''
                    } flex justify-between p-[0.250rem] px-[0.500rem]`}
                  >
                    <div className='flex gap-[0.500rem]'>
                      <input
                        type='checkbox'
                        onChange={() =>
                          handleCheckboxChangeRelease(obj)
                        }
                      />
                      <span>{obj.cards.name}</span>
                    </div>
                    <div className='flex gap-[1.188rem]'>
                      <div className='pt-[0.188rem]'>
                        <img src={view} alt='' />
                      </div>
                      <div>
                        <img src={edit} alt='' />
                      </div>
                      <div>
                        <img src={deletee} alt='' />
                      </div>
                    </div>
                  </p>
                ))}
              </div>
            )}
          </div>
          {/* release test */}

          <div className='pt-[25px]'>
            <p className='text-[15px] text-primaryBlack font-medium'>
              Add Keywords
            </p>
            <div className='pt-[10px]'>
              <input
                type='text'
                className='w-[220px] h-[38px] border border-[#d6d6d6] rounded-[19px] pl-[15px]'
                placeholder='Enter Keywords'
                onChange={keywordText}
                value={textWord}
              />
              <button
                onClick={addKeyword}
                className='w-[42px] h-[26px] bg-[#eeeeee] text-primaryGray text-[11px] rounded-[13px] relative right-[48px] bottom-[2px]'
              >
                Add
              </button>
              <div className='flex justify-between w-[220px]'>
                <p className='text-[11px] text-primaryGray'>
                  Add at least 7 keywords
                </p>
                <p className='text-[11px] text-primaryGray'>
                  0/50 characters
                </p>
              </div>
              <div className='pt-[7px]'>
                <p className='text-[12px] text-primaryGray'>
                  Keywords Added
                </p>
                <div className='flex flex-wrap gap-[5px]'>
                  {formData.keywords.map((keyword) => (
                    <div className='text-[11px] text-primaryGray border border-[#dddddd] rounded-[13px] px-[8px] h-[26px]'>
                      {keyword} &nbsp;&nbsp;
                      <span
                        onClick={() => {
                          deleteKeyword(keyword);
                        }}
                        className='text-[15px] text-primaryGray cursor-pointer'
                      >
                        x
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex gap-[15px] pt-[10px]'>
                <p className='text-primaryGray text-[12px]'>
                  Copy Keywords
                </p>
                <p className='text-primaryGray text-[12px]'>
                  Paste Keywords
                </p>
                <p className='text-orangeColor text-[12px]'>
                  Clear Keywords
                </p>
              </div>
              <div className='pt-[7px]'>
                <button className='w-[129px] h-[28px] border border-[2px] border-primaryBlack rounded-[14px] text-[11px] text-primaryBlack'>
                  Keyword Suggestion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] text-center pt-[30px]'>
        <button
          onClick={submitForm}
          className='bg-[#d6d6d6] text-[white] h-[40px] w-[88px] rounded-[30px] text-[14px]'
        >
          Add Details
        </button>
      </div>
    </>
  );
};

export default AddDetails;
