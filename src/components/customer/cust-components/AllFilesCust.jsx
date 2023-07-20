import { useState, useEffect } from 'react';
import infofile from '../../../assets/images/contributor/infofile.png';
import sharefile from '../../../assets/images/contributor/sharefile.png';
import deletefile from '../../../assets/images/contributor/deletefile.png';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAllFilesImages } from '../../../store/fileImageSlice';

const AllFilesCust = ({ image }) => {
  // hover
  const [hovered, setHovered] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const selectedAllFilesImages = useSelector(
    (state) => state.fileimages.selectedAllFilesImages
  );

  // useEffect(() => {
  //   console.log('Contri ', selectedAllFilesImages);
  // }, [selectedAllFilesImages]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      dispatch(
        setSelectedAllFilesImages([image])
        // setSelectedAllFilesImages([...selectedAllFilesImages, image])
      );
    } else {
      dispatch(
        setSelectedAllFilesImages(
          selectedAllFilesImages.filter(
            (img) => img.artId !== image.artId
          )
        )
      );
    }
  };

  useEffect(() => {
    dispatch(setSelectedAllFilesImages([]));
  }, []);

  return (
    <>
      <div className='flex flex-col text-center'>
        <div
          onMouseEnter={() => setHovered(image.artId)}
          onMouseLeave={() => setHovered(null)}
          className='w-[181px] h-[181px] rounded-[16px] inset-0 relative'
        >
          <div
            className={`h-[100%] w-[100%] bg-no-repeat bg-center bg-cover filter brightness-100 absolute rounded-[16px] overflow-hidden ${
              hovered === image.artId ? 'brightness-[70%]' : ''
            }`}
            style={{
              backgroundImage: `url("${image.image}")`,
            }}
          ></div>
          {selectedAllFilesImages.find(
            (img) => img.artId === image.artId
          ) || hovered ? (
            <div className='absolute inset-0 flex items-center justify-center'>
              <button className='w-[52px] h-[20px] bg-[#e8e8e8] text-[11px] opacity-[100%] cursor-pointer rounded-[10px] font-medium'>
                <span>Edit</span>
              </button>
            </div>
          ) : (
            <div></div>
          )}
          {selectedAllFilesImages.find(
            (img) => img.artId === image.artId
          ) || hovered ? (
            <div className='absolute top-0 right-0 p-2'>
              <input
                type='checkbox'
                className='w-6 h-6 opacity-[100%]'
                checked={
                  selectedAllFilesImages.length &&
                  selectedAllFilesImages[0].artId == image.artId
                }
                // checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
          ) : (
            <div></div>
          )}

          {/* 3buttons */}
          {selectedAllFilesImages.find(
            (img) => img.artId === image.artId
          ) || hovered ? (
            <div className='absolute bottom-0 left-0 p-2 flex items-center justify-center gap-[7px]'>
              <img src={infofile} alt='' />
              <img src={sharefile} alt='' />
              <img src={deletefile} alt='' />
            </div>
          ) : (
            <div></div>
          )}

          {/* 3buttons */}
        </div>
        <p className='text-[11px] text-primaryBlack font-medium pt-[3px]'>
          {image.name}
        </p>
        <p className='text-[11px] text-primaryGray'>
          Image ID: {image.artId.substring(0, 10)}
        </p>
        <p className='text-[11px] text-primaryGray'>
          {/* Uploaded: {image.submittedDate} */}
          Uploaded: {image.submittedDate?.substring(0, 10)}
        </p>
      </div>
    </>
  );
};

export default AllFilesCust;

// import { useState, useEffect } from 'react';
// import infofile from '../../../assets/images/contributor/infofile.png';
// import sharefile from '../../../assets/images/contributor/sharefile.png';
// import deletefile from '../../../assets/images/contributor/deletefile.png';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedAllFilesImagesCustomer } from '../../../store/fileImageSlice';
// import MoveTo from '../../../assets/images/contributor/moveto.png';
// import AddtoCart from '../../../assets/images/contributor/addtocart.png';

// const AllFilesCust = ({ image }) => {
//   // hover
//   const [hovered, setHovered] = useState(null);
//   const [isChecked, setIsChecked] = useState(false);

//   const dispatch = useDispatch();

//   const selectedAllFilesImagesCustomer = useSelector(
//     (state) => state.fileimages.selectedAllFilesImagesCustomer
//   );

//   // useEffect(() => {
//   //   console.log('Cust ', selectedAllFilesImagesCustomer);
//   // }, [selectedAllFilesImagesCustomer]);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);

//     if (!isChecked) {
//       dispatch(
//         setSelectedAllFilesImagesCustomer([image])
//         // setSelectedAllFilesImages([...selectedAllFilesImages, image])
//       );
//     } else {
//       dispatch(
//         setSelectedAllFilesImagesCustomer(
//           selectedAllFilesImagesCustomer.filter(
//             (img) => img.id !== image.id
//           )
//         )
//       );
//     }
//   };

//   useEffect(() => {
//     dispatch(setSelectedAllFilesImagesCustomer([]));
//   }, []);

//   return (
//     <>
//       <div className='flex flex-col text-center'>
//         <div
//           onMouseEnter={() => setHovered(image.id)}
//           onMouseLeave={() => setHovered(null)}
//           className='w-[181px] h-[181px] rounded-[16px] inset-0 relative'
//         >
//           <div
//             className={`h-[100%] w-[100%] bg-no-repeat bg-center bg-cover filter brightness-100 absolute rounded-[16px] overflow-hidden ${
//               hovered === image.id ? 'brightness-[70%]' : ''
//             }`}
//             style={{
//               backgroundImage: `url("${image.image}")`,
//             }}
//           ></div>
//           {hovered && (
//             <div className='absolute inset-0 flex items-center justify-center'>
//               <button className='w-[52px] h-[20px] bg-[#e8e8e8] text-[11px] opacity-[100%] cursor-pointer rounded-[10px] font-medium'>
//                 <span>Edit</span>
//               </button>
//             </div>
//           )}

//           {hovered && (
//             <div className='absolute top-0 right-0 p-2'>
//               <input
//                 type='checkbox'
//                 className='w-6 h-6 opacity-[100%]'
//                 checked={
//                   selectedAllFilesImagesCustomer.length &&
//                   selectedAllFilesImagesCustomer[0].id == image.id
//                 }
//                 // checked={isChecked}
//                 onChange={handleCheckboxChange}
//               />
//             </div>
//           )}

//           {/* 3buttons */}
//           {hovered && (
//             <div className='absolute bottom-0 left-0 p-2 flex items-center justify-center gap-[7px]'>
//               <img src={infofile} alt='' />
//               <img src={MoveTo} alt='' />
//               <img src={AddtoCart} alt='' />
//               <img src={sharefile} alt='' />
//               <img src={deletefile} alt='' />
//             </div>
//           )}

//           {/* 3buttons */}
//         </div>
//         <p className='text-[11px] text-primaryBlack font-medium pt-[3px]'>
//           {image.name}
//         </p>
//         <p className='text-[11px] text-primaryGray'>
//           Image ID:{image.id}
//         </p>
//         <p className='text-[11px] text-primaryGray'>
//           Uploaded {image.uploaded}
//         </p>
//       </div>
//     </>
//   );
// };

// export default AllFilesCust;
