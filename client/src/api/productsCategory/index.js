import axios from "axios";

export const getProductsCategories = () => {
  return axios
    .get("api/products/categories")
    .then(res => res)
};

export const updateProductsCategories = data =>
  axios.put("/api/store/details", data, {});
