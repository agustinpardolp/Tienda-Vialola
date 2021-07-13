import axios from "axios";

import { API_SERIES } from "../../constants";

export const getSeries = (queryParam) => {
  const { query } = queryParam;
  console.log("QUERY", query)
  return axios.get(`${API_SERIES}${query}`).then((res) => res);
};

export const getSeriesByCategory = (category) => axios.get(`${API_SERIES}${category}`).then((res) => res);


export const editSerie = (data) => {
  let {serieData} = data;
  return axios.put(API_SERIES, serieData).then((res) => res);
};

export const deleteSerie = (serieData)=>{
  let {serieId} = serieData;
  return axios.delete(`${API_SERIES}${serieId}`).then((res) => res);
}

export const createSerie = (data) => {
  let {serieData} = data;
  return axios.post(API_SERIES, serieData).then((res) => res);
};
