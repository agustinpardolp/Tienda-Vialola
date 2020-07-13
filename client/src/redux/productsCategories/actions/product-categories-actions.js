
import { types } from "../../../constants";

export const fetchProductsCategories = () => {
  return {
    type: types.FETCH_PRODUCTS_CATEGORIES,
    payload: {}
  };
};

export const fetchProductsCategoriesSuccess = data => {
  return {
    type: types.FETCH_PRODUCTS_CATEGORIES_SUCCESS,
    payload: {
      data
    }
  };
};
export const fetchProductsCategoriesFailure = error => ({
  type: types.FETCH_PRODUCTS_CATEGORIES_FAILURE,
  payload: {
    error
  }
});
