import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    fetchProductLoading(state){
      state.loading = true
    },
    updateAllProducts(state, action){
      state.list = action.payload
      state.loading = false
    },
    fetchProductError(state, action){
      state.loading = false
      state.error = action.payload || 'Something Went Wrong!!!'
    }
  }
})

export const {updateAllProducts, fetchProductLoading, fetchProductError} = slice.actions

export default slice.reducer
