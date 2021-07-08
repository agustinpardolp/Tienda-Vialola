import axios from "axios";

import { API_HOME_OPTIONS } from "../../constants";

export const getHomeOptions = () => axios.get(`${API_HOME_OPTIONS}`).then((res) => res);

export const editHomeOptions = (data) => {
  let { optionId } = data;
  return axios.put(API_HOME_OPTIONS, optionId).then((res) => res);
};

export const deleteHomeOptions = (data) => {
  let { optionId } = data;
  return axios.delete(`${API_HOME_OPTIONS}${optionId}`).then((res) => res);
};
