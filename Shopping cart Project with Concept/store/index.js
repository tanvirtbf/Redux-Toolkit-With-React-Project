import { configureStore, Tuple } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import wishListReducer from "./slices/wishListSlice";

function logger(store) {
  return function (next) {
    return function (action) {
      console.log('store : ', store);
      console.log('next : ', next);
      console.log('action : ', action);
    };
  };
}

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware: () => new Tuple(logger)
});
