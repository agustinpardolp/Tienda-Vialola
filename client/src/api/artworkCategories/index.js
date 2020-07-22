import axios from "axios";

export const getArtworkCategories = () => {
  console.log("entre API")
  return axios
    .get("api/products/categories")
    .then(res => res)
};

export const updateArtworkCategories = data =>
  axios.put("/api/store/details", data, {});
