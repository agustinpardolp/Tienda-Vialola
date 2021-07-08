import { call, put } from "redux-saga/effects";

import { editHomeOptions } from "../../../../services/homeOptions";
import * as actions from "../../actions";

export default function* editHomeOptionsSaga(homeOptionsData) {
  try {
    const { data } = yield call(editHomeOptions, homeOptionsData); //getDetails, de la api
    yield put(actions.editHomeOptionsSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.editHomeOptionsFailure(error)); //ejecuto en caso de error
  }
}
