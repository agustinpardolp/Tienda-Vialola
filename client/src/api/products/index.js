import axios from "axios";

export const getProducts = prodNameUrl => {
  const { pathName: name } = prodNameUrl;
  return axios.get(`/api/products/${name}/all`).then(res => res);
};
