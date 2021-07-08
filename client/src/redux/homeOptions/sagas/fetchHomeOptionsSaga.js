import { call, put } from "redux-saga/effects";

import { getHomeOptions } from "../../../services/homeOptions";
import * as actions from "../actions";

export default function* fetchHomeOptionsSaga() {
  try {
    const { data } = yield call(getHomeOptions); //getDetails, de la api
  
    yield put(actions.fetchHomeOptionsSuccess(data)); //si esta la data ok, envio a reducer con "data"
    
  } catch (error) {

    yield put(actions.fetchHomeOptionsFailure(error)); //ejecuto en caso de error
  }
}

  