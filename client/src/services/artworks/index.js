import axios from "axios";
import { API_ARTWORKS } from "../../constants";
export const getArtworks = (queryParam) => {
  const { query } = queryParam;
  let result = axios.get(`${API_ARTWORKS}${query}`).then((res) => {
    return res;
  });

  return result;
};
