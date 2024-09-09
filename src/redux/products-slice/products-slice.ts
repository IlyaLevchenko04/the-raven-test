import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../shared/types/product";
import { fetchProducts } from "./products-operations";

export interface ProductsState {
  items: Item[];
  isLoading: boolean;
  currency: "UAH" | "EUR" | "USD";
  error: { message: string | null };
}

const initialState: ProductsState = {
  items: [],
  isLoading: false,
  currency: JSON.parse(localStorage.getItem("currency") as string) || "UAH",
  error: {
    message: null,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<"UAH" | "EUR" | "USD">) => {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.fulfilled,
        (state: ProductsState, action: PayloadAction<Item[]>) => {
          state.items = [...action.payload];
          state.isLoading = !state.isLoading;
        }
      )
      .addCase(fetchProducts.rejected, (state: ProductsState, action) => {
        state.isLoading = false;
        state.error.message = action.payload as string;
      });
  },
});

export const { setCurrency } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
