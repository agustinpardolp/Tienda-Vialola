import axios from "axios";
import { API_CATEGORIES } from "../../constants";
export const getArtworkCategories = (queryParam) => {
  let { query } = queryParam;
  debugger;
  let type = "paints";
  let price = 1000;
  console.log(query);
  return axios.get(`${API_CATEGORIES}${query}`).then((res) => res);
};

export const updateArtworkCategories = (data) =>
  axios.put("/api/store/details", data, {});
