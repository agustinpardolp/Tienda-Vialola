import { types } from "../../../constants";

const products = (
  state = { 
    data: [],
    status:"NOT_LOADED"
   }, 
   action) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { ...state, status: "LOADING" };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: [...data],
        status: "LOADED"
        
      };
    case types.FETCH_PRODUCTS_FAILURE:
      return { ...state, status: "FAILED" };

    default:
      return state;
  }
};

export default products;
