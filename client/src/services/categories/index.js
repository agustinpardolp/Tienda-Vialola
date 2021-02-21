import axios from "axios";
import { API_CATEGORIES } from "../../constants";
export const getArtworkCategories = (queryParam) => {
  let { query } = queryParam;
  return axios.get(`${API_CATEGORIES}${query}`).then((res) => res);
};

export const updateArtworkCategories = (data) =>
  axios.put("/api/store/details", data, {});
