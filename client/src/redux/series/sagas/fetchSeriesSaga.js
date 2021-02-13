import { call, put } from "redux-saga/effects";
import { getSeries } from "../../../services/series";
import * as actions from "../actions/serie-actions";

export default function* fetchSeriesSaga(queryParam) {
  try {
    const { data } = yield call(getSeries, queryParam); //getDetails, de la api
  
    yield put(actions.fetchSeriesSuccess(data)); //si esta la data ok, envio a reducer con "data"
    
  } catch (error) {

    yield put(actions.fetchSeriesFailure(error)); //ejecuto en caso de error
  }
}

  