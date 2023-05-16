import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'images',
  initialState: {
    selectedImages: [],
  },
  reducers: {
    setSelectedImages: (state, action) => {
      state.selectedImages = action.payload;
      // console.log(state.selectedImages);
    },
  },
});

export const { setSelectedImages } = imageSlice.actions;
export default imageSlice;
