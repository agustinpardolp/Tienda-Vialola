import { types } from "../../../constants";

const optionSidebar = (
  state = {
    data: {},
    status: "NOT_LOADED",
  },
  action
) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.RECEIVE_MENU_OPTION:
      return {
        ...state,
        data: data,
        status: "LOADED",
      };

    default:
      return state;
  }
};

export default optionSidebar;
