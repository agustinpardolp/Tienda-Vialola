import { RECEIVE_LOGGED_USER } from "../../constants";

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOGGED_USER:
      return { ...state, user: action.user };

    default:
      return state
  }
};
