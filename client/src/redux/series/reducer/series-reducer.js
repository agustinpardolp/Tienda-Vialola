import { types } from "../../../constants";

const series = (
  state = { 
    data: [],
    status:"NOT_LOADED"
   }, 
   action) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.FETCH_SERIES:
      return { ...state, status: "LOADING" };
    case types.FETCH_SERIES_SUCCESS:
      return {
        ...state,
        data: [...data],
        status: "LOADED"
        
      };
    case types.FETCH_SERIES_FAILURE:
      return { ...state, status: "FAILED" };

    default:
      return state;
  }
};

export default series;