import { types } from "../../../constants";

const productsCategories = (
  state = {
    data: [],
    status: "NOT_LOADED"
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_PRODUCTS_CATEGORIES:
      return { ...state, status: "LOADING" };

    case types.FETCH_PRODUCTS_CATEGORIES_SUCCESS:
      return {
        
        ...state,
        data: [ ...data ],
        status: "LOADED"
      };
    case types.FETCH_PRODUCTS_CATEGORIES_FAILURE:
      return { ...state, status: "FAILED" };

    default:
      return state;
  }
};

export default productsCategories;
