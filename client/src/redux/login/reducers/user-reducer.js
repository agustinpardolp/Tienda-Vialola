import { types, REQUEST_STATUS } from "../../../constants";

const user = (
  state = {
    data: {},
    status: REQUEST_STATUS.NOT_LOADED,
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.RECEIVE_LOGGED_USER:
      return { ...state, status: REQUEST_STATUS.LOADING };

    case types.RECEIVE_LOGGED_USER_SUCCESS:
      return {
        ...state,
        data: data,
        status: REQUEST_STATUS.LOADING,
      };
    case types.RECEIVE_LOGGED_USER_FAILURE:
      return { ...state, status: REQUEST_STATUS.FAILED };
    case types.SEND_USER_LOGOUT:
      return {
        data: {},
        status: REQUEST_STATUS.LOADED,
      };

    default:
      return state;
  }
};

export default user;
