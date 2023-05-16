import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState: {
    login: false,
    userRole: '',
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
  },
});

export const authSliceAction = authSlice.actions;
// export const { setUserRole } = authSlice.actions;
export default authSlice;
