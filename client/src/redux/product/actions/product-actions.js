import { types } from "../../../constants";

export const fetchProductsById = productId => {
  return {
    type: types.FETCH_PRODUCT_BY_ID,
    productId
  };
};

export const fetchProductsByIdSuccess = data => {
  return {
    type: types.FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: {
      data
    }
  };
};
export const fetchProductsByIdFailure = () => ({
  type: types.FETCH_PRODUCT_BY_ID_FAILURE
});
