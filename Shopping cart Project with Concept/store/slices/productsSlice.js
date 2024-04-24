import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: ''
  },
  reducers: {
    updateAllProducts(state, action) {
      state.loading = false
      state.list= action.payload;
      state.error = ''
    },
    fetchProducts(state){
      state.loading = true
    },
    fetchProductsError(state, action){
      state.loading = false
      state.error = action.payload || 'something went wrong'
    }
  },
});

export const getAllProducts = ((state) => state.products.list)
export const getProductLoadingState = ((state) => state.products.loading)
export const getProductErrorState = ((state) => state.products.error)

export const { updateAllProducts, fetchProducts, fetchProductsError } = slice.actions;

export default slice.reducer;
