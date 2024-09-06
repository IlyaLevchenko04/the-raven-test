import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  cart: string[];
}

const initialState: CartState = {
  cart: JSON.parse(localStorage.getItem("cart") as string) || [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      state.cart.filter((item) => item !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
