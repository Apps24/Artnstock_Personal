import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainHomepage from './pages/MainHomepage';
import Mainbar from './components/header/Mainbar';
import Join from './pages/register/Join';
import UserDetails from './pages/register/UserDetails';
import VerifyEmail from './pages/register/VerifyEmail';
import WelcomeUser from './pages/register/WelcomeUser';
import PrivateRoutes from './routes/PrivateRoutes';
import VerifyUserPage from './pages/register/VerifyUserPage';
import MailingAdd from './pages/register/MailingAdd';
import ResidentialAdd from './pages/register/ResidentialAdd';
import UploadDocuments from './pages/register/UploadDocuments';
import UploadSign from './pages/register/UploadSign';
import Login from './pages/login/Login';
import ArtHomepage from './pages/ArtHomepage';
import ArtList from './pages/art/ArtList';
import UploadFile from './components/contributor/upload-file/Upload-file';
import ArtDetails from './pages/art/artDetails/ArtDetails';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ProductHomepage from './pages/ProductHomepage';
// Footer
import AboutUs from './components/staticPages/AboutUs';
import ArtnstockMagazine from './components/staticPages/ArtnstockMagazine';
import BecomeContributor from './components/staticPages/BecomeContributor';
import BuyerReferralProgram from './components/staticPages/BuyerReferralProgram';
import Blog from './components/staticPages/Blog';
import BuyersSupportCenter from './components/staticPages/BuyersSupportCenter';
import Careers from './components/staticPages/Careers';
import CommunityGuidelines from './components/staticPages/CommunityGuidelines';
import ContactUs from './components/staticPages/ContactUs';
import ContributorReferralProgram from './components/staticPages/ContributorReferralProgram';
import ContributorSupportCenter from './components/staticPages/ContributorSupportCenter';
import CookiesSetting from './components/staticPages/CookiesSetting';
import CopyrightTrademarkPolicy from './components/staticPages/CopyrightTrademarkPolicy';
import DNSMyPersonalInformation from './components/staticPages/DNSMyPersonalInformation';
import LicenseAgreement from './components/staticPages/LicenseAgreement';
import Offers from './components/staticPages/Offers';
import PlansPricing from './components/staticPages/PlansPricing';
import PressMedia from './components/staticPages/PressMedia';
import PrivacyPolicy from './components/staticPages/PrivacyPolicy';
import PromoCode from './components/staticPages/PromoCode';
import ReturnMyOrder from './components/staticPages/ReturnMyOrder';
import ReturnPolicy from './components/staticPages/ReturnPolicy';
import ShippingDelivery from './components/staticPages/ShippingDelivery';
import TermsAndServices from './components/staticPages/TermsAndServices';
import TrackMyOrder from './components/staticPages/TrackMyOrder';
import DownloadRealeaseForm from './components/staticPages/DownloadRealeaseForm';
import ShoppingCart from './components/Shopping_Cart/ShoppingCart';
import Checkout from './components/Shopping_Cart/Checkout';
import Tabs from './components/contributor/Tabs/Tabs';
import TabsCustomer from './components/customer/TabsCustomer/TabsCustomer';
import SellOnArtnstock_Home from './components/staticPages/SellOnArtnstock_Home';

// pratiksha
import Customer from './components/AccountSettings/Customer';
import Contributor from './components/AccountSettings/Contributor';
import ChangeEmail_Customer from './components/AccountSettings/EmailPassword/ChangeEmail_Customer';
import ChangeEmail_Contributor from './components/AccountSettings/EmailPassword/ChangeEmail_Contributor';
import ChangePassword_Customer from './components/AccountSettings/EmailPassword/ChangePassword_Customer';
import ChangePassword_Contributor from './components/AccountSettings/EmailPassword/ChangePassword_Contributor';
import Customer_ChangedEmail from './components/AccountSettings/EmailPassword/Customer_ChangedEmail';
import Contributor_ChangedEmail from './components/AccountSettings/EmailPassword/Contributor_ChangedEmail';
import Customer_ChangedPassword from './components/AccountSettings/EmailPassword/Customer_ChangedPassword';
import Contributor_ChangedPassword from './components/AccountSettings/EmailPassword/Contributor_ChangedPassword';
import ProductList from './pages/product/productList';
import ComboPack from './pages/combo/ComboPack';
import CategoryComboPack from './pages/combo/CategoryComboPack';

