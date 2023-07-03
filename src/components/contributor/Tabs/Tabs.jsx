import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ContriBanner from '../contri-banner/Contri-Banner';
import UploadContent from '../contri-components/UploadContent';
import Submit from '../contri-components/Submit';
import { useState, useEffect } from 'react';
import AddDetails from '../contri-components/AddDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setNestedTabValueUpload } from '../../../store/nestedTabSlice';
import { setNestedTabValueReleases } from '../../../store/nestedTabSlice';
import ActivateProducts from '../contri-components/ActivateProducts';
import ForReview from '../contri-components/ForReview';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import ApprovedFiles from '../contri-components/ApprovedFiles';
import RejectedFiles from '../contri-components/RejectedFiles';
import FileManager from '../TopTabs/FileManager';
import UploadRelease from '../contri-components/UploadRelease';
import PropertyRelease from '../contri-components/PropertyRelease';
import ModelRelease from '../contri-components/ModelRelease';
import MinorRelease from '../contri-components/MinorRelease';
import AllRelease from '../contri-components/AllRelease';
import Dashboard from '../TopTabs/Dashboard';
import EarningSummary from '../contri-components/EarningSummary';
import ReferralEarnings from '../contri-components/ReferralEarnings';
import UnpaidEarnings from '../contri-components/UnpaidEarnings';
import PaymentHistory from '../contri-components/PaymentHistory';
import TopDownloads from '../contri-components/TopDownloads';
import TaxMain from '../contri-components/tax/TaxMain';
import { setpath } from '../../../store/contriPathSlice';
import { setpath2 } from '../../../store/contriPathSlice';
import Footer from '../../footer/Footer';
import { useLocation } from 'react-router-dom';
import Certificate from '../contri-components/Certificate';

const theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
});

