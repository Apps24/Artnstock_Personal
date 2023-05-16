import { createSlice } from '@reduxjs/toolkit';

const nestedTabSlice = createSlice({
  name: 'nestedTab',
  initialState: {
    nestedUpload: '2.1',
    nestedReleases: '4.1',
  },
  reducers: {
    setNestedTabValueUpload: (state, action) => {
      //   console.log(action);
      state.nestedUpload = action.payload;
    },
    setNestedTabValueReleases: (state, action) => {
      //   console.log(action);
      state.nestedReleases = action.payload;
    },
  },
});

export const { setNestedTabValueUpload, setNestedTabValueReleases } =
  nestedTabSlice.actions;

export default nestedTabSlice;
