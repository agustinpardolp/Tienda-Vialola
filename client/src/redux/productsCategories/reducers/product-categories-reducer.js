import { types, REQUEST_STATUS } from "../../../constants";

const productsCategories = (
  state = {
    data: [],
    status: REQUEST_STATUS.NOT_LOADED,
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_PRODUCTS_CATEGORIES:
      return { ...state, status: REQUEST_STATUS.LOADING };

    case types.FETCH_PRODUCTS_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: [...data],
        status: REQUEST_STATUS.LOADED,
      };
    case types.FETCH_PRODUCTS_CATEGORIES_FAILURE:
      return { ...state, status: REQUEST_STATUS.FAILED };

    default:
      return state;
  }
};

export default productsCategories;
