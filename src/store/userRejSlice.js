import { createSlice } from "@reduxjs/toolkit";

const userRegSlice = createSlice({
    name: "UserRegSlice",
    initialState: {
        userType: "",
        userId: "",
        userEmail: "",
        userStatus: "",
        aadharUpload: "",
        signUpload: ""
    },
    reducers: {
        setUserType(state, action) {
            state.userType = action.payload
        },
        setUserId(state, acion) {
            state.userId = acion.payload
        },
        setUserEmail(state, action) {
            state.userEmail = action.payload
        },
        setUserStatus(state, action) {
            state.userStatus = action.payload
        },
        setAadharUpload(state, action) {
            state.aadharUpload = action.payload
        },
        setSignUpload(state, action) {
            state.signUpload = action.payload
        },
        clearUserReg(state,action) {
            state.userEmail = ""
            state.userId = ""
            state.userStatus = ""
            state.userType = ""
            state.aadharUpload = ""
            state.signUpload = ""
        }
    }
})

export const userRegSliceAction = userRegSlice.actions;
export default userRegSlice;