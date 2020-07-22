import axios from "axios";

export const getArtworks = prodNameUrl => {
  const { pathName: name } = prodNameUrl;
  return axios.get(`/api/products/${name}/all`).then(res => res);
};
