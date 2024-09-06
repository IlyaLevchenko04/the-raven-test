import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProductsList,
  GetProductsListParams,
} from "../../constants/remote-api/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (params: GetProductsListParams, thunkAPI) => {
    try {
      const response = await getProductsList({ ...params });

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
