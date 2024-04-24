import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    updateAllProducts(state, action){
      return action.payload
    }
  }
})

export const {updateAllProducts} = slice.actions

export default slice.reducer
