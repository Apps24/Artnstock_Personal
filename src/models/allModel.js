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
  userId: '',
  releases: [],
};

export const filteredMasterModel = {
  orientation: '',
  price: 0,
  size: '',
  styleId: '',
  subjectId: '',
  userFirstName: '',
};

export const frameModel = {
  depth: String,
  finish: String,
  frameColor: String,
  frameDrawingUrl: String,
  frameId: String,
  frameImageUrl: String,
  frameMaterial: String,
  frameName: String,
  frameProductNo: String,
  frameThumbnailUrl: String,
  frameType: String,
  glassType: String,
  price: 0,
  size: String,
  status: String,
  stockStatus: String,
  style: String,
  width: String
}

export class CartartClass {
  constructor(artId, description, imgUrl, quantity, stockStatus, userId) {
    this.artId = artId;
    this.description = description;
    this.imgUrl = imgUrl;
    this.quantity = quantity;
    this.stockStatus = stockStatus;
    this.userId = userId
  }

}

export const CartArtFrameModel = {
  artId: String,
  description: String,
  imgUrl: String,
  frameMaster: {
    depth: String,
    finish: String,
    frameColor: String,
    frameDrawingUrl: String,
    frameId: String,
    frameImageUrl: String,
    frameMaterial: String,
    frameName: String,
    frameProductNo: String,
    frameThumbnailUrl: String,
    frameType: String,
    glassType: String,
    price: 0,
    size: String,
    status: String,
    stockStatus: String,
    style: String,
    width: String
  },
  matMasterBottom: {
    color: String,
    matId: String,
    matType: String,
    matWidth: String,
    price: 0,
    status: String
  },
  matMasterTop: {
    color: String,
    matId: String,
    matType: String,
    matWidth: String,
    price: 0,
    status: String
  },
  orientationMaster: {
    height: String,
    orientationId: String,
    price: 0,
    shape: String,
    shapeStatus: String,
    width: String
  },
  printingMaterialMaster: {
    checked: true,
    description: String,
    printingMaterialId: String,
    printingMaterialName: String,
    printingMaterialPrice: 0,
    printingMaterialStatus: String
  },
  quantity: 0,
  stockStatus: String,
  userId: String
}


export const orderModel = {
  cartArtFrameId: [
    String
  ],
  orderPaymentStatus: String,
  paymentInformation: {
    razorpayOrderId: String,
    razorpayPaymentId: String,
    signature: String,
    status: String
  },
  userId: String
}