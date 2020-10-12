import { types, REQUEST_STATUS } from "../../../constants";

const series = (
  state = {
    data: [],
    status: REQUEST_STATUS.NOT_LOADED,
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_SERIES:
      return { ...state, status: REQUEST_STATUS.LOADING };
    case types.FETCH_SERIES_SUCCESS:
      return {
        ...state,
        data: [...data],
        status: REQUEST_STATUS.LOADED,
      };
    case types.FETCH_SERIES_FAILURE:
      return { ...state, status: REQUEST_STATUS.FAILED };

    default:
      return state;
  }
};

export default series;
