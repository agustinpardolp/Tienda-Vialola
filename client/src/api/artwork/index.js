import axios from "axios";

export const getArtworkBySerie = data => {
  let { serieName } = data;

  return axios.get(`/api/products/${serieName}`).then(res => res);
};


// export const getProductById = data => {
//   let { productId } = data;
//   console.log(data, "data api")
//   return axios.get(`/api/products/${productId}`).then(res => res);
// };