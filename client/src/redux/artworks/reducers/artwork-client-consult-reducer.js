import { types, REQUEST_STATUS } from "../../../constants";

const clientConsult = (
  state = {
    data: {},
    status: REQUEST_STATUS.NOT_LOADED,
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.CREATE_CLIENT_CONSULT:
      return { ...state, status: REQUEST_STATUS.LOADING };
    case types.CREATE_CLIENT_CONSULT_SUCCESS:
      return {
        ...state,
        status: REQUEST_STATUS.LOADED,
      };
    case types.CREATE_CLIENT_CONSULT_FAILURE:
      return { ...state, status: REQUEST_STATUS.FAILED };

    default:
      return state;
  }
};

export default clientConsult;
