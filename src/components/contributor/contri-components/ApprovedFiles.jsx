import selectall from '../../../assets/images/contributor/selectall.png';
import deleteicon from '../../../assets/images/contributor/delete-icon.png';
import undo from '../../../assets/images/contributor/undo.png';
import redo from '../../../assets/images/contributor/redo.png';
import save from '../../../assets/images/contributor/save.png';
import keyword from '../../../assets/images/contributor/keyword.png';

import iconart from '../../../assets/images/contributor/icon-art.png';
import iconphotos from '../../../assets/images/contributor/icon-photos.png';
import iconfootage from '../../../assets/images/contributor/icon-footage.png';
import iconmusic from '../../../assets/images/contributor/icon-music.png';
import icontemplates from '../../../assets/images/contributor/icon-templates.png';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setpath2 } from '../../../store/contriPathSlice';
import { useSelector } from 'react-redux';
import { httpClient } from '../../../axios';
import mainLogo from '../../../assets/images/header/mainLogo.svg';

const ApprovedFiles = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [checkedId, setCheckedId] = useState(null);
  const [object, setObject] = useState(null); //Store ID temporary

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    dispatch(setpath2('/ Approved Files'));
    getForAprrovedList();
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const handleClick = (card) => {
    if (card.artId === checkedId) {
      setCheckedId(null);
      setObject(null);
    } else {
      setCheckedId(card.artId);
      setObject(card);
    }
  };

  const [image, setImage] = useState(null);

  const getForAprrovedList = async () => {
    const res = await httpClient.get(
      `/art_master/getUserIdAndStatusWiseUserMaster/${userId}/Approved`
    );
    // console.log(res.data);

    setImage(res.data);
  };

  const datePipeReact = (obj) => {
    // Input date string
    const dateString = obj;

    // Step 1: Parse the input string into a Date object
    const date = new Date(dateString);

    // Step 2: Extract the day, month, and year from the Date object
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    // Step 3: Format the date components into the desired format
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate; // Output: "08/06/2023"
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
          <div className='max-w-[197.09px] mt-[10px]'>
            <p className='text-[25px] font-medium'>Approved Files</p>
            <p className='text-[11px] text-primaryGray leading-[1.1]'>
              Refer a new customer to earn 30% of their first payment.
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
      {/* images to selct */}
      {image !== null ? (
        <div>
          <div className='w-[100%] flex justify-center pt-[12px] pb-[28px]'>
            <div className='w-w1170 justify-center flex-column gap-[10px]'>
              <div className='flex justify-start flex-wrap gap-[10px]'>
                {image.map((card, index) => (
                  <div
                    key={card.artId}
                    className='h-[108px] w-[108px] rounded-[10px] relative'
                    onMouseEnter={() => handleMouseEnter(card.artId)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    <div
                      className={` rounded-[10px] h-full w-full bg-no-repeat bg-center bg-cover filter brightness-[${
                        hoveredId === card.artId ? '70%' : '100%'
                      }] absolute overflow-hidden inset-0`}
                      style={{
                        backgroundImage: `url(${card.image})`,
                      }}
                    ></div>

                    {hoveredId === card.artId ||
                    checkedId === card.artId ? (
                      <>
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <button
                            onClick={() => handleClick(card)}
                            className='w-[52px] h-[20px] bg-[#e8e8e8] text-[11px] opacity-[100%] cursor-pointer rounded-[20px]'
                          >
                            Select
                          </button>
                        </div>

                        <div className='absolute top-0 right-0 p-2'>
                          <input
                            type='checkbox'
                            className='w-6 h-6'
                            checked={checkedId === card.artId}
                            onChange={() => handleClick(card)}
                          />
                        </div>
                      </>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='w-[100%] text-center '>
            <div
              className='relative flex flex-col justify-center w-w690 h-[485px] mx-[auto] bg-[#f7f7f7] rounded-[16px] h-full w-full bg-no-repeat bg-center bg-cover'
              style={{
                backgroundImage: `url(${object?.image})`,
              }}
            >
              {!object?.image && (
                <div>
                  <p className='text-pinkColor text-[18px] my-[auto]'>
                    Select thumbnail to view the image.
                  </p>
                  <p className='text-primaryGray text-[11px] my-[auto]'>
                    Select an item to view the image.{' '}
                    <span className='text-orangeColor text-[11px]'>
                      Learn more
                    </span>
                  </p>
                </div>
              )}
              <div className=' flex items-center h-[40px] bg-[white] absolute bottom-[0px] w-w690 rounded-b-[16px] border border-[#efefef] px-[13px]'>
                <img src={mainLogo} alt='' />
              </div>
            </div>
          </div>
          <div className='w-[100%]'>
            <div className='w-w690 mx-[auto]'>
              <div className='w-[570px]'>
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
                <div className='pt-[25px]'>
                  <p className='text-[11px] text-pinkColor'>
                    Your pending items will be reviewed within 5 days
                  </p>
                  <p className='text-sm11 text-primaryGray'>
                    You will be able to edit your content after it has
                    been approved
                  </p>
                </div>
                {/* table */}
                <table className='table mt-[20px] w-[570px] h-[197px] border-separate border-spacing-0'>
                  <tbody>
                    <tr>
                      <td className='border text-[13px] pl-[6px] pr-[75px] rounded-tl-[8px] border-[#dddddd] bg-[#f7f7f7] text-primaryBlack font-medium'>
                        Image Title
                      </td>
                      <td className='border-b border-t border-r text-[13px] rounded-tr-[8px] text-primaryGray border-[#dddddd] pl-[6px]'>
                        {object?.artName}
                      </td>
                    </tr>
                    <tr>
                      <td className='border-b border-r border-l text-[13px]  pl-[6px] border-[#dddddd] bg-[#f7f7f7] text-primaryBlack font-medium'>
                        Subject
                      </td>
                      <td className='border-b border-r text-[13px] text-primaryGray border-[#dddddd] pl-[6px]'>
                        {object?.subjectMaster?.subjectName}
                      </td>
                    </tr>
                    <tr>
                      <td className='border-b border-r border-l text-[13px]  pl-[6px] border-[#dddddd] bg-[#f7f7f7] text-primaryBlack font-medium'>
                        Style
                      </td>
                      <td className='border-b border-r text-[13px] pr-[197px] text-primaryGray border-[#dddddd] pl-[6px]'>
                        {object?.styleMaster?.name}
                      </td>
                    </tr>
                    <tr>
                      <td className='border-b border-r border-l text-[13px]  pl-[6px] border-[#dddddd] bg-[#f7f7f7] text-primaryBlack font-medium'>
                        Medium
                      </td>
                      <td className='border-b border-r text-[13px] text-primaryGray border-[#dddddd] pl-[6px]'>
                        {object?.artMedium}
                      </td>
                    </tr>
                    <tr>
                      <td className='border-b border-r border-l text-[13px]  pl-[6px] border-[#dddddd] bg-[#f7f7f7] text-primaryBlack font-medium'>
                        Usage
                      </td>
                      <td className='border-b border-r text-[13px] text-primaryGray border-[#dddddd] pl-[6px]'>
                        {/* Web Media, Print Media, Print on Products */}
                      </td>
                    </tr>
                    <tr>
                      <td className='border-b border-r border-l text-[13px]  pl-[6px] border-[#dddddd] bg-[#f7f7f7] text-primaryBlack font-medium'>
                        Type of Content
                      </td>
                      <td className='border-b border-r text-[13px] text-primaryGray border-[#dddddd] pl-[6px]'>
                        {object?.typeOfContent.map((obj) => (
                          <div>
                            <span>{obj}</span>{' '}
                          </div>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td className='border-b border-r border-l text-[13px]  pl-[6px] border-[#dddddd] bg-[#f7f7f7] text-primaryBlack font-medium'>
                        Date Submitted
                      </td>
                      <td className='border-b border-r text-[13px] text-primaryGray border-[#dddddd] pl-[6px]'>
                        {datePipeReact(object?.submittedDate)}
                      </td>
                    </tr>
                    <tr>
                      <td className='border-b border-r border-l text-[13px]  pl-[6px] border-[#dddddd] bg-[#f7f7f7] text-primaryBlack font-medium'>
                        Date Reviewed
                      </td>
                      <td className='border-b border-r text-[13px] text-primaryGray border-[#dddddd] pl-[6px]'>
                        {datePipeReact(object?.reviewData)}
                      </td>
                    </tr>
                    <tr>
                      <td className='border-r text-[13px] border-l border-b rounded-bl-[8px] pl-[6px] border-[#dddddd] bg-[#f7f7f7] text-primaryBlack font-medium'>
                        Date Approved
                      </td>
                      <td className='text-[13px] border-b border-r rounded-br-[8px] text-primaryGray border-[#dddddd] pl-[6px]'>
                        {datePipeReact(object?.approveDate)}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className='pt-[22px]'>
                  <p className='text-primaryBlack text-[15px] font-medium'>
                    Description
                  </p>
                  <p className='text-[13px] text-primaryGray mt-[3px]'>
                    {object?.description}
                  </p>
                </div>

                <div className='pt-[22px]'>
                  <p className='text-primaryBlack text-[15px] font-medium'>
                    Keywords Added
                  </p>
                  <div className='flex flex-wrap gap-[5px]'>
                    {
                      !object?.keywords.map((keyword) => (
                        <div className='text-[11px] text-primaryGray border border-[#dddddd] rounded-[13px] px-[8px] h-[26px]'>
                          {keyword} &nbsp;&nbsp;
                          <span className='text-[15px] text-primaryGray cursor-pointer'>
                            x
                          </span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className='text-center pt-[30px] pb-[30px]'>
                <button className='blackBtn'>
                  Delete Selected Button
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center pt-[8px]'>
          <p className='text-pinkColor text-[18px]'>
            You have no files pending for review
          </p>
          <p className='text-primaryGray text-[12px]'>
            Upload your latest work and keep earning.
          </p>
          <button className='blackBtn mt-[20px]'>Start Here</button>
        </div>
      )}
    </>
  );
};

export default ApprovedFiles;
