import { createSlice } from '@reduxjs/toolkit';

const subjectidSlice = createSlice({
  name: 'subjectId',
  initialState: {
    subjectId: null,
  },
  reducers: {
    setSubjectId: (state, action) => {
      state.subjectId = action.payload;
    },
  },
});

export const { setSubjectId } = subjectidSlice.actions;
export default subjectidSlice;
