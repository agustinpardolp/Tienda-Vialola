import { types } from "../../../constants";

export const fetchArtworks = (pathName) => {
  return {
    type: types.FETCH_ARTWORKS,
    pathName,
  };
};

export const fetchArtworksSuccess = (data) => {
  return {
    type: types.FETCH_ARTWORKS_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchArtworksFailure = () => ({
  type: types.FETCH_ARTWORKS_FAILURE,
});

export const fetchArtworksBySerie = (serieName) => {
  return {
    type: types.FETCH_ARTWORKS_BY_SERIE,
    serieName,
  };
};

export const fetchArtworksBySerieSuccess = (data) => {
  return {
    type: types.FETCH_ARTWORKS_BY_SERIE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchArtworksBySerieFailure = () => ({
  type: types.FETCH_ARTWORKS_BY_SERIE_FAILURE,
});
