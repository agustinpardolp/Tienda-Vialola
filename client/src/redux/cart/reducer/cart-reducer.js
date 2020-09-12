import { types } from "../../../constants";

const cart = (
    state = {
        data: []
    },
    action) => {
    const { payload: { data } = {} } = action;
    console.log("REDUCER", data)
    switch (action.type) {
        case types.RECEIVE_CREATED_CART:
            return {
                ...state,
                data: [...data],
            }
        default:
            return state
    }

}

export default cart;