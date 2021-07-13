import { call, put } from "redux-saga/effects";
import { logoutUser } from "../../../../services/user";
import * as actions from "../../actions/user-actions";

export default function* logoutUserSaga({ history, pathname }) {
  yield call(logoutUser);
  yield put(actions.logoutUserSuccess());
  history.push(pathname);
}
