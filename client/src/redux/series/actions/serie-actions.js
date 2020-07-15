import { types } from "../../../constants";

export const fetchSeries= pathName => {
  return {
    type: types.FETCH_SERIES,
    pathName
    
  };
};

export const fetchSeriesSuccess = data => {
  return {
    type: types.FETCH_SERIES_SUCCESS,
    payload: {
      data
    }
  };
};
export const fetchSeriesFailure = () => ({
  type: types.FETCH_SERIES_FAILURE
});
