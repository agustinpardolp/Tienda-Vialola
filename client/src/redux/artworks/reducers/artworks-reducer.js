import { types, REQUEST_STATUS } from "../../../constants";

const artworks = (
  state = {
    data: [],
    status: REQUEST_STATUS.NOT_LOADED,
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_ARTWORKS:
      return { ...state, status: REQUEST_STATUS.LOADING };
    case types.FETCH_ARTWORKS_SUCCESS:
      return {
        ...state,
        data: [...data],
        status: REQUEST_STATUS.LOADED,
      };
    case types.FETCH_ARTWORKS_FAILURE:
      return { ...state, status: REQUEST_STATUS.FAILED };

    default:
      return state;
  }
};

export default artworks;
