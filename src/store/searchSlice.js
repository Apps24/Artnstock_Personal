import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'SearchSlice',
  initialState: {
    searchText: "",
    type: ""
  },
  reducers: {
    setSearchText(state, action) {
        state.searchText = action.payload;
    },
    setSearchType(state, action) {
      state.type = action.payload;
    },
   removeSearchText(state, action) {
        state.searchText = "";
    },
  },
});

export const searchSliceAction = searchSlice.actions;

export default searchSlice;
