import { types } from "../../../constants";

export const fetchProductsBySerie = serieName => {
  return {
    type: types.FETCH_PRODUCT_BY_SERIE,
    serieName
  };
};

export const fetchProductsBySerieSuccess = data => {
  return {
    type: types.FETCH_PRODUCT_BY_SERIE_SUCCESS,
    payload: {
      data
    }
  };
};
export const fetchProductsBySerieFailure = () => ({
  type: types.FETCH_PRODUCT_BY_SERIE_FAILURE
});
