import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState: {
    login: false,
    userRole: '',
    userId: '',
  },
  reducers: {
    loginUser(state, action) {
      state.login = action.payload;
    },
    logoutUser(state, action) {
      state.login = false;
      state.userRole = '';
    },
    setUserRole(state, action) {
      state.userRole = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const authSliceAction = authSlice.actions;
// export const { setUserRole } = authSlice.actions;
export default authSlice;
