import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
  },
  reducers: {
    updateAllProducts(state, action) {
      state.list= action.payload;
    },
  },
});

export const { updateAllProducts } = slice.actions;

export default slice.reducer;
