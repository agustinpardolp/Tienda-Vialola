import {put} from "redux-saga/effects";
import * as actions from "../actions/cart-actions";

export default function* receiveCreatedCartSaga (data) {
  yield put(actions.receiveCreatedCart(data));
}