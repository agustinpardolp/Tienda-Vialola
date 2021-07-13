import axios from "axios";

import { API_NEWS } from "../../constants";

export const getNews = () => axios.get(`${API_NEWS}`).then((res) => res);

export const editNews = (data) => {
    let { newsData } = data;
    return axios.put(API_NEWS, newsData).then((res) => res);
  };