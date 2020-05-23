import {put} from "redux-saga/effects";
import * as actions from "../actions/cart-actions";

export default function* receiveCreatedCartSaga (data) {
    // console.log("data saga", data)
  yield put(actions.receiveCreatedCart(data));
}