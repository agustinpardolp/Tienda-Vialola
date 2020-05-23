import { types } from "../../../constants";

const products = (
  state = { 
    data: [],
    status:"not loaded"
   }, 
   action) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { ...state, status: "loading" };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: [...data],
        status: "loaded"
        
      };
    case types.FETCH_PRODUCTS_FAILURE:
      return { ...state, status: "fail" };

    default:
      return state;
  }
};

export default products;
