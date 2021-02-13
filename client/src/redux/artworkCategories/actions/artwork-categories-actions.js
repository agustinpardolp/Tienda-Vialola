import { types } from "../../../constants";

export const fetchArtworkCategories = (query) => {
  return {
    type: types.FETCH_ARTWORK_CATEGORIES,
    query,
  };
};

export const fetchArtworkCategoriesSuccess = (data) => {
  return {
    type: types.FETCH_ARTWORK_CATEGORIES_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchArtworkCategoriesFailure = (error) => ({
  type: types.FETCH_ARTWORK_CATEGORIES_FAILURE,
  payload: {
    error,
  },
});
