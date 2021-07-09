import axios from "axios";

import { API_ARTWORKS } from "../../constants";

export const getArtworkBySerie = (data) => {
  let { serieName, categoryName } = data;
  return axios
    .get(`${API_ARTWORKS}${categoryName}/${serieName}`)
    .then((res) => res);
};

export const editArtwork = (data) => {
  let { artworkData } = data;
  return axios.put(API_ARTWORKS, artworkData).then((res) => res);
};
export const deleteArtwork = (artworkData) => {
  let { artworkId, serieId } = artworkData;
  return axios
    .delete(`${API_ARTWORKS}${artworkId}`, {
      data: {
        serieId,
      },
    })
    .then((res) => res);
};

export const createArtwork = (data) => {
  let { artworkData } = data;
  return axios.post(API_ARTWORKS, artworkData).then((res) => res);
};

export const createArtworkClientConsult = ({ dataConsult }) => {
  axios.post(`${API_ARTWORKS}client/consult`, dataConsult).then((res) => res);
};
