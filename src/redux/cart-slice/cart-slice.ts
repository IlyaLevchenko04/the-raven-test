import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../shared/types/product";

export interface CartState {
  cart: Item[];
  cartQuantity: {
    id: string;
    quantity: number;
  }[];
}

const initialState: CartState = {
  cart: JSON.parse(localStorage.getItem("cart") as string) || [],
  cartQuantity: JSON.parse(localStorage.getItem("quantity") as string) || [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.cart = [...state.cart, action.payload];
    },
    deleteFromCart: (state, action: PayloadAction<Item>) => {
      state.cart.filter((item) => item._id !== action.payload._id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    addNewQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        quantity: number;
      }>
    ) => {
      state.cartQuantity = [...state.cartQuantity, action.payload];
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ type: "minus" | "plus"; id: string }>
    ) => {
      const { type, id } = action.payload;

      const currentItem = state.cartQuantity.find((item) => item.id === id);

      if (!currentItem) return;

      if (type === "minus") {
        if (currentItem.quantity - 1 === 0) {
          state.cart = state.cart.filter((item) => item._id !== id);
          return;
        }

        const newItem = { ...currentItem, quantity: currentItem.quantity - 1 };

        state.cartQuantity = state.cartQuantity.map((item) => {
          if (item.id !== id) return item;

          return newItem;
        });
      }

      if (type === "plus") {
        const newItem = { ...currentItem, quantity: currentItem.quantity + 1 };

        state.cartQuantity = state.cartQuantity.map((item) => {
          if (item.id !== id) return item;

          return newItem;
        });
      }
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  clearCart,
  changeQuantity,
  addNewQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
