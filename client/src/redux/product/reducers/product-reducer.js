import { types } from "../../../constants";

const product = (
  state = { 
    data: {}
   }, 
   action) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_PRODUCT_BY_ID:
      return { ...state, status: "not loaded" };

    case types.FETCH_PRODUCT_BY_ID_SUCCESS:

      return {
        ...state,
        data: {...data},
        status: "loaded"
      };
    case types.FETCH_PRODUCT_BY_ID_FAILURE:
      return { ...state, status: "fail" };

    default:
      return state;
  }
};

export default product;