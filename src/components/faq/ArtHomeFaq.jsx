import { useState, useEffect } from 'react';

const ArtHomeFaq = ({ type }) => {
  const [show, setShow] = useState([]);

  const showw = (id) => {
    const find = show.find((obj) => obj.id === id.id);
    // console.log(find);
    if (find === undefined) {
      setShow((prev) => [...prev, id]);
    } else if (find !== undefined) {
      setShow(show.filter((obj) => obj.id !== id.id));
    }
  };

  return (
    <div className='w-w1409 mx-auto pb-[100px]'>
      <p className='text-heading text-primaryBlack text-center mb-6'>
        Frequently Asked Questions
      </p>
      <div className='flex flex-col'>
        <ul>
          {type.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                showw({ id: item.faqId });
              }}
              className={`text-primaryBlack text-sm14 leading-[49px] border-t border-[#EFEFEF] cursor-pointer ${
                index === type.length - 1 ? 'border-b' : ''
              }`}
            >
              {item.question}
              {show.find((obj) => obj.id === item.faqId) && (
                <p> {item.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtHomeFaq;
