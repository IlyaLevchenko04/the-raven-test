import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../shared/types/product";

export interface ItemWithQuantity extends Item {
  quantity: number;
}

export interface CartState {
  cart: ItemWithQuantity[];
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
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ItemWithQuantity>) => {
      state.cart = [...state.cart, action.payload];
    },
    deleteFromCart: (state, action: PayloadAction<ItemWithQuantity>) => {
      state.cart.filter((item) => item._id !== action.payload._id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ type: "minus" | "plus"; id: string }>
    ) => {
      const { type, id } = action.payload;

      const currentItem = state.cart.find((item) => item._id === id);

      if (!currentItem) return;

      if (type === "minus") {
        if (currentItem.quantity - 1 === 0) {
          state.cart = state.cart.filter((item) => item._id !== id);
          return;
        }

        const newItem = { ...currentItem, quantity: currentItem.quantity - 1 };

        state.cart = state.cart.map((item) => {
          if (item._id !== id) return item;

          return newItem;
        });
      }

      if (type === "plus") {
        const newItem = { ...currentItem, quantity: currentItem.quantity + 1 };

        state.cart = state.cart.map((item) => {
          if (item._id !== id) return item;

          return newItem;
        });
      }
    },
  },
});

export const { addToCart, deleteFromCart, clearCart, changeQuantity } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
