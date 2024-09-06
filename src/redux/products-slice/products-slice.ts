import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../shared/types/product";
import { fetchProducts } from "./products-operations";

export interface CounterState {
  items: Item[];
  isLoading: boolean;
  error: { message: string | null };
}

const initialState: CounterState = {
  items: [],
  isLoading: false,
  error: {
    message: null,
  },
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.fulfilled,
        (state: CounterState, action: PayloadAction<Item[]>) => {
          state.items = [...action.payload];
          state.isLoading = !state.isLoading;
        }
      )
      .addCase(fetchProducts.rejected, (state: CounterState, action) => {
        state.isLoading = false;
        state.error.message = action.payload as string;
      });
  },
});

export const productsReducer = counterSlice.reducer;
