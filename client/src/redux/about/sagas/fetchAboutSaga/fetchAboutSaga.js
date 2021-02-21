import { call, put } from "redux-saga/effects";

import { getAbout } from "../../../../services/user";
import * as actions from "../../actions/about-actions";

export default function* fetchAboutSaga() {
  try {
    const { data } = yield call(getAbout); //IMP: cuando hay parametros, se pasan como segundo argumento en el metodo CALL
    yield put(actions.fetchAboutSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.fetchAboutFailure(error)); //ejecuto en caso de error
  }
}
