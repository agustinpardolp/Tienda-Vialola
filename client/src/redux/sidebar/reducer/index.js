import { types } from "../../../constants";

const optionSidebar = (
  state = { 
    data: {},
    status: "not loaded"
   }, 
   action) => {
  const { payload: { data } = {} } = action;

  switch (action.type) {
    case types.RECEIVE_MENU_OPTION:

        return {
            ...state,
            data: data,
            status: "loaded"
          };

    default:
      return state;
  }
};

export default optionSidebar;