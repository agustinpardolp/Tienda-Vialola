import { types } from "../../../constants";

const artworks = (
  state = { 
    data: [],
    status:"NOT_LOADED"
   }, 
   action) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_ARTWORKS:
      return { ...state, status: "LOADING" };
    case types.FETCH_ARTWORKS_SUCCESS:
      return {
        ...state,
        data: [...data],
        status: "LOADED"
        
      };
    case types.FETCH_ARTWORKS_FAILURE:
      return { ...state, status: "FAILED" };

    default:
      return state;
  }
};

export default artworks;
