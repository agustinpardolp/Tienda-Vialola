import { types, REQUEST_STATUS } from "../../../constants";

const products = (
  state = {
    data: [],
    status: REQUEST_STATUS.LOADED,
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_PRODUCTS_BY_SECTION:
      return { ...state, status: REQUEST_STATUS.LOADING };
    case types.FETCH_PRODUCTS_BY_SECTION_SUCCESS:
      return {
        ...state,
        data: [...data],
        status: REQUEST_STATUS.LOADED,
      };
    case types.FETCH_PRODUCTS_BY_SECTION_FAILURE:
      return { ...state, status: REQUEST_STATUS.FAILED };

    default:
      return state;
  }
};

export default products;
