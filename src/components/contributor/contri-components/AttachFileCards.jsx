import React from 'react';
import { useMemo } from 'react';

const AttachFileCards = ({ card }) => {
  const backgroundImageStyle = useMemo(
    () => ({
      backgroundImage: `url(${URL.createObjectURL(card)})`,
    }),
    [card]
  );
  return (
    <>
      <div
        style={backgroundImageStyle}
        className='w-[65px] h-[65px] rounded-[10px] flex justify-center items-center bg-no-repeat bg-center bg-cover transform translate-z-0'
      ></div>
    </>
  );
};

export default AttachFileCards;
