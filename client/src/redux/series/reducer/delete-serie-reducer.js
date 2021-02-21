import { types, REQUEST_STATUS } from "../../../constants";

const deleteSeries = (
  state = {
    data: {},
    status: REQUEST_STATUS.NOT_LOADED,
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.DELETE_SERIE:
      return { ...state, status: REQUEST_STATUS.LOADING };
    case types.FETCH_SERIES_SUCCESS:
      return {
        ...state,
        data: data,
        status: REQUEST_STATUS.LOADED,
      };
    case types.DELETE_SERIE_SUCCESS:
      return { ...state, status: REQUEST_STATUS.FAILED };
      case types.FETCH_SERIES_BY_CATEGORY:
        return { ...state, status: REQUEST_STATUS.LOADING };
      case types.FETCH_SERIES_BY_CATEGORY_SUCCESS:
        return {
          ...state,
          data: data,
          status: REQUEST_STATUS.LOADED,
        };
      case types.DELETE_SERIE_FAILURE:
        return { ...state, status: REQUEST_STATUS.FAILED };
  
    default:
      return state;
  }
};

export default deleteSeries;
