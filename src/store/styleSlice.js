import { createSlice } from '@reduxjs/toolkit';

const styleSlice = createSlice({
  name: 'style',
  initialState: {
    style: null,
  },
  reducers: {
    setStyle: (state, action) => {
      state.style = action.payload;
    },
  },
});

export const styleSliceAction = styleSlice.actions;
export default styleSlice;
