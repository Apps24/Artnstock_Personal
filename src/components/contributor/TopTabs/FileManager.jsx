import selectall from '../../../assets/images/contributor/selectall.png';
import deleteicon from '../../../assets/images/contributor/delete-icon.png';

import keyword from '../../../assets/images/contributor/keyword.png';
import newSet from '../../../assets/images/contributor/newSet.png';
import renameSet from '../../../assets/images/contributor/renameSet.png';
import movetoSet from '../../../assets/images/contributor/movetoSet.png';
import dropdown from '../../../assets/images/socials/dropdown.png';
import gridBlack from '../../../assets/images/contributor/gridBlack.png';
import gridGray from '../../../assets/images/contributor/gridGray.png';
// import searchIcon from '../../assets/images/Icons/searchDarkIcon.svg';
import searchIcon from '../../../assets/images/Icons/searchDarkIcon.svg';
// update

import allfiles from '../../../assets/images/contributor/allfiles.png';

import editContentSet from '../../../assets/images/contributor/editContentSet.png';
import shareSet from '../../../assets/images/contributor/shareSet.png';
import imagesfolder from '../../../assets/images/contributor/imagesfolder.png';

// file types images

import artFiles from '../../../assets/images/contributor/artFiles.png';
import photosFiles from '../../../assets/images/contributor/photosFiles.png';
import footageFiles from '../../../assets/images/contributor/footageFiles.png';
import musicFiles from '../../../assets/images/contributor/musicFiles.png';
import templatesFiles from '../../../assets/images/contributor/templatesFiles.png';
import productFiles from '../../../assets/images/contributor/productFiles.png';
import folder from '../../../assets/images/contributor/folder.png';
import backArrow from '../../../assets/images/contributor/backArrow.png';
import nextArrow from '../../../assets/images/contributor/nextArrow.png';

// hooks

import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import AllFiles from '../contri-components/AllFiles';

const images = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '2',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Italian',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Italian',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Italian',
  },
  {
    id: '5',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Italian',
  },
  {
    id: '6',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Italian',
  },
  {
    id: '7',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '8',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '9',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '10',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '11',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '12',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '13',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '14',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '15',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '16',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '17',
    image:
      'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '18',
    image:
      'https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '19',
    image:
      'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '20',
    image:
      'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '21',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
  {
    id: '22',
    image:
      'https://images.pexels.com/photos/2622179/pexels-photo-2622179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    uploaded: '26 Jan,2022',
    name: 'Spanish',
  },
];

// popuop
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
    padding: 50px;
    width: 490px;
    height: 585px;
  }
