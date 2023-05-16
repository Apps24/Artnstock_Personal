import React from 'react';
import history1 from '../../../assets/images/my-plans/history1.png';
import history2 from '../../../assets/images/my-plans/history2.png';
import history3 from '../../../assets/images/my-plans/history3.png';
import history4 from '../../../assets/images/my-plans/history4.png';
import history5 from '../../../assets/images/my-plans/history5.png';
import history6 from '../../../assets/images/my-plans/history6.png';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

const history = [
  {
    img: `${history1}`,
    id: '987654321',
    description: 'RF Standard License',
    download: '3 January, 2021',
  },
  {
    img: `${history2}`,
    id: '987654321',
    description: 'RF Standard License',
    download: '3 January, 2021',
  },
  {
    img: `${history3}`,
    id: '987654321',
    description: 'RF Standard License',
    download: '3 January, 2021',
  },
  {
    img: `${history4}`,
    id: '987654321',
    description: 'RF Standard License',
    download: '3 January, 2021',
  },
  {
    img: `${history5}`,
    id: '987654321',
    description: 'RF Standard License',
    download: '3 January, 2021',
  },
  {
    img: `${history6}`,
    id: '987654321',
    description: 'RF Standard License',
    download: '3 January, 2021',
  },
];

const BuyersPlan = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <div className='wrapper flex justify-center'>
        <div>
          <div className='w-w1170 mb-9 mx-auto'>
            <table className='border-spacing-0 border-separate py-2 px-1'>
              <tr>
                <th
                  rowSpan={2}
                  style={{ fontSize: '15px' }}
                  className='text-[#333333] border border-[#DDDDDD] w-[475px] rounded-tl-[10px]'
                >
                  Your Subscription Plan
                </th>
                <th
                  rowSpan={2}
                  style={{ fontSize: '15px' }}
                  className='text-[#333333] border-t border-r border-[#DDDDDD] border-b w-[137px]'
                >
                  License <br /> Purchased Date
                </th>
                <th
                  colspan={2}
                  style={{ fontSize: '15px' }}
                  className='text-[#333333] border-t border-r border-b border-[#DDDDDD] w-[230px] py-1'
                >
                  Total Downloads Available
                </th>
                <th
                  rowSpan={2}
                  style={{ fontSize: '15px' }}
                  className='text-[#333333] border-t border-r border-b border-[#DDDDDD] w-[115px]'
                >
                  No. of Images <br /> Downloaded
                </th>
                <th
                  rowSpan={2}
                  style={{ fontSize: '15px' }}
                  className='text-[#333333] border-t border-r border-b border-[#DDDDDD] w-[115px]'
                >
                  Downloads <br /> Remaining
                </th>
                <th
                  rowSpan={2}
                  style={{ fontSize: '15px' }}
                  className='text-[#333333] border-t border-r border-b border-[#DDDDDD]  w-[115px] rounded-tr-[10px]'
                >
                  Plan <br /> Expiry Date
                </th>
              </tr>
              <tr>
                <th className='border-r border-b text-[#333333] border-[#DDDDDD] text-[12px] py-1'>
                  Per Year
                </th>
                <th className='border-r border-b text-[#333333] border-[#DDDDDD] text-[12px] py-1'>
                  Per Month
                </th>
              </tr>
              <tr className='text-center'>
                <td className=' text-[11px] text-[$757575] text-start border-l border-r border-[#DDDDDD] border-b rounded-bl-[10px]'>
                  <div className='text-[15px] font-medium'>
                    <p className='px-2 pt-2 text-[#333333]'>
                      Single user Annual Subscription Plan
                    </p>
                  </div>
                  <div className='px-2 '>
                    <ul className='text-[12px] text-[#757575]'>
                      <li>RF Standard License</li>
                      <li>84 Images (US$ 2.49/Image)</li>
                      <li>Annual Billed Upfront</li>
                      <li>Annual Commitment</li>
                    </ul>
                  </div>
                  <p className='text-[15px] font-medium'>
                    <p className='px-2 pt-4 text-[#333333]'>Usage</p>
                  </p>
                  <ul
                    className='text-[12px] px-4 pb-2 text-[#757575]'
                    style={{ listStyle: 'disc' }}
                  >
                    <li>Up to 500K physical reproduction.</li>
                    <li>
                      Up to US$ 10,000 production budgets for TV,
                      online video, and film viewers.
                    </li>
                    <li>Unlimited web distribution.</li>
                    <li>
                      Legal indemnification up to US$ 10,000 per
                      image.
                    </li>
                  </ul>
                </td>
                <td className='border-b border-r border-[#DDDDDD] text-[13px] font-medium  text-[#333333]'>
                  <p className='pb-[150px]'>1 Jan, 2021</p>
                </td>
                <td className='border-b border-r border-[#DDDDDD] text-[13px]  font-medium text-[#333333]'>
                  <p className='pb-[90px]'>
                    84 images <br />
                    <span className='text-[#757575] text-[11px]'>
                      With Royalty-Free Standard License Download
                    </span>
                  </p>
                </td>
                <td className='border-b border-r border-[#DDDDDD] text-[13px] text-[#333333]  font-medium'>
                  <p className='pb-[90px]'>
                    7 images <br />
                    <span className='text-[#757575] text-[11px]'>
                      With Royalty-Free Standard License Download
                    </span>
                  </p>
                </td>
                <td className='border-b border-r border-[#DDDDDD] text-[13px] text-[#333333]  font-medium'>
                  <p className='pb-[150px]'>10 images</p>
                </td>
                <td className='border-b border-r border-[#DDDDDD] text-[13px] text-[#333333]  font-medium'>
                  <p className='pb-[130px]'>
                    70 images <br />{' '}
                    <span className='text-[#757575]'>(Today)</span>
                  </p>
                </td>
                <td className='border-b border-r border-[#DDDDDD] text-[13px] text-[#333333] rounded-br-[10px] font-medium '>
                  <p className='pb-[150px]'>31 Dec, 2021</p>
                </td>
              </tr>
            </table>
            <p className='mt-5 flex gap-[7px]'>
              <span className='text-[13px] font-medium'>
                Auto Renewal{' '}
              </span>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex bg-[#8e8e8e] text-[#8e8e8e] h-[20px] w-[30px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className='sr-only'>Use setting</span>
                <span
                  aria-hidden='true'
                  className={`${
                    enabled ? 'translate-x-3' : 'translate-x-0.3'
                  }
            pointer-events-none bg-[#fff] inline-block h-[15px] w-[15px] transform rounded-full bg-[#333333] shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </p>
          </div>
          <div className='w-[616px] text-center mt-[30px] mx-auto'>
            <button className='py-1 px-2.5 text-[#333333] text-[13px] rounded-full bg-[#00F9C6] font-medium'>
              View License Agreement
            </button>
            <p className='mt-[22px] text-[12px] text-[#757575]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Omnis odit officia ipsa quia ea quis molestia
            </p>
            <p className='mt-[22px] text-[11px] text-[#757575]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Omnis odit officia ipsa quia ea quis molestia
              lsmfigsdrhvbn irjegi jghtyegrbv fhgerubv regyvreh
              fvhrbegyreh gvyregvbr ev ebgvyb
            </p>
            <p className='mt-[22px] text-[11px] text-[#757575]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Omnis odit officia ipsa quia ea quis molestia
              meshfg8yvfd bjnetugfbv jghure vrehgvyb erfvyergdfv
              fdbv87erdgfvfd vyudgfv fdvhvdfv dgfyvvd vdgfcv dc
            </p>
            <p className='mt-[22px] text-[11px] text-[#757575]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Omnis odit offici
            </p>
          </div>
          <div className='bg-[#F7F7F7] mt-[30px] w-[1410px] rounded-[20px]'>
            <p className='text-center text-[25px]  pt-[23px] pb-1 text-[#333333] font-medium '>
              Download History
            </p>
            <div className=' flex justify-center gap-4'>
              {history.map((item) => (
                <div className='text-center'>
                  <img src={item.img} className='mb-3' alt='' />
                  <p className='text-[12px] text-[#333333] leading-[1.2]'>
                    ANS{item.id}
                  </p>
                  <p className='text-[11px] text-[#757575] leading-[1.2]'>
                    {item.description}
                  </p>
                  <p className='text-[11px] text-[#757575] leading-[1.2]'>
                    download {item.download}
                  </p>
                </div>
              ))}
            </div>
            <div className='flex justify-center mt-4'>
              <button className='py-1 text-[12px] px-2.5 text-[#FFFFFF] rounded-full bg-[#8E8E8E]  mb-[30px] font-medium'>
                View Download History
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyersPlan;
