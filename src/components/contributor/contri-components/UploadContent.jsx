import selectall from '../../../assets/images/contributor/selectall.png';
import deleteicon from '../../../assets/images/contributor/delete-icon.png';
import undo from '../../../assets/images/contributor/undo.png';
import redo from '../../../assets/images/contributor/redo.png';
import save from '../../../assets/images/contributor/save.png';
import keyword from '../../../assets/images/contributor/keyword.png';
import GrayBox from './GrayBox';
import addImage from '../../../assets/images/contributor/add.png';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNestedTabValueUpload } from '../../../store/nestedTabSlice';
import { setpath2 } from '../../../store/contriPathSlice';
import { setSelectedImages } from '../../../store/imageSlice';
import { httpClient } from '../../../axios';

const UploadContent = () => {
  const add = addImage;
  const dispatch = useDispatch();

  const selectedImages = useSelector(
    (state) => state.images.selectedImages
  );

  const userId = useSelector((state) => state.auth.userId);

  const [cards, setCards] = useState([]);
  const [button, setButton] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newCards = Array.from(files);
    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  // drag and drop
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    const newCards = Array.from(droppedFiles);
    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (cards.length > 0) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [cards]);

  useEffect(() => {
    dispatch(setpath2('/ Upload Content'));
  }, []);

  const next = async () => {
    const tempImag = [];

    try {
      const uploadPromises = cards.map(async (card) => {
        let formData = new FormData();
        formData.append('file', card);
        try {
          const res = await httpClient.post(
            '/CloudinaryImageUpload?parameter=true',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          console.log('file uploaded successfully');
          tempImag.push(res.data.imageId);
        } catch (err) {
          console.log(err);
        }
      });

      await Promise.all(uploadPromises);

      let obj = {
        imageId: tempImag,
        userMasterId: userId,
      };
      // console.log(obj);
      const res = await httpClient.post('/draft_master/create', obj);
      console.log(res.data);
      dispatch(setNestedTabValueUpload('2.2'));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='font-heebo'>
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
          <div className='max-w-[179.09px] mt-[20px]'>
            <p className='text-[25px] font-medium'>Upload Content</p>
            <p className='text-[11px] text-primaryGray leading-[1.1]'>
              Refer a new customer to earn 50% of their first payment.
              <span className='text-orangeColor'> Learn more</span>
            </p>
          </div>
          <div className='flex gap-[20px] mt-[27px]'>
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
      <div className='w-[100%] flex justify-center mt-[20px]'>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='w-w1170 justify-center flex-column border-[2px] border-[#efefef] rounded-[30px] gap-[10px] py-[20px]'
        >
          <div className='w-[100%] flex justify-center'>
            <p className='text-pinkColor text-[18px]'>
              Drag and Drop your files here
            </p>
          </div>
          <div className='w-[100%] flex justify-center mt-[5px]'>
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
              className='text-[#333333] border-[#333333] border-[2px] rounded-[20px] text-[11px] px-[13px] py-[5px] font-medium'
            >
              Select Multiple Files
            </button>
          </div>
          <div className='w-[100%] flex justify-center mt-[5px]'>
            <p className='text-primaryGray text-[11px]'>
              (Maximum15 Images in single upload)
            </p>
          </div>

          <div className='flex justify-start flex-wrap gap-[16.68px] px-[16.68px] py-[20px]'>
            {cards.map((card, index) => (
              <GrayBox key={index} card={card} />
            ))}

            <div
              onClick={handleButtonClick}
              className={
                'h-[127px] w-[126.99px] bg-[#f7f7f7] rounded-[16px] cursor-pointer'
              }
            >
              <div className='w-[100%]'>
                <img className='m-[auto] mt-[45px]' src={add} />
              </div>
            </div>
          </div>
          <div className='w-[100%] px-[16.68px]'>
            <hr className='border-[#efefef] ' />
          </div>
          <div className='flex gap-[16px] pl-[15px] py-[20px]'>
            <div className='flex-column'>
              <p className='text-[#333333] text-[15px] '>Art</p>
              <p className='uploadPageData'>Horizontal Image Size:</p>
              <p className='uploadPageData'>Vertical Image Size:</p>
              <p className='uploadPageData'>Square Image Size:</p>
              <p className='uploadPageData'>Image Resolution:</p>
              <p className='uploadPageData'>Colour Space:</p>
              <p className='uploadPageData'>Colour Profile:</p>
              <p className='uploadPageData'>Colour Profile:</p>
              <p className='uploadPageData'>File Size Limit:</p>
            </div>
            <div>
              <p className='invisible'>Art</p>
              <p className='uploadPageData'>
                47 (Fixed) x 33 (Between 25 - 33) In
              </p>
              <p className='uploadPageData'>
                33 (Between 25 - 33) x 47 (Fixed) In
              </p>
              <p className='uploadPageData'>
                47 x 47 In (Fixed Height & Width)
              </p>
              <p className='uploadPageData'>300 DPI</p>
              <p className='uploadPageData'>RGB</p>
              <p className='uploadPageData'>sRGB IEC61966-2.1</p>
              <p className='uploadPageData'>
                JPEG (Quality: Maximum)
              </p>
              <p className='uploadPageData'>
                JPEG (Quality: Maximum)
              </p>
            </div>
            <div>
              <p className='text-[#333333] text-[15px] '>Vectors</p>
              <p className='uploadPageData'>Colour Space:</p>
              <p className='uploadPageData'>Colour Profile:</p>
              <p className='uploadPageData'>File Format:</p>
              <p className='uploadPageData'>File Size Limit</p>
            </div>
            <div>
              <p className='invisible'>Art</p>
              <p className='uploadPageData'>RGB</p>
              <p className='uploadPageData'>sRGB IEC61966-2.1</p>
              <p className='uploadPageData'>
                EPS (AI 8 or 10 Compatible)
              </p>
              <p className='uploadPageData'>Maximum 50 MB</p>
            </div>
            <div>
              <p className='text-[#333333] text-[15px] '>Photos</p>
              <p className='uploadPageData'>Horizontal Image Size:</p>
              <p className='uploadPageData'>Vertical Image Size:</p>
              <p className='uploadPageData'>Square Image Size:</p>
              <p className='uploadPageData'>Image Resolution:</p>
              <p className='uploadPageData'>Colour Space:</p>
              <p className='uploadPageData'>Colour Profile:</p>
              <p className='uploadPageData'>Colour Profile:</p>
              <p className='uploadPageData'>File Size Limit:</p>
            </div>
            <div>
              <p className='invisible'>Art</p>
              <p className='uploadPageData'>
                36 (Fixed) x 24 (Between 16 - 24) In
              </p>
              <p className='uploadPageData'>
                24 (Between 16 - 24) x 36 (Fixed) In
              </p>
              <p className='uploadPageData'>
                36 x 36 In (Fixed Height & Width)
              </p>
              <p className='uploadPageData'>300 DPI</p>
              <p className='uploadPageData'>RGB</p>
              <p className='uploadPageData'>sRGB IEC61966-2.1</p>
              <p className='uploadPageData'>
                JPEG (Quality: Maximum)
              </p>
              <p className='uploadPageData'>Maximum 50 MB</p>
            </div>
            <div>
              <p className='text-[#333333] text-[15px]'>Footage</p>
              <p className='uploadPageData'>Clip Duration:</p>
              <p className='uploadPageData'>Frames-Per-Second:</p>
              <p className='uploadPageData invisible'>
                Square Image Size:
              </p>
              <p className='uploadPageData'>Resolution:</p>
              <p className='uploadPageData invisible'>
                Colour Space:
              </p>
              <p className='uploadPageData'>File Format:</p>
              <p className='uploadPageData'>File Size Limit:</p>
            </div>
            <div>
              <p className='invisible'>Art</p>
              <p className='uploadPageData'>5 -60 Seconds</p>
              <p className='uploadPageData'>
                23.98, 24, 25, 29.97, 30,
              </p>
              <p className='uploadPageData'>
                47.95, 47.96, 48, 50, 59.94, 60
              </p>
              <p className='uploadPageData'>4K (4096 x 2160) and</p>
              <p className='uploadPageData'>HD (1920 x 1080) </p>
              <p className='uploadPageData'>
                ASF, AVI, DV, FLV, MOV,
              </p>
              <p className='uploadPageData'>MPEG/MPG, WMV</p>
              <p className='uploadPageData'>Maximum 250 MB</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] text-center pt-[30px]'>
        {button == true ? (
          <button
            onClick={next}
            className=' bg-primaryBlack text-[white] h-[40px] w-[88px] rounded-[30px] text-[14px]'
          >
            Next
          </button>
        ) : (
          <button className='bg-[#d6d6d6] text-[white] h-[40px] w-[88px] rounded-[30px] text-[14px]'>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadContent;
