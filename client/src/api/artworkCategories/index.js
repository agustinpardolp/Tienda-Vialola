import axios from "axios";

export const getArtworkCategories = () => {
  return axios
    .get("api/artworks/categories")
    .then(res => res)
};

export const updateArtworkCategories = data =>
  axios.put("/api/store/details", data, {});
