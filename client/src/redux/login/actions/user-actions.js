import { types } from "../../../constants";

export const loginUser = (userData, history, pathname) => {
  return {
    type: types.RECEIVE_LOGGED_USER,
    userData,
    history,
    pathname,
  };
};

export const loginUserSuccess = (data) => {
  return {
    type: types.RECEIVE_LOGGED_USER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const loginUserFailure = () => ({
  type: types.RECEIVE_LOGGED_USER_FAILURE,
});

export const logoutUser = (history, pathname) => {
  return {
    type: types.SEND_USER_LOGOUT,
    history,
    pathname,
  };
};
export const logoutUserSuccess = () => {
  return {
    type: types.SEND_USER_LOGOUT_SUCCESS,
  };
};
