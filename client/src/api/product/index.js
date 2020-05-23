import axios from "axios";

export const getProductById = data => {
  let { productId } = data;
  console.log(data, "data api")
  return axios.get(`/api/products/${productId}`).then(res => res);
};
