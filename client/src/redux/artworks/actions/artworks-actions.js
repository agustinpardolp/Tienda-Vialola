import { types } from "../../../constants";

export const fetchArtworks = (query) => {
  return {
    type: types.FETCH_ARTWORKS,
    query,
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

export const editArtwork = (artworkData) => {
  return {
    type: types.EDIT_ARTWORK,
    artworkData,
  };
};

export const editArtworkSuccess = (data) => {
  return {
    type: types.EDIT_ARTWORK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const editArtworkFailure = () => ({
  type: types.EDIT_ARTWORK_FAILURE,
});

export const deleteArtwork = (artworkId) => {
  return {
    type: types.DELETE_ARTWORK,
    artworkId,
  };
};

export const deleteArtworkSuccess = (data) => {
  return {
    type: types.DELETE_ARTWORK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteArtworkFailure = () => {
  return {
    type: types.DELETE_ARTWORK_FAILURE
  };
 
};

export const createArtwork= (artworkData) => {
  return {
    type: types.CREATE_ARTWORK,
    artworkData,
  };
};

export const createArtworkSuccess = (data) => {
  return {
    type: types.CREATE_ARTWORK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const createArtworkFailure = () => ({
  type: types.CREATE_ARTWORK_FAILURE,
});

