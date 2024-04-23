import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import wishListReducer from "./slices/wishListSlice";


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
});