`;

const FileManager = () => {
  const [categoriesFocus, setCategoriesFocus] = useState('all');
  const [artTabFocus, setArtTabFocus] = useState(false);
  const [photosTabFocus, setPhotosTabFocus] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isNameOpen, setIsNameOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [folderName, setFolderName] = useState('');

  const [categories, setCategories] = useState({
    all: images,
    art: [],
    photo: [],
    footage: [],
    music: [],
    templates: [],
    product: [],
  });

  // folder
  // const [folder, setFolder] = useState({});
  const [create, setCreate] = useState(false);
  const [name, setname] = useState('');
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);

  const createFolder = (name) => {
    const newFolder = {
      name: name,
      image: '',
      files: [],
    };

    if (categoriesFocus === 'art') {
      setCategories((prevData) => ({
        ...prevData,
        art: [...prevData.art, newFolder],
      }));
    } else if (categoriesFocus === 'photos') {
      setCategories((prevData) => ({
        ...prevData,
        photo: [...prevData.photo, newFolder],
      }));
    }

    setCreate(false);
  };

  const namee = (event) => {
    const n = event.target.value;
    setname(n);
    // createFolder(n);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // Enter key
      createFolder(name);
    }
  };

  const inputRef = useRef(null);

  // redux slice
  const selectedAllFilesImages = useSelector(
    (state) => state.fileimages.selectedAllFilesImages
  );

  //   paginationn **dont change the sequence of the code below** else will give undefined error
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  let abc;
  if (categoriesFocus === 'all') {
    abc = categories.all || [];
  } else if (categoriesFocus === 'art') {
    abc = categories.art || [];
  }

  const dataToRender = abc;
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = dataToRender.slice(start, end);

  const totalPages = Math.ceil(dataToRender.length / itemsPerPage);

  const handlePrevPage = () => {
    console.log(currentPage);
    if (currentPage > 1 && currentPage <= totalPages) {
      console.log('i am running');
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    console.log(currentPage);
    if (currentPage >= 1 && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  //pagination ends

  const addToFolder = () => {
    if (category === 'Art') {
      setCategories((prevFormData) => {
        const updatedArt = prevFormData.art.map((folder) => {
          if (folder.name === folderName) {
            return {
              ...folder,
              files: [...folder.files, selectedAllFilesImages[0]],
            };
          }
          return folder;
        });

        return {
          ...prevFormData,
          art: updatedArt,
        };
      });
    } else if (category === 'Photos') {
      setCategories((prevFormData) => {
        const updatedArt = prevFormData.photo.map((folder) => {
          if (folder.name === folderName) {
            return {
              ...folder,
              files: [...folder.files, selectedAllFilesImages[0]],
            };
          }
          return folder;
        });

        return {
          ...prevFormData,
          photo: updatedArt,
        };
      });
    }
  };

  const [imagesFolderArray, setImagesFolderArray] = useState(null);
  // mapping folders photos/arts
  const folderImages = (obj) => {
    // console.log(obj);
    setImagesFolderArray(obj);
    setCategoriesFocus('folderImages');
  };

  useEffect(() => {
    if (categoriesFocus === 'art' && create) {
      inputRef.current.focus();
    } else if (categoriesFocus === 'photos' && create) {
      inputRef.current.focus();
    }
  }, [categoriesFocus, create]);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <div>
      <div className='flex justify-center'>
        <div className='flex justify-center border-t-[1px] border-[#efefef] border-b-[1px]'>
          <div className='flex gap-[2px] h-[47px]'>
            <p className='text-[48px] text-[#cfcfcf] relative bottom-[11px] font-thin'>
              0
            </p>
            <p className='text-[11px] text-[#cfcfcf] pt-[6px] max-w-[70px] leading-3'>
              Files Uploaded in Art
            </p>
          </div>
          <div className='flex gap-[2px] h-[47px]'>
            <div className='h-[38px] border-l-[1px] relative top-[5px] border-[#efefef]'>
              <p className='text-[48px] text-[#cfcfcf]  pl-[7px] max-h-[100%] relative bottom-[15px] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[11px] text-[#cfcfcf] pt-[6px] max-w-[70px] leading-3'>
                Files Uploaded in Photos
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
                Files Uploaded in Footage
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
                Files Uploaded in Music
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
                Files Uploaded in Templates
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] flex justify-center pt-[35px]'>
        <div className='w-[1410px] flex justify-between'>
          <div className='max-w-[199.3px] mt-[10px]'>
            <p className='text-[25px] font-medium'>
              All Files{' '}
              <span className='text-[11px] text-[#808080]'>
                0 files
              </span>
            </p>
            <p className='text-[11px] text-primaryGray leading-[1.1]'>
              Refer a new customer to earn 30% of their first payment
              <span className='text-orangeColor'> Learn more</span>
            </p>
          </div>
          <div className='flex gap-[20px] mt-[17px] ml-[112px]'>
            <div
              onClick={() => {
                setCreate(true);
              }}
              className='flex-column max-w-[41px] text-center cursor-pointer'
            >
              <img
                src={newSet}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px] bg-[#d7d7d7]'
              />
              <p className='text-primaryGray text-[11px]'>
                Create New Set
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={renameSet}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Rename Set
              </p>
            </div>

            {selectedAllFilesImages.length > 0 ? (
              <StyledPopup
                trigger={
                  <div className='flex-column max-w-[40px] text-center cursor-pointer'>
                    <img
                      src={movetoSet}
                      alt=''
                      className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
                    />
                    <p className='text-primaryGray text-[11px]'>
                      Move to Set
                    </p>
                  </div>
                }
                modal
              >
                {(close) => (
                  <div className='flex flex-col gap-[21px]'>
                    {selectedAllFilesImages.length > 0 ? (
                      <div
                        style={{
                          backgroundImage: `url(${selectedAllFilesImages[0].image})`,
                        }}
                        className='w-[390px] h-[270px] bg-no-repeat bg-center bg-cover rounded-[16px]'
                      ></div>
                    ) : (
                      <div></div>
                    )}
                    <div>
                      <div className='flex flex-col'>
                        <p className='text-[15px] font-medium mb-[3px]'>
                          Select Category
                        </p>
                        <div>
                          <button
                            onClick={() => {
                              setIsCategoryOpen(!isCategoryOpen);
                            }}
                            className={`${
                              isCategoryOpen === true
                                ? 'rounded-t-[20px] shadow-dropShadowButton border-b border-[#efefef]'
                                : 'rounded-[20px] border  border-[#d6d6d6]'
                            } cursor-pointer w-[390px] h-[40px] bg-[#FFFFFF] text-primaryGray text-sm14 font-medium flex items-center justify-between px-[15px]`}
                          >
                            {category === '' ? (
                              <span>Select Category</span>
                            ) : (
                              <span>{category}</span>
                            )}

                            <img
                              className='inline-block'
                              src={dropdown}
                              alt=''
                            />
                          </button>

                          {isCategoryOpen && (
                            <ul className='shadow-dropShadow rounded-b-2xl z-50 cursor-pointer hover:overflow-hidden dropdown__menu absolute bg-[#ffffff] w-[390px] text-center text-[14px] text-primaryGray'>
                              <li
                                onClick={() => {
                                  setCategory('Art');
                                }}
                                className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                              >
                                Art
                              </li>
                              <li
                                onClick={() => {
                                  setCategory('Photos');
                                }}
                                className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                              >
                                Photos
                              </li>
                              <li
                                onClick={() => {
                                  setCategory('Footage');
                                }}
                                className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                              >
                                Footage
                              </li>
                              <li
                                onClick={() => {
                                  setCategory('Music');
                                }}
                                className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                              >
                                Music
                              </li>
                              <li
                                onClick={() => {
                                  setCategory('Templates');
                                }}
                                className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                              >
                                Templates
                              </li>
                              <li
                                onClick={() => {
                                  setCategory('Product');
                                }}
                                className='py-1 px-3.5 hover:bg-[#F0F0F0]'
                              >
                                Product
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex flex-col'>
                        <p className='text-[15px] font-medium mb-[3px]'>
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
                                ? 'rounded-t-[20px] shadow-dropShadowButton border-b border-[#efefef]'
                                : 'rounded-[20px] border  border-[#d6d6d6]'
                            } cursor-pointer w-[390px] h-[40px] bg-[#FFFFFF] text-primaryGray text-sm14 font-medium flex items-center justify-between px-[15px]`}
                          >
                            {folderName === '' ? (
                              <span>Enter Set Name</span>
                            ) : (
                              <span>{folderName}</span>
                            )}
                            {}

                            <img
                              className='inline-block'
                              src={dropdown}
                              alt=''
                            />
                          </button>

                          {category === 'Art' ? (
                            <div>
                              {isNameOpen && (
                                <ul className='cursor-pointer shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute bg-[#ffffff] w-[390px] text-center text-[14px] text-primaryGray'>
                                  {categories.art.map(
                                    (items, index) => (
                                      <li
                                        onClick={() => {
                                          setFolderName(items.name);
                                        }}
                                        className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                                      >
                                        {items.name}
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </div>
                          ) : category === 'Photos' ? (
                            <div>
                              {isNameOpen && (
                                <ul className='cursor-pointer shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute bg-[#ffffff] w-[390px] text-center text-[14px] text-primaryGray'>
                                  {categories.photo.map(
                                    (items, index) => (
                                      <li
                                        onClick={() => {
                                          setFolderName(items.name);
                                        }}
                                        className='py-1 px-3.5 hover:bg-[#F0F0F0] border-b border-[#EFEFEF]'
                                      >
                                        {items.name}
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='flex gap-[10px] justify-center pb-[30px]'>
                      <button
                        onClick={addToFolder}
                        className='blackBtn h-[40px] w-[88px]'
                      >
                        Save
                      </button>
                      <button className='h-[40px] px-6 py-2 rounded-3xl text-sm14 text-primaryBlack border-[2px] w-[88px]'>
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </StyledPopup>
            ) : (
              <div className='flex-column max-w-[40px] text-center cursor-pointer'>
                <img
                  src={movetoSet}
                  alt=''
                  className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
                />
                <p className='text-primaryGray text-[11px]'>
                  Move to Set
                </p>
              </div>
            )}

            {/* popup */}

            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={editContentSet}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Edit Content
              </p>
            </div>
            <div className='flex-column max-w-[34px] text-center'>
              <img
                src={selectall}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
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
                Delete Set
              </p>
            </div>
            <div className='flex-column max-w-[37px] text-center'>
              <img
                src={shareSet}
                alt=''
                className='w-[16px] h-[16px] mx-[auto] mb-[6px]'
              />
              <p className='text-primaryGray text-[11px]'>
                Share Portfolio
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
          <div className='w-[330px] leading-[1] mt-[17px] flex gap-[20px]'>
            <div className='flex gap-[10px]'>
              <div>
                <button
                  onClick={() => {
                    setIsOpenSortBy(!isOpenSortBy);
                  }}
                  className={`${
                    isOpenSortBy === true
                      ? 'rounded-t-[15px] shadow-dropShadowButton border-b border-[#efefef]'
                      : 'rounded-[15px] border  border-[#d6d6d6]'
                  } cursor-pointer w-[120px] text-[12px] h-[30px] flex items-center justify-between p-[10px]`}
                  // className='cursor-pointer w-[120px] border border-[#d6d6d6] text-[12px] h-[30px] rounded-[15px] flex items-center justify-between p-[10px]'
                >
                  <span className='text-[#bbbbbb]'>Sort by</span>
                  <img
                    className='inline-block'
                    src={dropdown}
                    alt=''
                  />
                </button>
                {isOpenSortBy && (
                  <ul className='shadow-dropShadow rounded-b-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#ffffff] w-[120px] text-center text-[14px] text-primaryGray'>
                    <li className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'>
                      month
                    </li>
                    <li className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'>
                      date
                    </li>
                    <li className='cursor-pointer hover:bg-[#F0F0F0] py-[5px]'>
                      year
                    </li>
                  </ul>
                )}
              </div>

              <button className='greenBlueButton w-[123px] h-[30px] text-[12px] font-medium px-[5px]'>
                Set Store Marksups
              </button>
            </div>

            <div className='flex gap-[10px] pt-[3px]'>
              <img
                className='w-[23px] h-[23px]'
                src={gridBlack}
                alt=''
              />
              <img
                className='w-[23px] h-[23px]'
                src={gridGray}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full pt-[12px]'>
        {/* test */}

        <div className='mt-3.5 flex items-center max-w-[1410px] mx-[auto]'>
          <input
            className='bg-[#EEEEEE] flex-1 outline-0 py-3 px-5 w-fit placeholder:text-placeholderColor placeholder:font-medium rounded-tl-3xl rounded-bl-3xl  border-[#DADADA]'
            type='text'
            placeholder='Search by Title or Tags'
          />

          <button className=' py-3.5 rounded-tr-3xl rounded-br-3xl bg-[#e6e6e6] px-4 text-primaryBlack text-sm14 font-medium'>
            <img
              className='inline-block mr-2'
              src={searchIcon}
              alt=''
            />
            Search
          </button>
        </div>

        {/* test */}
      </div>
      <div className='w-full pt-[20px]'>
        <div className='flex gap-[30px] max-w-[1410px] mx-[auto]'>
          <div className='w-[210px]  flex flex-col text-primaryGray'>
            <div
              onClick={() => {
                setCategoriesFocus('all');
              }}
              className='flex h-[40px] gap-[8px] bg-[#f0f0f0] py-[5px] cursor-pointer'
            >
              <div>
                <img src={allfiles} alt='' />
              </div>

              <div className='flex w-[184px] justify-between'>
                <div className='flex flex-col justify-center'>
                  <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                    All Files
                  </p>
                  <p className='text-[11px] leading-[1]'>
                    All Uploaded Files on ArtStock
                  </p>
                </div>
                <div>
                  <p className='text-[15px] font-medium'>
                    {images.length}
                  </p>
                </div>
              </div>
            </div>

            {/* test */}
            <div
              onClick={() => {
                setCategoriesFocus('art');
                setArtTabFocus(!artTabFocus);
              }}
              className='flex h-[38px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef] cursor-pointer'
            >
              <div className='my-[auto]'>
                <img src={artFiles} alt='' />
              </div>

              <div className='flex w-[184px] justify-between'>
                <div className='flex flex-col justify-center'>
                  <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                    Art{' '}
                    <span className='text-primaryGray text-[11px] leading-[1]'>
                      (0 Sets)
                    </span>
                  </p>
                </div>
                <div>
                  {artTabFocus === true ? (
                    <p className='text-[15px] font-medium'>-</p>
                  ) : (
                    <p className='text-[15px] font-medium'>+</p>
                  )}
                </div>
              </div>
            </div>

            {/* test */}
            {artTabFocus === true &&
              categories.art.map((obj) => (
                <div
                  onClick={() => {
                    folderImages(obj);
                  }}
                  className='flex h-[27px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef] cursor-pointer'
                >
                  <div className='my-[auto]'>
                    <img src={folder} alt='' />
                  </div>
                  <div className='flex w-[184px] justify-between'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-[12px] text-primaryGray font-medium leading-[1]'>
                        {obj.name}
                      </p>
                    </div>
                    <div>
                      <p className='text-[12px]'>10</p>
                    </div>
                  </div>
                </div>
              ))}

            {/* test */}

            {/* test */}
            {categoriesFocus === 'art' && create === true ? (
              <div className='flex h-[27px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef] cursor-pointer'>
                <div className='my-[auto]'>
                  <img src={folder} alt='' />
                </div>
                <div className='flex w-[184px] justify-between'>
                  <div className='flex flex-col justify-center'>
                    <input
                      onChange={namee}
                      onKeyDown={handleKeyDown}
                      ref={inputRef}
                      placeholder='Enter folder name'
                      className='text-[12px] text-primaryGray font-medium leading-[1] outline-none'
                      type='text'
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            {/* test */}

            <div
              onClick={() => {
                setCategoriesFocus('photos');
                setPhotosTabFocus(!photosTabFocus);
              }}
              className='flex h-[38px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef] cursor-pointer'
            >
              <div className='my-[auto]'>
                <img src={photosFiles} alt='' />
              </div>

              <div className='flex w-[184px] justify-between'>
                <div className='flex flex-col justify-center'>
                  <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                    Photos{' '}
                    <span className='text-primaryGray text-[11px] leading-[1]'>
                      (0 Sets)
                    </span>
                  </p>
                </div>
                <div>
                  {photosTabFocus === true ? (
                    <p className='text-[15px] font-medium'>-</p>
                  ) : (
                    <p className='text-[15px] font-medium'>+</p>
                  )}
                </div>
              </div>
            </div>
            {/* test */}

            {/* test */}
            {photosTabFocus === true &&
              categories.photo.map((obj) => (
                <div
                  onClick={() => {
                    folderImages(obj);
                  }}
                  className='flex h-[27px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef] cursor-pointer'
                >
                  <div className='my-[auto]'>
                    <img src={folder} alt='' />
                  </div>
                  <div className='flex w-[184px] justify-between'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-[12px] text-primaryGray font-medium leading-[1]'>
                        {obj.name}
                      </p>
                    </div>
                    <div>
                      <p className='text-[12px]'>10</p>
                    </div>
                  </div>
                </div>
              ))}

            {/* test */}

            {/* test */}
            {categoriesFocus === 'photos' && create === true ? (
              <div className='flex h-[27px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef] cursor-pointer'>
                <div className='my-[auto]'>
                  <img src={folder} alt='' />
                </div>
                <div className='flex w-[184px] justify-between'>
                  <div className='flex flex-col justify-center'>
                    <input
                      onChange={namee}
                      onKeyDown={handleKeyDown}
                      ref={inputRef}
                      placeholder='Enter folder name'
                      className='text-[12px] text-primaryGray font-medium leading-[1] outline-none'
                      type='text'
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            {/* test */}

            {/* test */}
            <div className='flex h-[38px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef]'>
              <div className='my-[auto]'>
                <img src={footageFiles} alt='' />
              </div>

              <div className='flex w-[184px] justify-between'>
                <div className='flex flex-col justify-center'>
                  <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                    Footage{' '}
                    <span className='text-primaryGray text-[11px] leading-[1]'>
                      (0 Sets)
                    </span>
                  </p>
                </div>
                <div>
                  <p className='text-[15px] font-medium'>+</p>
                </div>
              </div>
            </div>
            {/* test */}
            {/* test */}
            <div className='flex h-[38px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef]'>
              <div className='my-[auto]'>
                <img src={musicFiles} alt='' />
              </div>

              <div className='flex w-[184px] justify-between'>
                <div className='flex flex-col justify-center'>
                  <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                    Music{' '}
                    <span className='text-primaryGray text-[11px] leading-[1]'>
                      (0 Sets)
                    </span>
                  </p>
                </div>
                <div>
                  <p className='text-[15px] font-medium'>+</p>
                </div>
              </div>
            </div>
            {/* test */}
            {/* test */}
            <div className='flex h-[38px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef]'>
              <div className='my-[auto]'>
                <img src={templatesFiles} alt='' />
              </div>

              <div className='flex w-[184px] justify-between'>
                <div className='flex flex-col justify-center'>
                  <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                    Templates{' '}
                    <span className='text-primaryGray text-[11px] leading-[1]'>
                      (0 Sets)
                    </span>
                  </p>
                </div>
                <div>
                  <p className='text-[15px] font-medium'>+</p>
                </div>
              </div>
            </div>
            {/* test */}
            {/* test */}
            <div className='flex h-[38px] gap-[8px] bg-[#ffffff] py-[5px] border-b border-[#efefef]'>
              <div className='my-[auto]'>
                <img src={productFiles} alt='' />
              </div>

              <div className='flex w-[184px] justify-between'>
                <div className='flex flex-col justify-center'>
                  <p className='text-[15px] text-primaryBlack font-medium leading-[1]'>
                    Product{' '}
                    <span className='text-primaryGray text-[11px] leading-[1]'>
                      (0 Sets)
                    </span>
                  </p>
                </div>
                <div>
                  <p className='text-[15px] font-medium'>+</p>
                </div>
              </div>
            </div>
            {/* test */}
          </div>

          <div className='max-w-[1167px] w-[100%]'>
            {categoriesFocus === 'all' && (
              <div>
                <div className='flex flex-wrap gap-[16px]'>
                  {categoriesFocus === 'all' &&
                    currentData.map((image) => (
                      <AllFiles image={image} />
                    ))}
                </div>

                {/* test */}
                <div className='flex justify-center'>
                  <div className='flex flex-col justify-center'>
                    <div className='flex font-medium text-[13px] text-primaryGray mt-[30px] gap-[6px]'>
                      <p className='my-[auto]'>page</p>
                      <div className='flex items-center w-[88px] h-[30px]'>
                        <div
                          onClick={handlePrevPage}
                          disabled={currentPage === 1}
                          className='w-[29.33px] h-[30px] flex justify-center items-center border border-[#e8e8e8] bg-[#f7f7f7] rounded-l-[15px] cursor-pointer'
                        >
                          <img src={backArrow} alt='' />
                        </div>
                        <div className='w-[29.33px] h-[30px] flex justify-center items-center border-t border-b border-[#e8e8e8]'>
                          <span>{currentPage}</span>
                        </div>
                        <div
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                          className='w-[29.33px] h-[30px] flex justify-center items-center border border-[#e8e8e8] bg-[#f7f7f7] rounded-r-[15px] cursor-pointer'
                        >
                          <img src={nextArrow} alt='' />
                        </div>
                      </div>
                      <p className='my-[auto]'>
                        of {totalPages} &nbsp;
                      </p>
                    </div>
                    <div className='flex justify-center'>
                      <button className=' mt-[10px] blackBtn w-[88px]'>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                {/* test */}
              </div>
            )}

            {categoriesFocus === 'art' && (
              <div>
                <div className='flex flex-wrap gap-[16px]'>
                  {categoriesFocus === 'art' &&
                    categories.art.map((image) => (
                      <div className='flex flex-col w-[181px] text-center'>
                        <div
                          style={{
                            backgroundImage:
                              image.files != ''
                                ? `url(${image.files[0].image})`
                                : 'none',
                            backgroundColor:
                              image.image != ''
                                ? 'transparent'
                                : '#bbbaba',
                          }}
                          className='w-[181px] h-[181px] rounded-[16px] flex justify-center items-center bg-no-repeat bg-center bg-coverF'
                        >
                          <img src={imagesfolder} alt='' />
                        </div>

                        <img src={image.image} alt='' />
                        <p className='text-[11px] text-primaryBlack font-medium pt-[3px]'>
                          {image.name}
                        </p>
                        <p className='text-[11px] text-primaryGray'>
                          Image ID:{image.id}
                        </p>
                        <p className='text-[11px] text-primaryGray'>
                          Uploaded {image.uploaded}
                        </p>
                      </div>
                    ))}
                </div>
                {/* test */}
                <div className='flex justify-center'>
                  <div className='flex flex-col justify-center'>
                    <div className='flex font-medium text-[13px] text-primaryGray mt-[30px] gap-[6px]'>
                      <p className='my-[auto]'>page</p>
                      <div className='flex items-center w-[88px] h-[30px]'>
                        <div
                          onClick={handlePrevPage}
                          disabled={currentPage === 1}
                          className='w-[29.33px] h-[30px] flex justify-center items-center border border-[#e8e8e8] bg-[#f7f7f7] rounded-l-[15px] cursor-pointer'
                        >
                          <img src={backArrow} alt='' />
                        </div>
                        <div className='w-[29.33px] h-[30px] flex justify-center items-center border-t border-b border-[#e8e8e8]'>
                          <span>{currentPage}</span>
                        </div>
                        <div
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                          className='w-[29.33px] h-[30px] flex justify-center items-center border border-[#e8e8e8] bg-[#f7f7f7] rounded-r-[15px] cursor-pointer'
                        >
                          <img src={nextArrow} alt='' />
                        </div>
                      </div>
                      <p className='my-[auto]'>
                        of {totalPages} &nbsp;
                      </p>
                    </div>
                    <div className='flex justify-center'>
                      <button className='w-[88px] h-[40px] mt-[10px] bg-[#d6d6d6] rounded-[20px] text-[14px] font-medium text-[white] '>
                        Save
                      </button>
                      {/* <button className=' mt-[10px] blackBtn w-[88px]'>
                        Next
                      </button> */}
                    </div>
                  </div>
                </div>
                {/* test */}
                {/* {categoriesFocus === 'art' &&
                categories.art.length > 0 ? (
                  <div className='w-full flex justify-center pt-[10px]'>
                    <button className='w-[88px] h-[40px] bg-[#d6d6d6] rounded-[20px] text-[14px] font-medium text-[white] '>
                      Save
                    </button>
                  </div>
                ) : (
                  <div></div>
                )} */}
              </div>
            )}
            <div className='flex flex-wrap gap-[16px]'>
              {categoriesFocus === 'photos' &&
                categories.photo.map((image) => (
                  <div className='flex flex-col w-[181px] text-center'>
                    <div
                      style={{
                        backgroundImage:
                          image.files != ''
                            ? `url(${image.files[0].image})`
                            : 'none',
                        backgroundColor:
                          image.image != ''
                            ? 'transparent'
                            : '#bbbaba',
                      }}
                      className='w-[181px] h-[181px] rounded-[16px] flex justify-center items-center bg-no-repeat bg-center bg-coverF'
                    >
                      <img src={imagesfolder} alt='' />
                    </div>

                    <img src={image.image} alt='' />
                    <p className='text-[11px] text-primaryBlack font-medium pt-[3px]'>
                      {image.name}
                    </p>
                    <p className='text-[11px] text-primaryGray'>
                      Image ID:{image.id}
                    </p>
                    <p className='text-[11px] text-primaryGray'>
                      Uploaded {image.uploaded}
                    </p>
                  </div>
                ))}
            </div>
            {categoriesFocus === 'photos' &&
            categories.photo.length > 0 ? (
              <div className='w-full flex justify-center pt-[10px]'>
                <button className='w-[88px] h-[40px] bg-[#d6d6d6] rounded-[20px] text-[14px] font-medium text-[white] '>
                  Save
                </button>
              </div>
            ) : (
              <div></div>
            )}

            <div className='flex flex-wrap gap-[16px]'>
              {categoriesFocus === 'folderImages' &&
                imagesFolderArray.files.map((image) => (
                  <div className='flex flex-col text-center'>
                    <div
                      // onMouseEnter={() => setHovered(image.id)}
                      // onMouseLeave={() => setHovered(null)}
                      className='w-[181px] h-[181px] rounded-[16px] inset-0 relative'
                    >
                      <div
                        className={`h-[100%] w-[100%] bg-no-repeat bg-center bg-cover filter brightness-100 absolute rounded-[16px] overflow-hidden`}
                        style={{
                          backgroundImage: `url("${image.image}")`,
                        }}
                      ></div>

                      {/* 3buttons */}
                    </div>
                    <p className='text-[11px] text-primaryBlack font-medium pt-[3px]'>
                      {image.name}
                    </p>
                    <p className='text-[11px] text-primaryGray'>
                      Image ID:{image.id}
                    </p>
                    <p className='text-[11px] text-primaryGray'>
                      Uploaded {image.uploaded}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default FileManager;
