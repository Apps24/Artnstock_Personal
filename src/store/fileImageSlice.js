import { createSlice } from '@reduxjs/toolkit';

const fileImageSlice = createSlice({
  name: 'fileimages',
  initialState: {
    selectedAllFilesImages: [],
    selectedAllFilesImagesCustomer: [], //new
  },
  reducers: {
    setSelectedAllFilesImages: (state, action) => {
      state.selectedAllFilesImages = action.payload;
    },
    setSelectedAllFilesImagesCustomer: (state, action) => {
      state.selectedAllFilesImagesCustomer = action.payload;
    }, //new
  },
});

export const {
  setSelectedAllFilesImages,
  setSelectedAllFilesImagesCustomer,
} = fileImageSlice.actions;
export default fileImageSlice;
