import axios from "axios";
import { API_SERIES } from "../../constants";

export const getSeries = (queryParam) => {
  const { query } = queryParam;
  return axios.get(`${API_SERIES}${query}`).then((res) => res);
};
