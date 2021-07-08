import { types } from "../../../constants";

export const fetchHomeOptions = (query) => {
  return {
    type: types.FETCH_HOME_OPTIONS,
    query,
  };
};

export const fetchHomeOptionsSuccess = (data) => {
  return {
    type: types.FETCH_HOME_OPTIONS_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchHomeOptionsFailure = () => ({
  type: types.FETCH_HOME_OPTIONS_FAILURE,
});

export const editHomeOptions= (homeOptionsData) => {
  return {
    type: types.EDIT_HOME_OPTIONS,
    homeOptionsData,
  };
};

export const editHomeOptionsSuccess = (data) => {
  
  return {
    type: types.EDIT_HOME_OPTIONS_SUCCESS,
    payload: {
      data,
    },
  };
};
export const editHomeOptionsFailure = () => ({
  type: types.EDIT_HOME_OPTIONS_FAILURE,
});

export const deleteHomeOptions= (optionId) => {
  return {
    type: types.DELETE_HOME_OPTIONS,
    optionId,
  };
};

export const deleteHomeOptionsSuccess = (data) => {
  return {
    type: types.DELETE_HOME_OPTIONS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteHomeOptionsFailure = () => ({
  type: types.DELETE_HOME_OPTIONS_FAILURE,
});
