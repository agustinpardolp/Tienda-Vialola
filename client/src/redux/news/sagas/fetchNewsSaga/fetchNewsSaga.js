import { call, put } from "redux-saga/effects";

import { getNews } from "../../../../services/news";
import * as actions from "../../actions/news-actions";

export default function* fetchNewsSaga() {
  try {
    const { data } = yield call(getNews); //IMP: cuando hay parametros, se pasan como segundo argumento en el metodo CALL
    yield put(actions.fetchNewsSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.fetchNewsFailure(error)); //ejecuto en caso de error
  }
}
