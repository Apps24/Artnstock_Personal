import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'SearchSlice',
  initialState: {
    searchText: "",

  },
  reducers: {
    setSearchText(state, action) {
        state.searchText = action.payload;
    },
   removeSearchText(state, action) {
        state.searchText = "";
    },
  },
});

export const searchSliceAction = searchSlice.actions;

export default searchSlice;
