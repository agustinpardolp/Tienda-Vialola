import types  from '../actions/types';


const notification = (state = {}, { type, payload = {} }) => {
  switch (type) {
    case types.SHOW_NOTIFICATION:
      return { message: payload.message, msgType: payload.msgType };
    case types.RESET_NOTIFICATION:
      return { message: null, msgType: null };
    default:
      return state;
  }
};

export default notification;