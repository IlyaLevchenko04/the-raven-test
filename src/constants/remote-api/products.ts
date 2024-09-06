import axios from "axios";

axios.defaults.baseURL = "https://products-api-umhe.onrender.com/api";

export interface GetProductsListParams {
  filter?: "ASC_DATE" | "ACS_PRICE" | "DESC_PRICE" | "DESC_DATE";
  limit?: string;
  currency?: "EUR" | "USD" | "UAH";
  page?: string;
}

export const getProductsList = async (params: GetProductsListParams) => {
  const response = await axios.get(
    `/products?filter=${params.filter}&limit=${params.limit}&currency=${params.currency}&page=${params.page}`
  );

  return response;
};
