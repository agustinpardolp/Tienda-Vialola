import { types } from "../../../constants";

const home = (
  state = {
    homeImage: "",
    initialEffect: ""
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.UPDATE_HOME_IMAGE:
      return {
        ...state,
        homeImage: data
      };
    case types.SET_INITIAL_EFFECT:
      return {
        ...state,
        initialEffect: data
      };
    default:
      return state;
  }
};

export default home;
