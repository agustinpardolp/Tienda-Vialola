import { types } from "../../../constants";

export const fetchProductById = (productId) => {
  return {
    type: types.FETCH_PRODUCT_BY_ID,
    productId,
  };
};

export const fetchProductByIdSuccess = (data) => {
  return {
    type: types.FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchProductByIdFailure = () => ({
  type: types.FETCH_PRODUCT_BY_ID_FAILURE,
});
