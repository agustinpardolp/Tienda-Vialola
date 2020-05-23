import { types } from "../../../constants";

export const fetchProducts = pathName => {
  return {
    type: types.FETCH_PRODUCTS,
    pathName
    
  };
};

export const fetchProductsSuccess = data => {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: {
      data
    }
  };
};
export const fetchProductsFailure = () => ({
  type: types.FETCH_PRODUCTS_FAILURE
});
