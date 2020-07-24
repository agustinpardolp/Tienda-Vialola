import axios from "axios";

export const getProductBySerie = data => {
  let { serieName } = data;

  return axios.get(`/api/products/${serieName}`).then(res => res);
};


// export const getProductById = data => {
//   let { productId } = data;
//   return axios.get(`/api/products/${productId}`).then(res => res);
// };