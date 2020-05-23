import { RECEIVE_LOGGED_USER, USER_LOGOUT } from "../../constants";
import axios from "axios";

export const receiveLoggedUser = function(user) {
  // console.log("2) enstoy en la action", user)
  return {
    type: RECEIVE_LOGGED_USER,
    user
  };
};
export const loginUser = user => dispatch => {
  return axios
    .post("api/users/login", user)
    .then(res => res.data)
    .then(user => {
      dispatch(receiveLoggedUser(user));
      return user;
    });
};

export const fetchloggedUser = () => dispatch => {
  axios
    .get("api/users/logged")
    .then(res =>  res.data)
    .then(user => {
      console.log("1) Soy el resultado del axios", user);
      dispatch(receiveLoggedUser(user));
    });
};
