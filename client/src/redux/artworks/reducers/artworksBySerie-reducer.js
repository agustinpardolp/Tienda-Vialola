import { types } from "../../../constants";

const artworksBySerie = (
  state = { 
    data: [],
    status: "NOT_LOADED"
   }, 
   action) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_ARTWORKS_BY_SERIE:
      return { ...state, status: "LOADING" };

    case types.FETCH_ARTWORKS_BY_SERIE_SUCCESS:

      return {
        ...state,
        data: [...data],
        status: "LOADED"
      };
    case types.FETCH_ARTWORKS_BY_SERIE_FAILURE:
      return { ...state, status: "FAILED" };

    default:
      return state;
  }
};

export default artworksBySerie;