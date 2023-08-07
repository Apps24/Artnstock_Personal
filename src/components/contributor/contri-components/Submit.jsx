import selectall from '../../../assets/images/contributor/selectall.png';
import deleteicon from '../../../assets/images/contributor/delete-icon.png';
import undo from '../../../assets/images/contributor/undo.png';
import redo from '../../../assets/images/contributor/redo.png';
import save from '../../../assets/images/contributor/save.png';
import keyword from '../../../assets/images/contributor/keyword.png';
// import GrayBox from './GrayBox';
import GrayBoxForSubmit from './GrayBoxForSubmit';
import { useState, useEffect } from 'react';
import { setSelectedImages } from '../../../store/imageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setNestedTabValueUpload } from '../../../store/nestedTabSlice';
import { setpath2 } from '../../../store/contriPathSlice';
import { httpClient } from '../../../axios';

const Submit = () => {
  const selectedImages = useSelector(
    (state) => state.images.selectedImages
  );

  const [images, setImages] = useState([]);
  const [button, setButton] = useState(false);

  const userId = useSelector((state) => state.auth.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setpath2('/ To Submit'));
  }, []);

  useEffect(() => {
    if (selectedImages.length > 0) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [selectedImages]);

  const addDetails = () => {
    dispatch(setNestedTabValueUpload('2.3'));
  };

  const getDraftSubmit = async () => {
    try {
      const res = await httpClient.get(
        `/draft_master/getContributorWiseDraftMasterList/${userId}`
      );
      console.log(res.data[0].imageMaster);
      setImages(res.data[0].imageMaster);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // setImages(selectedImages);
    // dispatch(setSelectedImages([]));
    getDraftSubmit();
  }, []);

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
            <p className='text-[25px] font-medium'>To Submit</p>
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
      <div className='w-[100%] flex justify-center mt-[20px]'>
        <div className='w-w1170 justify-center flex-column gap-[10px]'>
          <div className='flex justify-start flex-wrap gap-[16px]'>
            {/* dynamic gray box */}
            {images?.map((card, index) => (
              <GrayBoxForSubmit key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
      <div className='w-[100%] text-center pt-[30px]'>
        {button == true ? (
          <button
            className='bg-primaryBlack text-[white] h-[40px] w-[88px] rounded-[30px] text-[14px]'
            onClick={addDetails}
          >
            Add Details
          </button>
        ) : (
          <button className='bg-[#d6d6d6] text-[white] h-[40px] w-[88px] rounded-[30px] text-[14px]'>
            Add Details
          </button>
        )}
        {/* hdcvbhvdc */}
      </div>
    </>
  );
};

export default Submit;
