// import { types } from "../../../constants";
import { types } from "../../../constants";

export const receiveMenuOption = function(data) {

  return {
    type: types.RECEIVE_MENU_OPTION,
    payload: {
      data
    }
  };
};
// export const receiveMenuOption = data => ({
//   type: types.RECEIVE_MENU_OPTION,
//   payload: {
//     data
//   }
// });
