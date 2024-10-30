import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
  },
});
