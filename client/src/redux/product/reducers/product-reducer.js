import { types, REQUEST_STATUS } from "../../../constants";

const product = (
  state = {
    data: {},
    status: REQUEST_STATUS.NOT_LOADED,
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_PRODUCT_BY_ID:
      return { ...state, status: REQUEST_STATUS.LOADING };

    case types.FETCH_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        data: data,
        status: REQUEST_STATUS.LOADING,
      };
    case types.FETCH_PRODUCT_BY_ID_FAILURE:
      return { ...state, status: REQUEST_STATUS.FAILED };

    default:
      return state;
  }
};

export default product;
