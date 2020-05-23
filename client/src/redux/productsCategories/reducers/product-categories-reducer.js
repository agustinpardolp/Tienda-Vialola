import { types } from "../../../constants";

const productsCategories = (
  state = {
    data: []
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_PRODUCTS_CATEGORIES:
      return { ...state, status: "not loaded" };

    case types.FETCH_PRODUCTS_CATEGORIES_SUCCESS:
      return {
        
        ...state,
        data: [ ...data ],
        status: "loaded"
      };
    case types.FETCH_PRODUCTS_CATEGORIES_FAILURE:
      return { ...state, status: "fail" };

    default:
      return state;
  }
};

export default productsCategories;
