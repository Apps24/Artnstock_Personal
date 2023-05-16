import { createSlice } from '@reduxjs/toolkit';

const contriPathSlice = createSlice({
  name: 'contriPath',
  initialState: {
    path: '/ Dashboard',
    path2: '',
    path2cust: '',
  },
  reducers: {
    setpath: (state, action) => {
      //   console.log(action);
      state.path = action.payload;
    },

    setpath2: (state, action) => {
      //   console.log(action);
      state.path2 = action.payload;
    },

    setpath2cust: (state, action) => {
      //   console.log(action);
      state.path2cust = action.payload;
    },
  },
});

export const { setpath, setpath2, setpath2cust } =
  contriPathSlice.actions;

export default contriPathSlice;
