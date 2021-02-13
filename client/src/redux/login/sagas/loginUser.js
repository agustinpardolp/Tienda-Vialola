import { call, put } from "redux-saga/effects";
import { loginUser } from "../../../services/user";
import * as actions from "../actions/user-actions";

export default function* LoginUserSaga({ userData, history, pathname }) {
  try {
    const { data } = yield call(loginUser, userData); //getDetails, de la api
    yield put(actions.loginUserSuccess(data)); //si esta la data ok, envio a reducer con "data"
    history.push(pathname);
  } catch (error) {
    yield put(actions.loginUserFailure(error)); //ejecuto en caso de error
  }
}
