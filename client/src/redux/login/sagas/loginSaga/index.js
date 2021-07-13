import { takeLatest } from "redux-saga/effects";
import LoginUserSaga from "./loginUser";
import { types } from "../../../../constants";

export default function* loginUserWatcher() {
  yield takeLatest(types.RECEIVE_LOGGED_USER, LoginUserSaga);
}
