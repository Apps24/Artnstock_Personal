import view from '../../../assets/images/contributor/view.png';
import edit from '../../../assets/images/contributor/edit.png';
import deletee from '../../../assets/images/contributor/delete.png';
import dropdown from '../../../assets/images/socials/dropdown.png';
import addsmall from '../../../assets/images/contributor/addsmall.png';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setpath2 } from '../../../store/contriPathSlice';
import { useSelector } from 'react-redux';
import { httpClient } from '../../../axios';
import { Cloudinary } from '@cloudinary/url-gen';
// import cloudinary from 'cloudinary';

// cloudinary.config({
//   cloud_name: 'artnstockimg',
//   api_key: '632591959119914',
//   api_secret: 'jp4n7VfrNS_cBjwuV0AUiAFZdQ4',
// });

const UploadRelease = () => {
  const [cards, setCards] = useState([]);
  const [images, setImages] = useState([]);

  // https://api.cloudinary.com/v1_1/demo/image/upload

  const userId = useSelector((state) => state.auth.userId);

  // release form
  const [data, setData] = useState({
    release: [],
    attachContent: [],
    description: '',
    nameOfPerson: '',
    type: '',
    userId: userId,
  });

  // dropdown
  const [isPleaseSelectOpen, setIsPleaseSelectOpen] = useState();

  const dispatch = useDispatch();

  const fileInputRef = useRef(null);
  const fileInputRefAttach = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files);
    // setCards((prevCards) => [...prevCards, ...newImages]);

    // upload images
    newImages.forEach((cards) => {
      let formData = new FormData();
      formData.append('file', cards);
      formData.append('upload_preset', 'lf9qn8qc');
      formData.append('cloud_name', 'artnstockimg');

      httpClient
        .post(
          'https://api.cloudinary.com/v1_1/artnstockimg/image/upload',
          formData
        )
        .then((res) => {
          console.log('file uploaded successfully');
          // console.log(res.data.url);
          const dataa = res.data;
          setCards((prevCards) => [...prevCards, { dataa, cards }]);
        })
        .catch((err) => {
          console.log(err);
        });
      // httpClient
      //   .post('/bucket/push', formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   })
      //   .then((res) => {
      //     console.log('file uploaded successfully');
      //     // console.log(res);
      //     const dataa = res.data;
      //     setCards((prevCards) => [...prevCards, { dataa, cards }]);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    });
    // upload images
  };

  const handleFileChangeAttach = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files);
    setImages((prevImages) => [...prevImages, ...newImages]);

    // upload images
    newImages.forEach((cards) => {
      let formData = new FormData();
      formData.append('file', cards);
      httpClient
        .post('/bucket/push', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log('file uploaded successfully');
          // console.log(res);
          const dataa = res.data;
          setData((prevImages) => ({
            ...prevImages,
            attachContent: [...prevImages.attachContent, dataa],
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    });
    // upload images
  };

  const handleCheckboxChange = (obj) => {
    const array = data.release.find((item) => item === obj.dataa);
    if (!array) {
      setData((prevImages) => ({
        ...prevImages,
        release: [...prevImages.release, obj.dataa],
      }));
    } else {
      setData((prevImages) => ({
        ...prevImages,
        release: prevImages.release.filter(
          (item) => item !== obj.dataa
        ),
      }));
    }
  };

  // POST API OF RELEASE

  const postRelease = async () => {
    try {
      const res = await httpClient.post(
        '/release_master/createReleaseMaster',
        data
      );
      // console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleButtonClickAttach = () => {
    fileInputRefAttach.current.click();
  };

  const type = (str) => {
    setData((prevImages) => ({
      ...prevImages,
      type: str,
    }));
  };

  const name = (str) => {
    setData((prevImages) => ({
      ...prevImages,
      nameOfPerson: str,
    }));
  };

  const description = (str) => {
    setData((prevImages) => ({
      ...prevImages,
      description: str,
    }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    dispatch(setpath2('/ Upload Release'));
  }, []);

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  return (
    <div>
      <div className='flex justify-center'>
        <div className='flex justify-center border-t-[0.063rem] border-[#efefef] border-b-[0.063rem]'>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <p className='text-[3.000rem] text-[#cfcfcf] relative bottom-[0.688rem] font-thin'>
              33
            </p>
            <p className='text-[0.688rem] text-[#cfcfcf] pt-[0.375rem] max-w-[70px] leading-3'>
              Releases Uploaded on ArtnStock
            </p>
          </div>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <div className='h-[2.375rem] border-l-[0.063rem] relative top-[0.313rem] border-[#efefef]'>
              <p className='text-[3.000rem] text-[#cfcfcf]  pl-[0.438rem] max-h-[100%] relative bottom-[0.938rem] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[0.688rem] text-[#cfcfcf] max-w-[65px] pt-[0.375rem] leading-3'>
                Property releases uploaded
              </p>
            </div>
          </div>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <div className='h-[2.375rem] border-l-[0.063rem] relative top-[0.313rem] border-[#efefef]'>
              <p className='text-[3.000rem] text-[#cfcfcf]  pl-[0.438rem] relative bottom-[0.938rem] font-thin'>
                00
              </p>
            </div>
            <div>
              <p className='text-[0.688rem] text-[#cfcfcf] max-w-[65px] pt-[0.375rem] leading-3'>
                Model releases uploaded
              </p>
            </div>
          </div>
          <div className='flex gap-[0.125rem] h-[2.938rem]'>
            <div className='h-[2.375rem] border-l-[0.063rem] relative top-[0.313rem] border-[#efefef]'>
              <p className='text-[3.000rem] text-[#cfcfcf] pl-[0.438rem] relative bottom-[0.938rem] font-thin'>
                0
              </p>
            </div>
            <div>
              <p className='text-[0.688rem] text-[#cfcfcf] max-w-[65px] pt-[0.375rem] leading-3'>
                Minor releases uploaded
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] flex justify-center pt-[15px]'>
        <div className='w-[73.125rem] flex justify-between'>
          <div className='max-w-[12.46rem] mt-[0.625rem]'>
            <p className='text-[1.563rem] font-medium'>
              Upload Release{' '}
            </p>
            <p className='text-[0.688rem] text-primaryGray leading-[1.1]'>
              Refer a new customer to earn 30% of their first payment
              <span className='text-orangeColor'> Learn more</span>
            </p>
          </div>

          {/* <div className='w-[20.625rem] leading-[1] mt-[1.063rem] flex gap-[1.250rem]'> */}
          <div className='mt-[1.063rem]'>
            <button className='greenBlueButton w-[12.313rem] h-[1.875rem] text-[0.813rem] font-medium px-[0.313rem]'>
              Download New Release Form
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className='w-full pt-[1.375rem]'>
        <div className='flex flex-col gap-[1.875rem] w-[100%] max-w-[43.125rem] mx-[auto] text-primaryGray'>
          <div className='flex flex-col gap-[0.438rem]'>
            <p className='text-primaryBlack text-[0.938rem] font-medium'>
              Select File From Computer
            </p>
            <p className='text-[0.750rem]'>
              Photos that contain model(s) and photographed at
              locations that require special permission will require
              both Model Release and Property Release to be attached.
            </p>
            <div>
              <input
                type='file'
                multiple
                onChange={handleFileChange}
                accept='image/*'
                style={{ display: 'none' }}
                ref={fileInputRef}
              />
              <button
                onClick={handleButtonClick}
                className='w-[6.625rem] h-[1.750rem] bg-[#8e8e8e] text-[#ffffff] rounded-[0.875rem] text-[0.750rem] font-medium'
              >
                Attach Release
              </button>
              <p className='text-[0.688rem] mt-[0.188rem]'>
                JPEG or PDF file only. Max 4MB.
              </p>
            </div>
            {cards.length > 0 && (
              <div className='text-[0.750rem] border border-[#d6d6d6] rounded-[0.625rem]'>
                {cards.map((obj, index) => (
                  <p
                    key={index}
                    className={`${
                      index !== cards.length - 1
                        ? 'border-b border-[#d6d6d6]'
                        : ''
                    } flex justify-between p-[0.250rem] px-[0.500rem]`}
                  >
                    <div className='flex gap-[0.500rem]'>
                      <input
                        type='checkbox'
                        onChange={() => handleCheckboxChange(obj)}
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
          <div className='flex flex-col gap-[0.438rem]'>
            <p className='text-primaryBlack text-[0.938rem] font-medium'>
              Type of Release{' '}
            </p>
            <div>
              <p className='text-[0.750rem]'>
                Select Type of Release
              </p>

              {/* test */}
              <div>
                <button
                  onClick={() => {
                    setIsPleaseSelectOpen(!isPleaseSelectOpen);
                  }}
                  className='px-4 cursor-pointer bg-[#E6E6E6] w-[100%] max-w-[20.625rem] h-[2.500rem] bg-[#FFFFFF] rounded-[1.250rem] border border-[#d6d6d6] flex items-center justify-between'
                >
                  {data.type === '' ? (
                    <span className='text-[#bbbbbb]'>
                      Please Select
                    </span>
                  ) : (
                    <span className='text-primaryGray'>
                      {data.type}
                    </span>
                  )}

                  <img
                    className='inline-block'
                    src={dropdown}
                    alt=''
                  />
                </button>
                {isPleaseSelectOpen && (
                  <ul className='shadow-dropShadow rounded-2xl hover:overflow-hidden dropdown__menu absolute z-50 bg-[#ffffff] w-[20.625rem] text-center text-[14px] text-primaryGray'>
                    <li
                      onClick={() => {
                        type('property');
                      }}
                      className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'
                    >
                      property
                    </li>
                    <li
                      onClick={() => {
                        type('model');
                      }}
                      className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'
                    >
                      model
                    </li>
                    <li
                      onClick={() => {
                        type('minor');
                      }}
                      className='cursor-pointer hover:bg-[#F0F0F0] border-b border-[#EFEFEF] py-[5px]'
                    >
                      minor
                    </li>
                  </ul>
                )}
              </div>
              {/* test */}
            </div>
          </div>

          <div className='flex flex-col gap-[0.438rem]'>
            <p className='text-primaryBlack text-[0.938rem] font-medium'>
              Release Details{' '}
            </p>
            <div>
              <p className='text-[0.750rem]'>Name of the Person</p>
              <input
                type='text'
                className='w-[100%] max-w-[20.625rem] h-[2.500rem] border border-[#d6d6d6] rounded-[1.250rem] px-[0.438rem]'
                onChange={(e) => {
                  name(e.target.value);
                }}
              />
            </div>
            <div>
              <p className='text-[0.750rem]'>Description</p>
              <textarea
                onChange={(e) => {
                  description(e.target.value);
                }}
                name='description'
                type='text'
                className='border border-[#d6d6d6] h-[6.625rem] w-[100%] max-w-[43.125rem] rounded-[1.000rem] pb-[4.375rem] pl-[0.625rem]'
                // value={description}
                // onChange={handleDescriptionChange}
              />
              <p className='text-[0.688rem] text-primaryGray text-end leading-[1]'>
                0/150 characters
              </p>
              {/* {charCountt} */}
            </div>
          </div>

          <div>
            <p className='text-primaryBlack text-[0.938rem] font-medium'>
              Attach Content
            </p>
            <div className='flex flex-wrap gap-[0.625rem] border rounded-[0.813rem] pt-[0.500rem] pb-[0.500rem] pl-[0.500rem] border-[#efefef]'>
              <input
                type='file'
                multiple
                onChange={handleFileChangeAttach}
                accept='image/*'
                style={{ display: 'none' }}
                ref={fileInputRefAttach}
              />
              {images.map((card) => (
                <div
                  style={{
                    backgroundImage: `url(${URL.createObjectURL(
                      card
                    )})`,
                  }}
                  className='w-[4.063rem] h-[4.063rem] rounded-[0.625rem] flex justify-center items-center bg-cover bg-no-repeat'
                ></div>
              ))}
              <div
                onClick={handleButtonClickAttach}
                className='w-[4.063rem] h-[4.063rem] bg-[#f7f7f7] rounded-[0.625rem] flex justify-center items-center'
              >
                <img
                  className='h-[1.563rem] w-[1.563rem]'
                  src={addsmall}
                />
              </div>
            </div>
            <p className='text-[0.688rem]'>
              Select thumbnails to Remove
            </p>
          </div>
          <div className='flex flex-col gap-[1.063rem]'>
            <p className='text-center text-[0.750rem] px-[0.313rem]'>
              I upload this file on artnstock.com. I acknowledge and
              warrant that I have read and agree with the Royalty-Free
              Terms and Conditions. Lorem Ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
            <div className='flex justify-center items-center gap-[0.375rem]'>
              <input type='checkbox' />
              <span className='text-[0.750rem]'>
                I agree to the Terms of Service
              </span>
            </div>
            <div className='flex gap-[0.938rem] justify-center pb-[12.875rem]'>
              <button
                onClick={postRelease}
                className='blackBtn h-[2.500rem]'
              >
                Upload Release
              </button>
              <button className='h-[2.500rem] px-6 py-2 rounded-3xl text-sm14 text-primaryBlack border-[0.125rem]'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadRelease;
