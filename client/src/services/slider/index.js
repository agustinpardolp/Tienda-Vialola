import axios from "axios";

import { API_SLIDER } from "../../constants";

export const getSlider = () => axios.get(`${API_SLIDER}`).then((res) => res);

export const editSlider = (data) => {
  let { sliderData } = data;
  return axios.put(API_SLIDER, sliderData).then((res) => res);
};

export const deleteSlider = (serieData) => {
  let { sliderId } = serieData;
  return axios.delete(`${API_SLIDER}${sliderId}`).then((res) => res);
};
