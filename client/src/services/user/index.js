import axios from "axios";

import { API_ABOUT, API_LOGIN, API_LOGOUT } from "../../constants";

export const loginUser = async (userData) => {
  let { email, password } = userData;
  let response = await axios.post(API_LOGIN, {
    email: email,
    password: password,
  });

  if (response && response.status === 200) {
    localStorage.setItem("token_data", JSON.stringify(response.data));
    return response;
  } else throw Error("invalid user");
};

export const logoutUser = async () => {
  localStorage.removeItem("token_data");
  localStorage.removeItem("profile_data");
  localStorage.removeItem("profileSettings");
  let response = await axios.post(API_LOGOUT);
  return response;
};

export const getAbout = () => axios.get(`${API_ABOUT}`).then((res) => res);

export const editAbout = (data) => {
  let { aboutData } = data;
  return axios.put(API_ABOUT, aboutData).then((res) => res);
};
