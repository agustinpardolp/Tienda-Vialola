import { types } from "../../../constants";

export const fetchSeries = (query) => {
  return {
    type: types.FETCH_SERIES,
    query,
  };
};

export const fetchSeriesSuccess = (data) => {
  return {
    type: types.FETCH_SERIES_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchSeriesFailure = () => ({
  type: types.FETCH_SERIES_FAILURE,
});

export const editSerie = (serieData) => {
  debugger;
  return {
    type: types.EDIT_SERIE,
    serieData,
  };
};

export const editSerieSuccess = (data) => {
  
  return {
    type: types.EDIT_SERIE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const editSerieFailure = () => ({
  type: types.EDIT_SERIE_FAILURE,
});

export const deleteSerie = (serieId) => {
  return {
    type: types.DELETE_SERIE,
    serieId,
  };
};

export const deleteSerieSuccess = (data) => {
  return {
    type: types.DELETE_SERIE_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteSerieFailure = () => ({
  type: types.DELETE_SERIE_FAILURE,
});

export const createSerie= (serieData) => {
  debugger;
  return {
    type: types.CREATE_SERIE,
    serieData,
  };
};

export const createSerieSuccess = (data) => {
  return {
    type: types.CREATE_SERIE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const createSerieFailure = () => ({
  type: types.CREATE_SERIE_FAILURE,
});
