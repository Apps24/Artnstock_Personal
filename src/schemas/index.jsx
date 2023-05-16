import * as Yup from "yup"

export const signUpSchema = Yup.object({
    fName: Yup.string().min(2).max(25).matches(/^[a-zA-Z]+$/).required("Please Enter Your First Name"),
    lName: Yup.string().min(2).max(25).matches(/^[a-zA-Z]+$/).required("Please Enter Your Last Name"),
    dName: Yup.string().min(2).max(25).required("Please Enter Your Display Name"),
    email: Yup.string().email().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required("Please Enter Your Email"),
    password: Yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required("Please Enter Your Password")
})

export const addressSchema = Yup.object({
    addressOne: Yup.string().min(2).max(30).required("Please Enter Address 1"),
    addressTwo: Yup.string().min(2).max(30).required("Please Enter Address 2"),
    city: Yup.string().min(2).max(30).required("Please Enter City"),
    country: Yup.string().min(2).max(30).required("Please Enter Country"),
    phNumber: Yup.string().min(2).max(30).required("Please Enter Phone Number"),
    state: Yup.string().min(2).max(30).required("Please Enter State"),
    zipCode: Yup.string().min(2).max(30).required("Please Enter zip Code"),
})