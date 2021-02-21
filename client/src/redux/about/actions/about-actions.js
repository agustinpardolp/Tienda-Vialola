import { types } from "../../../constants";

export const fetchAbout = (query) => {
  return {
    type: types.FETCH_ABOUT,
    query,
  };
};

export const fetchAboutSuccess = (data) => {
  return {
    type: types.FETCH_ABOUT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchAboutFailure = () => ({
  type: types.FETCH_ABOUT_FAILURE,
});

export const editAbout = (aboutData) => {
  return {
    type: types.EDIT_About,
    aboutData,
  };
};

export const editAboutSuccess = (data) => {
  return {
    type: types.EDIT_ABOUT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const editAboutFailure = () => ({
  type: types.EDIT_ABOUT_FAILURE,
});
