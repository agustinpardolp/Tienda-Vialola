import { call, put } from "redux-saga/effects";
import { editSerie } from "../../../../services/series/index";
import * as actions from "../../actions/serie-actions";

export default function* editSerieSaga(serieData) {
  try {
    const { data } = yield call(editSerie, serieData); //getDetails, de la api
    yield put(actions.editSerieSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.editSerieFailure(error)); //ejecuto en caso de error
  }
}
