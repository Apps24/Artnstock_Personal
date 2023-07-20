import { useState, useMemo, useEffect } from 'react';
import { setSelectedImages } from '../../../store/imageSlice';
import { useDispatch, useSelector } from 'react-redux';

const GrayBoxForSubmit = ({ card, style }) => {
  const [hovered, setHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const selectedImages = useSelector(
    (state) => state.images.selectedImages
  );

  // useEffect(() => {
  //   console.log(selectedImages);
  // }, [selectedImages]);

  // const backgroundImageStyle = useMemo(
  //   () => ({
  //     backgroundImage: `url(${URL.createObjectURL(card)})`,
  //   }),
  //   [card]
  // );

  const handleButtonClick = () => {
    setIsChecked(!isChecked);
    const findImage = selectedImages.find((item) => item === card);

    if (!isChecked && !findImage) {
      dispatch(setSelectedImages([...selectedImages, card]));
    } else {
      dispatch(
        setSelectedImages(
          selectedImages.filter((image) => image !== card)
        )
      );
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // const findImage = selectedImages.find((item) => item === card);
    if (!isChecked) {
      dispatch(setSelectedImages([...selectedImages, card]));
    } else {
      dispatch(
        setSelectedImages(
          selectedImages.filter((image) => image !== card)
        )
      );
    }
  };

  return (
    <div
      className={`box-border h-[132px] w-[132px] rounded-[16px] relative`}
      // h-[127px] w-[126.99px]
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      <div
        className={`h-full w-full bg-no-repeat bg-center bg-cover filter rounded-[16px] brightness-100 absolute overflow-hidden inset-0 ${
          hovered ? 'brightness-[70%]' : ''
        }`}
        style={{
          backgroundImage: `url(${card})`,
        }}
      ></div>
      {selectedImages.find((item) => item === card) || hovered ? (
        <div className='absolute inset-0 flex items-center justify-center'>
          <button
            className='w-[52px] h-[20px] bg-[#e8e8e8] text-[11px] opacity-[100%] cursor-pointer rounded-[10px]'
            onClick={handleButtonClick}
          >
            Select
          </button>
        </div>
      ) : (
        <div></div>
      )}
      {selectedImages.find((item) => item === card) || hovered ? (
        <div className='absolute top-0 right-0 p-2'>
          <input
            type='checkbox'
            className='w-6 h-6'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default GrayBoxForSubmit;
