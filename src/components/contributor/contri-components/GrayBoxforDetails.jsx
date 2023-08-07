import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedImages } from '../../../store/imageSlice';

const GrayBoxforDetails = ({
  card,
  isSelected,
  onCardSelect,
  selectedCard,
}) => {
  const [hovered, setHovered] = useState(false);

  const dispatch = useDispatch();

  // const backgroundImageStyle = useMemo(
  //   () => ({
  //     backgroundImage: `url(${URL.createObjectURL(card)})`,
  //   }),
  //   [card]
  // );

  useEffect(() => {
    dispatch(setSelectedImages([]));
  }, []);

  const selectedImages = useSelector(
    (state) => state.images.selectedImages
  );

  //   useEffect(() => {
  //     console.log(selectedImages);
  //   }, [selectedImages]);

  const handleButtonClick = () => {
    onCardSelect(card);
    if (!isSelected) {
      dispatch(setSelectedImages([card]));
    }
  };

  const handleCheckboxChange = () => {
    if (selectedCard === card) {
      onCardSelect(null);
    } else {
      onCardSelect(card);
    }
  };

  return (
    <div
      className='h-[108px] w-[108px] rounded-[10px] relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`rounded-[10px] h-full w-full bg-no-repeat bg-center bg-cover filter brightness-100 absolute overflow-hidden inset-0 ${
          hovered ? 'brightness-[70%]' : ''
        }`}
        style={{ backgroundImage: `url(${card.secureUrl})` }}
      ></div>
      {selectedImages.find((item) => item.imageId === card.imageId) ||
      hovered ? (
        <div className='absolute inset-0 flex items-center justify-center'>
          <button
            className='w-[52px] h-[20px] bg-[#e8e8e8] text-[11px] opacity-[100%] cursor-pointer rounded-[20px]'
            onClick={handleButtonClick}
          >
            Select
          </button>
        </div>
      ) : (
        <div></div>
      )}
      {selectedImages.find((item) => item.imageId === card.imageId) ||
      hovered ? (
        <div>
          {' '}
          {isSelected ? (
            <div className='absolute top-0 right-0 p-2'>
              <input
                type='checkbox'
                className='w-6 h-6'
                checked={true}
                onChange={handleCheckboxChange}
                readOnly
              />
            </div>
          ) : (
            <div className='absolute top-0 right-0 p-2'>
              <input
                type='checkbox'
                className='w-6 h-6'
                checked={false}
                onChange={handleCheckboxChange}
                readOnly
                disabled={!isSelected}
              />
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default GrayBoxforDetails;
