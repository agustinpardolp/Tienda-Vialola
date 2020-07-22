
import { types } from "../../../constants";

export const fetchArtworkCategories = () => {
  
  return {
    type: types.FETCH_ARTWORK_CATEGORIES,
    payload: {}
  };
};

export const fetchArtworkCategoriesSuccess = data => {
  return {
    type: types.FETCH_ARTWORK_CATEGORIES_SUCCESS,
    payload: {
      data
    }
  };
};
export const fetchArtworkCategoriesFailure = error => ({
  type: types.FETCH_ARTWORK_CATEGORIES_FAILURE,
  payload: {
    error
  }
});
