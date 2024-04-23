import { createSlice } from "@reduxjs/toolkit";

// export default function productsReducer(state = []) {
//   return state;
// }

const slice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    updateAllProducts(state, action) {
      state = action.payload;
    },
  },
});
