import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Footer from '../../footer/Footer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setpath2cust } from '../../../store/contriPathSlice';
import EarningsSummary from '../cust-components/EarningSummary';
import UnpaidEarnings from '../cust-components/UnpaidEarnings';
import PaymentHistory from '../cust-components/PaymentHistory';
import PurchaseHistory from '../cust-components/PurchaseHistory';
import BuyersPlan from '../cust-components/BuyersPlan';
// importing components/
import MyCollections from '../cust-components/MyCollections';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
});

const TabsCustomer = () => {
  const [value, setValue] = useState('1');
  const [nestedTabValueReleases, setNestedTabValueReleases] =
    useState('4.1');
  const [path, setpath] = useState('/ My Collections');

  const dispatch = useDispatch();

  const location = useLocation();

  const sta = location.state;

  useEffect(() => {
    if (sta !== '' && sta !== null) {
      setValue(sta);
    }
  }, [sta]);

  // useEffect(() => {
  //   console.log(value, 'val');
  // }, []);

  const path2 = useSelector((state) => state.contriPath.path2cust);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNestedChangeReleases = (event, newValue) => {
    setNestedTabValueReleases(newValue);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <p className='w-[100%] text-center text-[12px] text-[#757575] pt-[30px] pb-[5px]'>
            Artnstock / My Account / Buyer {path} {path2}
          </p>
        </div>
        <Box
          sx={{
            width: '100%',
            typography: 'body1',
            marginBottom: '50px',
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'center',
                borderBottom: 'none',
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label='lab API tabs example'
                sx={{
                  bgcolor: '#eeeeee',
                  color: '#757575',
                  borderRadius: '20px',
                  height: '40px!important',
                  minHeight: '40px!important',
                  fontSize: '15px',
                  // styles for the indicator
                  '& .MuiTabs-indicator': {
                    display: 'none',
                  },
                  // styles for the selected tab
                  '& .Mui-selected': {
                    bgcolor: '#bbbbbb',
                    color: '#333333!important',
                  },
                }}
              >
                <Tab
                  onClick={() => {
                    setpath('/ My Collections');
                    dispatch(setpath2cust(''));
                  }}
                  label='My Collections'
                  value='1'
                  sx={{
                    textTransform: 'none!important',
                    fontWeight: '500',
                    fontSize: '15px',
                    position: 'relative',
                    bottom: '3.5px',
                  }}
                />
                <Tab
                  onClick={() => {
                    setpath('/ My Plans');
                    dispatch(setpath2cust(''));
                  }}
                  label='My Plans'
                  value='2'
                  sx={{
                    textTransform: 'none!important',
                    borderLeft: 'solid 1px #d7d7d7',
                    fontWeight: '500',
                    fontSize: '15px',
                    position: 'relative',
                    bottom: '3.5px',
                  }}
                />
                <Tab
                  onClick={() => {
                    setpath('/ Purchase History');
                    dispatch(setpath2cust(''));
                  }}
                  label='Purchase History'
                  value='3'
                  sx={{
                    textTransform: 'none!important',
                    borderLeft: 'solid 1px #d7d7d7',
                    fontWeight: '500',
                    fontSize: '15px',
                    position: 'relative',
                    bottom: '3.5px',
                  }}
                />

                <Tab
                  onClick={() => {
                    setpath('/ Referral Earnings');
                    // dispatch(setpath2cust(''));
                  }}
                  label='Referral Earnings'
                  value='4'
                  sx={{
                    textTransform: 'none!important',
                    borderLeft: 'solid 1px #d7d7d7',
                    fontWeight: '500',
                    fontSize: '15px',
                    position: 'relative',
                    bottom: '3.5px',
                  }}
                />
                <Tab
                  onClick={() => {
                    setpath('/ Contributors Support');
                    dispatch(setpath2cust(''));
                  }}
                  label='Customer Support'
                  value='5'
                  sx={{
                    textTransform: 'none!important',
                    borderLeft: 'solid 1px #d7d7d7',
                    fontWeight: '500',
                    fontSize: '15px',
                    position: 'relative',
                    bottom: '3.5px',
                  }}
                />
              </TabList>
            </Box>
            {/* <p className='text-center text-[38px] pt-[7px]'>Upload</p> */}
            <TabPanel value='1'>
              {' '}
              <p className='text-center text-[38px] text-[#333333] mb-[17px] font-medium'>
                My Collections
              </p>
              <MyCollections />
            </TabPanel>
            <TabPanel value='2'>
              <p className='text-center text-[38px] text-[#333333] mb-[17px] font-medium'>
                My Plans
              </p>
              <BuyersPlan />
            </TabPanel>
            <TabPanel value='3'>
              <p className='text-center text-[38px] text-[#333333] mb-[17px] font-medium'>
                File Manager
              </p>
              <PurchaseHistory />
            </TabPanel>
            {/* <TabPanel value='4'>
              <p className='text-center text-[38px] text-[#333333] mb-[17px] font-medium'>
                Release Manager
              </p>
            </TabPanel> */}
            <TabPanel value='4'>
              <p className='text-center text-[38px] text-[#333333] mb-[17px] font-medium'>
                Referral Earnings
              </p>
              <TabContext value={nestedTabValueReleases}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'center',
                    borderBottom: 'none',
                    '& .MuiTabs-root': {
                      minHeight: 0,
                      paddingBottom: '10px',
                    },
                  }}
                >
                  <TabList
                    onChange={handleNestedChangeReleases}
                    aria-label='nested tab example'
                    sx={{
                      '& .MuiTabs-indicator': {
                        display: 'none',
                      },
                      // styles for the selected tab
                      '& .Mui-selected': {
                        bgcolor: '#bbbbbb',
                        color: '#333333!important',
                        borderColor: '#bbbbbb',
                      },
                    }}
                  >
                    <Tab
                      // onClick={() => {
                      //   dispatch(setpath2cust('/ Earning Summary'));
                      // }}
                      label='Referral Earnings Summary'
                      value='4.1'
                      sx={{
                        textTransform: 'none!important',
                        border: '2px solid #eaeaea',
                        borderRadius: '25px',
                        color: '#7e7e7e',
                        fontSize: '12px',
                        marginLeft: '2.5px',
                        marginRight: '2.5px',
                        height: '28px!important',
                        minHeight: 0,
                        minWidth: 'fit-content!important',
                        paddingRight: '12px!important',
                        paddingLeft: '12px!important',
                      }}
                    />
                    {/* <Tab
                      onClick={() => {
                        dispatch(setpath2cust('/ Unpaid Earnings'));
                      }}
                      label='Unpaid Earnings'
                      value='4.2'
                      sx={{
                        textTransform: 'none!important',
                        border: '2px solid #eaeaea',
                        borderRadius: '25px',
                        color: '#7e7e7e',
                        fontSize: '12px',
                        marginLeft: '2.5px',
                        marginRight: '2.5px',
                        height: '28px!important',
                        minHeight: 0,
                        minWidth: 'fit-content!important',
                        paddingRight: '12px!important',
                        paddingLeft: '12px!important',
                      }}
                    /> */}
                    <Tab
                      onClick={() => {
                        dispatch(setpath2cust('/ Payment History'));
                      }}
                      label='Payment History'
                      value='4.3'
                      sx={{
                        textTransform: 'none!important',
                        border: '2px solid #eaeaea',
                        borderRadius: '25px',
                        color: '#7e7e7e',
                        fontSize: '12px',
                        marginLeft: '2.5px',
                        marginRight: '2.5px',
                        height: '28px!important',
                        minHeight: 0,
                        minWidth: 'fit-content!important',
                        paddingRight: '12px!important',
                        paddingLeft: '12px!important',
                      }}
                    />
                    <Tab
                      onClick={() => {
                        dispatch(setpath2cust('/ Tax'));
                      }}
                      label='Tax'
                      value='4.4'
                      sx={{
                        textTransform: 'none!important',
                        border: '2px solid #eaeaea',
                        borderRadius: '25px',
                        color: '#7e7e7e',
                        fontSize: '12px',
                        marginLeft: '2.5px',
                        marginRight: '2.5px',
                        height: '28px!important',
                        minHeight: 0,
                        minWidth: 'fit-content!important',
                        paddingRight: '12px!important',
                        paddingLeft: '12px!important',
                      }}
                    />
                  </TabList>
                </Box>
                <TabPanel value='4.1' sx={{ paddingTop: '0px' }}>
                  <EarningsSummary />
                </TabPanel>
                <TabPanel value='4.2' sx={{ paddingTop: '0px' }}>
                  {/* <UnpaidEarnings /> */}
                </TabPanel>
                <TabPanel value='4.3' sx={{ paddingTop: '0px' }}>
                  <PaymentHistory />
                </TabPanel>
                <TabPanel value='4.4' sx={{ paddingTop: '0px' }}>
                  {/* <PaymentHistory /> */}
                  Tax
                </TabPanel>
              </TabContext>
            </TabPanel>
            <TabPanel value='5'>Item Six</TabPanel>
          </TabContext>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default TabsCustomer;
