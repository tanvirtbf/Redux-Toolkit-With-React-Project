import { configureStore, Tuple } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import wishListReducer from "./slices/wishListSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  // middleware: () => new Tuple(logger),
});
