import { call, put } from "redux-saga/effects";
import { deleteSerie } from "../../../../services/series/index";
import * as actions from "../../actions/serie-actions";

export default function* deleteSerieSaga(serieData) {
  try {
    const { data } = yield call(deleteSerie, serieData); 
    yield put(actions.deleteSerieSuccess(data)); 
  } catch (error) {
    yield put(actions.deleteSerieFailure(error)); 
  }
}