import TrackMyOrder1 from './components/customer/cust-components/PurchaseHistorySubComp/TrackMyOrder';
import TrackMyOrder2 from './components/customer/cust-components/PurchaseHistorySubComp/TrackMyOrder1';
import TrackMyOrder3 from './components/customer/cust-components/PurchaseHistorySubComp/TrackMyOrder2';
import BuyersPlan from './components/customer/cust-components/BuyersPlan';
import ProductDetails from './pages/product/productDetails/ProductDetails';
import { Navigate } from 'react-router-dom';
import Wishlist from './components/Wishlist/Wishlist2';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContributorViewMyStore from './components/ContributorViewMyStore/ContributorViewMyStore';

function App() {
  const userAuth = useSelector((state) => state.auth);

  // redux useSelector of userRole
  const userRole = useSelector((state) => state.auth.userRole);

  const ProtectedRouteForNull = ({ children }) => {
    if (userRole === '') {
      return <Navigate to='/login' />;
    }
    return children;
  };

  const ProtectedRouteForContributor = ({ children }) => {
    if (userRole === 'contributor') {
      return <Navigate to='/login' />;
    }
    return children;
  };

  const ProtectedRouteForCustomer = ({ children }) => {
    if (userRole === 'customer') {
      return <Navigate to='/login' />;
    }
    return children;
  };

  // scroll to top function
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Mainbar />
      <Routes>
        {/* Account Settings */}
        <Route
          path='/customer'
          element={
            <ProtectedRouteForNull>
              <ProtectedRouteForContributor>
                <Customer />
              </ProtectedRouteForContributor>
            </ProtectedRouteForNull>
          }
        />
        <Route
          path='/contributor'
          element={
            <ProtectedRouteForNull>
              <ProtectedRouteForCustomer>
                <Contributor />
              </ProtectedRouteForCustomer>
            </ProtectedRouteForNull>
          }
        />
        <Route
          path='/change-email-customer'
          element={<ChangeEmail_Customer />}
        />
        <Route
          path='/change-email-contributor'
          element={<ChangeEmail_Contributor />}
        />
        <Route
          path='/change-password-customer'
          element={<ChangePassword_Customer />}
        />
        <Route
          path='/change-password-contributor'
          element={<ChangePassword_Contributor />}
        />
        <Route
          path='/password-changed-customer'
          element={<Customer_ChangedPassword />}
        />
        <Route
          path='/password-changed-contributor'
          element={<Contributor_ChangedPassword />}
        />
        <Route
          path='/email-changed-customer'
          element={<Customer_ChangedEmail />}
        />

        <Route
          path='/email-changed-contributor'
          element={<Contributor_ChangedEmail />}
        />

        {/* Contributor */}
        <Route
          path='/upload-file'
          element={
            <ProtectedRouteForNull>
              <ProtectedRouteForCustomer>
                <UploadFile />
              </ProtectedRouteForCustomer>
            </ProtectedRouteForNull>
          }
          exact
        />

        <Route
          path='/tabs'
          element={
            <ProtectedRouteForNull>
              <ProtectedRouteForCustomer>
                <Tabs />
              </ProtectedRouteForCustomer>
            </ProtectedRouteForNull>
          }
        />

        {/* Customer */}
        <Route
          path='/customer-tabs'
          element={
            <ProtectedRouteForNull>
              {/* <ProtectedRouteForContributor> */}
              <TabsCustomer />
              {/* </ProtectedRouteForContributor> */}
            </ProtectedRouteForNull>
          }
        />

        {/* Art */}
        <Route path='/art-list' element={<ArtList />} exact />
        <Route
          path='/art/art-details'
          element={<ArtDetails />}
          exact
        />

        {/* Product */}
        <Route path='/product-list' element={<ProductList />} exact />

        {/* combo pack */}

        <Route path='/combo-pack' element={<ComboPack />} exact />

        {/* combo pack */}
        <Route
          path='/category-combo-pack'
          element={<CategoryComboPack />}
          exact
        />

        {/* Purchase History */}
        <Route path='/track-my-order' element={<TrackMyOrder1 />} />
        <Route path='/track-my-order1' element={<TrackMyOrder2 />} />
        <Route path='/track-my-order2' element={<TrackMyOrder3 />} />

        {/* My Plan */}
        <Route path='buyers-plan' element={<BuyersPlan />} />

        {/* Product Details */}
        <Route path='product-details' element={<ProductDetails />} />

        {/* Wishlist */}
        <Route path='/wishlist' element={<Wishlist />} />

        {/* View My Store */}
        <Route
          path='/view-my-store'
          element={<ContributorViewMyStore />}
          exact
        />

        {/* Register */}
        <Route element={<PrivateRoutes />}>
          <Route
            path='/user-details'
            element={<UserDetails />}
            exact
          />
          <Route
            path='/verify-Email'
            element={<VerifyEmail />}
            exact
          />
          <Route
            path='/welcome-user'
            element={<WelcomeUser />}
            exact
          />
          <Route
            path='/mailing-address'
            element={<MailingAdd />}
            exact
          />
          <Route
            path='/residential-address'
            element={<ResidentialAdd />}
            exact
          />
          <Route
            path='/upload-document'
            element={<UploadDocuments />}
            exact
          />
          <Route path='/upload-sign' element={<UploadSign />} exact />
        </Route>
        <Route
          path='/verify-user/:id/:otp'
          element={<VerifyUserPage />}
          exact
        />
        <Route path='/join' element={<Join />} exact />
        {/* login */}
        {userAuth.login ? (
          ''
        ) : (
          <Route path='/login' element={<Login />} />
        )}
        {/* Main Homepage */}
        <Route path='/' element={<MainHomepage />} exact />
        <Route path='/art-home' element={<ArtHomepage />} exact />
        <Route
          path='/product-home'
          element={<ProductHomepage />}
          exact
        />
        {/* Footer */}
        <Route path='/AboutUs' element={<AboutUs />} exact />
        <Route
          path='/ArtnstockMagazine'
          element={<ArtnstockMagazine />}
          exact
        />
        <Route
          path='/BecomeContributor'
          element={<BecomeContributor />}
          exact
        />
        <Route path='/Blog' element={<Blog />} exact />
        <Route
          path='/BuyerReferralProgram'
          element={<BuyerReferralProgram />}
          exact
        />
        <Route
          path='/BuyersSupportCenter'
          element={<BuyersSupportCenter />}
          exact
        />
        <Route path='/Careers' element={<Careers />} exact />
        <Route
          path='/CommunityGuidelines'
          element={<CommunityGuidelines />}
          exact
        />
        <Route path='/ContactUs' element={<ContactUs />} exact />
        <Route
          path='/ContributorReferralProgram'
          element={<ContributorReferralProgram />}
          exact
        />
        <Route
          path='/ContributorSupportCenter'
          element={<ContributorSupportCenter />}
          exact
        />
        <Route
          path='/CookiesSetting'
          element={<CookiesSetting />}
          exact
        />
        <Route
          path='/CopyrightTrademarkPolicy'
          element={<CopyrightTrademarkPolicy />}
          exact
        />
        <Route
          path='/DNSMyPersonalInformation'
          element={<DNSMyPersonalInformation />}
          exact
        />
        <Route
          path='/LicenseAgreement'
          element={<LicenseAgreement />}
          exact
        />
        <Route path='/Offers' element={<Offers />} exact />
        <Route
          path='/PlansPricing'
          element={<PlansPricing />}
          exact
        />
        <Route path='/PressMedia' element={<PressMedia />} exact />
        <Route
          path='/PrivacyPolicy'
          element={<PrivacyPolicy />}
          exact
        />
        <Route path='/PromoCode' element={<PromoCode />} exact />
        <Route
          path='/ReturnMyOrder'
          element={<ReturnMyOrder />}
          exact
        />
        <Route
          path='/ReturnPolicy'
          element={<ReturnPolicy />}
          exact
        />
        <Route
          path='/ShippingDelivery'
          element={<ShippingDelivery />}
          exact
        />
        <Route
          path='/TermsAndServices'
          element={<TermsAndServices />}
          exact
        />
        <Route
          path='/TrackMyOrder'
          element={<TrackMyOrder />}
          exact
        />
        <Route
          path='/DownloadRealeaseForm'
          element={<DownloadRealeaseForm />}
          exact
        />

        {/* Footer */}
        <Route path='/AboutUs' element={<AboutUs />} exact />
        <Route
          path='/ArtnstockMagazine'
          element={<ArtnstockMagazine />}
          exact
        />
        <Route
          path='/BecomeContributor'
          element={<BecomeContributor />}
          exact
        />
        <Route path='/Blog' element={<Blog />} exact />
        <Route
          path='/BuyerReferralProgram'
          element={<BuyerReferralProgram />}
          exact
        />
        <Route
          path='/BuyersSupportCenter'
          element={<BuyersSupportCenter />}
          exact
        />
        <Route path='/Careers' element={<Careers />} exact />
        <Route
          path='/CommunityGuidelines'
          element={<CommunityGuidelines />}
          exact
        />
        <Route path='/ContactUs' element={<ContactUs />} exact />
        <Route
          path='/ContributorReferralProgram'
          element={<ContributorReferralProgram />}
          exact
        />
        <Route
          path='/ContributorSupportCenter'
          element={<ContributorSupportCenter />}
          exact
        />
        <Route
          path='/CookiesSetting'
          element={<CookiesSetting />}
          exact
        />
        <Route
          path='/CopyrightTrademarkPolicy'
          element={<CopyrightTrademarkPolicy />}
          exact
        />
        <Route
          path='/DNSMyPersonalInformation'
          element={<DNSMyPersonalInformation />}
          exact
        />
        <Route
          path='/LicenseAgreement'
          element={<LicenseAgreement />}
          exact
        />
        <Route path='/Offers' element={<Offers />} exact />
        <Route
          path='/PlansPricing'
          element={<PlansPricing />}
          exact
        />
        <Route path='/PressMedia' element={<PressMedia />} exact />
        <Route
          path='/PrivacyPolicy'
          element={<PrivacyPolicy />}
          exact
        />
        <Route path='/PromoCode' element={<PromoCode />} exact />
        <Route
          path='/ReturnMyOrder'
          element={<ReturnMyOrder />}
          exact
        />
        <Route
          path='/ReturnPolicy'
          element={<ReturnPolicy />}
          exact
        />
        <Route
          path='/ShippingDelivery'
          element={<ShippingDelivery />}
          exact
        />
        <Route
          path='/TermsAndServices'
          element={<TermsAndServices />}
          exact
        />
        <Route
          path='/TrackMyOrder'
          element={<TrackMyOrder />}
          exact
        />
        <Route
          path='/DownloadRealeaseForm'
          element={<DownloadRealeaseForm />}
          exact
        />

        {/* sell on arntstock */}

        <Route
          path='/SellOnArtnstock-Home'
          element={<SellOnArtnstock_Home />}
        />
        {/* Shopping Cart */}
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='/checkout' element={<Checkout />} />

        {/*Error*/}
        <Route path='*' element={<h1>Error No route found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
