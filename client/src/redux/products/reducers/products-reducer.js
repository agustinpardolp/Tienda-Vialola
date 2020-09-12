import { types } from "../../../constants";

const products = (
  state = { 
    data: [],
    status:"NOT_LOADED"
   }, 
   action) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_PRODUCTS_BY_SECTION:
      return { ...state, status: "LOADING" };
    case types.FETCH_PRODUCTS_BY_SECTION_SUCCESS:
      return {
        ...state,
        data: [...data],
        status: "LOADED"
        
      };
    case types.FETCH_PRODUCTS_BY_SECTION_FAILURE:
      return { ...state, status: "FAILED" };

    default:
      return state;
  }
};

export default products;
