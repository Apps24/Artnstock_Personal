export const userModel = {
  userFirstName: '',
  userLastName: '',
  displayName: '',
  emailAddress: '',
  password: '',
  userRole: [],
  shippingAddress: {
    countryName: '',
    addressLine1: '',
    addressLine2: '',
    cityName: '',
    zipCode: '',
    stateName: '',
    phoneNo: '',
  },
  residentialAddress: {
    countryName: '',
    addressLine1: '',
    addressLine2: '',
    cityName: '',
    postalCode: '',
    stateName: '',
    phoneNo: '',
  },
  socialMedia: {
    twitterLink: '',
    linkedinLink: '',
    facebookLink: '',
    googleLink: '',
    pinterestLink: '',
  },
  paymentDetails: {
    paymentName: '',
    method: '',
    paymentEmail: '',
    minPayout: '',
  },
  preferences: {
    designContent: '',
    specialOffer: '',
    productEdu: '',
    matureContent: '',
  },
  languagePreference: {
    languageCome: '',
  },
  deleteAccount: {
    deleteAccountMsg: '',
  },
};

export const mailingAddressModel = {
  userId: '',
  shippingAddress: {
    countryName: '',
    addressLine1: '',
    addressLine2: '',
    cityName: '',
    zipCode: '',
    stateName: '',
    phoneNo: '',
  },
};
export const residentialAddressModel = {
  userId: '',
  residentialAddress: {
    countryName: '',
    addressLine1: '',
    addressLine2: '',
    cityName: '',
    zipCode: '',
    stateName: '',
    phoneNo: '',
  },
};

export const artMasterModel = {
  artName: '',
  commercialUser: [],
  typeOfContent: [],
  referenceFile: [],
  description: '',
  keywords: [],
  artMedium: '',
  subjectId: '',
  styleId: '',
  image: '',
};

export const filteredMasterModel = {
  orientation: '',
  price: 0,
  size: '',
  styleId: '',
  subjectId: '',
  userFirstName: '',
};
