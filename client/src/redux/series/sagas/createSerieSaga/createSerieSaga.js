import { call, put } from "redux-saga/effects";
import { createSerie } from "../../../../services/series/";
import * as actions from "../../actions/serie-actions";

export default function* createSerieSaga(serieData) {
  try {
    const { data } = yield call(createSerie, serieData); //getDetails, de la api
    yield put(actions.createSerieSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.createSerieFailure(error)); //ejecuto en caso de error
  }
}
