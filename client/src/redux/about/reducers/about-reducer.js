import { types, REQUEST_STATUS } from "../../../constants";

const about = (
  state = {
    data: {},
    status: REQUEST_STATUS.NOT_LOADED,
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_ABOUT:
      return { ...state, status: REQUEST_STATUS.LOADING };
    case types.FETCH_ABOUT_SUCCESS:
      return {
        ...state,
        data: data,
        status: REQUEST_STATUS.LOADED,
      };
    case types.FETCH_ABOUT_FAILURE:
      return { ...state, status: REQUEST_STATUS.FAILED };

    default:
      return state;
  }
};

export default about;
