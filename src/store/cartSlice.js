import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'CartSlice',
  initialState: {
    cartCount: 0
  },
  reducers: {
    setCartCount(state, action) {
      state.cartCount = action.payload;
    },
    clearCartCount(state, action) {
      state.cartCount = 0
    },

  },
});

export const cartSliceAction = cartSlice.actions;
// export const { setUserRole } = authSlice.actions;
export default cartSlice;
