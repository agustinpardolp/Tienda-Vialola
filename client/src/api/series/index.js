import axios from "axios";

export const getSeries= (data) => {
  const { pathName:categoryName} = data;
  return axios
    .get(`/api/series/${categoryName}`)
    .then(res => res)
};
