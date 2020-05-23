import { types } from "../../../constants";

export const receiveCreatedCart = function(data) {
  return {
    type: types.RECEIVE_CREATED_CART,
    payload: {
      data
    }
  };
};