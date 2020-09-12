import axios from "axios";

export const getArtworks = prodNameUrl => {
  const { pathName: name } = prodNameUrl;
  return axios.get(`/api/artworks/${name}/all`).then(res => res);
};