const Tabs = () => {
  const [value, setValue] = useState('1');
  const [nestedEarnings, setNestedEarnings] = useState('5.1');
  // const [path, setpath] = useState('/ Dashboard');
  // const [path2, setpath2] = useState('');

  const location = useLocation();

  const sta = location.state;

  useEffect(() => {
    if (sta !== '' && sta !== null) {
      setValue(sta);
    }
  }, [sta]);

  // useEffect(() => {
  //   console.log(sta);
  // }, []);

  const dispatch = useDispatch();

  const path = useSelector((state) => state.contriPath.path);
  const path2 = useSelector((state) => state.contriPath.path2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const nestedValue = useSelector(
    (state) => state.nestedTab.nestedUpload
  );
  const nestedReleases = useSelector(
    (state) => state.nestedTab.nestedReleases
  );

  const handleNestedChangeUpload = (event, newValue) => {
    dispatch(setNestedTabValueUpload(newValue));
  };
  const handleNestedChangeReleases = (event, newValue) => {
    dispatch(setNestedTabValueReleases(newValue));
  };
  const handleNestedChangeEarnings = (event, newValue) => {
    setNestedEarnings(newValue);
  };

  const handleClick = (event) => {
    event.preventDefault();
    // console.log('Button clicked');
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ContriBanner />
        <div>
          <p className='w-[100%] text-center text-[12px] text-[#757575] pt-[30px] pb-[5px]'>
            Artnstock / My Account / Contributor {path} {path2}
          </p>
          {/* <p className='w-[100%] text-center text-[12px] text-[#757575] pt-[30px] pb-[5px]'>
            Artnstock / My Account / Contributor / Upload / Upload
            Content
          </p> */}
        </div>
        <Box
          sx={{
            width: '100%',
            typography: 'body1',
            marginBottom: '300px',
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
                    dispatch(setpath('/ Dashboard'));
                    dispatch(setpath2(''));
                  }}
                  label='Dashboard'
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
                    dispatch(setpath('/ Upload'));
                  }}
                  label='Upload'
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
                    dispatch(setpath('/ File Manager'));
                    dispatch(setpath2(''));
                  }}
                  label='File Manager'
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
                    dispatch(setpath('/ Releases'));
                  }}
                  label='Releases'
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
                    dispatch(setpath('/ Earnings'));
                  }}
                  label='Earnings'
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
                <Tab
                  onClick={() => {
                    dispatch(setpath('/ Contributors Support'));
                  }}
                  label='Contributors Support'
                  value='6'
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
                Dashboard
              </p>
              <Dashboard />
            </TabPanel>
            <TabPanel value='2'>
              <p className='text-center text-[38px] text-[#333333] mb-[17px] font-medium'>
                Upload
              </p>
              <TabContext value={nestedValue}>
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
                    onChange={handleNestedChangeUpload}
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
                      onClick={() => {
                        dispatch(setpath2('/ Upload Content'));
                      }}
                      label='Upload Content'
                      value='2.1'
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
                        '&:disabled': {
                          opacity: 1,
                          color: '#7e7e7e',
                        },
                      }}
                      // disabled={true}
                    />
                    <Tab
                      onClick={() => {
                        dispatch(setpath2('/ To Submit'));
                      }}
                      label='To Submit'
                      value='2.2'
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
                        '&:disabled': {
                          opacity: 1,
                          color: '#7e7e7e',
                        },
                      }}
                      disabled={true}
                    />
                    <Tab
                      onClick={() => {
                        dispatch(setpath2('/ Add Details'));
                      }}
                      label='Add Details'
                      value='2.3'
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
                        '&:disabled': {
                          opacity: 1,
                          color: '#7e7e7e',
                        },
                      }}
                      disabled={true}
                    />
                    <Tab
                      onClick={() => {
                        dispatch(setpath2('/ Activate Products'));
                      }}
                      label='Activate Products'
                      value='2.4'
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
                        dispatch(setpath2('/ For Review'));
                      }}
                      label='For Review'
                      value='2.5'
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
                        dispatch(setpath2('/ Approved Files'));
                      }}
                      label='Approved Files'
                      value='2.6'
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
                        dispatch(setpath2('/ Rejected Files'));
                      }}
                      label='Rejected Files'
                      value='2.7'
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
                <TabPanel value='2.1' sx={{ paddingTop: '0px' }}>
                  <UploadContent />
                </TabPanel>
                <TabPanel value='2.2' sx={{ paddingTop: '0px' }}>
                  <Submit />
                </TabPanel>
                <TabPanel value='2.3' sx={{ paddingTop: '0px' }}>
                  <AddDetails />
                </TabPanel>
                <TabPanel value='2.4' sx={{ paddingTop: '0px' }}>
                  <ActivateProducts />
                </TabPanel>
                <TabPanel value='2.5' sx={{ paddingTop: '0px' }}>
                  <ForReview />
                </TabPanel>
                <TabPanel value='2.6' sx={{ paddingTop: '0px' }}>
                  <ApprovedFiles />
                </TabPanel>
                <TabPanel value='2.7' sx={{ paddingTop: '0px' }}>
                  <RejectedFiles />
                </TabPanel>
              </TabContext>
            </TabPanel>
            <TabPanel value='3'>
              <p className='text-center text-[38px] text-[#333333] mb-[17px] font-medium'>
                File Manager
              </p>
              <FileManager />
            </TabPanel>
            <TabPanel value='4'>
              <p className='text-center text-[38px] text-[#333333] mb-[17px] font-medium'>
                Release Manager
              </p>
              <TabContext value={nestedReleases}>
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
                      onClick={() => {
                        dispatch(setpath2('/ Upload Release'));
                      }}
                      label='Upload Release'
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
                    <Tab
                      onClick={() => {
                        dispatch(setpath2('/ Property Release'));
                      }}
                      label='Property Release'
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
                    />
                    <Tab
                      onClick={() => {
                        dispatch(setpath2('/ Model Release'));
                      }}
                      label='Model Release'
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
                        dispatch(setpath2('/ Minor Release'));
                      }}
                      label='Minor Release'
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
                    <Tab
                      onClick={() => {
                        dispatch(setpath2('/ All Releases'));
                      }}
                      label='All Releases'
                      value='4.5'
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
                      }}
                    />
                  </TabList>
                </Box>
                <TabPanel value='4.1' sx={{ paddingTop: '0px' }}>
                  <UploadRelease />
                </TabPanel>
                <TabPanel value='4.2' sx={{ paddingTop: '0px' }}>
                  <PropertyRelease />
                </TabPanel>
                <TabPanel value='4.3' sx={{ paddingTop: '0px' }}>
                  <ModelRelease />
                </TabPanel>
                <TabPanel value='4.4' sx={{ paddingTop: '0px' }}>
                  <MinorRelease />
                </TabPanel>
                <TabPanel value='4.5' sx={{ paddingTop: '0px' }}>
                  <AllRelease />
                </TabPanel>
              </TabContext>
            </TabPanel>
            <TabPanel value='5'>
              <p className='text-center text-[38px] text-[#333333] mb-[17px] font-medium'>
                Earnings
              </p>
              <TabContext value={nestedEarnings}>
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
                    onChange={handleNestedChangeEarnings}
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
                      onClick={() => {
                        dispatch(setpath2('/ Earning Summary'));
                      }}
                      label='Earning Summary'
                      value='5.1'
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
                        dispatch(setpath2('/ Referral Earnings'));
                      }}
                      label='Referral Earnings'
                      value='5.2'
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
                        dispatch(setpath2('/ Unpaid Earnings'));
                      }}
                      label='Unpaid Earnings'
                      value='5.3'
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
                        dispatch(setpath2('/ Payment History'));
                      }}
                      label='Payment History'
                      value='5.4'
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
                        dispatch(setpath2('/ Top Downloads'));
                      }}
                      label='Top Downloads'
                      value='5.5'
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
                        dispatch(setpath2('/ Tax'));
                      }}
                      label='Tax'
                      value='5.6'
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
                <TabPanel value='5.1' sx={{ paddingTop: '0px' }}>
                  <EarningSummary />
                </TabPanel>
                <TabPanel value='5.2' sx={{ paddingTop: '0px' }}>
                  <ReferralEarnings />
                </TabPanel>
                <TabPanel value='5.3' sx={{ paddingTop: '0px' }}>
                  <UnpaidEarnings />
                </TabPanel>
                <TabPanel value='5.4' sx={{ paddingTop: '0px' }}>
                  <PaymentHistory />
                </TabPanel>
                <TabPanel value='5.5' sx={{ paddingTop: '0px' }}>
                  <TopDownloads />
                </TabPanel>
                <TabPanel value='5.6' sx={{ paddingTop: '0px' }}>
                  <TaxMain />
                </TabPanel>
              </TabContext>
            </TabPanel>
            <TabPanel value='6'>Item Six</TabPanel>
          </TabContext>
        </Box>
        <Certificate />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Tabs;
