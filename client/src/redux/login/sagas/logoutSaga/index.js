import { takeLatest } from "redux-saga/effects";
import logoutUserSaga from "./logoutUser";
import { types } from "../../../../constants";

export default function* LogoutUserSaga() {
  yield takeLatest(types.SEND_USER_LOGOUT, logoutUserSaga);
}
