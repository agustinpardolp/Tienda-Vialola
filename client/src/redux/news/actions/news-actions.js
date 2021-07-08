import { types } from "../../../constants";

export const fetchNews = (query) => {
  return {
    type: types.FETCH_NEWS,
    query,
  };
};

export const fetchNewsSuccess = (data) => {
  return {
    type: types.FETCH_NEWS_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchNewsFailure = () => ({
  type: types.FETCH_NEWS_FAILURE,
});

export const editNews = (newsData) => {
  return {
    type: types.EDIT_NEWS,
    newsData,
  };
};

export const editNewsSuccess = (data) => {
  return {
    type: types.EDIT_NEWS_SUCCESS,
    payload: {
      data,
    },
  };
};
export const editNewsFailure = () => ({
  type: types.EDIT_NEWS_FAILURE,
});
